import{_ as n,c as a,e,o as p}from"./app-igEGucXV.js";const t="/images/posts/2019/cssrem.gif",o="/images/posts/2019/example.png",l={};function c(i,s){return p(),a("div",null,[...s[0]||(s[0]=[e(`<h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h2><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code class="language-json"><span class="line"><span class="token comment">// 将设置放入此文件中以覆盖默认设置</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 显示垂直标尺的列</span></span>
<span class="line">  <span class="token property">&quot;editor.rulers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;editor.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;workbench.iconTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode-icons&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 允许在任何文件中设置断点</span></span>
<span class="line">  <span class="token property">&quot;debug.allowBreakpointsEverywhere&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 控制概述标尺周围是否要绘制边框。</span></span>
<span class="line">  <span class="token property">&quot;editor.overviewRulerBorder&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;workbench.editor.tabCloseButton&quot;</span><span class="token operator">:</span> <span class="token string">&quot;right&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;editor.renderIndentGuides&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;vetur.format.defaultFormatter.html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;js-beautify-html&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;explorer.confirmDelete&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// &quot;editor.cursorStyle&quot;: &quot;block&quot;,</span></span>
<span class="line">  <span class="token comment">// &quot;editor.matchBrackets&quot;: false,</span></span>
<span class="line">  <span class="token property">&quot;emmet.syntaxProfiles&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;vue-html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;editor.smoothScrolling&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 控制折行方式。可以选择:</span></span>
<span class="line">  <span class="token comment">//  - &quot;off&quot; (禁用折行)，</span></span>
<span class="line">  <span class="token comment">//  - &quot;on&quot; (根据视区宽度折行)，</span></span>
<span class="line">  <span class="token comment">//  - &quot;wordWrapColumn&quot; (在 &quot;editor.wordWrapColumn&quot; 处换行)</span></span>
<span class="line">  <span class="token comment">//  - &quot;bounded&quot; (在视区宽度和 &quot;editor.wordWrapColumn&quot; 两者的较小者处换行)。</span></span>
<span class="line">  <span class="token property">&quot;editor.wordWrap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 控制是否在搜索中跟踪符号链接。</span></span>
<span class="line">  <span class="token property">&quot;search.followSymlinks&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// &quot;workbench.settings.settingsSearchTocBehavior&quot;: &quot;show&quot;,</span></span>
<span class="line">  <span class="token property">&quot;editor.cursorBlinking&quot;</span><span class="token operator">:</span> <span class="token string">&quot;solid&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 保存代码时，采用代码格式化</span></span>
<span class="line">  <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 保存时，自动保存成ESLint语法</span></span>
<span class="line">  <span class="token comment">// &quot;eslint.autoFixOnSave&quot;: true, 该方法已经废弃了。。</span></span>
<span class="line">  <span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token comment">// &quot;source.fixAll&quot;: true</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// &quot;eslint.validate&quot;: [</span></span>
<span class="line">  <span class="token comment">//   &quot;javascript&quot;,</span></span>
<span class="line">  <span class="token comment">//   &quot;javascriptreact&quot;,</span></span>
<span class="line">  <span class="token comment">//   {</span></span>
<span class="line">  <span class="token comment">//     &quot;language&quot;: &quot;vue&quot;,</span></span>
<span class="line">  <span class="token comment">//     &quot;autoFix&quot;: true</span></span>
<span class="line">  <span class="token comment">//   },</span></span>
<span class="line">  <span class="token comment">//   {</span></span>
<span class="line">  <span class="token comment">//     &quot;language&quot;: &quot;typescript&quot;,</span></span>
<span class="line">  <span class="token comment">//     &quot;autoFix&quot;: true</span></span>
<span class="line">  <span class="token comment">//   },</span></span>
<span class="line">  <span class="token comment">//   {</span></span>
<span class="line">  <span class="token comment">//     &quot;language&quot;: &quot;typescriptreact&quot;,</span></span>
<span class="line">  <span class="token comment">//     &quot;autoFix&quot;: true</span></span>
<span class="line">  <span class="token comment">//   }</span></span>
<span class="line">  <span class="token comment">// ],</span></span>
<span class="line">  <span class="token comment">// &quot;eslint.validate&quot;: [</span></span>
<span class="line">  <span class="token comment">//     &quot;javascript&quot;,</span></span>
<span class="line">  <span class="token comment">//     &quot;javascriptvue&quot;,</span></span>
<span class="line">  <span class="token comment">//     &quot;typescript&quot;,</span></span>
<span class="line">  <span class="token comment">//     {</span></span>
<span class="line">  <span class="token comment">//         &quot;language&quot;: &quot;vue&quot;,</span></span>
<span class="line">  <span class="token comment">//         &quot;autoFix&quot;: true</span></span>
<span class="line">  <span class="token comment">//     },</span></span>
<span class="line">  <span class="token comment">//     {</span></span>
<span class="line">  <span class="token comment">//         &quot;language&quot;: &quot;typescript&quot;,</span></span>
<span class="line">  <span class="token comment">//         &quot;autoFix&quot;: true</span></span>
<span class="line">  <span class="token comment">//     }</span></span>
<span class="line">  <span class="token comment">// ],</span></span>
<span class="line">  <span class="token comment">// &quot;eslint.validate&quot;: [</span></span>
<span class="line">  <span class="token comment">//     &quot;javascript&quot;,{</span></span>
<span class="line">  <span class="token comment">//         &quot;language&quot;: &quot;vue&quot;,</span></span>
<span class="line">  <span class="token comment">//         &quot;autoFix&quot;: true</span></span>
<span class="line">  <span class="token comment">//     },&quot;html&quot;,</span></span>
<span class="line">  <span class="token comment">//     &quot;vue&quot;,</span></span>
<span class="line">  <span class="token comment">//     &quot;typeScript&quot;</span></span>
<span class="line">  <span class="token comment">// ],</span></span>
<span class="line">  <span class="token property">&quot;editor.tabSize&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;editor.renderLineHighlight&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;editor.lineHeight&quot;</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;editor.roundedSelection&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;extensions.autoUpdate&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;dart.flutterSdkPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/Users/smalin/development/flutter&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 工作区只显示更改后的文件</span></span>
<span class="line">  <span class="token property">&quot;workbench.editor.swipeToNavigate&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;breadcrumbs.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;workbench.activityBar.visible&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;workbench.startupEditor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;welcomePage&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;[vue]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;octref.vetur&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;[javascript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode.typescript-language-features&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;markdown-table-formatter.markdownGrammarScopes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">&quot;markdown&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;vue&quot;</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;explorer.confirmDragAndDrop&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;vetur.useWorkspaceDependencies&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;workbench.fontAliasing&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;workbench.colorTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Dracula&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;hediet.vscode-drawio.local-storage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eyIuZHJhd2lvLWNvbmZpZyI6IntcImxhbmd1YWdlXCI6XCJcIixcImN1c3RvbUZvbnRzXCI6W10sXCJsaWJyYXJpZXNcIjpcImdlbmVyYWxcIixcImN1c3RvbUxpYnJhcmllc1wiOltcIkwuc2NyYXRjaHBhZFwiXSxcInBsdWdpbnNcIjpbXSxcInJlY2VudENvbG9yc1wiOltcIkYwMTgwMFwiXSxcImZvcm1hdFdpZHRoXCI6MjQwLFwiY3JlYXRlVGFyZ2V0XCI6ZmFsc2UsXCJwYWdlRm9ybWF0XCI6e1wieFwiOjAsXCJ5XCI6MCxcIndpZHRoXCI6ODUwLFwiaGVpZ2h0XCI6MTEwMH0sXCJzZWFyY2hcIjp0cnVlLFwic2hvd1N0YXJ0U2NyZWVuXCI6dHJ1ZSxcImdyaWRDb2xvclwiOlwiI2QwZDBkMFwiLFwiZGFya0dyaWRDb2xvclwiOlwiIzZlNmU2ZVwiLFwiYXV0b3NhdmVcIjp0cnVlLFwicmVzaXplSW1hZ2VzXCI6bnVsbCxcIm9wZW5Db3VudGVyXCI6MSxcInZlcnNpb25cIjoxOCxcInVuaXRcIjoxLFwiaXNSdWxlck9uXCI6ZmFsc2UsXCJ1aVwiOlwiXCJ9IiwiLnJlY2VudCI6Ilt7XCJpZFwiOlwiTFVudGl0bGVkJTIwRGlhZ3JhbS5odG1sXCIsXCJ0aXRsZVwiOlwiVW50aXRsZWQgRGlhZ3JhbS5odG1sXCIsXCJtb2RlXCI6XCJicm93c2VyXCJ9XSJ9&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;editor.fontFamily&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Consolas Source Code Pro, Menlo, Monace&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;cSpell.userWords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">&quot;dinglin&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;Echarts&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;esbuild&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;hoverable&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;iife&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;Popconfirm&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;Smalin&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;TENCENT&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;unmount&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;vite&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;Vultr&quot;</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;editor.renderControlCharacters&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;[html]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;cssrem.rootFontSize&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;cssrem.autoRemovePrefixZero&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;[javascriptreact]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;pathAlias.aliasMap&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// &quot;@CY&quot;: &quot;\${cwd}/src/2021chunyun&quot;,</span></span>
<span class="line">    <span class="token property">&quot;@&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${cwd}/src&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;[json]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;explorer.compactFolders&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// &quot;editor.fontWeight&quot;: &quot;500&quot;</span></span>
<span class="line">  <span class="token comment">// &quot;vscode_custom_css.imports&quot;: [</span></span>
<span class="line">  <span class="token comment">//   &quot;file:///Users/smalin/touming.css&quot;,</span></span>
<span class="line">  <span class="token comment">//   &quot;file:///Users/smalin/touming.js&quot;,</span></span>
<span class="line">  <span class="token comment">//   &quot;file:///Users/smalin/synthwave84.css&quot;</span></span>
<span class="line">  <span class="token comment">//   ],</span></span>
<span class="line">  <span class="token comment">//   &quot;vscode_custom_css.policy&quot;: true</span></span>
<span class="line">  <span class="token comment">// </span></span>
<span class="line">  <span class="token comment">// 关闭建议提示，主要针对于 xx.config.js 和 xx.config.ts 的配置</span></span>
<span class="line">  <span class="token property">&quot;typescript.suggestionActions.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;javascript.suggestionActions.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;gitlens.mode.active&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zen&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;path-intellisense.mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">&quot;@src&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${workspaceRoot}/src&quot;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">&quot;liveServer.settings.donotShowInfoMsg&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">&quot;[typescriptreact]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">&quot;[typescript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode.typescript-language-features&quot;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">&quot;editor.inlineSuggest.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">&quot;github.copilot.enable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;*&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;yaml&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;plaintext&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;markdown&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;javascript&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">&quot;leetcode.workspaceFolder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/Users/dinglin/.leetcode&quot;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">&quot;leetcode.defaultLanguage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">&quot;leetcode.endpoint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;leetcode-cn&quot;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">&quot;[markdown]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">&quot;[yaml]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token property">&quot;[mdx]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rvest.vs-code-prettier-eslint&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件"><span>插件</span></a></h2><ul><li>中文插件</li></ul><h3 id="chinese-simplified-language-pack-for-visual-studio-code" tabindex="-1"><a class="header-anchor" href="#chinese-simplified-language-pack-for-visual-studio-code"><span><code>Chinese (Simplified) Language Pack for Visual Studio Code</code></span></a></h3><ul><li>变量起名神器</li></ul><h3 id="codelf" tabindex="-1"><a class="header-anchor" href="#codelf"><span><code>Codelf</code></span></a></h3><ul><li>自动将px转换成rem单位</li></ul><h3 id="cssrem" tabindex="-1"><a class="header-anchor" href="#cssrem"><span><code>cssrem</code></span></a></h3><p><img src="`+t+'" alt="cssrem"></p><ul><li>将相同的括号换成对应的颜色</li></ul><h3 id="bracket-pair-colorizer" tabindex="-1"><a class="header-anchor" href="#bracket-pair-colorizer"><span><code>Bracket Pair Colorizer</code></span></a></h3><p><img src="'+o+'" alt="cssrem"></p><ul><li>调试器，类似谷歌开发者工具，可以在vscode中调试js代码</li></ul><h3 id="debugger-for-chrome" tabindex="-1"><a class="header-anchor" href="#debugger-for-chrome"><span><code>Debugger for Chrome</code></span></a></h3><ul><li>ESLint 语法校验</li></ul><h3 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint"><span><code>ESLint</code></span></a></h3><ul><li>Vetur，Vue开发者必备</li></ul><h3 id="vetur" tabindex="-1"><a class="header-anchor" href="#vetur"><span><code>Vetur</code></span></a></h3>',19)])])}const r=n(l,[["render",c]]),d=JSON.parse('{"path":"/post/2019/01/16/vs-code/","title":"VScode 配置记录","lang":"zh-CN","frontmatter":{"title":"VScode 配置记录","subtitle":"个人的 VSCode 配置记录，以防不时之需～","author":"离殊","date":"2019-01-16T00:00:00.000Z","useHeaderImage":true,"headerImage":"/images/posts/2019/vscode.jpeg","headerMask":"rgb(14, 21, 5, .5)","permalinkPattern":"/post/:year/:month/:day/:slug/","tags":["Tools"]},"git":{"updatedTime":1760173234000,"contributors":[{"name":"0xe69e97","username":"0xe69e97","email":"0xe69e97@gmail.com","commits":3,"url":"https://github.com/0xe69e97"}],"changelog":[{"hash":"8b50bf6141b1287f40e857d7ad53c66753a52b56","time":1760173234000,"email":"lishu@example.com","author":"0xe69e97","message":"feat: 完成文档升级"},{"hash":"4bfeafe7108a3396b1b0c74ab58d967396ca0f9f","time":1650297463000,"email":"0xe69e97@gmail.com","author":"0xe69e97","message":"feat: 修改花名"},{"hash":"7be2b2fa48553de52111009313a67a45884503db","time":1648733183000,"email":"0xe69e97@gmail.com","author":"0xe69e97","message":"feat: 继续迁移之前文章"}]},"filePathRelative":"posts/2019/2019-03-29-vs-code.md"}');export{r as comp,d as data};
