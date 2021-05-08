JSON.stringify = function (value) {
  let type = typeof value
  if (type !== 'object') {
    // string/number/null/undefined/boolean
    let res = value
    if (Number.isNaN(value) || value === Infinity) {
      result = 'null'
    } else if (
      type === 'function' ||
      type === 'undefined' ||
      type === 'symbol'
    ) {
      return undefined
    } else if (type === 'string') {
      res = '"' + res + '"'
    }
    return String(res)
  } else if (type === 'object') {
    if (value === null) {
      return 'null'
    } else if (value.toJSON && typeof value.toJSON === 'function') {
      return JSON.stringify(value.toJSON())
    } else if (value instanceof Array) {
      // 检查是否有非法值
      let res = []
      value.forEach((item, index) => {
        if (
          typeof item === 'undefined' ||
          typeof item === 'function' ||
          typeof item === 'symbol'
        ) {
          res[index] = 'null'
        } else {
          res[index] = JSON.stringify(item)
        }
      })
      res = '[' + res + ']'
      // 将字符串中的单引号全部换成双引号
      return res.replace(/'/g, '"')
    } else {
      // 普通对象
      let res = []
      Object.keys(value).forEach((item, _) => {
        // 忽略 key 为 symbol
        if (typeof item !== 'symbol') {
          if (
            value[item] !== undefined &&
            typeof value[item] !== 'function' &&
            typeof value[item] !== 'symbol'
          ) {
            res.push('"' + item + '":' + JSON.stringify(value[item]))
          }
        }
      })
      res = '{' + res + '}'
      return res.replace(/'/g, '"')
    }
  }
}

let person = {
  name: 'ethan',
  age: 21,
}

console.log(JSON.stringify(person))
