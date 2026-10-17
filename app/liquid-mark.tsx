'use client';
/* oxlint-disable next/no-img-element */
import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

// The supplied Nine.ai mark is the sole shape source. No geometry library needed.
const vertex = `attribute vec2 position; varying vec2 uv;
void main(){uv=vec2(position.x*.5+.5,.5-position.y*.5);gl_Position=vec4(position,0.,1.);}`;
const fragment = `precision highp float;
varying vec2 uv; uniform sampler2D shape; uniform float time; uniform vec2 pointer;
float distanceAt(vec2 p){return (dot(texture2D(shape,p).rg,vec2(256./257.,1./257.))-.5)*128.;}
void main(){
  vec2 p=uv;
  p.x+=sin(p.y*5.+time*.45)*.003;
  float d=distanceAt(p); float alpha=smoothstep(-.65,.65,d);
  if(alpha<.005){gl_FragColor=vec4(0.);return;}
  float px=3./320.;
  vec2 gradient=vec2(distanceAt(p+vec2(px,0.))-distanceAt(p-vec2(px,0.)),distanceAt(p+vec2(0.,px))-distanceAt(p-vec2(0.,px)))/6.;
  float roundness=clamp(d/12.,0.,1.);
  vec3 n=normalize(vec3(-gradient*sqrt(max(0.,1.-roundness*roundness)),.15+roundness*.85));
  vec3 view=normalize(vec3(pointer*.32,1.));
  vec3 reflected=reflect(-view,n);
  float ribbon=sin(reflected.x*3.7+reflected.y*4.2+p.y*4.0+time*.32);
  float silver=smoothstep(.30,.84,ribbon);
  float thinLight=pow(max(0.,sin(reflected.x*6.-reflected.y*3.+time*.22)),24.);
  vec3 blue=mix(vec3(.015,.075,.28),vec3(.018,.32,.95),.48+.5*sin(p.y*5.+reflected.y*2.+time*.18));
  vec3 color=mix(blue,vec3(.78,.89,1.),silver*.88);
  vec3 lamp=normalize(vec3(-.6+pointer.x,.75+pointer.y,1.));
  float specular=pow(max(0.,dot(n,normalize(lamp+view))),52.);
  float fresnel=pow(1.-max(dot(n,view),0.),2.);
  color+=vec3(.64,.78,1.)*(thinLight*.12+specular*.7+fresnel*.3);
  color*=.8+.2*max(dot(n,lamp),0.);
  gl_FragColor=vec4(color,alpha);
}`;

function distanceField(mask: Uint8ClampedArray, size: number, inside: boolean) {
  const result = new Float32Array(size * size);
  for (let i = 0; i < result.length; i++)
    result[i] = mask[i * 4 + 3] > 100 === inside ? 0 : size;
  for (let y = 0; y < size; y++)
    for (let x = 0; x < size; x++) {
      const i = y * size + x;
      if (x) result[i] = Math.min(result[i], result[i - 1] + 1);
      if (y) result[i] = Math.min(result[i], result[i - size] + 1);
      if (x && y)
        result[i] = Math.min(result[i], result[i - size - 1] + Math.SQRT2);
      if (x < size - 1 && y)
        result[i] = Math.min(result[i], result[i - size + 1] + Math.SQRT2);
    }
  for (let y = size - 1; y >= 0; y--)
    for (let x = size - 1; x >= 0; x--) {
      const i = y * size + x;
      if (x < size - 1) result[i] = Math.min(result[i], result[i + 1] + 1);
      if (y < size - 1) result[i] = Math.min(result[i], result[i + size] + 1);
      if (x < size - 1 && y < size - 1)
        result[i] = Math.min(result[i], result[i + size + 1] + Math.SQRT2);
      if (x && y < size - 1)
        result[i] = Math.min(result[i], result[i + size - 1] + Math.SQRT2);
    }
  return result;
}

export function LiquidMark() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const pause = useRef(false);
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useState(false);
  useEffect(() => {
    pause.current = paused;
  }, [paused]);
  useEffect(() => {
    const container = stage.current;
    if (!container) return;
    // Keep the server-rendered mark visible while this lower-page illustration
    // is offscreen. Shader compilation and the distance field can wait.
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        setActive(true);
      },
      { rootMargin: '200px 0px' },
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!active) return;
    const surface = canvas.current;
    const container = stage.current;
    if (!surface || !container) return;
    const gl = surface.getContext('webgl', {
      alpha: true,
      antialias: true,
      premultipliedAlpha: false,
      powerPreference: 'low-power',
    });
    if (!gl) return;
    const lifecycle = new AbortController();
    const reduce = matchMedia('(prefers-reduced-motion: reduce)');
    const shaders: WebGLShader[] = [];
    let program: WebGLProgram | null = null;
    let texture: WebGLTexture | null = null;
    let buffer: WebGLBuffer | null = null;
    let frame = 0,
      disposed = false,
      visible = true,
      ready = false,
      elapsed = 0,
      last = 0;
    let x = 0,
      y = 0,
      targetX = 0,
      targetY = 0;
    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };
    const cleanup = () => {
      stop();
      if (texture) gl.deleteTexture(texture);
      if (buffer) gl.deleteBuffer(buffer);
      if (program) gl.deleteProgram(program);
      shaders.forEach((shader) => gl.deleteShader(shader));
    };
    const compile = (kind: number, source: string) => {
      const shader = gl.createShader(kind);
      if (!shader) throw new Error('Shader unavailable');
      shaders.push(shader);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
        throw new Error('Shader unsupported');
      return shader;
    };
    try {
      program = gl.createProgram();
      if (!program) throw new Error('WebGL unavailable');
      gl.attachShader(program, compile(gl.VERTEX_SHADER, vertex));
      gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragment));
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS))
        throw new Error('Program unsupported');
      // oxlint-disable-next-line react/react-compiler -- WebGL API, not a React hook.
      gl.useProgram(program);
      buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
        gl.STATIC_DRAW,
      );
      const position = gl.getAttribLocation(program, 'position');
      gl.enableVertexAttribArray(position);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    } catch {
      cleanup();
      return;
    }
    const timeUniform = gl.getUniformLocation(program, 'time');
    const pointerUniform = gl.getUniformLocation(program, 'pointer');
    function draw(now: number) {
      frame = 0;
      if (disposed || !ready || !visible || document.hidden) {
        last = now;
        return;
      }
      const moving = !pause.current && !reduce.matches;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (moving) elapsed += dt;
      x += ((moving ? targetX : 0) - x) * 0.08;
      y += ((moving ? targetY : 0) - y) * 0.08;
      container!.style.setProperty('--mark-x', `${x * 9}deg`);
      container!.style.setProperty('--mark-y', `${y * -7}deg`);
      gl!.uniform1f(timeUniform, elapsed);
      gl!.uniform2f(pointerUniform, x, y);
      gl!.drawArrays(gl!.TRIANGLES, 0, 6);
      if (moving) frame = requestAnimationFrame(draw);
    }
    const requestDraw = () => {
      if (!frame && ready) frame = requestAnimationFrame(draw);
    };
    const resize = new ResizeObserver(() => {
      const side = Math.max(
        1,
        Math.min(
          900,
          Math.round(surface.clientWidth * Math.min(devicePixelRatio, 1.5)),
        ),
      );
      surface.width = side;
      surface.height = side;
      gl.viewport(0, 0, side, side);
      requestDraw();
    });
    resize.observe(surface);
    const intersection = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      if (visible) requestDraw();
      else stop();
    });
    intersection.observe(container);
    container.addEventListener(
      'pointermove',
      (event) => {
        if (event.pointerType !== 'mouse' || reduce.matches) return;
        const rect = container.getBoundingClientRect();
        targetX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        targetY = ((event.clientY - rect.top) / rect.height) * 2 - 1;
        requestDraw();
      },
      { signal: lifecycle.signal, passive: true },
    );
    container.addEventListener(
      'pointerleave',
      () => {
        targetX = 0;
        targetY = 0;
      },
      { signal: lifecycle.signal },
    );
    container.addEventListener('click', requestDraw, {
      signal: lifecycle.signal,
    });
    document.addEventListener(
      'visibilitychange',
      () => {
        if (document.hidden) stop();
        else requestDraw();
      },
      { signal: lifecycle.signal },
    );
    reduce.addEventListener('change', requestDraw, {
      signal: lifecycle.signal,
    });
    const image = new Image();
    image.onload = () => {
      if (disposed) return;
      const size = 320,
        mask = document.createElement('canvas');
      mask.width = size;
      mask.height = size;
      const ctx = mask.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(image, 26, 16, 300, 286);
      const pixels = ctx.getImageData(0, 0, size, size).data;
      const toInside = distanceField(pixels, size, true),
        toOutside = distanceField(pixels, size, false);
      // Smooth the distance field before calculating surface normals. This
      // removes pixel steps in reflections without blurring the vector outline.
      const signed = new Float32Array(size * size);
      const horizontal = new Float32Array(size * size);
      const smooth = new Float32Array(size * size);
      const kernel = [1, 4, 6, 4, 1];
      for (let i = 0; i < signed.length; i++)
        signed[i] = toOutside[i] - toInside[i];
      for (let y = 0; y < size; y++)
        for (let x = 0; x < size; x++) {
          for (let k = -2; k <= 2; k++)
            horizontal[y * size + x] +=
              (signed[y * size + Math.max(0, Math.min(size - 1, x + k))] *
                kernel[k + 2]) /
              16;
        }
      for (let y = 0; y < size; y++)
        for (let x = 0; x < size; x++) {
          for (let k = -2; k <= 2; k++)
            smooth[y * size + x] +=
              (horizontal[Math.max(0, Math.min(size - 1, y + k)) * size + x] *
                kernel[k + 2]) /
              16;
        }
      const data = new Uint8Array(size * size * 4);
      for (let i = 0; i < size * size; i++) {
        const v = Math.max(
          0,
          Math.min(65535, Math.round((0.5 + smooth[i] / 128) * 65535)),
        );
        data[i * 4] = v >> 8;
        data[i * 4 + 1] = v & 255;
        data[i * 4 + 2] = 0;
        data[i * 4 + 3] = 255;
      }
      texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        size,
        size,
        0,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        data,
      );
      ready = true;
      container.dataset.ready = 'true';
      requestDraw();
    };
    image.src = '/assets/brand/favicon.svg';
    surface.addEventListener(
      'webglcontextlost',
      () => {
        stop();
        delete container.dataset.ready;
      },
      { signal: lifecycle.signal },
    );
    // Native button state changes request a final static frame or restart the loop.
    const changes = new MutationObserver(requestDraw);
    changes.observe(container, {
      attributes: true,
      attributeFilter: ['data-paused'],
    });
    return () => {
      disposed = true;
      image.onload = null;
      lifecycle.abort();
      resize.disconnect();
      intersection.disconnect();
      changes.disconnect();
      cleanup();
      delete container.dataset.ready;
    };
  }, [active]);
  return (
    <div className="s-mark-stage" ref={stage} data-paused={paused}>
      <div className="s-mark-object" aria-hidden="true">
        <img
          className="s-mark-fallback"
          src="/assets/brand/favicon.svg"
          alt=""
          width="420"
          height="420"
        />
        <canvas ref={canvas} width="600" height="600" />
      </div>
      <button
        className="s-motion-toggle"
        type="button"
        aria-label={
          paused ? 'Logoanimation fortsetzen' : 'Logoanimation pausieren'
        }
        aria-pressed={paused}
        onClick={() => setPaused(!paused)}
      >
        {paused ? <Play size={15} /> : <Pause size={15} />}
      </button>
    </div>
  );
}
