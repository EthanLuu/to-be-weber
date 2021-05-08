Object.assign = function (target, ...sources) {
  if (target == null) {
    throw new TypeError('Cannot conver undefined or null to object')
  }
  let ret = Object(target)
  sources.forEach((obj) => {
    if (obj != null) {
      for (let key in obj) {
        // 遍历对象并赋值
        if (obj.hasOwnProperty(key)) {
          ret[key] = obj[key]
        }
      }
    }
  })
  return ret
}
