import { readdirSync } from 'fs';
import { extname, resolve } from 'path';
import { buildSync } from 'esbuild';

const PACKAGES = resolve('packages');

readdirSync(PACKAGES).forEach((pack) => {
  const root = `${PACKAGES}/${pack}`;
  const sources = `${root}/src`;
  const result = buildSync({
    allowOverwrite: true,
    entryPoints: readdirSync(sources)
      .filter((file) => extname(file) === '.js')
      .map((file) => `${sources}/${file}`),
    format: 'cjs',
    outdir: `${root}/lib`,
    platform: 'node',
  });
  if (result.errors.length > 0) {
    throw new Error(result.errors);
  }
});
