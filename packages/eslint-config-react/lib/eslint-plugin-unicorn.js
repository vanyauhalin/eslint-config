/**
 * @type {import('eslint').Linter.Config}
 * @see https://github.com/sindresorhus/eslint-plugin-unicorn
 */
module.exports = {
  overrides: [
    {
      files: '*.tsx',
      rules: {
        /**
         * Enforce a case style for filenames.
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/47c8337f9fca67d91461e04d50d6f04583fd8652/docs/rules/filename-case.md
         */
        'unicorn/filename-case': ['error', {
          cases: {
            pascalCase: true,
          },
        }],
        /**
         * Disallow identifiers starting with `new` or `class`.
         * Unfortunately, we have such properties as `className`.
         * Override `eslint-config-base/lib/eslint-plugin-unicorn.js`.
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/32ae4365849f8769c2474e89fcf74ebe057191ff/docs/rules/no-keyword-prefix.md
         */
        'unicorn/no-keyword-prefix': 'off',
        /**
         * Disallow the use of the `null` literal, to encourage using
         * `undefined` instead.
         * Sometimes need to return null from a function component.
         * Override `eslint-config-base/lib/eslint-plugin-unicorn.js`.
         * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/32ae4365849f8769c2474e89fcf74ebe057191ff/docs/rules/no-null.md
         */
        'unicorn/no-null': 'warn',
      },
    },
  ],
};
