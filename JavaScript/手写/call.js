Function.prototype.call = function (context, ...args) {
  // 防止没有传参
  context = context || window

  // 防止 context 对象中出现过 fn 属性
  const fn = Symbol('fn')

  // 方法中的 this 指向的是调用该方法的对象，调用 call 的是一个函数
  // eat.call(person)，this === eat 方法
  context[fn] = this

  // 执行函数
  const res = context[fn](...args)

  delete context[fn]
  return res
}

function eat(k) {
  this.weight += k
}

person = {
  name: 'ethan',
  weight: 100,
}

// call(context, ...args) 后面可以传任意多个参数
eat.call(person, 10)

console.log(person.weight)
