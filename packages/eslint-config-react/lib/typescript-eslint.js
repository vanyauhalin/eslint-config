const typescript = require(
  '@vanyauhalin/eslint-config-typescript/lib/typescript-eslint',
).overrides[0];

/**
 * @type {import('eslint').Linter.Config}
 * @see https://github.com/typescript-eslint/typescript-eslint
 */
module.exports = {
  overrides: [{
    files: ['*.ts', '*.tsx'],
    extends: [
      'airbnb',
      'airbnb/hooks',
      'airbnb-typescript',
      '@vanyauhalin/eslint-config-base/lib/eslint',
      '@vanyauhalin/eslint-config-base/lib/eslint-plugin-import',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      '@vanyauhalin/eslint-config-typescript/lib/eslint-plugin-import',
      ...[
        './eslint-plugin-jsx-a11y',
        './eslint-plugin-react',
        './eslint-plugin-unicorn',
      ].map((config) => require.resolve(config)),
    ],
    overrides: [
      ...typescript.overrides,
    ],
    rules: {
      ...typescript.rules,
    },
  }],
};
