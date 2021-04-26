(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{125:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var c=a(0),n=a.n(c);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,c,n=function(e,t){if(null==e)return{};var a,c,n={},r=Object.keys(e);for(c=0;c<r.length;c++)a=r[c],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)a=r[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),l=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var a=e.components,c=e.mdxType,r=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=l(a),h=c,u=p["".concat(o,".").concat(h)]||p[h]||d[h]||r;return a?n.a.createElement(u,i(i({ref:t},b),{},{components:a})):n.a.createElement(u,i({ref:t},b))}));function u(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=a.length,o=new Array(r);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:c,o[1]=i;for(var b=2;b<r;b++)o[b]=a[b];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},128:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return o}));var c=a(22),n=a(129);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(c.default)();return{withBaseUrl:(a,c)=>function(e,t,a,{forcePrependBaseUrl:c=!1,absolute:r=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(c)return t+a;const o=a.startsWith(t)?a:t+a.replace(/^\//,"");return r?e+o:o}(t,e,a,c)}}function o(e,t={}){const{withBaseUrl:a}=r();return a(e,t)}},129:function(e,t,a){"use strict";function c(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!c(e)}a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return n}))},86:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var c=a(3),n=a(7),r=(a(0),a(125)),o=a(128),i={id:"createaccount",title:"Create Accounts"},s={unversionedId:"preparation/createaccount",id:"preparation/createaccount",isDocsHomePage:!1,title:"Create Accounts",description:"This guide introduces the concepts of CKB account, CKB capacity of an account, and how to create CKB accounts before the DApp development. We will prepare two CKB accounts, Alice and Bob for later usage in the Hello Lumos example.",source:"@site/docs\\preparation\\createaccount.md",slug:"/preparation/createaccount",permalink:"/lumos_doc/docs/preparation/createaccount",editUrl:"https://github.com/xying21/lumos_doc/tree/master/docs/preparation/createaccount.md",version:"current",lastUpdatedAt:1619188968,sidebar:"sidebar2",previous:{title:"Install a CKB Node",permalink:"/lumos_doc/docs/preparation/installckb"},next:{title:"Hello Lumos",permalink:"/lumos_doc/docs/preparation/hellolumos"}},b=[{value:"CKB Account",id:"ckb-account",children:[]},{value:"CKB Capacity of an Account",id:"ckb-capacity-of-an-account",children:[]},{value:"Ownership of CKB Capacity",id:"ownership-of-ckb-capacity",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create the Accounts by Using ckb-cli",id:"create-the-accounts-by-using-ckb-cli",children:[{value:"Step 1. Download the CKB pre-built installer package.",id:"step-1-download-the-ckb-pre-built-installer-package",children:[]},{value:"Step 2. Verify the ckb-cli tool is working and check the version.",id:"step-2-verify-the-ckb-cli-tool-is-working-and-check-the-version",children:[]},{value:"Step 3. Create the account for Alice.",id:"step-3-create-the-account-for-alice",children:[]},{value:"Step 4. Get the private key for the account of Alice.",id:"step-4-get-the-private-key-for-the-account-of-alice",children:[]},{value:"Step 5. Get CKB Capacity for the account of Alice.",id:"step-5-get-ckb-capacity-for-the-account-of-alice",children:[]},{value:"Step 6. Check the Balance for the Account of Alice.",id:"step-6-check-the-balance-for-the-account-of-alice",children:[]},{value:"Step 7. Create an account for Bob.",id:"step-7-create-an-account-for-bob",children:[]},{value:"Step 8. Get the private key for the account of Bob.",id:"step-8-get-the-private-key-for-the-account-of-bob",children:[]}]},{value:"Get Two Accounts Provided by Genesis Issued Cells",id:"get-two-accounts-provided-by-genesis-issued-cells",children:[{value:"Step 1. Get the private key, lock args from the specs/dev.toml file.",id:"step-1-get-the-private-key-lock-args-from-the-specsdevtoml-file",children:[]},{value:"Step 2. Generate the addresses for the two accounts.",id:"step-2-generate-the-addresses-for-the-two-accounts",children:[]}]}],l={toc:b};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(c.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This guide introduces the concepts of CKB account, CKB capacity of an account, and how to create CKB accounts before the DApp development. We will prepare two CKB accounts, Alice and Bob for later usage in the ",Object(r.b)("a",{parentName:"p",href:"../preparation/hellolumos"},"Hello Lumos")," example. "),Object(r.b)("p",null,"The accounts can be created by using ckb-cli. For DEV chain, you can also get two accounts from the genesis cells that were issued with a considerable amount of capacity. "),Object(r.b)("h2",{id:"ckb-account"},"CKB Account"),Object(r.b)("p",null,"In CKB, an account is represented as a collection of ",Object(r.b)("a",{parentName:"p",href:"https://docs.nervos.org/docs/reference/cell#live-cell"},"live cells")," (unspent cells) that contain the same lock script."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"A live cell refers to an unspent cell in CKB. It is similar to the concept of ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Unspent_transaction_output"},"UTXO")," in Bitcoin's terminology. The full set of live cells in CKB, is considered the full state of CKB at that particular time point. Any transaction on CKB consumes some live cells. The live cells become spent cells just after the transaction is committed. At the same time, some new live cells are created.")),Object(r.b)("p",null,"A cell example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"{\n  cell_output: {\n    capacity: '0x124788a824a4',\n    lock: {\n      code_hash: '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8',\n      hash_type: 'type',\n      args: '0x7e00660b8ab122bca3ba468c5b6eee71f40b7d8e'\n    },\n    type: undefined\n  },\n  out_point: {\n    tx_hash: '0x86a613998a501777f2c3d808f235a8767d28d56868678dd17b53797f280b8b61',\n    index: '0x0'\n  },\n  block_hash: '0xd75069d050a530f8e670235bbcf6054e14326f81b37e5220bb3fc3513ef7e97c',\n  block_number: '0x45',\n  data: '0x'\n}\n")),Object(r.b)("p",null,"For more information about cells, see ",Object(r.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0002-ckb/0002-ckb.md#42-cell"},"CKB RFC: Cell"),"."),Object(r.b)("h2",{id:"ckb-capacity-of-an-account"},"CKB Capacity of an Account"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"capacity")," of a cell serves two purposes: "),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"It represents the amount of CKB tokens stored in the cell. "),Object(r.b)("li",{parentName:"ul"},"It sets the limit on how much information the cell can store. ")),Object(r.b)("p",{parentName:"blockquote"},"The basic unit for CKB capacity is ",Object(r.b)("strong",{parentName:"p"},"shannon"),". A bigger unit, ",Object(r.b)("strong",{parentName:"p"},"CKByte")," or just ",Object(r.b)("strong",{parentName:"p"},"CKB")," is also used. 1 CKB equals to 10",Object(r.b)("sup",null,"8")," shannons. 1 CKB also means the cell can store 1 byte of information. For more information about how to calculate the cell information size, see ",Object(r.b)("a",{parentName:"p",href:"http://docs.nervos.org/docs/reference/cell#cell-information-size-calculation"},"Nervos Docs: Cell Information Size Calculation"),".")),Object(r.b)("p",null,"The CKB capacity of an account is the total ",Object(r.b)("inlineCode",{parentName:"p"},"capacity")," of the live cells owned by the account."),Object(r.b)("p",null,'Let us look at the following example. There are three live (unspent) cells in Charlie\'s account. The three cells contain the same lock script with the lock args "0x9118f7600d395709d08dc4596967d8c929982f1a". Each cell contains ',Object(r.b)("strong",{parentName:"p"},"200")," (0x4a817c800 in hex) CKB. So the total amount of CKB capacity that Charlie owns is ",Object(r.b)("strong",{parentName:"p"},"200 * 3 = 600")," CKB."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Cell 1"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"{\n  cell_output: {\n    capacity: '0x4a817c800',\n    lock: {\n      code_hash: '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8',\n      hash_type: 'type',\n      args: '0x9118f7600d395709d08dc4596967d8c929982f1a'\n    },\n    type: undefined\n  },\n  out_point: {\n    tx_hash: '0x513cd686d4e79a78d92598b525816d2d3253f1840b41e277473b3004208df2e6',\n    index: '0x0'\n  },\n  block_hash: '0x9ba2564a84886c7bb03385aa17a1f063af9c687bbd6d0955fbe567fff8075020',\n  block_number: '0x30',\n  data: '0x'\n}\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Cell 2"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"{\n  cell_output: {\n    capacity: '0x4a817c800',\n    lock: {\n      code_hash: '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8',\n      hash_type: 'type',\n      args: '0x9118f7600d395709d08dc4596967d8c929982f1a'\n    },\n    type: undefined\n  },\n  out_point: {\n    tx_hash: '0x301d8439c42b6448c9b23fddf69bb4671c8479a807afe8e2bbd8fc041130e2d5',\n    index: '0x0'\n  },\n  block_hash: '0xa621dd650b3da3045759072119b0b5b7ab2e15e87fdd96ca81e035c4f6848e3c',\n  block_number: '0x3c',\n  data: '0x'\n}\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Cell 3"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"{\n  cell_output: {\n    capacity: '0x4a817c800',\n    lock: {\n      code_hash: '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8',\n      hash_type: 'type',\n      args: '0x9118f7600d395709d08dc4596967d8c929982f1a'\n    },\n    type: undefined\n  },\n  out_point: {\n    tx_hash: '0xb90d91dffca55cae4bdf9c7b4c91ce5fe8f9e50bcd7510d28280eb2d4cfc0ee9',\n    index: '0x0'\n  },\n  block_hash: '0xa821a4637c220878baeaeb6b9e1412e9e4179d69c5a456ca9271fdb7f601c16e',\n  block_number: '0x43',\n  data: '0x'\n}\n")))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"If an account wants to perform transaction actions like transferring CKB to other accounts, the account must have enough CKB capacity that is equal to or more than the minimal CKB requirement of a transaction."),Object(r.b)("p",{parentName:"div"},"For example, the minimum CKB capacity requirement is 61 ",Object(r.b)("a",{parentName:"p",href:"https://docs.nervos.org/docs/basics/glossary#shannon",title:"One CKByte is equal to 100,000,000 Shannons."},"CKB")," (6,100,000,000 shannons) for one common transaction, and 102 CKB (10,200,000,000 shannons) for a DAO deposit transaction."),Object(r.b)("p",{parentName:"div"},"The accounts on the Testnet can claim CKB capacity on ",Object(r.b)("a",{parentName:"p",href:"https://faucet.nervos.org/"},"https://faucet.nervos.org"),". The accounts on DEV chain can get CKB capacity by mining blocks as a miner. For more information about getting CKB capacity, see ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"../preparation/createaccount#step-5-get-ckb-capacity-for-the-account-of-alice"},"step 5"))," of ",Object(r.b)("a",{parentName:"p",href:"../preparation/createaccount#create-the-accounts-by-using-ckb-cli"},"Create the accounts by Using ckb-cli"),"."))),Object(r.b)("h2",{id:"ownership-of-ckb-capacity"},"Ownership of CKB Capacity"),Object(r.b)("p",null,"The ownership of CKB capacity for a CKB account is established through private key, public key, lock script, and CKB address."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Private Key"),": A private key is a string of letters and numbers that is normally stored in a wallet. The private key is used to generate signatures on messages to prove the ownership of the CKB capacity. It allows the user to send his/her CKB capacity to other addresses.",Object(r.b)("br",null),"Example:",Object(r.b)("br",null)),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"0x5503cc1d40b9e05a46fe8e1d4702786c624a1b5e774f964db6746ea754b4843a\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Public Key"),": A public key is derived from a private key. The public key is used to validate the signature generated by the private key without revealing the private key. ",Object(r.b)("br",null),"Example:",Object(r.b)("br",null)),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"0x03ff69140121e0f1b1533e451ead79849acae8cd4e1ad77feac2ec5186598a98a9\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Lock Script"),": A lock script consists of three key parameters, including ",Object(r.b)("em",{parentName:"p"},"code_hash"),", ",Object(r.b)("em",{parentName:"p"},"hash_type")," and ",Object(r.b)("em",{parentName:"p"},"args"),". The ID of the account is the lock script args. For more information, see ",Object(r.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md#Script"},"CKB RFC: Data Structures"),".",Object(r.b)("br",null),"Example:",Object(r.b)("br",null)),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-typescript"},"{\n    code_hash: '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8', \n    hash_type:'type',\n    args: '0x9118f7600d395709d08dc4596967d8c929982f1a'\n}\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"CKB Address"),": A CKB address packages a lock script into a single line in a verifiable and human-readable format. For more information, see ",Object(r.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0021-ckb-address-format/0021-ckb-address-format.md"},"CKB RFC: CKB Address Format"),".",Object(r.b)("br",null),"Example:",Object(r.b)("br",null)),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"ckt1qyqfzx8hvqxnj4cf6zxugktfvlvvj2vc9udqww932t\nckb1qyqfzx8hvqxnj4cf6zxugktfvlvvj2vc9udqntmwxh\n")),Object(r.b)("p",{parentName:"li"},'The address with the "',Object(r.b)("strong",{parentName:"p"},"ckb"),'" prefix is for CKB mainnet. The address with the "',Object(r.b)("strong",{parentName:"p"},"ckt"),'" prefix is for both testnet and DEV chain.'))),Object(r.b)("p",null,"The following figure shows the relationship between private key, public key, Lock Script, and CKB address."),Object(r.b)("img",{src:Object(o.a)("img/ownership.png")}),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("p",null,"The following prerequisites apply for creating the accounts:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The CKB node is installed and running. ")),Object(r.b)("h2",{id:"create-the-accounts-by-using-ckb-cli"},"Create the Accounts by Using ckb-cli"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"ckb-cli")," is included in the CKB pre-built installer package. It is a command line tool that provides the functions of rpc requests, creating CKB addresses, managing wallets, sending transactions, and depositing to Nervos DAO etc. These functions can help with debugging and testing during the development process. For more information, see ",Object(r.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-cli/wiki/Sub-Commands"},"ckb-cli Sub Commands"),".")),Object(r.b)("h3",{id:"step-1-download-the-ckb-pre-built-installer-package"},"Step 1. Download the CKB pre-built installer package."),Object(r.b)("p",null,"The example in this guide downloads the CKB version 0.39.0. All releases can be found on the ",Object(r.b)("a",{title:"Download",href:"https://github.com/nervosnetwork/ckb/releases"},Object(r.b)("i",{class:"feather icon-download"}),"CKB releases")," page. If the package is already downloaded, go to step 2 directly."),Object(r.b)("p",null,"For more information, see ",Object(r.b)("a",{parentName:"p",href:"../preparation/installckb#step-1-download-the-ckb-pre-built-installer-package"},"Download the CKB Pre-built Installer Package"),"."),Object(r.b)("h3",{id:"step-2-verify-the-ckb-cli-tool-is-working-and-check-the-version"},"Step 2. Verify the ckb-cli tool is working and check the version."),Object(r.b)("p",null,"Navigate into the folder where the ckb-cli tool locates, then verify the tool is working."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1}","{1}":!0},"ckb-cli -V\nckb-cli 0.39.0\n")),Object(r.b)("h3",{id:"step-3-create-the-account-for-alice"},"Step 3. Create the account for Alice."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1}","{1}":!0},"ckb-cli account new\nYour new account is locked with a password. Please give a password. Do not forget this password.\nPassword: \nRepeat password: \naddress:\n  mainnet: ckb1qyq8uqrxpw9tzg4u5waydrzmdmh8raqt0k8qxe85u4\n  testnet: ckt1qyq8uqrxpw9tzg4u5waydrzmdmh8raqt0k8qmuetsf\nlock_arg: 0x7e00660b8ab122bca3ba468c5b6eee71f40b7d8e\nlock_hash: 0xf6ea009a4829de7aeecd75f3ae6bcdbaacf7328074ae52a48456a8793a4b1cca\n")),Object(r.b)("h3",{id:"step-4-get-the-private-key-for-the-account-of-alice"},"Step 4. Get the private key for the account of Alice."),Object(r.b)("p",null,"The extended private key (a private key and a chain code) is exported to the ",Object(r.b)("var",null,"alice")," file under the current working directory. The first line in the file is the private key of the account. The second line is the chain code."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1}","{1}":!0},'ckb-cli account export --extended-privkey-path alice --lock-arg 0x7e00660b8ab122bca3ba468c5b6eee71f40b7d8e\nPassword: \nmessage: "Success exported account as extended privkey to: \\"alice\\", please use this file carefully"\n')),Object(r.b)("h3",{id:"step-5-get-ckb-capacity-for-the-account-of-alice"},"Step 5. Get CKB Capacity for the account of Alice."),Object(r.b)("p",null,"The process of getting CKB capacity varies for the accounts on different networks (chains). "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To get CKB capacity for an account on ",Object(r.b)("strong",{parentName:"p"},"DEV chain"),", specify the account as the miner for receiving mining rewards."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If the CKB node is installed by Tippy: Specify ",Object(r.b)("b",null,"Block Assembler Lock Arg")," in the Edit Chain form with the lock args of the account. After the miner is specified, restart the CKB node and start the CKB miner on the Tippy dashboard.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If the CKB node is installed by the pre-built installer package: Specify the ",Object(r.b)("inlineCode",{parentName:"p"},"args")," in the ",Object(r.b)("inlineCode",{parentName:"p"},"block_assembler")," section in ckb.toml with the lock args of the account."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-toml",metastring:'title="devnet/ckb.toml" {2-5}',title:'"devnet/ckb.toml"',"{2-5}":!0},'  [block_assembler]\n  code_hash = "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8"\n  args = "0x7e00660b8ab122bca3ba468c5b6eee71f40b7d8e"\n  hash_type = "type"\n  message = "0x"\n')),Object(r.b)("p",{parentName:"li"},"After the miner is specified, restart the CKB node and start the CKB miner."),Object(r.b)("p",{parentName:"li"},"To restart the CKB node, stop the CKB node by using the ",Object(r.b)("inlineCode",{parentName:"p"},"ctrl + C")," command in the terminal that runs the node and then start the node by executing ",Object(r.b)("inlineCode",{parentName:"p"},"ckb run -C devnet"),"."),Object(r.b)("p",{parentName:"li"},"To start the miner, open a new terminal, and navigate into the folder where the ckb-cli tool locates to run the command ",Object(r.b)("inlineCode",{parentName:"p"},"ckb miner -C devnet"),".")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To get CKB capacity for an account on ",Object(r.b)("strong",{parentName:"p"},"Testnet"),", go to ",Object(r.b)("a",{parentName:"p",href:"https://faucet.nervos.org"},"https://faucet.nervos.org")," and paste the Testnet address of the account in the address inputbox, then click the ",Object(r.b)("strong",{parentName:"p"},"Claim")," button."),Object(r.b)("p",{parentName:"li"},"50,000 CKB can be claimed for each Testnet address from the ",Object(r.b)("a",{parentName:"p",href:"https://faucet.nervos.org/"},"faucet")," per 24 hours. "))),Object(r.b)("h3",{id:"step-6-check-the-balance-for-the-account-of-alice"},"Step 6. Check the Balance for the Account of Alice."),Object(r.b)("p",null,"To check the balance of an account on DEV chain or Testnet, execute the ",Object(r.b)("inlineCode",{parentName:"p"},"ckb-cli wallet get-capacity --address <the Testnet address of the account>")," command."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1}","{1}":!0},'ckb-cli wallet get-capacity --address "ckt1qyq8uqrxpw9tzg4u5waydrzmdmh8raqt0k8qmuetsf"\nimmature: 8039446.8758295 (CKB)\ntotal: 10451302.54823011 (CKB)\n')),Object(r.b)("p",null,"To check the balance of an account on Mainnet, execute the ",Object(r.b)("inlineCode",{parentName:"p"},"ckb-cli wallet get-capacity --address <the Mainnet address of the account>")," command."),Object(r.b)("h3",{id:"step-7-create-an-account-for-bob"},"Step 7. Create an account for Bob."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1}","{1}":!0},"ckb-cli account new\nYour new account is locked with a password. Please give a password. Do not forget this password.\nPassword: \nRepeat password: \naddress:\n  mainnet: ckb1qyqwe03shn6udvhjmrkzm53f53sr5l3qdwvsewv2mv\n  testnet: ckt1qyqwe03shn6udvhjmrkzm53f53sr5l3qdwvsytj4hs\nlock_arg: 0xecbe30bcf5c6b2f2d8ec2dd229a4603a7e206b99\nlock_hash: 0x34f085b5d2fa3f4ad2880713082a72864522a6ebffa1eb931b09e0407092eda5\n")),Object(r.b)("h3",{id:"step-8-get-the-private-key-for-the-account-of-bob"},"Step 8. Get the private key for the account of Bob."),Object(r.b)("p",null,"The extended private key (a private key and a chain code) is exported to the ",Object(r.b)("var",null,"bob")," file under the current working directory. The first line in the file is the private key of the account. The second line is the chain code."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1}","{1}":!0},'ckb-cli account export --extended-privkey-path bob --lock-arg 0xecbe30bcf5c6b2f2d8ec2dd229a4603a7e206b99\nPassword: \nmessage: "Success exported account as extended privkey to: \\"bob\\", please use this file carefully"\n')),Object(r.b)("h2",{id:"get-two-accounts-provided-by-genesis-issued-cells"},"Get Two Accounts Provided by Genesis Issued Cells"),Object(r.b)("p",null,"DEV chain provides two accounts from genesis issued cells. Each account has a considerable amount of capacity that can be used  for development and testing without extra configuration or mining settings. "),Object(r.b)("h3",{id:"step-1-get-the-private-key-lock-args-from-the-specsdevtoml-file"},"Step 1. Get the private key, lock args from the specs/dev.toml file."),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"dev.toml")," file is generated when the CKB node is initialized on DEV chain. "),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"For the CKB node installed by Tippy:"),Object(r.b)("ul",{parentName:"div"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"On Windows: The file is located in C:/Users/",Object(r.b)("var",null,"username"),"/AppData/Roaming/Tippy/chain-",Object(r.b)("var",null,"number"),"/specs. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"On Ubuntu: The file is located in Home/.config/Tippy/chain-",Object(r.b)("var",null,"number"),"/specs."))))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-toml",metastring:"{1,5,8,12}","{1,5,8,12}":!0},'# issue for random generated private key: d00c06bfd800d27397002dca6fb0993d5ba6399b4238b2f29ee9deb97593d2bc\n[[genesis.issued_cells]]\ncapacity = 20_000_000_000_00000000\nlock.code_hash = "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8"\nlock.args = "0xc8328aabcd9b9e8e64fbc566c4385c3bdeb219d7"\nlock.hash_type = "type"\n\n# issue for random generated private key: 63d86723e08f0f813a36ce6aa123bb2289d90680ae1e99d4de8cdb334553f24d\n[[genesis.issued_cells]]\ncapacity = 5_198_735_037_00000000\nlock.code_hash = "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8"\nlock.args = "0x470dcdc5e44064909650113a274b3b36aecb6dc7"\nlock.hash_type = "type"\n')),Object(r.b)("h3",{id:"step-2-generate-the-addresses-for-the-two-accounts"},"Step 2. Generate the addresses for the two accounts."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Save ",Object(r.b)("inlineCode",{parentName:"p"},"d00c06bfd800d27397002dca6fb0993d5ba6399b4238b2f29ee9deb97593d2bc")," to the genesis1 file.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Save ",Object(r.b)("inlineCode",{parentName:"p"},"63d86723e08f0f813a36ce6aa123bb2289d90680ae1e99d4de8cdb334553f24d")," to the genesis2 file.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Generate the addresses for the two accounts."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1,7}","{1,7}":!0},'ckb-cli account import --privkey-path "genesis1"\nPassword: \naddress:\n  mainnet: ckb1qyqvsv5240xeh85wvnau2eky8pwrhh4jr8ts6f6daz\n  testnet: ckt1qyqvsv5240xeh85wvnau2eky8pwrhh4jr8ts8vyj37\nlock_arg: 0xc8328aabcd9b9e8e64fbc566c4385c3bdeb219d7\nckb-cli account import --privkey-path "genesis2"\nPassword: \naddress:\n  mainnet: ckb1qyqywrwdchjyqeysjegpzw38fvandtktdhrsj8renf\n  testnet: ckt1qyqywrwdchjyqeysjegpzw38fvandtktdhrs0zaxl4\nlock_arg: 0x470dcdc5e44064909650113a274b3b36aecb6dc7\n')))))}p.isMDXComponent=!0}}]);