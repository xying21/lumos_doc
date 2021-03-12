(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(s,".").concat(d)]||b[d]||u[d]||o;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(112)),s={id:"buildtransactions",title:"Assemble Transactions"},i={unversionedId:"tutorials/buildtransactions",id:"tutorials/buildtransactions",isDocsHomePage:!1,title:"Assemble Transactions",description:"The goal and core functionality of a DApp built with Lumos is to build transactions in response to user requests.",source:"@site/docs\\tutorials\\buildtransactions.md",slug:"/tutorials/buildtransactions",permalink:"/lumos_doc/docs/tutorials/buildtransactions",editUrl:"https://github.com/xying21/lumos_doc/tree/master/docs/tutorials/buildtransactions.md",version:"current",sidebar:"someSidebar",previous:{title:"Query on Transactions",permalink:"/lumos_doc/docs/tutorials/querytransactions"},next:{title:"DApps on CKB Workshop Code",permalink:"/lumos_doc/docs/tutorials/integratenft"}},c=[{value:"Transaction Skeleton",id:"transaction-skeleton",children:[]},{value:"Workflow",id:"workflow",children:[]},{value:"Examples",id:"examples",children:[{value:"Transfer CKB from the Current Live Cells",id:"transfer-ckb-from-the-current-live-cells",children:[]}]}],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The goal and core functionality of a DApp built with Lumos is to build transactions in response to user requests."),Object(o.b)("p",null,"CKB programming model is flexible but it significantly complicates transaction assembling. This includes the following hurdles:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Different scripts used in transaction inputs will require separate message generation, and also separate signing steps."),Object(o.b)("li",{parentName:"ul"},"Some cells might require special argument setup in witness, due to type script validation rules."),Object(o.b)("li",{parentName:"ul"},"Coordination might be required, since both lock script and type script in a cell might require arguments in the same witness construct.")),Object(o.b)("h2",{id:"transaction-skeleton"},"Transaction Skeleton"),Object(o.b)("p",null,"Lumos provides ",Object(o.b)("inlineCode",{parentName:"p"},"TransactionSkeleton"),"  that simplifies transaction assembling. Each transaction skeleton corresponds to an action, and will be built into a single transaction that is ready to be submitted to CKB. ",Object(o.b)("inlineCode",{parentName:"p"},"TransactionSkeleton")," supports transaction assembling with the following conveniences:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A well designed component must be able to query and include cells automatically to provide capacities required by the transaction."),Object(o.b)("li",{parentName:"ul"},"Individual script logic must be managed and respected by the general transaction skeleton."),Object(o.b)("li",{parentName:"ul"},"Scripts sharing the same behavior must be managed together in a unified interface. Developers can rely on abstractions instead of catering for every single detail.")),Object(o.b)("h2",{id:"workflow"},"Workflow"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a transaction skeleton.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Add a fee for the transaction. ",Object(o.b)("strong",{parentName:"p"},"Note"),": It is also possible to have someone other than the sender to pay the fee. ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Prepare the signing entries: The signing entries are the data that the user's wallet needs to sign to provide valid witnesses for the input lock scripts. ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Send the raw transaction to the client:  From the security perspective of a DApp, Lumos does not support built-in message signing. So the DApp needs to send the raw transaction "," to the user wallet to acquire signatures. The raw transaction contains all the cells and dependencies for the action and the data that needs to be signed. "),Object(o.b)("p",{parentName:"li"},"After the client gets the skeleton, the client forwards the transaction skeleton to the wallet for signing. ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Seal the transaction: The transaction with signatures is forwarded to the DApp. The DApp seals the transaction by adding the transaction signatures to the transaction structure. ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Send this finalized transaction to the CKB network: The sealed transaction is then forwarded to the CKB network."),Object(o.b)("p",{parentName:"li"},"Upon successful receipt, the CKB network returns the transaction hash to the DApp. The transaction hash is sent back to the client such that the client can track the transactions.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"(Optional) Get the Transaction Status: A transaction can be in one of the three statuses: ",Object(o.b)("strong",{parentName:"p"},"pending"),", ",Object(o.b)("strong",{parentName:"p"},"proposed")," and ",Object(o.b)("strong",{parentName:"p"},"committed"),"."),Object(o.b)("p",{parentName:"li"},"A ",Object(o.b)("strong",{parentName:"p"},"pending")," result means the node is aware of the transaction but the transaction is not confirmed yet. "),Object(o.b)("p",{parentName:"li"},"A ",Object(o.b)("strong",{parentName:"p"},"proposed")," result means the node sees a transaction included in a block candidate that is not yet mined. "),Object(o.b)("p",{parentName:"li"},"A ",Object(o.b)("strong",{parentName:"p"},"committed")," result means that the block involving the transaction has been mined and is officially on chain."))),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"transfer-ckb-from-the-current-live-cells"},"Transfer CKB from the Current Live Cells"),Object(o.b)("p",null,"To transfer CKB from the current set of live cells in response to a user request:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 1. Create a transaction skeleton.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'import {sealTransaction, TransactionSkeleton } from "@ckb-lumos/helpers";\nimport { common } from "@ckb-lumos/common-scripts";\n \nconst senderaddress = generateAddress(script);\nconst recipient = "ckt1qyqx57xrsztnq7g5mlw6r998uyc2f5hm3vnsvgsaet";\nconst amount = 100153459536n;\nconst txFee =  100000000n;\n\nlet txSkeleton = TransactionSkeleton({\n  cellProvider: indexer,\n});\ntxSkeleton = await common.transfer(\ntxSkeleton,\nsenderaddress,\nrecipient,\nBigInt(amount),\n);\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 2. Add a fee for the transaction.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"txSkeleton = await common.payFee(\n  txSkeleton,\n  senderaddress,\n  BigInt(txFee),\n);\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 3. Prepare the signing entries.")," "),Object(o.b)("p",null,"To prepare the signing entries:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"txSkeleton = common.prepareSigningEntries(txSkeleton);\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 4. Sign the transaction.")),Object(o.b)("p",null,"This example uses the HD wallet manager to generate a signature based on the private key 0x29159d8bb4b27704b168fc7fae70ffebf82164ce432b3f6b4c904a116a969f19."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'const {key} = require("@ckb-lumos/hd");\nconst message = txSkeleton.get("signingEntries").get(0).message;\nconst signature = key.signRecoverable(message, privateKey)\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 5. Seal the transaction with the")," ",Object(o.b)("strong",{parentName:"p"},"signature**"),".**"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"const tx = sealTransaction(txSkeleton, signature);\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 6. Send this finalized transaction to the CKB network.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'const { RPC } = require("ckb-js-toolkit");\nconst rpc = new RPC("http://127.0.0.1:8114");\nconst txHash = await rpc.send_transaction(tx);\n\'0x88536e8c25f5f8c89866dec6a5a1a6a72cccbe282963e4a7bfb5542b4c15d376\'\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Step 7. (Optional) Get the Transaction Status.")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"const tx = await rpc.get_transaction(txHash);\nreturn tx.tx_status.status; \n")))}p.isMDXComponent=!0}}]);