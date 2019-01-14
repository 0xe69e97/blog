(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{202:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("最近在开发项目的时候，发现同事有需求是点击浏览器的返回，或者直接点击其他菜单跳走的时候，需求是想提醒一下用户，是否保存当前所编写的内容，当用户确定后，在去执行对应的跳转。")]),t._m(1),t._m(2),t._m(3),a("p",[t._v("你可以使用 router.beforeEach 注册一个全局前置守卫：")]),a("p",[t._v("例如你的项目结构是")]),t._m(4),a("p",[t._v("你可以在你当前项目中的 router => index.js 中写入以下代码")]),t._m(5),t._m(6),t._m(7),a("p",[t._v("有三种组件内的守卫")]),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),a("p",[t._v("举个🌰")]),t._m(13),t._m(14),a("p",[t._v("好了，🌰吃完了。")]),a("p",[t._v("这是我在项目中遇到到的问题以及总结，当然更推荐你去"),a("a",{attrs:{href:"https://router.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方"),a("OutboundLink")],1),t._v("系统的去查看对应的教程")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"路由守卫的那些事儿"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由守卫的那些事儿","aria-hidden":"true"}},[this._v("#")]),this._v(" 路由守卫的那些事儿")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("还有一个就是全局的对路由进行控制，一般都会写成 "),s("code",[this._v("window.location.href")]),this._v(" 这种格式去阻止，或者重新对路由进行控制的问题，所以想写一篇文章总结一下")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("虽然 vue 的路由控制都是基于 "),s("code",[this._v("HTML5 History API")]),this._v(" 的，但是在写项目的时候，还是比较推荐使用 vue 官方推荐的 vue-router 相关的技术")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"全局守卫"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局守卫","aria-hidden":"true"}},[this._v("#")]),this._v(" 全局守卫")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("roter /\n|- index.js\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nrouter"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("beforeEach")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[a("code",[t._v("to")]),t._v(": 是指路由下一步将要去的位置对象")]),a("li",[a("code",[t._v("from")]),t._v(": 路由来自哪里的位置对象")]),a("li",[a("code",[t._v("next")]),t._v(": 你的路由守卫中必须包含的一个函数，如果不执行 "),a("code",[t._v("next()")]),t._v(" ，将会出现不可预测的问题")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"组件内的路由守卫"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件内的路由守卫","aria-hidden":"true"}},[this._v("#")]),this._v(" 组件内的路由守卫")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("beforeRouteEnter")])]),s("li",[s("code",[this._v("beforeRouteUpdate")]),this._v("  (2.2 新增)")]),s("li",[s("code",[this._v("beforeRouteLeave")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("主要说一下 "),s("code",[this._v("beforeRouteLeave")]),this._v(" 这个，因为在项目中或许会经常用到的一个方法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("beforeRouteLeave")]),this._v(" 是一个在当前路由，突然离开时触发的一个方法，例如当前你正在一个编辑界面，用户不小心点击了浏览器的返回，亦或者点击了菜单栏中其他菜单的导航，会执行该方法，")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("beforeRouteLeave")]),this._v(" 也拥有3个参数，与全局路由守卫的参数是一致的")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("beforeRouteLeave")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 写入你想对用户说的内容")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 务必保证 next 方法是被触发的")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("beforeRouteLeave")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" answer "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("confirm")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'你确定放弃当前编辑的界面并且离开吗？'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("answer"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("next")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 执行默认操作，点击哪里去哪里")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("next")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 终止操作，不执行路由跳转")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("注意")]),s("p",[this._v("beforeRouteLeave 只能在当前组件路由切换时才能去触发，不能写在当前界面下的子组件内")])])}],!1,null,null,null);s.default=e.exports}}]);