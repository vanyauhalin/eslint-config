const eslintPluginImport = require('./eslint-plugin-import');
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
      './eslint-plugin-jsonc',
    ].map((config) => require.resolve(config)),
  ],
  plugins: [
    'promise',
    'unicorn',
  ],
  rules: {
    ...eslintPluginImport,
    ...eslintPluginPromise,
    ...eslintPluginUnicorn,
  },
};
