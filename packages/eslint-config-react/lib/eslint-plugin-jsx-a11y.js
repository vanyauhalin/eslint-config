/**
 * @type {import('eslint').Linter.Config}
 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/v6.5.1
 */
module.exports = {
  overrides: [
    {
      files: '*.tsx',
      rules: {
        /**
         * Enforce that a label tag has a text label and an associated control.
         * @override `airbnb-typescript`
         * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/v6.5.1/docs/rules/label-has-associated-control.md
         */
        'jsx-a11y/label-has-associated-control': ['error', {
          labelComponents: [],
          labelAttributes: [],
          controlComponents: [],
          assert: 'nesting',
          depth: 25,
        }],
      },
    },
  ],
};
