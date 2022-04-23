import { notEqual } from 'assert';
import { ESLint } from 'eslint';
// Disabled until @types/node is updated to v18.
// eslint-disable-next-line import/no-unresolved
import test from 'node:test';
import { getOptions } from '../.esbuildrc';

const { name, outfile } = getOptions();
const engine = new ESLint({
  baseConfig: {
    extends: [
      outfile,
    ],
  },
});

test(`validates ${name}`, async () => {
  const result = await engine.lintFiles(outfile);
  notEqual(result[0].messages.length, 0);
});
