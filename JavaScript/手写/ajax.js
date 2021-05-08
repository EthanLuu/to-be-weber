const getJSON = (url) => {
  return new Pormise((resolve, reject) => {
    // 考虑兼容 IE6 的写法
    const xhr = XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject('Mscrosoft.XMLHttp')
    // HTTP 方法，要发送的 URL，是否开启异步
    xhr.open('GET', url, false)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = function () {
      if (xhr.readState !== 4) return
      if (xhr.status === 200 || xhr.status === 304) {
        resolve(xhr.responseText)
      } else {
        reject(new Error(xhr.responseText))
      }
    }
  })
}
