// const MyPromise = require('./MyPromise')
import MyPromise from "./MyPromise.js";
const promise = new MyPromise((resolve, reject) => {
    resolve('success')
    reject('error')
})

promise.then(value => {
    console.log('resolve', value)
}, reason => {
    console.log('reject', reason)
})