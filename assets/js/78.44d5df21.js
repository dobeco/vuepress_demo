(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{517:function(a,t,s){"use strict";s.r(t);var n=s(0),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[s("code",[a._v("window.navigator")]),a._v("属性指向一个包含浏览器和系统信息的 Navigator 对象。脚本通过这个属性了解用户的环境信息。")]),a._v(" "),s("h2",{attrs:{id:"navigator-对象的属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigator-对象的属性"}},[a._v("#")]),a._v(" Navigator 对象的属性")]),a._v(" "),s("h3",{attrs:{id:"navigator-useragent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigator-useragent"}},[a._v("#")]),a._v(" Navigator.userAgent")]),a._v(" "),s("p",[s("code",[a._v("navigator.userAgent")]),a._v("属性返回浏览器的 User Agent 字符串，表示浏览器的厂商和版本信息。")]),a._v(" "),s("p",[a._v("下面是 Chrome 浏览器的"),s("code",[a._v("userAgent")]),a._v("。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("userAgent\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('// "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36"')]),a._v("\n")])])]),s("p",[a._v("通过"),s("code",[a._v("userAgent")]),a._v("属性识别浏览器，不是一个好办法。因为必须考虑所有的情况（不同的浏览器，不同的版本），非常麻烦，而且用户可以改变这个字符串。这个字符串的格式并无统一规定，也无法保证未来的适用性，各种上网设备层出不穷，难以穷尽。所以，现在一般不再通过它识别浏览器了，而是使用“功能识别”方法，即逐一测试当前浏览器是否支持要用到的 JavaScript 功能。")]),a._v(" "),s("p",[a._v("不过，通过"),s("code",[a._v("userAgent")]),a._v("可以大致准确地识别手机浏览器，方法就是测试是否包含"),s("code",[a._v("mobi")]),a._v("字符串。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" ua "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("userAgent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("toLowerCase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/mobi/i")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ua"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 手机浏览器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 非手机浏览器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("如果想要识别所有移动设备的浏览器，可以测试更多的特征字符串。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/mobi|android|touch|mini/i")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("ua"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h3",{attrs:{id:"navigator-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigator-plugins"}},[a._v("#")]),a._v(" Navigator.plugins")]),a._v(" "),s("p",[s("code",[a._v("Navigator.plugins")]),a._v("属性返回一个类似数组的对象，成员是 Plugin 实例对象，表示浏览器安装的插件，比如 Flash、ActiveX 等。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" pluginsLength "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" pluginsLength"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("description"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"navigator-platform"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigator-platform"}},[a._v("#")]),a._v(" Navigator.platform")]),a._v(" "),s("p",[s("code",[a._v("Navigator.platform")]),a._v("属性返回用户的操作系统信息，比如"),s("code",[a._v("MacIntel")]),a._v("、"),s("code",[a._v("Win32")]),a._v("、"),s("code",[a._v("Linux x86_64")]),a._v("等 。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("platform\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('// "Linux x86_64"')]),a._v("\n")])])]),s("h3",{attrs:{id:"navigator-online"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigator-online"}},[a._v("#")]),a._v(" Navigator.onLine")]),a._v(" "),s("p",[s("code",[a._v("navigator.onLine")]),a._v("属性返回一个布尔值，表示用户当前在线还是离线（浏览器断线）。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("onLine "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// true")]),a._v("\n")])])]),s("p",[a._v("有时，浏览器可以连接局域网，但是局域网不能连通外网。这时，有的浏览器的"),s("code",[a._v("onLine")]),a._v("属性会返回"),s("code",[a._v("true")]),a._v("，所以不能假定只要是"),s("code",[a._v("true")]),a._v("，用户就一定能访问互联网。不过，如果是"),s("code",[a._v("false")]),a._v("，可以断定用户一定离线。")]),a._v(" "),s("p",[a._v("用户变成在线会触发"),s("code",[a._v("online")]),a._v("事件，变成离线会触发"),s("code",[a._v("offline")]),a._v("事件，可以通过"),s("code",[a._v("window.ononline")]),a._v("和"),s("code",[a._v("window.onoffline")]),a._v("指定这两个事件的回调函数。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'offline'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'offline'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'online'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'online'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"navigator-language，navigator-languages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigator-language，navigator-languages"}},[a._v("#")]),a._v(" Navigator.language，Navigator.languages")]),a._v(" "),s("p",[s("code",[a._v("Navigator.language")]),a._v("属性返回一个字符串，表示浏览器的首选语言。该属性只读。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("language "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('// "en"')]),a._v("\n")])])]),s("p",[s("code",[a._v("Navigator.languages")]),a._v("属性返回一个数组，表示用户可以接受的语言。"),s("code",[a._v("Navigator.language")]),a._v("总是这个数组的第一个成员。HTTP 请求头信息的"),s("code",[a._v("Accept-Language")]),a._v("字段，就来自这个数组。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("languages  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('// ["en-US", "en", "zh-CN", "zh", "zh-TW"]')]),a._v("\n")])])]),s("p",[a._v("如果这个属性发生变化，就会在"),s("code",[a._v("window")]),a._v("对象上触发"),s("code",[a._v("languagechange")]),a._v("事件。")]),a._v(" "),s("h3",{attrs:{id:"navigator-geolocation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigator-geolocation"}},[a._v("#")]),a._v(" Navigator.geolocation")]),a._v(" "),s("p",[s("code",[a._v("Navigator.geolocation")]),a._v("属性返回一个 Geolocation 对象，包含用户地理位置的信息。注意，该 API 只有在 HTTPS 协议下可用，否则调用下面方法时会报错。")]),a._v(" "),s("p",[a._v("Geolocation 对象提供下面三个方法。")]),a._v(" "),s("ul",[s("li",[a._v("Geolocation.getCurrentPosition()：得到用户的当前位置")]),a._v(" "),s("li",[a._v("Geolocation.watchPosition()：监听用户位置变化")]),a._v(" "),s("li",[a._v("Geolocation.clearWatch()：取消"),s("code",[a._v("watchPosition()")]),a._v("方法指定的监听函数")])]),a._v(" "),s("p",[a._v("注意，调用这三个方法时，浏览器会跳出一个对话框，要求用户给予授权。")]),a._v(" "),s("h3",{attrs:{id:"navigator-cookieenabled"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigator-cookieenabled"}},[a._v("#")]),a._v(" Navigator.cookieEnabled")]),a._v(" "),s("p",[s("code",[a._v("Navigator.cookieEnabled")]),a._v("属性返回一个布尔值，表示浏览器的 Cookie 功能是否打开。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cookieEnabled "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// true")]),a._v("\n")])])]),s("p",[a._v("注意，这个属性反映的是浏览器总的特性，与是否储存某个具体的网站的 Cookie 无关。用户可以设置某个网站不得储存 Cookie，这时"),s("code",[a._v("cookieEnabled")]),a._v("返回的还是"),s("code",[a._v("true")]),a._v("。")]),a._v(" "),s("h2",{attrs:{id:"navigator-对象的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigator-对象的方法"}},[a._v("#")]),a._v(" Navigator 对象的方法")]),a._v(" "),s("h3",{attrs:{id:"navigator-javaenabled"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigator-javaenabled"}},[a._v("#")]),a._v(" Navigator.javaEnabled()")]),a._v(" "),s("p",[s("code",[a._v("Navigator.javaEnabled()")]),a._v("方法返回一个布尔值，表示浏览器是否能运行 Java Applet 小程序。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("javaEnabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// false")]),a._v("\n")])])]),s("h3",{attrs:{id:"navigator-sendbeacon"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigator-sendbeacon"}},[a._v("#")]),a._v(" Navigator.sendBeacon()")]),a._v(" "),s("p",[s("code",[a._v("Navigator.sendBeacon()")]),a._v("方法用于向服务器异步发送数据，详见《XMLHttpRequest 对象》一章。")]),a._v(" "),s("h2",{attrs:{id:"screen-对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#screen-对象"}},[a._v("#")]),a._v(" Screen 对象")]),a._v(" "),s("p",[a._v("Screen 对象表示当前窗口所在的屏幕，提供显示设备的信息。"),s("code",[a._v("window.screen")]),a._v("属性指向这个对象。")]),a._v(" "),s("p",[a._v("该对象有下面的属性。")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("Screen.height")]),a._v("：浏览器窗口所在的屏幕的高度（单位像素）。除非调整显示器的分辨率，否则这个值可以看作常量，不会发生变化。显示器的分辨率与浏览器设置无关，缩放网页并不会改变分辨率。")]),a._v(" "),s("li",[s("code",[a._v("Screen.width")]),a._v("：浏览器窗口所在的屏幕的宽度（单位像素）。")]),a._v(" "),s("li",[s("code",[a._v("Screen.availHeight")]),a._v("：浏览器窗口可用的屏幕高度（单位像素）。因为部分空间可能不可用，比如系统的任务栏或者 Mac 系统屏幕底部的 Dock 区，这个属性等于"),s("code",[a._v("height")]),a._v("减去那些被系统组件的高度。")]),a._v(" "),s("li",[s("code",[a._v("Screen.availWidth")]),a._v("：浏览器窗口可用的屏幕宽度（单位像素）。")]),a._v(" "),s("li",[s("code",[a._v("Screen.pixelDepth")]),a._v("：整数，表示屏幕的色彩位数，比如"),s("code",[a._v("24")]),a._v("表示屏幕提供24位色彩。")]),a._v(" "),s("li",[s("code",[a._v("Screen.colorDepth")]),a._v("："),s("code",[a._v("Screen.pixelDepth")]),a._v("的别名。严格地说，colorDepth 表示应用程序的颜色深度，pixelDepth 表示屏幕的颜色深度，绝大多数情况下，它们都是同一件事。")]),a._v(" "),s("li",[s("code",[a._v("Screen.orientation")]),a._v("：返回一个对象，表示屏幕的方向。该对象的"),s("code",[a._v("type")]),a._v("属性是一个字符串，表示屏幕的具体方向，"),s("code",[a._v("landscape-primary")]),a._v("表示横放，"),s("code",[a._v("landscape-secondary")]),a._v("表示颠倒的横放，"),s("code",[a._v("portrait-primary")]),a._v("表示竖放，"),s("code",[a._v("portrait-secondary")]),a._v("。")])]),a._v(" "),s("p",[a._v("下面是"),s("code",[a._v("Screen.orientation")]),a._v("的例子。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("orientation\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('// { angle: 0, type: "landscape-primary", onchange: null }')]),a._v("\n")])])]),s("p",[a._v("下面的例子保证屏幕分辨率大于 1024 x 768。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("width "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1024")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("768")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 分辨率不低于 1024x768")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("下面是根据屏幕的宽度，将用户导向不同网页的代码。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("width "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("800")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("600")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'small.html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'wide.html'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);