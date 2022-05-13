const rules = {
  /**
   * Enforce that a label tag has a text label and an associated control.
   * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
   * @see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react-a11y.js#L123
   */
  'jsx-a11y/label-has-associated-control': ['error', {
    labelComponents: [],
    labelAttributes: [],
    controlComponents: [],
    assert: 'nesting',
    depth: 25,
  }],
};

export {
  rules,
};
