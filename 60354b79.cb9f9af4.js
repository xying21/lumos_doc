(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,d=p["".concat(c,".").concat(u)]||p[u]||m[u]||r;return n?o.a.createElement(d,i(i({ref:t},l),{},{components:n})):o.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),r=(n(0),n(126)),c={id:"hellolumos",title:"Hello Lumos"},i={unversionedId:"preparation/hellolumos",id:"preparation/hellolumos",isDocsHomePage:!1,title:"Hello Lumos",description:'The Hello Lumos example is designed as a simple "DApp" that implemented the most basic functions, such as the query functions, the common transfer function, the DAO operations, etc., based on Lumos functionalities.',source:"@site/docs\\preparation\\hellolumos.md",slug:"/preparation/hellolumos",permalink:"/lumos_doc/docs/preparation/hellolumos",editUrl:"https://github.com/xying21/lumos_doc/tree/master/docs/preparation/hellolumos.md",version:"current",lastUpdatedAt:1620296597,sidebar:"sidebar2",previous:{title:"Create Accounts",permalink:"/lumos_doc/docs/preparation/createaccount"},next:{title:"Install Lumos Packages",permalink:"/lumos_doc/docs/tutorials/installlumos"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Environment",id:"environment",children:[]},{value:"Steps",id:"steps",children:[{value:"Download the Hello Lumos example.",id:"download-the-hello-lumos-example",children:[]},{value:"Install dependencies.",id:"install-dependencies",children:[]},{value:"Update the account information in the account.ts file.",id:"update-the-account-information-in-the-accountts-file",children:[]},{value:"Build the project.",id:"build-the-project",children:[]},{value:"Enter the Node.js REPL mode.",id:"enter-the-nodejs-repl-mode",children:[]},{value:"Start the indexer and initialize the configurations.",id:"start-the-indexer-and-initialize-the-configurations",children:[]},{value:"Perform a common transfer transaction.",id:"perform-a-common-transfer-transaction",children:[]}]}],l={toc:s};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,'The Hello Lumos example is designed as a simple "DApp" that implemented the most basic functions, such as the query functions, the common transfer function, the DAO operations, etc., based on Lumos functionalities.'),Object(r.b)("p",null,'You can follow the steps in this guide to perform a common transfer with the functions provided by the Hello Lumos "DApp".'),Object(r.b)("p",null,"The sections in the later guides, for example, ",Object(r.b)("a",{parentName:"p",href:"../tutorials/querycells"},"Query on Cells"),", ",Object(r.b)("a",{parentName:"p",href:"../tutorials/querytransactions"},"Query on Transactions"),", and ",Object(r.b)("a",{parentName:"p",href:"../tutorials/buildtransactions"},"Assemble Transactions"),", explain the usage of Lumos by using the code examples of Hello Lumos. The full code of the example can be found ",Object(r.b)("a",{parentName:"p",href:"https://github.com/xying21/hellolumos"},"here"),". "),Object(r.b)("p",null,"The  example has the following structure:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"hellolumos/\n\u251c\u2500\u2500 src/accounts.ts\n\u251c\u2500\u2500 src/buildTXs.ts\n\u251c\u2500\u2500 src/index.ts\n\u251c\u2500\u2500 src/manageaccounts.ts\n\u251c\u2500\u2500 src/querycells.ts\n\u251c\u2500\u2500 src/querytransactions.ts\n\u251c\u2500\u2500 config.json\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 tsconfig.json\n\u2514\u2500\u2500 yarn.lock\n")),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("p",null,"The following Prerequisites apply for walking through the Hello Lumos example:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The development environment is set up. For more information, see ",Object(r.b)("a",{parentName:"li",href:"../preparation/setupsystem"},"Set Up the Development Environment"),"."),Object(r.b)("li",{parentName:"ul"},"The CKB node is installed and started on DEV chain. For more information, see ",Object(r.b)("a",{parentName:"li",href:"../preparation/installckb"},"Install a CKB Node"),"."),Object(r.b)("li",{parentName:"ul"},"Two accounts, Alice and Bob are created. Alice is specified as the miner to receive mining rewards. For more information, see ",Object(r.b)("a",{parentName:"li",href:"../preparation/createaccount"},"Create accounts"),".")),Object(r.b)("h2",{id:"environment"},"Environment"),Object(r.b)("p",null,"The following examples are verified on Ubuntu 20.04.2. Steps on the other platforms are similar and can be adjusted accordingly."),Object(r.b)("h2",{id:"steps"},"Steps"),Object(r.b)("h3",{id:"download-the-hello-lumos-example"},"Download the Hello Lumos example."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ cd\n$ git clone https://github.com/nervosnetwork/hellolumos\n")),Object(r.b)("h3",{id:"install-dependencies"},"Install dependencies."),Object(r.b)("p",null,"All required dependencies for the Hello Lumos example are listed in package.json. The dependencies can be installed by running the ",Object(r.b)("inlineCode",{parentName:"p"},"yarn install")," command. "),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The development environment must be set up correctly for installing the dependencies successfully. For more information, see ",Object(r.b)("a",{parentName:"p",href:"../preparation/setupsystem"},"Set Up the Development Environment"),"."))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ cd hellolumos\n$ yarn install\n")),Object(r.b)("details",null,Object(r.b)("summary",null,"OUTPUT"),Object(r.b)("p",null,Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},'yarn install v1.22.10\n[1/4] Resolving packages...\n[2/4] Fetching packages...\ninfo fsevents@2.3.2: The platform "win32" is incompatible with this module.\ninfo "fsevents@2.3.2" is an optional dependency and failed compatibility check. Excluding it from installation.\n[3/4] Linking dependencies...\n[4/4] Building fresh packages...\nDone in 52.70s.\n')))),Object(r.b)("h3",{id:"update-the-account-information-in-the-accountts-file"},"Update the account information in the account.ts file."),Object(r.b)("p",null,"Replace the value of ",Object(r.b)("inlineCode",{parentName:"p"},"PRIVATE_KEY"),", ",Object(r.b)("inlineCode",{parentName:"p"},"ADDRESS")," and ",Object(r.b)("inlineCode",{parentName:"p"},"ARGS")," for ALICE and BOB in the ",Object(r.b)("inlineCode",{parentName:"p"},"accounts.ts")," file with the account information you have prepared when creating accounts."),Object(r.b)("p",null,"You can retrieve the ",Object(r.b)("inlineCode",{parentName:"p"},"ADDRESS")," and ",Object(r.b)("inlineCode",{parentName:"p"},"ARGS")," for ALICE and BOB by executing the ",Object(r.b)("inlineCode",{parentName:"p"},"ckb-cli account list")," command. The private keys are stored in the ",Object(r.b)("var",null,"alice")," file and the ",Object(r.b)("var",null,"bob")," file during the creation of the accounts. For more information about creating accounts, see ",Object(r.b)("a",{parentName:"p",href:"../preparation/createaccount"},"Create Accounts"),"."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The account information in this documentation is only used for demonstration. Do ",Object(r.b)("strong",{parentName:"p"},"not")," use these private keys,  addresses and args elsewhere. "))),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/accounts.ts"',title:'"hellolumos/src/accounts.ts"'},'export const ALICE = {\n  PRIVATE_KEY:\n    "0xf2a91b1410f7308631b89603262448ba515cddac1ffe250265551c82fff3eb3a",\n  ADDRESS: "ckt1qyq8uqrxpw9tzg4u5waydrzmdmh8raqt0k8qmuetsf",\n  ARGS: "0x7e00660b8ab122bca3ba468c5b6eee71f40b7d8e",\n};\n\nexport const BOB = {\n  PRIVATE_KEY:\n    "0x670ac6ac1ce8004b4220f0fb024179461f11989ff4d446816f78813b80b9c696",\n  ADDRESS: "ckt1qyqwe03shn6udvhjmrkzm53f53sr5l3qdwvsytj4hs",\n  ARGS: "0xecbe30bcf5c6b2f2d8ec2dd229a4603a7e206b99",\n};\n')),Object(r.b)("h3",{id:"build-the-project"},"Build the project."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript",metastring:"{1}","{1}":!0},"$ tsc\n")),Object(r.b)("h3",{id:"enter-the-nodejs-repl-mode"},"Enter the Node.js REPL mode."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript",metastring:"{1}","{1}":!0},'$ node --experimental-repl-await\nWelcome to Node.js v14.0.0.\nType ".help" for more information.\n')),Object(r.b)("h3",{id:"start-the-indexer-and-initialize-the-configurations"},"Start the indexer and initialize the configurations."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript",metastring:"{1}","{1}":!0},'> const { accounts, querycells, buildTXs, querytransactions } = require(".");\nThe server is started.\n')),Object(r.b)("h3",{id:"perform-a-common-transfer-transaction"},"Perform a common transfer transaction."),Object(r.b)("p",null,"The Hello Lumos example implements the common transfer transaction function by using Lumos modules and functions. For more information about building a common transaction by using Lumos, see ",Object(r.b)("a",{parentName:"p",href:"../tutorials/buildtransactions#transfer-ckb-in-a-common-transaction"},"Transfer CKB in a Common Transaction"),"."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Get the account information of Alice and Bob."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-javascript",metastring:"{1-7}","{1-7}":!0},'> const alice = accounts.ALICE;\n> const bob = accounts.BOB;\n> const { parseAddress } = require("@ckb-lumos/helpers");\n> const script1 = parseAddress(alice.ADDRESS);\n> const script2 = parseAddress(bob.ADDRESS);\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Check the balance for the accounts of Alice and Bob."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-javascript",metastring:"{1,3}","{1,3}":!0},"> const balance1 = querycells.getBalancebyLock(script1);\n> The balance of the account is 1386763373620166n\n> const balance2 = querycells.getBalancebyLock(script2);\n> The balance of the account is 0n\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Transfer 200 CKB from Alice to Bob. "),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-javascript",metastring:"{1}","{1}":!0},"> await buildTXs.commonTransfer([alice.ADDRESS], bob.ADDRESS, 20000000000n, 10000000n, alice.PRIVATE_KEY);\n[warn] ANYONE_CAN_PAY script info not found in config!\nThe transaction hash is 0x22cc789bdaa8e021caa303cf20cfa4063b46a17abd62b31aa2cf712844f984cb\n'0x22cc789bdaa8e021caa303cf20cfa4063b46a17abd62b31aa2cf712844f984cb'\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Check the transaction status."),Object(r.b)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The CKB miner must be started to commit the transaction on chain."))),Object(r.b)("p",{parentName:"li"},"For more information about getting transaction information by using Lumos, see ",Object(r.b)("a",{parentName:"p",href:"../tutorials/querytransactions#get-transaction-status-and-block-hash"},"Get Transaction Status and Block Hash"),". "),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-javascript",metastring:"{1}","{1}":!0},'> await querytransactions.getTXbyHash("0x22cc789bdaa8e021caa303cf20cfa4063b46a17abd62b31aa2cf712844f984cb");\nThe transaction status is committed\nThe block hash for the transaction is 0x6d60ae47167a78fbcf254c81b1d6356aceef2feeb4e039fed693c274a83faac1\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Check the new balance of Bob."),Object(r.b)("p",{parentName:"li"},"When the transaction is committed, the new balance appears in the result."),Object(r.b)("p",{parentName:"li"},"For more information about getting balance by a lock script, see ",Object(r.b)("a",{parentName:"p",href:"../tutorials/querycapacity#get-the-balance-of-an-account"},"Get the Balance of an Account"),"."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-javascript",metastring:"{1}","{1}":!0},"> await querycells.getBalancebyLock(script2);\n> The balance of the account is 20000000000n\n")))))}b.isMDXComponent=!0}}]);