import{_ as n,c as s}from"./app.482c2f46.js";var a="/images/posts/2019/cssrem.gif",p="/images/posts/2019/example.png";const t={},e=s(`<h2 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u5C06\u8BBE\u7F6E\u653E\u5165\u6B64\u6587\u4EF6\u4E2D\u4EE5\u8986\u76D6\u9ED8\u8BA4\u8BBE\u7F6E</span>
<span class="token punctuation">{</span>
  <span class="token comment">// \u663E\u793A\u5782\u76F4\u6807\u5C3A\u7684\u5217</span>
  <span class="token property">&quot;editor.rulers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workbench.iconTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode-icons&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5141\u8BB8\u5728\u4EFB\u4F55\u6587\u4EF6\u4E2D\u8BBE\u7F6E\u65AD\u70B9</span>
  <span class="token property">&quot;debug.allowBreakpointsEverywhere&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u63A7\u5236\u6982\u8FF0\u6807\u5C3A\u5468\u56F4\u662F\u5426\u8981\u7ED8\u5236\u8FB9\u6846\u3002</span>
  <span class="token property">&quot;editor.overviewRulerBorder&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workbench.editor.tabCloseButton&quot;</span><span class="token operator">:</span> <span class="token string">&quot;right&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.renderIndentGuides&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;vetur.format.defaultFormatter.html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;js-beautify-html&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;explorer.confirmDelete&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// &quot;editor.cursorStyle&quot;: &quot;block&quot;,</span>
  <span class="token comment">// &quot;editor.matchBrackets&quot;: false,</span>
  <span class="token property">&quot;emmet.syntaxProfiles&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;vue-html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.smoothScrolling&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u63A7\u5236\u6298\u884C\u65B9\u5F0F\u3002\u53EF\u4EE5\u9009\u62E9:</span>
  <span class="token comment">//  - &quot;off&quot; (\u7981\u7528\u6298\u884C)\uFF0C</span>
  <span class="token comment">//  - &quot;on&quot; (\u6839\u636E\u89C6\u533A\u5BBD\u5EA6\u6298\u884C)\uFF0C</span>
  <span class="token comment">//  - &quot;wordWrapColumn&quot; (\u5728 &quot;editor.wordWrapColumn&quot; \u5904\u6362\u884C)</span>
  <span class="token comment">//  - &quot;bounded&quot; (\u5728\u89C6\u533A\u5BBD\u5EA6\u548C &quot;editor.wordWrapColumn&quot; \u4E24\u8005\u7684\u8F83\u5C0F\u8005\u5904\u6362\u884C)\u3002</span>
  <span class="token property">&quot;editor.wordWrap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u63A7\u5236\u662F\u5426\u5728\u641C\u7D22\u4E2D\u8DDF\u8E2A\u7B26\u53F7\u94FE\u63A5\u3002</span>
  <span class="token property">&quot;search.followSymlinks&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// &quot;workbench.settings.settingsSearchTocBehavior&quot;: &quot;show&quot;,</span>
  <span class="token property">&quot;editor.cursorBlinking&quot;</span><span class="token operator">:</span> <span class="token string">&quot;solid&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4FDD\u5B58\u4EE3\u7801\u65F6\uFF0C\u91C7\u7528\u4EE3\u7801\u683C\u5F0F\u5316</span>
  <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u4FDD\u5B58\u65F6\uFF0C\u81EA\u52A8\u4FDD\u5B58\u6210ESLint\u8BED\u6CD5</span>
  <span class="token comment">// &quot;eslint.autoFixOnSave&quot;: true, \u8BE5\u65B9\u6CD5\u5DF2\u7ECF\u5E9F\u5F03\u4E86\u3002\u3002</span>
  <span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token comment">// &quot;source.fixAll&quot;: true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// &quot;eslint.validate&quot;: [</span>
  <span class="token comment">//   &quot;javascript&quot;,</span>
  <span class="token comment">//   &quot;javascriptreact&quot;,</span>
  <span class="token comment">//   {</span>
  <span class="token comment">//     &quot;language&quot;: &quot;vue&quot;,</span>
  <span class="token comment">//     &quot;autoFix&quot;: true</span>
  <span class="token comment">//   },</span>
  <span class="token comment">//   {</span>
  <span class="token comment">//     &quot;language&quot;: &quot;typescript&quot;,</span>
  <span class="token comment">//     &quot;autoFix&quot;: true</span>
  <span class="token comment">//   },</span>
  <span class="token comment">//   {</span>
  <span class="token comment">//     &quot;language&quot;: &quot;typescriptreact&quot;,</span>
  <span class="token comment">//     &quot;autoFix&quot;: true</span>
  <span class="token comment">//   }</span>
  <span class="token comment">// ],</span>
  <span class="token comment">// &quot;eslint.validate&quot;: [</span>
  <span class="token comment">//     &quot;javascript&quot;,</span>
  <span class="token comment">//     &quot;javascriptvue&quot;,</span>
  <span class="token comment">//     &quot;typescript&quot;,</span>
  <span class="token comment">//     {</span>
  <span class="token comment">//         &quot;language&quot;: &quot;vue&quot;,</span>
  <span class="token comment">//         &quot;autoFix&quot;: true</span>
  <span class="token comment">//     },</span>
  <span class="token comment">//     {</span>
  <span class="token comment">//         &quot;language&quot;: &quot;typescript&quot;,</span>
  <span class="token comment">//         &quot;autoFix&quot;: true</span>
  <span class="token comment">//     }</span>
  <span class="token comment">// ],</span>
  <span class="token comment">// &quot;eslint.validate&quot;: [</span>
  <span class="token comment">//     &quot;javascript&quot;,{</span>
  <span class="token comment">//         &quot;language&quot;: &quot;vue&quot;,</span>
  <span class="token comment">//         &quot;autoFix&quot;: true</span>
  <span class="token comment">//     },&quot;html&quot;,</span>
  <span class="token comment">//     &quot;vue&quot;,</span>
  <span class="token comment">//     &quot;typeScript&quot;</span>
  <span class="token comment">// ],</span>
  <span class="token property">&quot;editor.tabSize&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.renderLineHighlight&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.lineHeight&quot;</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.roundedSelection&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;extensions.autoUpdate&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dart.flutterSdkPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/Users/smalin/development/flutter&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5DE5\u4F5C\u533A\u53EA\u663E\u793A\u66F4\u6539\u540E\u7684\u6587\u4EF6</span>
  <span class="token property">&quot;workbench.editor.swipeToNavigate&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;breadcrumbs.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workbench.activityBar.visible&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workbench.startupEditor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;welcomePage&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[vue]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;octref.vetur&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[javascript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode.typescript-language-features&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;markdown-table-formatter.markdownGrammarScopes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;markdown&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;vue&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;explorer.confirmDragAndDrop&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;vetur.useWorkspaceDependencies&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workbench.fontAliasing&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workbench.colorTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Dracula&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hediet.vscode-drawio.local-storage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eyIuZHJhd2lvLWNvbmZpZyI6IntcImxhbmd1YWdlXCI6XCJcIixcImN1c3RvbUZvbnRzXCI6W10sXCJsaWJyYXJpZXNcIjpcImdlbmVyYWxcIixcImN1c3RvbUxpYnJhcmllc1wiOltcIkwuc2NyYXRjaHBhZFwiXSxcInBsdWdpbnNcIjpbXSxcInJlY2VudENvbG9yc1wiOltcIkYwMTgwMFwiXSxcImZvcm1hdFdpZHRoXCI6MjQwLFwiY3JlYXRlVGFyZ2V0XCI6ZmFsc2UsXCJwYWdlRm9ybWF0XCI6e1wieFwiOjAsXCJ5XCI6MCxcIndpZHRoXCI6ODUwLFwiaGVpZ2h0XCI6MTEwMH0sXCJzZWFyY2hcIjp0cnVlLFwic2hvd1N0YXJ0U2NyZWVuXCI6dHJ1ZSxcImdyaWRDb2xvclwiOlwiI2QwZDBkMFwiLFwiZGFya0dyaWRDb2xvclwiOlwiIzZlNmU2ZVwiLFwiYXV0b3NhdmVcIjp0cnVlLFwicmVzaXplSW1hZ2VzXCI6bnVsbCxcIm9wZW5Db3VudGVyXCI6MSxcInZlcnNpb25cIjoxOCxcInVuaXRcIjoxLFwiaXNSdWxlck9uXCI6ZmFsc2UsXCJ1aVwiOlwiXCJ9IiwiLnJlY2VudCI6Ilt7XCJpZFwiOlwiTFVudGl0bGVkJTIwRGlhZ3JhbS5odG1sXCIsXCJ0aXRsZVwiOlwiVW50aXRsZWQgRGlhZ3JhbS5odG1sXCIsXCJtb2RlXCI6XCJicm93c2VyXCJ9XSJ9&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.fontFamily&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Consolas Source Code Pro, Menlo, Monace&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;cSpell.userWords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;dinglin&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Echarts&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;esbuild&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;hoverable&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;iife&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Popconfirm&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Smalin&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;TENCENT&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;unmount&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;vite&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;Vultr&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.renderControlCharacters&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[html]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;cssrem.rootFontSize&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
  <span class="token property">&quot;cssrem.autoRemovePrefixZero&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[javascriptreact]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;pathAlias.aliasMap&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// &quot;@CY&quot;: &quot;\${cwd}/src/2021chunyun&quot;,</span>
    <span class="token property">&quot;@&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${cwd}/src&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[json]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;explorer.compactFolders&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// &quot;editor.fontWeight&quot;: &quot;500&quot;</span>
  <span class="token comment">// &quot;vscode_custom_css.imports&quot;: [</span>
  <span class="token comment">//   &quot;file:///Users/smalin/touming.css&quot;,</span>
  <span class="token comment">//   &quot;file:///Users/smalin/touming.js&quot;,</span>
  <span class="token comment">//   &quot;file:///Users/smalin/synthwave84.css&quot;</span>
  <span class="token comment">//   ],</span>
  <span class="token comment">//   &quot;vscode_custom_css.policy&quot;: true</span>
  <span class="token comment">// </span>
  <span class="token comment">// \u5173\u95ED\u5EFA\u8BAE\u63D0\u793A\uFF0C\u4E3B\u8981\u9488\u5BF9\u4E8E xx.config.js \u548C xx.config.ts \u7684\u914D\u7F6E</span>
  <span class="token property">&quot;typescript.suggestionActions.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;javascript.suggestionActions.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;gitlens.mode.active&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zen&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;path-intellisense.mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;@src&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${workspaceRoot}/src&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;liveServer.settings.donotShowInfoMsg&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token property">&quot;[typescriptreact]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;[typescript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode.typescript-language-features&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;editor.inlineSuggest.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token property">&quot;github.copilot.enable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;*&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;yaml&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;plaintext&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;markdown&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;javascript&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;leetcode.workspaceFolder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/Users/dinglin/.leetcode&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;leetcode.defaultLanguage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;leetcode.endpoint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;leetcode-cn&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;[markdown]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;[yaml]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;[mdx]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rvest.vs-code-prettier-eslint&quot;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br></div></div><h2 id="\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6" aria-hidden="true">#</a> \u63D2\u4EF6</h2><ul><li>\u4E2D\u6587\u63D2\u4EF6</li></ul><h3 id="chinese-simplified-language-pack-for-visual-studio-code" tabindex="-1"><a class="header-anchor" href="#chinese-simplified-language-pack-for-visual-studio-code" aria-hidden="true">#</a> <code>Chinese (Simplified) Language Pack for Visual Studio Code</code></h3><ul><li>\u53D8\u91CF\u8D77\u540D\u795E\u5668</li></ul><h3 id="codelf" tabindex="-1"><a class="header-anchor" href="#codelf" aria-hidden="true">#</a> <code>Codelf</code></h3><ul><li>\u81EA\u52A8\u5C06px\u8F6C\u6362\u6210rem\u5355\u4F4D</li></ul><h3 id="cssrem" tabindex="-1"><a class="header-anchor" href="#cssrem" aria-hidden="true">#</a> <code>cssrem</code></h3><p><img src="`+a+'" alt="cssrem"></p><ul><li>\u5C06\u76F8\u540C\u7684\u62EC\u53F7\u6362\u6210\u5BF9\u5E94\u7684\u989C\u8272</li></ul><h3 id="bracket-pair-colorizer" tabindex="-1"><a class="header-anchor" href="#bracket-pair-colorizer" aria-hidden="true">#</a> <code>Bracket Pair Colorizer</code></h3><p><img src="'+p+'" alt="cssrem"></p><ul><li>\u8C03\u8BD5\u5668\uFF0C\u7C7B\u4F3C\u8C37\u6B4C\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u53EF\u4EE5\u5728vscode\u4E2D\u8C03\u8BD5js\u4EE3\u7801</li></ul><h3 id="debugger-for-chrome" tabindex="-1"><a class="header-anchor" href="#debugger-for-chrome" aria-hidden="true">#</a> <code>Debugger for Chrome</code></h3><ul><li>ESLint \u8BED\u6CD5\u6821\u9A8C</li></ul><h3 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> <code>ESLint</code></h3><ul><li>Vetur\uFF0CVue\u5F00\u53D1\u8005\u5FC5\u5907</li></ul><h3 id="vetur" tabindex="-1"><a class="header-anchor" href="#vetur" aria-hidden="true">#</a> <code>Vetur</code></h3>',19);function o(r,l){return e}var u=n(t,[["render",o]]);export{u as default};
