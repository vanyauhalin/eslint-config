const typescriptEslint = require('./typescript-eslint.cjs');

const rules = {
  ...typescriptEslint.rules,
};

exports.rules = rules;
