import { A, pipe } from '../..'

const xs = [
	{
		name: 'John',
		age: 20,
	},
	{
		name: 'Sarah',
		age: 33,
	},
	{
		name: 'Kim',
		age: 22,
	},
	{
		name: 'Michael',
		age: 38,
	},
]

// TODO: expectType
describe('sortBy', () => {
	it('returns correctly sorted array', () => {
		const result = A.sort(xs, (a, b) => a.age - b.age)
		expect(result).toEqual([
			{
				name: 'John',
				age: 20,
			},
			{
				name: 'Kim',
				age: 22,
			},
			{
				name: 'Sarah',
				age: 33,
			},
			{
				name: 'Michael',
				age: 38,
			},
		])
	})
})

describe('sort (pipe)', () => {
	it('returns correctly sorted array', () => {
		const result = pipe(
			xs,
			A.sort((a, b) => a.age - b.age),
		)
		expect(result).toEqual([
			{
				name: 'John',
				age: 20,
			},
			{
				name: 'Kim',
				age: 22,
			},
			{
				name: 'Sarah',
				age: 33,
			},
			{
				name: 'Michael',
				age: 38,
			},
		])
	})
})
