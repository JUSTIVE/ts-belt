import { expectType } from 'ts-expect'

import { A, N, pipe } from '../..'

const xs = [1, 2, 3, 4, 5]

describe('reduce', () => {
  it('provides correct types', () => {
    expectType<number>(A.reduce(xs, 1, (acc, value) => acc * value))
    expectType<string>(A.reduce(xs, '', (acc, value) => `${acc}${value}`))
    expectType<ReadonlyArray<string>>(
      A.reduce(['hello', 'world'], A.makeEmpty<string>(), A.append),
    )
    expectType<number>(A.reduce([1, 2, 3], 0, N.add))
  })

  it('returns correct value', () => {
    const result = A.reduce(xs, 1, (acc, value) => acc * value)
    expect(result).toEqual(120)
  })
})

describe('reduce (pipe)', () => {
  it('provides correct types', () => {
    expectType<number>(
      pipe(
        xs,
        A.reduce(1, (acc, value) => acc * value),
      ),
    )
    expectType<string>(
      pipe(
        xs,
        A.reduce('', (acc, value) => `${acc}${value}`),
      ),
    )
    expectType<ReadonlyArray<string>>(
      pipe(['hello', 'world'], A.reduce(A.makeEmpty<string>(), A.append)),
    )
    expectType<number>(pipe([1, 2, 3], A.reduce(0, N.add)))
  })

  it('returns correct value', () => {
    const result = pipe(
      xs,
      A.reduce(1, (acc, value) => acc * value),
    )

    expect(result).toEqual(120)
  })
})
