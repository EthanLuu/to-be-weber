class EventBus {
  constructor() {
    this.listeners = new Map()
  }

  on(eventName, callback) {
    this.listeners.set(eventName, [
      ...(this.listeners.get(eventName) || []),
      callback,
    ])
  }

  off(eventName, callback) {
    const callbacks = this.listeners.get(eventName) || []
    const idx = callbacks.indexOf(callback)
    if (idx >= 0) {
      callbacks.splice(idx, 1)
    }
  }

  emit(eventName, ...args) {
    const callbacks = this.listeners.get(eventName)
    if (!callbacks?.length) {
      console.warn('该消息未被订阅')
      return
    }
    return callbacks.map((fn) => {
      fn(...args)
    })
  }
}

const eventBus = new EventBus()

const callbackA = (g) => {
  console.log('A happened', g)
}

const callbackB = (g) => {
  console.log('B happened', g)
}

eventBus.on('event-a', callbackA)

eventBus.on('event-a', callbackB)

eventBus.emit('event-a', 'try')

eventBus.off('event-a', callbackA)

eventBus.emit('event-a', 'again')
