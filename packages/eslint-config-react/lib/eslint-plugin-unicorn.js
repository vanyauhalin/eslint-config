/**
 * @type {import('eslint').Linter.BaseConfig}
 */
module.exports = {
  rules: {
    /**
     * Enforce a case style for filenames.
     * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/47c8337f9fca67d91461e04d50d6f04583fd8652/docs/rules/filename-case.md
     */
    'unicorn/filename-case': ['error', {
      cases: {
        kebabCase: true,
        pascalCase: true,
      },
    }],
  },
};
