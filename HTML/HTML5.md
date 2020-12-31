## Web 技术发展时间线

- 1991 HTML


- 1994 HTML2

- 1996 CSS1 + JavaScript

- 1997 HTML4

- 1998 CSS2

- 2000 XHTML1（严格的html）

- 2002 Tableless Web Design（表格布局）

- 2005 AJAX

- 2009 HTML5

- 2014 HTML5 Finalized

## 什么是 HTML5

**`HTML5`的广义概念**：HTML5代表浏览器端技术的一个发展阶段。在这个阶段，浏览器的呈现技术得到了飞跃发展和广泛支持，它包括：HTML5、CSS3、Javascript API在内的一套技术组合。

**总结**：`HTML5`是新一代开发 **Web 富客户端**应用程序整体**解决方案**。包括：HTML5，CSS3，Javascript API在内的一套**技术组合**。

**富客户端**：具有很强的**交互性**和体验的客户端程序。比如说，浏览博客，是比较简单的客户端；一个在线听歌的网站、即时聊天网站就是富客户端。

## HTML5 的应用场景

1. 极具表现力的网页：内容简约而不简单。
2. 网页应用程序：
   - 代替PC端的软件：iCloud、百度脑图、Office 365等。
   - APP端的网页：淘宝、京东、美团等。
   - 微信端：公众号、小程序等。

3. 混合式本地应用。

4. 简单的游戏。

## 语义化的标签

HTML 的职责是描述这一块内容是什么。

### 标签语义化的作用

- 能够便于开发者阅读和写出更优雅的代码。
- 同时让浏览器或是网络爬虫可以很好地解析，从而更好分析其中的内容。
- 更好地搜索引擎优化。

### HTML5 在语义上的改进

我们常见的 css+div 布局是：


![](http://img.smyhvae.com/20180206_1546.png)

在html5中，我们可以这样写：

![](http://img.smyhvae.com/20180206_1550.png)

**传统网页布局**


```html
<!-- 头部 -->
<div class="header">
    <ul class="nav"></ul>
</div>

<!-- 主体部分 -->
<div class="main">
    <!-- 文章 -->
    <div class="article"></div>
    <!-- 侧边栏 -->
    <div class="aside"></div>
</div>

<!-- 底部 -->
<div class="footer">

</div>
```

**H5 的经典网页布局**

```html
<!-- 头部 -->
<header>
    <ul class="nav"></ul>
</header>

<!-- 主体部分 -->
<div class="main">
    <!-- 文章 -->
    <article></article>
    <!-- 侧边栏 -->
    <aside></aside>
</div>

<!-- 底部 -->
<footer>

</footer>
```

## H5 新增的语义标签

- `<section>` 表示区块

- `<article>` 表示文章。如文章、评论、帖子、博客

- `<header>` 表示页眉

- `<footer>` 表示页脚

- `<nav>` 表示导航

- `<aside>` 表示侧边栏。如文章的侧栏

- `<figure>` 表示媒介内容分组。

- `<mark>` 表示标记 (用得少)

- `<progress>` 表示进度 (用得少)

- `<time>` 表示日期

### 兼容性处理

IE8 及以下版本的浏览器不支持 H5 和 CSS3。解决办法：引入`html5shiv.js`文件。

引入时，需要做if判断，具体代码如下：

```html
    <!--  条件注释 只有ie能够识别-->

    <!--[if lte ie 8]>
        <script src="html5shiv.min.js"></script>
    <![endif]-->
```

上方代码是**条件注释**：虽然是注释，但是IE浏览器可以识别出来。解释一下：

- l：less 更小

- t：than 比

- e：equal等于

- g：great 更大


PS:我们在测试 IE 浏览器的兼容的时候，可以使用软件 ietest，模拟IE6-IE11。


在不支持HTML5新标签的浏览器，会将这些新的标签解析成行内元素(inline)对待，所以我们只需要将其转换成块元素(block)即可使用。

但是在IE9版本以下，并不能正常解析这些新标签，但是可以识别通过document.createElement('tagName')创建的自定义标签。于是我们的解决方案就是：将HTML5的新标签全部通过document.createElement('tagName')来创建一遍，这样IE低版本也能正常解析HTML5新标签了。

当然，在实际开发中我们更多采用的办法是：检测IE浏览器的版本，来加载第三方的JS库来解决兼容问题（如上方代码所示）。

## H5 的表单

- `email` 只能输入email格式。自动带有验证功能。
- `tel` 手机号码。
- `url` 只能输入url格式。
- `number` 只能输入数字。
- `search` 搜索框
- `range` 滑动条
- `color` 拾色器
- `time` 时间
- `date` 日期
- `datetime` 时间日期
- `month` 月份
- `week` 星期

### 表单元素

1. datalist

   ```html
   <input type="text" list="myData">
   <datalist id="myData">
       <option>本科</option>
       <option>研究生</option>
       <option>不明</option>
   </datalist>
   ```

2. keygen

   keygen 元素是密钥对生成器（key-pair generator）。

   当提交表单时，会生成两个键：一个公钥，一个私钥。

   私钥（private key）存储于客户端，公钥（public key）则被发送到服务器。

   公钥可用于之后验证用户的客户端证书（client certificate）。

3. meter

   - low：低于该值后警告
   - high：高于该值后警告
   - value：当前值
   - max：最大值
   - min：最小值。

### 表单属性

- `placeholder` 占位符（提示文字）

- `autofocus` 自动获取焦点

- `multiple` 文件上传多选或多个邮箱地址

- `autocomplete` 自动完成（填充的）。on 开启（默认），off 取消。用于表单元素，也可用于表单自身(on/off)

- `form` 指定表单项属于哪个form，处理复杂表单时会需要

- `novalidate` 关闭默认的验证功能（只能加给form）

- `required` 表示必填项

- `pattern` 自定义正则，验证表单

### 表单事件

- `oninput()`：用户输入内容时触发，可用于输入字数统计。

- `oninvalid()`：验证不通过时触发。比如，如果验证不通过时，想弹出一段提示文字，就可以用到它。

## 多媒体

在HTML5之前，在网页上播放音频/视频的通用方法是利用Flash来播放。但是大多情况下，并非所有用户的浏览器都安装了Flash插件，由此使得音频、视频播放的处理变得非常复杂；并且移动设备的浏览器并不支持Flash插件。

### 音频

```html
<audio src="music/yinyue.mp3" autoplay controls> </audio>
```

- `autoplay` 自动播放。写成`autoplay` 或者 `autoplay = ""`，都可以。

- `controls` 控制条。（建议把这个选项写上，不然都看不到控件在哪里）

- `loop` 循环播放。

- `preload` 预加载 同时设置 autoplay 时，此属性将失效。

**兼容性写法**

```html
<!--推荐的兼容写法：-->
<audio controls loop>
    <source src="music/yinyue.mp3"/>
    <source src="music/yinyue.ogg"/>
    <source src="music/yinyue.wav"/>
    抱歉，你的浏览器暂不支持此音频格式
</audio>
```

### 视频

```html
<video src="video/movie.mp4" controls autoplay></video>
```

- `autoplay` 自动播放。写成`autoplay` 或者 `autoplay = ""`，都可以。

- `controls` 控制条。（建议把这个选项写上，不然都看不到控件在哪里）

- `loop` 循环播放。

- `preload` 预加载 同时设置 autoplay 时，此属性将失效。

- `width`：设置播放窗口宽度。

- `height`：设置播放窗口的高度。

**兼容性写法**

```html
<!--<video src="video/movie.mp4" controls  autoplay ></video>-->
<!--  行内块 display:inline-block -->
<video controls autoplay>
    <source src="video/movie.mp4"/>
    <source src="video/movie.ogg"/>
    <source src="video/movie.webm"/>
    抱歉，不支持此视频
</video>
```

## DOM 操作

### 获取元素

- `document.querySelector("selector")` 通过CSS选择器获取符合条件的第一个元素。

- `document.querySelectorAll("selector")`  通过CSS选择器获取符合条件的所有元素，以类数组形式存在。

### 类名操作

- `Node.classList.add("class")` 添加class
- `Node.classList.remove("class")` 移除class
- `Node.classList.toggle("class")` 切换class，有则移除，无则添加
- `Node.classList.contains("class")` 检测是否存在class

### 自定义属性

H5可以直接在标签里添加自定义属性，**但必须以 `data-` 开头**。

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<!-- 给标签添加自定义属性 必须以data-开头 -->
<div class="box" title="盒子" data-my-name="smyhvae" data-content="我是一个div">div</div>
<script>
    var box = document.querySelector('.box');

    //自定义的属性 需要通过 dateset[]方式来获取
    console.log(box.dataset["content"]);  //打印结果：我是一个div
    console.log(box.dataset["myName"]);    //打印结果：smyhvae

    //设置自定义属性的值
    var num = 100;
    num.index = 10;
    box.index = 100;
    box.dataset["content"] = "aaaa";

</script>
</body>
</html>
```

## 拖拽

在HTML5的规范中，我们可以通过为元素增加 `draggable="true"` 来设置此元素是否可以进行拖拽操作，其中图片、链接默认是开启拖拽的。

**拖拽元素的事件监听**

- `ondragstart`	当拖拽开始时调用
- `ondragleave`	当**鼠标离开拖拽元素时**调用
- `ondragend`	     当拖拽结束时调用
- `ondrag` 		       整个拖拽过程都会调用

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>EthanLoo's</title>
  </head>
  <body>
    <img
      class="image"
      height="200"
      src="https://cdn.ethanloo.top/img/20201221150756.png"
    />
  </body>
</html>

<script>
  var image = document.querySelector(".image");
  image.ondrag = function () {
    console.log("666");
  };
</script>

```



如果把元素 A 拖拽到元素 B 里，那么元素 B 就是**目标元素**，页面中任何一个元素都可以成为目标元素

**目标元素的事件监听**

- `ondragenter`	当拖拽元素进入时调用

- `ondragover`	当拖拽元素停留在目标元素上时，就会连续一直触发（不管拖拽元素此时是移动还是不动的状态）

- `ondrop`		当在目标元素上松开鼠标时调用

- `ondragleave`	当鼠标离开目标元素时调用

## 历史

界面上的所有JS操作不会被浏览器记住，就无法回到之前的状态。

在HTML5中可以通过 `window.history` 操作访问历史状态，让一个页面可以有多个历史状态

`window.history`对象可以让我们管理历史记录，可用于单页面应用，Single Page Application，可以无刷新改变网页内容。

- window.history.forward(); // 前进

- window.history.back(); // 后退

- window.history.go(); // 刷新

- window.history.go(n); //n=1 表示前进；n=-1 后退；n=0s 刷新。如果移动的位置超出了访问历史的边界，会静默失败，但不会报错。

- 通过JS可以加入一个访问状态

- history.pushState; //放入历史中的状态数据, 设置title(现在浏览器不支持改变历史状态)

## 地理定位

在HTML规范中，增加了获取用户地理信息的API，这样使得我们可以基于用户位置开发互联网应用，即**基于位置服务 LBS** (Location Base Service)。

**获取地理信息的方式**

1. IP地址
2. 三维地址
   - GPS
   - Wi-Fi
   - 手机信号
3. 用户自定义数据

浏览器会**自动以最优方式**去获取用户地理信息

### API

- 获取当前地理信息
  - `navigator.getCurrentPosition(successCallback, errorCallback, options)` 
- 重复获取当前地理信息
  - `navigator.watchPosition(successCallback, errorCallback, options)` 

1. 当成功获取地理信息后，会调用succssCallback，并返回一个包含位置信息的对象position：（Coords即坐标）
   - position.coords.latitude纬度
   - position.coords.longitude经度

2. 当获取地理信息失败后，会调用errorCallback，并返回错误信息error。

3. 可选参数 options 对象可以调整位置信息数据收集方式

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>EthanLoo's</title>
  </head>
  <body>
  </body>
</html>

<script>
  if(navigator.geolocation){
    // 尝试获取用户的位置
    navigator.geolocation.getCurrentPosition(successCallback,errorCallback);
  }else{
    // 浏览器不支持
    console.log("fail");
  }

  function successCallback(position){
    // 获取位置成功时的回调函数
    var wd = position.coords.latitude;
    var jd = position.coords.longtitude;
    console.log("纬度:"+wd+",经度:"+jd);
  }
  function errorCallback(error){
    // 获取位置失败时的回调函数
    console.log(error);
    console.log("no");
  }
</script>
```

### 全屏

HTML5规范允许用户自定义网页上**任一元素**全屏显示。

```javascript
requestFullscreen()   // 让元素开启全屏显示
cancleFullscreen()    // 让元素关闭全屏显示
document.fullScreen   // 检测是否全屏
```

## Web 存储

传统是以 `document.cookie` 来进行存储，大小只有 4K，且解析复杂。

### H5 的两种存储方式

1. `window.sessionStorage` 会话存储

   - 保存在内存

   - **生命周期**为关闭浏览器窗口。也就是说，当窗口关闭时数据销毁。
   - 在同一个窗口下数据可以共享。

2. `window.localStorage` 本地存储
   - 有可能保存在浏览器内存里，有可能在硬盘里。
   - 永久生效，除非手动删除（比如清理垃圾的时候）。
   - 可以多窗口共享。

### Web 存储特性

1. 设置、读取方便
2. 容量大（sessionStorage 约5M，localStorage 约20M）
3. 只能存储字符串，可以将对象 JSON.stringfy() 编码后存储

### 常用 API

```javascript
setItem(key, value); // 设置存储内容
getItem(key); // 读取存储内容
removeItem(key); // 删除存储内容
clear(); // 清空所有存储
key(n); // 根据索引值来获取内容
```

Session 举例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>EthanLoo's</title>
  </head>
  <body>
    <input type="text" />
    <button>sesssion存储</button>
    <button>sesssion获取</button>
    <script>
      var txt = document.querySelector("input");
      var btns = document.querySelectorAll("button");
      btns[0].onclick = function () {
        window.sessionStorage.setItem("userName", txt.value);
        window.sessionStorage.setItem("pwd", "2333");
        window.sessionStorage.setItem("age", 21);
      };
      btns[1].onclick = function () {
        txt.value = window.sessionStorage.getItem("pwd");
      };
    </script>
  </body>
</html>
```

LocalStorage 举例 （可以用来记录登录名和密码）

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>EthanLoo's</title>
  </head>
  <body>
    <input type="text" />
    <button>localStorage存储</button>
    <button>localStorage获取</button>
    <script>
      var txt = document.querySelector("input");
      var btns = document.querySelectorAll("button");
      btns[0].onclick = function () {
        window.localStorage.setItem("userName", txt.value);
        window.localStorage.setItem("pwd", "2333");
        window.localStorage.setItem("age", 21);
      };
      btns[1].onclick = function () {
        txt.value = window.localStorage.getItem("pwd");
      };
    </script>
  </body>
</html>
```

## 网络状态

我们可以通过 `window.onLine` 来检测用户当前的网络状况，返回一个布尔值。另外：

- `window.online`：用户网络连接时被调用。

- `window.offline`：用户网络断开时被调用（拔掉网线或者禁用以太网）。

网络状态监听的代码举例：

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<script>
    window.addEventListener('online', function () {
        alert('网络连接建立！');
    });

    window.addEventListener('offline', function () {
        alert('网络连接断开！');
    })
</script>
</body>
</html>
```

## 应用缓存

HTML5 中我们可以轻松的构建一个离线（无网络状态）应用，只需要创建一个 `cache manifest` 缓存清单文件。

**优点**

1. 可配置需要缓存的资源
2. 网络无连接时应用仍可用
3. 本地读取缓存资源，提升访问速度，增强用户体验
4. 减少请求，缓解服务器负担

### cache manifest

缓存清单文件中列出了浏览器应缓存，以供离线访问的资源。

**内容**

1. 顶行写 `CACHE MANIFEST`
2. `CACHE:` 换行后指定需要缓存的静态资源，如 css, image, js
3. `NETWORK:` 换行后指定需要在线访问的资源
4. `FALLBACK:` 换行后指定当被缓存的文件找不到时用的备用资源

```bash
CACHE MANIFEST

#要缓存的文件
CACHE:
    images/img1.jpg
    images/img2.jpg


#指定必须联网才能访问的文件
NETWORK:
     images/img3.jpg
     images/img4.jpg


#当前页面无法访问是回退的页面
FALLBACK:
    404.html

```

