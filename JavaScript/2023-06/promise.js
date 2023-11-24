const PENDING = 'pending';
const FULFILLED = 'resolved';
const REJECTED = 'rejected';
class MyPromise {
    state = PENDING;
    value = null;
    reason = null;
    fulfillCallbacks = [];
    rejectCallbacks = [];

    constructor(executor) {
        try {
            executor(this.resolve, this.reject);
        } catch (error) {
            this.reject(error);
        }
    }

    resolve = (value) => {
        if (!this.state === PENDING) return;
        this.state = FULFILLED;
        this.value = value;
        while (this.fulfillCallbacks.length > 0) {
            this.fulfillCallbacks.shift()(value);
        }
    }

    reject = (reason) => {
        if (!this.state === PENDING) return;
        this.state = REJECTED;
        this.reason = reason;
        while (this.rejectCallbacks.length > 0) {
            this.rejectCallbacks.shift()(reason);
        }
    }

    resolvePromise = (p, ret, resolve, reject) => {
        if (ret === p) {
            return reject(new TypeError("Chaining cycle detected for promise #<Promise>"));
        }
        if (ret instanceof MyPromise) {
            ret.then(resolve, reject);
        } else {
            resolve(ret);
        }
    }

    then = (onFulfilled, onRejected) => {
        const p = new MyPromise((resolve, reject) => {
            if (this.state === FULFILLED) {
                queueMicrotask(() => {
                    try {
                        const ret = onFulfilled(this.value);
                        this.resolvePromise(p, ret, resolve, reject);
                    } catch (error) {
                        reject(error);
                    }
                })
            } else if (this.state === REJECTED) {
                queueMicrotask(() => {
                    const ret = onRejected(this.reason);
                    this.resolvePromise(p, ret, resolve, reject);
                })
            } else if (this.state === PENDING) {
                this.fulfillCallbacks.push(() => {
                    queueMicrotask(() => {
                        try {
                            const ret = onFulfilled(this.value);
                            this.resolvePromise(p, ret, resolve, reject);
                        } catch (error) {
                            reject(error);
                        }
                    })
                });
                this.rejectCallbacks.push(() => {
                    queueMicrotask(() => {
                        try {
                            const ret = onRejected(this.reason);
                            this.resolvePromise(p, ret, resolve, reject);
                        } catch (error) {
                            reject(error);
                        }
                    })
                });
            }
        });
        return p;
    }

    static resolve(value) {
        if (value instanceof MyPromise) {
            return value;
        } else {
            return new MyPromise((resolve) => {
                resolve(value);
            });
        }
    }

    static reject(reason) {
        return new MyPromise((_, reject) => {
            reject(reason)
        })
    }
}

const myPromise = new MyPromise((resolve) => {
    console.log(-2);
    setTimeout(() => {
        resolve(-3)
        console.log(0);
    }, 100)
    console.log(-1)
}).then((value) => {
    console.log(1)
    console.log(value)
    return new MyPromise((resolve) => resolve('success'))
}).then((value) => {
    console.log(2)
    console.log(value)
    return new MyPromise((resolve) => resolve('success'))
}).then((value) => {
    console.log(3)
    console.log(value)
})

// const promise = new Promise((resolve, reject) => {
//     console.log(0);
//     setTimeout(() => {
//         resolve(1)
//         console.log(2);
//     }, 100)
//     console.log(3)
// }).then((v) => {
//     console.log(v);
// })
