import fs from 'fs';
import { resolve } from 'path';
import { build } from 'esbuild';

function read() {
  const PACKAGES_DIRECTORY = 'packages';
  const packages = fs.readdirSync(PACKAGES_DIRECTORY);
  return packages.map((pack) => {
    const root = `${PACKAGES_DIRECTORY}/${pack}`;
    const main = resolve(`${root}/lib/index.cjs`);
    const src = resolve(`${root}/src`);
    return {
      main,
      src,
    };
  });
}

read().forEach((pack) => {
  build({
    allowOverwrite: true,
    bundle: true,
    entryPoints: [pack.src],
    outfile: pack.main,
    platform: 'node',
  }).catch((error) => {
    throw new Error(error.stderr);
  });
});

export {
  read,
};
