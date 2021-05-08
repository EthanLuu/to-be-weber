Array.prototype.some = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError('this is null or undefined!')
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function')
  }
  const O = Object(this)
  const len = O.length >>> 0
  let k = 0
  while (k < len) {
    if (callback.call(thisArg, O[k], k, O)) {
      return true
    }
    k++
  }
  return false
}

const arr = [1, 2, 3]
console.log(
  arr.some((item) => {
    return item % 2 === 1
  })
)
