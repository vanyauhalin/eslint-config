/**
 * @import {TSESLint} from "@typescript-eslint/utils"
 */

import config from "./dist/main.js"

/**
 * @type {TSESLint.FlatConfig.ConfigArray}
 */
export default [
	...config,
	{
		rules: {
			// The ESLint ecosystem utilizes default exports.
			"import-x/no-default-export": "off",
			"import-x/no-named-as-default": "off",
		},
	},
]
