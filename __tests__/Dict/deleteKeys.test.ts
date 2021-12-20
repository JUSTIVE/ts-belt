import { expectType } from 'ts-expect'

import { D, pipe } from '../..'

const obj = { x: 123, y: 'abc', z: false }

const rec: Record<string, number> = { a: 1, b: 2, c: 3 }

describe('deleteKeys', () => {
  it('provides correct types', () => {
    expectType<Omit<typeof obj, 'x' | 'y'>>(D.deleteKeys(obj, ['x', 'y']))
    expectType<typeof rec>(D.deleteKeys(rec, ['a', 'b']))
    expectType<typeof rec>(D.deleteKeys(rec, ['y', 'z']))
  })

  it('deletes the right keys', () => {
    expect(D.deleteKeys(obj, ['x', 'y'])).toEqual({ z: false })
    expect(D.deleteKeys(rec, ['a', 'b'])).toEqual({ c: 3 })
    expect(D.deleteKeys(rec, ['y', 'z'])).toEqual(rec)
  })

  it('*', () => {
    const joe = { name: 'Joe', location: 'Warsaw' }
    expect(D.deleteKeys(joe, [])).toEqual({ name: 'Joe', location: 'Warsaw' })
    expect(D.deleteKeys(joe, ['name'])).toEqual({ location: 'Warsaw' })
    expect(D.deleteKeys(joe, ['name', 'location'])).toEqual({})
  })
})

describe('deleteKeys (pipe)', () => {
  it('provides correct types', () => {
    expectType<Omit<typeof obj, 'x' | 'y'>>(pipe(obj, D.deleteKeys(['x', 'y'])))
    expectType<typeof rec>(pipe(rec, D.deleteKeys(['a', 'b'])))
    expectType<typeof rec>(pipe(rec, D.deleteKeys(['y', 'z'])))
  })

  it('deletes the right keys', () => {
    expect(pipe(obj, D.deleteKeys(['x', 'y']))).toEqual({ z: false })
    expect(pipe(rec, D.deleteKeys(['a', 'b']))).toEqual({ c: 3 })
    expect(pipe(rec, D.deleteKeys(['y', 'z']))).toEqual(rec)
  })

  it('*', () => {
    const joe = { name: 'Joe', location: 'Warsaw' }
    expect(pipe(joe, D.deleteKeys([]))).toEqual({
      name: 'Joe',
      location: 'Warsaw',
    })
    expect(pipe(joe, D.deleteKeys(['name']))).toEqual({ location: 'Warsaw' })
    expect(pipe(joe, D.deleteKeys(['name', 'location']))).toEqual({})
  })
})
