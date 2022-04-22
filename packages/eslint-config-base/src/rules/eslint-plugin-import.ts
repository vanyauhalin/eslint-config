const rules = {
  /**
   * This rule enforces that all exports are declared at the bottom of the file.
   * This rule will report any export declarations
   * that comes before any non-export statements.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md
   * @see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js#L215
   */
  'import/exports-last': 'error',
  /**
   * Reports when named exports are not grouped together
   * in a single `export` declaration or when multiple assignments
   * to CommonJS `module.exports` or `exports` object are present
   * in a single file.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/group-exports.md
   * @see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js#L221
   */
  'import/group-exports': 'error',
  /**
   * Reports `require([string])` function calls,
   * `module.exports` or `exports.*`.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-commonjs.md
   * @see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js#L107
   */
  'import/no-commonjs': 'error',
  /**
   * Prohibit default exports.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
   * @see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js#L225
   */
  'import/no-default-export': 'error',
  /**
   * Reports use of a deprecated name, as indicated by a JSDoc block
   * with a `@deprecated` tag or TomDoc `Deprecated:` comment.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-deprecated.md
   * @see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js#L66
   */
  'import/no-deprecated': 'error',
  /**
   * Forbid the import of external modules that are not declared
   * in the `package.json`'s `dependencies`, `devDependencies`,
   * `optionalDependencies`, `peerDependencies`, or `bundledDependencies`.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
   * @see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js#L71
   */
  'import/no-extraneous-dependencies': ['error', {
    devDependencies: ['./*.{cjs,js}'],
  }],
  /**
   * Warn if a module could be mistakenly parsed as a `script`
   * by a consumer leveraging [Unambiguous JavaScript Grammar](https://github.com/nodejs/node-eps/blob/HEAD/002-es-modules.md#32-determining-if-source-is-an-es-module)
   * to determine correct parsing goal.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/unambiguous.md
   * @see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js#L186
   */
  'import/unambiguous': 'error',
  /**
   * Enforce a convention in the order of `require()` / `import` statements.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
   * @see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js#L149
   */
  'import/order': ['error', {
    alphabetize: {
      order: 'asc',
    },
  }],
  /**
   * When there is only a single export from a module,
   * prefer using default export over named export.
   * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
   * @see https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/imports.js#L157
   */
  'import/prefer-default-export': 'off',
};

export {
  rules,
};
