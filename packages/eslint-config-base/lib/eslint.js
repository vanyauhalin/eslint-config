/**
 * @type {import('eslint').Linter.BaseConfig}
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
     * Disallows the use of `alert`, `confirm`, and `prompt`.
     * @see https://eslint.org/docs/rules/no-alert
     * @see https://github.com/airbnb/javascript/blob/7fdc87a8be565fa1f1779dc1d6b6461b953f7d85/packages/eslint-config-airbnb-base/rules/best-practices.js#L70
     */
    'no-alert': 'error',
    /**
     * Disallows constant expressions in conditions.
     * @see https://eslint.org/docs/rules/no-constant-condition
     * @see https://github.com/airbnb/javascript/blob/7fdc87a8be565fa1f1779dc1d6b6461b953f7d85/packages/eslint-config-airbnb-base/rules/errors.js#L35
     */
    'no-constant-condition': 'error',
    /**
     * Disallows specified syntax.
     * Removed `for..of`.
     * @see https://eslint.org/docs/rules/no-restricted-syntax
     * @see https://github.com/airbnb/javascript/blob/7fdc87a8be565fa1f1779dc1d6b6461b953f7d85/packages/eslint-config-airbnb-base/rules/style.js#L333
     */
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which '
          + 'is virtually never what you want. Use '
          + 'Object.{keys,values,entries}, and iterate over the resulting '
          + 'array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing '
          + 'and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code '
          + 'impossible to predict and optimize.',
      },
    ],
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
  },
  ignorePatterns: [
    '!.*',
    '.local',
    'dist',
    'lib',
    'node_modules',
  ],
};
