# @vanyauhalin/eslint-config-react

```sh
# Non-hierarchical tree of configs, plugins.
@vanyauhalin/eslint-config-react
├─ @vanyauhalin/eslint-config-typescript
├─ eslint-config-airbnb
├─ eslint-plugin-jsx-a11y
├─ eslint-plugin-react
└─ eslint-plugin-react-hooks
```

## Install

``` sh
echo "@vanyauhalin:registry = https://npm.pkg.github.com" > .npmrc
npm i --save-dev @vanyauhalin/eslint-config-react
echo '{\n  "extends": "@vanyauhalin/eslint-config-react",\n  "parserOptions": {\n    "project": "./tsconfig.json"\n  }\n}' > .eslintrc.json
```

## License

[MIT](../../LICENSE).
