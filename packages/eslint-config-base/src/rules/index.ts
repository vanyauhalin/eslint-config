import { rules as eslintPluginImport } from './eslint-plugin-import';
import { rules as eslint } from './eslint';

const rules = {
  ...eslint,
  ...eslintPluginImport,
};

export {
  rules,
};
