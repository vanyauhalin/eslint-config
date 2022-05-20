const typescript = require(
  '@vanyauhalin/eslint-config-typescript/lib/typescript-eslint',
).overrides;

/**
 * @type {import('eslint').Linter.Config}
 * @see https://github.com/typescript-eslint/typescript-eslint
 */
module.exports = {
  overrides: [
    {
      files: '*.tsx',
      extends: [
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        '@vanyauhalin/eslint-config-base/lib/eslint',
        '@vanyauhalin/eslint-config-base/lib/eslint-plugin-import',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        ...typescript.find((item) => (
          Array.isArray(item)
            ? item.includes('*.ts')
            : item.files === '*.ts'
        )).rules,
      },
    },
  ],
};
