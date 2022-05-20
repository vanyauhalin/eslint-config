/**
 * @type {import('eslint').Linter.Config}
 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/tree/v42.0.0
 */
module.exports = {
  overrides: [
    {
      files: '*.tsx',
      rules: {
        /**
         * Enforce a case style for filenames.
         * @override `@vanyauhalin/eslint-config-base`
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/tree/v42.0.0/docs/rules/filename-case.md
         */
        'unicorn/filename-case': ['error', {
          cases: {
            pascalCase: true,
          },
        }],
        /**
         * Disallow identifiers starting with `new` or `class`.
         * Unfortunately, we have such properties as `className`.
         * @override `@vanyauhalin/eslint-config-base`
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/tree/v42.0.0/docs/rules/no-keyword-prefix.md
         */
        'unicorn/no-keyword-prefix': 'off',
        /**
         * Disallow the use of the `null` literal, to encourage using
         * `undefined` instead.
         * Sometimes need to return `null` from a function component.
         * @override `@vanyauhalin/eslint-config-base`
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/tree/v42.0.0/docs/rules/no-null.md
         */
        'unicorn/no-null': 'warn',
      },
    },
  ],
};
