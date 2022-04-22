import { build } from 'esbuild';

const [, , root] = process.argv;

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
