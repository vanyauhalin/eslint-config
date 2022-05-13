# @vanyauhalin/eslint-config-base

```sh
# Non-hierarchical tree of configs, plugins.
@vanyauhalin/eslint-config-base
├─ eslint-config-airbnb-base
└─ eslint-plugin-import
```

## Install

``` sh
echo "@vanyauhalin:registry = https://npm.pkg.github.com" > .npmrc
npm i --save-dev @vanyauhalin/eslint-config-base
echo '{\n  "extends": "@vanyauhalin/eslint-config-base"\n}' > .eslintrc.json
```

## License

[MIT](../../LICENSE).
