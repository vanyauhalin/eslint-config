/* eslint-disable no-void, unicorn/prefer-top-level-await */

import path from "node:path"
import {test} from "node:test"
import {RuleTester} from "@typescript-eslint/rule-tester"

interface Config {
	files: string[]
}

// The code listed below might appear weird, but:
//
// 1. The Node.js native test runner was chosen for its simplicity and the
// ability to run all tests from a single entry point without external
// command-line interfaces.
//
// 2. However, the part of the API of the native Node.js test runner was
// introduced only in version 20, which conflicts with the idea that the project
// needed to be tested on older Node.js versions.
//
// 3. In addition, the top-level await is not used for the same reason: to be
// able to run this code on older versions of Node.js.

RuleTester.afterAll = function afterAll(cb) {
	test.after(cb)
}

RuleTester.describe = function describe(_, cb) {
	cb()
}

RuleTester.it = function it(n, cb) {
	void test(n, cb)
}

RuleTester.itOnly = function itOnly(n, cb) {
	void test(n, {only: true}, cb)
}

async function main(): Promise<void> {
	let c = await parse(process)
	await run(process.cwd(), c)
}

async function parse(p: NodeJS.Process): Promise<Config> {
	let s = await new Promise<string>((res, rej) => {
		let s = ""

		p.stdin.on("data", (d) => {
			s += d.toString()
		})

		p.stdin.on("end", () => {
			res(s)
		})

		p.stdin.on("error", (e) => {
			rej(e)
		})
	})

	return JSON.parse(s)
}

async function run(d: string, c: Config): Promise<void> {
	for (let f of c.files) {
		f = path.join(d, f)

		if (f === import.meta.filename) {
			continue
		}

		await import(`file://${f}`)
	}
}

void main()

/* eslint-enable no-void, unicorn/prefer-top-level-await */
