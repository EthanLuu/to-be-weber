// 将 URL 字符串解析为对象
const parseParam = (url) => {
  const paramsStr = /.+\?(.+)$/.exec(url)[1] // 提取?后面的字符串
  const paramsArr = paramsStr.split('&') // 分割变量
  const paramsObj = {}
  paramsArr.forEach((param) => {
    if (/=/.test(param)) {
      // 解析键值对
      let [key, val] = param.split('=')
      val = decodeURIComponent(val) // 解码
      val = /^\d+$/.test(val) ? parseFloat(val) : val
      if (paramsObj.hasOwnProperty(key)) {
        // 如果对象已经由了对应key，就追加一个value
        paramsObj[key] = [].concat(paramsObj[key], val)
      } else {
        // 没有对应key，创建键值对
        paramsObj[key] = [val]
      }
    } else {
      paramsObj[param] = true
    }
  })
  return paramsObj
}
