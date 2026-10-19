import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const task = process.argv[2];
const extraArgs = process.argv.slice(3);
const sourceConfigPath = 'wrangler.cloudflare.json';
const builtConfigPath = 'dist/server/wrangler.json';

function run(command, args, env = process.env) {
  const result = spawnSync(command, args, { stdio: 'inherit', env });
  if (result.error) throw result.error;
  process.exit(result.status ?? 1);
}

if (task === 'build') {
  if (!process.env.npm_execpath)
    throw new Error('Start the build with npm run build:cloudflare.');
  run(process.execPath, [process.env.npm_execpath, 'run', 'build'], {
    ...process.env,
    NINEAI_DEPLOY_TARGET: 'cloudflare',
  });
} else if (task === 'deploy') {
  const source = JSON.parse(readFileSync(sourceConfigPath, 'utf8'));
  const built = JSON.parse(readFileSync(builtConfigPath, 'utf8'));
  const database = (config) =>
    config.d1_databases?.find((binding) => binding.binding === 'DB')
      ?.database_id;
  if (
    built.name !== source.name ||
    built.account_id !== source.account_id ||
    !database(source) ||
    database(built) !== database(source)
  ) {
    throw new Error(
      'Cloudflare build does not match this deployment. Run npm run build:cloudflare first.',
    );
  }
  run(process.execPath, [
    'node_modules/wrangler/bin/wrangler.js',
    'deploy',
    '--config',
    builtConfigPath,
    ...extraArgs,
  ]);
} else if (task === 'migrate') {
  run(process.execPath, [
    'node_modules/wrangler/bin/wrangler.js',
    'd1',
    'migrations',
    'apply',
    'DB',
    '--remote',
    '--config',
    sourceConfigPath,
    ...extraArgs,
  ]);
} else {
  throw new Error(
    'Use npm run build:cloudflare, deploy:cloudflare or db:migrate:cloudflare.',
  );
}
