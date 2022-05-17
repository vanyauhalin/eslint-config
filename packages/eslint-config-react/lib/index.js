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
      './eslint-plugin-react',
      './eslint-plugin-unicorn',
    ].map((config) => require.resolve(config)),
  ],
};
