/**
 * @typedef {import('eslint').Linter.BaseConfig} BaseConfig
 * @typedef {import('eslint').Linter.RulesRecord} RulesRecord
 */

/**
 * Type-safe helper function for creating Eslint configuration.
 * @param {BaseConfig} config ESLint configuration.
 * @return {BaseConfig} ESLint configuration.
 */
function configure(config) {
  return config;
}

/**
 * Type-safe helper function for groping rules.
 * @param {T} rules Rules record.
 * @template T
 */
function group(rules) {
  return {
    /**
     * Helper function for adding rules.
     * @param {(keyof T)[]} names Array of rule names.
     * @returns {RulesRecord} Rules record.
     */
    add(names) {
      return names.reduce((acc, cur) => ({
        ...acc,
        [cur]: rules[cur],
      }), {});
    },
  };
}

module.exports = {
  configure,
  group,
};
