const path = require('path');
const imp = require('@vanyauhalin/eslint-config-base/lib/eslint-plugin-import');

/**
 * @type {import('eslint').Linter.Config}
 * @see https://github.com/import-js/eslint-plugin-import
 */
module.exports = {
  overrides: [
    {
      files: '*.ts',
      rules: {
        /**
         * Forbid the import of external modules that are not declared
         * in the `package.json`'s `dependencies`, `devDependencies`,
         * `optionalDependencies`, `peerDependencies`, or `bundledDependencies`.
         * Override `eslint-config-base/lib/eslint-plugin-import.js`.
         * @see https://github.com/import-js/eslint-plugin-import/blob/376747914b47fbdcf99212b9e9bd4d5e09825385/docs/rules/no-extraneous-dependencies.md
         */
        'import/no-extraneous-dependencies': ['error', {
          devDependencies: imp.rules['import/no-extraneous-dependencies'][1]
            .devDependencies
            .map((file) => file.replace(path.extname(file), '.ts')),
        }],
      },
    },
  ],
};
