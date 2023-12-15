function myNew(constructor, ...args) {
  const obj = {}
  Object.setPrototypeOf(obj, constructor.prototype)
  const res = constructor.apply(obj, args)
  return typeof res === 'object' ? res : obj
}

function Student(name) {
  this.name = name
}

Student.prototype.showName = function () {
  console.log(this.name)
}

const student = myNew(Student, 'ethan')

student.showName()
