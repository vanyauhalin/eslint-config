/**
 * @typedef {import('eslint').Linter.BaseConfig} BaseConfig
 * @typedef {import('eslint').Linter.RulesRecord} RulesRecord
 */

import { rules as eslint } from './eslint';
import { rules as eslintPluginImport } from './eslint-plugin-import';

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
const config = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  ignorePatterns: [
    '!.*',
    '.local',
    'dist',
    'lib',
    'node_modules',
  ],
  overrides: [],
};

config.overrides.push({
  files: '*.{cjs,js,mjs}',
  extends: [
    'airbnb-base',
  ],
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

config.overrides.push({
  files: '*.{js,mjs}',
  extends: config.overrides[0].extends,
  rules: {
    ...config.overrides[0].rules,
    ...addRules([
      'import/no-commonjs',
      'import/unambiguous',
    ]),
  },
});

export const {
  env,
  parserOptions,
  ignorePatterns,
  overrides,
} = config;
