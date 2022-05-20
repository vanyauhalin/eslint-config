const airbnb = require('eslint-config-airbnb-base/rules/style');

/**
 * @type {import('eslint').Linter.Config}
 * @see https://github.com/eslint/eslint/tree/v8.13.0
 */
module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    /**
     * Requires named function expressions.
     * @override `airbnb-base`
     * @see https://github.com/eslint/eslint/tree/v8.13.0/docs/src/rules/func-names.md
     */
    'func-names': 'error',
    /**
     * Enforces a maximum line length.
     * @override `airbnb-base`
     * @see https://github.com/eslint/eslint/tree/v8.13.0/docs/src/rules/max-len.md
     */
    'max-len': ['error', {
      code: 80,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: false,
      ignoreTemplateLiterals: true,
      ignoreUrls: true,
      tabWidth: 2,
    }],
    /**
     * Disallows the use of `alert`, `confirm`, and `prompt`.
     * @override `airbnb-base`
     * @see https://github.com/eslint/eslint/tree/v8.13.0/docs/src/rules/no-alert.md
     */
    'no-alert': 'error',
    /**
     * Disallows constant expressions in conditions.
     * @override `airbnb-base`
     * @see https://github.com/eslint/eslint/tree/v8.13.0/docs/src/rules/no-constant-condition.md
     */
    'no-constant-condition': 'error',
    /**
     * Disallows reassignment of function parameters.
     * Ready to take the risks involved.
     * @override `airbnb-base`
     * @see https://github.com/eslint/eslint/tree/v8.13.0/docs/src/rules/no-param-reassign.md
     */
    'no-param-reassign': ['error', {
      props: false,
    }],
    /**
     * Disallows specified syntax.
     * Removed `for..of` in favor of `unicorn/no-array-for-each`.
     * @override `airbnb-base`
     * @see https://github.com/eslint/eslint/tree/v8.13.0/docs/src/rules/no-restricted-syntax.md
     */
    'no-restricted-syntax': [
      ...(() => {
        const [, [type, ...options]] = Object.entries(airbnb.rules)
          .find(([key]) => key === 'no-restricted-syntax');
        return [type, ...options
          .filter((option) => option.selector !== 'ForOfStatement')];
      })(),
    ],
    /**
     * Requires using arrow functions for callbacks.
     * @override `airbnb-base`
     * @see https://github.com/eslint/eslint/tree/v8.13.0/docs/src/rules/prefer-arrow-callback.md
     */
    'prefer-arrow-callback': 'error',
    /**
     * Enforces sorted import declarations within modules.
     * @override `airbnb-base`
     * @see https://github.com/eslint/eslint/tree/v8.13.0/docs/src/rules/sort-imports.md
     */
    'sort-imports': ['error', {
      ignoreDeclarationSort: true,
    }],
  },
  ignorePatterns: [
    '!.*',
    '.local',
    'dist',
    'lib',
    'node_modules',
  ],
};
