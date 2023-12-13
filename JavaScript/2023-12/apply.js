// 改变函数内 this 的指向
Function.prototype.myApply = function (context, args) {
  const ctx = context || window
  const fn = Symbol('fn')
  ctx[fn] = this
  const res = ctx[fn](...args)
  return res
}

const obj = { username: 'ethan' }
const selfIntro = function (age, weight) {
  console.log('name:', this.username)
  console.log('age:', age)
  console.log('weight:', weight)
}
selfIntro.apply(obj, [22, '66.5 KG'])
selfIntro.myApply(obj, [21, '65.5 KG'])
