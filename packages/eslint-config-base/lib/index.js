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
      './eslint-plugin-promise',
    ].map((config) => require.resolve(config)),
  ],
  plugins: [
    'unicorn',
  ],
  rules: {
    ...eslintPluginUnicorn,
  },
};
