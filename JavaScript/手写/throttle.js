// 利用时间戳实现节流
const throttle = (fn, time) => {
    let context, args
    let pre = 0
    return function () {
        const now = new Date()
        context = this
        args = arguments
        if (now - pre > time) {
            // 对距离上次的时间进行限制
            fn.apply(context, args)
            pre = now
        }
    }
}