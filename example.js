const sizeof = require('./')

sizeof(1) // 8
sizeof('hello') // 10
sizeof(true) // 4

sizeof({
  foo: 1,
  bar: 1,
  baz: {
    yes: true,
    foo: {
      hello: 'world'
    }
  }
}) // 30

const m = new Map()
const s = new Set()

m.set('foo', 'foo').set('bar', 9)
s.add('true').add('false').add(1)

sizeof({
  foo: 'true',
  m,
  s
}) // 48
