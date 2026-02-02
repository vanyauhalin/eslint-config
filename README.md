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

## Compatibility

This configuration is written specifically for ESLint 9 and, therefore, does not
support previous versions. The project itself uses one of the latest versions of
Node.js at the time of writing, which is 24, but the minimum required version is
the latest 22.

## License

[MIT] © [Ivan Uhalin]

<!-- Definitions -->

[Ivan Uhalin]: https://github.com/vanyauhalin/
[MIT]: https://github.com/vanyauhalin/moondusttheme/blob/main/LICENSE
