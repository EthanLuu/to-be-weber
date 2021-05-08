Object.create = function (proto, propertiesObject = undefined) {
  if (typeof proto !== 'object' && typeof proto !== 'function') {
    throw new TypeError('Object prototype may only be an Object or null')
  }
  if (propertiesObject === null) {
    throw new TypeError('Cannot convert undefined or null to object')
  }

  // 新建一个构造函数
  function f() {}
  // 将构造函数的原型指向给定的原型对象
  f.prototype = proto
  const obj = new f()
  if (propertiesObject !== undefined) {
    Object.defineProperties(obj, propertiesObject)
  }
  if (proto === null) {
    // 允许给定的原型为 null
    Object.setPrototypeOf(obj, null)
  }
  return obj
}

const person = Object.create(
  { name: 'ethan' },
  {
    age: {
      value: 3,
      writable: true,
      enumerable: true,
      configurable: true,
    },
  }
)
console.log(person)
