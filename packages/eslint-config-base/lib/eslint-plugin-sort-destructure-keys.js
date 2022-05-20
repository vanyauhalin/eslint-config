/**
 * @type {import('eslint').Linter.Config}
 * @see https://github.com/mthadley/eslint-plugin-sort-destructure-keys/tree/v1.4.0
 */
module.exports = {
  plugins: [
    'sort-destructure-keys',
  ],
  rules: {
    /**
     * Require object destructure keys to be sorted.
     * @see https://github.com/mthadley/eslint-plugin-sort-destructure-keys/tree/v1.4.0/docs/rules/sort-destructure-keys.md
     */
    'sort-destructure-keys/sort-destructure-keys': 'error',
  },
};
