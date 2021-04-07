// 手写 Promise 练习

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

export default class MyPromise {
    constructor(executor) {
        // 构造函数传入一个执行器
        // 该执行器会立即执行
        executor(this.resolve, this.reject)
    }

    status = PENDING

    // 成功之后的值
    value = null
    // 失败之后的原因
    reason = null

    // 用箭头函数是为了保证这两个方法的 this 指向的是实例对象
    // 更改成功后的状态
    resolve = (value) => {
        if (this.status === PENDING) {
            this.status = FULFILLED
            this.value = value
        }
    }
    // 更改失败之后的状态
    reject = (reason) => {
        if (this.status === PENDING) {
            this.status = REJECTED
            this.reason = reason
        }
    }

    then(onFulfilled, onRejected) {
        if (this.status === FULFILLED) {
            // 成功的回调
            onFulfilled(this.value)
        } else if (this.status === REJECTED) {
            // 失败的回调
            onRejected(this.reason)
        }
    }

}