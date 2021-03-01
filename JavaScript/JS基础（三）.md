## 高阶函数

**参数 中包含 函数** 或者 **返回值是 函数** 的 函数，叫做高阶函数。

参数中包含函数的例子

```js
function fc(a, b, callback) {
  console.log(a + b);
  callback && callback();
}

fc(10, 20, function () {
  console.log("execution.");
});
```

输出结果

```js
30
execution.
```

返回值是函数的例子

```js
function fc() {
  let a = 10;
  return function () {
    console.log(a);
  };
}

const foo = fc();
foo();
```

## 闭包

闭包 closure：指有权访问另一个函数作用域中的变量的**函数**

```js
function fc1() {
  let a = 233;
  function fc2() {
    console.log(a);
  }
  fc2();
}

fc1();
```

## 面向对象

JS 中的面向对象，是基于原型的面向对象。在 ES6 中，引入了类和继承。

JS 中的对象 Object 是依靠构造器 constructor 和 原型 prototype 构造出来的。

### 创建对象

1. 对象字面量

   就是一个`{}`，以键值对形式存储属性和方法。

   ```js
   const obj = {
       name: 'ethan',
       age: 21,
       eat: function(){
           console.log('eating...');
       };
   }
   ```

2. 工厂模式

   ```js
   function createPerson(name, age, gender){
   	var obj = new Object();
       obj.name = name;
       obj.age = age;
       obj.gender = gender;
       return obj;
   }
   
   var ethan = createPerson('ethan', 21, '男');
   var echo = createPerson('echo', 20, '女');
   ```

3. 构造函数

   ```js
   function Student(name) {
       this.name = name;
       this.eat = function() {
   		console.log(this.name + ' is eating...');
       };
   }
   
   var ethan = new Student('ethan');
   var echo = new Student('echo');
   ```

   利用构造函数 `new` 对象的过程如下：

   - 开辟内存空间，在内存中创建一个新的空对象
   - 让 `this` 指向这个新的对象
   - 执行构造函数里面的代码，为对象添加属性和方法
   - 返回新的对象

### JSON

JavaScript Object Notation

和对象字面量的区别体现在，JSON 的属性够必须用双引号，对象字面量可以省略

```json
{
	"name": "ethan",
    "age": 21,
    "eat": function() {
        console.log('eating...');
    }
}
```

JSON 的遍历方法

```js
var ethan = {
    "name": 'ethan',
    "age": 21,
}

for(key in ethan){
    console.log(key);
    console.log(ethan[key]);
}
```

`for of`：ES6 中遍历数组的好方法

```js
let arr = [1, 2, 3, 4];
for (let value of arr){
    console.log(value);
}
```

> 可以避免新的内存空间，增加运行效率

### 浅拷贝

只拷贝最外面一层数据

1. `for in` 方式

   ```js
   const obj1 = {
     name: "ethan",
     age: 21,
     info: {
       state: "hungry",
     },
   };
   
   const obj2 = {};
   for (let key in obj1) {
     obj2[key] = obj1[key];
   }
   
   console.log(JSON.stringify(obj2)); // {"name":"ethan","age":21,"info":{"state":"hungry"}}
   obj1.info.state = "full";
   console.log(JSON.stringify(obj2)); // {"name":"ethan","age":21,"info":{"state":"full"}}
   ```

2. `Object.assign()` 方式

   ```js
   const obj1 = {
     name: "ethan",
     age: 21,
     info: {
       state: "hungry",
     },
   };
   
   const obj2 = Object.assign({}, obj1);
   
   console.log(JSON.stringify(obj2)); // {"name":"ethan","age":21,"info":{"state":"hungry"}}
   obj1.info.state = "full";
   console.log(JSON.stringify(obj2)); // {"name":"ethan","age":21,"info":{"state":"full"}}
   ```

### 深拷贝

用 `for in` 递归实现

```js
const obj1 = {
  name: "ethan",
  age: 21,
  info: {
    state: "hungry",
  },
};

const obj2 = {};

function deepCopy(newObj, oldObj) {
    for (let key in oldObj){
        let item = oldObj[key];
        if (item instanceof Array) {
            newObj[key] = [];
            deepCopy(newObj[key], item);
        } else if (item instanceof Object) {
            newObj[key] = {};
            deepCopy(newObj[key], item);
        } else {
            newObj[key] = item;
        }
    }
}
```

### 冻结对象

`Object.freeze(obj)`：冻结对象 `obj`，不能修改属性。



## 正则表达式

用于定义字符串规则

### 创建正则对象

1. 使用构造函数

```js
var reg1 = new RegExp('a');
var reg2 = new RegExp('A','i'); // 第二个参数表示匹配模式，i意味着忽略大小写

console.log(reg1.test('ABC')); // false
console.log(reg2.test('ABC')); // true
```

2. 使用字面量创建

```js
var reg1 = /a/;
var reg2 = /A/i;

console.log(reg1.test('ABC')); // false
console.log(reg2.test('ABC')); // true
```

### 简单正则

```js
var reg1 = /a|b/; // 包含a或b
var reg2 = /[ab]/; // 等价
var reg3 = /[^ab]/; // 是否包含a和b以外的字符
```

### String 对象的正则方法

1. `split()`

   ```js
   var s = '1a2b3c4d5e';
   var res = s.split(/[A-z]/);
   console.log(res); // ['1', '2', '3', '4', '5']
   ```

2. `match()`

   ```js
   var s = '1a2b3c4d5e';
   var res1 = s.match(/[a-z]/); // 第一个结果
   var res2 = s.match(/[a-z]/g); // 全局匹配
   
   console.log(res1); // ['a']
   console.log(res2); // ['a', 'b', 'c', 'd', 'e']
   ```

3. `search()`

   ```js
   var s = 'hello ethan';
   var res = s.search(/e[tbc]han/); // 查找第一次出现ethan/ebhan/echan的位置
   console.log(res); // 6
   ```

4. `replace()`

   ```js
   var s = 'hello ethan, ethan is good!';
   s.replace(/ethan/gi, 'echo');
   ```

## 事件

JS 以事件驱动为核心，**事件**是指 document 发生一些特定的交互瞬间。

**事件三要素**：事件源，事件，事件驱动程序

- 事件源：引发事件的 html 标签

- 事件：JS 定义的事件，例如鼠标单击，关闭网页
- 事件驱动程序：对样式和 html 的操作，即 DOM

**代码书写步骤**

1. 获取事件源：`document.getElementById('box')`
2. 绑定事件：`box.onclick = function(){}`
3. 书写驱动程序

```html
<body>
    <div id="box" class="">233</div>
    <script>
        var div = document.getElementById("box");
        div.onclick = function () {
            alert("233");
        };
    </script>
</body>
```

### 获取事件源

1. `document.getElementById('box')`：通过id获取单个标签
2. `document.getElementsByTagName('div')`：通过标签名获取标签组
3. `document.getElementsByClassName('content')`：通过类名获得标签数组

### 绑定事件

1. 绑定匿名函数

   ```js
   var div = document.getElementById('box');
   div.onclick = function () {
       alert('233');
   }
   ```

2. 先定义函数再绑定

   ```js
   var div = document.getElementById('box');
   div.onclick = fc;
   function fc() {
       alert('233');
   }
   ```

3. 行内绑定

   ```html
   <div id="box" onclick="fc()"></div>
   <script type="text/javascript">
       function fc() {
           alert("我是弹出的内容");
       }
   </script>
   ```

### 事件驱动程序

```html
<body>
    <div id="box" class="">233</div>
    <script>
        var div = document.getElementById("box");
        div.onclick = function () {
            div.style.width = "200px";
            div.style.height = "200px";
            div.style.backgroundColor = "red";
        };
    </script>
</body>
```



`onload` 事件：当页面加载完的时候触发

```js
window.onload = function() {
    console.log(233);
}
```



## DOM

结点 Node：构成 HTML 网页的最基本单元，网页的每个部分都是一个结点。

文档对象模型 DOM (Document Object Model)：提供结构化表示，并定义如何通过脚本访问文档结构。DOM 就是由结点组成的。

HTML 加载完毕，渲染引擎会在内存中根据 document 生成一个 DOM 树，`getElementById` 就是获取 DOM 树上的结点。

DOM 树结构如下图所示

![HTML DOM Node Tree](https://www.w3school.com.cn/i/ct_htmltree.gif)

### DOM 访问关系

获取父节点：`node.parentNode`

#### 获取兄弟结点

- 下一个结点
  - IE678：`nextSibling`
    - 在新版中获取的前一个结点包括标签，空文档和换行
  - 火狐谷歌IE9+：`nextElementSibling`
- 前一个结点
  - IE678：`previousSibling`
  - 火狐谷歌IE9+：`perviousElementSibling`

#### 获取单个子节点

- 第一个结点
  - IE678：`firstChild`
  - 火狐谷歌IE9+：`firstElementChild`
- 最后一个结点
  - IE678：`lastChild`
  - 火狐谷歌IE9+：`lastElementChild`

#### 获取所有子节点

`node.childNodes`：标准属性，返回指定元素的子节点的集合，包括结点，属性，文本

`node.children`：非标准属性，返回指定元素的子元素结点的集合，只返回 HTML 结点，不返回文本节点

### DOM 结点操作

1. 创建结点：`document.createElement('div')`
2. 插入节点
   - `node.appendChild(newNode)`：在父结点的最后插入一个新结点
   - `node.insertBefore(newNode, oldNode)`：在父节点的参考结点 `oldNode` 前面插入一个新的结点。如果参考结点为空，则默认为父节点最后。
3. 删除节点
   - `parentNode.removeChild(childNode)`
   - 删除自己：`node.parentNode.removeChild(node)`
4. 复制节点
   - `node.cloneNode()`：只复制结点本身，不复制子结点
   - `node.cloneNode(true)`：复制包括子结点在内的所有结点

### DOM 结点属性操作

```html
<img src="1.jpg" class="image-box" title="ethanloo" alt="portrait" id="port">
```

1. 获取结点属性

   - 方式1

   ```js
   var node = document.getElementsByTagName('img')[0];
   console.log(node.src); // http://127.0.0.1:5500/1.jpg
   console.log(node['src']); // http://127.0.0.1:5500/1.jpg
   console.log(node.className); // image-box
   console.log(node['className']); // imgae-box
   ```

   - 方式2

   ```js
   var node = document.getElementsByTagName('img')[0];
   console.log(node.getAttribute('src')); // 1.jpg
   console.log(node.getAttribute('class')); // image-box
   ```

2. 修改结点属性

   ```js
   var node = document.getElementsByTagName('img')[0];
   node.src = '2.jpg';
   node.setAttribute('id', 'portrait');
   ```

3. 删除结点属性

   ```js
   var node = document.getElementsByTagName('img')[0];
   node.removeAttribute('class');
   ```


### DOM 结点属性

1. `innerHTML` 和 `innerText`

   `innerHTML`：获取双闭合标签里面的内容，包含标签

   `innerText`：获取双闭合标签里面的内容，不包含标签

2. 元素结点，属性结点，文本结点

   ```html
   <div id='box' value='ethan'>
       EthanLoo
   </div>
   ```

   ```js
   var element = document.getElementById('box'); // 获取元素结点
   var attribute = element.getAttributeNode('id'); // 获取属性结点
   var txt = element.firstChild; // 获取文本结点
   var value = element.getAttribute('id'); // 获取id属性
   
   console.log(element.nodeType); // 1
   console.log(attribute.nodeType); // 2
   console.log(txt.nodeType); // 3
   
   console.log(element.nodeName); // div
   console.log(attribute.nodeName); // id
   console.log(txt.nodeName); // #text
   
   console.log(element.nodeValue); // null
   console.log(element.nodeValue); // box
   console.log(txt.nodeValue); // EthanLoo
   ```



## 行内样式操作

```html
<div class='myBox' id ='box' style='width: 200px; hieght: 100px; background-color: green;'
```

### JS 修改行内样式

```js
var element = document.getElementById('box');
```

1. `element.style.width`
2. `element.style['width']`，该方法优点是可以给属性传递参数

### 注意事项

1. `style` 属性只在样式少的时候使用
2. `style` 是对象
3. 值是字符串，没有值时设置为 `""`
4. 驼峰命名规则
5. 只能获取行内样式
6. `element.style.cssText` 可以用字符串格式直接设置 `style` 的值

### JS 获取显示样式

`element.style.className` 只能获取元素的**行内样式**，通过其他方法可以获取元素当前显示样式，包括**内嵌样式和外链样式**。

1. W3C 做法：`window.getComputedStyle('元素', '伪元素');` （第二个参数一般传`null`）
2. IE 和 Opera 做法：`obj.currentStyle;`

兼容性写法如下：

```js
function getStyle(ele, attr) {
	if (window.getComputedStyle) {
        return window.getComputedStyle(ele, null)[attr];
    }
    return ele.currentStyle[attr];
}
```



## JS 动画

JS 动画的三大组成：`offset`，`scroll`，`client`

### offset

1. `offsetWidth` 和 `offsetHeight`： 元素的宽高 + padding + border
   - `offsetWidth = width + padding + border`
   - `offsetHeight = height + padding + border`

2. `offsetParent`：获取当前元素的定位父元素
   - 如果当前元素的父元素有 **CSS定位**，即 `position` 为 `absolute, relative, fixed`，那么获取的就是最近的父元素
   - 如果当前元素的父元素没有 CSS定位，那么获取的就是 `body`
3. `offsetLeft`：当前元素相对于**定位父元素**的水平偏移量；`offsetTop`：当前元素相对于定位父元素的垂直偏移量；只计算 `padding`，不计算 `border`

平移动画

```html
<head>
    <meta charset="UTF-8" />
    <title>EthanLoo's</title>
    <link rel="stylesheet" href="./test.css" />
    <style>
        .box {
            width: 100px;
            height: 100px;
            background-color: #891;
            position: absolute;
        }
    </style>
</head>
<body>
    <button>click me</button>
    <div class="box"></div>
    <script>
        var btn = document.getElementsByTagName("button")[0];
        var div = document.getElementsByTagName("div")[0];
        btn.onclick = function () {
            // 定时器
            setInterval(function () {
                div.style.left = div.offsetLeft + 100 + "px";
            }, 500);
        };
    </script>
</body>
```

### scroll

用鼠标滚动页面，会触发 `window.onscroll()` 方法

- `scrollWidth` 和 `scrollHeight` 分别代表滚动区域的宽和高，包括 `width` 和 `padding`，不包括 `border` 和 `margin`。
- `scrollLeft`：水平滚动条滚动的距离；`scrollTop`：垂直滚动条滚动的距离
  - 当某个元素满足 `scrollHight - scrollTop == clientHeight`，说明垂直滚动条距离到底了。
  - 当某个元素满足 `scrollWidth - scrollLeft == clientWidth`，说明水平滚动条滚动到底了。

### 获取 HTML 文档的方法

- `documet.title`：文档标题
- `document.head`：文档投标签
- `document.body`：文档的 `body` 标签
- `document.documentElement`：文档的 `html` 标签

### client

- `clientWidth`：获取元素的可见宽度（`width + padding`），只读
- `clientHieght`：获取元素的可见高度（`hieght + padding`），只读
- `clientX`：鼠标距离可视区域左侧的距离
- `clientY`：鼠标距离可视区域上侧距离

- `clientTop`：盒子的上 `border`
- `clientLeft`：盒子的左 `boder`

## 事件绑定

1. `element.onclick = function(){}`

   ```js
   var btn = document.getElementsByTagName('button')[0];
   
   btn.onclick = function () {
       console.log('clicked');
   }
   ```

   一个元素的一个事件只能绑定一个响应函数。

2. `element.addEventListener('click', function(){}, false)`

   参数一：事件名的字符串；参数二：回调函数；参数三：`true` 表示捕获阶段触发，`false` 表示冒泡阶段触发（默认）。

   ```js
   var btn = document.getElementsByTagName('button')[0];
   
   btn.addEventListener('click', fc);
   
   function fc() {
   	console.log('clicked!');
   }
   ```

   一个元素的一个事件可以绑定多个响应函数。

## 事件对象

事件的响应函数被触发的时候，会产生事件对象 `event`，浏览器将事件对象作为实参传进之前的响应函数。

`event` 会包含和事件相关的一些信息，例如鼠标的位置，按下的键，鼠标滚轮的方向等。

### 获取事件对象的方法

- 普通浏览器：`event`
- IE678：`window.event`

### 事件对象的属性

- `timeStamp`：事件生成的日期和时间
- `bubbles`：返回布尔值，指明事件是否是气泡事件
- `button`：返回事件被触发时，哪个鼠标按钮被点击
- `pageX`：光标相对于该网页的水平位置
- `pageY`：光标相对于该网页的垂直位置



### DOM 事件流

事件传播三个阶段：事件捕获，事件冒泡，事件目标。

1. 事件捕获，利用 `addEventListener` 函数。

   捕获顺序：`window->document->html->body->父元素，子元素，目标元素`

2. 事件冒泡，一个元素上的事件被触发的时候，同样的事件会在所有祖先元素上触发，一直冒泡到 DOM 树上的最上层。

   冒泡顺序：`div->body->html->document->window`



### 事件委托

事件委托，即把一个元素响应事件的函数委托到另一个元素上去。

利用冒泡机制，减少事件绑定的次数，减少内存消耗，提高性能。

```html
<ul id='parent-list'>
    <li><a href='javascript:;' class='link'>1</a></li>
    <li><a href='javascript:;' class='link'>2</a></li>
    <li><a href='javascript:;' class='link'>3</a></li>
</ul>
```

想要实现的效果是单击 `a` 标签时，会输出信息。因此可以把点击事件绑定到父元素 `ul` 上。

```js
window.onload = function() {
    var parList = document.getElementById('parent-list');
    parList.addEventListener('ciick', function(event) {
		event = event || window.event;
        if (event.target && event.target.className == 'link') {
            console.log('clicked');
        }
    }, false);
};
```



### 鼠标拖拽事件

1. `onmousedown`：当鼠标在被拖拽元素上按下时，开始拖拽；
2. `onmousemove`：当鼠标移动时，被拖拽元素跟鼠标移动；
3. `onmouseup`：当鼠标松开时，被拖拽元素固定在当前位置。

### 鼠标的滚轮事件

`onmousewheel`：鼠标滚轮滚动事件。

### 键盘事件

`onkeydown`：按键被按下；

`onkeyup`：按键被松开；

一般键盘按下的事件会被绑定给 `document`。

通过 `event` 事件对象的 `keyCode` 来获取按键的编码。



## BOM

浏览器对象模型 Browser Object Model，操作浏览器部分功能的 API。

### 常见 BOM 对象

1. `Window`：整个浏览器窗口
2. `Navigator`：当前浏览器的信息
3. `Location`：浏览器的地址栏信息
4. `History`：浏览器的历史记录
5. `Screen`：用户的显示器信息

### Navigator

一般只使用 `navigator.userAgent` 来获取浏览器的细信息。

### History

用来操作浏览器的向前或向后翻页

1. `history.length`：浏览器历史记录的 URL 数量，浏览器重启的时候会置为1。
2. `history.back()`：回退上一个页面。
3. `history.forward()`：前进到下一个页面。
4. `history.go(x)`：x=0 表示刷新页面，1表示向前跳转一个页面，-1表示向后跳转一个页面

### Location

1. `location.href`：获取当前页面的 URL。
2. `location.href = 'xxxx'`：跳转到指定的页面链接。

3. `location.assign(str)`：跳转到其他页面。
4. `location.reload()`：用于重新加载当前页面。`location.reload(true)` 会强制清空缓存刷新页面。
5. `location.replace()`：使用一个新的页面替换当前页面，不会生成历史记录，不能使用前进后退。



## 定时器

`setInterval()`：**循环调用**，一段代码每隔一段时间执行一次。

`setTimeout()`：**延时调用**，等待一段事件之后执行一次。

1. 每间隔一秒，变量加一

   ```js
   var cnt = 0;
   setInterval(function () {
       cnt++;
       console.log(cnt);
   }, 1000);
   ```

2. 清除定时器

   ```js
   var cnt = 0;
   const timer = setInterval(function() {
   	console.log(cnt);
       cnt++;
       if (cnt===5){
           clearInterval(timer);
       }
   }, 1000);
   ```

3. 延时调用

   ```js
   const timer = setTimeout(function() {
       console.log(1);
   }, 1000);
   
   clearTimeout(timer);
   ```

   延时5s关闭广告栏

   ```js
   var ad = document.getElementsByTagName('img');
   setTimeout(fc, 5000);
   function fc() {
       ad[0].style.display = 'none';
       ad[1].style.display = 'none';
   }
   ```

