import { expectType } from 'ts-expect'
import { AD } from '../..'
describe('makeInit', () => {
	it('provides correct types', () => {
		expectType<AD.AsyncData<number>>(AD.makeInit<number>())
	})

	it('creates an init data', () => {
		expect(AD.makeInit<number>()).toEqual(AD.Init)
	})

	it('*', () => {
		expect(AD.makeInit<number>()).toEqual(AD.Init)
	})
})
