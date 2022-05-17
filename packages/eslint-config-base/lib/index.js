const eslint = require('./eslint');
const eslintPluginImport = require('./eslint-plugin-import');
const { configure, group } = require('./utils');

const { add } = group({
  ...eslint,
  ...eslintPluginImport,
});

module.exports = configure({
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
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
    'sort-imports',
  ]),
  ignorePatterns: [
    '!.*',
    '.local',
    'dist',
    'lib',
    'node_modules',
  ],
});
