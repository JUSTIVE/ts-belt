import { expectType } from 'ts-expect'
import { O, pipe, S } from '../..'

describe('fold', () => {
	it('provides correct types', () => {
		expectType<number>(
			O.fold(
				O.None,
				() => 1,
				() => 2,
			),
		)
		expectType<string>(
			O.fold(
				O.Some('hello'),
				() => 'world',
				() => 'ts-belt',
			),
		)
	})

	it('returns a correct value', () => {
		expect(
			O.fold(
				O.None,
				() => 1,
				() => 2,
			),
		).toEqual(2)
		expect(
			O.fold(O.Some('hello'), S.append(' world'), () => 'ts-belt'),
		).toEqual('hello world')
	})
})

describe('fold (pipe)', () => {
	it('provides correct types', () => {
		expectType<number>(
			pipe(
				O.None,
				O.fold(
					() => 1,
					() => 2,
				),
			),
		)
		expectType<string>(
			pipe(
				O.Some('hello'),
				O.fold(
					() => 'world',
					() => 'ts-belt',
				),
			),
		)
	})

	it('returns a correct value', () => {
		expect(
			pipe(
				O.None,
				O.fold(
					() => 1,
					() => 2,
				),
			),
		).toEqual(2)
		expect(
			pipe(
				O.Some('hello'),
				O.fold(S.append(' world'), () => 'ts-belt'),
			),
		).toEqual('hello world')
	})
})
