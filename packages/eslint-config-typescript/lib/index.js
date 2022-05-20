/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [
    '@vanyauhalin/eslint-config-base',
    ...[
      './typescript-eslint',
      './eslint-plugin-import',
    ].map((config) => require.resolve(config)),
  ],
};
