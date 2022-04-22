import type { Linter } from 'eslint';
import { rules } from './rules';

function addRules(names: (keyof typeof rules)[]): Linter.RulesRecord {
  return names.reduce((acc, cur) => ({
    ...acc,
    [cur]: rules[cur],
  }), {});
}

function override(config: Linter.ConfigOverride): Linter.ConfigOverride {
  return config;
}

export {
  addRules,
  override,
};
