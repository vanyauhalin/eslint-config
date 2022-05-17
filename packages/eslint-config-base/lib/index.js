const eslint = require('./eslint');
const eslintPluginImport = require('./eslint-plugin-import');
const eslintPluginPromise = require('./eslint-plugin-promise');
const eslintPluginUnicorn = require('./eslint-plugin-unicorn');
const { configure, group } = require('./utils');

const { add } = group({
  ...eslint,
  ...eslintPluginImport,
  ...eslintPluginPromise,
  ...eslintPluginUnicorn,
});

module.exports = configure({
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:unicorn/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: [
    'promise',
    'unicorn',
  ],
  rules: add([
    'func-names',
    'import/exports-last',
    'import/group-exports',
    'import/no-default-export',
    'import/no-deprecated',
    'import/no-extraneous-dependencies',
    'import/order',
    'import/prefer-default-export',
    'max-len',
    'no-alert',
    'no-constant-condition',
    'no-restricted-syntax',
    'prefer-arrow-callback',
    'promise/always-return',
    'promise/avoid-new',
    'promise/catch-or-return',
    'promise/no-callback-in-promise',
    'promise/no-native',
    'promise/no-nesting',
    'promise/no-new-statics',
    'promise/no-promise-in-callback',
    'promise/no-return-in-finally',
    'promise/no-return-wrap',
    'promise/param-names',
    'promise/prefer-await-to-callbacks',
    'promise/prefer-await-to-then',
    'promise/valid-params',
    'sort-imports',
    'unicorn/no-keyword-prefix',
    'unicorn/no-nested-ternary',
    'unicorn/no-unreadable-array-destructuring',
    'unicorn/prefer-module',
  ]),
  ignorePatterns: [
    '!.*',
    '.local',
    'dist',
    'lib',
    'node_modules',
  ],
});
