/**
 * @type {import('eslint').Linter.Config}
 * @see https://github.com/ota-meshi/eslint-plugin-jsonc/tree/v2.2.1
 * @see https://github.com/ota-meshi/jsonc-eslint-parser/tree/v2.1.0
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
         * @override `@vanyauhalin/eslint-config-base`
         * @see https://github.com/eslint/eslint/tree/v8.13.0/docs/src/rules/max-len.md
         */
        'max-len': 'off',
      },
    },
    {
      files: 'package.json',
      parser: 'jsonc-eslint-parser',
      rules: {
        /**
         * Require array values to be sorted.
         * @see https://github.com/keithamus/sort-package-json/tree/v1.57.0/index.js#L188
         * @see https://github.com/ota-meshi/eslint-plugin-jsonc/blob/v2.2.1/docs/rules/sort-array-values.md
         */
        'jsonc/sort-array-values': [
          'error',
          {
            pathPattern: '^keywords|workspaces$',
            order: {
              type: 'asc',
            },
          },
        ],
        /**
         * Require object keys to be sorted.
         * @see https://github.com/keithamus/sort-package-json/tree/v1.57.0/index.js#L188
         * @see https://github.com/ota-meshi/eslint-plugin-jsonc/tree/v2.2.1/docs/rules/sort-keys.md
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
              'exports',
              'main',
              'module',
              'types',
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
            pathPattern: '^scripts'
              + '|(?:dev|peer|optional|bundled)?[Dd]ependencies|engines$',
            order: {
              type: 'asc',
            },
          },
        ],
      },
    },
    {
      files: 'tsconfig.*',
      parser: 'jsonc-eslint-parser',
      rules: {
        /**
         * Require array values to be sorted.
         * @see https://www.typescriptlang.org/tsconfig
         * @see https://github.com/ota-meshi/eslint-plugin-jsonc/blob/v2.2.1/docs/rules/sort-array-values.md
         */
        'jsonc/sort-array-values': [
          'error',
          {
            pathPattern: '^files|include|exclude'
              + '|compilerOptions.(?:moduleSuffixes|rootDirs|typeRoots|types)'
              + '|watchOptions.(?:excludeDirectories|excludeFiles)'
              + '|typeAcquisition.(?:include|exclude)$',
            order: {
              type: 'asc',
            },
          },
        ],
        /**
         * Require object keys to be sorted.
         * @see https://www.typescriptlang.org/tsconfig
         * @see https://github.com/ota-meshi/eslint-plugin-jsonc/tree/v2.2.1/docs/rules/sort-keys.md
         */
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'extends',
              'compilerOptions',
              'watchOptions',
              'typeAcquisition',
              'files',
              'include',
              'exclude',
              'references',
            ],
          },
          {
            pathPattern: '^compilerOptions$',
            order: [
              'allowUnreachableCode',
              'allowUnusedLabels',
              'alwaysStrict',
              'exactOptionalPropertyTypes',
              'noFallthroughCasesInSwitch',
              'noImplicitAny',
              'noImplicitOverride',
              'noImplicitReturns',
              'noImplicitThis',
              'noPropertyAccessFromIndexSignature',
              'noUncheckedIndexedAccess',
              'noUnusedLocals',
              'noUnusedParameters',
              'strict',
              'strictBindCallApply',
              'strictFunctionTypes',
              'strictNullChecks',
              'strictPropertyInitialization',
              'useUnknownInCatchVariables',
              'allowUmdGlobalAccess',
              'baseUrl',
              'module',
              'moduleResolution',
              'moduleSuffixes',
              'noResolve',
              'paths',
              'resolveJsonModule',
              'rootDir',
              'rootDirs',
              'typeRoots',
              'types',
              'declaration',
              'declarationDir',
              'declarationMap',
              'downlevelIteration',
              'emitBOM',
              'emitDeclarationOnly',
              'importHelpers',
              'importsNotUsedAsValues',
              'inlineSourceMap',
              'inlineSources',
              'mapRoot',
              'newLine',
              'noEmit',
              'noEmitHelpers',
              'noEmitOnError',
              'outDir',
              'outFile',
              'preserveConstEnums',
              'preserveValueImports',
              'removeComments',
              'sourceMap',
              'sourceRoot',
              'stripInternal',
              'allowJs',
              'checkJs',
              'maxNodeModuleJsDepth',
              'disableSizeLimit',
              'plugins',
              'allowSyntheticDefaultImports',
              'esModuleInterop',
              'forceConsistentCasingInFileNames',
              'isolatedModules',
              'preserveSymlinks',
              'charset',
              'keyofStringsOnly',
              'noImplicitUseStrict',
              'noStrictGenericChecks',
              'out',
              'suppressExcessPropertyErrors',
              'suppressImplicitAnyIndexErrors',
              'emitDecoratorMetadata',
              'experimentalDecorators',
              'jsx',
              'jsxFactory',
              'jsxFragmentFactory',
              'jsxImportSource',
              'lib',
              'moduleDetection',
              'noLib',
              'reactNamespace',
              'target',
              'useDefineForClassFields',
              'diagnostics',
              'explainFiles',
              'extendedDiagnostics',
              'generateCpuProfile',
              'listEmittedFiles',
              'listFiles',
              'traceResolution',
              'composite',
              'disableReferencedProjectLoad',
              'disableSolutionSearching',
              'disableSourceOfProjectReferenceRedirect',
              'incremental',
              'tsBuildInfoFile',
              'noErrorTruncation',
              'preserveWatchOutput',
              'pretty',
              'skipDefaultLibCheck',
              'skipLibCheck',
              'assumeChangesOnlyAffectDirectDependencies',
            ],
          },
          {
            pathPattern: '^compilerOptions.paths$',
            order: {
              type: 'asc',
            },
          },
          {
            pathPattern: '^watchOptions$',
            order: [
              'watchFile',
              'watchDirectory',
              'fallbackPolling',
              'synchronousWatchDirectory',
              'excludeDirectories',
              'excludeFiles',
            ],
          },
          {
            pathPattern: '^typeAcquisition$',
            order: [
              'enable',
              'include',
              'exclude',
              'disableFilenameBasedTypeAcquisition',
            ],
          },
        ],
      },
    },
  ],
  rules: {
    /**
     * Enforce line breaks after opening and before closing array brackets.
     * @see https://github.com/ota-meshi/eslint-plugin-jsonc/tree/v2.2.1/docs/rules/array-bracket-newline.md
     */
    'jsonc/array-bracket-newline': ['error', {
      minItems: 1,
      multiline: true,
    }],
    /**
     * Disallow spaces inside of brackets.
     * @see https://github.com/ota-meshi/eslint-plugin-jsonc/tree/v2.2.1/docs/rules/array-bracket-spacing.md
     */
    'jsonc/array-bracket-spacing': ['error', 'never'],
    /**
     * Enforce line breaks between array elements.
     * @see https://github.com/ota-meshi/eslint-plugin-jsonc/tree/v2.2.1/docs/rules/array-element-newline.md
     */
    'jsonc/array-element-newline': ['error', 'always'],
    /**
     * Enforce consistent comma style.
     * @see https://github.com/ota-meshi/eslint-plugin-jsonc/tree/v2.2.1/docs/rules/comma-style.md
     */
    'jsonc/comma-style': ['error', 'last'],
    /**
     * Enforce consistent indentation.
     * @see https://github.com/ota-meshi/eslint-plugin-jsonc/tree/v2.2.1/docs/rules/indent.md
     */
    'jsonc/indent': ['error', 2],
    /**
     * Enforce consistent spacing between keys and values in object literal
     * properties.
     * @see https://github.com/ota-meshi/eslint-plugin-jsonc/tree/v2.2.1/docs/rules/key-spacing.md
     */
    'jsonc/key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
      mode: 'minimum',
    }],
    /**
     * Disallow octal escape sequences in string literals.
     * @see https://github.com/ota-meshi/eslint-plugin-jsonc/tree/v2.2.1/docs/rules/no-octal-escape.md
     */
    'jsonc/no-octal-escape': 'error',
    /**
     * Enforce consistent line breaks inside braces.
     * @see https://github.com/ota-meshi/eslint-plugin-jsonc/tree/v2.2.1/docs/rules/object-curly-newline.md
     */
    'jsonc/object-curly-newline': ['error', {
      consistent: true,
      multiline: true,
    }],
    /**
     * Enforce consistent spacing inside braces.
     * @see https://github.com/ota-meshi/eslint-plugin-jsonc/tree/v2.2.1/docs/rules/object-curly-spacing.md
     */
    'jsonc/object-curly-spacing': ['error', 'never'],
    /**
     * Enforce placing object properties on separate lines.
     * @see https://github.com/ota-meshi/eslint-plugin-jsonc/tree/v2.2.1/docs/rules/object-property-newline.md
     */
    'jsonc/object-property-newline': 'error',
  },
  ignorePatterns: [
    'package-lock.json',
  ],
};
