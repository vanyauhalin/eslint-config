/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [
    '@vanyauhalin/eslint-config-base',
    '@vanyauhalin/eslint-config-typescript',
    ...[
      './typescript-eslint',
      './eslint-plugin-jsx-a11y',
      './eslint-plugin-react',
      './eslint-plugin-unicorn',
    ].map((config) => require.resolve(config)),
  ],
};
