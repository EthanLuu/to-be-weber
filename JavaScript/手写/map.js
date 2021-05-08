Array.prototype.map = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError('this is null or undefined!')
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function')
  }
  const O = Object(this)
  const len = O.length >>> 0
  let k = 0
  let res = []
  while (k < len) {
    if (k in O) {
      res[k] = callback.call(thisArg, O[k], k, O)
    }
    k++
  }
  return res
}

const arr = [1, 2, 3]
console.log(
  arr.map((value, index) => {
    console.log(value)
    console.log(index)
    return `${index}:${value}`
  })
)
