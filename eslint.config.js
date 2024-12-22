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
			// Some ESLint utility function names are capitalized.
			"new-cap": "off",

			// The ESLint ecosystem utilizes default exports.
			"import-x/no-default-export": "off",
		},
	},
]
