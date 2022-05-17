/**
 * @type {import('eslint').Linter.BaseConfig}
 */
module.exports = {
  extends: [
    'plugin:jsonc/recommended-with-json',
  ],
  overrides: [
    {
      files: '*.json',
      parser: 'jsonc-eslint-parser',
    },
    {
      files: 'package.json',
      parser: 'jsonc-eslint-parser',
      rules: {
        /**
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
     */
    'jsonc/array-bracket-newline': ['error', {
      multiline: true,
    }],
    /**
     * Disallow spaces inside of brackets.
     * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-spacing.html
     */
    'jsonc/array-bracket-spacing': ['error', 'never'],
    /**
     * Enforce line breaks between array elements.
     * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-element-newline.html
     */
    'jsonc/array-element-newline': ['error', 'always'],
    /**
     * Enforce consistent comma style.
     * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/comma-style.html
     */
    'jsonc/comma-style': ['error', 'last'],
    /**
     * Enforce consistent indentation.
     * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/indent.html
     */
    'jsonc/indent': ['error', 2],
    /**
     * Enforce consistent spacing between keys and values in object literal
     * properties.
     * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/key-spacing.html
     */
    'jsonc/key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
      mode: 'minimum',
    }],
    /**
     * Disallow octal escape sequences in string literals.
     * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal-escape.html
     */
    'jsonc/no-octal-escape': 'error',
    /**
     * Enforce consistent line breaks inside braces.
     * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-newline.html
     */
    'jsonc/object-curly-newline': ['error', {
      consistent: true,
      multiline: true,
    }],
    /**
     * Enforce consistent spacing inside braces.
     * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-spacing.html
     */
    'jsonc/object-curly-spacing': ['error', 'never'],
    /**
     * Enforce placing object properties on separate lines.
     * @see https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-property-newline.html
     */
    'jsonc/object-property-newline': 'error',
  },
};
