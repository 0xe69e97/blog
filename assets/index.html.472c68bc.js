import{_ as n,c as s}from"./app.482c2f46.js";const a={},e=s(`<p>\u8FD9\u662F\u4E00\u7BC7\u5173\u4E8E Nginx \u670D\u52A1\u5668\u7AEF\u914D\u7F6E\u7684\u8BB0\u5F55</p><h2 id="nginx-\u5B89\u88C5-centos-7-\u5E76\u914D\u7F6E\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#nginx-\u5B89\u88C5-centos-7-\u5E76\u914D\u7F6E\u670D\u52A1" aria-hidden="true">#</a> nginx \u5B89\u88C5\uFF08centOS 7\uFF09\u5E76\u914D\u7F6E\u670D\u52A1</h2><h3 id="\u6DFB\u52A0-yum-\u6E90" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0-yum-\u6E90" aria-hidden="true">#</a> \u6DFB\u52A0 yum \u6E90</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> -ivh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum <span class="token function">install</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="mac-\u5B89\u88C5-nginx" tabindex="-1"><a class="header-anchor" href="#mac-\u5B89\u88C5-nginx" aria-hidden="true">#</a> Mac \u5B89\u88C5 Nginx</h2><p>\u9996\u5148\u5728\u547D\u4EE4\u884C\u8F93\u5165 <code>nginx</code> \u5982\u679C\u6CA1\u6709\u4EFB\u4F55\u8F93\u51FA\u7684\u8BDD\uFF0C\u4EE3\u8868\u4F60\u5DF2\u7ECF\u5B89\u88C5\u4E86 nginx \u4E86</p><p>\u5426\u5219\u8FDB\u884C\u5B89\u88C5\uFF0C\u76F4\u63A5\u4F7F\u7528 <code>brew</code> \u8FDB\u884C\u5B89\u88C5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8DD1\u5B8C\u4E4B\u540E\u53EF\u4EE5\u5728\u8BD5\u4E00\u4E0B\u662F\u5426\u5B89\u88C5\u6210\u529F</p><div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero;" transform="matrix(.042 0 0 .042 0 -5.178)"></path><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero;" transform="matrix(.042 0 0 .042 0 -5.178)"></path></svg><p class="custom-container-title">TIP</p><p>\u901A\u8FC7 brew \u5B89\u88C5\u7684 nginx \u53EF\u4EE5\u901A\u8FC7 <code>brew info nginx</code> \u67E5\u770B\u76F8\u5173\u4FE1\u606F</p><p>\u6216\u8005\u901A\u8FC7 <code>nginx -V</code> \u6765\u67E5\u770B\u76F8\u5173\u4FE1\u606F</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ brew info nginx

nginx: stable <span class="token number">1.17</span>.10 <span class="token punctuation">(</span>bottled<span class="token punctuation">)</span>, HEAD
HTTP<span class="token punctuation">(</span>S<span class="token punctuation">)</span> server and reverse proxy, and IMAP/POP3 proxy server
https://nginx.org/
/usr/local/Cellar/nginx/1.17.10 <span class="token punctuation">(</span><span class="token number">25</span> files, <span class="token number">2</span>.1MB<span class="token punctuation">)</span> *
  Poured from bottle on <span class="token number">2020</span>-10-10 at <span class="token number">15</span>:43:28
From: https://mirrors.ustc.edu.cn/homebrew-core.git/Formula/nginx.rb
<span class="token operator">==</span><span class="token operator">&gt;</span> Dependencies
Required: openssl@1.1 \u2714, pcre \u2714
<span class="token operator">==</span><span class="token operator">&gt;</span> Options
--HEAD
	Install HEAD version
<span class="token operator">==</span><span class="token operator">&gt;</span> Caveats
Docroot is: /usr/local/var/www

The default port has been <span class="token builtin class-name">set</span> <span class="token keyword">in</span> /usr/local/etc/nginx/nginx.conf to <span class="token number">8080</span> so that
nginx can run without sudo.

nginx will load all files <span class="token keyword">in</span> /usr/local/etc/nginx/servers/.

To have launchd start nginx now and restart at login:
  brew services start nginx
Or, <span class="token keyword">if</span> you don&#39;t want/need a background <span class="token function">service</span> you can just run:
  nginx
<span class="token operator">==</span><span class="token operator">&gt;</span> Analytics
install: <span class="token number">32,211</span> <span class="token punctuation">(</span><span class="token number">30</span> days<span class="token punctuation">)</span>, <span class="token number">102,881</span> <span class="token punctuation">(</span><span class="token number">90</span> days<span class="token punctuation">)</span>, <span class="token number">409,451</span> <span class="token punctuation">(</span><span class="token number">365</span> days<span class="token punctuation">)</span>
install-on-request: <span class="token number">31,621</span> <span class="token punctuation">(</span><span class="token number">30</span> days<span class="token punctuation">)</span>, <span class="token number">100,926</span> <span class="token punctuation">(</span><span class="token number">90</span> days<span class="token punctuation">)</span>, <span class="token number">397,605</span> <span class="token punctuation">(</span><span class="token number">365</span> days<span class="token punctuation">)</span>
build-error: <span class="token number">0</span> <span class="token punctuation">(</span><span class="token number">30</span> days<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ nginx -V

nginx version: nginx/1.17.10
built by clang <span class="token number">11.0</span>.3 <span class="token punctuation">(</span>clang-1103.0.32.29<span class="token punctuation">)</span>
built with OpenSSL <span class="token number">1.1</span>.1f  <span class="token number">31</span> Mar <span class="token number">2020</span> <span class="token punctuation">(</span>running with OpenSSL <span class="token number">1.1</span>.1g  <span class="token number">21</span> Apr <span class="token number">2020</span><span class="token punctuation">)</span>
TLS SNI support enabled
configure arguments: --prefix<span class="token operator">=</span>/usr/local/Cellar/nginx/1.17.10 --sbin-path<span class="token operator">=</span>/usr/local/Cellar/nginx/1.17.10/bin/nginx --with-cc-opt<span class="token operator">=</span><span class="token string">&#39;-I/usr/local/opt/pcre/include -I/usr/local/opt/openssl@1.1/include&#39;</span> --with-ld-opt<span class="token operator">=</span><span class="token string">&#39;-L/usr/local/opt/pcre/lib -L/usr/local/opt/openssl@1.1/lib&#39;</span> --conf-path<span class="token operator">=</span>/usr/local/etc/nginx/nginx.conf --pid-path<span class="token operator">=</span>/usr/local/var/run/nginx.pid --lock-path<span class="token operator">=</span>/usr/local/var/run/nginx.lock --http-client-body-temp-path<span class="token operator">=</span>/usr/local/var/run/nginx/client_body_temp --http-proxy-temp-path<span class="token operator">=</span>/usr/local/var/run/nginx/proxy_temp --http-fastcgi-temp-path<span class="token operator">=</span>/usr/local/var/run/nginx/fastcgi_temp --http-uwsgi-temp-path<span class="token operator">=</span>/usr/local/var/run/nginx/uwsgi_temp --http-scgi-temp-path<span class="token operator">=</span>/usr/local/var/run/nginx/scgi_temp --http-log-path<span class="token operator">=</span>/usr/local/var/log/nginx/access.log --error-log-path<span class="token operator">=</span>/usr/local/var/log/nginx/error.log --with-compat --with-debug --with-http_addition_module --with-http_auth_request_module --with-http_dav_module --with-http_degradation_module --with-http_flv_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_mp4_module --with-http_random_index_module --with-http_realip_module --with-http_secure_link_module --with-http_slice_module --with-http_ssl_module --with-http_stub_status_module --with-http_sub_module --with-http_v2_module --with-ipv6 --with-mail --with-mail_ssl_module --with-pcre --with-pcre-jit --with-stream --with-stream_realip_module --with-stream_ssl_module --with-stream_ssl_preread_module
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="mac-\u4E0B-nginx-\u9ED8\u8BA4\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#mac-\u4E0B-nginx-\u9ED8\u8BA4\u4F4D\u7F6E" aria-hidden="true">#</a> Mac \u4E0B Nginx \u9ED8\u8BA4\u4F4D\u7F6E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/usr/local/etc/nginx/nginx.conf \uFF08\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84\uFF09
/usr/local/var/www \uFF08\u9759\u6001\u6587\u4EF6\u8DEF\u5F84\uFF09
/usr/local/Cellar/nginx/<span class="token punctuation">[</span>version<span class="token punctuation">]</span> \uFF08\u5B89\u88C5\u8DEF\u5F84\uFF1F\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero;" transform="matrix(.042 0 0 .042 0 -5.178)"></path><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero;" transform="matrix(.042 0 0 .042 0 -5.178)"></path></svg><p class="custom-container-title">TIP</p><p>\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE http://localhost:8080 \u6765\u8BBF\u95EE Nginx \u5F00\u542F\u7684\u670D\u52A1</p></div><h3 id="\u6253\u5F00\u9632\u706B\u5899\u7AEF\u53E3\u5E76\u91CD\u542F" tabindex="-1"><a class="header-anchor" href="#\u6253\u5F00\u9632\u706B\u5899\u7AEF\u53E3\u5E76\u91CD\u542F" aria-hidden="true">#</a> \u6253\u5F00\u9632\u706B\u5899\u7AEF\u53E3\u5E76\u91CD\u542F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-cmd --zone<span class="token operator">=</span>public --permanent --add-service<span class="token operator">=</span>http
firewall-cmd --reload
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u67E5\u770B\u9632\u706B\u5899\u6253\u5F00\u7684\u6240\u6709\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u9632\u706B\u5899\u6253\u5F00\u7684\u6240\u6709\u670D\u52A1" aria-hidden="true">#</a> \u67E5\u770B\u9632\u706B\u5899\u6253\u5F00\u7684\u6240\u6709\u670D\u52A1</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-cmd --list-service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u67E5\u770B\u5F53\u524D\u6253\u5F00\u7684\u7AEF\u53E3" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5F53\u524D\u6253\u5F00\u7684\u7AEF\u53E3" aria-hidden="true">#</a> \u67E5\u770B\u5F53\u524D\u6253\u5F00\u7684\u7AEF\u53E3</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-cmd --zone<span class="token operator">=</span>public --list-ports
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u6253\u5F00\u6307\u5B9A\u7AEF\u53E3" tabindex="-1"><a class="header-anchor" href="#\u6253\u5F00\u6307\u5B9A\u7AEF\u53E3" aria-hidden="true">#</a> \u6253\u5F00\u6307\u5B9A\u7AEF\u53E3</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>firewall-cmd --zone<span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">80</span>/tcp
<span class="token comment"># (\u6C38\u4E45\u751F\u6548\u518D\u52A0\u4E0A --permanent)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><svg viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z" style="fill:#48b884;fill-rule:nonzero;" transform="matrix(.042 0 0 .042 0 -5.178)"></path><path d="M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z" style="fill:#48b884;fill-rule:nonzero;" transform="matrix(.042 0 0 .042 0 -5.178)"></path></svg><p class="custom-container-title">TIP</p><p>\u2013zone \u4F5C\u7528\u57DF</p><p>\u2013add-port=8080/tcp \u6DFB\u52A0\u7AEF\u53E3\uFF0C\u683C\u5F0F\u4E3A\uFF1A\u7AEF\u53E3/\u901A\u8BAF\u534F\u8BAE</p><p>\u2013permanent #\u6C38\u4E45\u751F\u6548\uFF0C\u6CA1\u6709\u6B64\u53C2\u6570\u91CD\u542F\u540E\u5931\u6548</p></div><h2 id="\u89E3\u51B3-nginx-403-\u9519\u8BEF\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3-nginx-403-\u9519\u8BEF\u95EE\u9898" aria-hidden="true">#</a> \u89E3\u51B3 nginx 403 \u9519\u8BEF\u95EE\u9898</h2><p>\u7B2C\u4E00\u79CD\u60C5\u51B5\uFF1A \u5728\u4F60\u7684 nginx \u914D\u7F6E\u6587\u4EF6\u4E0B\u7684 root \u5B57\u6BB5\u7684\u8DEF\u5F84\u4E0B\u6CA1\u6709\u627E\u5230 index.html</p><p>\u7B2C\u4E8C\u79CD\u60C5\u51B5\uFF1A \u6CA1\u6709\u7528 root \u7528\u6237\u8FD0\u884C\uFF0C\u5BFC\u81F4\u6743\u9650\u4E0D\u8DB3\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5C06\u6587\u4EF6\u5939\u6743\u9650\u63D0\u5347\u518D\u8BD5</p><h2 id="nginx\u90E8\u7F72\u524D\u7AEFspa\u5E94\u7528\u5B9E\u8DF5" tabindex="-1"><a class="header-anchor" href="#nginx\u90E8\u7F72\u524D\u7AEFspa\u5E94\u7528\u5B9E\u8DF5" aria-hidden="true">#</a> nginx\u90E8\u7F72\u524D\u7AEFSPA\u5E94\u7528\u5B9E\u8DF5</h2><h3 id="nginx-location-\u5339\u914D\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#nginx-location-\u5339\u914D\u89C4\u5219" aria-hidden="true">#</a> nginx location \u5339\u914D\u89C4\u5219</h3><ul><li>~ \u6CE2\u6D6A\u7EBF\u8868\u793A\u6267\u884C\u4E00\u4E2A\u6B63\u5219\u5339\u914D\uFF0C\u533A\u5206\u5927\u5C0F\u5199</li><li>~* \u8868\u793A\u6267\u884C\u4E00\u4E2A\u6B63\u5219\u5339\u914D\uFF0C\u4E0D\u533A\u5206\u5927\u5C0F\u5199</li><li>^~ \u8868\u793A\u666E\u901A\u5B57\u7B26\u5339\u914D\uFF0C\u5982\u679C\u8BE5\u9009\u9879\u5339\u914D\uFF0C\u53EA\u5339\u914D\u8BE5\u9009\u9879\uFF0C\u4E0D\u5339\u914D\u522B\u7684\u9009\u9879\uFF0C\u4E00\u822C\u7528\u6765\u5339\u914D\u76EE\u5F55</li><li>= \u8FDB\u884C\u666E\u901A\u5B57\u7B26\u7CBE\u786E\u5339\u914D</li><li>@ \u5B9A\u4E49\u4E00\u4E2A\u547D\u540D\u7684 location\uFF0C\u4F7F\u7528\u5728\u5185\u90E8\u5B9A\u5411\u65F6\uFF0C\u4F8B\u5982 error_page, try_files</li></ul><h3 id="browserhistory-\u6A21\u5F0F\u7684\u5237\u65B0\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#browserhistory-\u6A21\u5F0F\u7684\u5237\u65B0\u95EE\u9898" aria-hidden="true">#</a> browserHistory \u6A21\u5F0F\u7684\u5237\u65B0\u95EE\u9898</h3><p>browserHistory \u8DEF\u7531\u6A21\u5F0F\u4E0B\uFF0C\u4F7F\u7528history api\u53EF\u4EE5\u5728\u524D\u7AEF\u8FDB\u884C\u9875\u9762\u8DF3\u8F6C\uFF0C\u4F46\u662F\u5237\u65B0\u7684\u8BDD\uFF0C\u5C31\u9700\u8981\u5BF9\u94FE\u63A5\u8FDB\u884C\u4E00\u4E2A\u4FEE\u590D\uFF08\u91CD\u5B9A\u5411\uFF09 \u53EF\u4EE5\u4F7F\u7528 nginx \u7684 <code>try_files</code></p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>location / {
        root   /root/deploy/shenyang_military_general_app;
        index  index.html index.htm;
      	try_files $uri $uri/ /index.html;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u5F00\u542F-gzip-\u538B\u7F29" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542F-gzip-\u538B\u7F29" aria-hidden="true">#</a> \u5F00\u542F gzip \u538B\u7F29</h2><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>gzip  on;
gzip_types    text/plain application/javascript application/x-javascript text/javascript text/xml text/css;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u914D\u7F6Egzip_static</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>gzip_static on;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,39);function r(l,p){return e}var i=n(a,[["render",r]]);export{i as default};