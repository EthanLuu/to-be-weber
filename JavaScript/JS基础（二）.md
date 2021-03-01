## 内置对象

JS 的三类对象：自定义对象，内置对象，浏览器对象

内置对象是指语言自带的对象，供开发者使用。

| 内置对象  | 对象说明       |
| :-------- | :------------- |
| Arguments | 函数参数集合   |
| Array     | 数组           |
| Boolean   | 布尔对象       |
| Math      | 数学对象       |
| Date      | 日期时间       |
| Error     | 异常对象       |
| Function  | 函数构造器     |
| Number    | 数值对象       |
| Object    | 基础对象       |
| RegExp    | 正则表达式对象 |
| String    | 字符串对象     |

## 字符串

### 查找子串

1. `indexOf()` 或 `lastIndefOf()` ：获取字符串中指定内容的索引

   ```js
   const a = 'ethane';
   console.log(a.indexOf('e')); // 0
   ```

   还以用第二个参数，来指定开始查找的位置

   ```js
   const a = 'ethane';
   console.log(a.indexOf('e',2)); // 5
   ```

2. `search()`：获取字符串中指定内容的索引

   ```js
   const a = 'ethan';
   console.log(a.search('th')); // 1
   console.log(a.search(/\th/i)); // 1，正则表达式
   ```

3. `includes()`：判断字符串中是否包含指定的内容，第二个可选参数，用于指定检索的起始位置

   ```js
   const name = 'ethan';
   console.log(name.inclueds('than')); // true
   console.log(name.includes('than', 2)); // false
   ```

4. `startsWith()`：判断字符串是否以指定的内容开头，也可以用第二个参数指定起始位置

   ```js
   const name = 'ethan';
   console.log(name.startsWith('e')); // true
   console.log(name.startsWith('a')); // false
   console.log(name.startsWith('th', 1)); // true
   ```

5. `endsWith()`：判断字符串是否以指定的内容结尾

### 获取指定位置的字符

1. `charAt(index)`：获取字符串指定位置的字符。
2. `str[index]`：和上一个效果一样，是 H5 特性。
3. `charCodeAt(index)`：返回字符串指定位置的 Unicode 编码。

### 字符串截取

1. `slice(start, end)`：截取字符串子串内容。

   - `slice(3)`：表示从第三个截到最后
   - `slice(-2)`：从倒数第二个截到最后

   - `slice(1, -1)`：表示从第一个截取到倒数第一个。

2. `substring(start, end)`：和上一个类似，不同之处在于：

   - 不能接受负数作为参数，负数直接看作是0
   - 会自动调整参数的位置，如果第二个参数小于第一个，就自动交换

3. `substr(start, length)`：指定位置和长度，截取子串

### 其他常用

1. `String.fromCharCode()`：根据字符的 Unicode 编码获取字符

   ```js
   var a = String.fromCharCode(72); // H
   ```

2. `concat()`：字符串连接

   ```js
   var a = 'ethan';
   var b = 'lu';
   var name = a.concat(b); // 'ethanlu'
   ```

3. `split()`：指定分隔符，字符串转换成数组

   ```js
   var a = 'ethan,lu';
   var res = a.split(','); // ['ethan', 'lu']
   ```

4. `replace()`：替换指定内容

   ```js
   var a = 'ethanlu';
   var b = a.replace('lu', 'loo');
   ```

5. `repeat()`：重复字符串

   ```js
   var a = '1891234567';
   var b = a.slice(0,-4) + '*'.repeat(4); // 模糊手机号后四位
   ```

6. `trim()`：去除字符串前后的空白

7. `toLowerCase();toUpperCase()`：大小写转换

### HTML 方法

1. `anchor()`：创建 a 链接

2. `sub()`

3. `sup()`

4. `big()`

5. `link()`

6. `bold()`

   ```js
   var a = 'ethan';
   console.log(a.big()); // <big>ethan</big>
   console.log(a.anchor()); // <a name='undefined'>ethan</a>
   ```

## Number

1. `Number.isInteger(num)`：判断数字是否是整数
2. `num.toFixed(n)`：小数点后保留n位

## Math

| 方法                | 描述                                       |
| :------------------ | :----------------------------------------- |
| `Math.PI`           | 圆周率                                     |
| `Math.abs()`        | **返回绝对值**                             |
| `Math.random()`     | 生成0-1之间的**随机浮点数**                |
| `Math.floor()`      | **向下取整**（往小取值）                   |
| `Math.ceil()`       | **向上取整**（往大取值）                   |
| `Math.round()`      | 四舍五入取整（正数四舍五入，负数五舍六入） |
| `Math.max(x, y, z)` | 返回多个数中的最大值                       |
| `Math.min(x, y, z)` | 返回多个数中的最小值                       |
| `Math.pow(x,y)`     | 乘方：返回 x 的 y 次幂                     |
| `Math.sqrt()`       | 开方：对一个数进行开方运算                 |

## Date

Date 是一个构造函数，需要实例化之后使用。

### 创建 Date 对象

有两种写法

1. `Date()`：返回当前时间对象
2. `Date(时间字符串)`：返回指定的时间对象

```js
var curDate = new Date();
var bithday = new Date('1000-10-05');
console.log(curDate); // Wed Feb 03 2021 16:48:12 GMT+0800 (中国标准时间)
console.log(birthday); // Sun Oct 05 1000 08:05:43 GMT+0805 (中国标准时间)
```

### 日期格式化

| 方法名              | 含义              |
| ------------------- | ----------------- |
| `getFullYear()`     | 获取年份          |
| `getMonth()`        | **获取月： 0-11** |
| `getDate()`         | **获取日：1-31**  |
| `getDay()`          | **获取星期：0-6** |
| `getHours()`        | 获取小时：0-23    |
| `getMinutes()`      | 获取分钟：0-59    |
| `getSeconds()`      | 获取秒：0-59      |
| `getMilliseconds()` | 获取毫秒          |

### 时间戳

格林威治时间：1970年1月1日，0时0分0秒

时间戳是指从格林威治时间到当前日期所花费的毫秒数。

```js
var d = new Date('1970/01/01 0:0:0');
console.log(d.getTime()); // -28800000，之所以不是0是因为中文环境下是按照北京时区
```

获取 Date 对象时间戳的方法

1. `const t = +new Date()`
2. `const  t = new Date().getTime()`
3. `const t  = new Date().valueOf()`
4. `const t = new Date()*1`
5. `const t = Number(new Date())`

H5 中新增的获取当前的时间戳的方法

```js
const t = Date().now();
```

## 数组

### 创建数组

1. 使用字面量创建数组

   ```js
   var arr1 = [];
   var arr2 = [1, 2, 3];
   ```

2. 使用构造函数创建数组

   ```js
   var arr1 = new Array();
   var arr2 = new Array(1, 2, 3);
   console.log('arr1 = ' + JSON.stringify(arr2)); // 打印数组的方法
   ```

### 数组操作

1. 通过索引，访问数组元素

   ```js
   var arr = [1, 2, 3];
   console.log(arr[2]); // 3
   console.log(arr[4]); // undefined
   ```

2. 向数组中添加元素

   ```js
   var arr = [];
   arr[0] = 1;
   arr[2] = 3;
   console.log(JSON.stringify(arr)); // [1, null, 3]
   ```

3. 获取数组长度

   ```js
   var arr = [1, 2, 3];
   console.log(arr.length);
   ```

4. 修改数组长度

   ```js
   var arr = [1, 2, 3];
   arr.length = 5;
   console.log(JSON.stringfy(arr)); // [1, 2, 3, null, null]
   ```

5. 遍历数组的基本方法

   ```js
   var arr = [1, 2, 3];
   for(var i = 0;i<arr.length;i++){
   	console.log(arr[i]);
   }
   ```

### 数组的常用方法

#### 数组类方法

1. `Array.isArray(arr)`：判断变量是否为数组

2. `arr.toString()`：把数组转换成字符串

   同样效果还有

   ```js
   var arr = [1, 2, 3];
   console.log(String(arr));
   console.log(arr.join(','));
   ```

3. `Array.from(arr)`：将**伪数组**或者**可遍历对象**转换成**真数组**

   ```js
   const name = 'ethan';
   console.log(Array.from(name)); // ['e', 't', 'h',' a', 'n']
   ```

   > 在使用形如 `buttons = document.getElementByTagName('button')` 的函数的时候的返回值 `buttons` 就是伪数组，需要通过 `Array.from(buttons)` 转换成真数组

#### 创建数组

```js
const arr = Array.of(1, '2', false);
console.log(arr); // [1, "2", false]
```

#### 元素的添加和删除

1. 对数组尾部的操作：`arr.push(x)` ，`arr.pop()`

```js
var arr = [1, 2, 3, 4];
var l1 = arr.push(0);
console.log(arr); // [1, 2, 3, 4, 0]
console.log(l1); // 5 (数组的长度)
var l2 = arr.pop();
console.log(arr); // [1, 2, 3, 4]
console.log(l2); //0
```

2. 对数组首部的操作：`arr.unshift(x)`，`arr.shift()`

```js
var arr = [1, 2, 3, 4];
var r1 = arr.unshift(0);
console.log(r1); // [0, 1, 2, 3, 4]

var r2 = arr.shift();
console.log(r2); // [1, 2, 3, 4]
```

3. 从数组中删除指定的一个或多个元素：`arr.splice(x)`

```js
var arr = [1, 2, 3, 4];
var res = arr.splice(1);
console.log(arr); // [1]
console.log(res); // [2, 3, 4]
```

4. 填充数组：`arr.fill(x)`

```js
var arr = new Array(4);
arr.fill(2);
console.log(arr); // [2, 2, 2, 2]
```

### 数组的合并和拆分

1. `arr1.concat(arr2)`：拼接两个或多个数组
2. `arr.join('-')`：将数组转换成一个字符串
3. `arr = str.split('-')`：把字符串拆分成一个数组

### 数组元素顺序改变

1. `r = arr.reverse()`：将数组倒置，会改变原数组

2. `r = arr.sort()`：对数组进行排序，会改变原数组

   也可以自定义排序规则

   ```js
   var arr = [4, 2, 1, 5];
   var r = arr.sort(function (a, b) {
      return a - b; 
   });
   ```

   ES6 的优雅写法

   ```js
   var arr = [4, 2, 1, 5];
   var r = arr.sort((a, b)=> a - b);
   ```


### 数组遍历

1. `every()`：对数组中的每一项运行回调函数，如果都真就返回`true`，否则返回`false`

   ```js
   let a = [1, 2, 3];
   let b = a.every((item) => {
     return item % 2 == 1;
   });
   console.log(b); // false
   ```

2. `filter()`：对原数组进行过滤，返回一个成功过滤的新数组

   ```js
   let a = [1, 2, 3];
   let b = a.filter((item) => {
     return item % 2 == 1;
   });
   console.log(b); // [1, 3]
   ```

3. `forEach()`：使用回调函数遍历数组

   ```js
   let a = ['apple', 'orange', 'banana'];
   a.forEach((item, index, arr) =>{
   	console.log('item:'+item);
   	console.log('index:'+index);
       console.log('arr:' + arr);
   });
   ```

4. `map()`：对数组中的每一项运行回调函数，返回加工过的新数组。

   ```js
   let a = ['apple', 'orange', 'banana'];
   let b = a.map(function(item, index, arr){
   	return item+index; 
   });
   console.log(b); // ["apple0", "orange1", "banana2"]
   ```


## 函数

函数本质也是个对象，可以将一些功能进行封装，在需要的时候调用。

### 函数的声明

1. 利用函数关键字定义函数

   ```js
   function getSqrt(num){
       return num*num;
   }
   ```

2. 匿名函数

   ```js
   var func2 = function () {
     console.log(3);
   };
   ```

3. 构造函数（不常用）

   ```js
   var fun3 = new Function('a', 'b', 'console.log("我是函数内部的内容");  console.log(a + b);');
   
   fun3(1, 2); // 调用函数
   ```

### 函数的调用

1. 普通函数的调用

   ```js
   function getSqrt(){
       console.log(9);
   }
   getSqrt(); // 9
   getSqrt.call(); // 9
   ```

2. 通过对象的方法来调用

   ```js
   let obj = {
   	a: 'ethan',
       func: function(){
       	console.log('hello world');  
       },
   };
   
   obj.func();
   ```

3. 立即执行函数

   ```js
   (function () {
     console.log("halo");
   })();
   ```

4. 通过构造函数来调用

   ```js
   function fc() {
     console.log("hello,world");
   }
   
   new fc();
   ```

5. 绑定事件函数

   ```html
   <div id="btn">button</div>
   <script src='test.js'></script>
   ```

   ```js
   btn.onclick = function () {
       console.log('hello');
   }
   ```

6. 定时器函数

   ```js
   let num = 1;
   setInterval(function () {
     num++;
     console.log(num);
   }, 1000);
   ```

### 函数名和函数体

```js
function fn() {
  alert(233);
}
console.log(fn); // fn() {alert(233);}
```

### 方法

函数也可以成为**对象的属性**，如果函数是作为**对象的属性**，就成为对象的方法。

```js
fu(); // 调用函数
obj.fn(); // 调用方法
```

## 作用域

### 分类

ES6 之前的两种作用域

- 全局作用域
  - 作用在 script 标签内部，或者独立的 JS 文件中
- 局部作用域（函数作用域）
  - 作用在函数内的代码环境

### 全局作用域

直接写在 `script` 标签中的 JS 代码，都在全局作用域。

全局作用域在页面打开时创建，在关闭时销毁。全局作用域有一个全局对象 `window`，代表浏览器的窗口，由浏览器创建，我们来使用。

- 创建的**变量**都作为 `window` 对象的属性来保存
- 创建的**函数**都作为 `window` 对象的方法来保存

### 变量的声明提前

使用 `var` 关键字声明的变量，会在所有代码执行之前被声明，若不写，则不会提前声明。

```js
console.log(a); // undefined
var a = 233;
```

```js
console.log(a); // 报错 a is not defined
a = 233;
```

### 函数的声明提前

使用函数声明的形式创建的函数会被声明提前。

```js
fn();
function fn() {
  console.log(3);
}
```

使用函数表达式创建的函数，不会提前声明，所以会报错。

```js
fn();
var fn = function () {
  console.log(3);
};
```

### 函数作用域

函数中使用 `var` 声明的变量，会在函数代码执行前被声明。

没有 `var` 声明的变量都是全局变量，而且不会提前声明。

形参代表着在函数作用域中声明了变量。

```js
var a = 3;
fn(5);
function fn(b) {
  console.log(a); // 3
  console.log(b); // 5
  console.log(c); // undefined
  var c = 4;
}
```

### 作用域链

内部函数访问外部函数的变量，采取链式查找的方式决定取值，依据**就近原则**。

```js
var num = 10;

function fn() {
    // 外部函数
    var num = 20;

    function fun() {
        // 内部函数
        console.log(num);
    }
    fun();
}
fn(); // 20
```

## 预编译

**JavaScript 运行三部曲**：语法分析，预编译，解释执行

### 预编译规律

1. 未经声明就赋值的变量，属于 `window` 的属性。
2. 在全局作用域内声明的变量，全是 `window` 的属性。

```js
function foo() {
    var a = b = 100; // 连续赋值
}

foo();

console.log(window.b); // 在全局范围内访问 b
console.log(b); // 在全局范围内访问 b，但是前面没有加 window 这个关键字

console.log(window.a); // 在全局范围内访问 a
console.log(a); // 在全局范围内访问 a，但是前面没有加 window 这个关键字
```

代码的执行顺序为

- `b = 100`
- `var a`
- `a = b`

打印结果为

```js
100

100

undefined

Uncaught ReferenceError: a is not defined
```

`b` 是未经声明的变量，因此属于 `window.b`，是一个全局变量。

`a` 是一个局部变量，只作用于函数内部。

### 预编译步骤

1. 创建 AO(Activation Object 活跃对象)，即**执行期上下文**
2. 找形参和变量声明，将形参名和变量作为 AO 的属性名，值为 `undefined`
3. 将实参值和形参统一，实参的值赋给形参
4. 查找函数声明，函数名作为 AO 对象的属性名，值为整个函数体

```js
function fn(a) {
  console.log(a);
  var a = 666;
  console.log(a);
  function a() {}
  console.log(a);
  var b = function () {};
  console.log(b);
  function c() {}
}

fn(1);
```

打印结果

```js
ƒ a() {}
666
666
ƒ () {}
```

### 执行期上下文

在预编译函数的时候，会创建一个执行期上下文的内部对象，一个执行器上下文定义了一个函数执行的环境。

每调用一次函数，就会创建一个新的执行期上下文对象，它们之间独立。函数执行完之后，这个对象就会被销毁。

### this

解析器在调用函数的时候，会向函数内部传递一个隐含的参数，即 `this`，它指向的就是上下文对象。

根据函数的调用方式不同，`this` 会指向不同的对象

1. 以函数的形式调用，`this` 指向的是 `window`

   ```js
   function fc() {
     console.log(this); // Window
     console.log(this.name); // loo
   }
   
   var obj = {
     name: "ethan",
     getName: fc,
   };
   
   var name = "loo";
   
   fc();
   ```

2. 以方法的形式调用，`this` 指向调用方法的对象

   ```js
   function fc() {
     console.log(this); // {name: "ethan", getName: ƒ}
     console.log(this.name); // ethan
   }
   
   var obj = {
     name: "ethan",
     getName: fc,
   };
   
   var name = "loo";
   
   obj.getName();
   ```

> ES6 中的箭头函数不会遵循这个原则，而是会继承外层函数调用的 `this` 绑定。

### 改变 this 指向

1. `call()`

   - 可以调用一个函数，并改变函数内部的 `this` 指向
   - 可以实现继承

   ```js
   function fc(a, b) {
     console.log(this); // obj
     console.log(this.name); // ethan
     console.log(a + b); // 6
   }
   
   var obj = {
     name: "ethan",
     age: 21,
   };
   
   fc.call(obj, 2, 4);
   ```

2. `apply()`：可以调用一个函数，并改变这个函数内部的 `this` 指向

   ```js
   function fc(a) {
     console.log(this); // obj
     console.log(this.name); // ethan
     console.log(a); // ['hello']
   }
   
   var obj = {
     name: "ethan",
     age: 21,
   };
   
   fc.call(obj, ["hello"]);
   
   ```

3. `bind()`：不会调用函数，但是改变函数内部的 `this` 指向

   ```js
   新函数 = fc.bind(想要将this指向哪里, 函数实参1, 函数实参2);
   ```

## 