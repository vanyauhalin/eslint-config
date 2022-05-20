const airbnb = require('eslint-config-airbnb-typescript/lib/shared');

/**
 * @type {import('eslint').Linter.Config}
 * @see https://github.com/typescript-eslint/typescript-eslint
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
        ...[
          './eslint-plugin-import',
        ].map((config) => require.resolve(config)),
      ],
      overrides: [
        ...airbnb.overrides,
      ],
      rules: {
        /**
         * Requires using either `T[]` or `Array<T>` for arrays.
         * @see https://typescript-eslint.io/rules/array-type
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/e97aeb2fb0b393a1d690f0af0e6f3f485fc59937/packages/eslint-plugin/docs/rules/array-type.md
         */
        '@typescript-eslint/array-type': ['error', {
          default: 'array',
        }],
        /**
         * Enforces consistent usage of type imports.
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/e97aeb2fb0b393a1d690f0af0e6f3f485fc59937/packages/eslint-plugin/docs/rules/consistent-type-imports.md
         */
        '@typescript-eslint/consistent-type-imports': ['error', {
          prefer: 'type-imports',
        }],
        /**
         * Require explicit return types on functions and class methods.
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/e97aeb2fb0b393a1d690f0af0e6f3f485fc59937/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
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
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/e97aeb2fb0b393a1d690f0af0e6f3f485fc59937/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
         */
        '@typescript-eslint/explicit-module-boundary-types': ['error', {
          allowArgumentsExplicitlyTypedAsAny: false,
          allowDirectConstAssertionInArrowFunctions: true,
          allowHigherOrderFunctions: true,
          allowTypedFunctionExpressions: true,
        }],
        /**
         * Require or disallow an empty line between class members.
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/e97aeb2fb0b393a1d690f0af0e6f3f485fc59937/packages/eslint-plugin/docs/rules/lines-between-class-members.md
         * @see https://github.com/iamturns/eslint-config-airbnb-typescript/blob/91fd090f6fdd8d598a6ac6e9bb2c2ba33014e425/lib/shared.js#L107
         */
        '@typescript-eslint/lines-between-class-members': ['error', 'always', {
          exceptAfterSingleLine: true,
        }],
        /**
         * Require a specific member delimiter style for interfaces and type
         * literals.
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/e97aeb2fb0b393a1d690f0af0e6f3f485fc59937/packages/eslint-plugin/docs/rules/member-delimiter-style.md
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
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/e97aeb2fb0b393a1d690f0af0e6f3f485fc59937/packages/eslint-plugin/docs/rules/member-ordering.md
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
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/e97aeb2fb0b393a1d690f0af0e6f3f485fc59937/packages/eslint-plugin/docs/rules/method-signature-style.md
         */
        '@typescript-eslint/method-signature-style': ['error', 'method'],
        /**
         * Requires expressions of type void to appear in statement position.
         * @see https://github.com/typescript-eslint/typescript-eslint/blob/e97aeb2fb0b393a1d690f0af0e6f3f485fc59937/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md
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
         * @see https://github.com/eslint/eslint/blob/938dbdd6c310784cc8a7329efaeb0e34321b9e1f/docs/src/rules/max-classes-per-file.md
         * @see https://github.com/airbnb/javascript/blob/7fdc87a8be565fa1f1779dc1d6b6461b953f7d85/packages/eslint-config-airbnb-base/rules/best-practices.js#L66
         */
        'max-classes-per-file': 'off',
      },
    },
  ],
};
