import { extname, resolve } from 'node:path';
import { ESLint } from 'eslint';
import { test } from 'uvu';
import { is } from 'uvu/assert';

const PACKAGES = resolve('packages');
const REFERENCE = resolve('test/reference');

for (const options of [
  ['base', ['base.js', 'base.yml', 'package.json']],
  ['react', ['react.tsx']],
  ['typescript', ['typescript.ts']],
]) {
  const [name, reference] = options;
  const fullName = `eslint-config-${name}`;
  for (const file of reference) {
    test(`${file} should throw an ${fullName} error`, async () => {
      const extension = extname(file);
      const eslint = new ESLint({
        baseConfig: {
          extends: `${PACKAGES}/${fullName}/lib/index.js`,
          ...extension === '.ts' || extension === '.tsx'
            ? {
              parserOptions: {
                project: `${REFERENCE}/tsconfig.json`,
              },
            }
            : {},
        },
        ignore: false,
      });
      const report = await eslint.lintFiles(`${REFERENCE}/${file}`);
      const hasError = report.every((result) => (
        result.errorCount > 0
        && result.fatalErrorCount === 0
      ));
      is(hasError, true);
    });
  }
}

test.run();
