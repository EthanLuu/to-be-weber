const PENDING = 'pending'
const FULFILLED = 'resolved'
const REJECTED = 'rejected'

class MyPromise {
  constructor(executor) {
    try {
      // 实例化的时候立刻执行传入的这个执行器，并传入 resolve 和 reject
      executor(this.resolve, this.reject)
    } catch (error) {
      // 捕获错误并执行失败回调
      this.reject(error)
    }
  }

  // 初始化状态为 pending
  status = PENDING

  // value 存储成功的结果，reason 存储失败的结果
  value = null
  reason = null

  // 存储成功回调函数
  onFulfilledCallback = []
  // 存储失败回调函数
  onRejectedCallback = []

  resolve = (value) => {
    // 只有当状态为 pending 的时候才执行成功回调
    if (this.status === PENDING) {
      this.status = FULFILLED
      this.value = value
      // 如果存在成功回调，就调用
      while (this.onFulfilledCallback.length) {
        this.onFulfilledCallback.shift()(value)
      }
    }
  }

  reject = (reason) => {
    // 只有当状态为 pending 的时候才执行失败回调
    if (this.status === PENDING) {
      this.status = REJECTED
      this.reason = reason
      // 如果存在成失败回调，就调用
      while (this.onRejectedCallback.length) {
        this.onRejectedCallback.shift()(reason)
      }
    }
  }

  then(onFulfilled, onRejected) {
    // 未指定成功和失败回调时，使用默认函数
    const realOnFulfilled =
      typeof onFulfilled === 'function' ? onFulfilled : (value) => value
    const realOnRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (reason) => {
            throw reason
          }
    // 为了实现链式调用，需要返回一个 MyPromise 对象
    const p = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        // 创建一个微任务
        queueMicrotask(() => {
          // 获取成功回调的结果
          try {
            const x = realOnFulfilled(this.value)
            resolvePromise(p, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      } else if (this.status === REJECTED) {
        // 如果传入的实例的状态是失败，则执行失败回调
        queueMicrotask(() => {
          try {
            const x = (realo = realOnRejected(this.reason))
            resolvePromise(p, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      } else if (this.status === PENDING) {
        // 如果传入的实例仍是等待中，那么需要先存储成功和失败的回调函数
        this.onFulfilledCallback.push(() => {
          queueMicrotask(() => {
            try {
              const x = onFulfilled(this.value)
              resolvePromise(p, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
          })
        })
        this.onRejectedCallback.push(() => {
          queueMicrotask(() => {
            try {
              const ret = onRejected(this.value)
              resolvePromise(p, ret, resolve, reject)
            } catch (error) {
              reject(error)
            }
          })
        })
      }
    })

    return p
  }

  // resolve 静态方法
  static resolve(parameter) {
    if (parameter instanceof MyPromise) {
      return parameter
    }
    return new MyPromise((resolve) => {
      resolve(parameter)
    })
  }

  // reject 静态方法
  static reject(reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason)
    })
  }
}

function resolvePromise(promise, x, resolve, reject) {
  if (promise === x) {
    // 如果返回值和原 promise 相同，抛出循环调用异常
    return reject(
      new TypeError('Chaining cycle detected for promise #<Promise>')
    )
  }
  if (typeof x === 'object' || typeof x === 'function') {
    if (x === null) {
      return resolve(x)
    }

    let then
    try {
      then = x.then
    } catch (error) {
      return reject(error)
    }

    if (typeof then === 'function') {
      let called = false
      try {
        then.call(
          x,
          (y) => {
            if (called) return
            called = true
            resolvePromise(promise, y, resolve, reject)
          },
          (r) => {
            if (called) return
            called = true
            reject(r)
          }
        )
      } catch (error) {
        if (called) return
        reject(error)
      }
    } else {
      resolve(x)
    }
  } else {
    // x 是普通值，则直接调用成功回调
    resolve(x)
  }
}

MyPromise.resolve()
  .then(() => {
    console.log(0)
    return MyPromise.resolve(4)
  })
  .then((res) => {
    console.log(res)
  })

MyPromise.resolve()
  .then(() => {
    console.log(1)
  })
  .then(() => {
    console.log(2)
  })
  .then(() => {
    console.log(3)
  })
  .then(() => {
    console.log(5)
  })
  .then(() => {
    console.log(6)
  })

Promise.resolve = function (value) {
  if (value instanceof Promise) {
    return value
  }
  return new Promise((resolve) => resolve(value))
}

Promise.reject = function (reason) {
  return new Promise((resolve, reason) => reject(reason))
}

Promise.all = function (promiseArr) {
  let cnt = 0
  let res = []
  return new Promise((resolve, reject) => {
    promiseArr.forEach((promise, i) => {
      Promise.resolve(promise).then(
        // 如果有一个 pending，就不会 resolve，也不会 reject
        (val) => {
          cnt++
          res[i] = val
          if (cnt === promiseArr.length) {
            // 都是 fulfilled，返回 res 值数组
            resolve(res)
          }
        },
        (error) => {
          // 有一个 rejcted，直接返回
          reject(error)
        }
      )
    })
  })
}

Promise.race = function (promiseArr) {
  return new Promise((resolve, reject) => {
    promiseArr.forEach((promise) => {
      Promise.resolve(promise).then(
        (value) => {
          resolve(value)
        },
        (error) => {
          reject(error)
        }
      )
    })
  })
}

Promise.allSettled = function (promiseArr) {
  let res = []
  return new Promise((resolve, reject) => {
    promiseArr.forEach((promise) => {
      Promise.resolve(promise).then(
        (value) => {
          res.push({
            status: 'fulfilled',
            value,
          })
          if (res.length === promiseArr.length) {
            resolve(res)
          }
        },
        (error) => {
          res.push({
            status: 'rejected',
            reason: error,
          })
          if (res.length === promiseArr.length) {
            resolve(res)
          }
        }
      )
    })
  })
}

Promise.any = function (promiseArr) {
  let cnt = 0
  return new Promise((resolve, reject) => {
    if (promiseArr.length === 0) {
      reject(new AggregateError())
    }
    promiseArr.forEach((promise) => {
      Promise.resolve(promise).then(
        (value) => {
          resolve(value)
        },
        (error) => {
          cnt++
          if (cnt === promiseArr.length) {
            reject(new AggregateError('all promises were rejected'))
          }
        }
      )
    })
  })
}
