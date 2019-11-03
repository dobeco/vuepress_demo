---
title: 前端知识点一
date: 2019-03-15
tags: 
- 练习
categories:
- 练习
---

## 一、问答题

### 1. JS中的数据类型都有哪些？以及之间的区别？
分为基本数据集类型和引用类型，区别是：基本数据类型存储在栈内存中，应用类型存储在堆内存中

基本数据类型:
- Undefined
- Null
- Number
- String
- Boolean
- Symbol

引用类型：
- Object
- Function
- Array
- RegExp
- Date

### 2. 检测数据类型的四种方式？

- typeof 用于检测基本数据类型
- instanceof
- Object.prototype.call()
- constructor
- isArray()

### 3. JS中创建变量的集几种常用方式？

var let const import 
### 4. 常用浏览器的内核都有哪些？

- gecko，代表浏览器FireFox
- Presto，代表浏览器Opera
- WebKit，代表浏览器Safari
- Blink，代表浏览器Chrome
- Trident，代表浏览器IE、360安全浏览器、QQ浏览器

## 二、练习题
### 1. 写出下面程序输出几次，结果分别是多少？

```js
for (var i = 0; i < 10; i+=2) {
  if(i<=5) {
    i++;
    continue;
  } else {
    i+=3;
    break;
  }
  console.log(i); // 9
}
console.log(i); // undefined

```

### 2. 写出下面结果输出的答案 （阿里面试题）

```js
let a = {
    n: 1
};
let b = a;
a.x = a = {
    n: 2
};
console.log(a.x);
console.log(b);
```

### 3. 分别写出下列表达式输出的结果 （腾讯面试题）

```js
var a = 'abc' + 123 + 456;
var b = '456' - '123';
var c = 100 + true + 21.2 + null + undefined + "Tencent" + [] + null + 9 + false;
console.log(a,b,c);
```

### 4. 写出下列代码的输出结果 （腾讯面试题）

```js
var str = 'abc123';
var num = parseInt(str);
if (num == NaN) {
    alert(NaN);
} else if (num == 123) {
    alert(123);
} else if (typeof num == 'number') {
    alert('number');
} else {
    alert('str');
}
```

### 5. 写出下列代码的输出结果 （腾讯面试题）

```js
var a = 0;
var b = a;
b++;
alert(a)
var o = {};
o.a = 0;
var b = o;
b.a = 10;
alert(o.a)
```

### 6. 能输出”1”的有哪些？

```js
A.alert(1)          
B.console.log(parseInt(1.3))              
C.console.log(1)  
D.console.log(isNaN(1))   
E.console.log(parseInt("1"))
```

### 7. 下面结果是”undefined”的是

```js
A. console.log(alert(1))                
B. typeof undefined
C. console.log(parseInt(undefined))      
D. isNaN(undefined)
```

### 8. 下面结果能得到true的是

```js
A. isNaN(null)  
B. isNaN(parseInt(null))  
C. Number(null)  
D. parseFloat(null)
```

### 9. 输出下面程序的结果

```js
parseInt("")
Number("")
isNaN("")
parseInt(null)
Number(null)
isNaN(nul)
parseInt("12px")  
Number("12px")
isNaN("12px")
```

### 10. 下面程序输出的结果

```js
if (isNaN(NaN) == "") {
    console.log("Hello")
} else {
    console.log("World")
}
```

### 11. 下面程序输出的结果

```js
let x = [1, 2, 3];
let y = x;
let z = [4, 5, 6];
y[0] = 10;
y = z;
z[1] = 20;
x[2] = z = 30;
console.log(x, y, z);
```

### 12. 输出下面程序运行的结果

```js


for (var i = 0; i < 10; i++) {
    console.log(i);
    break;
}
console.log(i);

```

```js
for (var i = 0; i < 10; i++) {
    continue;
    console.log(i);
}
console.log(i);
```

```js
for (var i = 1; i <= 10; i += 2) {
    if (i <= 5) {
        i++;
        continue;
    } else {
        i -= 2;
        break;
    }
    i--;
    console.log(i);
}
console.log(i);
```

```js

for (var i = 3; i < 12; i++) {
    if (i < 3) {
        i++;
        break;
    }
    if (i > 9) {
        i += 2;
        continue;
    }
    i--;
}
console.log(i);
```

### 13. 把下面的程序改写成为三元运算符，并算出结果

```js

let a = 12;
if (a >= 0 && a <= 20) {
    // a%2 读 a膜2：计算a除以2的余数，例如 3%2=1 4%2=0  （切记这个知识，后面需要用到）
    if (a % 2 === 0) {
        a += 2;
    }
} else {
    a -= 2;
}
console.log(a);
```

### 14. 算出输出的结果

```js

let a = typeof typeof typeof [12,23];
console.log(a);

```

### 15. 算出输出的结果

```js

let a = '10';
a == 10 ? a++ : a--;
console.log(a);
​
let b = '10';
switch (b) {
    case 10:
        b++;
        break;
    default:
        b--;
}
console.log(b);
```

### 16. 扩展基础数据类型练习

```js
!(!"Number(undefined)");
​
isNaN(parseInt(new Date())) + Number([1]) + typeof undefined;
​
Boolean(Number("")) + !isNaN(Number(null)) + Boolean("parseInt([])") + typeof !(null);
​
parseFloat("1.6px") + parseInt("1.2px") + typeof parseInt(null);
​
isNaN(Number(!!Number(parseInt("0.8"))));
​
console.log(1 + "2" + "2");
​
!typeof parseFloat("0");
​
Number("");
​
typeof "parseInt(null)" + 12 + !!Number(NaN);
​
!typeof (isNaN("")) + parseInt(NaN);
​
typeof !parseInt(null) + !isNaN(null);

```

## 三、JavaScript部分

### 1. call和apply的区别是什么，哪个性能更好一些？

call和apply都是Function上的原型方法，所有Function实例都可以调用这两个方法，用来改变this的指向。区别是传递参数方式不同，call是一个一个传参，apply是通过数组的方式传递参数。

```js
fn.call(obj, 10, 20, 30)
fn.apply(obj, [10, 20, 30])
```

传递参数超过3个的时候，call性能更好一些。所有后期开发的时候，使用call多一点

什么时候使用apply？请看下面这个例子：

```js
let arr = [10, 20, 30]
let obj = {};
function fn(x, y, z) { }
fn.apply(obj,arr)// x = 10 y = 2= z= 30
fn.call(obj,arr) // =>x[10,20,30] y=z=undefined 用call这样传递参数会把arr当成一个参数传递
fn.call(obj,...arr) // 可以使用ES6的展开运算符可以实现吧数组中的每一项依次传递给函数
```

通过上面的例子可以看出，apply能实现的call也可以实现

**自己实现性能测试**(只供参考)，任何的代码性能测试都是和测试的环境偶遇关系的，例如CPU、内存、GPU等电脑当前性能不会有相同的情况；不同浏览器也会导致性能上的不同。

1. console.time 可以测试出一段程序执行的时间

```js
console.time('A')
for(let i = 0; i<100000; i++) {}
console.timeEnd('A')
```
2. console.profile() 在你火狐浏览器当中安装fireBug可以功能精准地获取到当前程序每一个步骤所消耗的时间

### 2. 实现(5).add(3).minus(2)，使其输出结果为：6
考察知识点： 类和实例以及在原型上定义方法，并且能够进行链式写法的，也是面向对象最基础也是最核心的知识点。

```javascript
~function() {

   // 每一个方法执行完，都要返回Number这个类的实例，这样才可以继续调用Number类原型中的方法（链式写法）
  function check(n) {
    n = Number(n);
    return isNaN(n) ? 0: n;
  }
  function add(n) {
    return this + n;

  }
  function minus(n) {
    n = check(n)
    return this - n; 

  }

  /*
  // 高级写法
  ['add','minus'].forEach(function (item){
    Number.prototype[item] = eval(item)
  })
  */
  Number.prototype.add = add;
  Number.prototype.minus = minus;
}()
console.log((5).add(3).minus(2))
```

上面代码中，创建一个立即调用函数，函数内定义3个方法，然后挂载到Number原型上

check函数用于把传入的参数进行处理

### 3. 箭头函数与普通函数的区别是什么？构造函数可以使用new生成实例，那么箭头函数可以吗？为什么？

箭头函数与普通函数的区别：
- 箭头函数语法上比普通函数更加简洁（`ES6`中每一种函数都可以使用形参赋值和剩余云算符）
- 箭头函数没有自己的this，不能使用`call`与`apply`绑定`this`，它的`this`是继承函数所处上下文中`this`
- 箭头函数没有`arguments`参数，只能基于...arg获取传递的参数集合
- 箭头函数不能被new执行（因为：箭头函数没有this也没有prototype）

```js
// 普通函数写法
function fn(x) {
  return function (y) {
    return x + y;
    
  }
}
// 箭头函数写法
let fn = x => y => x + y;
```

```js
document.body.onclick = () => {
  // this: window 不是当亲操作的body了
}

document.body.onclick =funtion () {
  // this: body 
  arr.sort(function(a,b){
    // this: window 回调函数中this一般都是window
    return a - b;
  })
}
```



回调函数：把一个函数B作为实参传递给另一个函数A，函数A在执行的时候，可以把传递进来的函数B去执行（执行N次，可传值，可改变this）

```js
// JQ中的each方法
function eech(arr, callBack) {
  // => callBack: function(item, index) {}
  for( let i = 0; i< arr.length; i++) {
    let flag = callBack.call(arr, arr[i], i);
    // 接收回调函数返回的结果，如果是false，结束循环
    if (flag === false) {
      break;
    }
  }
}
each([10, 20, 30, 40], function (item, index) {
  // this: 原始操作数组
  if(index > 1) {
    return  false;
  }
})
```





### 4. 如何把一个字符串的大小取反（大写变小写，小写变大写），例如’AbC‘变成’aBc‘

```js

var str = 'Hello World'
str = str.replace(/[a-zA-Z]/g, res=> {
  return res.toUpperCase() === content ? res.toLowerCase() : res.toUpperCase()
})
console.log(str) // hELLO wORLD
```

### 5. 实现一个字符串匹配算法，从字符串S中，查找是否存在字符串T，若存在返回所在位置，不存在返回-1（如果不能基于indexOf/includes等内置方法，你会如何处理呢？）

```js


/*
    循环原始字符串中的每一项，让每一项从当前
    位置向后截取T.lengthComputable个字符，然后和T进行比较，如果
    不一样，继续循环；如果一样返回当前索引即可（循环结束）
  */
String.prototype.myIndexOf = function(T) { 
   let lenT = T.length;
   let lenS = this.length;
   let res = -1;
   if(lenT> lenS) { return -1}
   for (let i = 0; i <= lenS-lenT; i++) {
     if(this.substr(i, lenT) === T) {
       res = i;
       break;
     }
   }
   return res;
};
// 方法二
String.prototype.myIndexOf2 = function(T) { 
  let reg = new RegExp(T);
  let res = reg.exec(this);
  return res === null ? -1 : res.index;
}
let S = 'What are you doing?'
let T ='you'

console.log(S.myIndexOf2(T));

```

### 6. 输出下面代码的运行结果

```js
var a = {}, b = '123', c = 123;
a[b] = 'b'; // a = { 123: 'b'} 因为a["123"] 等于 a[123]
a[c] = 'c'; // a = { 123: 'c'} 覆盖了
console.log(a[b]) // c

```

```js
var a = {}, b = Symbol('123'), c = Symbol('123');
a[b] = 'b'; // a = {Symbol(123): 'b'}
a[c] = 'c'; // a = {Symbol(123): 'b', Symbol(123): 'c'}
console.log(a[b]) // b
```
上面例子中Symbol()为独一无二的值，所以b不等于c

```js
var a = {}, b = { key: '123'}, c = { key: '456'};
a[b] = 'b'; // b=> [object Object] a = {[object Object]: 'b'}
a[c] = 'c';  // c => [object Object] 属性名一样，所以后后赋值的覆盖前面的 a = {[object Object]: 'c'}
console.log(a[b]) // c
``` 
对象的属性名不能是一个对象

上面例子中把一个对象当做另一个对象的属性名，会先调用toString()方法把属性转换成字符串，然后进行赋值操作。 

转换步骤： 
- a[b] => b.toString() ="[object Object]"
- a[[object Object]] = 'b'
- a = { [object Object]: 'b'}

### 7. 在输入框中如何判断输入的是一个正确的网址？例如：用户输入一个字符串，验证是否符合URL网址的格式

1. 协议:// http/https/ftp
`
2. 域名 www. kbs.sprots. blog.

3. 请求路径 /index.html /dobeco/index.html /dobeco/

4. 问号传参 ?xxx=xxx&xxx=xxx

5. 哈希值 #xxx

```js
let str = 'http://cnblog.com/dobeco/';


let reg = /^(?:(http|https|ftp):\/\/)?((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(#.+)?$/i;
console.log(reg.exec(str));

```

### 8. 输出下面代码的运行结果

```js
function Foo() {
  Foo.a = function() {
    console.log(1)
  }
  this.a = function() { 
    console.log(2)
  }
}
Foo.prototype.a = function() { 
  console.log(3)
}

Foo.a = function() {
  console.log(4)
}
Foo.a()
let obj = new Foo();
obj.a();
Foo.a()
```

```js
function Foo() {
  Foo.a = function() {
    console.log(1)
  }
  this.a = function() { 
    console.log(2)
  }
}
// 把Foo当做类，在原型上设置实例共有的属性方法 => 实例.a();
Foo.prototype.a = function() { 
  console.log(3)
}

// 把Foo当做普通设置私有的属性方法 => Foo.a()
Foo.a = function() {
  console.log(4)
}
Foo.a() // 4
let obj = new Foo(); // obj可以调取原型上的方法 Foo.a: f=>1 obj.a: f=> 2
obj.a(); // 2 私有属性中有a
Foo.a() //1
```

### 9. 编写代码实现图片的懒加载

#### 1. 前端性能优化的重要方案
- 通过图片或者数据的延迟加载，可以加快页面渲染的速度，让第一次打开页面的速度变快
- 只有滑动到某个区域，才价值啊正是的图片，这样可以节省加载的流量。

#### 2. 处理方案
- 把所有需要延迟加载的图片，用一个盒子包起来 ，设置宽高和默认占位图。
- 开始让所有的img的src为空，把真实图片的地址放在img的自定义属性上，让img隐藏
- 等待所有其他资源都加载完成后，我们再开始加载图片
- 对于很多图片，需要当页面滚动的时候，当前图片区域完全显示出来后再加载真实图片

```html
<style>
  * { margin: 0; padding: 0;}
  .container { width: 800px;margin: 0 auto;}
  .imgBox { margin-bottom: 20px; height: 160px; background: #888; overflow:hidden}
  .imgBox img{ display: none; width: 100%;}
</style>

<body>
  <div class="container">
    <!-- <div class="imgBox">
      <img src="" alt="" data-img="http://example.com">  
    </div> -->
  </div>
</body>


<script src="jq地址"></script>
<script>

/*
JQ中的事件绑定支持多事件绑定：window.onload &window.onscroll 两个事件
触发的时候执行相同的事情
*/


let $container = $('.container');
let $imgBoxs = null;
let $windwo = $(window);

// 造点假数据
let str = '';
new Array(20).fill(null).forEach(itme=> {
  str += `<div class="imgBox">
      <img src="" alt="" data-img="http://example.com/img/banner1.png">  
    </div>`
}) 

// 多张图片延迟加载
$window.on('load scroll', function() {
  // 获取浏览器底边框距离body的距离
    let $B = $window.outerHeight() + $window.scrollTop();
    // 循环每一个图片区域，根据自己区域距离body的距离，计算出里面的图片是否加载
    $imgBoxs.each(index, item) => {
      let $item = $(item);
      let $itemA = $item.outerHeight() + $item.offset().top;
      let isLoad = $item.attr('isLoad');
      if($itemA <= $B && isLoad !== 'true') {
        $item.attr('isLoad', true); //attr 存储的自定义属性都是字符串 “true”
        // 加载当前区域中的图片
        let $img = $item.children('img');
        $img.attr('src', $img.attr('data-img'));
        $img.on('load', ()=> $img.stop().fadeIn() );

      }
  
    }

})
</script>

```

### 10. 实现一个$attr(name, value) 遍历，属性为name，值为value的元素集合

例如下面示例：

```js
let ary = $attr('class', 'box') // 获取页面中所有class为box的元素

```

```js

function $attr(property, value) {
  // 获取当前页面中所有标签
  let elements = document.getElementsByTagName('*');
  console.log(elements)
  let arr = [];
  elements = Array.from(elements); // 把非数组转换为数组
  elements.forEach(item=> {
    // 存储的是当前元素property对应的属性值
    let itemValue = item.getAttribute(property);
    if(property === 'class') {
      // 样式类属性名要特殊处理
      new RegExp('\\b' + value + '\\b').test(itemValue)? arr.push(item): null;
      return; 
    }
    if(itemValue === value) { 
      // 获取的值和传递的值校验成功
      arr.push(item)
    }
  })
  return arr;
}
console.log($attr('class', 'box'))

```

### 11. 英文字符汉字组成的字符串，用正则给英文单词前后加空格。

```javascript
let str = 'no作no死，你能你can，不能no哔哔！';

function space(string) {
  let reg = /\b[a-z]+\b/ig;
  return string.replace(reg, value=> {
    return " " + value + " ";
  }).trim();
}
console.log(space(str));
```


### 12. 编写一个程序，将数组扁平化，并去除其中重复部分数据，最终得到一个升序且不重复的数组

```javascript

let attr = [ [1,2,3], [4,5,6], [7,8,9, [11,12, [12,23,[14]]]],10]

```

使用ES6中的Array.prototype.flat()

```javascript
arr = arr.flat(Infinity);
```

基于ES6中的new Set() 去重数组

```javascript
arr = Array.from(new Set(arr)).sort((a, b)=> a - b);
```

把数组直接变成字符串即可 数组toString之后，不管有多少级，最后都会变为以逗号分隔的字符串，没有中括号和所谓的层级了，相当于直接扁平化了

```javascript
arr = arr.toString().split(',').map(itme => {
  return Number(itme)
});
```

### 13. 实现一个构造函数new方法

```javascript
function Dog(name) {
  this.name = name;
}
Dog.prototype.bark = function() {
  console.log('wangwang');
}
Dog.prototype.sayName = function() { 
  console.log(this.name) 
}

```

实现一个_new方法，模拟内置new后的结果

```js
function _new(fn, ...arg) {
  // fn 当前要new的类 ...arg 后期需要给构造函数传递的参数信息
  //let obj = {};
  //obj.__proto__ =fn.prototype;
  let obj = Object.create(fn.prototype);
  fn.call(obj, ...arg);
  return obj;

}
```

```js
let samao = _new(Dog, '三毛');
sanmao.bark(); // wangwang
sanmao.sayName() // my name is 三毛
console.log(sanmao instanceof Dog); // true

```

### 14. 冒泡排序 Bubble

```js

function bubble(ary) {
  let temp = null;
  // 外层循环i控制比较论述
  for(let i = 0;i<ary.length-1;i++) {
    // 里层循环控制每一轮比较的次数j
    for(let j =0;j<ary.length-1-i; j++) {
      if (ary[j]> ary[j+1] ) {
        // 当前项大于后一项
        temp =ary[j];
        ary[j] = ary[j+1];
        ary[j+1] = temp;
      }
    }
  }
  return ary;
}

let ary = [12, 8,24,6,3,9]
```

### 15. 插入排序 Insert

```js


```

### 16. 快速排序 Quick

```js
function quick(array) {
  // 结4. 束递归 (当array中小于等于一项)
  if(array.length < = 1) {
    return array
  }

  // 1.找到数组的中间项，在原有数组中把它移除
  let middleIndex =Math.floor(array.length/2);
  let middlevalue = array.splice(middleIndex,1)[0]

  // 2. 准备左右两个数组，循环剩下数组中每一项，比当前项小的放在左边数组中，反之放在右边数组中。
  let aryLeft = [];
  let aryRight = [];
  for( let i = 0; i<array.length; i++) {
    let item = ary[i];
    item< middleValue ?aryLeft.push(item) : aryRight.push(item)
  }

  // 3.递归方式堂左右两边的数组持续这样处理，一直到左右两边都排好序
}

···