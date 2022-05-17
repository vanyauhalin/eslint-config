const eslint = require('./eslint');
const eslintPluginImport = require('./eslint-plugin-import');
const eslintPluginPromise = require('./eslint-plugin-promise');
const eslintPluginUnicorn = require('./eslint-plugin-unicorn');

/**
 * @type {import('eslint').Linter.BaseConfig}
 */
module.exports = {
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
  rules: {
    ...eslint,
    ...eslintPluginImport,
    ...eslintPluginPromise,
    ...eslintPluginUnicorn,
  },
  ignorePatterns: [
    '!.*',
    '.local',
    'dist',
    'lib',
    'node_modules',
  ],
};
