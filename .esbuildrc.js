import fs from 'fs';
import { resolve } from 'path';
import { buildSync } from 'esbuild';

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

if (process.env.npm_lifecycle_event === 'build') {
  read().forEach((pack) => {
    const result = buildSync({
      allowOverwrite: true,
      bundle: true,
      entryPoints: [pack.src],
      outfile: pack.main,
      platform: 'node',
    });
    if (result.errors.length > 0) {
      throw new Error(result.errors);
    }
  });
}

export {
  read,
};
