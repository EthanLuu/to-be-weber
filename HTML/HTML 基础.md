## 开发环境

- 编译器：VSC
  - 插件：beautify（格式化代码），Live Sever（动态编译和调试HTML页面）
- 浏览器：Chrome

## 初识 HTML

打开 VSC，新建一个 `test.html`文件。

在文件里输入，`html:5`，自动生成了 html 页面的骨架。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>
```

### html骨架标签分类

针对骨架里的一些标签进行说明。

| 标签名             |    定义    | 说明                                                    |
| ------------------ | :--------: | :------------------------------------------------------ |
| `<html></html>`    |  HTML标签  | 页面中最大的标签，我们成为根标签                        |
| `<head></head>`    | 文档的头部 | 注意在head标签中我们必须要设置的标签是title             |
| `<titile></title>` | 文档的标题 | 让页面拥有一个属于自己的网页标题                        |
| `<body></body>`    | 文档的主体 | 元素包含文档的所有内容，页面内容 基本都是放到body里面的 |

### 文档声明头 DOCTYPE

```html
<!DOCTYPE html>
```

HTML页面的第一行，就是文档的声明头，即 DocType Declaration，DTD。

现在流行使用的就是我们生成的这个 DTD ，即 HTML5 的规范。

原本的大规范有 HTML4.01 和 XHTML1.0 ，两者相比，后者会更加严格一些。

### 页面语言 lang

下面这行标签，用于指定页面的语言类型：

```html
<html lang="en">
```

最常见的语言类型有两种：

- en：定义页面语言为英语。
- zh-CN：定义页面语言为中文。

### `<head>` 标签

填充一下骨架，让它变得完整。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <meta name="Author" content="EthanLuu" />
    <meta name="Keywords" content="博客,前端" />
    <meta name="Description" content="好好学习，好好吃饭，好好睡觉。" />
    <title>EthanLoo's</title>
  </head>
  <body></body>
</html>
```

面试题：

- 问：网页的head标签里面，表示的是页面的配置，有什么配置？
- 答：字符集、关键词、页面描述、页面标题、IE适配、视口、iPhone小图标等等。

**头标签内部的常见标签**

 - `<title>`：指定整个网页的标题，在浏览器最上方显示。
 - `<base>`：为页面上的所有链接规定默认地址或默认目标。
 - `<meta>`：提供有关页面的基本信息
 - `<body>`：用于定义HTML文档所要显示的内容，也称为主体标签。我们所写的代码必须放在此标签內。
 - `<link>`：定义文档与外部资源的关系。

**meta 标签**

meta 的翻译是 **元**，也就是元信息，即基本的配置信息。

常用的 meta 标签有

1. 字符集 charset

   规定了浏览器编码的字符集，常用的字符集为 UTF-8，如果网页只有中文，可以设置成gb2312，节省大约4KB。

   ```html
   <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
   ```

2. 视口 viewport

   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

   `width=device-width` ：表示视口宽度等于屏幕宽度。

3. 关键词 keywords

   用来告诉搜索引擎，网站是干嘛的，提高搜索的命中率。
   
   ```html
   <meta name="Keywords" content="博客,前端" />
   ```

4. 页面描述 Description

   通过百度的搜索结果里，会显示的内容。这个技术叫做 SEO (search engine opimization，搜索引擎优化)

   ```html
   <meta name="Description" content="好好学习，好好吃饭，好好睡觉。" />
   ```

   ![image-20201221184530189](https://cdn.ethanloo.top/img/20201221184629.png)

5. 用于跳转的meta标签

   3秒之后跳转到百度页面。

   ```html
   <meta http-equiv="refresh" content="3;http://www.baidu.com">
   ```

**title标签**

用于设置网页的标题，也是SEO的一种方式。

```html
<title>EthanLoo's</title>
```

**base标签**

用于指定基础的路径，指定之后，所有的 a 链接都是以这个路径为基准。

```html
<base href="/">
```

### `<body>` 标签

`<body>`标签的属性有：

 - `bgcolor`：设置整个网页的背景颜色。
 - `background`：设置整个网页的背景图片。
 - `text`：设置网页中的文本颜色。
 - `leftmargin`：网页的左边距。IE浏览器默认是8个像素。
 - `topmargin`：网页的上边距。
 - `rightmargin`：网页的右边距。
 - `bottommargin`：网页的下边距。

### HTML 规范

- HTML 不区分大小写，但 HTML 的标签名、类名、标签属性、大部分属性值建议统一用小写。

- 所有标签必须闭合
  - 双标签：`<span></span>`
  - 单标签：`<br>` 建议写成 `<br />`   `<hr>` 建议转成 `<hr />`，还有`<img src=“URL” />`
- HTML 对换行不敏感，对 tab 不敏感
  - HTML 中所有的文字之间，如果有空格，换行，tab，都会被折叠成一个空格

## HTML 排版标签

- `<h1>`

- `<p>`

- `<hr />`

- `<br />`

- `<div>`

- `<span>`

- `<center>`

- `<pre>`

### 标题标签

`<h1>`到`<h6>`，从大到小，具有align属性，属性可以是left, center, right

```html
<body>
  <h1>H1 EthanLoo</h1>
  <h2>H2 EthanLoo</h2>
  <h3>H3 EthanLoo</h3>
  <h4>H4 EthanLoo</h4>
  <h5>H5 EthanLoo</h5>
  <h6>H6 EthanLoo</h6>
</body>
```

![image-20201221190312162](https://cdn.ethanloo.top/img/20201221190312.png)

> 有点像在测视力

### HTML 注释

HTML 注释的格式如下

```html
<!-- 我是 html 注释  -->
```

### `<p>` 段落标签

用来把文档分割成若干段落。

```html
<p>Hello</p>
<p>my friend</p>
```

![image-20201221190813106](https://cdn.ethanloo.top/img/20201221190813.png)

如果加上了对应的 align 属性

```html
<p align="center">Hello</p>
<p>my friend</p>
```

![image-20201221190945064](https://cdn.ethanloo.top/img/20201221190945.png)

HTML 标签是分等级的，HTML把所有的标签分为两种

1. **文本级标签**：p、span、a、b、i、u、em。文本级标签里只能放**文字、图片、表单元素**。（a标签里不能放a和input）
2. **容器级标签**：div、h系列、li、dt、dd。容器级标签里可以放置任何东西。

✨**p**是**文本级标签**，只能放文字，图片，表单元素。

**错误写法**

```html
<p>
    我是一个小段落
	<h1>我是一级标题</h1>
</p>
```

### `<hr />` 水平线标签 

就和标签名一样，用来画一个水平线分隔文档。

```html
<p>牛郎</p>
<hr />
<p>织女</p>
```

![image-20201221191753310](https://cdn.ethanloo.top/img/20201221191753.png)

### `<br /> `换行标签

强制换行符

```html
<body>
  不要跑！<br /> 886!
</body>
```

![image-20201221192032213](https://cdn.ethanloo.top/img/20201221192032.png)

### `<div>` 和 `<span>` 标签

- **div标签**：可以把标签中的内容分割为独立的区块。必须单独占据一行。

- **span标签**：和div的作用一致，但不换行。

这两个元素是专门为定义 css 而生的。

两者区别在于，div 标签是容器级标签，可以放任何东西；span 标签是文本级的标签，之恩呢官方文字，图片和表单元素。

- div 举例

  ```html
  <div class="header">
  	<div class="logo"></div>
  	<div class="nav"></div>
  </div>
  <div class="content">
  	<div class="guanggao"></div>
  	<div class="dongxi"></div>
  </div>
  <div class="footer"></div>
  ```

  这种模式就叫做 `div+css`，div 标签负责布局，结构，分块，css 负责样式。

- span 举例

  ```html
  <p>
  	简介
  	<span>
  		<a href="">详细信息</a>
  		<a href="">购买</a>
  	</span>
  </p>
  ```

### `<center>` 内容居中标签

此时的 center 代表是一个标签，而不是一个属性值。

标签里的内容会在浏览器居中。

HTML5 中不推荐使用该标签，建议使用 css 布局来实现。

## HTML 字体标签

### 特殊字符

如果要直接在网页中显示`<p>`这个字符串，直接输入这三个字符是不行的，需要借助特殊字符（转义字符）来实现。

```html
<body>
    教练，我想打印&lt;p&gt;标签
</body>
```

![image-20201221193459238](https://cdn.ethanloo.top/img/20201221193459.png)

| 特殊字符 | 描述           | 字符的代码 |
| :------- | :------------- | :--------- |
|          | 空格符         | `&nbsp;`   |
| <        | 小于号         | `&lt;`     |
| >        | 大于号         | `&gt;`     |
| &        | 和号           | `&amp;`    |
| ￥       | 人民币         | `&yen;`    |
| ©        | 版权           | `&copy;`   |
| ®        | 注册商标       | `&reg;`    |
| °        | 摄氏度         | `&deg;`    |
| ±        | 正负号         | `&plusmn;` |
| ×        | 乘号           | `&times;`  |
| ÷        | 除号           | `&divide;` |
| ²        | 平方2（上标2） | `&sup2;`   |
| ³        | 立方3（上标3） | `&sup3;`   |

### 下划线 删除线 斜体

- `<u>`：下划线标记

- `<s>`或`<del>`：中划线标记（删除线）

- `<i>`或`<em>`：斜体标记

### `<sup>` 上标 `<sub>` 下标

```html
O<sup>2</sup>    5<sub>3</sub>
```

![image-20201221193903562](https://cdn.ethanloo.top/img/20201221193903.png)

## 超链接标签

1. 外部链接

   ```html
   <a href="02页面.html">点击进入另外一个文件</a>
   ```

2. 锚链接

   作用是在本页面或者其他页面的不同位置进行跳转。

   ```html
   <a name="name1">顶部</a>
   ...
   <a href="#name1">回到顶部</a>
   ```

3. 邮件链接

   ```html
   <a href="mailto:952792901@qq.com">点击进入我的邮箱</a>
   ```

### 超链接的属性

- `href`：目标URL。
- `title`：悬停文本。
- `name`：主要用于设置一个锚点的名称。
- `target`：告诉浏览器用什么方式来打开目标页面。
  - `_self`：在同一个网页中显示（默认值）
  - `_blank`：**在新的窗口中打开**。
  - `_parent`：在父窗口中显示
  - `_top`：在顶级窗口中显示

### 备注

1. 分清楚 img 标签和 a 标签的各自的属性

   ```html
   <img src="1.jpg" />
   <a href="1.html"></a>
   ```

2. a 是一个文本级标签

   确保是 p 包裹的 a

   ```html
   <p>
   	<a href="www.ethanloo.top">点我</a>
   </p>
   ```

## 图片标签

### 相对路径写法

```html
<!-- 当前目录中的图片 -->
<img src="2.jpg">
<img src=".\2.jpg">

<!-- 上一级目录中的图片 -->
<img src="..\2.jpg">

<!-- html页面所在文件夹中有一个并列的文件夹images -->
<img src="images/1.jpg">
```

**面试题**

![](https://cdn.ethanloo.top/img/20201222224939.png)

问题：

- 如果想在index.html中插入1.png，那么对应的img语句是？

答案：

```html
<img src="../../photo/1.png" />
```

### 绝对路径写法

（1）以盘符开始的绝对路径。举例：

```html
<img src="C:\Users\xxx\Desktop\html\images\1.jpg">
```

（2）网络路径。举例：

```html
<img src="https://cdn.ethanloo.top/img/20201222224939.png">
```

### 两种路径对比

**相对路径的好处**

- 站点不管拷贝到哪里，文件和图片的相对路径关系都是不变的

**相对路径的前提**

- 网页文件和你的图片，必须在一个服务器上

**面试题**

问题：网页在C盘，图片在D盘，能否插入

答案：用相对路径不能，用绝对路径也不能。

> 可以使用file://来插入，但是这种方法，没有任何意义！因为服务器上没有所谓c盘、d盘。
>
> 下面的方法是行的，但是没有任何工程上的意义，这是因为服务器没有盘符，linux系统没有盘符：
>
> ```html
> <img src="file://C:\Users\xxx\Pictures\1.jpg" alt="" />
> ```
>

### img 标签的属性

- `width`：图像的宽度。

- `height`：图像的高度。

- `alt`：当图片不可用（无法显示）的时候，代替图片显示的内容。

- `title`：**提示性文本**。鼠标悬停时出现的文本。

- `align`：**图片和周围文字的相对位置**。属性取值可以是：bottom（默认）、center、top、left、right。

## HTML 常用标签

### 列表标签

#### 无序列表 `<ul>`

无序列表中的每一项是`<li>`

```html
<ul>
	<li>默认1</li>
	<li>默认2</li>
	<li>默认3</li>
</ul>
```

> li 标签不能单独存在，必须包裹在 ul 内。
>
> ul 的作用并不是给文字加小圆点，而是**增加无序列表的语义**

- 属性
  - `type="属性值"`。
  - 属性值可以选： `disc`(实心原点，默认)，`square`(实心方点)，`circle`(空心圆)。

- 常用场景：导航条
- `<li>`是一个容器级标签，什么都能放

#### 有序列表 `<ol>`

有序列表里面的每一项是`<li>`

```html
<ol >
	<li>呵呵哒1</li>
	<li>呵呵哒2</li>
	<li>呵呵哒3</li>
</ol>
```

- 属性
  - `type="属性值"`。
  - 属性值可以是：1(阿拉伯数字，默认)、a、A、i、I。
  - `start`属性表示`从几开始`。

#### 定义列表 `<dl>`

dl的子元素只能是dt和dd。

 - `<dt>`：definition title 列表的标题，这个标签是必须的
 - `<dd>`：definition description 列表的列表项，如果不需要它，可以不加

```html
<dl>
    <dt>1.</dt>
    <dd>好好吃饭</dd>
    <dd>好好睡觉</dd>

    <dt>2.</dt>
    <dd>好好学习</dd>
</dl>
```

### 表格标签

表格标签用`<table>`表示。
一个表格`<table>`是由每行`<tr>`组成的，每行是由每个单元格`<td>`组成的。

#### 单元格的合并

单元格的属性

- `colspan`：横向合并。例如`colspan="2"`表示当前单元格在水平方向上要占据两个单元格的位置。
- `rowspan`：纵向合并。例如`rowspan="2"`表示当前单元格在垂直方向上要占据两个单元格的位置。

#### 表格的`<thead>`标签、`<tbody>`标签、`<tfoot>`标签

- 1、如果写了，那么这三个部分的**代码顺序可以任意**，浏览器显示的时候还是按照thead、tbody、tfoot的顺序依次来显示内容。如果不写thead、tbody、tfoot，那么浏览器解析并显示表格内容的时候是从按照代码的从上到下的顺序来显示。
- 2、当表格非常大内容非常多的时候，如果用thead、tbody、tfoot标签的话，那么**数据可以边获取边显示**。如果不写，则必须等表格的内容全部从服务器获取完成才能显示出来。

### 内嵌框架

内嵌框架用`<iframe>`表示。`<iframe>`是`<body>`的子标记。

**属性：**

 - `src="subframe/the_second.html"`：内嵌的那个页面
 - `width=800`：宽度
 - `height=“150`：高度
 - `scrolling="no"`：是否需要滚动条。默认值是true。
 - `name="mainFrame"`：窗口名称。公有属性。

```html
<body>
  <a href="https://www.ethanloo.top" target="myframe">主页</a><br />
  <a href="https://blog.ethanloo.top" target="myframe">博客</a><br />

  <iframe
    src="www.ethanloo.top"
    width="500"
    height="400"
    name="myframe"
  ></iframe>
  <br />
  ethanloo's
</body>
```

<img src="https://cdn.ethanloo.top/img/20201222231800.png" alt="image-20201222231759603" style="zoom:50%;" />

### 表单标签

`<form>` **属性**

 - `name`：表单的名称，用于JS来操作或控制表单时使用；
 - `id`：表单的名称，用于JS来操作或控制表单时使用；
 - `action`：指定表单数据的处理程序，一般是PHP，如：`action=“login.php”`
 - `method`：表单数据的提交方式，一般取值：get(默认)和post

#### `<input>` 输入标签

```html
<input type="text" />
```

- `type`属性
  - `text`（默认）
  - `password`：密码类型
  - `radio`：单选按钮，名字相同的按钮作为一组进行单选（单选按钮，天生是不能互斥的，如果想互斥，必须要有相同的name属性。name就是“名字”。
  - `checkbox`：多选按钮，**name 属性值相同的按钮**作为一组进行选择。
  - `checked`：将单选按钮或多选按钮默认处于选中状态。当`<input>`标签设置为`type="radio"`或者`type=checkbox`时，可以用这个属性。属性值也是checked，可以省略。
  - `hidden`：隐藏框，在表单中包含不希望用户看见的信息
  - `button`：普通按钮，结合js代码进行使用。
  - `submit`：提交按钮，传送当前表单的数据给服务器或其他程序处理。这个按钮不需要写value自动就会有“提交”文字。这个按钮真的有提交功能。点击按钮后，这个表单就会被提交到form标签的action属性中指定的那个页面中去。
  - `reset`：重置按钮，清空当前表单的内容，并设置为最初的默认值
  - `image`：图片按钮，和提交按钮的功能完全一致，只不过图片按钮可以显示图片。
  - `file`：文件选择框。
- **`value="内容"`**：文本框里的默认内容（已经被填好了的）
 - `size="50"`：表示文本框内可以显示**五十个字符**。一个英文或一个中文都算一个字符。
   注意**size属性值的单位不是像素哦**。

 - `readonly`：文本框只读，不能编辑。因为它的属性值也是readonly，所以属性值可以不写。
   用了这个属性之后，在google浏览器中，光标点不进去；在IE浏览器中，光标可以点进去，但是文字不能编辑。

 - `disabled`：文本框只读，不能编辑，光标点不进去。属性值可以不写。

#### `<select>` 下拉列表标签

`<select>`标签里面的每一项用`<option>`表示。

**`<select>`标签的属性**

- `multiple`：可以对下拉列表中的选项进行多选。属性值为 multiple，也可以没有属性值。也就是说，既可以写成 `multiple=""`，也可以写成`multiple="multiple"`。
- `size="3"`：如果属性值大于1，则列表为滚动视图。默认属性值为1，即下拉视图。

**`<option>`标签的属性**

 - `selected`：预选中。没有属性值。

#### `<textarea>` 多行文本输入框

**属性**

 - `rows="4"`：指定文本区域的行数。
 - `cols="20"`：指定文本区域的列数。
 - `readonly`：只读。

#### `<label>` 标签

```html
<input type="radio" name="sex" /> 男
<input type="radio" name="sex" /> 女
```

如果写成这样，那在点击 “男”这个字的时候，并不能选中选项。

解决方法是利用 label 的 for 属性，把 label 和 input 绑定起来。

```html
<input type="radio" name="sex" id="nan" /> <label for="nan">男</label>
<input type="radio" name="sex" id="nv"  /> <label for="nv">女</label>
```

### 多媒体标签

- `<bgsound>`标签：播放背景音乐

- `<embed>`标签：播放多媒体文件（音频、视频等）

- `<object>`标签：播放多媒体文件（音频、视频等）

- `<marquee>`：滚动字幕标签
