const rules = {
  /**
   * Requires using either `T[]` or `Array<T>` for arrays.
   * @see https://typescript-eslint.io/rules/array-type
   */
  '@typescript-eslint/array-type': ['error', {
    default: 'array',
  }],
  /**
   * Enforces consistent usage of type imports.
   * @see https://typescript-eslint.io/rules/consistent-type-imports
   */
  '@typescript-eslint/consistent-type-imports': ['error', {
    prefer: 'type-imports',
  }],
  /**
   * Require explicit return types on functions and class methods.
   * @see https://typescript-eslint.io/rules/explicit-function-return-type
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
   * @see https://typescript-eslint.io/rules/explicit-module-boundary-types
   */
  '@typescript-eslint/explicit-module-boundary-types': ['error', {
    allowArgumentsExplicitlyTypedAsAny: false,
    allowDirectConstAssertionInArrowFunctions: true,
    allowHigherOrderFunctions: true,
    allowTypedFunctionExpressions: true,
  }],
  /**
   * Require or disallow an empty line between class members.
   * @see https://typescript-eslint.io/rules/lines-between-class-members/
   * @see https://github.com/iamturns/eslint-config-airbnb-typescript/blob/master/lib/shared.js#L105
   */
  '@typescript-eslint/lines-between-class-members': ['error', 'always', {
    exceptAfterSingleLine: true,
  }],
  /**
   * Require a specific member delimiter style for interfaces and type literals.
   * @see https://typescript-eslint.io/rules/member-delimiter-style
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
   * @see https://typescript-eslint.io/rules/member-ordering
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
   * @see https://typescript-eslint.io/rules/method-signature-style
   */
  '@typescript-eslint/method-signature-style': ['error', 'method'],
  /**
   * Requires expressions of type void to appear in statement position.
   * @see https://typescript-eslint.io/rules/no-confusing-void-expression
   */
  '@typescript-eslint/no-confusing-void-expression': ['error'],
};

exports.rules = rules;
