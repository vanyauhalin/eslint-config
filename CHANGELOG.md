# Changelog

This document records all notable changes to the project, following the [Keep a Changelog] format and adhering to [Semantic Versioning].

## [Unreleased]

<!-- There are no noticeable changes in version [unreleased]. -->

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
- Add the [eslint-plugin-de-morgan] package to the configuration ([8b759b0]).

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

- Add the [@eslint-community/eslint-plugin-eslint-comments] to the configuration.
- Add the [@html-eslint/eslint-plugin] to the configuration.
- Add the [@stylistic/eslint-plugin] to the configuration.
- Add the [@typescript-eslint/eslint-plugin] to the configuration.
- Add the [eslint-config-flat-gitignore] to the configuration.
- Add the [eslint-plugin-ascii] to the configuration.
- Add the [eslint-plugin-clsx] to the configuration.
- Add the [eslint-plugin-depend] to the configuration.
- Add the [eslint-plugin-es-x] to the configuration.
- Add the [eslint-plugin-github] to the configuration.
- Add the [eslint-plugin-html] to the configuration.
- Add the [eslint-plugin-import-newlines] to the configuration.
- Add the [eslint-plugin-import-x] to the configuration.
- Add the [eslint-plugin-jsdoc] to the configuration.
- Add the [eslint-plugin-jsonc] to the configuration.
- Add the [eslint-plugin-jsx-a11y] to the configuration.
- Add the [eslint-plugin-markdown] to the configuration.
- Add the [eslint-plugin-math] to the configuration.
- Add the [eslint-plugin-n] to the configuration.
- Add the [eslint-plugin-no-unsanitized] to the configuration.
- Add the [eslint-plugin-node-dependencies] to the configuration.
- Add the [eslint-plugin-package-json] to the configuration.
- Add the [eslint-plugin-prefer-let] to the configuration.
- Add the [eslint-plugin-promise] to the configuration.
- Add the [eslint-plugin-regexp] to the configuration.
- Add the [eslint-plugin-security] to the configuration.
- Add the [eslint-plugin-toml] to the configuration.
- Add the [eslint-plugin-tsdoc] to the configuration.
- Add the [eslint-plugin-unicorn] to the configuration.
- Add the [eslint-plugin-wc] to the configuration.
- Add the [eslint-plugin-yml] to the configuration.
- Add the custom rule to enforce the import order.

<!-- Footnotes -->

[Keep a Changelog]: https://keepachangelog.com/en/1.1.0/
[Semantic Versioning]: https://semver.org/spec/v2.0.0.html

[Unreleased]: https://github.com/vanyauhalin/eslint-config/compare/v0.0.9...HEAD/
[0.0.9]: https://github.com/vanyauhalin/eslint-config/compare/v0.0.8...v0.0.9/
[0.0.8]: https://github.com/vanyauhalin/eslint-config/compare/v0.0.7...v0.0.8/
[0.0.7]: https://github.com/vanyauhalin/eslint-config/compare/v0.0.6...v0.0.7/
[0.0.6]: https://github.com/vanyauhalin/eslint-config/compare/v0.0.5...v0.0.6/
[0.0.5]: https://github.com/vanyauhalin/eslint-config/compare/v0.0.4...v0.0.5/
[0.0.4]: https://github.com/vanyauhalin/eslint-config/compare/v0.0.3...v0.0.4/
[0.0.3]: https://github.com/vanyauhalin/eslint-config/compare/v0.0.2...v0.0.3/
[0.0.2]: https://github.com/vanyauhalin/eslint-config/compare/v0.0.1...v0.0.2/
[0.0.1]: https://github.com/vanyauhalin/eslint-config/releases/tag/v0.0.1/

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

[@eslint-community/eslint-plugin-eslint-comments]: https://www.npmjs.com/package/@eslint-community/eslint-plugin-eslint-comments/
[@html-eslint/eslint-plugin]: https://www.npmjs.com/package/@html-eslint/eslint-plugin/
[@stylistic/eslint-plugin]: https://www.npmjs.com/package/@stylistic/eslint-plugin/
[@typescript-eslint/eslint-plugin]: https://www.npmjs.com/package/@typescript-eslint/eslint-plugin/
[eslint-config-flat-gitignore]: https://www.npmjs.com/package/eslint-config-flat-gitignore/
[eslint-plugin-ascii]: https://www.npmjs.com/package/eslint-plugin-ascii/
[eslint-plugin-clsx]: https://www.npmjs.com/package/eslint-plugin-clsx/
[eslint-plugin-de-morgan]: https://github.com/azat-io/eslint-plugin-de-morgan/
[eslint-plugin-depend]: https://www.npmjs.com/package/eslint-plugin-depend/
[eslint-plugin-es-x]: https://www.npmjs.com/package/eslint-plugin-es-x/
[eslint-plugin-github]: https://www.npmjs.com/package/eslint-plugin-github/
[eslint-plugin-html]: https://www.npmjs.com/package/eslint-plugin-html/
[eslint-plugin-import-newlines]: https://www.npmjs.com/package/eslint-plugin-import-newlines/
[eslint-plugin-import-x]: https://www.npmjs.com/package/eslint-plugin-import-x/
[eslint-plugin-jsdoc]: https://www.npmjs.com/package/eslint-plugin-jsdoc/
[eslint-plugin-jsonc]: https://www.npmjs.com/package/eslint-plugin-jsonc/
[eslint-plugin-jsx-a11y]: https://www.npmjs.com/package/eslint-plugin-jsx-a11y/
[eslint-plugin-markdown]: https://www.npmjs.com/package/eslint-plugin-markdown/
[eslint-plugin-math]: https://www.npmjs.com/package/eslint-plugin-math/
[eslint-plugin-n]: https://www.npmjs.com/package/eslint-plugin-n/
[eslint-plugin-no-unsanitized]: https://www.npmjs.com/package/eslint-plugin-no-unsanitized/
[eslint-plugin-node-dependencies]: https://www.npmjs.com/package/eslint-plugin-node-dependencies/
[eslint-plugin-package-json]: https://www.npmjs.com/package/eslint-plugin-package-json/
[eslint-plugin-prefer-let]: https://www.npmjs.com/package/eslint-plugin-prefer-let/
[eslint-plugin-promise]: https://www.npmjs.com/package/eslint-plugin-promise/
[eslint-plugin-regexp]: https://www.npmjs.com/package/eslint-plugin-regexp/
[eslint-plugin-security]: https://www.npmjs.com/package/eslint-plugin-security/
[eslint-plugin-toml]: https://www.npmjs.com/package/eslint-plugin-toml/
[eslint-plugin-tsdoc]: https://www.npmjs.com/package/eslint-plugin-tsdoc/
[eslint-plugin-unicorn]: https://www.npmjs.com/package/eslint-plugin-unicorn/
[eslint-plugin-wc]: https://www.npmjs.com/package/eslint-plugin-wc/
[eslint-plugin-yml]: https://www.npmjs.com/package/eslint-plugin-yml/
