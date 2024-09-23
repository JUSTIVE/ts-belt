import { expectType } from 'ts-expect'

import { A, S, flow, pipe } from '..'
describe('flow', () => {
	it('provides correct types', () => {
		expectType<(a: ReadonlyArray<number>) => ReadonlyArray<number>>(
			flow(A.append(2), A.append(3)),
		)
	})

	it('returns correct value', () => {
		const xs = flow(S.append(' '), S.append('world'))
		expect(pipe('hello', xs)).toBe('hello world')
	})
})
