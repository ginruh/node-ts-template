import { expect, test } from 'vitest'
import { Util } from '../util.js'

test('Sample test cases', () => {
  expect(1 + 1).toBe(2)

  expect(Math.sqrt(144)).toBe(12)
})

test('test greet fn', () => {
  expect(Util.greet('Kaliya')).toBe('Hello Kaliya')

  expect(Util.greet('Goriya')).toBe('Hello Goriya')
})
