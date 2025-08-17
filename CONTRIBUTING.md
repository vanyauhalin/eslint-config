# Contributing

Welcome to the contributing guidelines.

## Preparation

Before pursuing specific contribution goals, please ensure you have the necessary tools:

- [Node.js] version 24.6.0.
- [pnpm] version 9.15.0.

The project uses [mise], a polyglot tool version manager, to manage the version of Node.js and pnpm. If you already have experience with tools like asdf, nvm, or nodenv, you will find it very familiar.

Once you have everything installed, clone the Git repository:

```sh
git clone git@github.com:vanyauhalin/eslint-config.git
```

... install the dependencies:

```sh
pnpm install
```

... build the package:

```sh
pnpm build-package
```

Now, we are ready to move on.

<!-- Footnotes -->

[mise]: https://mise.jdx.dev/
[Node.js]: https://nodejs.org/
[pnpm]: https://pnpm.io/
