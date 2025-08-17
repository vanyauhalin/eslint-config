# Changelog

This document records all notable changes to the project, following the [Keep a Changelog] format and adhering to [Semantic Versioning].

## [Unreleased]

There are no noticeable changes in version [unreleased].

## [0.0.10]

### Added

- Report unused disable directives ([b3d9449]);
- Enable the `typescript/no-unnecessary-type-conversion` rule ([cecdead]);
- Enable the `checkUnknown` option for the `typescript/no-base-to-string` rule ([a822086]);
- Enable the `es-x/no-nonstandard-error-properties` rule ([bfd5220]);
- Enable the `unicorn/no-useless-error-capture-stack-trace` rule ([38252bf]);
- Enable the `ignorePrivate` option for the `package-json/require-author` rule ([c07e7b4]);
- Enable the `ignorePrivate` option for the `package-json/require-keywords` rule ([a1c2f7c]);
- Enable the `ignorePrivate` option for the `package-json/require-version` rule ([fe9256d]);
- Enable the `package-json/valid-bin` rule ([a924c06]);
- Enable the `package-json/require-type` rule ([80a3b4a]);
- Enable the `package-json/valid-type` rule ([e75ca13]);
- Enable the `package-json/valid-scripts` rule ([a6f757e]);
- Enable the `package-json/valid-bundleDependencies` rule ([2018573]);
- Enable the `package-json/valid-license` rule ([6486038]);
- Enable the `package-json/valid-config` rule ([e3652a3]);
- Enable the `package-json/valid-cpu` rule ([1d409ae]);
- Enable the `package-json/valid-dependencies` rule ([220e8a5]);
- Enable the `package-json/valid-description` rule ([610887c]);
- Enable the `package-json/valid-exports` rule ([8aa2021]);
- Enable the `package-json/require-bugs` rule ([79a54e4]);
- Enable the `package-json/require-description` rule ([1077e0d]);
- Enable the `package-json/require-engines` rule ([8357952]);
- Enable the `package-json/valid-author` rule ([990f0ea]);
- Enable the `package-json/valid-devDependencies` rule ([50afa9e]);
- Enable the `package-json/valid-optionalDependencies` rule ([e1fe1c1]);
- Enable the `package-json/valid-peerDependencies` rule ([68e951c]);
- Enable the `math/prefer-math-sum-precise` rule ([81123b2]);
- Enable the `math/prefer-number-min-value` rule ([8a55d7b]);
- Enable the `html/no-aria-hidden-on-focusable` rule ([00b9a88]);
- Enable the `html/no-duplicate-in-head` rule ([bfe4352]);
- Enable the `html/no-empty-headings` rule ([5684f46]);
- Enable the `html/no-ineffective-attrs` rule ([3ead6b5]);
- Enable the `html/no-invalid-entity` rule ([58afe2b]).

### Changed

- Disallow named imports ([6b55729]);
- Remove the `es-x/no-array-from` rule ([3037d16]);
- Remove the `es-x/no-export-ns-from` rule ([0be9644]);
- Use the `type` instead of `interface` in the `typescript/consistent-type-definitions` rule ([d7c6e73]);
- Remove the `typescript/no-dynamic-delete` rule ([aef3994]);
- Remove the `unicorn/prefer-add-event-listener` rule ([d97eed1]);
- Remove the `unicorn/prefer-set-has` rule ([76851c3]);
- Set the `always` for the `jsonc/array-bracket-newline` rule for the `package.json` ([c66676e]);
- Update `eslint-plugin-html` to v8.1.3 ([183a01d]);
- Update `@typescript-eslint/eslint-plugin` to v8.39.1 ([1295a51]);
- Remove unnecessary disabling of the `typescript/naming-convention` rule ([dc06ffe]);
- Update `@typescript-eslint/parser` to v8.39.1 ([762d1fa]);
- Update `@typescript-eslint/utils` to v8.39.1 ([839f6d3]);
- Update `eslint` to v9.33.0 ([a3789f2]);
- Update `eslint-plugin-de-morgan` to v1.3.1 ([d0cebcb]);
- Update `eslint-plugin-depend` to v1.2.0 ([ef4d642]);
- Update `eslint-plugin-import-x` to v4.16.1 ([54b3026]);
- Update `eslint-plugin-n` to v17.21.3 ([7e37beb]);
- Update `eslint-plugin-regexp` to v2.10.0 ([89b2a87]);
- Update `typescript` to v5.9.2 ([be82446]);
- Update `eslint-plugin-jsonc` to v2.20.1 ([b990c5c]);
- Update `@stylistic/eslint-plugin` to v5.2.3 ([847bb95]);
- Update `eslint-plugin-es-x` to v9.0.0 ([0415d66]);
- Update `eslint-plugin-jsdoc` to v54.1.0 ([0cc4038]);
- Update `eslint-plugin-unicorn` to v60.0.0 ([83b13d6]);
- Update `eslint-plugin-package-json` to v0.54.0 ([eb461d7]);
- Remove the `package-json/valid-local-dependency` rule ([efbd670]);
- Update `eslint-plugin-node-dependencies` to v1.1.2 ([4b82e8c]);
- Update `eslint-plugin-math` to v0.13.0 ([1b11b49]);
- Update `@html-eslint/eslint-plugin` to v0.45.0 ([bdc86e4]);
- Update `@html-eslint/parser` to v0.45.0 ([01002be]);
- Explicitly set the minimum Node.js version to v22.18.0 ([a9b6dad]).

## [0.0.9] - 2025-04-28

### Fixed

- Extract production dependencies from the development one ([e6633b4]).

## [0.0.8] - 2025-04-28

### Changed

- Remove peer dependencies ([a4aad74]).
- Remove `es-x/no-nonstandard-*-prototype-properties` rules ([b1b86e4]).

## [0.0.7] - 2025-04-28

### Added

- Enable new `@html-eslint/eslint-plugin` rules: `no-duplicate-class`, `no-heading-inside-button`, `no-invalid-role`, `no-nested-interactive`, `prefer-https`, `require-explicit-size`, `require-form-method`, `require-input-label`, `use-baseline` ([b473eac]).
- Enable new `@stylistic/eslint-plugin` rules: value `avoidEscape` of option `allowTemplateLiteral` of rule `quotes` ([e2f15db]).
- Enable new `@typescript-eslint/eslint-plugin` rules: `typescript/no-misused-spread` ([b7e90d0]).
- Enable new `eslint-plugin-es-x` rules: `es-x/no-nonstandard-intl-durationformat-properties`, `es-x/no-nonstandard-intl-durationformat-prototype-properties` ([caffcf9], [df4ed73]).
- Enable new `eslint-plugin-package-json` rules: `no-empty-fields`, `no-redundant-files`, `require-author`, `require-keywords`, `require-name`, `require-version`, `valid-package-definition` ([e859d13]).
- Enable new `eslint-plugin-unicorn` rules: `consistent-assert`, `consistent-date-clone`, `no-accessor-recursion`, `no-instanceof-builtins`, `no-named-default`, `no-unnecessary-array-flat-depth`, `no-unnecessary-array-splice-count`, `no-unnecessary-slice-end`, `prefer-import-meta-properties` ([1a7bb67]).
- Enable rules `no-class-private-fields` and `no-class-private-methods` from `eslint-plugin-es-x` ([5b32ce5]).
- Enable rule `order` from `eslint-plugin-import-x` ([06e08c2]).

### Changed

- Update dependency `@eslint-community/eslint-plugin-eslint-comments` ([e593b18]).
- Update dependency `@eslint/config-inspector` ([b16913e]).
- Update dependency `@html-eslint/eslint-plugin` ([7e79b53]).
- Update dependency `@html-eslint/parser` ([33d99c1]).
- Update dependency `@stylistic/eslint-plugin` ([9103a93]).
- Update dependency `@types/node` ([30b7a93]).
- Update dependency `@typescript-eslint/eslint-plugin` ([dc68dbd]).
- Update dependency `@typescript-eslint/parser` ([660906a]).
- Update dependency `@typescript-eslint/rule-tester` ([b61a3f2]).
- Update dependency `@typescript-eslint/utils` ([987f283]).
- Update dependency `eslint` ([13fea48]).
- Update dependency `eslint-config-flat-gitignore` ([3cdb570]).
- Update dependency `eslint-plugin-clsx` ([c02f09e]).
- Update dependency `eslint-plugin-de-morgan` ([57985e5]).
- Update dependency `eslint-plugin-depend` ([594b33a]).
- Update dependency `eslint-plugin-es-x` ([d3785f5]).
- Update dependency `eslint-plugin-github` ([1f6c622]).
- Update dependency `eslint-plugin-import-x` ([4054266]).
- Update dependency `eslint-plugin-jsdoc` ([3376a54]).
- Update dependency `eslint-plugin-jsonc` ([78cf21e]).
- Update dependency `eslint-plugin-math` ([0577fcb]).
- Update dependency `eslint-plugin-n` ([10c00f6]).
- Update dependency `eslint-plugin-node-dependencies` ([2c0be4d]).
- Update dependency `eslint-plugin-package-json` ([26ca433]).
- Update dependency `eslint-plugin-unicorn` ([93ee8c8]).
- Update dependency `eslint-plugin-wc` ([c8a8ec7], [cf9c853]).
- Update dependency `eslint-plugin-yml` ([65910a6]).
- Update dependency `tsx` ([6a842b6]).
- Update dependency `typescript` ([1c0067a]).
- Update dependency `yaml-eslint-parser` ([01a6e2e]).
- Remove unnecessary disabling of rule `prefer-nullish-coalescing` from `@typescript-eslint/eslint-plugin` ([9ef3cb9]).
- Remove rule `camelcase` from `builtin` ([7ab416b]).
- Modify rule `no-void` from `builtin`: allow `void` as statement ([a43a9fd]).
- Modify rule `param-names` from `eslint-plugin-promise`: allow use of full names ([ac1800c]).
- Remove rules `no-object-fromentries` and `no-typed-arrays` from `eslint-plugin-es-x` ([1047e15]).
- Modify rule `array-bracket-spacing` from `eslint-plugin-toml`: disallow use of spaces ([48be071]).
- Modify rule `indent` from `eslint-plugin-toml`: use tabs ([e3c80b7]).
- Update dependency `eslint-plugin-html` ([6069988]).
- Update dependency `eslint-plugin-import-newlines` ([e0fcf99]).
- Update dependency `eslint-plugin-jsonc` ([e179ac1]).
- Update dependency `eslint-plugin-jsx-a11y` ([1c12f9a]).
- Update dependency `eslint-plugin-markdown` ([8566e6f]).
- Update dependency `eslint-plugin-no-unsanitized` ([8e74cdb]).
- Update dependency `eslint-plugin-promise` ([e2fc8f7]).
- Update dependency `eslint-plugin-regexp` ([59c5f4d]).
- Update dependency `eslint-plugin-security` ([b67362f]).
- Update dependency `eslint-plugin-toml` ([82c4215]).
- Update dependency `jsonc-eslint-parser` ([1f81bbf]).
- Update dependency `toml-eslint-parser` ([64da194]).

### Fixed

- Catch possible exceptions from `eslint-config-flat-gitignore` ([6a77f06]).
- Restore rules `no-nonstandard-*-prototype-properties` from `eslint-plugin-es-x` ([df4ed73]).

## [0.0.6] - 2025-04-13

### Added

- Support using TypeScript config files in JavaScript ([4fc30b4]).

### Changed

- Disable the `github/no-then` rule ([fdb1b02]).
- Disable the `regexp/no-super-linear-move` rule ([cc4938a]).
- Disable the `security/detect-non-literal-regexp` rule ([4a56f27]).
- Disallow using empty lines at the beginning and end of files ([1d349fb]).
- Allow template literals for the `stylistic/quotes` rule ([b417573]).
- Disable the `typescript/ban-ts-comment` rule ([6e51998]).
- Be less strict with the `typescript/switch-exhaustiveness-check` rule ([f0c05dc]).
- Disable the `no-inline-comments` rule ([a1d3122]).
- Remove the `eslint-plugin-tsdoc` plugin ([c857ff6]).
- Disable the `jsdoc/tag-lines` rule ([9736775]).
- Disable the `typescript/prefer-nullish-coalescing` rule ([95a840b]).
- Be less strict with the `unicorn/no-useless-undefined` rule ([eccbe11]).

## [0.0.5] - 2025-03-01

### Changed

- Disable the `n/no-process-exit` rule ([70f4caf]).
- Allow variables with names containing multiple underscores to be unused ([87eac07]).

### Fixed

- Disable a few TypeScript-specific rules for JavaScript files ([2c429e9]).

## [0.0.4] - 2025-02-20

### Added

- Add rules to the eslint configuration files ([d73c0d8]).
- Add the `eslint-plugin-de-morgan` package to the configuration ([8b759b0]).

### Changed

- Allow the use of eslint disable comments for the entire file ([02e9493]).

## [0.0.3] - 2025-01-21

### Fixed

- Temporarily disable the `es-x/no-nonstandard-*-prototype-properties` rules ([782fb28]).

## [0.0.2] - 2025-01-21

### Changed

- **Breaking** Remove the custom rule that enforces the import order ([8d8e35d]).

### Fixed

- Fix peer dependencies with major version zero to use range notation ([565f4bc]).

## [0.0.1] - 2025-01-02

This is the first, initial release. The version 0.0.1 was chosen to test the publishing process and attempt to integrate it into other projects. If everything functions well, the version will be updated to 0.1.0, possibly with some changes.

### Added

- Add the `@eslint-community/eslint-plugin-eslint-comments` to the configuration.
- Add the `@html-eslint/eslint-plugin` to the configuration.
- Add the `@stylistic/eslint-plugin` to the configuration.
- Add the `@typescript-eslint/eslint-plugin` to the configuration.
- Add the `eslint-config-flat-gitignore` to the configuration.
- Add the `eslint-plugin-ascii` to the configuration.
- Add the `eslint-plugin-clsx` to the configuration.
- Add the `eslint-plugin-depend` to the configuration.
- Add the `eslint-plugin-es-x` to the configuration.
- Add the `eslint-plugin-github` to the configuration.
- Add the `eslint-plugin-html` to the configuration.
- Add the `eslint-plugin-import-newlines` to the configuration.
- Add the `eslint-plugin-import-x` to the configuration.
- Add the `eslint-plugin-jsdoc` to the configuration.
- Add the `eslint-plugin-jsonc` to the configuration.
- Add the `eslint-plugin-jsx-a11y` to the configuration.
- Add the `eslint-plugin-markdown` to the configuration.
- Add the `eslint-plugin-math` to the configuration.
- Add the `eslint-plugin-n` to the configuration.
- Add the `eslint-plugin-no-unsanitized` to the configuration.
- Add the `eslint-plugin-node-dependencies` to the configuration.
- Add the `eslint-plugin-package-json` to the configuration.
- Add the `eslint-plugin-prefer-let` to the configuration.
- Add the `eslint-plugin-promise` to the configuration.
- Add the `eslint-plugin-regexp` to the configuration.
- Add the `eslint-plugin-security` to the configuration.
- Add the `eslint-plugin-toml` to the configuration.
- Add the `eslint-plugin-tsdoc` to the configuration.
- Add the `eslint-plugin-unicorn` to the configuration.
- Add the `eslint-plugin-wc` to the configuration.
- Add the `eslint-plugin-yml` to the configuration.
- Add the custom rule to enforce the import order.

<!-- Footnotes -->

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
