import { addRules, override } from './utils';

const root = override({
  files: './*.{cjs,js,mjs}',
  env: {
    es2022: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: addRules([
    'import/exports-last',
    'import/group-exports',
    'import/no-default-export',
    'import/no-deprecated',
    'import/no-extraneous-dependencies',
    'import/order',
    'import/prefer-default-export',
    'max-len',
    'sort-imports',
  ]),
});

const src = override({
  files: 'src/**/*.js',
  env: {
    node: true,
    es2022: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: addRules([
    'import/exports-last',
    'import/group-exports',
    'import/no-commonjs',
    'import/no-default-export',
    'import/no-deprecated',
    'import/order',
    'import/prefer-default-export',
    'import/unambiguous',
    'max-len',
    'sort-imports',
  ]),
});

const test = override({
  ...src,
  files: 'test/*.js',
});

const overrides = [root, src, test];

export {
  overrides,
};
