// 数组去重
// ES5 语法
function unique(arr) {
  var res = arr.filter(function (item, index, array) {
    return array.indexOf(item) === index
  })
  return res
}
// ES6 语法
var unique = (arr) => [...new Set(arr)]
