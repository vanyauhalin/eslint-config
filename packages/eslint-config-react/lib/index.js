const typescript = require('@vanyauhalin/eslint-config-typescript');
const typescriptLocal = require('./typescript-eslint');

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [
    '@vanyauhalin/eslint-config-base',
    '@vanyauhalin/eslint-config-typescript',
  ],
  overrides: [
    ...typescript.overrides,
    ...typescriptLocal.overrides,
  ],
};
