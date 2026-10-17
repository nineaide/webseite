declare module '*.woff2?url' {
  const url: string;
  export default url;
}

declare module '*.woff2?inline' {
  const dataUrl: string;
  export default dataUrl;
}
