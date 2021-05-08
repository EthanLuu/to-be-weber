function newOperator(cst, ...args) {
  // cst 是构造函数
  if (typeof cst !== 'function') {
    throw 'newOperator function the first param must be a function'
  }
  // 让实例可以访问构造函数原型所在的原型链
  let obj = Object.create(cst.prototype)
  let res = cst.apply(obj, args)
  // 判断构造函数返回的是否是引用类型
  let isObject = typeof res === 'object' && res !== null
  let isFunction = typeof res === 'function'
  return isObject || isFunction ? res : obj
}

function Person(name) {
  this.name = name
}
Person.prototype.sayHi = function () {
  console.log(this.name + ': hello!')
}

const person = newOperator(Person, 'ethan')
console.log(person)
person.sayHi()
