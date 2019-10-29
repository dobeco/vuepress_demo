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