(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{510:function(s,t,a){s.exports=a.p+"assets/img/shadowsocks.e7c80b5a.jpeg"},511:function(s,t,a){s.exports=a.p+"assets/img/shadowsocks1.31adf884.jpeg"},512:function(s,t,a){s.exports=a.p+"assets/img/shadowsocks2.76f449e9.jpeg"},513:function(s,t,a){s.exports=a.p+"assets/img/shadowsocks3.6fe63d36.jpeg"},514:function(s,t,a){s.exports=a.p+"assets/img/shadowsocks4.07f0839f.jpeg"},515:function(s,t,a){s.exports=a.p+"assets/img/shadowsocks5.e63c8cd1.jpeg"},516:function(s,t,a){s.exports=a.p+"assets/img/shadowsocks6.387d31fa.jpeg"},517:function(s,t,a){s.exports=a.p+"assets/img/shadowsocks7.7885095c.jpeg"},581:function(s,t,a){"use strict";a.r(t);var e=a(4),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),e("p",[s._v("本文只记录一下在搭建科学服务器的配置，对应的海外服务器地址购买推荐使用 "),e("a",{attrs:{href:"https://www.vultr.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vultr"),e("OutboundLink")],1),s._v("，本文也是基于 "),e("a",{attrs:{href:"https://www.vultr.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vultr"),e("OutboundLink")],1),s._v(" 的 Ubuntu 服务器进行搭建，版本为 20.04 x64，地区推荐日本，因为离我们比较近，网速比较快")]),s._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",[s._v("科学上网是为了工作、学习、娱乐和提高网络生活质量，请勿违反法律法规，发布违反国家相关法律法规及「九不准」管理规定的信息，如：")]),s._v(" "),e("ul",[e("li",[s._v("反对宪法所确定的基本原则危害国家安全；")]),s._v(" "),e("li",[s._v("泄露国家秘密，颠覆国家政权，破坏国家统一；")]),s._v(" "),e("li",[s._v("损害国家荣誉和利益；")]),s._v(" "),e("li",[s._v("煽动民族仇恨、民族歧视，破坏民族团结；")]),s._v(" "),e("li",[s._v("侮辱、滥用英烈形象，否定英烈事迹，美化粉饰侵略战争行为的；")]),s._v(" "),e("li",[s._v("破坏国家宗教政策，宣扬邪教和封建迷信；")]),s._v(" "),e("li",[s._v("散布谣言，扰乱社会秩序，破坏社会稳定；")]),s._v(" "),e("li",[s._v("宣扬淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪；")]),s._v(" "),e("li",[s._v("煽动非法集会、结社、游行、示威、聚众扰乱社会秩序；")]),s._v(" "),e("li",[s._v("诽谤他人，泄露他人隐私，侵害他人合法权益；")]),s._v(" "),e("li",[s._v("含有法律、行政法规禁止的其他内容的信息；")])])]),s._v(" "),e("h2",{attrs:{id:"vultr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vultr"}},[s._v("#")]),s._v(" Vultr")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://www.vultr.com/?ref=8581647-6G",target:"_blank",rel:"noopener noreferrer"}},[s._v("推荐链接"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("会给你 100 美刀的试用，应该是一个月的有效期，可以多搭建几个梯子来试试哪个比较快，一般国内就是日本的速度比较快了，目前我是使用的日本服务器")]),s._v(" "),e("h2",{attrs:{id:"安装服务端-shadowsocks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装服务端-shadowsocks"}},[s._v("#")]),s._v(" 安装服务端 Shadowsocks")]),s._v(" "),e("p",[s._v("买完服务器以后就可以通过 SSH 来进行远程登录了，我们直接开始安装服务端 shadowscoks")]),s._v(" "),e("p",[s._v("三行命令，一次输入一行，完成之后输入下一行")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" --no-check-certificate -O shadowsocks-all.sh https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks-all.sh\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x shadowsocks-all.sh\n./shadowsocks-all.sh "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" shadowsocks-all.log\n")])])]),e("p",[s._v("最后一步输完，你应该会看到下图中内容──是要你选择需要安装的Shadowsocks版本。这里选择 4) shadowsocks-libev")]),s._v(" "),e("p",[e("img",{attrs:{src:a(510),alt:"shadowsocks"}})]),s._v(" "),e("p",[s._v("选择完成后会让你输入密码，默认为一个随机密码，你可以回车选择默认，或者自定义一个密码后回车")]),s._v(" "),e("p",[e("img",{attrs:{src:a(511),alt:"shadowsocks"}})]),s._v(" "),e("p",[s._v("密码设置完成后会让你输入一个端口号，默认随机一个，你也可以自定义一个端口号后回车生成")]),s._v(" "),e("p",[e("img",{attrs:{src:a(512),alt:"shadowsocks"}})]),s._v(" "),e("p",[s._v("端口号设置完成后，选择一个加密方式，我一般采用 chacha20 来作为加密方式，手机上也是有这个模式的，比较方便，你也可以根据自己的喜好来选择不同的加密方式")]),s._v(" "),e("p",[e("img",{attrs:{src:a(513),alt:"shadowsocks"}})]),s._v(" "),e("p",[s._v("设置完成后，会提示你是否需要安装 simple-obfs。这是 ss 的一个插件工具，可以起到混淆的作用，防止IP和端口被嗅探到，建议选 y 安装。")]),s._v(" "),e("p",[e("img",{attrs:{src:a(514),alt:"shadowsocks"}})]),s._v(" "),e("p",[s._v("如果上一步选择了 y ，这里可以选择一种混淆方式。通常 TLS 要比 HTTP 的混淆效果更好，所以选 TLS")]),s._v(" "),e("p",[e("img",{attrs:{src:a(515),alt:"shadowsocks"}})]),s._v(" "),e("p",[s._v("之后就耐心等待安装完成吧，安装完成后会给出你设置的密码、端口、服务器信息配置等，大功告成")]),s._v(" "),e("p",[e("img",{attrs:{src:a(516),alt:"shadowsocks"}})]),s._v(" "),e("p",[s._v("记住红色的内容，也就是服务器IP、服务器ss端口、你设的密码、混淆方式和加密方式。")]),s._v(" "),e("h2",{attrs:{id:"检查和配置-shadowsocks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#检查和配置-shadowsocks"}},[s._v("#")]),s._v(" 检查和配置 Shadowsocks")]),s._v(" "),e("p",[s._v("查看是否开始运行")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("/etc/init.d/shadowsocks-libev status\n")])])]),e("p",[s._v("如果出现类似 "),e("code",[s._v("Shadowsocks-libev is running...")]),s._v(" 的字样，说明已经开始正常运行了。")]),s._v(" "),e("p",[s._v("修改相关配置")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/shadowsocks-libev/config.json\n")])])]),e("h2",{attrs:{id:"安装客户端-shadowsocks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装客户端-shadowsocks"}},[s._v("#")]),s._v(" 安装客户端 Shadowsocks")]),s._v(" "),e("p",[s._v("相比服务器端的安装，客户端的安装就简单了许多。首先，在"),e("a",{attrs:{href:"https://shadowsocks.org/en/download/clients.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("这个页面"),e("OutboundLink")],1),s._v("找到并下载自己操作系统对应的客户端。")]),s._v(" "),e("p",[s._v("打开客户端，在「服务器设定」里新增服务器。然后依次填入服务器IP、服务器端口、你设的密码和加密方式。")]),s._v(" "),e("p",[e("img",{attrs:{src:a(517),alt:"shadowsocks"}})]),s._v(" "),e("h2",{attrs:{id:"开启-bbr-加速"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开启-bbr-加速"}},[s._v("#")]),s._v(" 开启 BBR 加速")]),s._v(" "),e("p",[s._v("一键安装脚本")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x bbr.sh "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" ./bbr.sh\n")])])]),e("p",[s._v("完成后根据提示重启，如果没有则不需要，查看是否正在运行")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" -r\nlsmod "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" bbr\n")])])]),e("p",[s._v("至此就安装好了 Shadowsocks，可以愉快的学习了～")]),s._v(" "),e("h2",{attrs:{id:"参考链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://zoomyale.com/2016/vultr_and_ss/",target:"_blank",rel:"noopener noreferrer"}},[s._v("科学上网的终极姿势，在Vultr VPS上搭建Shadowsocks"),e("OutboundLink")],1),s._v(": 详细的介绍了原理，搭建，以及对应的解释和额外的一些内容，可以看看")])])}),[],!1,null,null,null);t.default=r.exports}}]);