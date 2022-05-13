const rules = {
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
};

export {
  rules,
};
