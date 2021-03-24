(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{520:function(t,e,a){t.exports=a.p+"assets/img/title.6742a443.gif"},586:function(t,e,a){"use strict";a.r(e);var v=a(4),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("最近在搞一个词汇分类，而且要炫酷的那种，用的叫 t-SNE 的一个东西，百度谷歌了一下，才理解是一种降维算法，索性就搜搜看看有没有好的开源库，果然找到了一个前后端配合使用的一套开源库，并且也十分的够炫酷。")]),t._v(" "),v("p",[t._v("现在记录一下如何跑起来这个东西")]),t._v(" "),v("p",[t._v("先看看长什么样。。。")]),t._v(" "),v("p",[v("img",{attrs:{src:a(520),alt:"星空动图"}})]),t._v(" "),v("p",[t._v("该可视化从高维word2vec嵌入构建了最近邻居图(Nearest neighbor graph)。")]),t._v(" "),v("h3",{attrs:{id:"环境要求"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#环境要求"}},[t._v("#")]),t._v(" 环境要求")]),t._v(" "),v("ol",[v("li",[t._v("node")]),t._v(" "),v("li",[t._v("git")]),t._v(" "),v("li",[t._v("python")])]),t._v(" "),v("h3",{attrs:{id:"第一步-clone-项目"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第一步-clone-项目"}},[t._v("#")]),t._v(" 第一步 "),v("code",[t._v("clone")]),t._v(" 项目")]),t._v(" "),v("p",[t._v("首先 "),v("code",[t._v("clone")]),t._v(" 下来 "),v("a",{attrs:{href:"https://github.com/anvaka/word2vec-graph",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/anvaka/word2vec-graph"),v("OutboundLink")],1),t._v(" 这个项目是 "),v("code",[t._v("python")]),t._v(" 写的后端生成数据集的一个工具")]),t._v(" "),v("p",[t._v("然后在 "),v("code",[t._v("clone")]),t._v(" 下来前端展示的项目 "),v("a",{attrs:{href:"https://github.com/anvaka/pm",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/anvaka/pm"),v("OutboundLink")],1),t._v(" 这个项目采用 "),v("code",[t._v("React")]),t._v(" 和 "),v("code",[t._v("WebGL")]),t._v(" 技术\b来进行数据的前端三维展示")]),t._v(" "),v("p",[t._v("接下来就是对应的安装各自的依赖包等，不在此过多赘述")]),t._v(" "),v("h3",{attrs:{id:"第二步-配置后端所需词向量"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第二步-配置后端所需词向量"}},[t._v("#")]),t._v(" 第二步 配置后端所需词向量")]),t._v(" "),v("p",[t._v("需要一个词向量数据源，用后端来生成前端所需要的 "),v("code",[t._v("labels.json")]),t._v(" "),v("code",[t._v("links.bin")]),t._v(" "),v("code",[t._v("position.bin")]),t._v(" 等等")]),t._v(" "),v("p",[t._v("词向量数据选可以在 "),v("a",{attrs:{href:"https://nlp.stanford.edu/projects/glove/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),v("OutboundLink")],1),t._v(" 进行下载")]),t._v(" "),v("ol",[v("li",[t._v("然后将下载后的词向量放在 "),v("code",[t._v("graph-data/xxx.txt")]),t._v(" 这里，")]),t._v(" "),v("li",[t._v("在 "),v("code",[t._v("save_text_edges.py")]),t._v(" 文件中，修改词向量源。")]),t._v(" "),v("li",[t._v("运行 "),v("code",[t._v("python save_text_edges.py")]),t._v(" - 取决于输入词向量文件的大小，这需要一段时间。输出文件 "),v("code",[t._v("edges.txt")]),t._v(" 将被保存在 "),v("code",[t._v("graph-data")]),t._v(" 文件夹中")]),t._v(" "),v("li",[t._v("运行 "),v("code",[t._v("node edges2graph.js graph-data/edges.txt")]),t._v(" - 这将以二进制格式将图形保存到 "),v("code",[t._v("graph-data")]),t._v(" 文件夹（graph-data / labels.json，graph-data / links.bin")]),t._v(" "),v("li",[t._v("然后运行 "),v("code",[t._v("node --max-old-space-size=12000 layout.js")]),t._v(" 来生成布局，最大允许 RAM 为12G")]),t._v(" "),v("li",[t._v("可以交给前端系统来进行数据的渲染了")])]),t._v(" "),v("h3",{attrs:{id:"第三步-配置前端"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#第三步-配置前端"}},[t._v("#")]),t._v(" 第三步 配置前端")]),t._v(" "),v("p",[t._v("需要将后端生成的 "),v("code",[t._v("labels.json")]),t._v(" "),v("code",[t._v("links.bin")]),t._v(" "),v("code",[t._v("position.bin")]),t._v(" 三个文件来上传到你的服务器上")]),t._v(" "),v("p",[t._v("更改项目中的 "),v("code",[t._v("src/config.js")]),t._v(" 中的服务地址改为你服务器的地址就可以了，按照 "),v("a",{attrs:{href:"https://github.com/anvaka/galactic-data",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/anvaka/galactic-data"),v("OutboundLink")],1),t._v(" 他的数据格式来进行修改，当然你也可以更改源码，配置你所希望的请求路径")]),t._v(" "),v("p",[t._v("配置好后，就可以通过 "),v("code",[t._v("npm start")]),t._v(" 来启动项目，如果请求路径等信息确认无误，那么浏览器中展示的就应该是你的数据集了。")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("参考文献")]),t._v(" "),v("blockquote",[v("p",[v("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/35475412",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zhuanlan.zhihu.com/p/35475412"),v("OutboundLink")],1)])])])])])}),[],!1,null,null,null);e.default=_.exports}}]);