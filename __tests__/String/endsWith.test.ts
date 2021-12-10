import { expectType } from 'ts-expect'

import { S, A, pipe } from '../..'

describe('endsWith', () => {
  it('provides correct types', () => {
    expectType<boolean>(S.endsWith('hello', 'o'))
    expectType<ReadonlyArray<string>>(
      A.filter(['hello', 'world'], S.endsWith('o')),
    )
  })

  it('returns true if the given string ends with substr', () => {
    expect(S.endsWith('hello', 'o')).toEqual(true)
  })

  it('*', () => {
    expect(S.endsWith('hello', 'o')).toEqual(true)
  })
})

describe('endsWith (pipe)', () => {
  it('provides correct types', () => {
    expectType<boolean>(pipe('hello', S.endsWith('o')))
    expectType<ReadonlyArray<string>>(
      pipe(['hello', 'world'], A.filter(S.endsWith('o'))),
    )
  })

  it('returns true if the given string ends with substr', () => {
    expect(pipe('ts-belt', S.endsWith('o'))).toEqual(false)
  })

  it('*', () => {
    expect(pipe('ts-belt', S.endsWith('o'))).toEqual(false)
  })
})
