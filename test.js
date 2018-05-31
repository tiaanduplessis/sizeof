const sizeof = require('./')

test('should export a function', () => {
  expect(sizeof).toBeDefined()
  expect(typeof sizeof).toBe('function')
})

test('should get size of num, bool or str', () => {
  expect(sizeof('a')).toBe(2)
  expect(sizeof('aaa')).toBe(6)
  expect(sizeof(1)).toBe(8)
  expect(sizeof(true)).toBe(4)
})

test('should get size of object', () => {
  const m = new Map()
  const s = new Set()

  m.set('foo', 1) // 8
  m.set('bar', 2) // 8
  s.add('aa') // 4

  const obj = {
    foo: 1, // 8
    bar: 'a', // 2
    m,
    s
  }

  expect(sizeof(obj)).toBe(30)
})

test('should return 0 for unsupported arg', () => {
  expect(sizeof(undefined)).toBe(0)
  expect(sizeof(null)).toBe(0)
})
