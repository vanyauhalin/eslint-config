import path from "node:path"
import {after, suite, test} from "node:test"
import {RuleTester} from "@typescript-eslint/rule-tester"

/* eslint-disable typescript/no-misused-promises */
RuleTester.afterAll = after
RuleTester.describe = suite
RuleTester.it = test
RuleTester.itOnly = test.only
/* eslint-enable typescript/no-misused-promises */

let a = process.argv.splice(2)
let d = process.cwd()

let j = a[0]
let o = JSON.parse(j)

for (let f of o.files) {
	f = path.join(d, f)
	if (f !== import.meta.filename) {
		await import(`file://${f}`)
	}
}
