import path from "node:path/posix"
import type {TSESTree} from "@typescript-eslint/types"
import type {RuleListener} from "@typescript-eslint/utils/eslint-utils"
import {RuleCreator} from "@typescript-eslint/utils/eslint-utils"
import type {RuleContext, RuleFunction} from "@typescript-eslint/utils/ts-eslint"
import {isBuiltIn} from "eslint-plugin-import-x/utils/import-type.js"

const c = RuleCreator(() => "")

export default c({
	name: "import-order",
	meta: {
		type: "layout",
		docs: {
			description: "Enforce the 'builtin', 'external', and 'internal' import order",
		},
		schema: [],
		messages: {
			before: "The '{{a}}' import should be before the '{{b}}' import",
			after: "The '{{a}}' import should be after the '{{b}}' import",
		},
	},
	defaultOptions: [],
	create(ctx) {
		let l = new Listener(ctx)
		return l.toObject()
	},
})

interface Tree {
	[k: string]: Tree
}

class Listener implements RuleListener {
	[k: string]: RuleFunction

	/**
	 * Collection of builtin imports.
	 */
	#b: TSESTree.ImportDeclaration[] = []

	/**
	 * Collection of external imports.
	 */
	#e: TSESTree.ImportDeclaration[] = []

	/**
	 * Collection of internal imports.
	 */
	#i: TSESTree.ImportDeclaration[] = []

	#ctx: RuleContext<string, unknown[]>

	constructor(ctx: RuleContext<string, unknown[]>) {
		this.#ctx = ctx
	}

	ImportDeclaration(d: TSESTree.ImportDeclaration): void {
		this.#pack(d)
	}

	"Program:exit"(): void {
		if (this.#isEmpty()) {
			return
		}

		this.#sort(this.#b)
		this.#sort(this.#e)
		this.#sort(this.#i)
		this.#check()

		this.#clear()
	}

	/**
	 * Converts the listener to a plain object.
	 */
	toObject(): RuleListener {
		return {
			"ImportDeclaration": this.ImportDeclaration.bind(this),
			"Program:exit": this["Program:exit"].bind(this),
		}
	}

	/**
	 * Checks if the import collections are empty.
	 */
	#isEmpty(): boolean {
		return this.#b.length === 0 &&
			this.#e.length === 0 &&
			this.#i.length === 0
	}

	/**
	 * Clears the import collections.
	 */
	#clear(): void {
		this.#b = []
		this.#e = []
		this.#i = []
	}

	/**
	 * Packs the import declaration into the appropriate group.
	 */
	#pack(d: TSESTree.ImportDeclaration): void {
		let p = d.source.value

		if (isBuiltin(p)) {
			this.#b.push(d)
			return
		}

		if (isInternal(p)) {
			this.#i.push(d)
			return
		}

		this.#e.push(d)
	}

	/**
	 * Sorts the collection of import declarations.
	 */
	#sort(c: TSESTree.ImportDeclaration[]): void {
		let t = tree(c)
		t = order(t)

		let l = list(t)
		l = clear(c, l)

		c.sort((a, b) => {
			let x = a.source.value
			let y = b.source.value

			let d = l.indexOf(x) - l.indexOf(y)

			if (d !== 0) {
				return d
			}

			if (a.importKind === b.importKind) {
				return 0
			}

			if (a.importKind === "type") {
				return -1
			}

			if (b.importKind === "type") {
				return 1
			}

			return 0
		})

		function tree(c: TSESTree.ImportDeclaration[]): Tree {
			let t: Tree = {}

			for (let d of c) {
				let p = d.source.value

				let c = t

				for (let u of p.split(path.sep)) {
					let t = c[u]
					if (!t) {
						t = {}
						c[u] = t
					}

					c = t
				}
			}

			return t
		}

		function order(t: Tree): Tree {
			let r: Tree = {}

			let a: string[] = []
			let b: string[] = []

			for (let k of Object.keys(t)) {
				if (path.extname(k) === "") {
					a.push(k)
				} else {
					b.push(k)
				}
			}

			a.sort(compare)
			b.sort(compare)

			for (let k of a) {
				r[k] = t[k]
			}

			for (let k of b) {
				r[k] = t[k]
			}

			for (let k of Object.keys(r)) {
				r[k] = order(r[k])
			}

			return r
		}

		function compare(a: string, b: string): number {
			if (a === "." && b === "..") {
				return 1
			}

			if (a === "." && b === ".") {
				return 0
			}

			if (a === ".." && b === ".") {
				return -1
			}

			if (a === ".." && b === "..") {
				return 0
			}

			return a.localeCompare(b)
		}

		function list(t: Tree): string[] {
			let l: string[] = []

			for (let [k, v] of Object.entries(t)) {
				let t = list(v)

				for (let u of t) {
					l.push(`${k}${path.sep}${u}`)
				}

				l.push(k)
			}

			return l
		}

		function clear(c: TSESTree.ImportDeclaration[], l: string[]): string[] {
			let r: string[] = []

			for (let x of l) {
				let f = false

				for (let d of c) {
					let y = d.source.value
					if (x === y) {
						f = true
						break
					}
				}

				if (f) {
					r.push(x)
				}
			}

			return r
		}
	}

	/**
	 * Checks the order of the import declarations.
	 */
	#check(): void {
		let c = [...this.#b, ...this.#e, ...this.#i]

		for (let x of c) {
			let f = false

			for (let y of c) {
				if (x === y) {
					f = true
					continue
				}

				if (f && x.loc.start.line > y.loc.start.line) {
					this.#ctx.report({
						node: x,
						messageId: "before",
						data: {
							a: x.source.value,
							b: y.source.value,
						},
					})
					continue
				}

				if (!f && x.loc.start.line < y.loc.start.line) {
					this.#ctx.report({
						node: x,
						messageId: "after",
						data: {
							a: x.source.value,
							b: y.source.value,
						},
					})
					continue
				}
			}
		}
	}
}

function isBuiltin(p: string): boolean {
	return isBuiltIn(p, {})
}

function isInternal(p: string): boolean {
	return isAbsolute(p) || isRelative(p)
}

function isAbsolute(p: string): boolean {
	return path.isAbsolute(p)
}

function isRelative(p: string): boolean {
	return new RegExp(`^\\.\\.?(?:$|${path.sep})`).test(p)
}
