/**
 * @type {import('eslint').Linter.Config}
 * @see https://github.com/ota-meshi/eslint-plugin-yml/tree/v1.0.0
 * @see https://github.com/ota-meshi/yaml-eslint-parser/tree/v1.0.1
 */
module.exports = {
  extends: [
    'plugin:yml/standard',
  ],
  overrides: [
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
    },
  ],
  ignorePatterns: [
    'pnpm-lock.yaml',
  ],
};
