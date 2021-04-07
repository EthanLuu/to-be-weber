// 使用原型链
// function Person() {
//   this.colors = ['black', 'white', 'yellow']
// }
// Person.prototype.getColor = function () {
//   return this.colors
// }
// function Asian() {}
// Asian.prototype = new Person()

// 使用构造函数
// function Person(name) {
//     this.name = name
//     this.getName = function () {
//       return this.name
//     }
//   }

//   function Asian(name) {
//     Person.call(this, name)
//   }

//   Asian.prototype = new Person()

// 组合式继承
// function Person(name) {
//   this.name = name
// }

// Person.prototype.getName = function () {
//   return this.name
// }

// function Asian(name, age) {
//   Person.call(this, name)
//   this.age = age
// }
// Asian.prototype = new Person()

// 寄生组合式
// - Asian.prototype = new Person()
// - Asian.prototype.constructor = Person

// + function F() {}
// + F.prototype = Person.prototype
// + let f = new F()
// + f.constructor = Asian
// + Asian.prototype = f

// 简单版
// Asian.prototype = Object.create(Person.prototype)
// Asian.prototype.constructor = Asian

// class 实现
class Person {
  constructor(name) {
    this.name = name
  }
  getName() {
    return this.name
  }
}

class Asian extends Person {
  constructor(name, age) {
    super(name)
    this.age = age
  }
}
