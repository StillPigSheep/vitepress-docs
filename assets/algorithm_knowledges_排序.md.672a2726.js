import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.24d42a1d.js";const B=JSON.parse('{"title":"排序","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/knowledges/排序.md","filePath":"algorithm/knowledges/排序.md"}'),p={name:"algorithm/knowledges/排序.md"},o=l(`<h1 id="排序" tabindex="-1">排序 <a class="header-anchor" href="#排序" aria-label="Permalink to &quot;排序&quot;">​</a></h1><h3 id="宇宙总统" tabindex="-1">宇宙总统 <a class="header-anchor" href="#宇宙总统" aria-label="Permalink to &quot;宇宙总统&quot;">​</a></h3><p><a href="https://www.luogu.com.cn/problem/P1781" target="_blank" rel="noreferrer">题目链接</a></p><div class="language-C++ vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C++</span><pre class="shiki material-theme-ocean vp-code-dark"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#include</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">bits/stdc++.h</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">std</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">vector</span><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> num</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">unordered_map</span><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;">string</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">int</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> human</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">bool</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">cmp</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">num1</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">num2</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">num1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">length</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">!=</span><span style="color:#BABED8;"> num2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">length</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> num1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">length</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;"> num2</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">length</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> num1 </span><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;"> num2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">int</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#C792EA;">int</span><span style="color:#BABED8;"> n</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    cin </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#BABED8;"> n</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">int</span><span style="color:#BABED8;"> i </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> i </span><span style="color:#89DDFF;">&lt;</span><span style="color:#BABED8;"> n</span><span style="color:#89DDFF;">;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">++</span><span style="color:#BABED8;">i</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        string tmp</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        cin </span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#F07178;"> tmp</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#BABED8;">num</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push_back</span><span style="color:#89DDFF;">(</span><span style="color:#F07178;">tmp</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#BABED8;">human</span><span style="color:#89DDFF;">[</span><span style="color:#F07178;">tmp</span><span style="color:#89DDFF;">]</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> i </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#82AAFF;">sort</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">num</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">begin</span><span style="color:#89DDFF;">(),</span><span style="color:#BABED8;"> num</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end</span><span style="color:#89DDFF;">(),</span><span style="color:#BABED8;"> cmp</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">    cout </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#BABED8;"> human</span><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">num</span><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">n </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]]</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#BABED8;"> endl</span></span>
<span class="line"><span style="color:#BABED8;">         </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#BABED8;"> num</span><span style="color:#89DDFF;">[</span><span style="color:#BABED8;">n </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;bits/stdc++.h&gt;</span></span>
<span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">namespace</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">vector</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">string</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> num;</span></span>
<span class="line"><span style="color:#24292E;">unordered_map</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">string, </span><span style="color:#D73A49;">int&gt;</span><span style="color:#24292E;"> human;</span></span>
<span class="line"><span style="color:#D73A49;">bool</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">cmp</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">string</span><span style="color:#24292E;"> </span><span style="color:#E36209;">num1</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">string</span><span style="color:#24292E;"> </span><span style="color:#E36209;">num2</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (num1.</span><span style="color:#6F42C1;">length</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> num2.</span><span style="color:#6F42C1;">length</span><span style="color:#24292E;">())</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> num1.</span><span style="color:#6F42C1;">length</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> num2.</span><span style="color:#6F42C1;">length</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> num1 </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> num2;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> n;</span></span>
<span class="line"><span style="color:#24292E;">    cin </span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;"> n;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; i </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> n; </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">i)</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        string tmp;</span></span>
<span class="line"><span style="color:#24292E;">        cin </span><span style="color:#D73A49;">&gt;&gt;</span><span style="color:#24292E;"> tmp;</span></span>
<span class="line"><span style="color:#24292E;">        num.</span><span style="color:#6F42C1;">push_back</span><span style="color:#24292E;">(tmp);</span></span>
<span class="line"><span style="color:#24292E;">        human[tmp] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">sort</span><span style="color:#24292E;">(num.</span><span style="color:#6F42C1;">begin</span><span style="color:#24292E;">(), num.</span><span style="color:#6F42C1;">end</span><span style="color:#24292E;">(), cmp);</span></span>
<span class="line"><span style="color:#24292E;">    cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> human[num[n </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">]] </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> endl</span></span>
<span class="line"><span style="color:#24292E;">         </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> num[n </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><ul><li>大数排序问题转化为字符串，然后 sort 中添加 cmp 函数，(先比较长短)防止字典序排序问题。使用 unordered_map 输出输入时的顺序</li></ul>`,5),t=[o];function e(c,r,y,D,F,i){return n(),a("div",null,t)}const A=s(p,[["render",e]]);export{B as __pageData,A as default};
