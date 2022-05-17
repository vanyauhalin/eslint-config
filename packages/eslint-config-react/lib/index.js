const eslintPluginJsxA11y = require('./eslint-plugin-jsx-a11y');
const eslintPluginReact = require('./eslint-plugin-react');

/**
 * @type {import('eslint').Linter.BaseConfig}
 */
module.exports = {
  extends: [
    '@vanyauhalin/eslint-config-typescript',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
  ],
  rules: {
    ...eslintPluginJsxA11y,
    ...eslintPluginReact,
  },
};
