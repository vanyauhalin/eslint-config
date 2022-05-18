const typescript = require('@vanyauhalin/eslint-config-typescript');

/**
 * @type {import('eslint').Linter.BaseConfig}
 */
module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    '@vanyauhalin/eslint-config-base/lib/eslint',
    '@vanyauhalin/eslint-config-base/lib/eslint-plugin-import',
    '@vanyauhalin/eslint-config-base/lib/eslint-plugin-jsonc',
    '@vanyauhalin/eslint-config-base/lib/eslint-plugin-promise',
    '@vanyauhalin/eslint-config-base/lib/eslint-plugin-unicorn',
    '@vanyauhalin/eslint-config-base/lib/eslint-plugin-yml',
    '@vanyauhalin/eslint-config-typescript/lib/eslint-plugin-import',
    '@vanyauhalin/eslint-config-typescript/lib/typescript-eslint',
    ...[
      './eslint-plugin-jsx-a11y',
      './eslint-plugin-react',
      './eslint-plugin-unicorn',
    ].map((config) => require.resolve(config)),
  ],
  overrides: [
    ...typescript.overrides,
  ],
};
