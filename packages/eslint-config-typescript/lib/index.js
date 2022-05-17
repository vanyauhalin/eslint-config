/**
 * @type {import('eslint').Linter.BaseConfig}
 */
module.exports = {
  extends: [
    '@vanyauhalin/eslint-config-base',
    'airbnb-typescript/base',
    ...[
      './eslint-plugin-import',
      './typescript-eslint',
    ].map((config) => require.resolve(config)),
  ],
};
