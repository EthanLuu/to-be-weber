class EventEmitter {
  constructor() {
    this.listeners = new Map()
  }

  // 订阅事件，添加回调
  on(eventName, callback) {
    if (!this.listeners.has(eventName)) {
      this.listeners.set(eventName, [])
    }
    this.listeners.get(eventName).push(callback)
  }

  // 发布事件
  emit(eventName, ...args) {
    const callbacks = this.listeners.get(eventName) || []
    callbacks.forEach((callback) => callback(...args))
  }

  // 取消订阅
  off(eventName, callback) {
    const callbacks = this.listeners.get(eventName)
    if (!callbacks.length) return
    const targetIdx = callbacks.findIndex((c) => c === callback)
    if (targetIdx !== -1) {
      callbacks.splice(targetIdx, 1)
    }
  }

  // 一次性订阅
  once(eventName, callback) {
    this.on(eventName, (...args) => {
      callback(...args)
      this.off(eventName, callback)
    })
  }
}
