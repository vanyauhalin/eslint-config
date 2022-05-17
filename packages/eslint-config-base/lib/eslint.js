module.exports = {
  /**
   * Requires named function expressions.
   * @see https://eslint.org/docs/rules/func-names
   * @see https://github.com/airbnb/javascript/blob/7fdc87a8be565fa1f1779dc1d6b6461b953f7d85/packages/eslint-config-airbnb-base/rules/style.js#L96
   */
  'func-names': 'error',
  /**
   * Enforces a maximum line length.
   * @see https://eslint.org/docs/rules/max-len
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
   * Disallows constant expressions in conditions.
   * @see https://eslint.org/docs/rules/no-constant-condition
   * @see https://github.com/airbnb/javascript/blob/7fdc87a8be565fa1f1779dc1d6b6461b953f7d85/packages/eslint-config-airbnb-base/rules/errors.js#L35
   */
  'no-constant-condition': 'error',
  /**
   * Requires using arrow functions for callbacks.
   * @see https://eslint.org/docs/rules/prefer-arrow-callback
   * @see https://github.com/airbnb/javascript/blob/7fdc87a8be565fa1f1779dc1d6b6461b953f7d85/packages/eslint-config-airbnb-base/rules/es6.js#L110
   */
  'prefer-arrow-callback': 'error',
  /**
   * Enforces sorted import declarations within modules.
   * @see https://eslint.org/docs/rules/sort-imports
   * @see https://github.com/airbnb/javascript/blob/7fdc87a8be565fa1f1779dc1d6b6461b953f7d85/packages/eslint-config-airbnb-base/rules/es6.js#L166
   */
  'sort-imports': ['error', {
    ignoreDeclarationSort: true,
  }],
};
