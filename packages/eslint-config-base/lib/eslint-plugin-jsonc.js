/**
 * @type {import('eslint').Linter.Config}
 * @see https://github.com/ota-meshi/eslint-plugin-jsonc
 * @see https://github.com/ota-meshi/jsonc-eslint-parser
 */
module.exports = {
  extends: [
    'plugin:jsonc/recommended-with-json',
  ],
  overrides: [
    {
      files: '*.json',
      parser: 'jsonc-eslint-parser',
      rules: {
        /**
         * Enforces a maximum line length.
         * This is fine, because sometimes have to write long strings.
         * Override `max-len` in the `eslint-config-base/lib/eslint.js`.
         * @see https://github.com/eslint/eslint/blob/938dbdd6c310784cc8a7329efaeb0e34321b9e1f/docs/src/rules/max-len.md
         */
        'max-len': 'off',
      },
    },
    {
      files: 'package.json',
      parser: 'jsonc-eslint-parser',
      rules: {
        /**
         * Require object keys to be sorted.
         * @see https://github.com/ota-meshi/eslint-plugin-jsonc/blob/a4b57f523da8bb496f60361f62f43b2d3348623d/docs/rules/sort-keys.md
         * @see https://github.com/keithamus/sort-package-json/blob/50f91021399d2a6676889b1e1430e1f6c769496c/index.js#L188
         */
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'version',
              'private',
              'description',
              'keywords',
              'homepage',
              'repository',
              'funding',
              'license',
              'author',
              'type',
              'main',
              'bin',
              'files',
              'workspaces',
              'scripts',
              'dependencies',
              'devDependencies',
              'peerDependencies',
              'peerDependenciesMeta',
              'optionalDependencies',
              'bundledDependencies',
              'engines',
            ],
          },
          {
            pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
            order: {
              type: 'asc',
            },
          },
        ],
      },
    },
  ],
  rules: {
    /**
     * Enforce line breaks after opening and before closing array brackets.
     * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-newline.html
     * @see https://github.com/ota-meshi/eslint-plugin-jsonc/blob/a4b57f523da8bb496f60361f62f43b2d3348623d/docs/rules/array-bracket-newline.md
     */
    'jsonc/array-bracket-newline': ['error', {
      minItems: 1,
      multiline: true,
    }],
    /**
     * Disallow spaces inside of brackets.
     * @see https://github.com/ota-meshi/eslint-plugin-jsonc/blob/a4b57f523da8bb496f60361f62f43b2d3348623d/docs/rules/array-bracket-spacing.md
     */
    'jsonc/array-bracket-spacing': ['error', 'never'],
    /**
     * Enforce line breaks between array elements.
     * @see https://github.com/ota-meshi/eslint-plugin-jsonc/blob/a4b57f523da8bb496f60361f62f43b2d3348623d/docs/rules/array-element-newline.md
     */
    'jsonc/array-element-newline': ['error', 'always'],
    /**
     * Enforce consistent comma style.
     * @see https://github.com/ota-meshi/eslint-plugin-jsonc/blob/a4b57f523da8bb496f60361f62f43b2d3348623d/docs/rules/comma-style.md
     */
    'jsonc/comma-style': ['error', 'last'],
    /**
     * Enforce consistent indentation.
     * @see https://github.com/ota-meshi/eslint-plugin-jsonc/blob/a4b57f523da8bb496f60361f62f43b2d3348623d/docs/rules/indent.md
     */
    'jsonc/indent': ['error', 2],
    /**
     * Enforce consistent spacing between keys and values in object literal
     * properties.
     * @see https://github.com/ota-meshi/eslint-plugin-jsonc/blob/a4b57f523da8bb496f60361f62f43b2d3348623d/docs/rules/key-spacing.md
     */
    'jsonc/key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
      mode: 'minimum',
    }],
    /**
     * Disallow octal escape sequences in string literals.
     * @see https://github.com/ota-meshi/eslint-plugin-jsonc/blob/a4b57f523da8bb496f60361f62f43b2d3348623d/docs/rules/no-octal-escape.md
     */
    'jsonc/no-octal-escape': 'error',
    /**
     * Enforce consistent line breaks inside braces.
     * @see https://github.com/ota-meshi/eslint-plugin-jsonc/blob/a4b57f523da8bb496f60361f62f43b2d3348623d/docs/rules/object-curly-newline.md
     */
    'jsonc/object-curly-newline': ['error', {
      consistent: true,
      multiline: true,
    }],
    /**
     * Enforce consistent spacing inside braces.
     * @see https://github.com/ota-meshi/eslint-plugin-jsonc/blob/a4b57f523da8bb496f60361f62f43b2d3348623d/docs/rules/object-curly-spacing.md
     */
    'jsonc/object-curly-spacing': ['error', 'never'],
    /**
     * Enforce placing object properties on separate lines.
     * @see https://github.com/ota-meshi/eslint-plugin-jsonc/blob/a4b57f523da8bb496f60361f62f43b2d3348623d/docs/rules/object-property-newline.md
     */
    'jsonc/object-property-newline': 'error',
  },
  ignorePatterns: [
    'package-lock.json',
  ],
};
