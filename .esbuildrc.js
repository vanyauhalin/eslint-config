import { build } from 'esbuild';

const [, , name] = process.argv;
const root = `./packages/eslint-config-${name}`;

build({
  allowOverwrite: true,
  bundle: true,
  entryPoints: [`${root}/src`],
  outfile: `${root}/lib/index.cjs`,
  platform: 'node',
}).catch((error) => {
  process.stderr.write(error.stderr);
  process.exit(1);
});
