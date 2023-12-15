function myTypeof(obj) {
  //   if (value === null) {
  //     return 'null'
  //   }
  if (obj === undefined) {
    return 'undefined'
  }
  const toString = Object.prototype.toString
  const s = toString.call(obj).split(' ')[1]
  return s.slice(0, s.length - 1).toLowerCase()
}

console.log(myTypeof(null))
console.log(myTypeof([]))
console.log(myTypeof(new Map()))
