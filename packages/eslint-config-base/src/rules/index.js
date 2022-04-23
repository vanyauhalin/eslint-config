import { rules as eslint } from './eslint';
import { rules as eslintPluginImport } from './eslint-plugin-import';

const rules = {
  ...eslint,
  ...eslintPluginImport,
};

export {
  rules,
};
