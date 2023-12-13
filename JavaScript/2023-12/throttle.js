// throttle 节流
// 技能释放有 cd

const throttle = (fn, interval) => {
  let pre = new Date()
  return function (...args) {
    const cur = new Date()
    const context = this
    if (cur - pre >= interval) {
      fn.apply(context, args)
      pre = cur
    }
  }
}

const button = document.querySelector('button')
const callback = () => {
  console.log('button clicked!')
}
const throttledCallback = throttle(callback, 300)
button.addEventListener('click', throttledCallback)
