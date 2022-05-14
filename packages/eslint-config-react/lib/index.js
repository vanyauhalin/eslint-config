const eslintPluginJsxA11y = require('./eslint-plugin-jsx-a11y');
const eslintPluginReact = require('./eslint-plugin-react');

const rules = {
  ...eslintPluginJsxA11y,
  ...eslintPluginReact,
};

/**
 * Helper function for adding rules.
 * @param {(keyof typeof rules)[]} names Array of rule names from the `rules`.
 * @returns {import('eslint').Linter.RulesRecord} Rules record.
 */
function addRules(names) {
  return names.reduce((acc, cur) => ({
    ...acc,
    [cur]: rules[cur],
  }), {});
}

/**
 * ESLint configuration.
 * @type {import('eslint').Linter.BaseConfig}
 */
module.exports = {
  extends: [
    '@vanyauhalin/eslint-config-typescript',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
  ],
  rules: addRules([
    'jsx-a11y/label-has-associated-control',
    'react/function-component-definition',
    'react/jsx-filename-extension',
    'react/jsx-max-props-per-line',
    'react/jsx-sort-props',
    'react/react-in-jsx-scope',
  ]),
};
