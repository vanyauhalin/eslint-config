// The unicorn/better-regex conflicts with the regexp/strict.
// eslint-disable-next-line unicorn/better-regex
const functionRegex = /^[\t ]*(?:export *)?(?:default *)?(?:async *)?function *\w*\([^\n\r)\u2028\u2029]*\)[^\n\r)\u2028\u2029]*\{$/

const methodRegex = /^[\t ]*(?:async *)?\w*\([^\n\r)\u2028\u2029]*\)[^\n\r)\u2028\u2029]*$/

const eslintRegex = /^\/\/ eslint-disable-next-line[^\n\r)\u2028\u2029]*$/

export const ignorePattern = join(functionRegex, methodRegex, eslintRegex)

function join(...rs: RegExp[]): string {
	let p = ""

	for (let r of rs) {
		p += `(?:${String.raw`${r.source}`})|`
	}

	if (p.length !== 0) {
		p = p.slice(0, -1)
	}

	return p
}
