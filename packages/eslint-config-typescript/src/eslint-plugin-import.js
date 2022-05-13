const { extname } = require('path');
const base = require('@vanyauhalin/eslint-config-base');

module.exports = {
  /**
   * Forbid the import of external modules that are not declared
   * in the `package.json`'s `dependencies`, `devDependencies`,
   * `optionalDependencies`, `peerDependencies`, or `bundledDependencies`.
   * @see https://github.com/vanyauhalin/eslint-config/blob/packages/eslint-config-base/src/rules/eslint-plugin-import.js#L45
   */
  'import/no-extraneous-dependencies': ['error', {
    devDependencies: base.rules['import/no-extraneous-dependencies'][1]
      .devDependencies
      .reduce((acc, cur) => [...acc, cur.replace(extname(cur), '.ts')], []),
  }],
};
