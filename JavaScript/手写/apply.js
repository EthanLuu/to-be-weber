Function.prototype.apply = function (context, args) {
  context = context || window
  const fn = Symbol('fn')
  context[fn] = this

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

eat.apply(person, [10])

console.log(person.weight)
