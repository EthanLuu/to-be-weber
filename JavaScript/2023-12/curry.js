function fn(a, b, c) {
  console.log(a, b, c, a + b + c)
}

function curry(fn) {
  return function curried(...args) {
    if (args.length === fn.length) {
      return fn.apply(this, args)
    } else {
      return function (...newArgs) {
        return curried.apply(this, [...args, ...newArgs])
      }
    }
  }
}

const curryFn = curry(fn)
curryFn(1)(2)(3)
