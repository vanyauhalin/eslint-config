const eslintPluginPromise = require('./eslint-plugin-promise');
const eslintPluginUnicorn = require('./eslint-plugin-unicorn');

/**
 * @type {import('eslint').Linter.BaseConfig}
 */
module.exports = {
  extends: [
    'airbnb-base',
    'plugin:unicorn/recommended',
    ...[
      './eslint',
      './eslint-plugin-import',
      './eslint-plugin-jsonc',
    ].map((config) => require.resolve(config)),
  ],
  plugins: [
    'promise',
    'unicorn',
  ],
  rules: {
    ...eslintPluginPromise,
    ...eslintPluginUnicorn,
  },
};
