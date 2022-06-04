/**
 * @type {import('eslint').Linter.Config}
 * @see https://github.com/import-js/eslint-plugin-import/tree/v2.26.0
 */
module.exports = {
  overrides: [
    {
      files: 'vite.config.js',
      rules: {
        /**
         * Prohibit default exports.
         * @override `@vanyauhalin/eslint-config-base`
         * @see https://github.com/import-js/eslint-plugin-import/tree/v2.26.0/docs/rules/no-default-export.md
         * @see https://github.com/vitejs/vite/blob/v2.9.9/docs/config/index.md
         */
        'import/no-default-export': 'off',
      },
    },
  ],
  rules: {
    /**
     * This rule enforces that all exports are declared at the bottom of
     * the file. This rule will report any export declarations that comes before
     * any non-export statements.
     * @override `airbnb-base`
     * @see https://github.com/import-js/eslint-plugin-import/tree/v2.26.0/docs/rules/exports-last.md
     */
    'import/exports-last': 'error',
    /**
     * Reports when named exports are not grouped together in a single `export`
     * declaration or when multiple assignments to CommonJS `module.exports`
     * or `exports` object are present in a single file.
     * @override `airbnb-base`
     * @see https://github.com/import-js/eslint-plugin-import/tree/v2.26.0/docs/rules/group-exports.md
     */
    'import/group-exports': 'error',
    /**
     * Prohibit default exports.
     * @override `airbnb-base`
     * @see https://github.com/import-js/eslint-plugin-import/tree/v2.26.0/docs/rules/no-default-export.md
     */
    'import/no-default-export': 'error',
    /**
     * Reports use of a deprecated name, as indicated by a JSDoc block with
     * a `@deprecated` tag or TomDoc `Deprecated:` comment.
     * @override `airbnb-base`
     * @see https://github.com/import-js/eslint-plugin-import/tree/v2.26.0/docs/rules/no-deprecated.md
     */
    'import/no-deprecated': 'error',
    /**
     * Forbid the import of external modules that are not declared
     * in the `package.json`'s `dependencies`, `devDependencies`,
     * `optionalDependencies`, `peerDependencies`, or `bundledDependencies`.
     * @override `airbnb-base`
     * @see https://github.com/import-js/eslint-plugin-import/tree/v2.26.0/docs/rules/no-extraneous-dependencies.md
     */
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        '**/test/**/*.js',
        '**/scripts.js',
        '**/vite.config.js',
      ],
    }],
    /**
     * Enforce a convention in the order of `require()` / `import` statements.
     * @override `airbnb-base`
     * @see https://github.com/import-js/eslint-plugin-import/tree/v2.26.0/docs/rules/order.md
     */
    'import/order': ['error', {
      alphabetize: {
        order: 'asc',
      },
    }],
    /**
     * When there is only a single export from a module, prefer using default
     * export over named export.
     * @override `airbnb-base`
     * @see https://github.com/import-js/eslint-plugin-import/tree/v2.26.0/docs/rules/prefer-default-export.md
     */
    'import/prefer-default-export': 'off',
  },
};
