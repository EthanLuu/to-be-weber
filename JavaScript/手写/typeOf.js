function typeOf(obj) {
  let res = Object.prototype.toString.call(obj).split(' ')[1]
  res = res.substring(0, res.length - 1).toLowerCase()
  return res
}
console.log(typeOf([])) // array
console.log(typeOf({})) // object
console.log(typeOf(new Date())) // date
