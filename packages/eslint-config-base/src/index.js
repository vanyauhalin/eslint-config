/**
 * @typedef {import('eslint').Linter.BaseConfig} BaseConfig
 * @typedef {import('eslint').Linter.RulesRecord} RulesRecord
 */

import { rules } from './rules';

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
  ignorePatterns: [
    '!.*',
    'dist',
    'lib',
    'node_modules',
  ],
  overrides: [],
};

config.overrides.push({
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

config.overrides.push({
  files: './src/**/*.js',
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

config.overrides.push({
  files: './test/*.js',
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
    'import/no-extraneous-dependencies',
    'import/order',
    'import/prefer-default-export',
    'import/unambiguous',
    'max-len',
    'sort-imports',
  ]),
});

export const {
  ignorePatterns,
  overrides,
} = config;
