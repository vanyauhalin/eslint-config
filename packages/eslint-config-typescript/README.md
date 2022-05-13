# @vanyauhalin/eslint-config-typescript

```sh
# Non-hierarchical tree of configs, plugins.
@vanyauhalin/eslint-config-base
├─ @typescript-eslint/eslint-plugin
├─ @typescript-eslint/parser
├─ @vanyauhalin/eslint-config-base
└─ eslint-config-airbnb-typescript
```

## Install

``` sh
echo "@vanyauhalin:registry = https://npm.pkg.github.com" > .npmrc
npm i --save-dev @vanyauhalin/eslint-config-typescript
echo '{\n  "extends": "@vanyauhalin/eslint-config-typescript"\n}' > .eslintrc.json
```

## License

[MIT](../../LICENSE).
