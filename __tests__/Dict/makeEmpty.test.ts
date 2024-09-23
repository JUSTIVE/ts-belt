import { expectType } from 'ts-expect'

import { D } from '../..'

describe('makeEmpty', () => {
	it('provides correct types', () => {
		expectType<Record<string, string>>(D.makeEmpty<Record<string, string>>())
	})

	it('returns the empty object', () => {
		expect(D.makeEmpty()).toEqual({})
	})
})
