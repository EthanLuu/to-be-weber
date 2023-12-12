const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

const resolvePromises = (p1, p2, resolve, reject) => {
  if (p1 === p2) {
    return reject(new Error('Promise 循环引用'))
  }
  if (p2 instanceof MyPromise) {
    p2.then(resolve, reject)
  } else {
    resolve(p2)
  }
}

class MyPromise {
  // 状态
  status = PENDING
  // resolve 的值
  value = null
  // reject 的值
  reason = null
  // then 传来的成功回调函数
  onFulfillCallbacks = []
  // then 传来的失败回调函数
  onRejectedCallbakcs = []

  constructor(executor) {
    try {
      executor(this.resolve, this.reject)
    } catch (err) {
      this.reject(err)
    }
  }

  resolve = (value) => {
    if (this.status !== PENDING) return
    this.value = value
    this.status = FULFILLED
    this.onFulfillCallbacks.forEach((fn) => fn())
  }

  reject = (reason) => {
    if (this.status !== PENDING) return
    this.reason = reason
    this.status = REJECTED
    this.onRejectedCallbakcs.forEach((fn) => fn())
  }

  then = (onFulfilled, onRejected) => {
    const successCallbak =
      typeof onFulfilled === 'function' ? onFulfilled : (value) => value
    const failCallbak =
      typeof onRejected === 'function' ? onRejected : (reason) => reason
    let p = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        queueMicrotask(() => {
          const x = successCallbak(this.value)
          resolvePromises(p, x, resolve, reject)
        })
      }
      if (this.status === REJECTED) {
        queueMicrotask(() => {
          const x = failCallbak(this.reason)
          resolvePromises(p, x, resolve, reject)
        })
      }
      if (this.status === PENDING) {
        this.onFulfillCallbacks.push(() => {
          queueMicrotask(() => {
            const x = successCallbak(this.value)
            resolvePromises(p, x, resolve, reject)
          })
        })
        this.onRejectedCallbakcs.push(() => {
          queueMicrotask(() => {
            const x = failCallbak(this.reason)
            resolvePromises(p, x, resolve, reject)
          })
        })
      }
    })
    return p
  }

  static resolve(value) {
    if (value instanceof MyPromise) {
      return value
    } else {
      return new MyPromise((resolve) => {
        resolve(value)
      })
    }
  }

  static reject(reason) {
    return new MyPromise((_, reject) => reject(reason))
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      if (promises.length === 0) {
        resolve([])
      }
      const res = []
      let cnt = 0
      for (let i = 0; i < promises.length; i++) {
        promises
          .then((value) => {
            res[i] = value
            cnt += 1
            if (cnt === promises.length) {
              resolve(res)
            }
          })
          .catch(reject)
      }
    })
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.map((p) => p.then(resolve, reject))
    })
  }

  static allSettled(promises) {
    return new MyPromise((resolve, reject) => {
      const res = []
      let cnt = 0
      promises.map((p, i) => {
        p.then((v) => {
          res[i] = { status: FULFILLED, value: v }
        })
          .catch((r) => {
            res[i] = { status: REJECTED, value: r }
          })
          .finally(() => {
            cnt += 1
            if (cnt === promises.length) {
              resolve(res)
            }
          })
      })
    })
  }

  static any(promises) {
    return new MyPromise((resolve, reject) => {
      const errors = []
      let cnt = 0
      promises.map((p) => {
        p.then(resolve).catch((r) => {
          errors.push(r)
          cnt += 1
          if (cnt === promises.length) {
            reject(new Error('全错！'))
          }
        })
      })
    })
  }
}

const p1 = new Promise((resolve, reject) => {
  resolve(3)
  reject(4)
})
  .then(5)
  .then((v) => console.log(v))

const p2 = new MyPromise((resolve, reject) => {
  resolve(5)
  reject(4)
})
  .then(7)
  .then((v) => console.log(v))
