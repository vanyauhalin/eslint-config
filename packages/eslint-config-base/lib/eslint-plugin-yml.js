/**
 * @see https://github.com/ota-meshi/eslint-plugin-yml
 * @see https://github.com/ota-meshi/yaml-eslint-parser
 * @type {import('eslint').Linter.BaseConfig}
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
};
