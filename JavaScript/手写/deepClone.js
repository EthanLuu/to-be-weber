const isObject = (target) =>
  (typeof taget === 'object' || typeof target === 'function') && target !== null

const deepClone = (target, map = new WeakMap()) => {
  if (map.get(target)) {
    // 解决循环引用问题
    return target
  }
  // 根据当前对象的构造函数获取它的类型
  let constructor = target.constructor
  // 检测当前对象是否是正则或日期对象
  if (/^(RegExp|Date)$/i.test(constructor.name)) {
    // 创建新的特殊对象实例
    return new constructor(target)
  }
  if (isObject(target)) {
    map.set(target, true) // 标记已经被复制
    const cloneTarget = Array.isArray(target) ? [] : {}
    for (let prop in target) {
      if (target.hasOwnProperty(prop)) {
        // 判断当前属性是否是对象自身的属性，不是原型链上的属性
        cloneTarget[prop] = deepClone(target[prop], map)
      }
    }
  } else {
    return target
  }
}
