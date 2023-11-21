import{_ as n,o as l,c as t,Q as o}from"./chunks/framework.42a4ab43.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"algorithm/knowledges/时间复杂度.md","filePath":"algorithm/knowledges/时间复杂度.md","lastUpdated":1700457483000}'),a={name:"algorithm/knowledges/时间复杂度.md"},e=o(`<h2 id="时间复杂度" tabindex="-1">时间复杂度 <a class="header-anchor" href="#时间复杂度" aria-label="Permalink to &quot;时间复杂度&quot;">​</a></h2><p>在竞赛中，一般算机一秒能运行 5 x 10^8 次汁算，如果题目給出的时间限制カ 1s,那么你选择的算法执行的汁算次数最多应该在 10^8 量级オ有可能解决这个题目。一般 O(n)的算法能解决的数据范围在 n &lt; 10^8。</p><pre><code>  O(n *logn)的算法能解决的数据范围在n &lt;= 10^6。

  O(n*sqrt(n) )的算法能解决的数据范围在n &lt; 10^5。

  O(n^2)的算法能解决的数据范围在n&lt;5000。

  O(n^3)的算法能解决的数据范围在n &lt;300。

  O(2^n)的算法能解决的数据范围在n &lt; 25。

  O(n!)的算法能解决的数据范围在n &lt; 11。

  以上范围仅供参考，实际中还要考虑每种算法的常数。
</code></pre><h3 id="算法复杂度中-n-的范围对应的算法" tabindex="-1">算法复杂度中 n 的范围对应的算法 <a class="header-anchor" href="#算法复杂度中-n-的范围对应的算法" aria-label="Permalink to &quot;算法复杂度中 n 的范围对应的算法&quot;">​</a></h3><ul><li>n≤30n≤30, 指数级别, dfs+剪枝，状态压缩 dp <br></li><li>n≤100n≤100 =&gt; O(n3)O(n3)，floyd，dp，高斯消元 <br></li><li>n≤1000n≤1000 =&gt; O(n2)O(n2)，O(n2logn)O(n2logn)，dp，二分，朴素版 Dijkstra、朴素版 Prim、Bellman-Ford <br></li><li>n≤10000n≤10000 =&gt; O(n∗n√)O(n∗n)，块状链表、分块、莫队 <br></li><li>n≤100000n≤100000 =&gt; O(nlogn)O(nlogn) =&gt; <strong>各种 sort</strong>，线段树、树状数组、set/map、heap、拓扑排序、dijkstra+heap、prim+heap、Kruskal、spfa、求凸包、求半平面交、<strong>二分</strong>、CDQ 分治、<strong>整体二分</strong>、后缀数组、树链剖分、动态树 <br></li><li>n≤1000000n≤1000000 =&gt; O(n)O(n), 以及常数较小的 O(nlogn)O(nlogn) 算法 =&gt; 单调队列、 hash、双指针扫描、并查集，kmp、AC 自动机，常数比较小的 O(nlogn)O(nlogn) 的做法：sort、树状数组、heap、dijkstra、spfa <br></li><li>n≤10000000n≤10000000 =&gt; O(n)O(n)，双指针扫描、kmp、AC 自动机、线性筛素数 <br></li><li>n≤109n≤109 =&gt; O(n√)O(n)，判断质数 <br></li><li>n≤1018n≤1018 =&gt; O(logn)O(logn)，最大公约数，快速幂，数位 DP <br></li><li>n≤101000n≤101000 =&gt; O((logn)2)O((logn)2)，高精度加减乘除 <br></li><li>n≤10100000n≤10100000 =&gt; O(logk×loglogk)，k 表示位数 O(logk×loglogk)，k 表示位数，高精度加减、FFT/NTT</li></ul>`,5),r=[e];function i(s,g,d,O,_,p){return l(),t("div",null,r)}const m=n(a,[["render",i]]);export{h as __pageData,m as default};
