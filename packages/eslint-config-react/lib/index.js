const typescript = require('@vanyauhalin/eslint-config-typescript');
const eslintPluginJsxA11y = require('./eslint-plugin-jsx-a11y');
const eslintPluginReact = require('./eslint-plugin-react');

/**
 * @type {import('eslint').Linter.BaseConfig}
 */
module.exports = {
  ...typescript,
  extends: [
    ...typescript.extends,
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
  ],
  rules: {
    ...typescript.rules,
    ...eslintPluginJsxA11y,
    ...eslintPluginReact,
  },
};
