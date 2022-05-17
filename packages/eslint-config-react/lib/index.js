const utils = require('@vanyauhalin/eslint-config-base/lib/utils');
const typescript = require('@vanyauhalin/eslint-config-typescript');
const eslintPluginJsxA11y = require('./eslint-plugin-jsx-a11y');
const eslintPluginReact = require('./eslint-plugin-react');

const { add } = utils.group({
  ...eslintPluginJsxA11y,
  ...eslintPluginReact,
});

module.exports = utils.configure({
  ...typescript,
  extends: [
    ...typescript.extends,
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
  ],
  rules: {
    ...typescript.rules,
    ...add([
      'jsx-a11y/label-has-associated-control',
      'react/destructuring-assignment',
      'react/function-component-definition',
      'react/jsx-filename-extension',
      'react/jsx-max-props-per-line',
      'react/jsx-sort-props',
      'react/react-in-jsx-scope',
    ]),
  },
});
