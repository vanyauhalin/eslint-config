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
    ...[
      './eslint-plugin-jsx-a11y',
    ].map((config) => require.resolve(config)),
  ],
  rules: {
    ...eslintPluginReact,
  },
};
