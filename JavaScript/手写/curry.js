function curry(fn) {
  let judge = (...args) => {
    if (args.length == fn.length) return fn(...args)
    return (...arg) => judge(...args, ...arg)
  }
  return judge
}

function add(a, b, c) {
    return a + b + c
}

let addCurry = curry(add)
console.log(addCurry(1)(2)(3))