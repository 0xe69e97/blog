(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{571:function(t,a,e){"use strict";e.r(a);var s=e(4),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"constructor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[t._v("#")]),t._v(" Constructor")]),t._v(" "),e("p",[t._v("保存着用于创建当前对象的函数。"),e("code",[t._v("new Object()")]),t._v("构造函数（constructor）就是Object()")]),t._v(" "),e("h2",{attrs:{id:"hasownproperty-propertyname"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hasownproperty-propertyname"}},[t._v("#")]),t._v(" hasOwnProperty(propertyName)")]),t._v(" "),e("p",[t._v('用于检查给定的属性在当前对象实例中（而不是在实例的原型中）是否存在。其中，作为参数的属性名（propertyName）必须以字符串形式指定（例如：o.hasOwnProperty("name")）。')]),t._v(" "),e("h2",{attrs:{id:"isprototypeof-object"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#isprototypeof-object"}},[t._v("#")]),t._v(" isPrototypeOf(object)")]),t._v(" "),e("p",[t._v("用于检查传入的对象是否是另一个对象的原型。")]),t._v(" "),e("h2",{attrs:{id:"propertyisenumerable-propertyname"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#propertyisenumerable-propertyname"}},[t._v("#")]),t._v(" propertyIsEnumerable(propertyName)")]),t._v(" "),e("p",[t._v("用于检查给定的属性是否能够使用for-in语句来枚举。与hasOwnProperty()方法一样，作为参数的属性名必须以字符串形式指定。")]),t._v(" "),e("h2",{attrs:{id:"tolocalestring"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tolocalestring"}},[t._v("#")]),t._v(" toLocaleString()")]),t._v(" "),e("p",[t._v("返回对象的字符串表示，该字符串与执行环境的地区对应。")]),t._v(" "),e("h2",{attrs:{id:"tostring"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tostring"}},[t._v("#")]),t._v(" toString()")]),t._v(" "),e("p",[t._v("返回对象的字符串表示。")]),t._v(" "),e("h2",{attrs:{id:"valueof"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#valueof"}},[t._v("#")]),t._v(" valueOf()")]),t._v(" "),e("p",[t._v("返回对象的字符串、数值或布尔值表示。通常与toString()方法的返回值")]),t._v(" "),e("h2",{attrs:{id:"object-defineproperty"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#object-defineproperty"}},[t._v("#")]),t._v(" Object.defineProperty()")]),t._v(" "),e("p",[e("code",[t._v("Object")]),t._v(" 的高级用法，Vue 2.X 的数据双向绑定，就是以这个方法来定义的。")]),t._v(" "),e("p",[t._v("一般接收三个参数(obj, key, config)")]),t._v(" "),e("ol",[e("li",[t._v("obj: 要设置的对象实例")]),t._v(" "),e("li",[t._v("key: 要设置对象实例下的字段名 "),e("code",[t._v("key")])]),t._v(" "),e("li",[t._v("config: 一般以对象形式书写，有以下3个参数还有2个与其互斥的参数 "),e("code",[t._v("get set")])])]),t._v(" "),e("p",[t._v("(1)"),e("code",[t._v("configurable")]),t._v(": 表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为数据属性。对于直接在对象上定义的属性，这个特性的默认值为true。")]),t._v(" "),e("p",[t._v("(2)"),e("code",[t._v("enumerable")]),t._v(": 表示能否通过for-in循环返回属性。对于直接在对象上定义的属性，这个特性的默认值为true。")]),t._v(" "),e("p",[t._v("(3)"),e("code",[t._v("writable")]),t._v(": 是否可写，默认为 "),e("code",[t._v("true")])]),t._v(" "),e("h4",{attrs:{id:"互斥参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#互斥参数"}},[t._v("#")]),t._v(" 互斥参数")]),t._v(" "),e("p",[t._v("(1)"),e("code",[t._v("get")]),t._v(": 在读取属性时调用的函数。默认值为undefined。")]),t._v(" "),e("p",[t._v("(2)"),e("code",[t._v("set")]),t._v(": 在写入属性时调用的函数。默认值为undefined。")]),t._v(" "),e("p",[t._v("如下")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" person "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nObject"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    configurable"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    enumerable"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    writable"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    value"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Smalin"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"Smalin"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" person"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"Smalin"')]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);