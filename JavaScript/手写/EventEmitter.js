class EventEmitter {
  constructor() {
    this.cache = {}
  }
  on(name, fn) {
    // 增加订阅者
    if (this.cache[name]) {
      this.cache[name].push(fn)
    } else {
      this.cache[name] = [fn]
    }
  }

  off(name, fn) {
    // 关闭订阅
    let tasks = this.cache[name]
    if (tasks) {
      // 找到对应的订阅者的回调函数
      const index = tasks.findIndex((f) => f === fn || f.callback === fn)
      if (index >= 0) {
        tasks.splice(index, 1)
      }
    }
  }

  emit(name, once = false, ...args) {
    // 广播消息
    if (this.cache[name]) {
      // 避免回调函数内继续注册相同事件造成死循环
      let tasks = this.cache[name].slice()
      for (let fn of tasks) {
        fn(...args)
      }
      if (once) {
        delete this.cache[name]
      }
    }
  }
}

const eventBus = new EventEmitter()
const fn1 = (name, age) => {
  console.log(`hello, ${name}, ${age}`)
}
const fn2 = (name, age) => {
  console.log(`bye, ${name}, ${age}`)
}

eventBus.on('a', fn1)
eventBus.on('a', fn2)
eventBus.emit('a', false, 'Ethan', 21)
// hello, Ethan, 21
// bye, Ethan, 21
