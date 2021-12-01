"use strict";(self.webpackChunkqcloud_im_server_sdk_java=self.webpackChunkqcloud_im_server_sdk_java||[]).push([[595],{7425:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-b8fcc610",path:"/guide/quickstart.html",title:"快速上手",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"安装",slug:"安装",children:[{level:3,title:"Maven",slug:"maven",children:[]},{level:3,title:"Gradle",slug:"gradle",children:[]},{level:3,title:"下载 JAR",slug:"下载-jar",children:[]}]},{level:2,title:"初始化",slug:"初始化",children:[]},{level:2,title:"使用示例",slug:"使用示例",children:[]}],filePathRelative:"guide/quickstart.md",git:{updatedTime:1638342532e3,contributors:[{name:"Yang Libin",email:"szuyanglb@outlook.com",commits:7},{name:"yanglbme",email:"szuyanglb@outlook.com",commits:2},{name:"yu",email:"502400992@qq.com",commits:1},{name:"怡蘅",email:"hongyihengg@gmail.com",commits:1}]}}},2925:(n,a,s)=>{s.r(a),s.d(a,{default:()=>k});var t=s(6252);const e=(0,t.uE)('<h1 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="maven" tabindex="-1"><a class="header-anchor" href="#maven" aria-hidden="true">#</a> Maven</h3><p>在项目的 <code>pom.xml</code> 的 dependencies 中引入以下依赖:</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.github.doocs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>im-server-sdk-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.2.12<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="gradle" tabindex="-1"><a class="header-anchor" href="#gradle" aria-hidden="true">#</a> Gradle</h3><div class="language-gradle ext-gradle line-numbers-mode"><pre class="language-gradle"><code>implementation group: &#39;io.github.doocs&#39;, name: &#39;im-server-sdk-java&#39;, version: &#39;0.2.12&#39;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="下载-jar" tabindex="-1"><a class="header-anchor" href="#下载-jar" aria-hidden="true">#</a> 下载 JAR</h3>',8),p={href:"https://repo1.maven.org/maven2/io/github/doocs/im-server-sdk-java/",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("Maven 中央仓库"),o=(0,t.uE)('<h2 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h2><p>在使用腾讯云即时 IM 服务端 REST API 之前， 需要先通过 <code>appId</code>, <code>userId</code>, <code>key</code> 获取到一个 <code>ImClient</code> 实例:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// sdk appId</span>\n<span class="token keyword">long</span> appId <span class="token operator">=</span> <span class="token number">1400554812</span><span class="token punctuation">;</span>\n\n<span class="token comment">// admin userId</span>\n<span class="token class-name">String</span> userId <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// application key</span>\n<span class="token class-name">String</span> key <span class="token operator">=</span> <span class="token string">&quot;60c6c5925f3ae52c7325ac5a8ec78e44c056d1dd84d54e12ffa39911267a2a70&quot;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// create a default ImClient instance</span>\n<span class="token class-name">ImClient</span> client <span class="token operator">=</span> <span class="token class-name">ImClient</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>appId<span class="token punctuation">,</span> userId<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// create a custom ImClient instance</span>\n<span class="token class-name">ClientConfiguration</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClientConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconfig<span class="token punctuation">.</span><span class="token function">setExpireTime</span><span class="token punctuation">(</span><span class="token number">7</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconfig<span class="token punctuation">.</span><span class="token function">setAutoRenewSig</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">ImClient</span> client <span class="token operator">=</span> <span class="token class-name">ImClient</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>appId<span class="token punctuation">,</span> userId<span class="token punctuation">,</span> key<span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><code>ClientConfiguration</code> 支持对以下参数进行自定义配置：</p><table><thead><tr><th>字段</th><th>类型</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>maxRetries</code></td><td>int</td><td>HTTP 最大重试次数</td><td>3</td></tr><tr><td><code>connectTimeout</code></td><td>long</td><td>HTTP 连接超时（毫秒）</td><td>3000</td></tr><tr><td><code>readTimeout</code></td><td>long</td><td>HTTP 读超时（毫秒）</td><td>3000</td></tr><tr><td><code>writeTimeout</code></td><td>long</td><td>HTTP 写超时（毫秒）</td><td>3000</td></tr><tr><td><code>expireTime</code></td><td>long</td><td>UserSig 签名有效时长（秒）</td><td>86400</td></tr><tr><td><code>autoRenewSig</code></td><td>boolean</td><td>是否自动进行 UserSig 签名续期</td><td>true</td></tr><tr><td><code>userAgent</code></td><td>String</td><td>User-Agent</td><td></td></tr></tbody></table><h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h2><p>获取到 <code>ImClient</code> 实例后，就可以方便地进行 REST API 调用了。</p>',7),l=(0,t.Uk)("我们以 "),u=(0,t.Uk)("帐号管理-导入单个帐号"),i=(0,t.Uk)(" 为例："),r=(0,t.uE)('<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">AccountImportRequest</span> request <span class="token operator">=</span> <span class="token class-name">AccountImportRequest</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">identifier</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">faceUrl</span><span class="token punctuation">(</span><span class="token string">&quot;https://avatars.githubusercontent.com/u/43716716?s=200&amp;v=4&quot;</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">nick</span><span class="token punctuation">(</span><span class="token string">&quot;doocs&quot;</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token class-name">AccountImportResult</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span>account<span class="token punctuation">.</span><span class="token function">accountImport</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',1),d={},k=(0,s(3744).Z)(d,[["render",function(n,a){const s=(0,t.up)("OutboundLink"),d=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,(0,t._)("p",null,[(0,t._)("a",p,[c,(0,t.Wm)(s)])]),o,(0,t._)("p",null,[l,(0,t.Wm)(d,{to:"/guide/account.html#%E5%AF%BC%E5%85%A5%E5%8D%95%E4%B8%AA%E5%B8%90%E5%8F%B7"},{default:(0,t.w5)((()=>[u])),_:1}),i]),r],64)}]])},3744:(n,a)=>{a.Z=(n,a)=>{const s=n.__vccOpts||n;for(const[n,t]of a)s[n]=t;return s}}}]);