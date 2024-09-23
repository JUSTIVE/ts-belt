import { expectType } from 'ts-expect'

import { O } from '../..'

describe('all', () => {
	it('provides correct types', () => {
		expectType<O.Option<ReadonlyArray<number>>>(
			O.all([O.None, O.Some<number>(1)]),
		)
	})

	it('fails when one of the options is None', () => {
		expect(O.all([O.None, O.Some(1)])).toEqual(O.None)
	})

	it('returns Some when all options are Some', () => {
		expect(O.all([O.Some(1), O.Some(2)])).toEqual(O.Some([1, 2]))
	})
})
