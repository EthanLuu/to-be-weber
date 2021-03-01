## JavaScript 背景

首先要明白 Web 前端的三层结构：

- HTML：语义角度，描述页面结构
- CSS：审美角度，描述具体样式
- JavaScript：交互角度，描述实现行为

JavaScript 作为一门**前端语言**，用于页面的交互，不能直接操作数据库。

JavaScript 基础包括三个部分：

- ECMAScript：JS 的语法标准
- DOM：Document Object Model 文档对象模型，操作**页面上的元素**的 API
- BOM：Browser Object Model 浏览器对象模型，操作**浏览器部分功能**的 API

### 第一行 JS 代码

1. 行内式

   ```html
   <input type ="button" value ="0" onclick="alert('hello ethan')"  />
   ```

   不推荐使用，可读性差

   > 关于引号，HTML 标签中推荐使用双引号，JS 中推荐使用单引号

2. 内嵌式

   ```html
   <body>
       <script type="text/javascript">
       	alert('hello ethan!')
       </script>
   </body>
   ```

   text 表示纯文本，因为 JS 是一个纯文本的语言，学习时常用

3. 引入外部 JS 文件

   ```html
   <body>
       <script src = "test.js"></script>
   </body>
   ```

   开发中经常使用，确保 HTML 和 JS 文件分开

### 常用语句

```javascript
alert('hello'); // 弹出警告框
console.log('damn'); // 控制台输出
```

## JS 变量

### 常量

字面量，也叫做常量，是固定值，分为三类

- 数字 `alert(233);`
- 字符串 `alert('233')`
- 布尔值 `if (true)`

### 变量

ES6 之前使用 `var` 定义一个变量

```js
var name;
```

ES6 语法及以后，使用 `const`，`let` 关键字来声明一个变量

```js
const name;
let age;
```

变量初始化，即声明一个变量并赋值

```js
var name = 'ethan';
```

同时声明多个变量

```javascript
var name = 'ethan', age = 21;
```

### 变量命名规范

建议使用驼峰命名规则，长度不超过255个字符

```javascript
getElementById, matherAndFather, ethanLu
```

### 变量的数据类型

JavaScript 是一种**弱类型语言**，也可以说是**动态语言**，不需要提前对变量类型声明。

所以 JavaScript 的变量数据类型，是在程序运行的过程中，根据等号右边的值确定的。

```javascript
var name = 'ethan';
name = 233; // 此时变量被强制修改为数字类型
```

#### JS 中的六种数据类型

- 基本数据类型（值类型）
  1. String 字符串
  2. Number 数值
  3. Boolean 布尔值
  4. Null 空值
  5. Undefined 未定义
- 引用数据类型（引用类型）
  6. Object 对象

> 内置对象 Function, array, Date, Error 都是 Object 类型

基本数据类型赋值的时候，传数值；引用数据类型赋值的时候，传地址

### 栈内存和堆内存

JS 中，所有变量都是保存在栈内存中。

- **基本数据类型**的值，直接保存在**栈内存**中，值和值之间都是独立的
- **引用数据类型**的对象，保存到**堆内存**中。每次创建一个新的对象，就会在堆内存中开辟一个新的空间，变量保存的是对象的内存地址，保存在**栈内存**中。

## String 字符串

双引号或者单引号的任意文本，双引号里可以嵌套单引号，单引号里可以嵌套双引号。

```javascript
var s = "hello";
var t = 'She said:"hello"'
```

利用`\`作为转义字符，使得字符串中能够存放一些特殊的符号。

- `\"` 表示 `"` 双引号
- `\'` 表示 `'` 单引号
- `\\` 表示`\`
- `\r` 表示回车
- `\n` 表示换行。n 的意思是 newline。
- `\t` 表示缩进。t 的意思是 tab。
- `\b` 表示空格。b 的意思是 blank。

通过字符串的 `length` 属性，可以获取字符串的长度。

```javascript
var s = 'hello';
console.out(s.length);
```

### 字符串拼接

**传统方法**：用➕可以把字符串和任意数据类型进行拼接。

```javascript
var name = 'ethan';
var age = '21';
console.log('name:'+name+',age:'+age); // 传统写法
```

**模板字符串**：ES6 中引入的字符串拼接的新方法。

```javascript
var name = 'ethan';
var age = '21';
console.log(`name:${name},age:${age}`); // ES6新写法
```

这里使用的不是单引号，是反引号，即 TAB 键上方的符号。

用这个方法也可以很方便地插入表达式。（模板字符串不用手动输入回车符号就可以直接换行）

```javascript
const a = 1000;
const b = 7;
console.log('we got '+(a-b)+',\ninstead of '+(a*b)+'.'); // 传统写法
console.log(`we got ${a-b},
instead of ${a*b}`);
```

![image-20210126175153391](../../../AppData/Roaming/Typora/typora-user-images/image-20210126175153391.png)

#### 模板字符串的嵌套使用

```javascript
const names = ['Ethan', 'Echo'];

function outputNames() {
	return `<ul>
	${name
        .map((item) => `<li>${item}</li>`)
		.join(' ')}
	</ul>`;
}
document.body.innerHTML = outputNames();
```

![image-20210126180820044](https://cdn.ethanloo.top/img/20210126180820.png)

#### 模板字符串中调用函数

```javascript
function getName() {
    return 'ethanloo';
}

console.log(`www.${getName()}.com`);
```

## Boolean 布尔值

ture 和 false

## Number 数值型

在 JS 中，无论是整数、浮点数，无论大小、正负，都是 Number 类型的。

内存限制了 ECMAScript 的最大值和最小值。

- 最大值：`Number.MAX_VALUE`，这个值为： 1.7976931348623157e+308
- 最小值：`Number.MIN_VALUE`，这个值为： 5e-324

**NaN**，是一个特殊的数字，表示 Not a Number，非数值。

```js
console.log('abs' / 3);
console.log('abc' * 'cba');
```

### 隐式转换

程序会对`-`、`*`、`/`、`%`这几个符号进行隐式转换。

```javascript
var a = '2' + 1;
var b = '2' - 1;
var c = '9' / 3;
console.log(a); // 21
console.log(b); // 1
console.log(c); // 3
```

### 运算精度问题

使用`toFix()`方法可以对小数进行截取。

实际开发中，使用这两个开源的库：[decimal.js](https://github.com/MikeMcl/decimal.js/)、 [Math.js](https://github.com/josdejong/mathjs)，前者轻量，后者全面。

## Null 空对象

使用 `let a = null` ，来定义一个空的对象。

> 用来对没想好的对象初始化的时候使用

## Undefined

以下几种情况，均会导致打印结果为 `undefined`

1. 变量已经声明，未赋值

   ```js
   var a;
   console.log(a);
   ```

2. 变量未声明的时候

   ```js
   console.log(a); // 直接打印是报错
   console.log(typeof a); // 打印类型会输出undefined
   ```

3. 没有返回值的函数

   ```js
   function foo() {}
   console.log(foo());
   ```

4. 调用函数的时候未传参

   ```js
   function foo(a) {
     console.log(a);
   }
   foo();
   ```

   实际开发中可以设置默认值

   ```js
   function foo(a) {
     a = a || "ethan";
   }
   
   // ES6
   function foo(a = "ethan") {}
   ```

null 和 undefined 的相似和区别

```js
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(10 + null); // 10
console.log(10 + undefined); // NaN
```

- 任何数据类型和 undefined 运算都是 NaN

- 任何值和 null 运算，null 可以看作是 0 运算。

## 数据类型转换

`typeof` 用来获取变量的数据类型，返回的是字符串。

有两种写法

```js
typeof 变量;
typeof(变量);
```

类型的转换分为两种：显式类型转换，隐式类型转换

### 显式类型转换

#### => String

1. 变量+""(任意字符串)

   ```js
   var a = 3;
   console.log(3+'');
   ```

2. `toString()`

   ```js
   var a = 3;
   var b = a.toString();
   var c = a.toString(2); // 将a转换成2进制数字的字符串格式
   ```

3. `String()`

   - 对于 Number 和 Boolean 类型的变量而言，就是调用 `toString()` 方法

   - 对于 null 和 undefined，则直接转换成 'null' 和 'undefined'

#### => Number

1. `Number()` 函数

   - 字符串 => 数字

     - 如果字符串里面是纯数字，就转换成数字

     - 如果字符串是空串或者全是空格，就转换成0
     - 字符串中包含的是非数字内容，就转换为 `NaN`

   - 布尔 => 数字

     - true => 1
     - false =>0

   - null => 数字

     - 0

   - undefined => 数字

     - `NaN`

2. `parseInt()`  转换为整数，带有截断小数的功能

   - 字符串 => 数字
     - 只保留字符串最开头的数字，后面的中文自动消失
     - 字符串是以非数字开头，转换为 `NaN`
     - 字符串是空串或者全是空格，会报错
   - 布尔值 => 数字
     - `NaN`
   - Null => 数字
     - `NaN`
   - Undefined => 数字
     - `NaN`

   > `number()` 和 `parseInt()` 的区别在于
   >
   > 前者是千方百计转换数字；
   >
   > 后者是先转换为字符串，再尝试提取最前面的数字部分，没尝试出来就返回 `NaN`

   使用 `parseInt()` 还可以通过第二个参数实现进制的转换

   例如，尝试把 `2` 进制的数字 `11110001` 转换成 `10` 进制的数字

   ```js
   console.log(parseInt("11110001", 2)); // 241
   ```

3. `parseFloat()` 函数

   把字符串转换为浮点数，和 `parseInt()` 的区别在于 `parseFloat()` 可以获得有效的小数部分

#### => Boolean

- 数字 => 布尔
  - 只有0和 `NaN` ，`Boolean()` 的结果是 `false`
  - 其他数字都是 `true`
- 字符串  => 布尔
  - 只有空串是 false
  - 其他的都是 true
- null, undefined => false
- 引用数据类型 => true
  - 包括空数数组 `[]` 和空对象 `{}` 都是 `true`

#### 隐式转 Boolean

用非布尔类型的数值和布尔值比较时，会先转换为布尔类型然后对比

```js
console.log(1 == true); // true
console.log(0 == true); // false
```

#### 显式转 Boolean

1. 使用 `!!` 可以显式地转换为布尔类型

   比如 `!!3 == true`

2. 使用 `Boolean()` 函数显示地转换为布尔类型

### 隐式类型转换

```js
isNaN();
```

判断参数是否为 `NaN` ，返回结果是布尔值，即任何不能被转换为数值的参数，返回值都是 true

执行过程：先调用 `Number()` 函数，再把返回结果和 `NaN` 进行比较。

1. 自增/自减运算符： `–-` / `++`

   ```js
   var a = '444';
   a++;
   console.log(typeof a); // number
   console.log(a); // 445
   ```

2. 正号/符号：`+a` / `-a`

   内部调用了 `Number()` 函数

3. 加号：`+`
   - 字符串 + 数字：会调用 `String()` 函数把数字转换成字符串，然后字符串拼接。
   - 布尔值 + 数字：会调用 `Number()` 函数把布尔值转换成数字(true => 1, false => 0)，再和数字相加
   - null + 数字：相当于 0 + 数字
   - undefined + 数字：NaN

4. 运算符：`-` / `*` / `/`

   非数值型做这些运算的时候，内部调用 `Number()` 函数转换成数字再进行计算

   ```js
   result1 = true + 1;  // 2 = 1+ 1
   result2 = true + false; // 1 = 1+ 0
   result3 = 1 + null; // 1 = 1+ 0
   result4 = 100 - '1' // 99
   ```

   任何的值和字符串做加法运算，都会先转换成字符串，然后做字符串连接。

5. 逻辑运算符：`&&` / `||` / `!`

6. 关系运算符：`<` / `>` / `>=` / `<=`

## 运算符

`+`、`*`、`/`、`(` 都是**运算符**，而 `(3+5)/2` 则是**表达式**。

### 算数运算符

用于执行两个变量或值的算术运算。

`+`, `-`, `*`, `/`, `%`

**运算进度问题**

在进行算数计算时，会丢失精度

```js
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.07 * 100); // 7.000000000000001
```

### 自增和自减

`a++` 和 `++a`

`a--` 和 `--a`

都会对变量进行更改，区别在于左边的表达式的值是变更前的 `a`，右边的表达式的值是变更后的`a`

### 一元运算符

1. `typeof`
2. `+` 正号
3. `-` 负号

### 逻辑运算符

- `&&` 与运算
- `||` 或运算
- `!` 否运算

非布尔值进行与运算的时候，会转换成布尔值再运算，但是返回结果是某个原值。

```js
var res = 3 && 4;
console.log(res); // 4
```

与运算的结果

- 如果第一个值是 false，就执行第一条语句，并返回第一个值
- 如果第一个值是 true，就继续执行第二条语句，并返回第二个值

与运算的结果

- 如果第一个值是 true，就执行第一条语句，并返回第一个值

- 如果第一个值是 false，就继续执行第二条语句，并返回第二个值

以实际开发中的容错处理为例

```js
if (result.resultCode == 0) {
	var a = result && result.data && result.data.imgUrl || 'https://cdn.ethanloo.top/img/20210127092655.png';
}
```

### 赋值运算符

- `=`
- `+=`
- `-=`
- `*=`
- `/=`
- `%=`

### 比较运算符

```
>	大于号
<	小于号
>= 	大于或等于
<=  小于或等于
== 	等于
=== 全等于
!=	不等于
!== 不全等于
```

1. 非数值的比较

   - 对于非数值的进行比较，会转换成数字再进行比较

     ```js
     console.log(1 > true); // false，因为true == 1
     console.log(10 > null ); // true
     console.log(10 < NaN); // false，任何值和NaN比较都是false
     ```

   - 如果两边都是字符串，不会转换成数字，比较的是字符串的 Unicode编码

     ```js
     console.log('33' > '123'); // true
     ```

2. 关于 `==`

   - 可以用于验证字符串是否相等

     ```js
     console.log('ethan' == 'ehtan'); // false
     ```

   - 但是这个符号并不严谨，在比较不同类型的数据时，会进行隐式转换

     ```js
     console.log('6' == 6); // false
     ```

   - `undefined` 衍生自 `null`，因此两个值相等

     ```js
     console.log(undefined == null); // true
     ```

   - `NaN` 不和任何值相等

     ```js
     console.log(NaN == 3); // false
     console.log(NaN == NaN); // false
     ```

     > 因此使用 `isNaN()` 函数来判断某个值是否为 `NaN`

3. 关于`===`

   - 全等在比较时，不会进行类型转换

     ```js
     console.log('6' === 6); // false
     ```

   - 相等的否定形式为`!=`，全等的否定形式为 `!==`

### 三元运算符

```js
条件表达式 ? 语句1 : 语句2;
```

若表达式为真就执行语句1，否则执行语句2

### Unicode 编码

1. 在字符串中可以使用转义字符输入 Unicode 编码

    格式：`\u四位编码`，这里的编码使用的是 16 进制的。
    
    例如：

    ```js
console.log('\u2600'); // 2600是16进制数
    ```
    
2. 在 HTML 中也可以直接使用  Unicode编码

    格式：`&#四位编码`，这里的编码要使用 10 进制的。

    例如：

    ```html
    <h1>
        &#9860;
    </h1>
    ```

## 选择结构

1. `if` 语句

   ```js
   var a = 1;
   if (a == 1) {
       console.log('3');
   }else if (a == 2){
       console.log('4');
   }
   ```

2. `switch` 语句

   ```js
   var a = 1;
   switch(a) {
       case 1:
           console.log(1);
           break;
       case 2:
           console.log(2);
           break;
       default:
           console.log(3);
           break;
   }
   ```

使用 `switch` 优雅地替换掉多分支判断语句。

```js
let day = 4;

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('work');
        break; // 在这里放一个 break

    case 6:
    case 7:
        console.log('relax');
        break; // 在这里放一个 break

    default:
        break;
}
```



## 循环语句

### for 循环

```js
for (var i = 1; i < 13; i++){
    console.log(i);
}
```

### while 循环

```js
var i = 0;

while (i++<=3){
    console.log(i);
}

var j = 1;
do {
    console.log(j);
} while (j++<=3)
```

### 小练习

> 好家伙，有大一刚学 python 内味了

1. 在页面中接收一个用户输入的数字`N`，并输出所有`[0,N]`范围内的质数。

   ```js
   var n = parseInt(prompt("请输入一个正整数N:"));
   
   for (var i = 2; i <= n; i++) {
     var flag = true;
     for (var j = 2; j < i; j++) {
       if (i % j == 0) {
         flag = false;
         break;
       }
     }
     if (flag) {
       console.log(i);
     }
   }
   ```

2. 输出九九乘法表

   ```js
   for (var i = 1; i <= 9; i++) {
     var res = "";
     for (var j = 1; j <= i; j++) {
       var tmp = "" + j + "*" + i + "=" + i * j;
       res += tmp + " ";
     }
     res += "<br/>";
     document.write(res);
   }
   ```

## 对象

- 对象的属性值，可以是一个函数（方法）
- 对象的属性值，也可以是一个对象

```js
var person = {};
person.name = 'ethan';
person.age = 233;
person.sayName = function() {
	console.log('I am Ethan.');
}
```

### 对象的分类

1.内置对象：

- 由ES标准中定义的对象，在任何的ES的实现中都可以使用

- 比如：Object、Math、Date、String、Array、Number、Boolean、Function等。

2.宿主对象：

- 由JS的运行环境提供的对象，目前来讲主要指由浏览器提供的对象。

- 比如 BOM DOM。比如`console`、`document`。

3.自定义对象：

- 由开发人员自己创建的对象

### 基本包装类型

属性和方法只能给对象添加，基本数据类型无法拥有属性和方法。

```js
var a = 'ethan';
var b = new String('ethan');
a.Age = 13;
b.Age = 21;
console.log(a.Age); // undefined
console.log(b.Age); // 21
console.log(typeof a); // string
console.log(typeof b); // Object
```

JS 提供的三个包装类，可以把基本数据类型转换为对象。

- `String()`
- `Number()`
- `Boolean()`

当调用基本数据类型的属性的时候，实际上就是临时使用了包装类。

```js
var a = 'ethan';
console.log(a.length); // 5
```

内部的执行流程如下

```js
var temp = new String('ethan');
a = tmp;
tmp = null;
```

在底层，字符串是以字符数组的形式保存的。

```js
var a = 'ethan';
console.log(a[1]); // 't'
```
