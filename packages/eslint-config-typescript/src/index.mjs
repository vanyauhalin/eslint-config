/**
 * @typedef {import('eslint').Linter.BaseConfig} BaseConfig
 * @typedef {import('eslint').Linter.RulesRecord} RulesRecord
 */

import base from '@vanyauhalin/eslint-config-base';
import { rules as eslintPluginImport } from './eslint-plugin-import';
import { rules as typescriptEslint } from './typescript-eslint';

const rules = {
  ...eslintPluginImport,
  ...typescriptEslint,
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
  ...base,
};

config.overrides.push({
  files: '*.ts',
  extends: [
    ...config.overrides[1].extends,
    'airbnb-typescript/base',
  ],
  rules: {
    ...config.overrides[1].rules,
    ...addRules([
      '@typescript-eslint/array-type',
      '@typescript-eslint/consistent-type-imports',
      '@typescript-eslint/explicit-function-return-type',
      '@typescript-eslint/explicit-module-boundary-types',
      '@typescript-eslint/lines-between-class-members',
      '@typescript-eslint/member-delimiter-style',
      '@typescript-eslint/member-ordering',
      '@typescript-eslint/method-signature-style',
      '@typescript-eslint/no-confusing-void-expression',
      'import/no-extraneous-dependencies',
    ]),
  },
});

export const {
  env,
  parserOptions,
  ignorePatterns,
  overrides,
} = config;
