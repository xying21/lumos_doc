(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,u=p["".concat(c,".").concat(m)]||p[m]||b[m]||o;return n?r.a.createElement(u,i(i({ref:t},l),{},{components:n})):r.a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(104)),c={id:"commonscripts",title:"Common Scripts"},i={unversionedId:"package/commonscripts",id:"package/commonscripts",isDocsHomePage:!1,title:"Common Scripts",description:"The common scripts on Nervos CKB are integrated in the @ckb-lumos/common-scripts package. With these scripts,",source:"@site/docs\\package\\common-scripts.md",slug:"/package/commonscripts",permalink:"/lumos_doc/docs/package/commonscripts",editUrl:"https://github.com/xying21/lumos_doc/tree/master/docs/package/common-scripts.md",version:"current",sidebar:"someSidebar",previous:{title:"Lumos Indexer",permalink:"/lumos_doc/docs/package/indexer"},next:{title:"Base",permalink:"/lumos_doc/docs/package/base"}},s=[{value:"Examples",id:"examples",children:[{value:"Use the <code>common</code> Script",id:"use-the-common-script",children:[]},{value:"Use the <code>dao</code> Script",id:"use-the-dao-script",children:[]},{value:"Use the <code>sudt</code> Script",id:"use-the-sudt-script",children:[]}]}],l={toc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The common scripts on Nervos CKB are integrated in the ",Object(o.b)("inlineCode",{parentName:"p"},"@ckb-lumos/common-scripts")," package. With these scripts, "),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Script Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"anyone_can_pay"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The ",Object(o.b)("inlineCode",{parentName:"td"},"ANYONE_CAN_PAY")," type script")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"common"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The ",Object(o.b)("inlineCode",{parentName:"td"},"common")," script supports common transaction tasks such as to ",Object(o.b)("inlineCode",{parentName:"td"},"transfer")," capacity from ",Object(o.b)("inlineCode",{parentName:"td"},"fromInfos")," to an address. The ",Object(o.b)("inlineCode",{parentName:"td"},"common")," script uses locktime pool cells first by default. The ",Object(o.b)("inlineCode",{parentName:"td"},"common")," script also provides APIs to integrate new customized lock scripts. ",Object(o.b)("inlineCode",{parentName:"td"},"pw-lock")," shows how to integrate customized scripts.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"dao"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The ",Object(o.b)("inlineCode",{parentName:"td"},"DAO")," type script")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"from_info"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Lumos is designed to be able to treat multiple different wallets as a single unit")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"helper"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"index"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"locktime_pool"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The ",Object(o.b)("inlineCode",{parentName:"td"},"locktime_pool"),"script includes ",Object(o.b)("inlineCode",{parentName:"td"},"secp256k1_blake160_multisig")," cells with locktime in lock ",Object(o.b)("inlineCode",{parentName:"td"},"args")," (the",Object(o.b)("inlineCode",{parentName:"td"},"args")," total length is 28 bytes, the last 8 bytes is a ",Object(o.b)("inlineCode",{parentName:"td"},"since")," format locktime in BigUInt64LE encode) and ",Object(o.b)("inlineCode",{parentName:"td"},"DAO")," step2 cells.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"secp256k1_blake160"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The ",Object(o.b)("inlineCode",{parentName:"td"},"secp256k1_blake")," lock script")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"secp256k1_blake160_multisig")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The ",Object(o.b)("inlineCode",{parentName:"td"},"secp256k1_blake160_multisig")," lock script")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"sudt")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The ",Object(o.b)("inlineCode",{parentName:"td"},"SUDT")," type script")))),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"use-the-common-script"},"Use the ",Object(o.b)("inlineCode",{parentName:"h3"},"common")," Script"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"secp256k1_blake160"),", ",Object(o.b)("inlineCode",{parentName:"p"},"secp256k1_blake160_multisig")," and ",Object(o.b)("inlineCode",{parentName:"p"},"locktime_pool")," script are similar to the",Object(o.b)("inlineCode",{parentName:"p"},"common")," script."),Object(o.b)("p",null,"The following example shows show how to use the ",Object(o.b)("inlineCode",{parentName:"p"},"common")," script to transfer capacity to another address:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const { common } = require('@ckb-lumos/common-scripts');\nconst { sealTransaction } = require(\"@ckb-lumos/helpers\")\nconst { Indexer } = require(\"@ckb-lumos/indexer\")\n\n// We can use Indexer module as cell provider\nconst indexer = new Indexer(\"http://127.0.0.1:8114\", \"./indexer-data\");\n\nconst tipHeader = {\n  compact_target: '0x20010000',\n  dao: '0x49bfb20771031d556c8480d47f2a290059f0ac7e383b6509006f4a772ed50200',\n  epoch: '0xa0006002b18',\n  hash: '0x432451e23c26f45eaceeedcc261764d6485ea5c9a204ac55ad755bb8dec9a079',\n  nonce: '0x8199548f8a5ac7a0f0caef1620f37b79',\n  number: '0x1aef6',\n  parent_hash: '0x63594a64108f19f6aed53d0dca9ab4075aac4379cb80b2097b0deac8fc16fd3b',\n  proposals_hash: '0x0000000000000000000000000000000000000000000000000000000000000000',\n  timestamp: '0x172f6b9a4cf',\n  transactions_root: '0x282dbadcd49f3e229d997875f37f4e4f19cb4f04fcf762e9639145aaa667b6f8',\n  uncles_hash: '0x0000000000000000000000000000000000000000000000000000000000000000',\n  version: '0x0'\n}\n\nconst fromInfos = [\n  \"ckb1qyqwyxfa75whssgkq9ukkdd30d8c7txct0gq5f9mxs\",\n  {\n    R: 0,\n    M: 1,\n    publicKeyHashes: [\"0x36c329ed630d6ce750712a477543672adab57f4c\"],\n  },\n]\n\nlet txSkeleton = TransactionSkeleton({ cellProvider: indexer })\n\n// If using secp256k1_blake160_multisig lock script, put MultisigScript to `fromInfos` for generate signing messages.\n// By default, `common.transfer` will use cells with locktime firstly. `tipHeader` is required when you want to spent cells with locktime.\ntxSkeleton = await common.transfer(\n  txSkeleton,\n  fromInfos,\n  \"ckb1qyqrdsefa43s6m882pcj53m4gdnj4k440axqdt9rtd\",\n  BigInt(3500 * 10 ** 8),\n  tipHeader,\n)\n\n// Or you want to use cells without locktime firstly.\ntxSkeleton = await common.transfer(\n  txSkeleton,\n  fromInfos,\n  \"ckb1qyqrdsefa43s6m882pcj53m4gdnj4k440axqdt9rtd\",\n  BigInt(3500 * 10 ** 8),\n  tipHeader,\n  { useLocktimeCellsFirst: false }\n)\n\n// When you want to pay fee for transaction, just call `payFee`.\ntxSkeleton = await common.payFee(\n  txSkeleton,\n  fromInfos,\n  BigInt(1*10**8),\n  tipHeader,\n)\n\n// `prepareSigningEntries` will generate message for signing.\n// Signing messages will fill in `txSkeleton.signingEntries`.\ntxSkeleton = await common.prepareSigningEntries(\n  txSkeleton\n)\n\n// Then you can sign messages in order and get contents.\n// NOTE: lumos not provided tools for generate signatures now.\n// Call `sealTransaction` to get a transaction.\nconst tx = sealTransaction(txSkeleton, contents)\n\n// Then you can send tx to a CKB node via RPC `send_transaction`.\n")),Object(o.b)("h3",{id:"use-the-dao-script"},"Use the ",Object(o.b)("inlineCode",{parentName:"h3"},"dao")," Script"),Object(o.b)("p",null,"The following example shows how to use the ",Object(o.b)("inlineCode",{parentName:"p"},"dao")," script:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const { dao } = require("@ckb-lumos/common-scripts")\n\nlet txSkeleton = TransactionSkeleton({ cellProvider: indexer })\n\n// First, deposit capacity to dao.\ntxSkeleton = await dao.deposit(\n  txSkeleton,\n  "ckb1qyqrdsefa43s6m882pcj53m4gdnj4k440axqdt9rtd", // will gather inputs from this address.\n  "ckb1qyqwyxfa75whssgkq9ukkdd30d8c7txct0gq5f9mxs", // will generate a dao cell with lock of this address.\n  BigInt(1000*10**8),\n)\n\n// Using `listDaoCells` to list all deposited cells.\nconst daoDepositedCells = await dao.listDaoCells(\n  indexer,\n  "ckb1qyqwyxfa75whssgkq9ukkdd30d8c7txct0gq5f9mxs",\n  "deposit",\n)\n\n// Or using `CellCollector`\nconst daoDepositedCellCollector = new dao.CellCollector(\n  "ckb1qyqwyxfa75whssgkq9ukkdd30d8c7txct0gq5f9mxs",\n  indexer,\n  "deposit",\n)\n\nfor await (const inputCell of daoDepositedCellCollector.collect()) {\n  console.log(inputCell)\n}\n\n// And pick one to withdraw.\n// `fromInfo` only required for multisig script.\ntxSkeleton = await dao.withdraw(\n  txSkeleton,\n  daoDepositedCells[0],\n)\n\n// Then if want to unlock dao withdrew cells, just use `common.transfer`.\n')),Object(o.b)("h3",{id:"use-the-sudt-script"},"Use the ",Object(o.b)("inlineCode",{parentName:"h3"},"sudt")," Script"),Object(o.b)("p",null,"The following script shows how to use the ",Object(o.b)("inlineCode",{parentName:"p"},"sudt")," script:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const { sudt } = require("@ckb-lumos/common-scripts")\nlet txSkeleton = TransactionSkeleton({ cellProvider: indexer })\n\n// issue an sudt token, will use the second param address to generate sudt token(it\'s lock hash).\ntxSkeleton = await sudt.issueToken(\n  txSkeleton,\n  "ckb1qyqrdsefa43s6m882pcj53m4gdnj4k440axqdt9rtd",\n  10000n,\n);\n\n// and transfer sUDT\nconst sudtToken = "0x1f2615a8dde4e28ca736ff763c2078aff990043f4cbf09eb4b3a58a140a0862d"\ntxSkeleton = await sudt.transfer(\n  txSkeleton,\n  ["ckb1qyqrdsefa43s6m882pcj53m4gdnj4k440axqdt9rtd"],\n  sudtToken,\n  "ckb1qyqwyxfa75whssgkq9ukkdd30d8c7txct0gq5f9mxs",\n  1000n,\n  "ckb1qyqrdsefa43s6m882pcj53m4gdnj4k440axqdt9rtd",\n);\n')))}d.isMDXComponent=!0}}]);