const typescriptEslint = require('./typescript-eslint');

/**
 * @type {import('eslint').Linter.BaseConfig}
 */
module.exports = {
  extends: [
    '@vanyauhalin/eslint-config-base',
    'airbnb-typescript/base',
    ...[
      './eslint-plugin-import',
    ].map((config) => require.resolve(config)),
  ],
  rules: {
    ...typescriptEslint,
  },
};
