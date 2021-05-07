(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{102:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(7),a=(r(0),r(126)),i=r(129),c={id:"intro",title:"What is Lumos?",sidebar_label:"Lumos Overview"},s={unversionedId:"introduction/intro",id:"introduction/intro",isDocsHomePage:!1,title:"What is Lumos?",description:"Lumos is an open-source framework that was developed by the Nervos Developer Tools team for building Nervos CKB DApps.",source:"@site/docs\\introduction\\intro.md",slug:"/introduction/intro",permalink:"/lumos_doc/docs/introduction/intro",editUrl:"https://github.com/xying21/lumos_doc/tree/master/docs/introduction/intro.md",version:"current",lastUpdatedAt:1619438110,sidebar_label:"Lumos Overview",sidebar:"sidebar2",previous:{title:"About This Guide",permalink:"/lumos_doc/docs/introduction/about"},next:{title:"Lumos Components",permalink:"/lumos_doc/docs/introduction/lumoscomponents"}},u=[{value:"How It Works?",id:"how-it-works",children:[]},{value:"Stable Version",id:"stable-version",children:[]},{value:"Contact &amp; Support",id:"contact--support",children:[]},{value:"References",id:"references",children:[]}],l={toc:u};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Lumos is an open-source framework that was developed by the Nervos Developer Tools team for building Nervos CKB DApps. "),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Lumos enables to free the DApp developers from most of the hassles for dealing with CKB. So the developers can focus on the specific logic in the DApps.")),Object(a.b)("h2",{id:"how-it-works"},"How It Works?"),Object(a.b)("p",null,"According to ",Object(a.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0002-ckb/0002-ckb.md#4-programming-model"},"the programming model of CKB"),", DApps running on CKB separate functionally into two parts, ",Object(a.b)("strong",{parentName:"p"},"computation")," and ",Object(a.b)("strong",{parentName:"p"},"verification"),". "),Object(a.b)("p",null,"The applications that run in the Node.js environment and serve as the ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"off-chain computation"))," part can be developed on top of Lumos. The DApp built upon Lumos polls the block information from the CKB network,  indexes cells locally, and provides the cells for queries and transactions corresponding to user requests."),Object(a.b)("p",null,"For more information, see ",Object(a.b)("a",{parentName:"p",href:"../introduction/lumoscomponents"},"Lumos Components"),"."),Object(a.b)("img",{src:Object(i.a)("img/how.svg"),width:"70%"}),Object(a.b)("p",null,"Figure 1 Architecture of a CKB DApp Built with Lumos"),Object(a.b)("h2",{id:"stable-version"},"Stable Version"),Object(a.b)("img",{src:"https://img.shields.io/badge/%40ckb--lumos-v0.16.0-brightgreen"}),Object(a.b)("h2",{id:"contact--support"},"Contact & Support"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create a ",Object(a.b)("a",{parentName:"li",href:"https://github.com/nervosnetwork/lumos/issues"},"GitHub issue")," for bug reports, feature requests, or questions."),Object(a.b)("li",{parentName:"ul"},"Star \u2b50\ufe0f Lumos on ",Object(a.b)("a",{parentName:"li",href:"https://github.com/nervosnetwork/lumos"},"GitHub")," to support the project!")),Object(a.b)("h2",{id:"references"},"References"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Resource"),Object(a.b)("th",{parentName:"tr",align:null},"Link"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Nervos","\xa0","Document","\xa0","Website"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"https://docs.nervos.org/"},"https://docs.nervos.org/"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"API","\xa0","Documentation"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"https://nervosnetwork.github.io/lumos/globals.html"},"https://nervosnetwork.github.io/lumos/globals.html"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Source","\xa0","Code"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"https://github.com/nervosnetwork/lumos"},"https://github.com/nervosnetwork/lumos"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Tutorials"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"https://docs.nervos.org/docs/labs/lumos-nervosdao"},"Intro to Lumos"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"Video","\xa0","Lectures"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("ul",null,Object(a.b)("li",null,Object(a.b)("a",{parentName:"td",href:"https://youtu.be/TJ2bnSFUpPQ"},"Dapps with CKB Workshop - Lecture 3: Dapps with Lumos (Chinese + English Subtitles)")),Object(a.b)("li",null,Object(a.b)("a",{parentName:"td",href:"https://youtu.be/9U23hrzCAiM"},"Dapps with CKB Workshop - Lecture 4: Dapp Architecture with Lumos (English)")),Object(a.b)("li",null,Object(a.b)("a",{parentName:"td",href:"https://github.com/RetricSu/liquidable-dao-dapp/blob/master"},"Dapps On CKB: Building A Liquidable DAO workshop"))))))))}b.isMDXComponent=!0},126:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,d=b["".concat(i,".").concat(m)]||b[m]||p[m]||a;return r?o.a.createElement(d,c(c({ref:t},u),{},{components:r})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},129:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}));var n=r(22),o=r(130);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:a=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(n)return t+r;const i=r.startsWith(t)?r:t+r.replace(/^\//,"");return a?e+i:i}(t,e,r,n)}}function i(e,t={}){const{withBaseUrl:r}=a();return r(e,t)}},130:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))}}]);