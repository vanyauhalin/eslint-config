# ESLint Config

A highly personalized ESLint configuration.

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

This configuration is a composition of smaller configuration units that follow
these groups:

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

The [ESLint Config Inspector] can help you gain a more detailed understanding of
how the configuration is organized.

## Compatibility

This configuration is written specifically for ESLint 9 and, therefore, does not
support previous versions. The project itself uses one of the latest versions of
Node.js at the time of writing, which is 24, but the minimum required version is
the latest 22.

## License

[MIT] © [Ivan Uhalin]

<!-- Definitions -->

[ESLint Config Inspector]: https://eslint-config.vanyauhalin.me/

[Ivan Uhalin]: https://github.com/vanyauhalin/
[MIT]: https://github.com/vanyauhalin/moondusttheme/blob/main/LICENSE
