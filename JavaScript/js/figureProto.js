function Person() {
    // 构造函数
}
Person.prototype.name = 'ethan'
const person = new Person()
person.prototype


class F {

}

class C extends F {

}

console.log(C.__proto__ === F); // true
console.log(C.prototype.__proto__ === F.prototype) // true
