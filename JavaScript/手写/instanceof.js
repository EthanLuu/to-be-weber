function instanceOf(obj, cst) {
  // obj 是待检查的对象，cst 是待检查的构造函数
  // let proto = obj.__proto__ // 这种写法不好
  let proto = Object.getPrototypeOf(obj)
  while (proto) {
    if (proto === null) return false
    if (proto === cst.prototype) return true
    // proto = proto.__proto__ // 避免这种写法
    proto = Object.getPrototypeOf(proto)
  }
  return false
}

function Person(name) {
  this.name = name
}

const person = new Person('ethan')

console.log(instanceOf(person, Person))
console.log(instanceOf(person, Object))
console.log(instanceOf(person, Array))
