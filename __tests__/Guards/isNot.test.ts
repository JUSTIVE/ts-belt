import { expectType } from 'ts-expect'

import { F, G, pipe } from '../..'

describe('isNot', () => {
	it('provides correct types', () => {
		const x = Promise.resolve(0)

		if (G.isNot(x, G.isString)) {
			expectType<Promise<number>>(x)
		}

		const y = '' as unknown as string | number

		if (G.isNot(y, G.isString)) {
			expectType<number>(y)
		}
	})

	it('determines whether the provided value is not string', () => {
		expect(G.isNot([1, 2, 3], G.isString)).toEqual(true)
		expect(G.isNot('hello', G.isString)).toEqual(false)
		expect(G.isNot({}, G.isString)).toEqual(true)
		expect(G.isNot(0, G.isString)).toEqual(true)
		expect(G.isNot(false, G.isString)).toEqual(true)
		expect(G.isNot(F.ignore, G.isString)).toEqual(true)
		expect(G.isNot(Promise.resolve(1), G.isString)).toEqual(true)
		expect(G.isNot(new Date(), G.isString)).toEqual(true)
		expect(G.isNot(new Error('oops'), G.isString)).toEqual(true)
	})

	it('*', () => {
		expect(
			// ⬇️ const isNotString = G.isNot(G.isString)
			G.isNot(0, G.isString),
		).toEqual(true)
	})
})

describe('isNot (pipe)', () => {
	it('*', () => {
		expect(pipe('ts-belt', G.isNot(G.isString))).toEqual(false)
		expect(pipe(3, G.isNot(G.isString))).toEqual(true)
	})
})
