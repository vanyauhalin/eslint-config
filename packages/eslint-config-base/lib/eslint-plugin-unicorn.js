/**
 * @type {import('eslint').Linter.Config}
 * @see https://github.com/sindresorhus/eslint-plugin-unicorn/tree/v42.0.0
 */
module.exports = {
  extends: [
    'plugin:unicorn/recommended',
  ],
  plugins: [
    'unicorn',
  ],
  rules: {
    /**
     * Disallow identifiers starting with `new` or `class`.
     * @see https://github.com/sindresorhus/eslint-plugin-unicorn/tree/v42.0.0/docs/rules/no-keyword-prefix.md
     */
    'unicorn/no-keyword-prefix': 'error',
    /**
     * Disallow nested ternary expressions.
     * Prefer the eslint `no-nested-ternary` rule.
     * @see https://github.com/sindresorhus/eslint-plugin-unicorn/tree/v42.0.0/docs/rules/no-nested-ternary.md
     */
    'unicorn/no-nested-ternary': 'off',
    /**
     * Disallow unreadable array destructuring.
     * Prefer the eslint `prefer-destructuring` rule.
     * @see https://github.com/sindresorhus/eslint-plugin-unicorn/tree/v42.0.0/docs/rules/no-unreadable-array-destructuring.md
     */
    'unicorn/no-unreadable-array-destructuring': 'off',
    /**
     * Prefer JavaScript modules (ESM) over CommonJS.
     * Disabled because the plugin does not detect the `type` property
     * in `package.json`.
     * @see https://github.com/sindresorhus/eslint-plugin-unicorn/tree/v42.0.0/docs/rules/prefer-module.md
     */
    'unicorn/prefer-module': 'off',
  },
};
