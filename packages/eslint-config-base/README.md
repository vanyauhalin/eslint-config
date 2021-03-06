# @vanyauhalin/eslint-config-base

```sh
# Non-hierarchical tree of configs, plugins.
@vanyauhalin/eslint-config-base
├─ eslint-config-airbnb-base
├─ eslint-config-unicorn-recommended
├─ eslint-plugin-import
├─ eslint-plugin-jsonc
├─ eslint-plugin-promise
├─ eslint-plugin-sort-destructure-keys
├─ eslint-plugin-sort-export-all
├─ eslint-plugin-sort-exports
├─ eslint-plugin-unicorn
└─ eslint-plugin-yml
```

## Install

``` sh
echo "@vanyauhalin:registry = https://npm.pkg.github.com" > .npmrc
npm i --save-dev @vanyauhalin/eslint-config-base
echo '{\n  "extends": "@vanyauhalin/eslint-config-base"\n}' > .eslintrc.json
```

## License

[MIT](../../LICENSE).
