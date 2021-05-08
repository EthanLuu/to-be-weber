Function.prototype.bind = function (context, ...args) {
  var self = this
  var fn = function () {
    self.apply(
      this instanceof self ? this : context,
      args.concat(Array.prototype.slice.call(arguments))
    )
  }

  fn.prototype = Object.create(self.prototype)
  return fn
}

function eat(k) {
  this.weight += k
}

person = {
  name: 'ethan',
  weight: 100,
}

const myEat = eat.bind(person, 10)
myEat()
console.log(person.weight)
myEat()
console.log(person.weight)
