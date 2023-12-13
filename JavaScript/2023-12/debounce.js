// debounce 防抖
// 读条完毕才能释放技能

const debounce = (fn, timeout) => {
  let timer
  return function (...args) {
    const context = this
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, timeout)
  }
}

const input = document.querySelector('input')
const callback = () => {
  console.log('input!')
}

const debouncedCallback = debounce(callback, 300)
input.addEventListener('input', debouncedCallback)
