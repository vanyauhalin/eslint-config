# Changelog

This document records all notable changes to the project, following the [Keep a Changelog] format and adhering to [Semantic Versioning].

## [Unreleased]

<!-- There are no noticeable changes in version [unreleased]. -->

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

[Unreleased]: https://github.com/vanyauhalin/eslint-config/compare/v0.0.5...HEAD/
[0.0.5]: https://github.com/vanyauhalin/eslint-config/compare/v0.0.4...v0.0.5/
[0.0.4]: https://github.com/vanyauhalin/eslint-config/compare/v0.0.3...v0.0.4/
[0.0.3]: https://github.com/vanyauhalin/eslint-config/compare/v0.0.2...v0.0.3/
[0.0.2]: https://github.com/vanyauhalin/eslint-config/compare/v0.0.1...v0.0.2/
[0.0.1]: https://github.com/vanyauhalin/eslint-config/releases/tag/v0.0.1/

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
