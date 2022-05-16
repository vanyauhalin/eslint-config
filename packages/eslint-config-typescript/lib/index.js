const utils = require('@vanyauhalin/eslint-config-base/lib/utils');
const eslintPluginImport = require('./eslint-plugin-import');
const typescriptEslint = require('./typescript-eslint');

const { add } = utils.group({
  ...eslintPluginImport,
  ...typescriptEslint,
});

module.exports = utils.configure({
  extends: [
    'airbnb-typescript/base',
    '@vanyauhalin/eslint-config-base',
  ],
  rules: add([
    '@typescript-eslint/array-type',
    '@typescript-eslint/consistent-type-imports',
    '@typescript-eslint/explicit-function-return-type',
    '@typescript-eslint/explicit-module-boundary-types',
    '@typescript-eslint/lines-between-class-members',
    '@typescript-eslint/member-delimiter-style',
    '@typescript-eslint/member-ordering',
    '@typescript-eslint/method-signature-style',
    '@typescript-eslint/no-confusing-void-expression',
    'import/no-extraneous-dependencies',
  ]),
});
