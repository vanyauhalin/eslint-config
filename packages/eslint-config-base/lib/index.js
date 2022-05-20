/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [
    'airbnb-base',
    ...[
      './eslint',
      './eslint-plugin-eslint-comments',
      './eslint-plugin-import',
      './eslint-plugin-jsonc',
      './eslint-plugin-promise',
      './eslint-plugin-sort-destructure-keys',
      './eslint-plugin-sort-export-all',
      './eslint-plugin-sort-exports',
      './eslint-plugin-unicorn',
      './eslint-plugin-yml',
    ].map((config) => require.resolve(config)),
  ],
};
