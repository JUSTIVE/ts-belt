import { expectType } from 'ts-expect'

import { O, pipe } from '../..'

describe('makeSome', () => {
	it('provides correct types', () => {
		expectType<O.Option<number>>(O.makeSome(1))
	})

	it('returns Some', () => {
		expect(O.makeSome(1)).toEqual(O.Some(1))
	})
	it('returns BS_PRIVATE_NESTED_SOME_NONE', () => {
		expect(O.makeSome(undefined as never)).toStrictEqual({
			BS_PRIVATE_NESTED_SOME_NONE: 0,
		})
		expect(O.makeSome({ BS_PRIVATE_NESTED_SOME_NONE: 0 })).toStrictEqual({
			BS_PRIVATE_NESTED_SOME_NONE: 1,
		})
	})
})

describe('makeSome (pipe)', () => {
	it('provides correct types', () => {
		expectType<O.Option<number>>(pipe(1, O.makeSome))
	})

	it('returns Some', () => {
		expect(pipe(1, O.makeSome)).toEqual(O.Some(1))
	})
})
