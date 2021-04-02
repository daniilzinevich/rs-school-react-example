import { getRandomInt } from '../utils'

test('getRandomInt gets integer', () => {
  expect(typeof getRandomInt(6)).toBe("number")
  expect(getRandomInt(6) % 1).toBe(0)
})
test('getRandomInt gets number between 0 and max', () => {
  let max = 6;
  for (let i = 0; i < 100; i++) {
    let result = getRandomInt(max);
    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThan(max)
  }
})