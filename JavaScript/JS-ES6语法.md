## ES6 简介

ES 全称 ECMAScript，是一套脚本语言的标准化规范。严格来说，ES 不仅是 JS 的语言标准，还包括其他脚本语言的语言标准。

2015年6月，ES6 正式发布，也可以叫做 ES2015，是新的 JS 语法标准，ES6 泛指 ES2015 以及后续版本。jQuery 偏向于 ES3，现在主流的 Vue.js 和 React.js 的默认语法都是 ES6。

ES6 的改进：

1. 通过 `let, const` 关键字优化了变量提升的特性。
2. 增加了新功能，比如：常量，作用域，异步处理，类，继承等。
3. 之前的语法过于松散，相同的功能可能会写出不同的代码。

ES6 的目标：让 JS 语言可以编写复杂的大型应用程序。

### 兼容性配置

写 ES6 语法的 JS 代码，通过 `Babel` 将 ES6 转换为 ES5。

参考：<http://jspang.com/2017/06/03/es6/>

## ES5 巩固

### 严格模式

ES5 中新增的运行模式：strict mode，目的是为了消除 JS 语法中的不合理性和不安全之处，也是为了未来新版的 JS 做铺垫。

如果要使用，就将 `use strict` 放在脚本文件第一行即可。

### 模式特点

1. 在正常模式种，对没有声明的变量赋值，默认就是全局变量，严格模式中，必须使用 `var` 显示声明变量。
2. 在自定义函数中，禁止用 `this` 指向 `window`。
3. 创建 `eval` 作用域，`eval()` 使用局部作用域，`evalg()` 使用全局作用域。
4. 禁止使用 `with` 语句。
5. 构造函数必须通过 `new` 实例化对象。
6. 无法删除变量。
7. 函数必须声明在顶层。

### JSON

ES5 中新增的两个关于 JSON 的方法。

1. `JSON.stringfy(obj/arr)`：JS 对象（数组） => JSON 对象（数组）
2. `JSON.parse(json)`：JSON 对象（数组） => JS 对象（数组）

### Object 扩展

`Object.create(prototype, [descriptors])`：以指定对象为原型，创建新的对象，第二个参数可以添加新的属性。

```js
var obj1 = {name: 'ethan', age: 21};
var obj2 = {sex: 'male'};
obj2 = Object.create(obj1);
obj3 = Object.create(obj1, {
    country: {
        value: 'Chine',
        writable: false, // 不可写
        configurable: true, // 可删除
        enumerable: true // 可枚举
    }
});
```

`Object.defineProperties(object, descriptors)`：为指定对象定义扩展属性。

```js
var obj = {firstName: 'ethan', lastName: 'lu'};
Object.defineProperties(obj, {
	 fullName: {
         get: function () {
             return this.firstName + '-' + this.lastName
         },
         set: function (data) {
             var names = data.split('-');
             this.firstName = names[0];
             this.lastName = names[1];
         }
     }
});
```

- `get 属性名(){}`：返回当前属性值的回调函数
- `set 属性名(){}`：监视当前属性值变化的回调函数

```js
var obj = {
    firstName: 'ethan', 
    lastName: 'lu'
    fullName: {
    get: function () {
        return this.firstName + '-' + this.lastName
    },
    set: function (data) {
        var names = data.split('-');
        this.firstName = names[0];
        this.lastName = names[1];
    }
});
console.log(obj.fullName);
obj.fullName = 'Echo Dee';
console.log(obj.fullName);
```

### 数组扩展

1. `Array.prototype.indexOf(value)`：获取 `value` 在数组中第一次出现的下标。
2. `Array.prototype.lastIndexOf(value)`：获取 `value` 在数组中出现的最后一次下标。
3. `Array.prototype.forEach(function(item, index){})`：遍历数组
4. `Array.prototype.map(function(item, index){})`：遍历数组并返回一个新的加工后的数组。
5. `Array.prototype.filter(function(item, index){})`：遍历并过滤出一个子数组。

### 改变 this 的指向

`Function.prototype.bind(obj)`：将函数内的 `this` 绑定为 `obj`，并返回函数。

> `call(), apply(), bind()` 都可以改变 `this` 的指向，但是前两者为立即调用函数，最后一个在绑定完之后，不会立即调用，而是将函数返回，需要再加括号才能调用。

ES5 加入 `bind()` 的原因是该方法不会立即调用函数。

## ES6 的变量声明

ES5 及之前，使用 `var` 定义全局变量。

ES6 中，使用 `let` 和 `const` 来定义变量：

- `let`：定义局部变量
- `const`：定义常量（不可修改）

### var 的问题

```js
{
    var a = 1;
}

console.log(a); // 1
```

由于 `var` 声明的是全局变量，所以上述代码可以正常输出结果，由此也说明 `var` 声明的变量不具备**块级作用域**的特性。

```js
var a = 1;
{
    var a = 2;
}
console.log(a); // 2
```

在外层和内层的作用域对同一个变量进行了定义和赋值，可能会污染 JS 的作用域，因此应该尽量避免 `var` 定义变量。

### let 定义局部变量

```js
{
    let a = 1;
}
console.log(a); // a is not defined
```

```js
var a = 2;
{
    let a = 3;
}
console.log(a); // 2
```

`let` 定义的变量，只在**块级作用域**内起作用。

同一个块级作用域内，如果使用 `let` 关键字重复定义同一个变量，会报错。

### const 定义常量

```js
const blog = 'https://blog.ethanlooo.top';
```

用 `const` 声明的常量，只在块级作用域内起作用，而且在声明时必须赋值，否则报错。

### let 和 const 的特点

- 不存在变量提升
- 禁止重复声明
- 支持块级作用域
- 暂时性死区（在声明变量之前，该变量都是不可用的）

### var let const 的共同点

- 全局作用域中定义的变量，可以在函数中使用
- 函数中声明的变量，只能在函数及其子函数中使用

### 暂时性死区

使用 `let` 或者 `const` 声明的变量，会使区块形成封闭的作用域，如果在声明之前使用变量，会报错。暂时性死区 Temporal dead zone 就是这样一种机制，确保变量先声明，再使用。

## 变量的解构赋值

ES6 允许从数组或者对象中提取值，再将提取出来的值赋给变量。

解构：分解数据结构；赋值：给变量赋值。

### 数组的解构赋值

ES6 之前的写法

```js
var arr = [1, 2, 3];
var a = arr[0];
var b = arr[1];
var c = arr[2];
```

ES6 之后的写法

```js
let [a, b, c] = [1, 2, 3];
```

正常情况应该是一一对应进行赋值，但是如果左边的数量大于右边数组的长度，多余的变量就是 `undefined`。

左边允许有默认值，如下

```js
{
    let [name = 'ethan'] = [];
    console.log(name); // ethan
}

{
    let [a, b] = [1];
    console.log(a + ', ' + b); // 1, undefined
}

{
    let [a, b = 2] = [1];
    console.log(a + ', ' + b); // 1, 2
}

{
    let [a, b = 2] = [1, undefined];
    console.log(b); // 2
}

{
    let [a, b = 2] = [1, null];
    console.log(b); // null
}
```



### 对象的解构赋值

将对象中的值按照属性匹配的方式提取出来。

ES6 之前：

```js
var name = json.name;
var age = json.age;
var sex = json.sex;
```

ES6 之后：

```js
const person = {name: 'ethan', age: 21};
let {name, age} = person;
```

同样，左边的变量数如果大于右边的对象的属性数，就会被赋值 `undefined`。

```js
const person = {name: 'ethan', age: 21};
let {name, age, sex} = person; // {'ethan', 21, undefined}
```

也可以自定义变量名，不一定和属性名一致。

```js
const person = {name: 'ethan', age: 21};
let {name: myName, age: myAge} = person;
```

如果变量名在解构前使用过，会报错：

```js
let name = 'ethan';
{name} = {name: 'echo'}; // 报错
```

外层添加圆括号即可

```js
let name = 'ethan';
({name} = {name: 'echo'});
console.log(name); // echo
```



### 字符串结构

```js
const [a, b, c, d] = 'ethan';
console.log(a); // e
console.log(b); // t
```



## 箭头函数

语法：

```js
(参数1, 参数2, ...) => { 函数体 }
```

- 如果只有 1 个参数，可以省略小括号。

- 如果函数体只有 1 条语句，且是 `return` 语句，可以省略大括号。

传统的定义和调用：

```js
function fc(a, b){
	console.log('hi');
    return a + b;
}

console.log(fc(1, 2)); // 3
```

ES6 中的写法：

```js
const fc = (a,b) => {
	console.log('hi');   
    return a + b;
};

console.log(fc(1, 2)); // 3
```

ES6 中的函数简化版：

```js
const fc = a => a + 10;

console.log(fc(1)); // 11
```

> 不过一般不会省略小括号，VSC 的自动格式化也会加上小括号。



### this 指向

ES6 之前：`this` 指向的是调用函数的对象。

ES6 的箭头函数：函数本身不绑定 `this`，`this` 指向的是箭头函数定义位置的 `this`。

```js
const obj = {name: 'ethan'};

function fc1() {
    console.log(this); // obj
    return () => {
        console.log(this); // obj
    }
}

const fc3 = (a) => {
    console.log(this); // Window
}

const fc2 = fc1.call(obj);
fc2();
fc3(1);
```



## 参数默认值

传统写法：

```js
function fc(name) {
    var p = name || 'ethan';
    console.log(p);
}
```

ES6 写法：

```js
function fc(name = 'ethan'){
	console.log(name);
}
```

注意，有默认值的参数后面的参数，也必须要有默认值。



## 剩余参数

剩余参数允许把不确定数量的多余的参数放到一个数组中。

传统写法：

```js
function fc(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d); // 报错
}
```

ES6 写法：

```js
const fc = (a, b, ...args) => {
    console.log(args[0]); // 3
    console.log(args[1]); // 4
}

fc(1, 2, 3, 4);
```

剩余参数和解构赋值配合：

```js
const names = ['ethan', 'echo', 'elisa'];
let [p1, ...p2] = names;

console.log(p1); // 'ethan'
console.log(p2); // ['echo', 'elisa']
```



## 扩展运算符

扩展运算符将数组或对象拆分成逗号分隔的参数序列。

```js
const nums = [1, 2, 3];
console.log(...nums); // 1 2 3
```

可以使用扩展运算符实现数组的深复制。

```js
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
```

还可以快速合并数组。

```js
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// 方法1
let arr3 = [...arr1, ...arr2];

// 方法2
arr1.push(...arr2);
```



## string 扩展

ES6 新增的字符串方法：

- `includes(str)`：判断是否包含指定的字符串
- `startsWith(str)`：判断是否以指定字符串开头

- `endsWith(str)`：判断是否以指定字符串结尾

- `repeat(count)`：重复指定次数



## number 扩展

- 二进制用 `0b` 开头，八进制用 `0o` 开头
- `Number.isFinite(i)`：判断是否为有限大的数。比如`Infinity`这种无穷大的数，返回的就是 false。
- `Number.isNaN(i)`：判断是否为 `NaN`。

- `Number.isInteger(i)`：判断是否为整数。

- `Number.parseInt(str)`：将字符串转换为对应的数值。

- `Math.trunc(i)`：去除小数部分。



## array 扩展

- `Array.from(arr)`：将**伪数组**或者**可遍历对象**转换成**真数组**

- `array.findIndex(function(currentValue, index, arr), thisValue)`：返回符合测试条件的第一个数组元素的下标
- `array.find(function(currentValue, index, arr),thisValue)`：返回符合测试条件的一个数组元素



## object 扩展

- `Object.is(x, y)`：判断两个变量是否完全相等，底层是通过字符串判断。
- `Object.assign()`：可以将可枚举属性的值从一个或多个对象分配到目标对象。



## Set 数据结构

集合，非重复数组。

```js
let mySet = new Set(); // 新建 Set

mySet.add(1); // 添加元素
mySet.add(2);
mySet.add(2);

console.log(mySet); // {1, 2}
console.log(mySet.has(1)); // true
console.log(mySet.has(3)); // false
console.log(mySet.size); // 2
```



## Symbol 数据结构

ES6 引入的数据结构，表示独一无二的值，解决命名冲突的问题，不能和其他数计算。

构造函数：`const symbol = Symbol()`，括号里可以加字符串作为符号描述。

### 作为对象属性

```js
let obj = {
    name: 'ethan',
    age: 21
}

let symbol = Symbol();
obj[symbol] = 1; // 只能通过属性选择器给对象添加 Symbol 属性，不可能写成 obj.symbol = 1
```



### 传参标识

```js
let symbol1 = Symbol();
let symbol2 = Symbol();

console.log(symbol1 == symbol2); // false

let symbol3 = Symbol('three');
let symbol4 = Symbol('four');

console.log(symbol3); // Symbol(three)
console.log(symbol4); // Symbol(four)
```





## Promise 入门

JavaScript 的执行环境是**单线程**的，即任务都是依次执行，无法并行。

异步模式可以一起执行多个任务，常见的异步模式有：定时器，接口调用，事件函数。

JS 中常见的接口调用方式：

- 原生 Ajax
- 基于 jQuery 的 Ajax
- Fetch
- Promise
- Axios

ES5 中，如果异步调用的结果存在以来，需要进行多层嵌套回调，会导致代码层次过多，难维护，而且会导致**回调地狱**。

ES6 中的 Promise 可以解决这个问题。

### 概述

ES6 中的 Promise 是**异步编程**的一种方案，Promise 是一个对象，可以获取异步操作的消息。

通过 Promise 对象，可以用同步的形式来书写异步代码。

### 基本用法

1. `new` 一个 Promise 对象，传递一个参数，参数为一个用于处理异步任务的函数。
2. 并且传入两个参数：`resolve` 和 `reject`，分别表示异步执行成功的回调函数和异步执行失败后的回调函数。
3. 通过 `promise.then()` 处理返回结果。

### 异步任务处理

```js
// 1. 封装 model 层的接口
const promise = new Promise((resolve, reject) => {
  // 用定时器代替 Ajax 请求接口
  setTimeOut(function () {
    var data = { retCode: 0, msg: "hello!" }; // 模拟接口返回的数据
    if (data.retCode == 0) {
      resolve(data);
    } else {
      reject({ retCode: -1, msg: "network error" });
    }
  }, 100);
});

// 2. 业务层的接口调用
promise
  .then((data) => {
    // 从 resolve 获取正常结果
    console.log(data);
  })
  .catch((data) => {
    // 从 reject 获取异常结果
    console.log(data);
  });
```

### 封装 Ajax 请求

```js
const request = require("request");

const request1 = function () {
  const promise = new Promise((resolve, reject) => {
    request("https://www.ethanloo.top", function (response) {
      if ((response.retCode = 200)) {
        resolve("request success," + response);
      } else {
        reject("failed");
      }
    });
  });
  return promise;
};

request1().then((res1) => {
  console.log(res1);
  return request2();
});
```

### 基于 Promise 处理多次 Ajax 请求

通过 Promise，可以使多层嵌套调用按线性方式书写，把**多层嵌套调用**改进为**链式调用**。

> 例如有 3 个请求，请求 2 依赖于请求 1 的结果，请求 3 依赖于请求 2 的结果，传统写法会陷入回调地狱。

```js
const request = require("request");

const request1 = function () {
  const promise = new Promise((resolve, reject) => {
    request("https://www.baidu.com", function (response) {
      if ((response.retCode = 200)) {
        resolve("request1 success," + response);
      } else {
        reject("failed");
      }
    });
  });
  return promise;
};

const request2 = function () {
  const promise = new Promise((resolve, reject) => {
    request("https://www.google.com", function (response) {
      if (response.retCode == 200) {
        resolve("request2 success," + response);
      } else {
        reject("failed");
      }
    });
  });
  return promise;
};

const request3 = function () {
  const promise = new Promise((resolve, reject) => {
    request("https://www.yahoo.com", function (response) {
      if (response.retCode == 200) {
        resolve("request3 success," + response);
      } else {
        reject("failed");
      }
    });
  });
  return promise;
};

// 逐个进行请求并打印返回结果
request1()
  .then((res1) => {
    console.log(res1);
    return request2();
  })
  .then((res2) => {
    console.log(res2);
    return request3();
  })
  .then((res3) => {
    console.log(res3);
  });
```



### return 的函数返回值

`return` 有两种可能的返回值：

1. 返回 Promise 实例对象，然后该对象调用下一个 `then`
2. 返回普通值，返回的值会传递给下一个 `then`，通过 `then` 参数中函数的参数接收

第一种情况类似上面的多 Ajax 请求；

第二种返回普通值的情况：

```js
function queryData(url) {
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState != 4) return;
      else if (xhr.readyState == 4 && xhr.status == 200) {
        resolve(xhr.responseText);
      } else {
        reject("failed");
      }
    };
    xhr.responseText = "json";
    xhr.open("get", url);
    xhr.send(null); // 请求接口
  });
}

queryData("https://www.ethanlooo.top")
  .then(
    (data1) => {
      console.log(JSON.stringify(data1));
      return queryData("https://blog.ethanlooo.top");
    },
    (error1) => {
      console.log(error1);
    }
  )
  .then(
    (data2) => {
      console.log(JSON.stringify(data2));
      return "hello, ethan";
    },
    (error2) => {
      console.log(error2);
    }
  )
  .then((data3) => {
    console.log(data3); // hello, ethan
  });
```

第一个请求结束，返回的是 Promise 的实例对象，因此第二个请求会正常进行。

第二个请求结束，返回的是一个普通的字符串，为了确保继续进行链式操作，在第三个 `then` 前面会产生一个新的默认的 Promise 的实例对象来调用。同时，上一个返回的普通字符串会作为参数 `data3` 传入第三个函数。



### Promise 常用实例方法

1. `promise.then()`：获取异步任务的正常结果。
2. `promise.catch()`：获取异步任务的异常结果。
3. `promise.finally()`：异步任务无论成功与否，都会执行。

```js
function queryData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      let data = { retCode: 0, msg: "ethanloo" }; // 模拟接口返回的数据
      if (data.retCode == 0) {
        resolve(data);
      } else {
        reject({ retCode: -1, msg: "error" });
      }
    }, 100);
  });
}

queryData()
  .then((data) => {
    console.log("success");
    console.log(data);
  })
  .catch((data) => {
    console.log("failure");
    console.log(data);
  })
  .finally(() => {
    console.log("whatever");
  });
```



### Promise 常用类方法

1. `Promise.all()`：并发处理多个异步任务，所有任务成功才能得到结果
2. `Promise.race()`：并发处理多个异步任务，只要有一个任务成功就得到结果

```js
let promise1 = queryData(api1);
let promise2 = queryData(api2);
let promise3 = queryData(api3);

Promise.all([promise1, promise2, promise3]).then((result) => {
    console.log(result);
});

Promise.race([promise1, promise2, promise3]).then((result) => {
    console.log(result);
});
```



## ES7 async 异步函数

- `async` 意思是**异步**，加上该关键词的函数的返回值是 Promise 实例对象
- `await` 只能存在于 `async` 函数中，用于等待一个异步任务完成的结果。

async 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再接着执行函数体内后面的语句。

```js
const request1 = function () {
  const promise = new Promise((resolve) => {
    request("https://www.ethanloo.top", function (response) {
      if (response.retCode == 200) {
        resolve("request1 success, " + response);
      } else {
        reject("failure");
      }
    });
  });
  return promise;
};

async function queryData() {
  const response = await request1();
  return response;
}

queryData().then((data) => {
  console.log(data);
});
```

