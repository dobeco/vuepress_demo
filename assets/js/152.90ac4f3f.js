(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{508:function(a,t,r){"use strict";r.r(t);var s=r(0),_=Object(s.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"第8章-bom"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第8章-bom"}},[a._v("#")]),a._v(" 第8章 BOM")]),a._v(" "),r("h2",{attrs:{id:"_8-1-window对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-window对象"}},[a._v("#")]),a._v(" 8.1 window对象")]),a._v(" "),r("h3",{attrs:{id:"_8-1-1-全局作用域"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-1-全局作用域"}},[a._v("#")]),a._v(" 8.1.1 全局作用域")]),a._v(" "),r("h3",{attrs:{id:"_8-1-2-窗口关系及框架"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-2-窗口关系及框架"}},[a._v("#")]),a._v(" 8.1.2 窗口关系及框架")]),a._v(" "),r("h3",{attrs:{id:"_8-1-3-窗口位置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-3-窗口位置"}},[a._v("#")]),a._v(" 8.1.3 窗口位置")]),a._v(" "),r("h3",{attrs:{id:"_8-1-4-窗口大小"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-4-窗口大小"}},[a._v("#")]),a._v(" 8.1.4 窗口大小")]),a._v(" "),r("h3",{attrs:{id:"_8-1-5-导航和打开窗口"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-5-导航和打开窗口"}},[a._v("#")]),a._v(" 8.1.5 导航和打开窗口")]),a._v(" "),r("h3",{attrs:{id:"_8-1-6-间歇调用和超时调用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-6-间歇调用和超时调用"}},[a._v("#")]),a._v(" 8.1.6 间歇调用和超时调用")]),a._v(" "),r("h3",{attrs:{id:"_8-1-7-系统对话框"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-7-系统对话框"}},[a._v("#")]),a._v(" 8.1.7 系统对话框")]),a._v(" "),r("h2",{attrs:{id:"_8-2-location对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-location对象"}},[a._v("#")]),a._v(" 8.2 location对象")]),a._v(" "),r("h3",{attrs:{id:"_8-2-1-查询字符串参数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-1-查询字符串参数"}},[a._v("#")]),a._v(" 8.2.1 查询字符串参数")]),a._v(" "),r("h3",{attrs:{id:"_8-2-2-位置操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-2-位置操作"}},[a._v("#")]),a._v(" 8.2.2 位置操作")]),a._v(" "),r("h2",{attrs:{id:"_8-3-navigator对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-navigator对象"}},[a._v("#")]),a._v(" 8.3 navigator对象")]),a._v(" "),r("h3",{attrs:{id:"_8-3-1-检测插件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-1-检测插件"}},[a._v("#")]),a._v(" 8.3.1 检测插件")]),a._v(" "),r("h3",{attrs:{id:"_8-3-2-注册处理程序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-2-注册处理程序"}},[a._v("#")]),a._v(" 8.3.2 注册处理程序")]),a._v(" "),r("h2",{attrs:{id:"_8-4-screen对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-4-screen对象"}},[a._v("#")]),a._v(" 8.4 screen对象")]),a._v(" "),r("h2",{attrs:{id:"_8-5-history对象"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-5-history对象"}},[a._v("#")]),a._v(" 8.5 history对象")]),a._v(" "),r("h2",{attrs:{id:"_8-6-小结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-6-小结"}},[a._v("#")]),a._v(" 8.6 小结")]),a._v(" "),r("p",[a._v("浏览器对象模型以window对象为依托，表示浏览器窗口以及页面可见区域。同时，window对象还是ECMAScript中的Global对象，因而所有全局变量和函数都是它的属性，且所欲原生的构造函数及其他函数也都存在于它的命名空间下。")]),a._v(" "),r("ul",[r("li",[a._v("在使用框架时，每个框架都有自己的window对象以及所有原生构造函数及其他函数的副本。每个框架都保存在frames集合中，可以通过位置或通过名称来访问。")]),a._v(" "),r("li",[a._v("有一些窗口指针，可以用来引用其他框架，包括父框架。")]),a._v(" "),r("li",[a._v("top对象始终指向最外围的框架，也就是整个浏览器窗口。")]),a._v(" "),r("li",[a._v("parent对象表示包含当前框架的框架，而self对象则指向window")]),a._v(" "),r("li",[a._v("使用location对象可以通过编程的方式来访问浏览器的导航系统。设置相应的属性，可以逐段或整体地修改浏览器的URL。")]),a._v(" "),r("li",[a._v("调用replace()方法可以导航到一个新URL，同时该URL会替换浏览器历史记录中当前显示的页面，也就是说无法回退到上一个页面。")]),a._v(" "),r("li",[a._v("navigator对象提供了与浏览器有关的信息。到底提供哪些信息，很大程度上取决于用户的浏览器；不过，也有一些公共的属性（如userAgent）存在于所有浏览器中。")])]),a._v(" "),r("p",[a._v("BOM中还有两个对象：screen和history，但它们的功能有限。screen对象中保存着与客户端显示器有关的信息，这些信息一般只用于站点分析。history对象为访问浏览器的历史记录开了一个小缝隙，开发人员可以据此判断历史记录的数量，也可以在历史记录中向后或向前导航到任意页面。")])])}),[],!1,null,null,null);t.default=_.exports}}]);