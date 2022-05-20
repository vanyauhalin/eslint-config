/**
 * @type {import('eslint').Linter.Config}
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/v7.29.4
 */
module.exports = {
  overrides: [
    {
      files: '*.tsx',
      rules: {
        /**
         * Enforce consistent usage of destructuring assignment of props, state,
         * and context.
         * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/v7.29.4/docs/rules/destructuring-assignment.md
         */
        'react/destructuring-assignment': ['error', 'never'],
        /**
         * This option enforces a specific function type for function
         * components.
         * @override `airbnb-typescript`
         * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/v7.29.4/docs/rules/function-component-definition.md
         */
        'react/function-component-definition': ['error', {
          namedComponents: 'function-declaration',
          unnamedComponents: 'arrow-function',
        }],
        /**
         * Allow only typescript as `jsx` files.
         * @override `airbnb-typescript`
         * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/v7.29.4/docs/rules/jsx-filename-extension.md
         */
        'react/jsx-filename-extension': ['error', {
          extensions: ['tsx'],
        }],
        /**
         * Limiting the maximum of props on a single line can improve
         * readability.
         * @override `airbnb-typescript`
         * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/v7.29.4/docs/rules/jsx-max-props-per-line.md
         */
        'react/jsx-max-props-per-line': ['error', {
          maximum: 1,
        }],
        /**
         * Sort props names alphabetically.
         * @override `airbnb-typescript`
         * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/v7.29.4/docs/rules/jsx-sort-props.md
         */
        'react/jsx-sort-props': ['error', {
          callbacksLast: true,
          shorthandLast: true,
        }],
        /**
         * Prevent usage of dangerous JSX properties.
         * @override `airbnb-typescript`
         * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/v7.29.4/docs/rules/no-danger.md
         */
        'react/no-danger': 'error',
        /**
         * Allow missing React when using JSX.
         * @override `airbnb-typescript`
         * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/v7.29.4/docs/rules/react-in-jsx-scope.md
         */
        'react/react-in-jsx-scope': 'off',
      },
    },
  ],
};
