/**
 * @type {import('eslint').Linter.Config}
 * @see https://github.com/typescript-eslint/typescript-eslint/tree/v5.21.0
 */
module.exports = {
  overrides: [
    {
      files: '*.ts',
      extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        '@vanyauhalin/eslint-config-base/lib/eslint',
        '@vanyauhalin/eslint-config-base/lib/eslint-plugin-import',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        /**
         * Requires using either `T[]` or `Array<T>` for arrays.
         * @see https://github.com/typescript-eslint/typescript-eslint/tree/v5.21.0/packages/eslint-plugin/docs/rules/array-type.md
         */
        '@typescript-eslint/array-type': ['error', {
          default: 'array',
        }],
        /**
         * Enforces consistent usage of type imports.
         * @see https://github.com/typescript-eslint/typescript-eslint/tree/v5.21.0/packages/eslint-plugin/docs/rules/consistent-type-imports.md
         */
        '@typescript-eslint/consistent-type-imports': ['error', {
          prefer: 'type-imports',
        }],
        /**
         * Require explicit return types on functions and class methods.
         * @see https://github.com/typescript-eslint/typescript-eslint/tree/v5.21.0/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
         */
        '@typescript-eslint/explicit-function-return-type': ['error', {
          allowExpressions: true,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
          allowDirectConstAssertionInArrowFunctions: true,
          allowConciseArrowFunctionExpressionsStartingWithVoid: true,
        }],
        /**
         * Require explicit return and argument types on exported functions
         * and classes public class methods.
         * @see https://github.com/typescript-eslint/typescript-eslint/tree/v5.21.0/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
         */
        '@typescript-eslint/explicit-module-boundary-types': ['error', {
          allowArgumentsExplicitlyTypedAsAny: false,
          allowDirectConstAssertionInArrowFunctions: true,
          allowHigherOrderFunctions: true,
          allowTypedFunctionExpressions: true,
        }],
        /**
         * Require or disallow an empty line between class members.
         * @override `airbnb-typescript/base`
         * @see https://github.com/typescript-eslint/typescript-eslint/tree/v5.21.0/packages/eslint-plugin/docs/rules/lines-between-class-members.md
         */
        '@typescript-eslint/lines-between-class-members': ['error', 'always', {
          exceptAfterSingleLine: true,
        }],
        /**
         * Require a specific member delimiter style for interfaces and type
         * literals.
         * @see https://github.com/typescript-eslint/typescript-eslint/tree/v5.21.0/packages/eslint-plugin/docs/rules/member-delimiter-style.md
         */
        '@typescript-eslint/member-delimiter-style': ['error', {
          multiline: {
            delimiter: 'semi',
            requireLast: true,
          },
          singleline: {
            delimiter: 'semi',
            requireLast: false,
          },
          multilineDetection: 'brackets',
        }],
        /**
         * Require a consistent member declaration order.
         * @see https://github.com/typescript-eslint/typescript-eslint/tree/v5.21.0/packages/eslint-plugin/docs/rules/member-ordering.md
         */
        '@typescript-eslint/member-ordering': ['error', {
          default: {
            memberTypes: [
              'signature',
              'public-static-field',
              'protected-static-field',
              'private-static-field',
              'public-decorated-field',
              'protected-decorated-field',
              'private-decorated-field',
              'public-instance-field',
              'protected-instance-field',
              'private-instance-field',
              'public-abstract-field',
              'protected-abstract-field',
              'private-abstract-field',
              'public-field',
              'protected-field',
              'private-field',
              'static-field',
              'instance-field',
              'abstract-field',
              'decorated-field',
              'field',
              'public-constructor',
              'protected-constructor',
              'private-constructor',
              'constructor',
              'public-static-get',
              'protected-static-get',
              'private-static-get',
              'public-decorated-get',
              'protected-decorated-get',
              'private-decorated-get',
              'public-instance-get',
              'protected-instance-get',
              'private-instance-get',
              'public-abstract-get',
              'protected-abstract-get',
              'private-abstract-get',
              'public-get',
              'protected-get',
              'private-get',
              'static-get',
              'instance-get',
              'abstract-get',
              'decorated-get',
              'get',
              'public-static-set',
              'protected-static-set',
              'private-static-set',
              'public-decorated-set',
              'protected-decorated-set',
              'private-decorated-set',
              'public-instance-set',
              'protected-instance-set',
              'private-instance-set',
              'public-abstract-set',
              'protected-abstract-set',
              'private-abstract-set',
              'public-set',
              'protected-set',
              'private-set',
              'static-set',
              'instance-set',
              'abstract-set',
              'decorated-set',
              'set',
              'public-static-method',
              'protected-static-method',
              'private-static-method',
              'public-decorated-method',
              'protected-decorated-method',
              'private-decorated-method',
              'public-instance-method',
              'protected-instance-method',
              'private-instance-method',
              'public-abstract-method',
              'protected-abstract-method',
              'private-abstract-method',
              'public-method',
              'protected-method',
              'private-method',
              'static-method',
              'instance-method',
              'abstract-method',
              'decorated-method',
              'method',
            ],
            order: 'alphabetically',
          },
        }],
        /**
         * Enforces using a particular method signature syntax.
         * @see https://github.com/typescript-eslint/typescript-eslint/tree/v5.21.0/packages/eslint-plugin/docs/rules/method-signature-style.md
         */
        '@typescript-eslint/method-signature-style': ['error', 'method'],
        /**
         * Requires expressions of type void to appear in statement position.
         * @see https://github.com/typescript-eslint/typescript-eslint/tree/v5.21.0/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md
         */
        '@typescript-eslint/no-confusing-void-expression': ['error'],
      },
    },
    {
      files: '*.d.ts',
      rules: {
        /**
         * Enforces a maximum number of classes per file.
         * Having many classes in single file describing types is normal.
         * @override `airbnb-base`
         * @see https://github.com/eslint/eslint/tree/v8.13.0/docs/src/rules/max-classes-per-file.md
         */
        'max-classes-per-file': 'off',
        /**
         * Enforces a maximum line length.
         * Types are pretty verbose.
         * @override `@vanyauhalin/eslint-config-base`
         * @see https://github.com/eslint/eslint/tree/v8.13.0/docs/src/rules/max-len.md
         */
        'max-len': ['error', {
          code: 120,
          ignoreComments: true,
          ignoreRegExpLiterals: true,
          ignoreStrings: false,
          ignoreTemplateLiterals: true,
          ignoreUrls: true,
          tabWidth: 2,
        }],
      },
    },
  ],
};
