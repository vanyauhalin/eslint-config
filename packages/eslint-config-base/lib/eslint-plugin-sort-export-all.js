/**
 * @type {import('eslint').Linter.Config}
 * @see https://github.com/nirtamir2/eslint-plugin-sort-export-all/tree/abad6da27dfb0f66174829aee2343bb75aa371e4
 */
module.exports = {
  plugins: [
    'sort-export-all',
  ],
  rules: {
    /**
     * Rule that sorts `exports *`.
     * @see https://github.com/nirtamir2/eslint-plugin-sort-export-all/tree/abad6da27dfb0f66174829aee2343bb75aa371e4
     */
    'sort-export-all/sort-export-all': ['error', 'asc', {
      caseSensitive: true,
      natural: false,
    }],
  },
};
