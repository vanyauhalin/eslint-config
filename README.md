# ESLint Config

A comprehensive, strict, and not very flexible highly personalized ESLint configuration. This package is suitable for those who prefer minimalism in language, a rejection of abstractions, and do not shy away from mutability.

## Installation

Use your favorite package manager to install this package:

```sh
npm install --save-dev @vanyauhalin/eslint-config
```

... then configure ESLint to use this package in your project:

```js
import config from "@vanyauhalin/eslint-config"

export default [
	...config,
	// Your project-specific configuration.
]
```

## Structure

This configuration is a composition of smaller configuration units that follow these groups:

- `x-ignores`: Configure ignored paths.
- `x-processor`: Configure the processor.
- `x-parser`: Configure the parser.
- `x-plugin`: Configure the plugin.
- `x-rules`: Configure the rules of the specific plugin.
- `x-file`: Configure the rules for the specific file.

Sometimes a group may have a subgroup:

- `x-integration`: Configure the integration with something.
- `x-exceptions`: Configure the exceptions of the rules.
- `x-conflicts`: Configure the conflicts of the rules.

The [ESLint Config Inspector] can help you gain a more detailed understanding of how the configuration is organized.

## Dependencies

This configuration does not utilize any other configurations, only plugins:

- [@eslint-community/eslint-plugin-eslint-comments]
- [@html-eslint/eslint-plugin]
- [@stylistic/eslint-plugin]
- [@typescript-eslint/eslint-plugin]
- [eslint-config-flat-gitignore]*
- [eslint-plugin-ascii]
- [eslint-plugin-clsx]
- [eslint-plugin-de-morgan]
- [eslint-plugin-depend]
- [eslint-plugin-es-x]
- [eslint-plugin-github]
- [eslint-plugin-html]
- [eslint-plugin-import-newlines]
- [eslint-plugin-import-x]
- [eslint-plugin-jsdoc]
- [eslint-plugin-jsonc]
- [eslint-plugin-jsx-a11y]
- [eslint-plugin-markdown]
- [eslint-plugin-math]
- [eslint-plugin-n]
- [eslint-plugin-no-unsanitized]
- [eslint-plugin-node-dependencies]
- [eslint-plugin-package-json]
- [eslint-plugin-prefer-let]
- [eslint-plugin-promise]
- [eslint-plugin-regexp]
- [eslint-plugin-security]
- [eslint-plugin-toml]
- [eslint-plugin-tsdoc]
- [eslint-plugin-unicorn]
- [eslint-plugin-wc]
- [eslint-plugin-yml]

\* The eslint-config-flat-gitignore is the only exception to the rule of not
using other people's configurations because it is a rather specific case.

## Compatibility

This configuration is written specifically for ESLint 9 and, therefore, does not support previous versions. The project itself uses one of the latest versions of Node.js at the time of writing which is 23, but the minimum required version is the latest 18.

## License

[MIT] (c) [Ivan Uhalin]

<!-- Footnotes -->

[ESLint Config Inspector]: https://eslint-config.vanyauhalin.me/

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

[Ivan Uhalin]: https://github.com/vanyauhalin/
[MIT]: https://github.com/vanyauhalin/moondusttheme/blob/main/LICENSE/
