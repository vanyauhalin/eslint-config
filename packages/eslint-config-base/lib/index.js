/**
 * @type {import('eslint').Linter.BaseConfig}
 */
module.exports = {
  extends: [
    'airbnb-base',
    ...[
      './eslint',
      './eslint-plugin-import',
      './eslint-plugin-jsonc',
      './eslint-plugin-promise',
      './eslint-plugin-unicorn',
      './eslint-plugin-yml',
    ].map((config) => require.resolve(config)),
  ],
};
