const jsonc = require(
  '@vanyauhalin/eslint-config-base/lib/eslint-plugin-jsonc',
);
const yml = require('@vanyauhalin/eslint-config-base/lib/eslint-plugin-yml');
const airbnb = require('eslint-config-airbnb-typescript/lib/shared');

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    '@vanyauhalin/eslint-config-base/lib/eslint',
    '@vanyauhalin/eslint-config-base/lib/eslint-plugin-eslint-comments',
    '@vanyauhalin/eslint-config-base/lib/eslint-plugin-import',
    '@vanyauhalin/eslint-config-base/lib/eslint-plugin-jsonc',
    '@vanyauhalin/eslint-config-base/lib/eslint-plugin-promise',
    '@vanyauhalin/eslint-config-base/lib/eslint-plugin-unicorn',
    '@vanyauhalin/eslint-config-base/lib/eslint-plugin-yml',
    ...[
      './eslint-plugin-import',
      './typescript-eslint',
    ].map((config) => require.resolve(config)),
  ],
  overrides: [
    ...airbnb.overrides,
    ...jsonc.overrides,
    ...yml.overrides,
  ],
};
