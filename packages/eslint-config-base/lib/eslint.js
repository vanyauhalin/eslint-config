const airbnb = require('eslint-config-airbnb-base/rules/style');

/**
 * @type {import('eslint').Linter.Config}
 * @see https://github.com/eslint/eslint
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
     * @see https://github.com/eslint/eslint/blob/938dbdd6c310784cc8a7329efaeb0e34321b9e1f/docs/src/rules/func-names.md
     * @see https://github.com/airbnb/javascript/blob/7fdc87a8be565fa1f1779dc1d6b6461b953f7d85/packages/eslint-config-airbnb-base/rules/style.js#L96
     */
    'func-names': 'error',
    /**
     * Enforces a maximum line length.
     * @see https://github.com/eslint/eslint/blob/938dbdd6c310784cc8a7329efaeb0e34321b9e1f/docs/src/rules/max-len.md
     * @see https://github.com/airbnb/javascript/blob/7fdc87a8be565fa1f1779dc1d6b6461b953f7d85/packages/eslint-config-airbnb-base/rules/style.js#L199
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
     * @see https://github.com/eslint/eslint/blob/938dbdd6c310784cc8a7329efaeb0e34321b9e1f/docs/src/rules/no-alert.md
     * @see https://github.com/airbnb/javascript/blob/7fdc87a8be565fa1f1779dc1d6b6461b953f7d85/packages/eslint-config-airbnb-base/rules/best-practices.js#L70
     */
    'no-alert': 'error',
    /**
     * Disallows constant expressions in conditions.
     * @see https://github.com/eslint/eslint/blob/938dbdd6c310784cc8a7329efaeb0e34321b9e1f/docs/src/rules/no-constant-condition.md
     * @see https://github.com/airbnb/javascript/blob/7fdc87a8be565fa1f1779dc1d6b6461b953f7d85/packages/eslint-config-airbnb-base/rules/errors.js#L35
     */
    'no-constant-condition': 'error',
    /**
     * Disallows reassignment of function parameters.
     * Ready to take the risks involved.
     * @see https://github.com/eslint/eslint/blob/938dbdd6c310784cc8a7329efaeb0e34321b9e1f/docs/src/rules/no-param-reassign.md
     * @see https://github.com/airbnb/javascript/blob/7fdc87a8be565fa1f1779dc1d6b6461b953f7d85/packages/eslint-config-airbnb-base/rules/best-practices.js#L226
     */
    'no-param-reassign': ['error', {
      props: false,
    }],
    /**
     * Disallows specified syntax.
     * Removed `for..of`.
     * @see https://github.com/eslint/eslint/blob/938dbdd6c310784cc8a7329efaeb0e34321b9e1f/docs/src/rules/no-restricted-syntax.md
     * @see https://github.com/airbnb/javascript/blob/7fdc87a8be565fa1f1779dc1d6b6461b953f7d85/packages/eslint-config-airbnb-base/rules/style.js#L333
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
     * @see https://github.com/eslint/eslint/blob/938dbdd6c310784cc8a7329efaeb0e34321b9e1f/docs/src/rules/prefer-arrow-callback.md
     * @see https://github.com/airbnb/javascript/blob/7fdc87a8be565fa1f1779dc1d6b6461b953f7d85/packages/eslint-config-airbnb-base/rules/es6.js#L110
     */
    'prefer-arrow-callback': 'error',
    /**
     * Enforces sorted import declarations within modules.
     * @see https://github.com/eslint/eslint/blob/938dbdd6c310784cc8a7329efaeb0e34321b9e1f/docs/src/rules/sort-imports.md
     * @see https://github.com/airbnb/javascript/blob/7fdc87a8be565fa1f1779dc1d6b6461b953f7d85/packages/eslint-config-airbnb-base/rules/es6.js#L166
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
