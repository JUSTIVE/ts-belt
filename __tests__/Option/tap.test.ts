import { A, O, pipe } from '../..'

describe('tap', () => {
	it('applies a side-effect', () => {
		const spy = jest.fn()
		const value = pipe(
			O.tap(O.flatMap(['hello', 'world'], A.head), str => {
				spy()
				expect(str).toEqual('hello')
			}),
			O.getWithDefault(''),
		)

		expect(spy).toBeCalledTimes(1)
		expect(value).toEqual('hello')
	})

	it('ignores the value if the option is None', () => {
		const spy = jest.fn()
		const value = pipe(
			O.tap(O.fromNullable(null), str => {
				spy()
				expect(str).toEqual('hello')
			}),
			O.getWithDefault(''),
		)

		expect(spy).not.toBeCalled()
		expect(value).toEqual('')
	})

	it('*', () => {
		expect(
			pipe(
				O.tap(O.flatMap(O.fromNullable(['hello', 'world']), A.get(1)), str => {
					console.log(str) // ⬅️ 'world'
				}),
				O.getWithDefault(''),
			),
		).toEqual('world')
	})
})

describe('tap (pipe)', () => {
	it('applies a side-effect', () => {
		const spy = jest.fn()
		const value = pipe(
			O.fromNullable(['hello', 'world']),
			O.flatMap(A.get(1)),
			O.tap(str => {
				spy()
				expect(str).toEqual('world')
			}),
			O.getWithDefault(''),
		)

		expect(spy).toBeCalledTimes(1)
		expect(value).toEqual('world')
	})

	it('*', () => {
		expect(
			pipe(
				O.fromNullable(['hello', 'world']),
				O.flatMap(A.get(1)),
				O.tap(str => {
					console.log(str) // ⬅️ 'world'
				}),
				O.getWithDefault(''),
			),
		).toEqual('world')
	})
	it('*', () => {
		expect(
			pipe(
				O.fromNullable(['hello', 'world']),
				O.flatMap(A.get(1)),
				O.tap(str => {
					console.log(str) // ⬅️ 'world'
				}),
				O.getWithDefault(''),
			),
		).toEqual('world')
	})
})
