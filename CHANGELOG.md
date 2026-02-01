# Changelog

This document records all notable changes to the project, following the [Keep a
Changelog] format and adhering to [Semantic Versioning].

## [Unreleased]

<!-- There are no notable changes in this release. -->

### Added

- Enable `unicorn/prefer-class-fields` rule ([a1c09d7]).

### Changed

- Modify `stylistic/member-delimiter-style`: use comma delimiter for types on
  the same line ([28cd893]).
- Modify `yml/block-mapping`: set `always` ([4604ee5]).
- Modify `yml/block-sequence`: set `always` ([174ffdc]).

### Removed

- Remove `no-restricted-syntax` ([3083f41]).
- Remove `unicorn/import-style` ([9dbbe67]).
- Remove `unicorn/prefer-top-level-await` ([79d1994]).
- Remove `n/hashbang` ([024e407]).
- Remove `github/unescaped-html-literal` ([87bde5c]).
- Remove `new-cap` ([a0c015d]).
- Remove `stylistic/max-len` ([2d3a08b]).
- Remove `@html-eslint/eslint-plugin` and `@html-eslint/parser` ([ad00512]).
- Remove `eslint-plugin-html` ([6c8308c]).
- Remove `eslint-plugin-clsx` ([4539eae]).
- Remove `eslint-plugin-jsx-a11y` ([0defe2e]).
- Remove `github/a11y-aria-label-is-well-formatted` ([5a2a31f]).
- Remove `github/a11y-no-title-attribute` ([e691514]).
- Remove `github/a11y-role-supports-aria-props` ([1c888d9]).
- Remove `github/a11y-svg-has-accessible-name` ([bdfb4e7]).
- Remove `stylistic/jsx-child-element-spacing` ([4a42be1]).
- Remove `stylistic/jsx-closing-bracket-location` ([ba32983]).
- Remove `stylistic/jsx-closing-tag-location` ([663e5e4]).
- Remove `stylistic/jsx-curly-brace-presence` ([22526e3]).
- Remove `stylistic/jsx-curly-newline` ([dbfbfd3]).
- Remove `stylistic/jsx-curly-spacing` ([491e7fd]).
- Remove `stylistic/jsx-equals-spacing` ([9070a7a]).
- Remove `stylistic/jsx-first-prop-new-line` ([5a26934]).
- Remove `stylistic/jsx-indent-props` ([82c0301]).
- Remove `stylistic/jsx-newline` ([f9f4051]).
- Remove `stylistic/jsx-pascal-case` ([e0c889a]).
- Remove `stylistic/jsx-props-no-multi-spaces` ([6035a4e]).
- Remove `stylistic/jsx-quotes` ([4a5aca2]).
- Remove `stylistic/jsx-tag-spacing` ([0602dd4]).
- Stop linting HTML files ([56aa4d9]).
- Stop linting JSX files ([db69ad6]).
- Remove `yml/flow-mapping-curly-newline` ([8b0abd6]).

## [0.0.10] - 2025-08-17

### Added

- Report unused disable directives ([b3d9449]).
- Enable `typescript/no-unnecessary-type-conversion` ([cecdead]).
- Enable `checkUnknown` for `typescript/no-base-to-string` ([a822086]).
- Enable `es-x/no-nonstandard-error-properties` ([bfd5220]).
- Enable `unicorn/no-useless-error-capture-stack-trace` ([38252bf]).
- Enable `ignorePrivate` for `package-json/require-author` ([c07e7b4]).
- Enable `ignorePrivate` for `package-json/require-keywords` ([a1c2f7c]).
- Enable `ignorePrivate` for `package-json/require-version` ([fe9256d]).
- Enable `package-json/valid-bin` ([a924c06]).
- Enable `package-json/require-type` ([80a3b4a]).
- Enable `package-json/valid-type` ([e75ca13]).
- Enable `package-json/valid-scripts` ([a6f757e]).
- Enable `package-json/valid-bundleDependencies` ([2018573]).
- Enable `package-json/valid-license` ([6486038]).
- Enable `package-json/valid-config` ([e3652a3]).
- Enable `package-json/valid-cpu` ([1d409ae]).
- Enable `package-json/valid-dependencies` ([220e8a5]).
- Enable `package-json/valid-description` ([610887c]).
- Enable `package-json/valid-exports` ([8aa2021]).
- Enable `package-json/require-bugs` ([79a54e4]).
- Enable `package-json/require-description` ([1077e0d]).
- Enable `package-json/require-engines` ([8357952]).
- Enable `package-json/valid-author` ([990f0ea]).
- Enable `package-json/valid-devDependencies` ([50afa9e]).
- Enable `package-json/valid-optionalDependencies` ([e1fe1c1]).
- Enable `package-json/valid-peerDependencies` ([68e951c]).
- Enable `math/prefer-math-sum-precise` ([81123b2]).
- Enable `math/prefer-number-min-value` ([8a55d7b]).
- Enable `html/no-aria-hidden-on-focusable` ([00b9a88]).
- Enable `html/no-duplicate-in-head` ([bfe4352]).
- Enable `html/no-empty-headings` ([5684f46]).
- Enable `html/no-ineffective-attrs` ([3ead6b5]).
- Enable `html/no-invalid-entity` ([58afe2b]).
- Enable `no-restricted-syntax` to disallow named imports ([6b55729]).

### Changed

- Modify `typescript/consistent-type-definitions`: use `type` instead of
  `interface` ([d7c6e73]).
- Modify `jsonc/array-bracket-newline`: set `always` for `package.json`
  ([c66676e]).
- Update `eslint-plugin-html` to v8.1.3 ([183a01d]).
- Update `@typescript-eslint/eslint-plugin` to v8.39.1 ([1295a51]).
- Update `@typescript-eslint/parser` to v8.39.1 ([762d1fa]).
- Update `@typescript-eslint/utils` to v8.39.1 ([839f6d3]).
- Update `eslint` to v9.33.0 ([a3789f2]).
- Update `eslint-plugin-de-morgan` to v1.3.1 ([d0cebcb]).
- Update `eslint-plugin-depend` to v1.2.0 ([ef4d642]).
- Update `eslint-plugin-import-x` to v4.16.1 ([54b3026]).
- Update `eslint-plugin-n` to v17.21.3 ([7e37beb]).
- Update `eslint-plugin-regexp` to v2.10.0 ([89b2a87]).
- Update `typescript` to v5.9.2 ([be82446]).
- Update `eslint-plugin-jsonc` to v2.20.1 ([b990c5c]).
- Update `@stylistic/eslint-plugin` to v5.2.3 ([847bb95]).
- Update `eslint-plugin-es-x` to v9.0.0 ([0415d66]).
- Update `eslint-plugin-jsdoc` to v54.1.0 ([0cc4038]).
- Update `eslint-plugin-unicorn` to v60.0.0 ([83b13d6]).
- Update `eslint-plugin-package-json` to v0.54.0 ([eb461d7]).
- Update `eslint-plugin-node-dependencies` to v1.1.2 ([4b82e8c]).
- Update `eslint-plugin-math` to v0.13.0 ([1b11b49]).
- Update `@html-eslint/eslint-plugin` to v0.45.0 ([bdc86e4]).
- Update `@html-eslint/parser` to v0.45.0 ([01002be]).
- Explicitly set the minimum Node.js version to v22.18.0 ([a9b6dad]).

### Removed

- Remove `es-x/no-array-from` ([3037d16]).
- Remove `es-x/no-export-ns-from` ([0be9644]).
- Remove `typescript/no-dynamic-delete` ([aef3994]).
- Remove `unicorn/prefer-add-event-listener` ([d97eed1]).
- Remove `unicorn/prefer-set-has` ([76851c3]).
- Remove unnecessary disabling of `typescript/naming-convention` ([dc06ffe]).
- Remove `package-json/valid-local-dependency` ([efbd670]).

## [0.0.9] - 2025-04-28

### Fixed

- Extract production dependencies from the development one ([e6633b4]).

## [0.0.8] - 2025-04-28

### Removed

- Remove peer dependencies ([a4aad74]).
- Remove `es-x/no-nonstandard-*-prototype-properties` ([b1b86e4]).

## [0.0.7] - 2025-04-28

### Added

- Enable new `@html-eslint/eslint-plugin` rules: `no-duplicate-class`,
  `no-heading-inside-button`, `no-invalid-role`, `no-nested-interactive`,
  `prefer-https`, `require-explicit-size`, `require-form-method`,
  `require-input-label`, `use-baseline` ([b473eac]).
- Enable new `@typescript-eslint/eslint-plugin` rules:
  `typescript/no-misused-spread` ([b7e90d0]).
- Enable new `eslint-plugin-es-x` rules:
  `es-x/no-nonstandard-intl-durationformat-properties`,
  `es-x/no-nonstandard-intl-durationformat-prototype-properties` ([caffcf9],
  [df4ed73]).
- Enable new `eslint-plugin-package-json` rules: `no-empty-fields`,
  `no-redundant-files`, `require-author`, `require-keywords`, `require-name`,
  `require-version`, `valid-package-definition` ([e859d13]).
- Enable new `eslint-plugin-unicorn` rules: `consistent-assert`,
  `consistent-date-clone`, `no-accessor-recursion`, `no-instanceof-builtins`,
  `no-named-default`, `no-unnecessary-array-flat-depth`,
  `no-unnecessary-array-splice-count`, `no-unnecessary-slice-end`,
  `prefer-import-meta-properties` ([1a7bb67]).
- Enable new `eslint-plugin-es-x` rules: `no-class-private-fields` and
  `no-class-private-methods` ([5b32ce5]).
- Enable new `eslint-plugin-import-x` rules: `order` ([06e08c2]).

### Changed

- Update `@eslint-community/eslint-plugin-eslint-comments` to v4.5.0
  ([e593b18]).
- Update `@eslint/config-inspector` to v1.0.2 ([b16913e]).
- Update `@html-eslint/eslint-plugin` to v0.39.0 ([7e79b53]).
- Update `@html-eslint/parser` to v0.39.0 ([33d99c1]).
- Update `@stylistic/eslint-plugin` to v4.2.0 ([9103a93]).
- Modify `stylistic/quotes`: enable `avoidEscape` value for
  `allowTemplateLiteral` option ([e2f15db]).
- Update `@types/node` to v22.15.2 ([30b7a93]).
- Update `@typescript-eslint/eslint-plugin` to v8.31.0 ([dc68dbd]).
- Update `@typescript-eslint/parser` to v8.31.0 ([660906a]).
- Update `@typescript-eslint/rule-tester` to v8.31.0 ([b61a3f2]).
- Update `@typescript-eslint/utils` to v8.31.0 ([987f283]).
- Update `eslint` to v9.25.1 ([13fea48]).
- Update `eslint-config-flat-gitignore` to v2.1.0 ([3cdb570]).
- Update `eslint-plugin-clsx` to v0.0.10 ([c02f09e]).
- Update `eslint-plugin-de-morgan` to v1.2.1 ([57985e5]).
- Update `eslint-plugin-depend` to v1.0.0 ([594b33a]).
- Update `eslint-plugin-es-x` to v8.6.1 ([d3785f5]).
- Update `eslint-plugin-github` to v6.0.0 ([1f6c622]).
- Update `eslint-plugin-import-x` to v4.11.0 ([4054266]).
- Update `eslint-plugin-jsdoc` to v50.6.11 ([3376a54]).
- Update `eslint-plugin-jsonc` to v2.20.0 ([78cf21e]).
- Update `eslint-plugin-math` to v0.6.1 ([0577fcb]).
- Update `eslint-plugin-n` to v17.17.0 ([10c00f6]).
- Update `eslint-plugin-node-dependencies` to v0.13.0 ([2c0be4d]).
- Update `eslint-plugin-package-json` to v0.31.0 ([26ca433]).
- Update `eslint-plugin-unicorn` to v59.0.0 ([93ee8c8]).
- Update `eslint-plugin-wc` to v3.0.0 ([c8a8ec7]).
- Update `eslint-plugin-wc` to v3.0.1 ([cf9c853]).
- Update `eslint-plugin-yml` to v1.18.0 ([65910a6]).
- Update `tsx` to v4.19.3 ([6a842b6]).
- Update `typescript` to v5.8.3 ([1c0067a]).
- Update `yaml-eslint-parser` to v1.3.0 ([01a6e2e]).
- Update `eslint-plugin-html` to v8.1.2 ([6069988]).
- Update `eslint-plugin-import-newlines` to v1.4.0 ([e0fcf99]).
- Update `eslint-plugin-jsonc` to v2.20.0 ([e179ac1]).
- Update `eslint-plugin-jsx-a11y` to v6.10.2 ([1c12f9a]).
- Update `eslint-plugin-markdown` to v5.1.0 ([8566e6f]).
- Update `eslint-plugin-no-unsanitized` to v4.1.2 ([8e74cdb]).
- Update `eslint-plugin-promise` to v7.2.1 ([e2fc8f7]).
- Update `eslint-plugin-regexp` to v2.7.0 ([59c5f4d]).
- Update `eslint-plugin-security` to v3.0.1 ([b67362f]).
- Update `eslint-plugin-toml` to v0.12.0 ([82c4215]).
- Update `jsonc-eslint-parser` to v2.4.0 ([1f81bbf]).
- Update `toml-eslint-parser` to v0.10.0 ([64da194]).
- Modify `no-void`: allow `void` as statement ([a43a9fd]).
- Modify `promise/param-names`: allow use of full names ([ac1800c]).
- Modify `toml/array-bracket-spacing`: disallow use of spaces ([48be071]).
- Modify `toml/indent`: use tabs ([e3c80b7]).

### Removed

- Remove unnecessary disabling of `typescript/prefer-nullish-coalescing`
  ([9ef3cb9]).
- Remove `camelcase` ([7ab416b]).
- Remove `es-x/no-object-fromentries` and `es-x/no-typed-arrays` ([1047e15]).

### Fixed

- Catch possible exceptions from `eslint-config-flat-gitignore` ([6a77f06]).
- Restore `es-x/no-nonstandard-*-prototype-properties` ([df4ed73]).

## [0.0.6] - 2025-04-13

### Added

- Support using TypeScript config files in JavaScript ([4fc30b4]).

### Changed

- Modify `stylistic/no-multiple-empty-lines`: disallow empty lines at beginning
  and end of files ([1d349fb]).
- Modify `stylistic/quotes`: allow template literals ([b417573]).
- Modify `typescript/switch-exhaustiveness-check`: be less strict ([f0c05dc]).
- Modify `unicorn/no-useless-undefined`: be less strict ([eccbe11]).

### Removed

- Remove `github/no-then` ([fdb1b02]).
- Remove `regexp/no-super-linear-move` ([cc4938a]).
- Remove `security/detect-non-literal-regexp` ([4a56f27]).
- Remove `typescript/ban-ts-comment` ([6e51998]).
- Remove `no-inline-comments` ([a1d3122]).
- Remove `eslint-plugin-tsdoc` plugin ([c857ff6]).
- Remove `jsdoc/tag-lines` ([9736775]).
- Remove `typescript/prefer-nullish-coalescing` ([95a840b]).

## [0.0.5] - 2025-03-01

### Changed

- Modify `typescript/no-unused-vars`: allow variables with names containing
  multiple underscores to be unused ([87eac07]).

### Removed

- Remove `n/no-process-exit` ([70f4caf]).

### Fixed

- Fix TypeScript-specific rules incorrectly applied to JavaScript files
  ([2c429e9]).

## [0.0.4] - 2025-02-20

### Added

- Modify `import-x/no-default-export`: allow default exports in ESLint config
  files ([d73c0d8]).
- Add `eslint-plugin-de-morgan` v1.1.0 ([8b759b0]).

### Changed

- Modify `eslint-comments/disable-enable-pair`: allow eslint disable comments
  for the entire file ([02e9493]).

## [0.0.3] - 2025-01-21

### Fixed

- Temporarily remove `es-x/no-nonstandard-*-prototype-properties` ([782fb28]).

## [0.0.2] - 2025-01-21

### Removed

- Remove custom rule that enforces import order ([8d8e35d]).

### Fixed

- Fix peer dependencies with major version zero to use range notation
  ([565f4bc]).

## [0.0.1] - 2025-01-02

This is the first, initial release. The version 0.0.1 was chosen to test the
publishing process and attempt to integrate it into other projects. If
everything functions well, the version will be updated to 0.1.0, possibly with
some changes.

### Added

- Add `@eslint-community/eslint-plugin-eslint-comments` v4.4.1.
- Add `@html-eslint/eslint-plugin` v0.31.1.
- Add `@stylistic/eslint-plugin` v2.12.1.
- Add `@typescript-eslint/eslint-plugin` v8.18.1.
- Add `eslint-config-flat-gitignore` v0.3.0.
- Add `eslint-plugin-ascii` v2.0.0.
- Add `eslint-plugin-clsx` v0.0.9.
- Add `eslint-plugin-depend` v0.12.0.
- Add `eslint-plugin-es-x` v8.4.1.
- Add `eslint-plugin-github` v5.1.4.
- Add `eslint-plugin-html` v8.1.2.
- Add `eslint-plugin-import-newlines` v1.4.0.
- Add `eslint-plugin-import-x` v4.6.1.
- Add `eslint-plugin-jsdoc` v50.6.1.
- Add `eslint-plugin-jsonc` v2.18.2.
- Add `eslint-plugin-jsx-a11y` v6.10.2.
- Add `eslint-plugin-markdown` v5.1.0.
- Add `eslint-plugin-math` v0.6.0.
- Add `eslint-plugin-n` v17.15.0.
- Add `eslint-plugin-no-unsanitized` v4.1.2.
- Add `eslint-plugin-node-dependencies` v0.12.0.
- Add `eslint-plugin-package-json` v0.18.0.
- Add `eslint-plugin-prefer-let` v4.0.0.
- Add `eslint-plugin-promise` v7.2.1.
- Add `eslint-plugin-regexp` v2.7.0.
- Add `eslint-plugin-security` v3.0.1.
- Add `eslint-plugin-toml` v0.12.0.
- Add `eslint-plugin-tsdoc` v0.4.0.
- Add `eslint-plugin-unicorn` v56.0.1.
- Add `eslint-plugin-wc` v2.2.0.
- Add `eslint-plugin-yml` v1.16.0.
- Add custom rule to enforce import order.

<!-- Definitions -->

[Keep a Changelog]: https://keepachangelog.com/en/1.1.0/
[Semantic Versioning]: https://semver.org/spec/v2.0.0.html

[Unreleased]: https://github.com/vanyauhalin/eslint-config/compare/v0.0.10...HEAD/
[0.0.10]: https://github.com/vanyauhalin/eslint-config/compare/v0.0.9...v0.0.10/
[0.0.9]: https://github.com/vanyauhalin/eslint-config/compare/v0.0.8...v0.0.9/
[0.0.8]: https://github.com/vanyauhalin/eslint-config/compare/v0.0.7...v0.0.8/
[0.0.7]: https://github.com/vanyauhalin/eslint-config/compare/v0.0.6...v0.0.7/
[0.0.6]: https://github.com/vanyauhalin/eslint-config/compare/v0.0.5...v0.0.6/
[0.0.5]: https://github.com/vanyauhalin/eslint-config/compare/v0.0.4...v0.0.5/
[0.0.4]: https://github.com/vanyauhalin/eslint-config/compare/v0.0.3...v0.0.4/
[0.0.3]: https://github.com/vanyauhalin/eslint-config/compare/v0.0.2...v0.0.3/
[0.0.2]: https://github.com/vanyauhalin/eslint-config/compare/v0.0.1...v0.0.2/
[0.0.1]: https://github.com/vanyauhalin/eslint-config/releases/tag/v0.0.1/

[8b0abd6]: https://github.com/vanyauhalin/eslint-config/commit/8b0abd6bd27f0178718e10c11b2f15ac2d890abc/
[174ffdc]: https://github.com/vanyauhalin/eslint-config/commit/174ffdc9099f65a0af9fc6e37704c21804d6b32c/
[4604ee5]: https://github.com/vanyauhalin/eslint-config/commit/4604ee5707060d822d0df2c0db39454fc1d8933f/
[db69ad6]: https://github.com/vanyauhalin/eslint-config/commit/db69ad60dd92cf78625af8529826063dcbde7bf1/
[56aa4d9]: https://github.com/vanyauhalin/eslint-config/commit/56aa4d91f1c113734757c26d4459fc429c87ea8d/
[0602dd4]: https://github.com/vanyauhalin/eslint-config/commit/0602dd47c5040b964fc608eb1d0c1a43c97552dd/
[4a5aca2]: https://github.com/vanyauhalin/eslint-config/commit/4a5aca246e418f334103a3124979ac8a8673e83c/
[6035a4e]: https://github.com/vanyauhalin/eslint-config/commit/6035a4e0b51592ffe4ee0c40db39cf81e7dee48e/
[e0c889a]: https://github.com/vanyauhalin/eslint-config/commit/e0c889a5949d1da24ef95d8c77afde35d0e67213/
[f9f4051]: https://github.com/vanyauhalin/eslint-config/commit/f9f40511105c1249b12c90c2ecea14062d12cec1/
[82c0301]: https://github.com/vanyauhalin/eslint-config/commit/82c0301657818d2b9faee4fea3bb20bb0135f2b4/
[5a26934]: https://github.com/vanyauhalin/eslint-config/commit/5a269347ef3538fe471f85d54f5d5e457740d3e9/
[9070a7a]: https://github.com/vanyauhalin/eslint-config/commit/9070a7a34edb0f038a04ccd205274ff22a4df12b/
[491e7fd]: https://github.com/vanyauhalin/eslint-config/commit/491e7fd00f387cb41ac1333012fda3c9e3e7cd2a/
[dbfbfd3]: https://github.com/vanyauhalin/eslint-config/commit/dbfbfd387fccbaadd36b188004649e23b76bf847/
[22526e3]: https://github.com/vanyauhalin/eslint-config/commit/22526e30615f24edc026fdd7ac9e62bacffb108a/
[663e5e4]: https://github.com/vanyauhalin/eslint-config/commit/663e5e4a7952f23f22eda0c452995e00e280ab72/
[ba32983]: https://github.com/vanyauhalin/eslint-config/commit/ba329839f2f645111271b412b72ac1ddc166b134/
[4a42be1]: https://github.com/vanyauhalin/eslint-config/commit/4a42be195733c516edf40d6cd0c61de219083dcd/
[bdfb4e7]: https://github.com/vanyauhalin/eslint-config/commit/bdfb4e728d3cacf31d2b1a568f90a1f666ac12bf/
[1c888d9]: https://github.com/vanyauhalin/eslint-config/commit/1c888d9dc030d6404991f4b8b88b5f68f112d2bf/
[e691514]: https://github.com/vanyauhalin/eslint-config/commit/e6915149b0b5f85057013b03d00f94275921d3a7/
[5a2a31f]: https://github.com/vanyauhalin/eslint-config/commit/5a2a31fe85a654ea1b9245ff529dc9b12b699590/
[0defe2e]: https://github.com/vanyauhalin/eslint-config/commit/0defe2edcc9d536e9c5408925b7d58592f7ceaf8/
[4539eae]: https://github.com/vanyauhalin/eslint-config/commit/4539eae486b9a897c5023580c4e8bb3cf2b6e4ad/
[6c8308c]: https://github.com/vanyauhalin/eslint-config/commit/6c8308c4eb7ed0d6ab0e4180510940fda2b44957/
[ad00512]: https://github.com/vanyauhalin/eslint-config/commit/ad00512d576866b8b37b4df8826f3a09495afec6/
[a1c09d7]: https://github.com/vanyauhalin/eslint-config/commit/a1c09d74e8dfa8343a7870a1878d505b2adb6cc0/
[2d3a08b]: https://github.com/vanyauhalin/eslint-config/commit/2d3a08bcd9f2f2a1b4bbb30e11e701282ca56f83/
[a0c015d]: https://github.com/vanyauhalin/eslint-config/commit/a0c015d1f74985479e3621d4a89f7435dce95bf6/
[87bde5c]: https://github.com/vanyauhalin/eslint-config/commit/87bde5c25dcc594c2228cf23ed107133c698135d/
[024e407]: https://github.com/vanyauhalin/eslint-config/commit/024e40718b8d83bd8d61f1140045fa665e0cf589/
[79d1994]: https://github.com/vanyauhalin/eslint-config/commit/79d199460eae472703f6133b8428d1ef60d0a6ad/
[9dbbe67]: https://github.com/vanyauhalin/eslint-config/commit/9dbbe67de3ded9653a52b6ab9346e363ee5b232f/
[28cd893]: https://github.com/vanyauhalin/eslint-config/commit/28cd893360897f4eb9afab2a92fabb0074f3cbea/
[3083f41]: https://github.com/vanyauhalin/eslint-config/commit/3083f419ce80095cd7e2ca84c09e4f2a727131b3/
[a9b6dad]: https://github.com/vanyauhalin/eslint-config/commit/a9b6dadc98329eedadf9cfc7bb9000265785f6ce/
[58afe2b]: https://github.com/vanyauhalin/eslint-config/commit/58afe2bb016eb057cee459fadfd4662364b4ef50/
[3ead6b5]: https://github.com/vanyauhalin/eslint-config/commit/3ead6b521d3a17163b296a8000ffcc99f06598f4/
[5684f46]: https://github.com/vanyauhalin/eslint-config/commit/5684f467988a4b27ac814c60cd819efc829c2106/
[bfe4352]: https://github.com/vanyauhalin/eslint-config/commit/bfe4352d59c975877ca558f3dbc5215a90c322b3/
[00b9a88]: https://github.com/vanyauhalin/eslint-config/commit/00b9a88361ed9137b48cc87944f8693a14be9f76/
[01002be]: https://github.com/vanyauhalin/eslint-config/commit/01002be09da110cd2f65ad6d404e63b0a83e1180/
[bdc86e4]: https://github.com/vanyauhalin/eslint-config/commit/bdc86e4247e36b1c0ae62a92135fd478bb5184d5/
[1b11b49]: https://github.com/vanyauhalin/eslint-config/commit/1b11b4918fb957aedec5a4302679615c7a20af89/
[8a55d7b]: https://github.com/vanyauhalin/eslint-config/commit/8a55d7b81bd5e49c02a0d767c3d62eaade70dd6c/
[81123b2]: https://github.com/vanyauhalin/eslint-config/commit/81123b2240e5a7a2db727f725ab992e5cfb1c914/
[4b82e8c]: https://github.com/vanyauhalin/eslint-config/commit/4b82e8c7f88aeea7f843157a10f8104aef1a355d/
[68e951c]: https://github.com/vanyauhalin/eslint-config/commit/68e951c14d43352edbe91f30d69050e2d4c9980a/
[e1fe1c1]: https://github.com/vanyauhalin/eslint-config/commit/e1fe1c1e2926e26c2360fabf4ffa34fcfd3de547/
[50afa9e]: https://github.com/vanyauhalin/eslint-config/commit/50afa9eafdca5731a660a79145591fcae9b7683c/
[990f0ea]: https://github.com/vanyauhalin/eslint-config/commit/990f0ea6007cb9565f1144ba9e9e0c7d95951cfa/
[8357952]: https://github.com/vanyauhalin/eslint-config/commit/8357952bd71a33b9dadf4515e62fece36297b120/
[1077e0d]: https://github.com/vanyauhalin/eslint-config/commit/1077e0dd40c00035df3d9e247f6d2787e38beda2/
[79a54e4]: https://github.com/vanyauhalin/eslint-config/commit/79a54e470b8e1cf5059fa57025b67361946c9492/
[8aa2021]: https://github.com/vanyauhalin/eslint-config/commit/8aa2021ec810d79d1dd6939b4e4b55d84e8d8cde/
[610887c]: https://github.com/vanyauhalin/eslint-config/commit/610887c4743f7d4f65e528650bdd522c5925e01e/
[220e8a5]: https://github.com/vanyauhalin/eslint-config/commit/220e8a56552156ed3548e7cf4b0ac3aa3f6a81a3/
[1d409ae]: https://github.com/vanyauhalin/eslint-config/commit/1d409aea0ed1c29d5f761ce61be4445d866edc6f/
[e3652a3]: https://github.com/vanyauhalin/eslint-config/commit/e3652a35133e767fd0ada419c204a87cd00c83fa/
[6486038]: https://github.com/vanyauhalin/eslint-config/commit/648603836075773d5a4a688a7a8de09fadabdbb7/
[2018573]: https://github.com/vanyauhalin/eslint-config/commit/20185732eeccde1118828782062793f330683010/
[a6f757e]: https://github.com/vanyauhalin/eslint-config/commit/a6f757ef678af5bd0e83b9a1a4f321268e7f943c/
[e75ca13]: https://github.com/vanyauhalin/eslint-config/commit/e75ca13ef76bf7cebbf65e79d0291cfbb83d3bb2/
[80a3b4a]: https://github.com/vanyauhalin/eslint-config/commit/80a3b4a9bafb1e39d4152891603cb9eb39b3418b/
[a924c06]: https://github.com/vanyauhalin/eslint-config/commit/a924c0651e607484df587a566e648624291c428a/
[efbd670]: https://github.com/vanyauhalin/eslint-config/commit/efbd67026571513a4600448a63ba7e393613935e/
[fe9256d]: https://github.com/vanyauhalin/eslint-config/commit/fe9256dca98a5d20bf62693fdcd7d42926e61498/
[a1c2f7c]: https://github.com/vanyauhalin/eslint-config/commit/a1c2f7c7a0db98303db24a1cea98077a28a209dd/
[c07e7b4]: https://github.com/vanyauhalin/eslint-config/commit/c07e7b45428870aca6fa2cc209fc6549c91d08f2/
[eb461d7]: https://github.com/vanyauhalin/eslint-config/commit/eb461d79375d71a11febfd2af96459a274466ea8/
[38252bf]: https://github.com/vanyauhalin/eslint-config/commit/38252bfdd073c0a3b477ee54faaa93eff7c12723/
[83b13d6]: https://github.com/vanyauhalin/eslint-config/commit/83b13d65748e79084a9af691a0904209645717de/
[0cc4038]: https://github.com/vanyauhalin/eslint-config/commit/0cc4038010b0dbd8c4ff9f1f63fc1693d1b46169/
[bfd5220]: https://github.com/vanyauhalin/eslint-config/commit/bfd5220891a0ab9aa0c72b8b5f047e22f75abf66/
[0415d66]: https://github.com/vanyauhalin/eslint-config/commit/0415d66872344062e136e63666ea9d915ca302ac/
[847bb95]: https://github.com/vanyauhalin/eslint-config/commit/847bb9503d783bb8e547dd5a53fdbfd6c2a63e6d/
[b990c5c]: https://github.com/vanyauhalin/eslint-config/commit/b990c5c763b90ef3a6a5c97e21116fb15c8ff1da/
[be82446]: https://github.com/vanyauhalin/eslint-config/commit/be824466c97b730565eae5f8d1245890a925032f/
[89b2a87]: https://github.com/vanyauhalin/eslint-config/commit/89b2a8718935b1b3d61201f88069fabbc09846ba/
[7e37beb]: https://github.com/vanyauhalin/eslint-config/commit/7e37bebf55d140bab672e6f9e74d32f3a78384b3/
[54b3026]: https://github.com/vanyauhalin/eslint-config/commit/54b30266e8cb8bd17cece302b60713b588477ace/
[ef4d642]: https://github.com/vanyauhalin/eslint-config/commit/ef4d64269bc40966089aa189d80ea41549284f21/
[d0cebcb]: https://github.com/vanyauhalin/eslint-config/commit/d0cebcba88a7f603162789dcb0108af4de2910f5/
[a3789f2]: https://github.com/vanyauhalin/eslint-config/commit/a3789f2b579869460778a3d1d7f64babcab4b88d/
[839f6d3]: https://github.com/vanyauhalin/eslint-config/commit/839f6d3eb8992181339c46ce73e22349a9298009/
[762d1fa]: https://github.com/vanyauhalin/eslint-config/commit/762d1fa9c95655e5e32d975e15c6ec2ed2d31eb4/
[dc06ffe]: https://github.com/vanyauhalin/eslint-config/commit/dc06ffe6baa1c8f8c1c91360e48542457dbcbee0/
[a822086]: https://github.com/vanyauhalin/eslint-config/commit/a82208606e962ebe4cac5a55000f9e17647bd463/
[cecdead]: https://github.com/vanyauhalin/eslint-config/commit/cecdeadc8bbb61bba41b2b8fb736fdbc1ed1266e/
[1295a51]: https://github.com/vanyauhalin/eslint-config/commit/1295a515e6f3e0fa9864e5434f0a401e78f6606f/
[183a01d]: https://github.com/vanyauhalin/eslint-config/commit/183a01d0291a1260376178de636f5caebbe85396/
[c66676e]: https://github.com/vanyauhalin/eslint-config/commit/c66676e55242bd2dd609ed221bce2c9348489c11/
[76851c3]: https://github.com/vanyauhalin/eslint-config/commit/76851c3b73b21633019b4313daef4d266ff5198e/
[d97eed1]: https://github.com/vanyauhalin/eslint-config/commit/d97eed17274fa4b9b53bbd32f1671e8c30ac6c83/
[aef3994]: https://github.com/vanyauhalin/eslint-config/commit/aef399475643389dea8dcbcdf0442f12915924a4/
[d7c6e73]: https://github.com/vanyauhalin/eslint-config/commit/d7c6e73f4e2345245072ec9e6f16bac53e6a9637/
[0be9644]: https://github.com/vanyauhalin/eslint-config/commit/0be9644b06dd865de703bc1e56b5f9f896834107/
[3037d16]: https://github.com/vanyauhalin/eslint-config/commit/3037d161832a57e0cf70da5cde0ec9c0ec43f92f/
[6b55729]: https://github.com/vanyauhalin/eslint-config/commit/6b55729622f89d161b02038b00502492ea9d020d/
[b3d9449]: https://github.com/vanyauhalin/eslint-config/commit/b3d94496b9f167d359ea3d1910174d93b94e1b77/
[e6633b4]: https://github.com/vanyauhalin/eslint-config/commit/e6633b4638ee4ef7519be719835b1daa0f834e8c/
[b1b86e4]: https://github.com/vanyauhalin/eslint-config/commit/b1b86e40bfb0617103975b5e07c026815334b937/
[a4aad74]: https://github.com/vanyauhalin/eslint-config/commit/a4aad742e3de3f23b3d1c9d3ab8ece6601a2099e/
[64da194]: https://github.com/vanyauhalin/eslint-config/commit/64da194f1a5bb8814bdd02e4f16ea2fd5ca84596/
[1f81bbf]: https://github.com/vanyauhalin/eslint-config/commit/1f81bbfb54b3137e0f55def74430478c0fa386a1/
[82c4215]: https://github.com/vanyauhalin/eslint-config/commit/82c4215fca16cb676ca5627f8118bf48b259f62d/
[b67362f]: https://github.com/vanyauhalin/eslint-config/commit/b67362fbef3567bbef37b3db28e12a2008d34784/
[59c5f4d]: https://github.com/vanyauhalin/eslint-config/commit/59c5f4d5d942ebcbcfed985871e6576880a2b6a0/
[e2fc8f7]: https://github.com/vanyauhalin/eslint-config/commit/e2fc8f75f2e19dfab7c809d9248aaf444f530f88/
[8e74cdb]: https://github.com/vanyauhalin/eslint-config/commit/8e74cdb1351bb859fd834adc869f7d8ea1342612/
[8566e6f]: https://github.com/vanyauhalin/eslint-config/commit/8566e6f1641115d9d621ae104c13757a5b246f82/
[1c12f9a]: https://github.com/vanyauhalin/eslint-config/commit/1c12f9ac9f8f23e81d000268c24593cfadcc0d61/
[e179ac1]: https://github.com/vanyauhalin/eslint-config/commit/e179ac16ea0bc43efe47ae0cc159cb200829f5ff/
[e0fcf99]: https://github.com/vanyauhalin/eslint-config/commit/e0fcf997e131747ae393a1bfeec5e10dd9c4c6ab/
[6069988]: https://github.com/vanyauhalin/eslint-config/commit/606998835363ec840bef2166ebee46efcde099a8/
[06e08c2]: https://github.com/vanyauhalin/eslint-config/commit/06e08c20ad1b453463f1d1594a27d687b45e3a3b/
[e3c80b7]: https://github.com/vanyauhalin/eslint-config/commit/e3c80b78cf7ab5c27e193d03a74d63c2d9a2e0bd/
[48be071]: https://github.com/vanyauhalin/eslint-config/commit/48be071f41696824b84132b3d7cacc7246edf307/
[cf9c853]: https://github.com/vanyauhalin/eslint-config/commit/cf9c8538722fa52c6f65a45ff584a1094ae1e0d2/
[df4ed73]: https://github.com/vanyauhalin/eslint-config/commit/df4ed73c3eda4105494fa1123a863ff81ab8b788/
[1047e15]: https://github.com/vanyauhalin/eslint-config/commit/1047e156b3d92e9c63d112a61f3411cfe7cf2b8c/
[5b32ce5]: https://github.com/vanyauhalin/eslint-config/commit/5b32ce5df0a8802d1a9166a700d5a269a7e2d523/
[ac1800c]: https://github.com/vanyauhalin/eslint-config/commit/ac1800ca26e9e50912bb96d3032e87694d7a002c/
[a43a9fd]: https://github.com/vanyauhalin/eslint-config/commit/a43a9fdcfbd38cb30abc715a0a6163b741e991dd/
[7ab416b]: https://github.com/vanyauhalin/eslint-config/commit/7ab416b31e713e2ca779290d1db07eabae0f26f7/
[6a77f06]: https://github.com/vanyauhalin/eslint-config/commit/6a77f067e16ad579ea293127e0af15bacc20cd00/
[9ef3cb9]: https://github.com/vanyauhalin/eslint-config/commit/9ef3cb91834317440c699faabe2eb6704d53c326/
[1a7bb67]: https://github.com/vanyauhalin/eslint-config/commit/1a7bb67fe5eb395adae0f3bf5a5c795caf045946/
[e859d13]: https://github.com/vanyauhalin/eslint-config/commit/e859d132474cf5bd04c84b23243e1f793c253b8e/
[caffcf9]: https://github.com/vanyauhalin/eslint-config/commit/caffcf943c517c73eabf8a1d3fca7734efc3ef1b/
[b7e90d0]: https://github.com/vanyauhalin/eslint-config/commit/b7e90d04edb5707aec38bf1c61a9aab6bde5141c/
[e2f15db]: https://github.com/vanyauhalin/eslint-config/commit/e2f15db95c7d18b03b65c7fac98e35cbf6ca7d14/
[b473eac]: https://github.com/vanyauhalin/eslint-config/commit/b473eacd9bf8475fa5ea26093cbbc45665cbab98/
[01a6e2e]: https://github.com/vanyauhalin/eslint-config/commit/01a6e2eaa382c80dcb6d32de293add2bed69b18f/
[1c0067a]: https://github.com/vanyauhalin/eslint-config/commit/1c0067a66431fb826741eb123cc81c0cc9710f6a/
[6a842b6]: https://github.com/vanyauhalin/eslint-config/commit/6a842b69e7004e184ab26f84068966a549bebe3b/
[65910a6]: https://github.com/vanyauhalin/eslint-config/commit/65910a69b8db6f675eeefce1a9ac5d9edaa8772a/
[c8a8ec7]: https://github.com/vanyauhalin/eslint-config/commit/c8a8ec7ef7021865cba95504458749a0bb553b02/
[93ee8c8]: https://github.com/vanyauhalin/eslint-config/commit/93ee8c8b61684b8caf24939c0ef5685b6f215a25/
[26ca433]: https://github.com/vanyauhalin/eslint-config/commit/26ca43311aba3016489c80af5891f780aa51b110/
[2c0be4d]: https://github.com/vanyauhalin/eslint-config/commit/2c0be4dd082686344c37da0e7e5532f4b89bc115/
[10c00f6]: https://github.com/vanyauhalin/eslint-config/commit/10c00f6b27dca88fca43f737a7a4f351f6f9d3e6/
[0577fcb]: https://github.com/vanyauhalin/eslint-config/commit/0577fcb4339987708d2afe7c9a6d5b3cfc39abec/
[78cf21e]: https://github.com/vanyauhalin/eslint-config/commit/78cf21e718c77bb63554cabd1ab9923c56c4cd78/
[3376a54]: https://github.com/vanyauhalin/eslint-config/commit/3376a54b88d40a297120a4ced44a6aba7cec9f68/
[4054266]: https://github.com/vanyauhalin/eslint-config/commit/40542663f01c3365513984b25929f1dd03dcac81/
[1f6c622]: https://github.com/vanyauhalin/eslint-config/commit/1f6c6224f8454d130422801e6d9dbd8dd1cc8c03/
[d3785f5]: https://github.com/vanyauhalin/eslint-config/commit/d3785f561e263d8ae8707d7397affc55349f438a/
[594b33a]: https://github.com/vanyauhalin/eslint-config/commit/594b33aa81f137943ac809815c4c37daa8e6aece/
[57985e5]: https://github.com/vanyauhalin/eslint-config/commit/57985e53ee18629e8329a0543ca902f0bbd5eda5/
[c02f09e]: https://github.com/vanyauhalin/eslint-config/commit/c02f09e661200776c64d5c8ede8b5802a58eb9e4/
[3cdb570]: https://github.com/vanyauhalin/eslint-config/commit/3cdb5703f7d24e04ed77027b0e6b9099fcf1fdde/
[13fea48]: https://github.com/vanyauhalin/eslint-config/commit/13fea4890d209a078e219b5d861c73c5a6ca4341/
[987f283]: https://github.com/vanyauhalin/eslint-config/commit/987f2839dd098e3e1a763e6b1e23fa6178032856/
[b61a3f2]: https://github.com/vanyauhalin/eslint-config/commit/b61a3f248036d46a605165075f6841fa00de0214/
[660906a]: https://github.com/vanyauhalin/eslint-config/commit/660906a9751337b81d23cb24dd3820d809f5a7a6/
[dc68dbd]: https://github.com/vanyauhalin/eslint-config/commit/dc68dbda07c2fb5d408c13764a742c734dbf5a05/
[30b7a93]: https://github.com/vanyauhalin/eslint-config/commit/30b7a93695f5bc8738f278d09db45016981dec61/
[9103a93]: https://github.com/vanyauhalin/eslint-config/commit/9103a932b83e53b768f941c0a42ad6751361f887/
[33d99c1]: https://github.com/vanyauhalin/eslint-config/commit/33d99c1a938264598285684ac981f9131f3e9991/
[7e79b53]: https://github.com/vanyauhalin/eslint-config/commit/7e79b53397c89ffcf22d0867a1b2c9af459e62c5/
[b16913e]: https://github.com/vanyauhalin/eslint-config/commit/b16913e10405b167cafc54ddfd37a2602bea2c96/
[e593b18]: https://github.com/vanyauhalin/eslint-config/commit/e593b18ae474796502d20215a889e72de71cb337/
[eccbe11]: https://github.com/vanyauhalin/eslint-config/commit/eccbe11d7204ca0a5cb5d134fbc779dbd72e6ffa/
[95a840b]: https://github.com/vanyauhalin/eslint-config/commit/95a840b6af1b269f379733c2a5998ab73e7ed67e/
[9736775]: https://github.com/vanyauhalin/eslint-config/commit/97367757f5160e307933172fb9b94992b74d5957/
[c857ff6]: https://github.com/vanyauhalin/eslint-config/commit/c857ff6f4fc507382fe7679b8ab0ea404c3407dc/
[a1d3122]: https://github.com/vanyauhalin/eslint-config/commit/a1d312259a6abbdbfb6b2d2830a00b4a1be0af77/
[4fc30b4]: https://github.com/vanyauhalin/eslint-config/commit/4fc30b4f716f6bda799e0c201946e2abe718e03b/
[f0c05dc]: https://github.com/vanyauhalin/eslint-config/commit/f0c05dccbb6cb3f71dea328e05345b729ff01b7a/
[6e51998]: https://github.com/vanyauhalin/eslint-config/commit/6e519983fac911cf2ec3764452d2050b07b60b26/
[b417573]: https://github.com/vanyauhalin/eslint-config/commit/b41757368ca395d93260cbe8d789a6c053fe2972/
[1d349fb]: https://github.com/vanyauhalin/eslint-config/commit/1d349fb692aa2ce16dc19641bc5e17d55bebec65/
[4a56f27]: https://github.com/vanyauhalin/eslint-config/commit/4a56f27ff61b6ef496033131acd4f26f8f260392/
[cc4938a]: https://github.com/vanyauhalin/eslint-config/commit/cc4938a0607c58cd2839722b85735ee7c7c47ec4/
[fdb1b02]: https://github.com/vanyauhalin/eslint-config/commit/fdb1b0255ea9b20b6b4fe9a4b1adaa8ba9161fe1/
[2c429e9]: https://github.com/vanyauhalin/eslint-config/commit/2c429e9710898efb5e87470fc60c7f14d75300dd/
[87eac07]: https://github.com/vanyauhalin/eslint-config/commit/87eac0717bb4d99233a8c84b0f379e63ecd691da/
[70f4caf]: https://github.com/vanyauhalin/eslint-config/commit/70f4cafc7d331e9447a41d01b467981a84eeef6b/
[8b759b0]: https://github.com/vanyauhalin/eslint-config/commit/8b759b0cf15a5c46300f2142324157ac018a7795/
[d73c0d8]: https://github.com/vanyauhalin/eslint-config/commit/d73c0d8592f4f665025186bc82042e09a53cd165/
[02e9493]: https://github.com/vanyauhalin/eslint-config/commit/02e9493d48bb1d41666af2a298a873dc80c759df/
[782fb28]: https://github.com/vanyauhalin/eslint-config/commit/782fb2885dcb51019b8c1ca69b3593c26fa43823/
[8d8e35d]: https://github.com/vanyauhalin/eslint-config/commit/8d8e35d613ad546362f05a339fbd4e6f3c18b73f/
[565f4bc]: https://github.com/vanyauhalin/eslint-config/commit/565f4bc41552e5f19f638405ee9dc8e2801edd4c/
