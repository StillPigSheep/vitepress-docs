import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.42a4ab43.js";const A=JSON.parse('{"title":"ACwing 题","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/contests/acwing.md","filePath":"algorithm/contests/acwing.md"}'),p={name:"algorithm/contests/acwing.md"},o=l(`<h1 id="acwing-题" tabindex="-1">ACwing 题 <a class="header-anchor" href="#acwing-题" aria-label="Permalink to &quot;ACwing 题&quot;">​</a></h1><h3 id="_1-放养题" tabindex="-1">1.放养题 <a class="header-anchor" href="#_1-放养题" aria-label="Permalink to &quot;1.放养题&quot;">​</a></h3><div class="language-c++ vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c++</span><pre class="shiki material-theme-ocean vp-code-dark"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">c++</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    string cow</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> john</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    cin </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#BABED8;"> cow </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#BABED8;"> john</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">int</span><span style="color:#BABED8;"> ans </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> beginn </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#BABED8;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;"> john</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">length</span><span style="color:#89DDFF;">();</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">++</span><span style="color:#BABED8;">i</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">int</span><span style="color:#F07178;"> pos </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">cow</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">john</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">i</span><span style="color:#89DDFF;">],</span><span style="color:#F07178;">beginn</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">pos</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> beginn </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> pos </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> beginn </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> ans</span><span style="color:#89DDFF;">++;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">    cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#BABED8;"> ans</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#032F62;">&lt;c++&gt;</span></span>
<span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">namespace</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    string cow, john;</span></span>
<span class="line"><span style="color:#24292E;">    cin </span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;"> cow </span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;"> john;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> ans </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, beginn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> john.</span><span style="color:#6F42C1;">length</span><span style="color:#24292E;">(); </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i)</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> pos </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> cow.</span><span style="color:#6F42C1;">find</span><span style="color:#24292E;">(john[i],beginn);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(pos) beginn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> pos </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> beginn </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, ans</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> ans;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,3),e=[o];function c(t,r,y,i,D,F){return n(),a("div",null,e)}const B=s(p,[["render",c]]);export{A as __pageData,B as default};