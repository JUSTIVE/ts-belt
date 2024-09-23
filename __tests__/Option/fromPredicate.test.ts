import { expectType } from 'ts-expect'
import { A, O, pipe } from '../..'

describe('fromPredicate', () => {
	it('provides correct types', () => {
		const value = null as unknown as string | null
		expectType<O.Option<string>>(O.fromPredicate(value, str => str.length > 3))
	})

	it('returns None', () => {
		expect(O.fromPredicate('string', str => str.length > 10)).toEqual(O.None)
		expect(O.fromPredicate(0, n => n !== 0)).toEqual(O.None)
		expect(O.fromPredicate(true, state => !state)).toEqual(O.None)
	})

	it('returns Some', () => {
		expect(
			O.fromPredicate(
				[1, 2, 3],
				A.some(x => x === 2),
			),
		).toEqual(O.Some([1, 2, 3]))
		expect(
			O.fromPredicate(
				{ prop: 'this is fine' },
				obj => obj.prop === 'this is fine',
			),
		).toEqual(
			O.Some({
				prop: 'this is fine',
			}),
		)
	})

	it('*', () => {
		const { Some, None } = O

		expect(
			O.fromPredicate(
				[1, 2, 3],
				A.some(x => x === 2),
			),
		).toEqual(Some([1, 2, 3]))

		expect(
			O.fromPredicate(
				[1, 2, 3],
				A.some(x => x === 4),
			),
		).toEqual(None)
	})
})

describe('fromPredicate (pipe)', () => {
	it('provides correct types', () => {
		const value = null as unknown as string | null
		const option = O.fromPredicate(value, str => str.length > 3)
		expectType<O.Option<string>>(option)
	})

	it('returns None', () => {
		expect(
			pipe(
				null,
				O.fromPredicate(_ => false),
			),
		).toEqual(O.None)
		expect(
			pipe(
				undefined,
				O.fromPredicate(_ => false),
			),
		).toEqual(O.None)
	})

	it('returns Some', () => {
		expect(
			pipe(
				'ts',
				O.fromPredicate(str => str.length > 3),
			),
		).toEqual(O.None)
	})
})
