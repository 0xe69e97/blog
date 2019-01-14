(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{173:function(t,e,a){t.exports=a.p+"assets/img/title.6742a443.gif"},204:function(t,e,a){"use strict";a.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"构建一个词汇星空"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建一个词汇星空","aria-hidden":"true"}},[this._v("#")]),this._v(" 构建一个词汇星空")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:a(173),alt:"星空动图"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"环境要求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境要求","aria-hidden":"true"}},[this._v("#")]),this._v(" 环境要求")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("node")]),e("li",[this._v("git")]),e("li",[this._v("python")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"第一步-clone-项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第一步-clone-项目","aria-hidden":"true"}},[this._v("#")]),this._v(" 第一步 "),e("code",[this._v("clone")]),this._v(" 项目")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"第二步-配置后端所需词向量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第二步-配置后端所需词向量","aria-hidden":"true"}},[this._v("#")]),this._v(" 第二步 配置后端所需词向量")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("需要一个词向量数据源，用后端来生成前端所需要的 "),e("code",[this._v("labels.json")]),e("code",[this._v("links.bin")]),e("code",[this._v("position.bin")]),this._v(" 等等")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ol",[a("li",[t._v("然后将下载后的词向量放在 "),a("code",[t._v("graph-data/xxx.txt")]),t._v(" 这里，")]),a("li",[t._v("在 "),a("code",[t._v("save_text_edges.py")]),t._v(" 文件中，修改词向量源。")]),a("li",[t._v("运行 "),a("code",[t._v("python save_text_edges.py")]),t._v(" - 取决于输入词向量文件的大小，这需要一段时间。输出文件 "),a("code",[t._v("edges.txt")]),t._v(" 将被保存在 "),a("code",[t._v("graph-data")]),t._v(" 文件夹中")]),a("li",[t._v("运行 "),a("code",[t._v("node edges2graph.js graph-data/edges.txt")]),t._v(" - 这将以二进制格式将图形保存到 "),a("code",[t._v("graph-data")]),t._v(" 文件夹（graph-data / labels.json，graph-data / links.bin")]),a("li",[t._v("然后运行 "),a("code",[t._v("node --max-old-space-size=12000 layout.js")]),t._v(" 来生成布局，最大允许 RAM 为12G")]),a("li",[t._v("可以交给前端系统来进行数据的渲染了")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"第三步-配置前端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第三步-配置前端","aria-hidden":"true"}},[this._v("#")]),this._v(" 第三步 配置前端")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("需要将后端生成的 "),e("code",[this._v("labels.json")]),e("code",[this._v("links.bin")]),e("code",[this._v("position.bin")]),this._v(" 三个文件来上传到你的服务器上")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("配置好后，就可以通过 "),e("code",[this._v("npm start")]),this._v(" 来启动项目，如果请求路径等信息确认无误，那么浏览器中展示的就应该是你的数据集了。")])}],s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("最近在搞一个词汇分类，而且要炫酷的那种，用的叫 t-SNE 的一个东西，百度谷歌了一下，才理解是一种降维算法，索性就搜搜看看有没有好的开源库，果然找到了一个前后端配合使用的一套开源库，并且也十分的够炫酷。")]),a("p",[t._v("现在记录一下如何跑起来这个东西")]),a("p",[t._v("先看看长什么样。。。")]),t._m(1),a("p",[t._v("该可视化从高维word2vec嵌入构建了最近邻居图(Nearest neighbor graph)。")]),t._m(2),t._m(3),t._m(4),a("p",[t._v("首先 "),a("code",[t._v("clone")]),t._v(" 下来 "),a("a",{attrs:{href:"https://github.com/anvaka/word2vec-graph",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/anvaka/word2vec-graph"),a("OutboundLink")],1),t._v(" 这个项目是 "),a("code",[t._v("python")]),t._v(" 写的后端生成数据集的一个工具")]),a("p",[t._v("然后在 "),a("code",[t._v("clone")]),t._v(" 下来前端展示的项目 "),a("a",{attrs:{href:"https://github.com/anvaka/pm",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/anvaka/pm"),a("OutboundLink")],1),t._v(" 这个项目采用 "),a("code",[t._v("React")]),t._v(" 和 "),a("code",[t._v("WebGL")]),t._v(" 技术\b来进行数据的前端三维展示")]),a("p",[t._v("接下来就是对应的安装各自的依赖包等，不在此过多赘述")]),t._m(5),t._m(6),a("p",[t._v("词向量数据选可以在 "),a("a",{attrs:{href:"https://nlp.stanford.edu/projects/glove/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v(" 进行下载")]),t._m(7),t._m(8),t._m(9),a("p",[t._v("更改项目中的 "),a("code",[t._v("src/config.js")]),t._v(" 中的服务地址改为你服务器的地址就可以了，按照 "),a("a",{attrs:{href:"https://github.com/anvaka/galactic-data",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/anvaka/galactic-data"),a("OutboundLink")],1),t._v(" 他的数据格式来进行修改，当然你也可以更改源码，配置你所希望的请求路径")]),t._m(10),a("ul",[a("li",[a("strong",[t._v("参考文献")]),a("blockquote",[a("p",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/35475412",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zhuanlan.zhihu.com/p/35475412"),a("OutboundLink")],1)])])])])])},r,!1,null,null,null);e.default=n.exports}}]);