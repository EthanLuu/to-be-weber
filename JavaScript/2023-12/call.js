Function.prototype.myCall = function (context, ...args) {
  const ctx = context || window
  const fn = Symbol('fn')
  ctx[fn] = this
  const res = ctx[fn](...args)
  delete ctx[fn]
  return res
}

const obj = { username: 'ethan' }
const selfIntro = function (age, weight) {
  console.log('name:', this.username)
  console.log('age:', age)
  console.log('weight:', weight)
}
console.warn('my call')
selfIntro.call(obj, 22, '66.5 KG')
selfIntro.myCall(obj, 21, '65.5 KG')
