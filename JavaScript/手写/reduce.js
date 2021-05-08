Array.prototype.reduce = function (callback, initialValue) {
  if (this == null) {
    throw new TypeError('this is null or undefined!')
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function.')
  }
  const O = Object(this)
  const len = O.length >>> 0
  let acc
  let k = 0
  if (arguments.length > 1) {
    acc = initialValue
  } else {
    // 取数组中第一个非空值
    while (k < len && !(k in O)) {
      k++
    }
    if (k > len) {
      throw new TypeError('Reduce of empty array with no initial value')
    }
    acc = O[k++]
  }
  while (k < len) {
    if (k in O) {
      acc = callback(acc, O[k], k, 0)
    }
    k++
  }
  return acc
}

const arr = [1, 2, 3]
console.log(arr.reduce((pre, cur) => pre + cur, 1))
