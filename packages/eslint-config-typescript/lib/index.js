const base = require('@vanyauhalin/eslint-config-base');
const eslintPluginImport = require('./eslint-plugin-import');
const typescriptEslint = require('./typescript-eslint');

/**
 * @type {import('eslint').Linter.BaseConfig}
 */
module.exports = {
  ...base,
  extends: [
    ...base.extends,
    'airbnb-typescript/base',
  ],
  rules: {
    ...base.rules,
    ...eslintPluginImport,
    ...typescriptEslint,
  },
};
