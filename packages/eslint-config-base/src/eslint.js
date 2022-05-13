module.exports = {
  /**
   * Enforces a maximum line length.
   * @see https://eslint.org/docs/rules/max-len
   * @see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js#L199
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
   * Enforces sorted import declarations within modules.
   * @see https://eslint.org/docs/rules/sort-imports
   * @see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/es6.js#L166
   */
  'sort-imports': ['error', {
    ignoreDeclarationSort: true,
  }],
};
