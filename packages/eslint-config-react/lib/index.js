const utils = require('@vanyauhalin/eslint-config-base/lib/utils');
const eslintPluginJsxA11y = require('./eslint-plugin-jsx-a11y');
const eslintPluginReact = require('./eslint-plugin-react');

const { add } = utils.group({
  ...eslintPluginJsxA11y,
  ...eslintPluginReact,
});

module.exports = utils.configure({
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    '@vanyauhalin/eslint-config-typescript',
  ],
  rules: add([
    'jsx-a11y/label-has-associated-control',
    'react/function-component-definition',
    'react/jsx-filename-extension',
    'react/jsx-max-props-per-line',
    'react/jsx-sort-props',
    'react/react-in-jsx-scope',
  ]),
});
