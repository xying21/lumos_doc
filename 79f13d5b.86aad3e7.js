(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{120:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),l=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return n?a.a.createElement(m,s(s({ref:t},d),{},{components:n})):a.a.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(120)),i={id:"database",title:"Database"},s={unversionedId:"guides/database",id:"guides/database",isDocsHomePage:!1,title:"Database",description:"Lumos is designed based on the Index-Query-Assemble pattern. The Lumos indexer polls blocks from a CKB node, indexes them and stores the indexed data in a local database to provide optimal query.",source:"@site/docs\\guides\\database.md",slug:"/guides/database",permalink:"/lumos_doc/docs/guides/database",editUrl:"https://github.com/xying21/lumos_doc/tree/master/docs/guides/database.md",version:"current"},c=[],d={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Lumos is designed based on the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.nervos.org/docs/reference/cell#index-query-assemble-pattern"}),Object(o.b)("inlineCode",{parentName:"a"},"Index-Query-Assemble"))," pattern. The Lumos indexer polls blocks from a CKB node, indexes them and stores the indexed data in a local database to provide optimal query."),Object(o.b)("p",null,"The Lumos indexer supports two types of databases:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The RocksDB database: The RocksDB backed indexer is contained in the  ",Object(o.b)("inlineCode",{parentName:"li"},"@ckb-lumos/indexer")," package. After the ",Object(o.b)("inlineCode",{parentName:"li"},"@ckb-lumos/indexer")," package is installed, the RocksDB backed indexer can be used directly."),Object(o.b)("li",{parentName:"ul"},"The SQL database: The Lumos indexer supports the SQL database of the latest stable versions of PostgreSQL and MySQL. A separate package, the ",Object(o.b)("inlineCode",{parentName:"li"},"@ckb-lumos/sql-indexer")," package contains the SQL backed indexer. Specific SQL database settings are required before using the SQL backed indexer. ")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note"),":  The usage for the SQL backed indexer is not fully verified. It is still in the experimental stage."),Object(o.b)("p",null,"For more information about the setup of the database, see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../tutorials/indexer"}),"Set Up the Lumos Indexer"),"."))}l.isMDXComponent=!0}}]);