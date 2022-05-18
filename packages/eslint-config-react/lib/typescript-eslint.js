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
      'airbnb-typescript',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    overrides: [
      ...typescript.overrides,
    ],
    rules: {
      ...typescript.rules,
    },
  }],
};
