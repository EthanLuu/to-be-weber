Function.prototype.myBind = function (context, ...args) {
  const ctx = context || window
  const fn = Symbol('fn')
  ctx[fn] = this
  return () => ctx[fn](...args)
}

const obj = { username: 'ethan' }

const selfIntro = function (age, weight) {
  console.log('name', this.username)
  console.log('age', age)
  console.log('weight', weight)
}

selfIntro.bind(obj, 17, '23 KG')()
selfIntro.myBind(obj, 21, '24 KG')()
