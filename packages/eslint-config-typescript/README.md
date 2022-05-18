# @vanyauhalin/eslint-config-typescript

```sh
# Non-hierarchical tree of configs, plugins.
@vanyauhalin/eslint-config-base
├─ @typescript-eslint/eslint-plugin
├─ @typescript-eslint/recommended
├─ @typescript-eslint/recommended-requiring-type-checking
├─ @vanyauhalin/eslint-config-base
└─ eslint-config-airbnb-typescript-base
```

## Install

``` sh
echo "@vanyauhalin:registry = https://npm.pkg.github.com" > .npmrc
npm i --save-dev @vanyauhalin/eslint-config-typescript
echo '{\n  "extends": "@vanyauhalin/eslint-config-react",\n  "parserOptions": {\n    "project": "./tsconfig.json"\n  }\n}' > .eslintrc.json
```

## License

[MIT](../../LICENSE).
