import { ESLint } from 'eslint';
import { test } from 'uvu';
import { is } from 'uvu/assert';
import { read } from '../.esbuildrc';

test('eslint should throw an configs error', async () => {
  await Promise.all(read().map(async (pack) => {
    const eslint = new ESLint({
      allowInlineConfig: false,
      baseConfig: {
        extends: pack.main,
      },
    });
    const result = await eslint.lintFiles('./test/reference.js');
    const hasError = result.every((el) => (
      el.errorCount > 0
      && el.fatalErrorCount === 0
    ));
    is(hasError, true);
  }));
});

test.run();
