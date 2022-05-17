const eslint = require('./eslint');
const eslintPluginImport = require('./eslint-plugin-import');
const eslintPluginUnicorn = require('./eslint-plugin-unicorn');
const { configure, group } = require('./utils');

const { add } = group({
  ...eslint,
  ...eslintPluginImport,
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
