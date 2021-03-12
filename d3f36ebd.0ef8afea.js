(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{101:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return c})),a.d(n,"metadata",(function(){return i})),a.d(n,"toc",(function(){return s})),a.d(n,"default",(function(){return p}));var t=a(3),r=a(7),o=(a(0),a(112)),c={id:"transactionmanager",title:"Transaction Manager"},i={unversionedId:"package/transactionmanager",id:"package/transactionmanager",isDocsHomePage:!1,title:"Transaction Manager",description:"The @ckb-lumos/transaction-manager package deals with one problem with UTXO based blockchains. is that a certain amount of gap period exists between a transaction is accepted by a blockchain, and when it is actually committed on chain. During this gap, new cells created by the pending transaction will not be available. Transaction manager package takes care of this. It wraps an indexer instance, and makes sure cells created in pending transactions, are also exposed and available for assembling new transactions. This means you are no longer bounded to one transaction at a time, you can freely send series of transactions as you wish.",source:"@site/docs\\package\\transaction-manager.md",slug:"/package/transactionmanager",permalink:"/lumos_doc/docs/package/transactionmanager",editUrl:"https://github.com/xying21/lumos_doc/tree/master/docs/package/transaction-manager.md",version:"current"},s=[{value:"Examples",id:"examples",children:[]}],l={toc:s};function p(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},l,a,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@ckb-lumos/transaction-manager")," package deals with one problem with UTXO based blockchains. is that a certain amount of gap period exists between a transaction is accepted by a blockchain, and when it is actually committed on chain. During this gap, new cells created by the pending transaction will not be available. Transaction manager package takes care of this. It wraps an indexer instance, and makes sure cells created in pending transactions, are also exposed and available for assembling new transactions. This means you are no longer bounded to one transaction at a time, you can freely send series of transactions as you wish."),Object(o.b)("p",null,"Transaction Manager is a tool for managing uncommitted cells, you can ",Object(o.b)("inlineCode",{parentName:"p"},"send_transaction")," via this tool and get uncommitted outputs by ",Object(o.b)("inlineCode",{parentName:"p"},"collector"),"."),Object(o.b)("img",{src:"../../img/transaction manager.png",width:"500"}),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-javascript"}),'const TransactionManager = require("@ckb-lumos/transaction-manager")\nconst { Indexer } = require("@ckb-lumos/indexer")\n\n// generate a new `TransactionManager` instance and start.\nconst indexer = new Indexer("http://127.0.0.1:8114", "./indexer-data");\nconst transactionManager = new TransactionManager(indexer)\ntransactionManager.start()\n\n// now you send transaction via `transactionManager`.\nconst txHash = await transactionManager.send_transaction(transaction)\n\n// you can get uncommitted cells by `transactionManager.collector`.\nconst collector = transactionManager.collector({ lock })\nfor await (const cell of collector.collect()) {\n  console.log(cell)\n}\n')))}p.isMDXComponent=!0},112:function(e,n,a){"use strict";a.d(n,"a",(function(){return u})),a.d(n,"b",(function(){return g}));var t=a(0),r=a.n(t);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function c(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?c(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var n=r.a.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},u=function(e){var n=p(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=t,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return a?r.a.createElement(g,i(i({ref:n},l),{},{components:a})):r.a.createElement(g,i({ref:n},l))}));function g(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);