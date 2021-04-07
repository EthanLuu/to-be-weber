// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @require      https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.slim.min.js
// @author       You
// @match        http://1d.suda.edu.cn/
// @grant        none
// ==/UserScript==

;(function () {
    setTimeout(function () {
      $("input[name='DDDDD']").val('')
      $("input[name='upass']").val('')
      $('[name=checkPerceive]')[0].checked = true
      $("input[value='登录']").click()
    }, 1000)
  })()
  