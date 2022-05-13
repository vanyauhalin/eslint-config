/**
 * @typedef {import('eslint').Linter.BaseConfig} BaseConfig
 * @typedef {import('eslint').Linter.RulesRecord} RulesRecord
 */

const eslint = require('./eslint');
const eslintPluginImport = require('./eslint-plugin-import');

const rules = {
  ...eslint,
  ...eslintPluginImport,
};

/**
 * Helper function for adding rules.
 * @param {(keyof typeof rules)[]} names Array of rule names from the `rules`.
 * @returns {RulesRecord} Rules record.
 */
function addRules(names) {
  return names.reduce((acc, cur) => ({
    ...acc,
    [cur]: rules[cur],
  }), {});
}

/**
 * Main ESLint configuration whose properties will be exported.
 * @type {BaseConfig}
 */
module.exports = {
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
  ignorePatterns: [
    '!.*',
    '.local',
    'dist',
    'lib',
    'node_modules',
  ],
};
