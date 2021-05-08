function add(a, b, c) {
  return a + b + c
}

function partial(fn, ...args) {
  return (...arg) => {
    return fn(...args, ...arg)
  }
}

let partialAdd = partial(add, 1)

console.log(partialAdd(2, 3))
