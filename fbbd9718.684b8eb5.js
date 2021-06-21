(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),c=(n(0),n(110)),s={id:"querytransactions",title:"Query on Transactions"},o={unversionedId:"guides/querytransactions",id:"guides/querytransactions",isDocsHomePage:!1,title:"Query on Transactions",description:"Transactions are the most fundamental entities for a DApp to interact with Nervos CKB. For more information about CKB transactions, see Nervos Docs Data Structures.",source:"@site/docs\\guides\\queryTransactions.md",slug:"/guides/querytransactions",permalink:"/lumos_doc/docs/guides/querytransactions",editUrl:"https://github.com/xying21/lumos_doc/tree/master/docs/guides/queryTransactions.md",version:"current",lastUpdatedAt:1624237622,sidebar:"sidebar2",previous:{title:"Query on CKB Capacity",permalink:"/lumos_doc/docs/guides/querycapacity"},next:{title:"Build Transactions",permalink:"/lumos_doc/docs/guides/buildtransactions"}},i=[{value:"Query Options",id:"query-options",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Environment",id:"environment",children:[]},{value:"Examples",id:"examples",children:[{value:"Query Transactions by a Lock Script",id:"query-transactions-by-a-lock-script",children:[]},{value:"Query Transactions between Given Block Numbers",id:"query-transactions-between-given-block-numbers",children:[]},{value:"Skip Transactions",id:"skip-transactions",children:[]},{value:"Order Transactions by Block Number",id:"order-transactions-by-block-number",children:[]},{value:"Prefix Search on <var>args</var>",id:"prefix-search-on-args",children:[]},{value:"Fine-grained Query for Transactions",id:"fine-grained-query-for-transactions",children:[]},{value:"Get Transaction Status and Block Hash",id:"get-transaction-status-and-block-hash",children:[]}]}],l={toc:i};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Transactions are the most fundamental entities for a DApp to interact with Nervos CKB. For more information about CKB transactions, see ",Object(c.b)("a",{parentName:"p",href:"https://docs.nervos.org/docs/reference/transaction"},"Nervos Docs: Transaction")," and ",Object(c.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md#transaction"},"CKB RFC: Data Structures"),".")),Object(c.b)("p",null,"Lumos supports querying on transactions for specific query options."),Object(c.b)("h2",{id:"query-options"},"Query Options"),Object(c.b)("p",null,"Lumos supports to query on transactions for the options including ",Object(c.b)("var",null,"lock"),", ",Object(c.b)("var",null,"type"),", ",Object(c.b)("var",null,"argsLen"),", ",Object(c.b)("var",null,"fromBlock"),", ",Object(c.b)("var",null,"toBlock"),", ",Object(c.b)("var",null,"skip")," and ",Object(c.b)("var",null,"order"),"."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("var",null,"lock"),": A lock script or a ScriptWrapper of a lock script."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("var",null,"type"),": A type script or a ScriptWrapper of a type script.",Object(c.b)("p",{parentName:"li"},"For more information about ",Object(c.b)("a",{parentName:"p",href:"https://nervosnetwork.github.io/lumos/interfaces/base.scriptwrapper.html"},"ScriptWrapper"),", see ",Object(c.b)("a",{parentName:"p",href:"../guides/querytransactions#fine-grained-query-for-transactions"},"Fine-grained Query for Transactions"),".")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("var",null,"argsLen"),": The lock or type args length. The default value of ",Object(c.b)("var",null,"argsLen")," is -1 for the query on a full slice of the args."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("var",null,"fromBlock"),": The starting block number that the query returns."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("var",null,"toBlock"),": The ending block number that the query returns."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("var",null,"skip"),": The number of transactions being skipped for the Lumos indexer."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("var",null,"order"),": The query result can be returned in order of block numbers. The default value is ",Object(c.b)("var",null,"asc")," (ascending) for the returned result.")),Object(c.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(c.b)("p",null,"The following prerequisites apply for the examples in this guide:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"The development environment is set up. For more information, see ",Object(c.b)("a",{parentName:"li",href:"http://localhost:3000/lumos_doc/docs/preparation/setupsystem"},"Set Up the Development Environment"),"."),Object(c.b)("li",{parentName:"ul"},"The Lumos packages are installed. For more information, see ",Object(c.b)("a",{parentName:"li",href:"../guides/installlumos"},"Install Lumos Packages"),".")),Object(c.b)("h2",{id:"environment"},"Environment"),Object(c.b)("p",null,"The following examples are verified on Ubuntu 20.04.2. Steps on the other platforms can be adjusted accordingly."),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("h3",{id:"query-transactions-by-a-lock-script"},"Query Transactions by a Lock Script"),Object(c.b)("p",null,"The following example creates a new ",Object(c.b)("a",{parentName:"p",href:"https://nervosnetwork.github.io/lumos/classes/indexer.transactioncollector.html"},"TransactionCollector")," to collect transactions for a specific lock script and returns the transactions with status."),Object(c.b)("p",null,"Example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/querytransactions.ts/getTXsbyLock" {7}',title:'"hellolumos/src/querytransactions.ts/getTXsbyLock"',"{7}":!0},'import { INDEXER } from "./index";\nimport { Script, Transaction } from "@ckb-lumos/base";\nimport { TransactionCollector } from "@ckb-lumos/indexer";\n\nexport async function getTXsbyLock(lockScript: Script) {\n  console.log("Get transactions by lock script:");\n  const txCollector = new TransactionCollector(INDEXER, { lock: lockScript });\n  const txs: Transaction[] = [];\n  for await (const txWithStatus of txCollector.collect()) {\n    //@ts-ignore\n    const tx = txWithStatus.transaction;\n    //@ts-ignore\n    const txStatus = txWithStatus.tx_status.status;\n    txs.push(tx);\n    //console.log(txStatus);\n  }\n  return txs;\n}\n')),Object(c.b)("p",null,"Try the ",Object(c.b)("inlineCode",{parentName:"p"},"getTXsbyLock")," function in the Node.js REPL mode:"),Object(c.b)("details",null,Object(c.b)("summary",null,"CLICK ME"),Object(c.b)("p",null,Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1,2,5,7-10}","{1,2,5,7-10}":!0},"$ cd hellolumos\n$ node --experimental-repl-await\nWelcome to Node.js v14.0.0.\nType \".help\" for more information.\n> const { accounts, querytransactions } = require(\".\");\nThe server is started.\n> const bob = accounts.BOB;\n> const { parseAddress } = require(\"@ckb-lumos/helpers\");\n> const script = parseAddress(bob.ADDRESS);\n> await querytransactions.getTXsbyLock(script);\nGet transactions by lock script:\n[\n  {\n    cell_deps: [ [Object] ],\n    hash: '0x22cc789bdaa8e021caa303cf20cfa4063b46a17abd62b31aa2cf712844f984cb',\n    header_deps: [],\n    inputs: [ [Object] ],\n    outputs: [ [Object], [Object] ],\n    outputs_data: [ '0x', '0x' ],\n    version: '0x0',\n    witnesses: [\n      '0x5500000010000000550000005500000041000000ac5500c3bb4487dbb7b034cd0fb4faec9a29645076d00c041e2a16bfb45c4e0c68d6470c1bd0afb9d0a1d973210896a27bbaef3f23864ac6a716b6291fb226be00'                                                                                    \n    ]\n  },\n  {\n    cell_deps: [ [Object] ],\n    hash: '0x46e6e4fd23263aa8983f73962faca0bd9d40463c2e42bbcd190249e3ec6bd5f8',\n    header_deps: [],\n    inputs: [ [Object] ],\n    outputs: [ [Object], [Object] ],\n    outputs_data: [ '0x', '0x' ],\n    version: '0x0',\n    witnesses: [\n      '0x550000001000000055000000550000004100000071222e2b88f03b643fce53e81ff281b31a0a4a11f3eb31793064586d94ad66b578e148340c980460a63fb2d31fe7e320e59c20e921fc2aa40b8b01840763b05601'\n    ]\n  },\n  {\n    cell_deps: [ [Object] ],\n    hash: '0x1f279591dca01710f1e5f71480ffe9039887212ade07b025b84a3d0b19f9a2bb',\n    header_deps: [],\n    inputs: [ [Object] ],\n    outputs: [ [Object], [Object] ],\n    outputs_data: [ '0x', '0x' ],\n    version: '0x0',\n    witnesses: [\n      '0x5500000010000000550000005500000041000000189e5d1d8df5b92dea79828ec074de83c03635d5a3f9e800736d576b074b03ca7c2553bff3b4f5fa38c8663dc6b976b0cd96127364bcdd2a49d454ce657b3ea801'\n    ]\n  }\n]\n")))),Object(c.b)("h3",{id:"query-transactions-between-given-block-numbers"},"Query Transactions between Given Block Numbers"),Object(c.b)("p",null,"The following example fetches the transactions between ","[",Object(c.b)("var",null,"fromBlock"),", ",Object(c.b)("var",null,"toBlock"),"]","."),Object(c.b)("p",null,"Example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/querytransactions.ts/getTXsbetweenBlocks" {10-14}',title:'"hellolumos/src/querytransactions.ts/getTXsbetweenBlocks"',"{10-14}":!0},'import { INDEXER } from "./index";\nimport { Script } from "@ckb-lumos/base";\nimport { TransactionCollector } from "@ckb-lumos/indexer";\n\nexport async function getTXsbetweenBlocks(\n  lockScript: Script,\n  fromBlock: string,\n  toBlock: string\n) {\n  const txCollector = new TransactionCollector(INDEXER, {\n    lock: lockScript,\n    fromBlock,\n    toBlock,\n  });\n  console.log("Get transactions between given blocks:");\n  for await (const txWithStatus of txCollector.collect()) {\n    console.log(txWithStatus);\n  }\n}\n')),Object(c.b)("p",null,"Try the ",Object(c.b)("inlineCode",{parentName:"p"},"getTXsbetweenBlocks")," function in the Node.js REPL mode:"),Object(c.b)("details",null,Object(c.b)("summary",null,"CLICK ME"),Object(c.b)("p",null,Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1,2,5,7-12}","{1,2,5,7-12}":!0},"$ cd hellolumos\n$ node --experimental-repl-await\nWelcome to Node.js v14.0.0.\nType \".help\" for more information.\n> const { accounts, querytransactions } = require(\".\");\nThe server is started.\n> const alice = accounts.ALICE;\n> const { parseAddress } = require(\"@ckb-lumos/helpers\");\n> const script = parseAddress(alice.ADDRESS);\n> const from = \"0x11\";\n> const to = \"0x15\";\n> await querytransactions.getTXsbetweenBlocks(script, from, to);\nGet transactions between given blocks:\n{\n  transaction: {\n    cell_deps: [],\n    hash: '0xa4e46a4d656c849ecee9b80fb2490967b0a89a6fd767acddc59ddd7d1013d1a9',\n    header_deps: [],\n    inputs: [ [Object] ],\n    outputs: [ [Object] ],\n    outputs_data: [ '0x' ],\n    version: '0x0',\n    witnesses: [\n      '0x590000000c00000055000000490000001000000030000000310000009bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce801140000007e00660b8ab122bca3ba468c5b6eee71f40b7d8e00000000'                                                                            \n    ]\n  },\n  tx_status: {\n    block_hash: '0xe87b33e3b499ede1390cf12ec1f2df772762fa7cc981c55fe3753a01fcc52d14',\n    status: 'committed'\n  }\n}\n{\n  transaction: {\n    cell_deps: [],\n    hash: '0x8e4eded5087d8341e739885d4dd39b78661fde80c711a42b4aeee856de4d5d1c',\n    header_deps: [],\n    inputs: [ [Object] ],\n    outputs: [ [Object] ],\n    outputs_data: [ '0x' ],\n    version: '0x0',\n    witnesses: [\n      '0x590000000c00000055000000490000001000000030000000310000009bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce801140000007e00660b8ab122bca3ba468c5b6eee71f40b7d8e00000000'                                                                            \n    ]\n  },\n  tx_status: {\n    block_hash: '0xf410bc8b58e5edcc0f6f9277a3d4c1ada599884b7395ad2a57f65643051c5752',\n    status: 'committed'\n  }\n}\n{\n  transaction: {\n    cell_deps: [],\n    hash: '0x4b4e37eda430c4c288398b518e00a93eae0fa979f65dc4f874feb2f4c8b5ae0b',\n    header_deps: [],\n    inputs: [ [Object] ],\n    outputs: [ [Object] ],\n    outputs_data: [ '0x' ],\n    version: '0x0',\n    witnesses: [\n      '0x590000000c00000055000000490000001000000030000000310000009bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce801140000007e00660b8ab122bca3ba468c5b6eee71f40b7d8e00000000'                                                                            \n    ]\n  },\n  tx_status: {\n    block_hash: '0xb8166998d66f21d8b2b46c30a935a66c9f13ed6fb0dafa43679d6b781046f1eb',\n    status: 'committed'\n  }\n}\n{\n  transaction: {\n    cell_deps: [],\n    hash: '0xc5e1990313383e57bbd7954808731c35666fe73b58a8c2c6bd5531a59af95e22',\n    header_deps: [],\n    inputs: [ [Object] ],\n    outputs: [ [Object] ],\n    outputs_data: [ '0x' ],\n    version: '0x0',\n    witnesses: [\n      '0x590000000c00000055000000490000001000000030000000310000009bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce801140000007e00660b8ab122bca3ba468c5b6eee71f40b7d8e00000000'                                                                            \n    ]\n  },\n  tx_status: {\n    block_hash: '0xb0b006d8b1df2bbd67a0effabc9a018874f45eed06f9e299b169e2f17ef62b20',\n    status: 'committed'\n  }\n}\n{\n  transaction: {\n    cell_deps: [],\n    hash: '0xeb37d08d17356435bc52dedcea5780b282ab40979ed0321cde12c91b9325ac86',\n    header_deps: [],\n    inputs: [ [Object] ],\n    outputs: [ [Object] ],\n    outputs_data: [ '0x' ],\n    version: '0x0',\n    witnesses: [\n      '0x590000000c00000055000000490000001000000030000000310000009bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce801140000007e00660b8ab122bca3ba468c5b6eee71f40b7d8e00000000'\n    ]\n  },\n  tx_status: {\n    block_hash: '0x6a6c07981e60d3a0e021c14c61d0962947724a616c64ff64a6e583f4e3409c5d',\n    status: 'committed'\n  }\n}\n")))),Object(c.b)("h3",{id:"skip-transactions"},"Skip Transactions"),Object(c.b)("p",null,"The ",Object(c.b)("var",null,"skip")," query option represents the number of transactions being skipped."),Object(c.b)("p",null,"Example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/querytransactions.ts/getTXsandSkip" {6}',title:'"hellolumos/src/querytransactions.ts/getTXsandSkip"',"{6}":!0},'import { INDEXER } from "./index";\nimport { Script } from "@ckb-lumos/base";\nimport { TransactionCollector } from "@ckb-lumos/indexer";\n\nexport async function getTXsandSkip(lock: Script, skip: number) {\n  const txCollector = new TransactionCollector(INDEXER, { lock, skip });\n  console.log("Get transactions and skip the first", skip, "trasactions");\n  for await (const txWithStatus of txCollector.collect()) {\n    console.log(txWithStatus);\n  }\n}\n')),Object(c.b)("p",null,"Try the ",Object(c.b)("inlineCode",{parentName:"p"},"getTXsandSkip")," function in the Node.js REPL mode:"),Object(c.b)("details",null,Object(c.b)("summary",null,"CLICK ME"),Object(c.b)("p",null,Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1,2,5,7-10}","{1,2,5,7-10}":!0},"$ cd hellolumos\n$ node --experimental-repl-await\nWelcome to Node.js v14.0.0.\nType \".help\" for more information.\n> const { accounts, querytransactions } = require(\".\");\nThe server is started.\n> const bob = accounts.BOB;\n> const { parseAddress } = require(\"@ckb-lumos/helpers\");\n> const script = parseAddress(bob.ADDRESS);\n> await querytransactions.getTXsandSkip(script, 2);\nGet transactions and skip the first 2 trasactions\n{\n  transaction: {\n    cell_deps: [ [Object] ],\n    hash: '0x1f279591dca01710f1e5f71480ffe9039887212ade07b025b84a3d0b19f9a2bb',\n    header_deps: [],\n    inputs: [ [Object] ],\n    outputs: [ [Object], [Object] ],\n    outputs_data: [ '0x', '0x' ],\n    version: '0x0',\n    witnesses: [\n      '0x5500000010000000550000005500000041000000189e5d1d8df5b92dea79828ec074de83c03635d5a3f9e800736d576b074b03ca7c2553bff3b4f5fa38c8663dc6b976b0cd96127364bcdd2a49d454ce657b3ea801'\n    ]\n  },\n  tx_status: {\n    block_hash: '0x29acfca00bb07d94791c0f14685d40820ac198b771c894e45755bb55018fa6ea',\n    status: 'committed'\n  }\n}\n")))),Object(c.b)("h3",{id:"order-transactions-by-block-number"},"Order Transactions by Block Number"),Object(c.b)("p",null,"The following example creates a new ",Object(c.b)("a",{parentName:"p",href:"https://nervosnetwork.github.io/lumos/classes/indexer.transactioncollector.html"},"TransactionCollector"),' and uses the TransactionCollector to collect transactions in order of block numbers for a specific lock script. If the order is not specified, the default order is "asc" (ascending) for the returned result.'),Object(c.b)("p",null,"Example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/querytransactions.ts/getTXsandOrder" {6}',title:'"hellolumos/src/querytransactions.ts/getTXsandOrder"',"{6}":!0},'import { INDEXER } from "./index";\nimport { Script } from "@ckb-lumos/base";\nimport { TransactionCollector } from "@ckb-lumos/indexer";\n\nexport async function getTXsandOrder(lock: Script, order: "asc" | "desc") {\n  const txCollector = new TransactionCollector(INDEXER, { lock, order });\n  console.log("Get transactions in order of", order);\n  for await (const txWithStatus of txCollector.collect()) {\n    console.log(txWithStatus);\n  }\n}\n')),Object(c.b)("h3",{id:"prefix-search-on-args"},"Prefix Search on ",Object(c.b)("var",null,"args")),Object(c.b)("p",null,"To enable prefix search on args of lock scripts or type scripts, a value can be specified for ",Object(c.b)("var",null,"argsLen")," instead of the default value of ",Object(c.b)("strong",{parentName:"p"},"-1"),". The default value is used for a query on the full slice of args of a lock script or a type script."),Object(c.b)("p",null,"The lock script args length is ",Object(c.b)("strong",{parentName:"p"},"20")," in normal scenarios and ",Object(c.b)("strong",{parentName:"p"},"28")," in the multisig scenario. When the length is not certain, the ",Object(c.b)("var",null,"argsLen")," parameter can be set as ",Object(c.b)("inlineCode",{parentName:"p"},"any"),". "),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"It is recommended to specify an explicit length for the ",Object(c.b)("var",null,"argsLen")," parameter in a prefix search, that has better performance than using ",Object(c.b)("inlineCode",{parentName:"p"},"any")," for ",Object(c.b)("var",null,"argsLen"),"."))),Object(c.b)("p",null,"Example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/querytransactions.ts/findTXsbyPrefix" {6}',title:'"hellolumos/src/querytransactions.ts/findTXsbyPrefix"',"{6}":!0},'import { INDEXER } from "./index";\nimport { Script } from "@ckb-lumos/base";\nimport { TransactionCollector } from "@ckb-lumos/indexer";\n\nexport async function findTXsbyPrefix(lock: Script, argsLen: number) {\n  const txCollector = new TransactionCollector(INDEXER, { lock, argsLen });\n  console.log("Prefix Search");\n  for await (const txWithStatus of txCollector.collect()) {\n    console.log(txWithStatus);\n  }\n}\n')),Object(c.b)("h3",{id:"fine-grained-query-for-transactions"},"Fine-grained Query for Transactions"),Object(c.b)("p",null,"Fine-grained query can query on transactions at the granularity of a cell type, a lock or type script, and the args length of the lock or type script by using ",Object(c.b)("a",{parentName:"p",href:"https://nervosnetwork.github.io/lumos/interfaces/base.scriptwrapper.html"},"ScriptWrapper"),"."),Object(c.b)("p",null,"The query gets the transactions containing the cells in ",Object(c.b)("var",null,"ioType")," ( ",Object(c.b)("inlineCode",{parentName:"p"},"input")," or ",Object(c.b)("inlineCode",{parentName:"p"},"output")," or ",Object(c.b)("inlineCode",{parentName:"p"},"both"),") and with a specific lock or type script, and the args length of the script is ",Object(c.b)("var",null,"argsLen"),". The ",Object(c.b)("var",null,"argsLen")," config in the ScriptWrapper takes priority over the ",Object(c.b)("var",null,"argsLen")," config outside of the ScriptWrapper. If ",Object(c.b)("var",null,"argsLen")," is not specified in the ScriptWrapper, the ",Object(c.b)("var",null,"argsLen")," config outside of the ScriptWrapper or the default value -1 will be used."),Object(c.b)("p",null,"The following example is the fine-grained query for transactions on a ScriptWrapper that wraps a lock script, a lock args length and a cell type."),Object(c.b)("p",null,"Example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/querytransactions.ts/finegrainedSearch" {10-14}',title:'"hellolumos/src/querytransactions.ts/finegrainedSearch"',"{10-14}":!0},'import { INDEXER } from "./index";\nimport { Script, ScriptWrapper } from "@ckb-lumos/base";\nimport { TransactionCollector } from "@ckb-lumos/indexer";\n\nexport async function finegrainedSearch(\n  lockScript: Script,\n  argslen: number,\n  iotype: "output" | "input" | "both"\n) {\n  const lock: ScriptWrapper = {\n    script: lockScript,\n    ioType: iotype,\n    argsLen: argslen,\n  };\n  const txCollector = new TransactionCollector(INDEXER, {\n    lock,\n  });\n  console.log("Fine Grained Query");\n  for await (const txWithStatus of txCollector.collect()) {\n    console.log(txWithStatus);\n  }\n}\n')),Object(c.b)("p",null,"Try the ",Object(c.b)("inlineCode",{parentName:"p"},"finegrainedSearch")," function in the Node.js REPL mode:"),Object(c.b)("details",null,Object(c.b)("summary",null,"CLICK ME"),Object(c.b)("p",null,Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1,2,5,7-10,68}","{1,2,5,7-10,68}":!0},"$ cd hellolumos\n$ node --experimental-repl-await\nWelcome to Node.js v14.0.0.\nType \".help\" for more information.\n> const { accounts, querytransactions } = require(\".\");\nThe server is started.\n> const bob = accounts.BOB;\n> const { parseAddress } = require(\"@ckb-lumos/helpers\");\n> const script = parseAddress(bob.ADDRESS);\n> await querytransactions.finegrainedSearch(script, 20, \"output\");\n# The result shows the transactions that produced output cells with Bob's lock script.\n# Bob received CKB capacity in these transactions.\nFine Grained Query\n{\n  transaction: {\n    cell_deps: [ [Object] ],\n    hash: '0x22cc789bdaa8e021caa303cf20cfa4063b46a17abd62b31aa2cf712844f984cb',\n    header_deps: [],\n    inputs: [ [Object] ],\n    outputs: [ [Object], [Object] ],\n    outputs_data: [ '0x', '0x' ],\n    version: '0x0',\n    witnesses: [\n      '0x5500000010000000550000005500000041000000ac5500c3bb4487dbb7b034cd0fb4faec9a29645076d00c041e2a16bfb45c4e0c68d6470c1bd0afb9d0a1d973210896a27bbaef3f23864ac6a716b6291fb226be00'                                                                                    \n    ]\n  },\n  tx_status: {\n    block_hash: '0x6d60ae47167a78fbcf254c81b1d6356aceef2feeb4e039fed693c274a83faac1',\n    status: 'committed'\n  }\n}\n{\n  transaction: {\n    cell_deps: [ [Object] ],\n    hash: '0x46e6e4fd23263aa8983f73962faca0bd9d40463c2e42bbcd190249e3ec6bd5f8',\n    header_deps: [],\n    inputs: [ [Object] ],\n    outputs: [ [Object], [Object] ],\n    outputs_data: [ '0x', '0x' ],\n    version: '0x0',\n    witnesses: [\n      '0x550000001000000055000000550000004100000071222e2b88f03b643fce53e81ff281b31a0a4a11f3eb31793064586d94ad66b578e148340c980460a63fb2d31fe7e320e59c20e921fc2aa40b8b01840763b05601'                                                                                    \n    ]\n  },\n  tx_status: {\n    block_hash: '0x63539ac9bc533bfb16e00cfaf736ebc041442fd3c3c6e8796b53cbdec0fb7af4',\n    status: 'committed'\n  }\n}\n{\n  transaction: {\n    cell_deps: [ [Object] ],\n    hash: '0x1f279591dca01710f1e5f71480ffe9039887212ade07b025b84a3d0b19f9a2bb',\n    header_deps: [],\n    inputs: [ [Object] ],\n    outputs: [ [Object], [Object] ],\n    outputs_data: [ '0x', '0x' ],\n    version: '0x0',\n    witnesses: [\n      '0x5500000010000000550000005500000041000000189e5d1d8df5b92dea79828ec074de83c03635d5a3f9e800736d576b074b03ca7c2553bff3b4f5fa38c8663dc6b976b0cd96127364bcdd2a49d454ce657b3ea801'\n    ]\n  },\n  tx_status: {\n    block_hash: '0x29acfca00bb07d94791c0f14685d40820ac198b771c894e45755bb55018fa6ea',\n    status: 'committed'\n  }\n}\n> await querytransactions.finegrainedSearch(script, 20, \"input\");\n")))),Object(c.b)("h3",{id:"get-transaction-status-and-block-hash"},"Get Transaction Status and Block Hash"),Object(c.b)("p",null,"A transaction can be in one of the following status:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("strong",{parentName:"li"},"pending")," result means the transaction is in the pool, and not proposed yet."),Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("strong",{parentName:"li"},"proposed")," result means the transaction is in the pool, and can be committed in the next block."),Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("strong",{parentName:"li"},"committed")," result means that the block involving the transaction has been mined and is officially on chain.")),Object(c.b)("p",null,"The following example uses the ",Object(c.b)("a",{parentName:"p",href:"https://nervosnetwork.github.io/lumos/classes/rpc.rpc-2.html#get_transaction"},"get_transaction")," function of the ",Object(c.b)("inlineCode",{parentName:"p"},"@ckb-lumos/rpc")," package to get the transaction information for a specific transaction hash."),Object(c.b)("p",null,"Example: "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/querytransactions.ts/getTXbyHash" {5}',title:'"hellolumos/src/querytransactions.ts/getTXbyHash"',"{5}":!0},'import { RPC } from "@ckb-lumos/RPC";\nconst rpc = new RPC("http://127.0.0.1:8114");\n\nexport async function getTXbyHash(txHash: string) {\n  const txWithStatus = await rpc.get_transaction(txHash);\n\n  const status = txWithStatus?.tx_status.status;\n  const blockHash = txWithStatus?.tx_status.block_hash;\n  console.log("The transaction status is", status);\n  console.log("The block hash for the transaction is", blockHash);\n}\n')),Object(c.b)("p",null,"Try the ",Object(c.b)("inlineCode",{parentName:"p"},"getTXbyHash")," function in the Node.js REPL mode:"),Object(c.b)("details",null,Object(c.b)("summary",null,"CLICK ME"),Object(c.b)("p",null,Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1,2,5,7}","{1,2,5,7}":!0},'$ cd hellolumos\n$ node --experimental-repl-await\nWelcome to Node.js v14.0.0.\nType ".help" for more information.\n> const { querytransactions } = require(".");\nThe server is started.\n> await querytransactions.getTXbyHash("0x46e6e4fd23263aa8983f73962faca0bd9d40463c2e42bbcd190249e3ec6bd5f8");\nThe transaction status is committed\nThe block hash for the transaction is 0x63539ac9bc533bfb16e00cfaf736ebc041442fd3c3c6e8796b53cbdec0fb7af4\n')))))}b.isMDXComponent=!0},110:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||c;return n?r.a.createElement(f,o(o({ref:t},l),{},{components:n})):r.a.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,s=new Array(c);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<c;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);