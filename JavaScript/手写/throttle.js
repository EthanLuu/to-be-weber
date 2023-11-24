// 利用时间戳实现节流
const throttle = (fn, time) => {
    let pre = 0
    return function (...args) {
        const now = new Date()
        if (now - pre > time) {
            // 对距离上次的时间进行限制
            fn.apply(this, args)
            pre = now
        }
    }
}