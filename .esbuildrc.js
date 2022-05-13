import { readdirSync } from 'fs';
import { extname, resolve } from 'path';
import { buildSync } from 'esbuild';

function read() {
  const PACKAGES_DIRECTORY = 'packages';
  const packages = readdirSync(PACKAGES_DIRECTORY);
  return packages.map((pack) => {
    const root = `${PACKAGES_DIRECTORY}/${pack}`;
    return {
      library: resolve(`${root}/lib`),
      sources: resolve(`${root}/src`),
    };
  });
}

if (process.env.npm_lifecycle_event === 'build') {
  read().forEach((pack) => {
    const result = buildSync({
      allowOverwrite: true,
      entryPoints: readdirSync(pack.sources)
        .filter((file) => extname(file) === '.mjs')
        .map((file) => resolve(`${pack.sources}/${file}`)),
      format: 'cjs',
      outdir: pack.library,
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
