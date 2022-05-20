/**
 * @type {import('eslint').Linter.Config}
 * @see https://github.com/jrdrg/eslint-plugin-sort-exports/tree/v0.6.0
 */
module.exports = {
  plugins: [
    'sort-exports',
  ],
  rules: {
    /**
     * Sort export declarations in modules.
     * @see https://github.com/jrdrg/eslint-plugin-sort-exports/tree/v0.6.0
     */
    'sort-exports/sort-exports': 'error',
  },
};
