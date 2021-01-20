(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{114:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var a=t(0),o=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),b=a,u=d["".concat(r,".").concat(b)]||d[b]||m[b]||c;return t?o.a.createElement(u,i(i({ref:n},l),{},{components:t})):o.a.createElement(u,i({ref:n},l))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,r=new Array(c);r[0]=b;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var l=2;l<c;l++)r[l]=t[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},92:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var a=t(3),o=t(7),c=(t(0),t(114)),r={id:"commonscripts",title:"Common Scripts"},i={unversionedId:"package/commonscripts",id:"package/commonscripts",isDocsHomePage:!1,title:"Common Scripts",description:"The following common scripts on Nervos CKB are included in the @ckb-lumos/common-scripts package:",source:"@site/docs\\package\\common-scripts.md",slug:"/package/commonscripts",permalink:"/lumos_doc/docs/package/commonscripts",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/package/common-scripts.md",version:"current",sidebar:"someSidebar",previous:{title:"Common Types and Utilities",permalink:"/lumos_doc/docs/package/base"},next:{title:"Config Manager",permalink:"/lumos_doc/docs/package/configmanager"}},s=[{value:"Examples",id:"examples",children:[{value:"Use the <code>common</code> Script",id:"use-the-common-script",children:[]},{value:"Use the <code>dao</code> Script",id:"use-the-dao-script",children:[]},{value:"Use the <code>sudt</code> Script",id:"use-the-sudt-script",children:[]}]}],l={toc:s};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The following common scripts on Nervos CKB are included in the ",Object(c.b)("inlineCode",{parentName:"p"},"@ckb-lumos/common-scripts")," package:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"anyone_can_pay"),": The ",Object(c.b)("inlineCode",{parentName:"p"},"ANYONE_CAN_PAY")," type script")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"common"),": The ",Object(c.b)("inlineCode",{parentName:"p"},"common")," script supports common transaction tasks such as to ",Object(c.b)("inlineCode",{parentName:"p"},"transfer")," capacity from ",Object(c.b)("inlineCode",{parentName:"p"},"fromInfos")," to an address. The ",Object(c.b)("inlineCode",{parentName:"p"},"common")," script uses locktime pool cells first by default. "),Object(c.b)("p",{parentName:"li"},"The ",Object(c.b)("inlineCode",{parentName:"p"},"common")," script also provides APIs to integrate new customized lock scripts. ",Object(c.b)("inlineCode",{parentName:"p"},"pw-lock")," shows how to the integration of customized scripts.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"dao"),": The ",Object(c.b)("inlineCode",{parentName:"p"},"DAO")," type script")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"from_info"),": ")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"helper"),":")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"index"),":")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"locktime_pool"),": The ",Object(c.b)("inlineCode",{parentName:"p"},"locktime_pool"),"script includes ",Object(c.b)("inlineCode",{parentName:"p"},"secp256k1_blake160_multisig")," cells with locktime in lock ",Object(c.b)("inlineCode",{parentName:"p"},"args")," (the",Object(c.b)("inlineCode",{parentName:"p"},"args")," total length is 28 bytes, the last 8 bytes is a ",Object(c.b)("inlineCode",{parentName:"p"},"since")," format locktime in BigUInt64LE encode) and ",Object(c.b)("inlineCode",{parentName:"p"},"DAO")," step2 cells.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"secp256k1_blake160"),": The ",Object(c.b)("inlineCode",{parentName:"p"},"secp256k1_blake")," lock script")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"secp256k1_blake160_multisig"),": The ",Object(c.b)("inlineCode",{parentName:"p"},"secp256k1_blake160_multisig")," lock script")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"p"},"sudt"),": The ",Object(c.b)("inlineCode",{parentName:"p"},"SUDT")," type script"))),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("h3",{id:"use-the-common-script"},"Use the ",Object(c.b)("inlineCode",{parentName:"h3"},"common")," Script"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"secp256k1_blake160"),", ",Object(c.b)("inlineCode",{parentName:"p"},"secp256k1_blake160_multisig")," and ",Object(c.b)("inlineCode",{parentName:"p"},"locktime_pool")," script are similar to the",Object(c.b)("inlineCode",{parentName:"p"},"common")," script."),Object(c.b)("p",null,"The following example shows show how to use the ",Object(c.b)("inlineCode",{parentName:"p"},"common")," script to transfer capacity to another address:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const { common } = require('@ckb-lumos/common-scripts');\nconst { sealTransaction } = require(\"@ckb-lumos/helpers\")\nconst { Indexer } = require(\"@ckb-lumos/indexer\")\n\n// We can use Indexer module as cell provider\nconst indexer = new Indexer(\"http://127.0.0.1:8114\", \"./indexer-data\");\n\nconst tipHeader = {\n  compact_target: '0x20010000',\n  dao: '0x49bfb20771031d556c8480d47f2a290059f0ac7e383b6509006f4a772ed50200',\n  epoch: '0xa0006002b18',\n  hash: '0x432451e23c26f45eaceeedcc261764d6485ea5c9a204ac55ad755bb8dec9a079',\n  nonce: '0x8199548f8a5ac7a0f0caef1620f37b79',\n  number: '0x1aef6',\n  parent_hash: '0x63594a64108f19f6aed53d0dca9ab4075aac4379cb80b2097b0deac8fc16fd3b',\n  proposals_hash: '0x0000000000000000000000000000000000000000000000000000000000000000',\n  timestamp: '0x172f6b9a4cf',\n  transactions_root: '0x282dbadcd49f3e229d997875f37f4e4f19cb4f04fcf762e9639145aaa667b6f8',\n  uncles_hash: '0x0000000000000000000000000000000000000000000000000000000000000000',\n  version: '0x0'\n}\n\nconst fromInfos = [\n  \"ckb1qyqwyxfa75whssgkq9ukkdd30d8c7txct0gq5f9mxs\",\n  {\n    R: 0,\n    M: 1,\n    publicKeyHashes: [\"0x36c329ed630d6ce750712a477543672adab57f4c\"],\n  },\n]\n\nlet txSkeleton = TransactionSkeleton({ cellProvider: indexer })\n\n// If using secp256k1_blake160_multisig lock script, put MultisigScript to `fromInfos` for generate signing messages.\n// By default, `common.transfer` will use cells with locktime firstly. `tipHeader` is required when you want to spent cells with locktime.\ntxSkeleton = await common.transfer(\n  txSkeleton,\n  fromInfos,\n  \"ckb1qyqrdsefa43s6m882pcj53m4gdnj4k440axqdt9rtd\",\n  BigInt(3500 * 10 ** 8),\n  tipHeader,\n)\n\n// Or you want to use cells without locktime firstly.\ntxSkeleton = await common.transfer(\n  txSkeleton,\n  fromInfos,\n  \"ckb1qyqrdsefa43s6m882pcj53m4gdnj4k440axqdt9rtd\",\n  BigInt(3500 * 10 ** 8),\n  tipHeader,\n  { useLocktimeCellsFirst: false }\n)\n\n// When you want to pay fee for transaction, just call `payFee`.\ntxSkeleton = await common.payFee(\n  txSkeleton,\n  fromInfos,\n  BigInt(1*10**8),\n  tipHeader,\n)\n\n// `prepareSigningEntries` will generate message for signing.\n// Signing messages will fill in `txSkeleton.signingEntries`.\ntxSkeleton = await common.prepareSigningEntries(\n  txSkeleton\n)\n\n// Then you can sign messages in order and get contents.\n// NOTE: lumos not provided tools for generate signatures now.\n// Call `sealTransaction` to get a transaction.\nconst tx = sealTransaction(txSkeleton, contents)\n\n// Then you can send tx to a CKB node via RPC `send_transaction`.\n")),Object(c.b)("h3",{id:"use-the-dao-script"},"Use the ",Object(c.b)("inlineCode",{parentName:"h3"},"dao")," Script"),Object(c.b)("p",null,"The following example shows how to use the ",Object(c.b)("inlineCode",{parentName:"p"},"dao")," script:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const { dao } = require("@ckb-lumos/common-scripts")\n\nlet txSkeleton = TransactionSkeleton({ cellProvider: indexer })\n\n// First, deposit capacity to dao.\ntxSkeleton = await dao.deposit(\n  txSkeleton,\n  "ckb1qyqrdsefa43s6m882pcj53m4gdnj4k440axqdt9rtd", // will gather inputs from this address.\n  "ckb1qyqwyxfa75whssgkq9ukkdd30d8c7txct0gq5f9mxs", // will generate a dao cell with lock of this address.\n  BigInt(1000*10**8),\n)\n\n// Using `listDaoCells` to list all deposited cells.\nconst daoDepositedCells = await dao.listDaoCells(\n  indexer,\n  "ckb1qyqwyxfa75whssgkq9ukkdd30d8c7txct0gq5f9mxs",\n  "deposit",\n)\n\n// Or using `CellCollector`\nconst daoDepositedCellCollector = new dao.CellCollector(\n  "ckb1qyqwyxfa75whssgkq9ukkdd30d8c7txct0gq5f9mxs",\n  indexer,\n  "deposit",\n)\n\nfor await (const inputCell of daoDepositedCellCollector.collect()) {\n  console.log(inputCell)\n}\n\n// And pick one to withdraw.\n// `fromInfo` only required for multisig script.\ntxSkeleton = await dao.withdraw(\n  txSkeleton,\n  daoDepositedCells[0],\n)\n\n// Then if want to unlock dao withdrew cells, just use `common.transfer`.\n')),Object(c.b)("h3",{id:"use-the-sudt-script"},"Use the ",Object(c.b)("inlineCode",{parentName:"h3"},"sudt")," Script"),Object(c.b)("p",null,"The following script shows how to use the ",Object(c.b)("inlineCode",{parentName:"p"},"sudt")," script:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const { sudt } = require("@ckb-lumos/common-scripts")\nlet txSkeleton = TransactionSkeleton({ cellProvider: indexer })\n\n// issue an sudt token, will use the second param address to generate sudt token(it\'s lock hash).\ntxSkeleton = await sudt.issueToken(\n  txSkeleton,\n  "ckb1qyqrdsefa43s6m882pcj53m4gdnj4k440axqdt9rtd",\n  10000n,\n);\n\n// and transfer sUDT\nconst sudtToken = "0x1f2615a8dde4e28ca736ff763c2078aff990043f4cbf09eb4b3a58a140a0862d"\ntxSkeleton = await sudt.transfer(\n  txSkeleton,\n  ["ckb1qyqrdsefa43s6m882pcj53m4gdnj4k440axqdt9rtd"],\n  sudtToken,\n  "ckb1qyqwyxfa75whssgkq9ukkdd30d8c7txct0gq5f9mxs",\n  1000n,\n  "ckb1qyqrdsefa43s6m882pcj53m4gdnj4k440axqdt9rtd",\n);\n')))}p.isMDXComponent=!0}}]);