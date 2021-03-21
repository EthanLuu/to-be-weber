功利地面向面试学习，用输出倒逼输入，针对 JS 的一些高频考点（基础版）进行一波恶补。

## 搞懂 this

要明白 `this` 的指向，最有用的一句话：**`this` 永远指向最后调用它的对象**

最基础的例子：

```js
function foo() {
    console.log(this.a)
}

var a = 1
foo() // 1

const obj = {
    a: 2,
    foo: foo
}

obj.foo() // 2

const c = new foo() // undefined
```

用 `var` 来声明的变量属于全局变量，所以执行完 `var a = 1` 之后，实际上就是 `window.a = 1`，`window` 在这里是一个全局的对象。

1. 第一次输出，由于我们是**直接调用了函数** `foo()`，根据我们的原则 **`this` 永远指向最后调用它的对象**，因此很明显，此时 `this` 指向的就是 `windows`，自然控制台打印出来的就是 `1`。

2. 第二次，我们新建了一个对象  `obj`，`foo` 属于**这个对象的一个方法**，所以最后调用 `foo()` 函数的其实是这个对象，所以 `this` 指向的是这个 `obj`，打印出来的就是 `2`。
3. 第三次，我们 `new` 了一个 `foo()` 函数，`this` 被永远绑定在 `c` 的上面，由于在新建 `c` 的时候，实际上它并没有叫做 `a` 的属性，所以最后打印出来的是 `undefined`。

再来看这个例子：

```js
var name = 'ethan'

function fn() {
    var name = 'echo'
    innerFunction()
    function innerFunction() {
        console.log(this.name) // ethan
    }
}

fn()
```

这里的 `innerFunction()` 和我们上面那个例子中的第一次输出类似，都是直接调用了函数，没有挂载在任何对象上，因此它的 `this` 就是指向的是 `windows`。

下面这个例子可以帮你巩固这个知识点：

```js
var name = "ethan";

var a = {
    name: "echo",

    func1: function () {
        console.log(this.name)
    },

    func2: function () {
        setTimeout(function () {
            this.func1()
        }, 100);
    }

};

a.func2()     // this.func1 is not a function
```

可以简单地理解为，**匿名函数的 `this` 永远指向 `windows`**，在我们调用对象 `a` 的 `func2` 方法的时候， 我们使用 `setTimeOut()` 来直接调用声明的匿名函数，此时由于 `windows` 并不具备 `func1()` 函数，所以会报错。

针对箭头函数而言，它的 `this` 永远绑定函数定义时候的 `this` ，而不是执行时候，也可以理解为箭头函数的 `this` 指向的是包裹箭头函数的第一个普通函数中的 `this`，如果找不到就是 `undefined`。

具体例子如下：

```js
var name = "ethan";

var a = {
    name: "echo",

    func1: function () {
        console.log(this.name)
    },

    func2: function () {
        setTimeout(() => {
            this.func1()
        }, 100)
    }
};

a.func2() // echo

const b = () => {
    console.log(this.name)
}

b() // undefined
```

## 改变 this 指向

1. 使用 ES6 的语法，箭头函数：始终指向定义时的 `this`，而不是执行的时候。

   ```js
   var name = 'ethan';
   var a = {
   	name: 'echo',
       func1: function() {
           console.log(this.name)
       }
       func2: function() {
   		setTimeout(() =>{
   			this.func1();
           }, 100)
       }
   }
   ```

   

2. 不使用 ES6 的语法，使用 `_this = this`，来保存 `this` 指针。

   ```js
   var name = "ethan";
   
   var a = {
       name: "echo",
   
       func1: function () {
           console.log(this.name)
       },
   
       func2: function () {
           var _this = this;
           setTimeout(function () {
               _this.func1()
           }, 100)
       }
   };
   
   a.func2() // echo
   ```

3. 使用 `apply, call, bind`

   ```js
   setTimeout(function () {
       this.func1()
   }.apply(a), 100)
   setTimeout(function () {
       this.func1()
   }.call(a), 100)
   setTimeout(function () {
       this.func1()
   }.bind(a)(), 100)
   ```

   `apply` 和 `call` 比较类似，它们都是改变 `this` 指向并且调用函数，`bind` 跟它们的区别就体现在它只改变绑定的 `this`，不会直接调用。

   `apply` 和 `call` 的区别体现在函数有多参数的情况下，前者是接收多参数的数组，后者是直接将多个参数平铺在 `apply()` 内部：

   ```js
   const a = {
       name: 'ethan',
       fn: function (a, b) {
           console.log(a + b)
       }
   }
   
   const b = a.fn;
   b.apply(a, [1, 2]) // 3
   b.call(a, 3, 4) // 7
   ```

判断 `this` 指向的图片流程总结：

![img](https://cdn.ethanloo.top/img/20210315214356)

## ==

关键记忆点：字符串转数字，布尔转数字，对象转基本类型

![img](https://cdn.ethanloo.top/img/20210316131837)

## 闭包

MDN 上对闭包的定义：一个函数和对其周围状态（**lexical environment，词法环境**）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是**闭包**（**closure**）。也就是说，**闭包让你可以在一个内层函数中访问到其外层函数的作用域**。

JS 中闭包的意义就是让我们可以间接地访问函数内部的变量。

经典例子：

```js
function a() {
    const name = 'echo'
    function b() {
        console.log(name)
    }
    return b
}

const c = a()
c()
```

**闭包**是由函数以及声明该函数的词法环境组合而成，这个环境包含了该闭包创建时作用域内的任何局部变量。在上面这个例子中，实际上 `c` 是执行 `a` 时创建的 `b` 函数实例的引用。`b` 的实例维持了一个对它的词法环境的引用，因此调用 `c` 的时候仍然有 `name` 这个变量。

闭包的应用：

```js
function powerX(x) {
    return function (num) {
        return Math.pow(num, x);
    }
}

const power2 = powerX(2);
const power3 = powerX(3);
console.log(power2(2)); // 4
console.log(power3(2)); // 8
console.log(power2(3)); // 9
console.log(power3(3)); // 27
```

这个例子相当于一个工厂函数，封装了一个可以求 `X` 次方的函数。

经典面试题：由于 `setTimeOut` 是一个异步函数，所以会先把循环执行完毕，当前输出结果是一堆 `6`，如何输出 `1` 到 `5`？

```js
for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i)
  }, i * 1000)
}
```

解法1：闭包的应用

```js
for (var i = 1; i <= 5; i++) {
    (function (j) {
        setTimeout(function timer() {
            console.log(j)
        }, j * 1000)
    })(i)
}
```

解法2：使用 `setTimeOut` 的第三个参数，这个参数会作为回调函数的参数传入

```js
for (var i = 1; i <= 5; i++) {
    setTimeout(function timer(j) {
        console.log(j)
    }, i * 1000, i)
}
```

解法3：推荐，用 ES6 中的 `let` 来解决问题

```js
for (let i = 1; i <= 5; i++) {
    setTimeout(function timer() {
        console.log(i)
    }, i * 1000)
}
```



## 深浅拷贝

对于基本类型而言，例如 `number, boolean, string`，它们的拷贝不分深浅，都是将数值直接进行拷贝。

例如 `let a = 3; let b = a`，实际上就是直接赋值，不涉及任何拷贝。

同样是直接赋值的案例：

```js
const a = [1, 2, 3]
const b = a
a[0] = 4
console.log(b) // [4, 2, 3]
```

由于 `a` 变量是一个对象，我们直接引用的其实是对象的地址，因此 `b = a` 实际上就是让 `b` 指向 `a` 指向的地方。它们俩指的是同样一块内存空间，所以我们对其中任何一个的改变都影响到了对方。

数组的浅拷贝：

```js
const a = [1, 2, 3]
const b = a.slice()
const c = a.concat()
const d = [...a]
a[0] = 1
console.log(b) // [1, 2, 3]
console.log(c) // [1, 2, 3]
console.log(d) // [1, 2, 3]
```

对象的浅拷贝：

```js
const a = { name: 'ethan', age: 21 }
const b = Object.assign({}, a)
const c = Object.assign({}, a, { name: 'ezreal' })
a.name = 'echo'
console.log(b) // {name: "echo", age: 21}
console.log(c) // {name: "ezreal", age: 21}
```

浅拷贝的问题体现在它只能解决第一层数据的复制，当出现引用的引用的时候，它就没有效果了。

```js
const a = { name: 'ethan', age: 21, games: ['LOL'] }
const b = Object.assign({}, a)
a.games.push('OW')
console.log(b.games) // ["LOL", "OW"]
```

为了解决这个问题，我们需要深克隆，来实现引用类型内部的引用类型数值的拷贝。

简易版实现：

```js
const a = { name: 'ethan', age: 21, games: ['LOL'] }
const b = JSON.parse(JSON.stringify(a))
a.games.push('OW')
console.log(b.games) // ["LOL"]
```

简易版的问题体现在：

- 会忽略 `undefined`
- 会忽略 `symbol`
- 无法拷贝函数
- 无法拷贝循环引用的对象

手写深拷贝：

```js
const deepClone = (target) => {
    if (typeof target == 'object' && target != null) {
        const cloneTarget = Array.isArray(target) ? [] : {}
        for (let prop in target) {
            if (target.hasOwnProperty(prop)) {
                // 这里的判断是为了忽略从原型链上继承的属性
                cloneTarget[prop] = deepClone(target[prop])
            }
        }
        return cloneTarget
    } else {
        return target
    }
}
```

当遇到需要拷贝的内容是对象且非空的时候，遍历目标对象的所有属性，进行递归的复制。

> 当然这个函数还是有很多缺陷：循环引用，`Data, Set, Map` 等特殊对象的复制，函数拷贝。
>
> 完整版的可以参考 https://juejin.cn/post/6844903986479251464#heading-62，由于挖的比较深，我这儿就先不探究了。



## 实现继承

**组合继承方式：**

```js
function Parent(val) {
    this.val = val
}
Parent.prototype.getVal = function () {
    console.log(this.val)
}

function Child(val) {
    Parent.call(this, val)
}

Child.prototype = new Parent()

const c = new Child(233)
console.log(c instanceof Parent) // true
c.getVal() // 233
```

子类的构造函数通过 `Parent.call(this)` 继承了父类的属性，把子类的原型改成 `new Parent()` 来继承父类的函数。

该种继承方式的**优点**在于构造函数可以传参，不会和父类共享引用属性，可以继承父类的函数；**缺点**在于继承父类的函数的时候实际上调用了父类的构造函数，因此造成了子类的原型上存在了不需要的属性。

**寄生组合继承：**对组合继承的优化

```js
function Parent(val) {
    this.val = val
}
Parent.prototype.getVal = function () {
    console.log(this.val)
}

function Child(val) {
    Parent.call(this, val)
}

Child.prototype = Object.create(Parent.prototype, {
  constructor: {
    value: Child,
    enumerable: false,
    writable: true,
    configurable: true
  }
})

const c = new Child(233)
console.log(c instanceof Parent) // true
c.getVal() // 233
```

`class` 关键词实现继承，属于 ES6 中提供的语法糖

```js
class Parent {
    constructor(val) {
        this.val = val
    }
    getVal() {
        console.log(this.val);
    }
}

class Child extends Parent {
    constructor(val) {
        super(val)
        this.val = val
    }
}

let c = new Child(233)
c.getVal() // 233
console.log(c instanceof Parent); // true
```



## AJAX

AJAX(**A**synchronous **J**avaScript **A**nd **X**ML)：异步的 JS 和 XML（可扩展标记语言）

可以实现在不刷新的情况下，更新页面上的数据，提高用户体验。

AJAX 经典四步：

1. 创建 `XMLHttpRequest` 的一个实例
2. 调用实例的 `open` 方法
3. 指定状态变化事件处理函数
4. 调用 `send` 方法发送请求

```js
var xhr = new XMLHttpRequest();
xhr.open('get', 'https://jsonplaceholder.typicode.com/todos/1');
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    }
};
xhr.send();
```



## Promise

> 3.17 MS 二面问到了，面完赶紧补课

`Promise` 是 ES6 提出用来处理异步问题的一个方案。

`Promise` 的三个状态：`pending(等待), resolved(已成功), rejected(已失败)`。它的优点在于将异步操作用同步方式的流程表达出来，使用链式的写法使得代码更加优雅。

基本用法：

```js
// 1. 封装 model 层的接口
const promise = new Promise((resolve, reject) => {
  // 用定时器模拟 Ajax 请求接口
  setTimeout(function () {
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



## 原型和原型链

先记住原型链，再尝试理解原型。

一开始我们先看一张图：

<img src="https://cdn.ethanloo.top/img/20210318144315.image" alt="img" style="zoom:50%;" />

再根据代码来理解：

```js
function Person() {
    // 构造函数
}
Person.prototype.name = 'ethan'
const person = new Person()
```

构造函数的 `prototype` 属性：

![image-20210318144805494](https://cdn.ethanloo.top/img/20210318144805.png)

实例对象的 `__proto__` 属性：

![image-20210318144833365](https://cdn.ethanloo.top/img/20210318144833.png)

两者指向一个地方：`person.__proto__ === Person.prototype`

同时，原型的 `constructor` 属性指向的是构造函数：`Person()`

> ES5 中获取对象的原型的方法是 `Object.getPrototypeOf(person)`

我们能更新当前的关系图：

<img src="https://cdn.ethanloo.top/img/20210318145202.image" alt="img" style="zoom:50%;" />

再来继续探究原型是什么东西，我们可以看到之前打印的**原型** `Person.prototype` 或者说 `person.__proto__`，它是一个**对象**，我们尝试获取它的原型（即**原型的原型**）

![image-20210318145519954](https://cdn.ethanloo.top/img/20210318145520.png)

`Object()` 是 `Object` 的构造函数，而我们之前 `Person` 的原型是一个 `Object` 的实例，所以我们可以得到 `Person.prototype.__proto__ === Object.prototype`。

> `Object` 的原型的原型为 `null`

最终的原型链图就张这样（图中的蓝色这根线）：

<img src="https://cdn.ethanloo.top/img/20210318145758.image" alt="img" style="zoom: 80%;" />

那父类和子类的继承关系和这个**原型**又有什么关系呢？

```js
class F {
}

class C extends F {
}

console.log(C.__proto__ === F); // true
console.log(C.prototype.__proto__ === F.prototype) // true
```

- 子类的 `__proto__` 属性，表示构造函数的继承，指向父类；因为作为一个对象，子类的原型是父亲
- 子类 `prototype` 属性的 `__proto__` 属性，表示方法的继承，总是指向父类的prototype属性；因为作为一个构造函数，子类的原型对象是父类的原型对象的实例

走完这个流程之后，我们再来探究什么是 `prototype` ，什么是 `__proto__`

`__proto__` ，是对象的一个属性，它的值就是它所对应的原型对象

`prototype`，是函数的一个属性，它的值是一个有 `constructor` 属性的对象。当我们把这个函数作为构造函数调用的时候，JS 就会帮我们创建该构造函数的实例，实例继承该构造函数的 `prototype` 的所有属性和方法（实例会把自己的 `__proto__` 指向构造函数的 `prototype`）。

## 参考资料

[掘金小册：《前端面试之道》](https://juejin.cn/book/6844733763675488269)

[this、apply、call、bind](https://juejin.cn/post/6844903496253177863)

[三元大佬的原生 JS 灵魂之问](https://juejin.cn/post/6844903986479251464)

[学习Promise基础及手写Promise](https://juejin.cn/post/6844903843507994632)

[原型？原型链？](https://juejin.cn/post/6921592119614570504#heading-0)