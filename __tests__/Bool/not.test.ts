import { expectType } from 'ts-expect'

import { B, pipe } from '../..'

describe('not', () => {
	it('provides correct types', () => {
		expectType<boolean>(B.not(true))
	})

	it('negates given boolean value', () => {
		expect(B.not(false)).toEqual(true)
		expect(B.not(true)).toEqual(false)
	})
})

describe('not (pipe)', () => {
	it('provides correct types', () => {
		expectType<boolean>(pipe(true, B.not))
	})

	it('negates given boolean value', () => {
		expect(pipe(false, B.not)).toEqual(true)
		expect(pipe(true, B.not)).toEqual(false)
	})
})
