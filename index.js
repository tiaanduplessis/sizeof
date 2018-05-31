const sizeMap = {
  'boolean': () => 4,
  'string': (str) => str.length * 2,
  'number': () => 8
}

const isObj = val => Object.prototype.toString.call(val) === '[object Object]'

function sizeof (val) {
  let bytes = 0

  function getSize (val) {
    if (val !== null || val !== undefined) {
      const type = typeof val
      if (sizeMap[type]) {
        bytes += sizeMap[type](val)
      } else if (val instanceof Set || val instanceof Map) {
        Array.from(val.values()).forEach(getSize)
      } else if (isObj(val)) {
        Object.getOwnPropertyNames(val).forEach(key => getSize(val[key]))
      }
    }
  }

  getSize(val)

  return bytes
}

module.exports = sizeof
