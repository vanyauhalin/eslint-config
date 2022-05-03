import { rules as eslintPluginImport } from './eslint-plugin-import';
import { rules as typescriptEslint } from './typescript-eslint';

const rules = {
  ...eslintPluginImport,
  ...typescriptEslint,
};

export {
  rules,
};
