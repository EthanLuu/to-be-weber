const debounce = (fn, time) => {
  // fn 是一个回调函数，time 是触发回调函数的冷却时间
  let timeout
  return function () {
    const context = this
    const args = arguments
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(context, args)
    }, time)
  }
}

const ele = document.getElementById('my-input')
ele.addEventListener(
  'keypress',
  debounce(() => console.log(1), 1000)
)
