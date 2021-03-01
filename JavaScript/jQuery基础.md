## jQuery

引入 jQuery 的原因：

- `window.onload` 有覆盖问题，只能写一个事件
- 代码容错性差
- 浏览器兼容性问题
- 代码量多
- 代码杂乱
- 动画实现繁琐

jQuery 是 JS 的一个库，封装了一些常用的功能，方便调用，提高效率。

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <title>EthanLoo's</title>
    <link rel="stylesheet" href="./test.css" />
    <style>
      .box {
        width: 100px;
        height: 100px;
        background-color: #891;
        display: none;
      }
      body {
        height: 1000px;
        width: 2000px;
      }
    </style>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
  </head>
  <body>
    <div class="box"></div>
    <button>click me</button>
    <script src="test.js"></script>
  </body>
</html>
```



```js
$(document).ready(function () {
  var btn = $("button"); // 根据标签获取按钮
  var div = $("div"); // 根据标签获取矩形
  btn.click(function () {
    div.show(300); // 300ms 渐变出现
    div.html("233"); // 标签内文本
  });
});
```



### jQuery 特点

- 链式编程，可以把 `div.show(300)` 和 `div.html('233')` 连写成 `div.show(300).html('233')`
- 隐式迭代，在方法的内部为匹配到的所有元素进行循环遍历。

### jQuery 使用步骤

1. 引包：`<script src='jqery-1.*.min.js></script>'`
2. 入口函数：`$(document).ready(function(){})`
3. 事件处理

开发版本一般用 1.10 以上

### 入口函数

原生 JS 的入口函数为 `window.onload = function() {}`，作用是等页面上的所有内容加载完毕才执行函数。

jQuery 的入口函数写法：

```js
// 1. 文档加载完毕，图片不加载的时候就会执行
$(doument).ready(function () {
   console.log(233); 
});

// 2. 文档加载完毕，图片不加载的时候会执行
$(function(){
	console.log(233);
});

// 3. 文档加载完毕，图片加载完毕的时候执行
$(window).ready(function() {
	console.log(233);
});
```

jQuery 的入口函数和原生的区别：

- 原生的入口函数只能出现一次，jQuery 的入口函数可以出现任意多次
- JS 的入口函数只能在页面所有文件资源加载完成后执行，jQuery 的入口函数是在文档，即 DOM 树加载完成。

### `$` 符号

jQuery 中使用的两个变量 `$` 和 `jQuery`，两者等价，都相当于一个函数。

```js
$(document).ready(function(){}); // 调用入口函数
$(function(){}); // 调用入口函数
$('#ethalu'); // 获取id为ethanlu的元素
$('div'); // 获取所有的div标签
```

假设当前 DOM 树如下

```html
<div></div>
<div></div>
<div class="box"></div>
<div id="box"></div>
<div class="box"></div>
```

原生 JS 获取元素结点（数组）

```js
var box = document.getElementById('box'); // 通过id获取单个元素
var boxArr = document.getElementsByClassName('box'); // 通过class获取数组
var divArr = document.getElementsByTagName('div'); // 通过标签获取数组
```

jQuery 获取元素结点数组

```js
var box1 = $("#box"); // 通过id获取
var box2 = $(".box"); // 通过class获取
var box3 = $("div"); // 通过标签获取
```

二者转换

1. JS 对象转 jQuery 对象：`$(JS对象)`

2. jQuery 对象转 JS 对象

   ```js
   jQuery对象[index]; // 1
   jQuery对象.get(index); // 2
   ```

### jQuery 选择器

1. 基本选择器

![img](https://cdn.ethanloo.top/img/20210227131524.png)

2. 层级选择器

![](https://cdn.ethanloo.top/img/20210227131903.png)

3. 基本过滤选择器

![](https://cdn.ethanloo.top/img/20210227131901.png)

4. 属性选择器

![](https://cdn.ethanloo.top/img/20210227131858.png)

5. 筛选选择器

![](https://cdn.ethanloo.top/img/20210227131859.png)

## jQuery 动画

类似 PPT

### 显示动画

1. `$('div').show()`：直接显示
2. `$('div').show(2000)`：2000ms 渐变显示
3. `$('div').show('slow')`：slow: 600ms, normal: 400ms, fast: 200ms
4. `$('div').show(2000, function(){})`：动画执行完之后运行回调函数

### 隐藏动画

1. `$('div').hide()`
2. `$('div').show(2000)`

3. `$('div').show('fast')`

4. `$('div').show(2000, function(){})`
5. `$("div").toggle(speed, callback)`：显示和隐藏的切换

### 滑入和滑出

1. `$('div').slideDown(speed, callback)`：下滑显示
2. `$('div').slideUp(speed, callback)`：上滑隐藏
3. `$('div').slideToggle(speed, callback)`：上滑和下滑切换

### 淡入和淡出

1. `$('div').fadeIn(speed, callback)`：淡入
2. `$('div').fadeOut(speed, callback)`：淡出
3. `$('div').fadeToggle(speed, callback)`：淡入和淡出的切换

### 自定义动画

```js
$('div').animate({params}, speed, callback);
```

- 参数1：执行动画的 CSS 属性

- 参数2：动画时长
- 参数3：回调函数

### 停止动画

```js
$('div').stop(true, false);
```

- 参数1：`true=>` 后续动画不执行，`false=> `后续动画执行
- 参数2：`true=>` 立即执行完成当前动画，`false=>` 立即停止当前动画

> 不写参数默认为 `false`，实际开发中，直接用 `stop()` 比较多

## jQuery 操作 DOM

### 样式操作

1. `$('div').css('background-color', 'red')`：设置单个样式
2. `$('div').css({'width':100, 'height': 200})`：设置多个样式（json格式）
3. `$('div').css('width')`：获取样式

### 类操作

1. `$('div').addClass('nav')`：为指定元素添加 `className`
2. `$('div').removeClass('nav')`：为指定元素删除 `className`，不指定参数直接移除所有类
3. `$('div').hasClass('nav')`：判断元素是否包含类

4. `$('div').toggleClass('nav')`：有类就移除，无类就添加

