import type {TestCaseError} from "@typescript-eslint/rule-tester"
import {RuleTester} from "@typescript-eslint/rule-tester"
import rule from "./import-order.ts"

const t = new RuleTester()

t.run("import-order", rule, {
	valid: [j(
		'import "node:fs/promises"',
		'import "node:fs"',
		'import "eslint/rules"',
		'import "eslint"',
		'import "../bin/tool.js"',
		'import "../utils.js"',
		'import type {} from "./main.js"',
		'import "./main.js"',
	)],
	invalid: [{
		code: j(
			'import "./main.js"',
			'import type {} from "./main.js"',
			'import "../utils.js"',
			'import "../bin/tool.js"',
			'import "eslint"',
			'import "eslint/rules"',
			'import "node:fs"',
			'import "node:fs/promises"',
		),
		errors: [
			e("The './main.js' import should be after the 'node:fs/promises' import"),
			e("The './main.js' import should be after the 'node:fs' import"),
			e("The './main.js' import should be after the 'eslint/rules' import"),
			e("The './main.js' import should be after the 'eslint' import"),
			e("The './main.js' import should be after the '../bin/tool.js' import"),
			e("The './main.js' import should be after the '../utils.js' import"),
			e("The './main.js' import should be after the './main.js' import"),
			e("The './main.js' import should be after the 'node:fs/promises' import"),
			e("The './main.js' import should be after the 'node:fs' import"),
			e("The './main.js' import should be after the 'eslint/rules' import"),
			e("The './main.js' import should be after the 'eslint' import"),
			e("The './main.js' import should be after the '../bin/tool.js' import"),
			e("The './main.js' import should be after the '../utils.js' import"),
			e("The './main.js' import should be before the './main.js' import"),
			e("The '../utils.js' import should be after the 'node:fs/promises' import"),
			e("The '../utils.js' import should be after the 'node:fs' import"),
			e("The '../utils.js' import should be after the 'eslint/rules' import"),
			e("The '../utils.js' import should be after the 'eslint' import"),
			e("The '../utils.js' import should be after the '../bin/tool.js' import"),
			e("The '../utils.js' import should be before the './main.js' import"),
			e("The '../utils.js' import should be before the './main.js' import"),
			e("The '../bin/tool.js' import should be after the 'node:fs/promises' import"),
			e("The '../bin/tool.js' import should be after the 'node:fs' import"),
			e("The '../bin/tool.js' import should be after the 'eslint/rules' import"),
			e("The '../bin/tool.js' import should be after the 'eslint' import"),
			e("The '../bin/tool.js' import should be before the '../utils.js' import"),
			e("The '../bin/tool.js' import should be before the './main.js' import"),
			e("The '../bin/tool.js' import should be before the './main.js' import"),
			e("The 'eslint' import should be after the 'node:fs/promises' import"),
			e("The 'eslint' import should be after the 'node:fs' import"),
			e("The 'eslint' import should be after the 'eslint/rules' import"),
			e("The 'eslint' import should be before the '../bin/tool.js' import"),
			e("The 'eslint' import should be before the '../utils.js' import"),
			e("The 'eslint' import should be before the './main.js' import"),
			e("The 'eslint' import should be before the './main.js' import"),
			e("The 'eslint/rules' import should be after the 'node:fs/promises' import"),
			e("The 'eslint/rules' import should be after the 'node:fs' import"),
			e("The 'eslint/rules' import should be before the 'eslint' import"),
			e("The 'eslint/rules' import should be before the '../bin/tool.js' import"),
			e("The 'eslint/rules' import should be before the '../utils.js' import"),
			e("The 'eslint/rules' import should be before the './main.js' import"),
			e("The 'eslint/rules' import should be before the './main.js' import"),
			e("The 'node:fs' import should be after the 'node:fs/promises' import"),
			e("The 'node:fs' import should be before the 'eslint/rules' import"),
			e("The 'node:fs' import should be before the 'eslint' import"),
			e("The 'node:fs' import should be before the '../bin/tool.js' import"),
			e("The 'node:fs' import should be before the '../utils.js' import"),
			e("The 'node:fs' import should be before the './main.js' import"),
			e("The 'node:fs' import should be before the './main.js' import"),
			e("The 'node:fs/promises' import should be before the 'node:fs' import"),
			e("The 'node:fs/promises' import should be before the 'eslint/rules' import"),
			e("The 'node:fs/promises' import should be before the 'eslint' import"),
			e("The 'node:fs/promises' import should be before the '../bin/tool.js' import"),
			e("The 'node:fs/promises' import should be before the '../utils.js' import"),
			e("The 'node:fs/promises' import should be before the './main.js' import"),
			e("The 'node:fs/promises' import should be before the './main.js' import"),
		],
	}],
})

function j(...c: string[]): string {
	return c.join("\n")
}

function e(m: string): TestCaseError<"before" | "after"> {
	// @ts-ignore The origin ESLint RuleTester accepts this construct of error.
	return {message: m}
}
