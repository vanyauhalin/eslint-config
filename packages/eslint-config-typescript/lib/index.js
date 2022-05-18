const jsonc = require(
  '@vanyauhalin/eslint-config-base/lib/eslint-plugin-jsonc',
);
const yml = require('@vanyauhalin/eslint-config-base/lib/eslint-plugin-yml');
const typescript = require('./typescript-eslint');

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [
    '@vanyauhalin/eslint-config-base',
    ...[
      './eslint-plugin-import',
    ].map((config) => require.resolve(config)),
  ],
  overrides: [
    ...jsonc.overrides,
    ...yml.overrides,
    ...typescript.overrides,
  ],
};
