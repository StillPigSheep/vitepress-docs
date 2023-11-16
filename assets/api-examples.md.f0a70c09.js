import{u as o,o as r,c,k as a,t as e,l as n,Q as i,a as s}from"./chunks/framework.24d42a1d.js";const d=i(`<h1 id="runtime-api-examples" tabindex="-1">Runtime API Examples <a class="header-anchor" href="#runtime-api-examples" aria-label="Permalink to &quot;Runtime API Examples&quot;">​</a></h1><p>This page demonstrates usage of some of the runtime APIs provided by VitePress.</p><p>The main <code>useData()</code> API can be used to access site, theme, and page data for the current page. It works in both <code>.md</code> and <code>.vue</code> files:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-ocean vp-code-dark"><code><span class="line"><span style="color:#BABED8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#BABED8;">import { useData } from &#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">const { theme, page, frontmatter } = useData()</span></span>
<span class="line"><span style="color:#BABED8;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">## </span><span style="color:#FFCB6B;">Results</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">### </span><span style="color:#FFCB6B;">Theme Data</span></span>
<span class="line"><span style="color:#BABED8;">&lt;pre&gt;{{ theme }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">### </span><span style="color:#FFCB6B;">Page Data</span></span>
<span class="line"><span style="color:#BABED8;">&lt;pre&gt;{{ page }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">### </span><span style="color:#FFCB6B;">Page Frontmatter</span></span>
<span class="line"><span style="color:#BABED8;">&lt;pre&gt;{{ frontmatter }}&lt;/pre&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#24292E;">import { useData } from &#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const { theme, page, frontmatter } = useData()</span></span>
<span class="line"><span style="color:#24292E;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">## Results</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">### Theme Data</span></span>
<span class="line"><span style="color:#24292E;">&lt;pre&gt;{{ theme }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">### Page Data</span></span>
<span class="line"><span style="color:#24292E;">&lt;pre&gt;{{ page }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">### Page Frontmatter</span></span>
<span class="line"><span style="color:#24292E;">&lt;pre&gt;{{ frontmatter }}&lt;/pre&gt;</span></span></code></pre></div><h2 id="results" tabindex="-1">Results <a class="header-anchor" href="#results" aria-label="Permalink to &quot;Results&quot;">​</a></h2><h3 id="theme-data" tabindex="-1">Theme Data <a class="header-anchor" href="#theme-data" aria-label="Permalink to &quot;Theme Data&quot;">​</a></h3>`,6),m=a("h3",{id:"page-data",tabindex:"-1"},[s("Page Data "),a("a",{class:"header-anchor",href:"#page-data","aria-label":'Permalink to "Page Data"'},"​")],-1),h=a("h3",{id:"page-frontmatter",tabindex:"-1"},[s("Page Frontmatter "),a("a",{class:"header-anchor",href:"#page-frontmatter","aria-label":'Permalink to "Page Frontmatter"'},"​")],-1),u=a("h2",{id:"more",tabindex:"-1"},[s("More "),a("a",{class:"header-anchor",href:"#more","aria-label":'Permalink to "More"'},"​")],-1),g=a("p",null,[s("Check out the documentation for the "),a("a",{href:"https://vitepress.dev/reference/runtime-api#usedata",target:"_blank",rel:"noreferrer"},"full list of runtime APIs"),s(".")],-1),b=JSON.parse('{"title":"Runtime API Examples","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"api-examples.md","filePath":"api-examples.md"}'),f={name:"api-examples.md"},F=Object.assign(f,{setup(_){const{site:D,theme:t,page:l,frontmatter:p}=o();return(y,B)=>(r(),c("div",null,[d,a("pre",null,e(n(t)),1),m,a("pre",null,e(n(l)),1),h,a("pre",null,e(n(p)),1),u,g]))}});export{b as __pageData,F as default};
