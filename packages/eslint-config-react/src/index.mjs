/**
 * @typedef {import('eslint').Linter.BaseConfig} BaseConfig
 * @typedef {import('eslint').Linter.RulesRecord} RulesRecord
 */

import typescript from '@vanyauhalin/eslint-config-typescript';
import { rules as eslintPluginJsxA11y } from './eslint-plugin-jsx-a11y';
import { rules as eslintPluginReact } from './eslint-plugin-react';

const rules = {
  ...eslintPluginJsxA11y,
  ...eslintPluginReact,
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
  ...typescript,
  rules: {
    ...typescript.rules,
    ...addRules([
      'react/jsx-filename-extension',
    ]),
  },
};

config.overrides.push({
  files: '*.tsx',
  extends: [
    ...config.overrides[2].extends,
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
  ],
  rules: {
    ...config.overrides[2].rules,
    ...addRules([
      'jsx-a11y/label-has-associated-control',
      'react/function-component-definition',
      'react/jsx-max-props-per-line',
      'react/jsx-sort-props',
    ]),
  },
});

export const {
  env,
  parserOptions,
  ignorePatterns,
  overrides,
} = config;
