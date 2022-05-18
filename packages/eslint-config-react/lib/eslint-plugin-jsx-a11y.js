/**
 * @type {import('eslint').Linter.Config}
 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
 */
module.exports = {
  rules: {
    /**
     * Enforce that a label tag has a text label and an associated control.
     * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/112261cbc84f5b7d74de9b427b529a10b41faece/docs/rules/label-has-associated-control.md
     * @see https://github.com/airbnb/javascript/blob/7fdc87a8be565fa1f1779dc1d6b6461b953f7d85/packages/eslint-config-airbnb/rules/react-a11y.js#L123
     */
    'jsx-a11y/label-has-associated-control': ['error', {
      labelComponents: [],
      labelAttributes: [],
      controlComponents: [],
      assert: 'nesting',
      depth: 25,
    }],
  },
};
