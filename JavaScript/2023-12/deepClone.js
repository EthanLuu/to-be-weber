const obj = {
  a: 1,
  b: {
    c: 3,
  },
  d: [-1, -2, -3],
  date: new Date(),
}

const deepClone = (o, map = new WeakMap()) => {
  if (o === null || typeof o !== 'object') {
    return o
  }
  if (o instanceof Date) {
    return new Date(o)
  }
  if (o instanceof RegExp) {
    return new RegExp(o)
  }
  if (map.has(o)) {
    return map.get(o)
  }
  if (Array.isArray(o)) {
    const newArr = []
    for (const item of o) {
      newArr.push(deepClone(item))
    }
    return newArr
  }
  const newO = new o.constructor()
  map.set(o, newO)
  for (const key in o) {
    if (o.hasOwnProperty(key)) newO[key] = deepClone(o[key])
  }
  return newO
}

const newObj = deepClone(obj)
console.log('obj', JSON.stringify(obj))
console.log('newObj', JSON.stringify(newObj))

newObj.a = 2
newObj.b.c = 4
newObj.d[2] = 9
newObj.date = new Date(Date.now() - 1000000)

console.log('obj', obj)
console.log('newObj', newObj)
