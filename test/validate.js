import { extname, resolve } from 'path';
import { ESLint } from 'eslint';
import { test } from 'uvu';
import { is } from 'uvu/assert';

const PACKAGES = resolve('packages');
const REFERENCE = resolve('test/reference');

[
  ['base', ['base.js']],
  ['react', ['react.tsx']],
  ['typescript', ['typescript.ts']],
].forEach((options) => {
  const [name, reference] = options;
  const fullName = `eslint-config-${name}`;
  test(`${fullName} should throw an configs error`, async () => {
    await Promise.all(reference.map(async (file) => {
      const extension = extname(file);
      const eslint = new ESLint({
        allowInlineConfig: false,
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
      });
      const report = await eslint.lintFiles(`${REFERENCE}/${file}`);
      const hasError = report.every((result) => (
        result.errorCount > 0
        && result.fatalErrorCount === 0
      ));
      is(hasError, true);
    }));
  });
});

test.run();
