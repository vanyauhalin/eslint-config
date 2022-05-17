/**
 * @type {import('eslint').Linter.BaseConfig}
 */
module.exports = {
  rules: {
    /**
     * Enforce consistent usage of destructuring assignment of props, state,
     * and context.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/1fdf9bdc9788ce6986f8e82f883ff4d7e161f16f/docs/rules/destructuring-assignment.md
     */
    'react/destructuring-assignment': ['error', 'never'],
    /**
     * This option enforces a specific function type for function components.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
     * @see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js#L527
     */
    'react/function-component-definition': ['error', {
      namedComponents: 'function-declaration',
      unnamedComponents: 'arrow-function',
    }],
    /**
     * Allow only typescript as `jsx` files.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
     * @see https://github.com/iamturns/eslint-config-airbnb-typescript/blob/master/index.js#L17
     */
    'react/jsx-filename-extension': ['error', {
      extensions: ['tsx'],
    }],
    /**
     * Limiting the maximum of props on a single line can improve readability.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
     * @see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js#L99
     */
    'react/jsx-max-props-per-line': ['error', {
      maximum: 1,
    }],
    /**
     * Sort props names alphabetically.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
     * @see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js#L144
     */
    'react/jsx-sort-props': ['error', {
      callbacksLast: true,
      shorthandLast: true,
    }],
    /**
     * Prevent usage of dangerous JSX properties.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/1fdf9bdc9788ce6986f8e82f883ff4d7e161f16f/docs/rules/no-danger.md
     * @see https://github.com/airbnb/javascript/blob/7fdc87a8be565fa1f1779dc1d6b6461b953f7d85/packages/eslint-config-airbnb/rules/react.js#L169
     */
    'react/no-danger': 'error',
    /**
     * Allow missing React when using JSX.
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
     * @see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js#L230
     */
    'react/react-in-jsx-scope': 'off',
  },
};
