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
    {
      files: '*.tsx',
      extends: [
        'airbnb/hooks',
        '@vanyauhalin/eslint-config-typescript/lib/eslint-plugin-import',
        ...[
          './eslint-plugin-jsx-a11y',
          './eslint-plugin-react',
          './eslint-plugin-unicorn',
        ].map((config) => require.resolve(config)),
      ],
    },
  ],
};
