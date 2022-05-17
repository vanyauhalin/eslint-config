module.exports = {
  plugins: [
    'promise',
  ],
  rules: {
    /**
     * Return inside each `then()` to create readable and reusable Promise
     * chains.
     * @see https://github.com/xjamundx/eslint-plugin-promise/blob/f10d8fc0b9f5680f849d6b4d50ac9e33008c5a29/docs/rules/always-return.md
     */
    'promise/always-return': 'error',
    /**
     * Avoid creating `new` promises outside of utility libs.
     * @see https://github.com/xjamundx/eslint-plugin-promise/blob/f10d8fc0b9f5680f849d6b4d50ac9e33008c5a29/docs/rules/avoid-new.md
     */
    'promise/avoid-new': 'off',
    /**
     * Enforces the use of `catch()` on un-returned promises.
     * @see https://github.com/xjamundx/eslint-plugin-promise/blob/f10d8fc0b9f5680f849d6b4d50ac9e33008c5a29/docs/rules/catch-or-return.md
     */
    'promise/catch-or-return': 'error',
    /**
     * Avoid calling `cb()` inside of a `then()` or `catch()`.
     * @see https://github.com/xjamundx/eslint-plugin-promise/blob/f10d8fc0b9f5680f849d6b4d50ac9e33008c5a29/docs/rules/no-callback-in-promise.md
     */
    'promise/no-callback-in-promise': 'error',
    /**
     * In an ES5 environment, make sure to create a `Promise` constructor before
     * using.
     * @see https://github.com/xjamundx/eslint-plugin-promise/blob/f10d8fc0b9f5680f849d6b4d50ac9e33008c5a29/docs/rules/no-native.md
     */
    'promise/no-native': 'off',
    /**
     * Avoid nested `then()` or `catch()` statements.
     * @see https://github.com/xjamundx/eslint-plugin-promise/blob/f10d8fc0b9f5680f849d6b4d50ac9e33008c5a29/docs/rules/no-nesting.md
     */
    'promise/no-nesting': 'error',
    /**
     * Avoid calling `new` on a Promise static method.
     * @see https://github.com/xjamundx/eslint-plugin-promise/blob/f10d8fc0b9f5680f849d6b4d50ac9e33008c5a29/docs/rules/no-new-statics.md
     */
    'promise/no-new-statics': 'error',
    /**
     * Avoid using promises inside of callbacks.
     * @see https://github.com/xjamundx/eslint-plugin-promise/blob/f10d8fc0b9f5680f849d6b4d50ac9e33008c5a29/docs/rules/no-promise-in-callback.md
     */
    'promise/no-promise-in-callback': 'warn',
    /**
     * Disallow return statements in `finally()`.
     * @see https://github.com/xjamundx/eslint-plugin-promise/blob/f10d8fc0b9f5680f849d6b4d50ac9e33008c5a29/docs/rules/no-return-in-finally.md
     */
    'promise/no-return-in-finally': 'error',
    /**
     * Avoid wrapping values in `Promise.resolve` or `Promise.reject` when
     * not needed.
     * @see https://github.com/xjamundx/eslint-plugin-promise/blob/f10d8fc0b9f5680f849d6b4d50ac9e33008c5a29/docs/rules/no-return-wrap.md
     */
    'promise/no-return-wrap': 'error',
    /**
     * Enforce consistent param names when creating new promises.
     * @see https://github.com/xjamundx/eslint-plugin-promise/blob/f10d8fc0b9f5680f849d6b4d50ac9e33008c5a29/docs/rules/param-names.md
     */
    'promise/param-names': 'error',
    /**
     * Prefer async/await to the callback pattern.
     * @see https://github.com/xjamundx/eslint-plugin-promise/blob/f10d8fc0b9f5680f849d6b4d50ac9e33008c5a29/docs/rules/prefer-await-to-callbacks.md
     */
    'promise/prefer-await-to-callbacks': 'warn',
    /**
     * Prefer `await` to `then()` / `catch()` / `finally()` for reading Promise
     * values.
     * @see https://github.com/xjamundx/eslint-plugin-promise/blob/f10d8fc0b9f5680f849d6b4d50ac9e33008c5a29/docs/rules/prefer-await-to-then.md
     */
    'promise/prefer-await-to-then': 'warn',
    /**
     * Ensures the proper number of arguments are passed to Promise functions.
     * @see https://github.com/xjamundx/eslint-plugin-promise/blob/f10d8fc0b9f5680f849d6b4d50ac9e33008c5a29/docs/rules/valid-params.md
     */
    'promise/valid-params': 'error',
  },
};
