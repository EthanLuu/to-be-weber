function myInstanceof(obj, constructor) {
  let cur = obj
  while (cur) {
    const proto = Object.getPrototypeOf(cur)
    if (constructor.prototype === proto) {
      return true
    }
    cur = proto
  }
  return false
}

console.log(myInstanceof(new Map(), Map))
console.log(myInstanceof(new Map(), Object))


class Person {}

class Student extends Person {}

class Teacher extends Person {}

const student = new Student()
const teacher = new Teacher()

console.log(myInstanceof(student, Person))
console.log(myInstanceof(student, Student))
console.log(myInstanceof(student, Teacher))
