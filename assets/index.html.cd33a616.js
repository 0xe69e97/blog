import{_ as a,c as s}from"./app.482c2f46.js";var n="/images/posts/2019/jenkins1.png",i="/images/posts/2019/jenkins2.png",r="/images/posts/2019/jenkins3.png",o="/images/posts/2019/jenkins4.png",c="/images/posts/2019/jenkins5.png",d="/images/posts/2019/config0.png",l="/images/posts/2019/config2.png",t="/images/posts/2019/config1.png",p="/images/posts/2019/config4.png",h="/images/posts/2019/config3.png",m="/images/posts/2019/config5.png",u="/images/posts/2019/config6.png",b="/images/posts/2019/item1.png",g="/images/posts/2019/item2.png",k="/images/posts/2019/item3.png",f="/images/posts/2019/item4.png",v="/images/posts/2019/webhooks1.jpg",e="/images/posts/2019/webhooks2.jpg";const _={},j=s(`<p>\u4F5C\u4E3A\u4E00\u540D\u524D\u7AEF\u5F00\u53D1\u626B\u5730\u50E7\uFF0C\u5F97\u6298\u817E\u3002\u901A\u8FC7 <code>push</code> <code>pull request</code> \u7B49\u64CD\u4F5C\uFF0C\u76F4\u63A5\u81EA\u52A8\u5316\u90E8\u7F72\u5230\u670D\u52A1\u5668\uFF0C\u4E4B\u540E\u518D\u53D1\u9001\u90AE\u4EF6\uFF0C\u8FD9\u6837\u7684\u903C\u683C\u5C82\u4E0D\u662F\u63D0\u5347\u4E86\u4E9B\u8BB8\u3002\u3002</p><h2 id="\u81EA\u52A8\u90E8\u7F72\u5927\u81F4\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u90E8\u7F72\u5927\u81F4\u539F\u7406" aria-hidden="true">#</a> \u81EA\u52A8\u90E8\u7F72\u5927\u81F4\u539F\u7406</h2><ul><li>\u901A\u8FC7 <code>push</code> \u63A8\u9001\u4EE3\u7801</li><li><code>webhooks</code> \u81EA\u52A8\u53D1\u9001\u8BF7\u6C42\u5230 <code>jenkins</code></li><li><code>jenkins</code> \u63A5\u53D7\u5230\u8BF7\u6C42\u540E\uFF0C\u5F00\u59CB\u81EA\u52A8\u6784\u5EFA</li><li><code>jenkins</code> \u6784\u5EFA\u5B8C\u6210\u540E\u6267\u884C<code>shell</code>\u811A\u672C\u6765\u81EA\u52A8\u90E8\u7F72 =&gt; \u81EA\u52A8\u89E6\u53D1\u90AE\u4EF6</li><li>\u5B9E\u73B0\u4EE3\u7801\u81EA\u52A8\u5316\u90E8\u7F72\u4E0E\u81EA\u52A8\u53D1\u9001\u90AE\u4EF6</li></ul><h2 id="\u9996\u5148\u786E\u4FDD\u670D\u52A1\u5668\u6709-java-\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u9996\u5148\u786E\u4FDD\u670D\u52A1\u5668\u6709-java-\u73AF\u5883" aria-hidden="true">#</a> \u9996\u5148\u786E\u4FDD\u670D\u52A1\u5668\u6709 <code>java</code> \u73AF\u5883</h2><ol><li>\u5B89\u88C5 <code>jdk</code></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> openjdk-8-jdk
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u67E5\u770B\u662F\u5426\u5B89\u88C5\u6210\u529F</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ java -version
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u5B89\u88C5-jenkins" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-jenkins" aria-hidden="true">#</a> \u5B89\u88C5 <code>jenkins</code></h2><ol><li>\u5B89\u88C5 <code>jenkins</code></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">wget</span> -q -O - https://pkg.jenkins.io/debian/jenkins-ci.org.key <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -
$ <span class="token function">sudo</span> <span class="token function">sh</span> -c <span class="token string">&#39;echo deb http://pkg.jenkins.io/debian-stable binary/ &gt; /etc/apt/sources.list.d/jenkins.list&#39;</span>
$ <span class="token function">sudo</span> <span class="token function">apt-get</span> update
$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="2"><li><code>jenkins</code> \u914D\u7F6E\u6587\u4EF6</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> /etc/init.d/jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li><code>jenkins</code> \u5DE5\u4F5C\u76EE\u5F55</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5DE5\u4F5C\u533A\u76EE\u5F55</span>
$ <span class="token builtin class-name">cd</span> /var/lib/jenkins

<span class="token comment"># \u65E5\u5FD7\u6587\u4EF6</span>
$ <span class="token function">cat</span> /var/log/jenkins/jenkins.log

<span class="token comment"># \u914D\u7F6E\u6587\u4EF6 1 \u7AEF\u53E3\u914D\u7F6E</span>
$ <span class="token function">vim</span> /etc/default/jenkins

<span class="token comment"># \u914D\u7F6E\u6587\u4EF6 2 </span>
$ <span class="token function">vim</span> /etc/init.d/jenkins

<span class="token comment"># \u91CD\u542F\u914D\u7F6E</span>
$ systemctl daemon-reload
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ol start="4"><li>\u914D\u7F6E <code>jenkins</code></li></ol><p>\u9A8C\u8BC1\u5BC6\u7801</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u670D\u52A1\u5668\u5BC6\u7801\u4F4D\u7F6E</span>
/var/lib/jenkins/secrets/initialAdminPassword
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="`+n+'" alt="Jenkins"></p><h3 id="\u9ED8\u8BA4\u9009\u62E9\u7B2C\u4E00\u4E2A-\u5982\u679C\u4F60\u6709\u7279\u6B8A\u9700\u6C42\u7684\u8BDD-\u8BF7\u968F\u610F" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u9009\u62E9\u7B2C\u4E00\u4E2A-\u5982\u679C\u4F60\u6709\u7279\u6B8A\u9700\u6C42\u7684\u8BDD-\u8BF7\u968F\u610F" aria-hidden="true">#</a> \u9ED8\u8BA4\u9009\u62E9\u7B2C\u4E00\u4E2A\uFF0C\u5982\u679C\u4F60\u6709\u7279\u6B8A\u9700\u6C42\u7684\u8BDD\uFF0C\u8BF7\u968F\u610F</h3><p><img src="'+i+'" alt="Jenkins"></p><h3 id="\u6DFB\u52A0\u4E00\u4E2A\u7BA1\u7406\u5458\u8D26\u6237" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u4E00\u4E2A\u7BA1\u7406\u5458\u8D26\u6237" aria-hidden="true">#</a> \u6DFB\u52A0\u4E00\u4E2A\u7BA1\u7406\u5458\u8D26\u6237</h3><p><img src="'+r+'" alt="Jenkins"></p><h3 id="\u4E00\u8DEF\u70B9\u4E0B\u53BB" tabindex="-1"><a class="header-anchor" href="#\u4E00\u8DEF\u70B9\u4E0B\u53BB" aria-hidden="true">#</a> \u4E00\u8DEF\u70B9\u4E0B\u53BB</h3><p><img src="'+o+'" alt="Jenkins"></p><h3 id="\u597D\u5427-\u770B\u6765\u4F60\u5DF2\u7ECF\u6210\u529F\u4E86" tabindex="-1"><a class="header-anchor" href="#\u597D\u5427-\u770B\u6765\u4F60\u5DF2\u7ECF\u6210\u529F\u4E86" aria-hidden="true">#</a> \u597D\u5427\uFF0C\u770B\u6765\u4F60\u5DF2\u7ECF\u6210\u529F\u4E86\uFF01</h3><p><img src="'+c+'" alt="Jenkins"></p><h2 id="\u5B89\u88C5-jenkins-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-jenkins-\u63D2\u4EF6" aria-hidden="true">#</a> \u5B89\u88C5 <code>jenkins</code> \u63D2\u4EF6</h2><h3 id="\u9009\u62E9-\u7CFB\u7EDF\u7BA1\u7406-\u63D2\u4EF6\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9-\u7CFB\u7EDF\u7BA1\u7406-\u63D2\u4EF6\u7BA1\u7406" aria-hidden="true">#</a> \u9009\u62E9 <code>\u7CFB\u7EDF\u7BA1\u7406</code> <code>\u63D2\u4EF6\u7BA1\u7406</code></h3><p><img src="'+d+'" alt="Jenkins"></p><h3 id="\u5728\u53EF\u9009\u63D2\u4EF6\u91CC\u9762\u641C\u7D22-gitee-\u7136\u540E\u70B9\u51FB\u76F4\u63A5\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5728\u53EF\u9009\u63D2\u4EF6\u91CC\u9762\u641C\u7D22-gitee-\u7136\u540E\u70B9\u51FB\u76F4\u63A5\u5B89\u88C5" aria-hidden="true">#</a> \u5728<code>\u53EF\u9009\u63D2\u4EF6</code>\u91CC\u9762\u641C\u7D22 <code>gitee</code> \u7136\u540E\u70B9\u51FB\u76F4\u63A5\u5B89\u88C5</h3><p><img src="'+l+'" alt="Jenkins"></p><h3 id="\u5728\u7EE7\u7EED\u641C\u7D22\u63D2\u4EF6-email-extension-template-plugin" tabindex="-1"><a class="header-anchor" href="#\u5728\u7EE7\u7EED\u641C\u7D22\u63D2\u4EF6-email-extension-template-plugin" aria-hidden="true">#</a> \u5728\u7EE7\u7EED\u641C\u7D22\u63D2\u4EF6 <code>Email Extension Template Plugin</code></h3><p>\u7EE7\u7EED\u5B89\u88C5\uFF0C\u5728\u4E4B\u540E\u914D\u7F6E\u81EA\u52A8\u53D1\u9001\u90AE\u4EF6\u65F6\u9700\u8981\u4F7F\u7528</p><h2 id="\u5168\u5C40\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u914D\u7F6E" aria-hidden="true">#</a> \u5168\u5C40\u914D\u7F6E</h2><h3 id="\u9009\u62E9\u7CFB\u7EDF\u7BA1\u7406-\u7CFB\u7EDF\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u7CFB\u7EDF\u7BA1\u7406-\u7CFB\u7EDF\u8BBE\u7F6E" aria-hidden="true">#</a> \u9009\u62E9\u7CFB\u7EDF\u7BA1\u7406=&gt;\u7CFB\u7EDF\u8BBE\u7F6E</h3><p><img src="'+t+'" alt="Jenkins"></p><h3 id="\u9009\u62E9-gitee-\u8FDB\u884C\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9-gitee-\u8FDB\u884C\u914D\u7F6E" aria-hidden="true">#</a> \u9009\u62E9 <code>gitee</code> \u8FDB\u884C\u914D\u7F6E</h3><p>\u70B9\u51FB\u6DFB\u52A0\u6309\u94AE\uFF0C\u6DFB\u52A0\u4E00\u4E2A <code>jenkins</code> \u6743\u9650 <img src="'+p+'" alt="Jenkins"></p><h3 id="\u6DFB\u52A0-api-\u4EE4\u724C" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0-api-\u4EE4\u724C" aria-hidden="true">#</a> \u6DFB\u52A0 API \u4EE4\u724C</h3><p><a href="https://gitee.com/profile/personal_access_tokens" target="_blank" rel="noopener noreferrer">\u79C1\u4EBA\u4EE4\u724C\u83B7\u53D6\u5730\u5740</a></p><p><img src="'+h+'" alt="Jenkins"></p><h3 id="\u6D4B\u8BD5\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u8FDE\u63A5" aria-hidden="true">#</a> \u6D4B\u8BD5\u8FDE\u63A5</h3><p>\u5982\u679C\u5931\u8D25\u8BF7\u5411\u4E0A\u7EE7\u7EED\u91CD\u65B0\u8BBE\u7F6E</p><p><img src="'+m+'" alt="Jenkins"></p><h3 id="\u8BBE\u7F6E-jenkins-\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E-jenkins-\u4F4D\u7F6E" aria-hidden="true">#</a> \u8BBE\u7F6E <code>jenkins</code> \u4F4D\u7F6E</h3><p><img src="'+u+'" alt="Jenkins"></p><p>\u8BBE\u7F6E\u5B8C\u6210\uFF01</p><h2 id="\u65B0\u5EFA\u5E76\u914D\u7F6E\u6784\u5EFA\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u65B0\u5EFA\u5E76\u914D\u7F6E\u6784\u5EFA\u4EFB\u52A1" aria-hidden="true">#</a> \u65B0\u5EFA\u5E76\u914D\u7F6E\u6784\u5EFA\u4EFB\u52A1</h2><h3 id="\u70B9\u51FB\u65B0\u5EFA\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u70B9\u51FB\u65B0\u5EFA\u4EFB\u52A1" aria-hidden="true">#</a> \u70B9\u51FB\u65B0\u5EFA\u4EFB\u52A1</h3><p><img src="'+b+'" alt="Jenkins"></p><h3 id="\u9009\u62E9\u81EA\u7531\u98CE\u683C" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u81EA\u7531\u98CE\u683C" aria-hidden="true">#</a> \u9009\u62E9\u81EA\u7531\u98CE\u683C</h3><p><img src="'+g+'" alt="Jenkins"></p><h3 id="\u6E90\u7801\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801\u7BA1\u7406" aria-hidden="true">#</a> \u6E90\u7801\u7BA1\u7406</h3><p><img src="'+k+'" alt="Jenkins"></p><ol><li><code>Repository URL</code> \u586B\u5199\u4ED3\u5E93\u5730\u5740</li><li><code>Credentials</code> \u6DFB\u52A0\u4F60\u7684\u7801\u4E91\u8D26\u6237</li><li><code>Name</code> \u586B\u5199 <code>origin</code></li><li><code>Refspec</code> \u586B\u5199 <code>+refs/heads/*:refs/remotes/origin/* +refs/pull/*/MERGE:refs/pull/*/MERGE</code></li><li><code>Branch Specifier (blank for &#39;any&#39;)</code> \u586B\u5199\u4F60\u8981\u90E8\u7F72\u7684\u5206\u652F</li></ol><h3 id="\u6784\u5EFA\u89E6\u53D1\u5668" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA\u89E6\u53D1\u5668" aria-hidden="true">#</a> \u6784\u5EFA\u89E6\u53D1\u5668</h3><p>\u6839\u636E\u9879\u76EE\u7684\u60C5\u51B5\u81EA\u884C\u586B\u5199\u3002\u3002\u3002</p><p><img src="'+f+'" alt="Jenkins"></p><h2 id="\u914D\u7F6E-webhooks" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-webhooks" aria-hidden="true">#</a> \u914D\u7F6E WebHooks</h2><ul><li>\u4EE5 <code>gitee</code> \u4E3E\u4F8B\u{1F330}\uFF0C\u5176\u4ED6\u6258\u7BA1\u5E73\u53F0\u4E5F\u662F\u53EF\u4EE5\u7684\uFF0C\u4F8B\u5982 <code>gitlab</code> <code>github</code> \u7B49</li><li>\u7136\u540E\u53BB\u4F60\u7684\u8FDC\u7A0B\u4ED3\u5E93\u627E\u5230\u5982\u4E0B\u6240\u793A\u4F4D\u7F6E <img src="'+v+'" alt="WebHooks"></li><li>\u7136\u540E\u70B9\u51FB\u201C\u6DFB\u52A0\u201D\u6309\u94AE\uFF0C\u6DFB\u52A0\u4E00\u4E2A webhooks \u5730\u5740\uFF08\u5C31\u662F\u4F60\u670D\u52A1\u5668\u7684 post \u8BF7\u6C42\u5730\u5740\uFF09 <img src="'+e+'" alt="WebHooks"></li><li>\u6DFB\u52A0\u6210\u529F\u540E\u53EF\u4EE5\u8FDB\u884C\u6D4B\u8BD5\uFF0C\u8FD4\u56DE\u7684\u4FE1\u606F\u81EA\u5DF1\u53C2\u8003\u4E00\u4E0B\u662F\u5426\u6B63\u786E <img src="'+e+'" alt="WebHooks"></li></ul><p>\u4EE5\u4E0A\u6240\u6709\u5185\u5BB9\u90FD\u5DF2\u7ECF\u914D\u7F6E\u597D\u54AF\uFF0C\u4EE5\u540E\u5C31\u9760\u4F60\u63A8\u4EE3\u7801\u5C31\u53EF\u4EE5\u5B9E\u73B0\u81EA\u52A8\u90E8\u7F72\u4E86\u54E6\uFF0C\u4E0D\u9700\u8981\u53BB\u670D\u52A1\u5668\u5728\u6765\u56DE\u624B\u52A8\u53BB\u64CD\u4F5C\u5566\uFF01</p>',62);function x(J,$){return j}var y=a(_,[["render",x]]);export{y as default};