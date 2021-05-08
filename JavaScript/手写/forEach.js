Array.prototype.forEach = function (callback, thisArg) {
  if (this == null) {
    throw new TypeError('this is null')
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a fucntion')
  }
  const O = Object(this) // 绑定 this
  const len = O.length >>> 0
  let k = 0
  while (k < len) {
    if (k in O) {
      // 额外参数, value, index, arr
      callback.call(thisArg, O[k], k, O)
    }
    k++
  }
}

const arr = [1, 2, 3]

arr.forEach((element, index, arr) => {
  console.log(element, index, arr)
})
