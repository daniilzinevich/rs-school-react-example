import { getPosts } from '../api'

test('getPosts fetch posts', async () => {
  const originalFetch = global.fetch;
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(['hello']),
    })
  )

  expect(await getPosts('test')).toEqual(['hello'])

  global.fetch = originalFetch
})