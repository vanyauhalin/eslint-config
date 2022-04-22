import { build } from 'esbuild';

const [, , pack] = process.argv;
const root = `./packages/eslint-config-${pack}`;

if (!pack) {
  throw new Error('Please specify a package to build');
}

build({
  allowOverwrite: true,
  bundle: true,
  entryPoints: [`${root}/src`],
  outfile: `${root}/lib/index.js`,
  platform: 'node',
}).catch((error) => {
  process.stderr.write(error.stderr);
  process.exit(1);
});
