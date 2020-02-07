(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{510:function(a,t,_){"use strict";_.r(t);var r=_(0),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,_=a._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h1",{attrs:{id:"第7章-函数表达式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#第7章-函数表达式"}},[a._v("#")]),a._v(" 第7章 函数表达式")]),a._v(" "),_("h2",{attrs:{id:"_7-1-递归"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-递归"}},[a._v("#")]),a._v(" 7.1 递归")]),a._v(" "),_("h2",{attrs:{id:"_7-2-闭包"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-闭包"}},[a._v("#")]),a._v(" 7.2 闭包")]),a._v(" "),_("h2",{attrs:{id:"_7-2-1-闭包与变量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-1-闭包与变量"}},[a._v("#")]),a._v(" 7.2.1 闭包与变量")]),a._v(" "),_("h2",{attrs:{id:"_7-2-2-关于this对象"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-2-关于this对象"}},[a._v("#")]),a._v(" 7.2.2 关于this对象")]),a._v(" "),_("h2",{attrs:{id:"_7-2-3-内存泄漏"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-3-内存泄漏"}},[a._v("#")]),a._v(" 7.2.3 内存泄漏")]),a._v(" "),_("h2",{attrs:{id:"_7-3-模仿块级作用域"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-模仿块级作用域"}},[a._v("#")]),a._v(" 7.3 模仿块级作用域")]),a._v(" "),_("h2",{attrs:{id:"_7-4-私有变量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-私有变量"}},[a._v("#")]),a._v(" 7.4 私有变量")]),a._v(" "),_("h3",{attrs:{id:"_7-4-1-静态私有变量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-1-静态私有变量"}},[a._v("#")]),a._v(" 7.4.1 静态私有变量")]),a._v(" "),_("h3",{attrs:{id:"_7-4-2-模块模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-2-模块模式"}},[a._v("#")]),a._v(" 7.4.2 模块模式")]),a._v(" "),_("h3",{attrs:{id:"_7-4-3-增强的模块模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-3-增强的模块模式"}},[a._v("#")]),a._v(" 7.4.3 增强的模块模式")]),a._v(" "),_("h2",{attrs:{id:"_7-5-小结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-5-小结"}},[a._v("#")]),a._v(" 7.5 小结")]),a._v(" "),_("p",[a._v("在JavaScript编程中，函数表达式是一种非常有用的技术。使用函数表达式可以无须对函数命名，从而实现动态编程。匿名函数，也称为拉姆达函数，是一种使用JavaScript函数的强大方式。以下总结了函数表达式的特点。")]),a._v(" "),_("ul",[_("li",[a._v("函数表达式不同于函数声明。函数声明要求有名字。但函数表达式不需要。没有名字的函数表达式也叫做匿名函数。")]),a._v(" "),_("li",[a._v("在无法确定如何引用函数的情况下，递归函数就会变得比较复杂；")]),a._v(" "),_("li",[a._v("递归函数应该始终使用arguments.callee来递归地调用自身，不要使用函数名——函数名可能会发生变化。")])]),a._v(" "),_("p",[a._v("当在函数内部定义可其他函数时，就创建了闭包。闭包有权访问包含函数内部的所有变量，原理如下：")]),a._v(" "),_("ul",[_("li",[a._v("在后台执行环境中，闭包的作用域包含着它自己的作用域，包含函数的作用域和全局作用域。")]),a._v(" "),_("li",[a._v("通常，函数的作用域及其所有变量队徽在函数执行结束后被销毁；")]),a._v(" "),_("li",[a._v("但是，当函数返回了一个闭包时，这个函数的作用域将会一直在内存中保存到闭包不存在为止。")])]),a._v(" "),_("p",[a._v("使用闭包可以在javaScript中模仿块级作用域（JavaScript没有块级作用域的概念，ES6增加了具有块级作用域声明的let和const），要点如下：")]),a._v(" "),_("ul",[_("li",[a._v("创建并立即执行一个函数，这样既可以执行其中的代码，又不会在内存中留下对该函数的引用。")]),a._v(" "),_("li",[a._v("结果就是函数内部的所有变量都会立即销毁——除非将某些变量赋值给了包含作用域（即外部作用域中的变量）。")])]),a._v(" "),_("p",[a._v("闭包还可以用于在对象中创建私有变量，相关概念和要点如下：")]),a._v(" "),_("ul",[_("li",[a._v("即使JavaScript中没有正式的私有对象属性的概念，但可以使用闭包来实现公有方法，而通过共有方法可以访问包含作用域中定义的变量。")]),a._v(" "),_("li",[a._v("有权访问私有变量的公有方法叫做特权方法。")]),a._v(" "),_("li",[a._v("可以使用构造函数模式、原型模式来实现自定义类型的特权方法，也可以使用模块模式、增强的模块模式来实现单例的特权方法。")])]),a._v(" "),_("p",[a._v("JavaScript中的函数表达式和闭包都是极其有用的特性，利用它们可以实现很多功能。不过，因为创建碧波啊必须维护额外的作用域，所以过度使用他们可能会占用大量内存。")])])}),[],!1,null,null,null);t.default=s.exports}}]);