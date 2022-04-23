import { build } from 'esbuild';

function getOptions() {
  const [, , name] = process.argv;
  const root = `./packages/eslint-config-${name}`;
  const outfile = `${root}/lib/index.cjs`;
  return {
    name,
    outfile,
    root,
  };
}

const { outfile, root } = getOptions();

build({
  outfile,
  allowOverwrite: true,
  bundle: true,
  entryPoints: [`${root}/src`],
  platform: 'node',
}).catch((error) => {
  process.stderr.write(error.stderr);
  process.exit(1);
});

export {
  getOptions,
};
