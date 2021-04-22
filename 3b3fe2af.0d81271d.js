(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{121:function(e,l,n){"use strict";n.d(l,"a",(function(){return p})),n.d(l,"b",(function(){return m}));var c=n(0),t=n.n(c);function a(e,l,n){return l in e?Object.defineProperty(e,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[l]=n,e}function o(e,l){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);l&&(c=c.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),n.push.apply(n,c)}return n}function r(e){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?o(Object(n),!0).forEach((function(l){a(e,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(n,l))}))}return e}function s(e,l){if(null==e)return{};var n,c,t=function(e,l){if(null==e)return{};var n,c,t={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],l.indexOf(n)>=0||(t[n]=e[n]);return t}(e,l);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var i=t.a.createContext({}),b=function(e){var l=t.a.useContext(i),n=l;return e&&(n="function"==typeof e?e(l):r(r({},l),e)),n},p=function(e){var l=b(e.components);return t.a.createElement(i.Provider,{value:l},e.children)},d={inlineCode:"code",wrapper:function(e){var l=e.children;return t.a.createElement(t.a.Fragment,{},l)}},u=t.a.forwardRef((function(e,l){var n=e.components,c=e.mdxType,a=e.originalType,o=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=c,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||a;return n?t.a.createElement(m,r(r({ref:l},i),{},{components:n})):t.a.createElement(m,r({ref:l},i))}));function m(e,l){var n=arguments,c=l&&l.mdxType;if("string"==typeof e||c){var a=n.length,o=new Array(a);o[0]=u;var r={};for(var s in l)hasOwnProperty.call(l,s)&&(r[s]=l[s]);r.originalType=e,r.mdxType="string"==typeof e?e:c,o[1]=r;for(var i=2;i<a;i++)o[i]=n[i];return t.a.createElement.apply(null,o)}return t.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80:function(e,l,n){"use strict";n.r(l),n.d(l,"frontMatter",(function(){return o})),n.d(l,"metadata",(function(){return r})),n.d(l,"toc",(function(){return s})),n.d(l,"default",(function(){return b}));var c=n(3),t=n(7),a=(n(0),n(121)),o={id:"querycells",title:"Query on Cells"},r={unversionedId:"tutorials/querycells",id:"tutorials/querycells",isDocsHomePage:!1,title:"Query on Cells",description:"A Cell is the most basic structure that represents a single piece of data in Nervos. The data contained in a cell can take many forms, including CKBytes, tokens, code like JavaScript code, or even serialized data like JSON strings. For more information about the cell model, see Cell Data Structure and CKB RFC.",source:"@site/docs\\tutorials\\querycells.md",slug:"/tutorials/querycells",permalink:"/lumos_doc/docs/tutorials/querycells",editUrl:"https://github.com/xying21/lumos_doc/tree/master/docs/tutorials/querycells.md",version:"current",lastUpdatedAt:1618925233,sidebar:"sidebar2",previous:{title:"Set Up the Lumos Indexer",permalink:"/lumos_doc/docs/tutorials/indexer"},next:{title:"Query on Transactions",permalink:"/lumos_doc/docs/tutorials/querytransactions"}},s=[{value:"Functions",id:"functions",children:[{value:"Indexer.collector",id:"indexercollector",children:[]},{value:"CellCollector",id:"cellcollector",children:[]},{value:"TransactionManager.collector",id:"transactionmanagercollector",children:[]}]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Environment",id:"environment",children:[]},{value:"Examples",id:"examples",children:[{value:"Query Cells by a Lock Script",id:"query-cells-by-a-lock-script",children:[]},{value:"Query Cells by Specific Lock and Type Script",id:"query-cells-by-specific-lock-and-type-script",children:[]},{value:"Query Cells between Given Block Numbers",id:"query-cells-between-given-block-numbers",children:[]},{value:"Skip Cells",id:"skip-cells",children:[]},{value:"Prefix Search on <var>args</var>",id:"prefix-search-on-args",children:[]},{value:"Fine Grained Query for Cells",id:"fine-grained-query-for-cells",children:[]},{value:"Order Cells by Block Number",id:"order-cells-by-block-number",children:[]},{value:"Get the Cell Minimal Capacity",id:"get-the-cell-minimal-capacity",children:[]},{value:"Get the Balance of an Account",id:"get-the-balance-of-an-account",children:[]},{value:"Get Uncommitted Cells",id:"get-uncommitted-cells",children:[]},{value:"Fetch Cells in Locktime Pool",id:"fetch-cells-in-locktime-pool",children:[]}]}],i={toc:s};function b(e){var l=e.components,n=Object(t.a)(e,["components"]);return Object(a.b)("wrapper",Object(c.a)({},i,n,{components:l,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"A Cell is the most basic structure that represents a single piece of data in Nervos. The data contained in a cell can take many forms, including CKBytes, tokens, code like JavaScript code, or even serialized data like JSON strings. For more information about the cell model, see ",Object(a.b)("a",{parentName:"p",href:"https://docs.nervos.org/docs/reference/cell"},"Cell Data Structure")," and ",Object(a.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0002-ckb/0002-ckb.md#42-cell"},"CKB RFC"),".")),Object(a.b)("p",null,"Querying on cells are the fundamental functions for a DApp to respond to user queries and transaction requests."),Object(a.b)("p",null,"Lumos provides the"," following functions for the queries on cells with specific query options."),Object(a.b)("h2",{id:"functions"},"Functions"),Object(a.b)("h3",{id:"indexercollector"},"Indexer.collector"),Object(a.b)("p",null,"The ",Object(a.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/lumos/blob/c3bd18e6baac9c283995f25d226a689970dc9537/packages/indexer/lib/index.js#L242"},"Indexer.collector")," function of the ",Object(a.b)("inlineCode",{parentName:"p"},"@ckb-lumos/indexer")," package can be used to collect cells by specific query options (",Object(a.b)("var",null,"lock"),", ",Object(a.b)("var",null,"type"),", ",Object(a.b)("var",null,"argsLen"),", ",Object(a.b)("var",null,"data"),", ",Object(a.b)("var",null,"fromBlock"),", ",Object(a.b)("var",null,"toBlock"),", ",Object(a.b)("var",null,"skip"),") and return the cells as the result."),Object(a.b)("p",null,"The ",Object(a.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/lumos/blob/c3bd18e6baac9c283995f25d226a689970dc9537/packages/sql-indexer/lib/index.js#L571"},"Indexer.collector")," function of the ",Object(a.b)("inlineCode",{parentName:"p"},"@ckb-lumos/sql-indexer")," package can be used to collect cells by specific query options (",Object(a.b)("var",null,"lock"),", ",Object(a.b)("var",null,"type"),", ",Object(a.b)("var",null,"argsLen"),", ",Object(a.b)("var",null,"data"),") and return the cells as the result."),Object(a.b)("h3",{id:"cellcollector"},"CellCollector"),Object(a.b)("p",null,"The ",Object(a.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/lumos/blob/c3bd18e6baac9c283995f25d226a689970dc9537/packages/indexer/lib/index.js#L324"},"CellCollector")," class of the ",Object(a.b)("inlineCode",{parentName:"p"},"@ckb-lumos/indexer")," package supports query on cells with specific query options (",Object(a.b)("var",null,"lock"),", ",Object(a.b)("var",null,"type"),", ",Object(a.b)("var",null,"argsLen"),", ",Object(a.b)("var",null,"data"),", ",Object(a.b)("var",null,"fromBlock"),", ",Object(a.b)("var",null,"toBlock"),", ",Object(a.b)("var",null,"order"),", ",Object(a.b)("var",null,"skip"),") and returns the cells as the result."),Object(a.b)("p",null,"The ",Object(a.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/lumos/blob/c3bd18e6baac9c283995f25d226a689970dc9537/packages/sql-indexer/lib/index.js#L622"},"CellCollector")," class of the ",Object(a.b)("inlineCode",{parentName:"p"},"@ckb-lumos/sql-indexer")," package supports query on cells with specific query options (",Object(a.b)("var",null,"lock"),", ",Object(a.b)("var",null,"type"),", ",Object(a.b)("var",null,"argsLen"),", ",Object(a.b)("var",null,"data"),", ",Object(a.b)("var",null,"fromBlock"),", ",Object(a.b)("var",null,"toBlock"),", ",Object(a.b)("var",null,"skip"),", ",Object(a.b)("var",null,"order"),") and returns the cells as the result."),Object(a.b)("p",null,"The CellCollector class of each common script (smart contract), for example, ",Object(a.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/lumos/blob/c3bd18e6baac9c283995f25d226a689970dc9537/packages/common-scripts/src/anyone_can_pay.ts#L37"},"anyone_can_pay.CellCollector"),", ",Object(a.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/lumos/blob/c3bd18e6baac9c283995f25d226a689970dc9537/packages/common-scripts/src/dao.ts#L39"},"dao.CellCollector"),", ",Object(a.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/lumos/blob/c3bd18e6baac9c283995f25d226a689970dc9537/packages/common-scripts/src/locktime_pool.ts#L57"},"locktime_pool.CellCollector"),", also supports the query on cells with specific query options."),Object(a.b)("h3",{id:"transactionmanagercollector"},"TransactionManager.collector"),Object(a.b)("p",null,"For UTXO based blockchains, pending transactions require a certain amount of period before the transactions are accepted by the blockchain. During this period, new cells created by the pending transaction are not available for new transactions.",Object(a.b)("br",null),"The ",Object(a.b)("inlineCode",{parentName:"p"},"@ckb-lumos/transaction-manager")," package deals with this problem. The transaction manager wraps an indexer instance, and makes sure the cells that are created in pending transactions, are also exposed and available for new transactions."),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("p",null,"The following prerequisites apply for the examples of this guide:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The development environment is set up. For more information, see ",Object(a.b)("a",{parentName:"li",href:"http://localhost:3000/lumos_doc/docs/preparation/setupsystem"},"Set Up the Development Environment"),"."),Object(a.b)("li",{parentName:"ul"},"The CKB node is installed and started. For more information, see ",Object(a.b)("a",{parentName:"li",href:"http://localhost:3000/lumos_doc/docs/preparation/installckb"},"Install a CKB Node"),"."),Object(a.b)("li",{parentName:"ul"},"The Lumos packages (",Object(a.b)("inlineCode",{parentName:"li"},"@ckb-lumos/base"),", ",Object(a.b)("inlineCode",{parentName:"li"},"@ckb-lumos/indexer"),", ",Object(a.b)("inlineCode",{parentName:"li"},"@ckb-lumos/helpers"),", ",Object(a.b)("inlineCode",{parentName:"li"},"@ckb-lumos/config-manager"),", ",Object(a.b)("inlineCode",{parentName:"li"},"@ckb-lumos/common-scripts"),", ",Object(a.b)("inlineCode",{parentName:"li"},"@ckb-lumos/transaction-manager"),", ",Object(a.b)("inlineCode",{parentName:"li"},"@ckb-lumos/hd-cache"),") are installed.")),Object(a.b)("h2",{id:"environment"},"Environment"),Object(a.b)("p",null,"The following examples are verified on Ubuntu 20.04.2. Steps on the other platforms can be adjusted accordingly."),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("h3",{id:"query-cells-by-a-lock-script"},"Query Cells by a Lock Script"),Object(a.b)("p",null,"The following example collects the cells for a specific lock script by using the indexer.collector function of the ",Object(a.b)("inlineCode",{parentName:"p"},"@ckb-lumos/indexer")," package. The ",Object(a.b)("inlineCode",{parentName:"p"},"INDEXER")," is initiated in the hellolumos/src/index.ts file. For more information about setting up the Lumos indexer, see ",Object(a.b)("a",{parentName:"p",href:"../tutorials/indexer"},"Set Up the Lumos Indexer"),"."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/querycells.ts/findCellsbyLock()" {8}',title:'"hellolumos/src/querycells.ts/findCellsbyLock()"',"{8}":!0},'import {INDEXER} from "./index";\nimport { Cell, Script } from "@ckb-lumos/base";\n\nexport const findCellsbyLock = async (\n    lockScript: Script,\n  ): Promise<Cell[]> => {\n \n  const collector = INDEXER.collector({ lock:lockScript});\n  const cells: Cell[] = [];\n  console.log("Find the cells by lock script:");\n  for await (const cell of collector.collect()) {\n      cells.push(cell);\n    }\n    return cells;\n  };\n')),Object(a.b)("p",null,"Try the ",Object(a.b)("inlineCode",{parentName:"p"},"findCellsbyLock")," function in the Node.js REPL mode:"),Object(a.b)("details",null,Object(a.b)("summary",null,"CLICK ME"),Object(a.b)("p",null,Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1,2,5,7-13}","{1,2,5,7-13}":!0},"$ cd hellolumos\n$ node --experimental-repl-await\nWelcome to Node.js v14.0.0.\nType \".help\" for more information.\n> const { accounts, querycells }=require(\".\");\nThe server is started.\n> const alice = accounts.ALICE;\n> const script={\n code_hash: \"0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8\",\n hash_type: \"type\",\n args: alice.ARGS,\n };\n> await querycells.findCellsbyLock(script);\nFind the cells by lock script:\n[\n  {\n    cell_output: { capacity: '0x1247953509b2', lock: [Object], type: undefined },\n    out_point: {\n      tx_hash: '0xe8655b071e3eeb94d73c2307295bbe88431e74d9091bd8ec081404a9ac485251',\n      index: '0x0'\n    },\n    block_hash: '0x4feda2b0950c3137d4a2128cbe7b25f9dd255c3468007a6b10118f2fccd855bb',\n    block_number: '0x26',\n    data: '0x'\n  },\n  {\n    cell_output: { capacity: '0x124794cb65db', lock: [Object], type: undefined },\n    out_point: {\n      tx_hash: '0xd99327f73c6278589d59cde617982a08e3fabadefa18bbae14eab30fa89b9fb1',\n      index: '0x0'\n    },\n    block_hash: '0xe8016c14a198a2b9f7acd4964ec876527ff55082d6e3a210e7b73c6316f86690',\n    block_number: '0x27',\n    data: '0x'\n  },\n  {\n    cell_output: { capacity: '0x12479461c26d', lock: [Object], type: undefined },\n    out_point: {\n      tx_hash: '0x0b2ac03c909402057eabf4202ae3ee8fc65f9f6182837db2599c53d2cc8051ba',\n      index: '0x0'\n    },\n    block_hash: '0x19bb281bc4e53a76cce55a10b99abf82bc528b6eb37e72c9bd62cd520109a1a8',\n    block_number: '0x28',\n    data: '0x'\n  },\n...\n")))),Object(a.b)("h3",{id:"query-cells-by-specific-lock-and-type-script"},"Query Cells by Specific Lock and Type Script"),Object(a.b)("p",null,"The following example collects the cells for a specific lock script and a type script, and returns the cells as the result."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/querycells.ts/findCellsbyLockandType()" {6}',title:'"hellolumos/src/querycells.ts/findCellsbyLockandType()"',"{6}":!0},'export async function findCellsbyLockandType(\n  lockScript: Script,\n  typeScript: Script\n): Promise<Cell[]>  {\n\nconst collector = INDEXER.collector({ lock:lockScript, type:typeScript});\nconst cells: Cell[] = [];\nconsole.log("Find the cells by Lock and Type script");\nfor await (const cell of collector.collect()) {\n    cells.push(cell);\n }\nreturn cells;\n};\n')),Object(a.b)("p",null,"Try the ",Object(a.b)("inlineCode",{parentName:"p"},"findCellsbyLockandType")," function in the Node.js REPL mode:"),Object(a.b)("details",null,Object(a.b)("summary",null,"CLICK ME"),Object(a.b)("p",null,Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"{2-9}","{2-9}":!0},"//Leverage the configurations for DAO script from the config manager defined in the hellolumos/src/index.ts file.\n> const { CONFIG }=require(\".\");\n> const template = CONFIG.SCRIPTS[\"DAO\"];\n> const typescript={\n code_hash: template.CODE_HASH,\n hash_type: template.HASH_TYPE,\n args: \"0x\",\n };\n> await querycells.findCellsbyLockandType(script,typescript);\nFind the cells by Lock and Type script\n[\n  {\n    cell_output: { capacity: '0x4a817c800', lock: [Object], type: [Object] },\n    out_point: {\n      tx_hash: '0x313378dc3ce2d5c3f3efd546bc9595b54907844c20a72adae15cb9e970ce90df',\n      index: '0x0'\n    },\n    block_hash: '0x657bef9f9d300bfd884065992f243770b9fa7dc8aafa304c98e210d2e02d1248',\n    block_number: '0x12c',\n    data: '0x6a00000000000000'\n  },\n  {\n    cell_output: { capacity: '0x4a817c800', lock: [Object], type: [Object] },\n    out_point: {\n      tx_hash: '0xbc708146e8fea53a4629d37fbd345f7e9dca79225d90bb1f73e7077ade93da19',\n      index: '0x0'\n    },\n    block_hash: '0xfc4a10116dbfb591796dcbf19e95c26ac647e7c2e41fc1b327a19c7ddd1eb938',\n    block_number: '0x135',\n    data: '0x1a01000000000000'\n  }\n]\n")))),Object(a.b)("h3",{id:"query-cells-between-given-block-numbers"},"Query Cells between Given Block Numbers"),Object(a.b)("p",null,"The following example fetches the cells between ","[",Object(a.b)("var",null,"fromblock"),", ",Object(a.b)("var",null,"toblock"),"]",". Both ",Object(a.b)("var",null,"fromBlock")," and ",Object(a.b)("var",null,"toBlock")," are included in the ",Object(a.b)("var",null,"QueryOptions"),"."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/querycells.ts/findCellsBetweenBlocks()" {7}',title:'"hellolumos/src/querycells.ts/findCellsBetweenBlocks()"',"{7}":!0},'export async function findCellsBetweenBlocks (\n  lockScript: Script,\n  fromBlock: string,\n  toBlock: string\n): Promise<Cell[]> {\n\nconst collector = INDEXER.collector({ lock:lockScript, fromBlock,toBlock});\nconst cells: Cell[] = [];\nconsole.log("Find cells from block",fromBlock,"to block", toBlock);\nfor await (const cell of collector.collect()) {\n    cells.push(cell);\n   // console.log(cell);\n }\nreturn cells;\n};\n')),Object(a.b)("p",null,"Try the ",Object(a.b)("inlineCode",{parentName:"p"},"findCellsBetweenBlocks")," function in the Node.js REPL mode:"),Object(a.b)("details",null,Object(a.b)("summary",null,"CLICK ME"),Object(a.b)("p",null,Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1-3}","{1-3}":!0},"> const from = \"0x81\";\n> const to = \"0x83\";\n> await querycells.findCellsBetweenBlocks(script,from,to);\nFind cells from block 0x81 to block 0x84\n[\n  {\n    cell_output: { capacity: '0x12476faec3ef', lock: [Object], type: undefined },\n    out_point: {\n      tx_hash: '0x4f6efa5ee4a116940d2dfe549c1e2ddac9ae02268d68d5e300fade7e8466072d',\n      index: '0x0'\n    },\n    block_hash: '0x6a8d2e35b024128c06cbf5ba551b6c7de576566fce12e61c646052e622f701d7',\n    block_number: '0x81',\n    data: '0x'\n  },\n  {\n    cell_output: { capacity: '0x12476fa0d2a2', lock: [Object], type: undefined },\n    out_point: {\n      tx_hash: '0xede91f58056a467cf5114a258ebc7a96a581e8e0a23fde083f84f833a6f0503c',\n      index: '0x0'\n    },\n    block_hash: '0xaefdfe2473ce86d137cbb9d2e7cf4f1f3600663bb18aa6e4d30518c6b3870be5',\n    block_number: '0x82',\n    data: '0x'\n  },\n  {\n    cell_output: { capacity: '0x12476edbf23a', lock: [Object], type: undefined },\n    out_point: {\n      tx_hash: '0x73c528726d7ca1cad5af6d7debdf962814f49994ef8ad686d071d8aac96e394c',\n      index: '0x0'\n    },\n    block_hash: '0x721d22c925d98b0260d9b6a647fdb6e93010f816f1158c14971a73c0cb073b60',\n    block_number: '0x83',\n    data: '0x'\n  },\n]\n")))),Object(a.b)("h3",{id:"skip-cells"},"Skip Cells"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"skip")," parameter represents the number of cells being skipped for the Lumos indexer. "),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/querycells.ts/findCellsandSkip()" {6}',title:'"hellolumos/src/querycells.ts/findCellsandSkip()"',"{6}":!0},'export async function findCellsandSkip(\n  lockScript: Script,\n  skip: number\n): Promise<Cell[]> {\n\nconst collector = INDEXER.collector({ lock:lockScript, skip:skip});\nconst cells: Cell[] = [];\nconsole.log("Find Cells and Skip the first",skip, "cells:");\nfor await (const cell of collector.collect()) {\n    cells.push(cell);\n    console.log(cell);\n }\nreturn cells;\n};\n')),Object(a.b)("p",null,"Skip the first 20 cells and get the result from the 21st. cell by using the ",Object(a.b)("inlineCode",{parentName:"p"},"findCellsandSkip")," function in the Node.js REPL mode: "),Object(a.b)("details",null,Object(a.b)("summary",null,"CLICK ME"),Object(a.b)("p",null,Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1}","{1}":!0},"> await querycells.findCellsandSkip(script,20);\n{\n  cell_output: {\n    capacity: '0x1247656167b4',\n    lock: {\n      code_hash: '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8',\n      hash_type: 'type',\n      args: '0x7e00660b8ab122bca3ba468c5b6eee71f40b7d8e'\n    },\n    type: undefined\n  },\n  out_point: {\n    tx_hash: '0xdcd898c29a2d9dcbaca6c5112bb681d55acb5a557aaf2cbaa1ea2fe561ba3b36',\n    index: '0x0'\n  },\n  block_hash: '0x8030e31e760905f4e2c220f45b653ed73d0bdea5962bd34ca96bc3ea50cbc725',\n  block_number: '0x9a',\n  data: '0x'\n}\n{\n  cell_output: {\n    capacity: '0x124764f7f310',\n    lock: {\n      code_hash: '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8',\n      hash_type: 'type',\n      args: '0x7e00660b8ab122bca3ba468c5b6eee71f40b7d8e'\n    },\n    type: undefined\n  },\n  out_point: {\n    tx_hash: '0x0913fd98eb1a56c9b7a460cf46f6c447d0a5048c5f2ad955c3ae7c74d3d55bbf',\n    index: '0x0'\n  },\n  block_hash: '0x19b16cd024c8d3ae06a5cd20db7f86a04b0b3160d499145d8fdee659c959f70d',\n  block_number: '0x9b',\n  data: '0x'\n}\n...\n")))),Object(a.b)("h3",{id:"prefix-search-on-args"},"Prefix Search on ",Object(a.b)("var",null,"args")),Object(a.b)("p",null,"The default value of ",Object(a.b)("var",null,"argsLen")," is -1 for the query on a full slice of the args of a lock script."),Object(a.b)("p",null,"You can specify ",Object(a.b)("var",null,"argsLen")," with a value other than the default value to enable the prefix search on the args of a lock script."),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"It is recommended to specify an explicit length for the ",Object(a.b)("var",null,"argsLen")," parameter for prefix search. For example, the length is ",Object(a.b)("strong",{parentName:"p"},"20")," in normal scenarios and ",Object(a.b)("strong",{parentName:"p"},"28")," in the multisig scenario for the lock script.  When the length is not certain, the ",Object(a.b)("var",null,"argsLen")," parameter can be set as ",Object(a.b)("inlineCode",{parentName:"p"},"any"),". But there is performance lost when using ",Object(a.b)("inlineCode",{parentName:"p"},"any")," rather than an explicit length."))),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/querycells.ts/findCellsbyPrefix()" {6}',title:'"hellolumos/src/querycells.ts/findCellsbyPrefix()"',"{6}":!0},'export async function findCellsbyPrefix(\n  lockScript: Script,\n  argslen:number\n): Promise<Cell[]>  {\n\nconst collector = INDEXER.collector({ lock:lockScript,argsLen:argslen});\nconst cells: Cell[] = [];\nconsole.log("Find Cells by prefix of args");\nfor await (const cell of collector.collect()) {\n    cells.push(cell);\n }\nreturn cells;\n};\n')),Object(a.b)("h3",{id:"fine-grained-query-for-cells"},"Fine Grained Query for Cells"),Object(a.b)("p",null,"Fine grained query for cells can be achieved by using ",Object(a.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/lumos/blob/c3bd18e6baac9c283995f25d226a689970dc9537/packages/base/index.d.ts#L351"},"ScriptWrapper")," with customized options like ",Object(a.b)("var",null,"ioType"),", ",Object(a.b)("var",null,"argsLen"),"."),Object(a.b)("p",null,"The value for the ",Object(a.b)("var",null,"ioType")," field is among ",Object(a.b)("inlineCode",{parentName:"p"},"input | output | both"),"."),Object(a.b)("p",null,"If the ",Object(a.b)("var",null,"argsLen"),"is not specified in the function, the outside ",Object(a.b)("var",null,"argsLen")," config or the default value -1 will be used."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/querycells.ts/finegrainedSearch()" {7-10}',title:'"hellolumos/src/querycells.ts/finegrainedSearch()"',"{7-10}":!0},'import { ScriptWrapper } from "@ckb-lumos/base";\nexport async function finegrainedSearch(\n  lockScript: Script,\n  typeScript: Script,\n  argslen: number\n): Promise<Cell[]> {\nconst lock:ScriptWrapper = {\n  script:lockScript,\n  argsLen: argslen\n}\nconst collector = INDEXER.collector({ lock:lock,type:typeScript});\nconst cells: Cell[] = [];\nconsole.log("Fine-Grained Query:");\nfor await (const cell of collector.collect()) {\n    cells.push(cell);\n }\nreturn cells;\n};\n')),Object(a.b)("p",null,"Try the ",Object(a.b)("inlineCode",{parentName:"p"},"finegrainedSearch")," function in Node.js REPL mode:"),Object(a.b)("details",null,Object(a.b)("summary",null,"CLICK ME"),Object(a.b)("p",null,Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1-9}","{1-9}":!0},'> const { CONFIG }=require(".");\n> const template = CONFIG.SCRIPTS["DAO"];\n> const typescript={\n   code_hash: template.CODE_HASH,\n   hash_type: template.HASH_TYPE,\n   args: "0x",\n   };\n> const argslen = 20;\n> await querycells.finegrainedSearch(script,typescript,argslen);\n...\n')))),Object(a.b)("h3",{id:"order-cells-by-block-number"},"Order Cells by Block Number"),Object(a.b)("p",null,"The following example creates a new ",Object(a.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/lumos/blob/c3bd18e6baac9c283995f25d226a689970dc9537/packages/indexer/lib/index.js#L324"},"CellCollector"),' and uses the CellCollector to collect cells in order of block numbers for a specific lock script. If the order is not specified, the default order is "asc" for the returned result.'),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/querycells.ts/findCellsandOrder()" {8}',title:'"hellolumos/src/querycells.ts/findCellsandOrder()"',"{8}":!0},'import { CellCollector } from "@ckb-lumos/indexer";\n\nexport async function findCellsandOrder (\n  lockScript: Script,\n  order:"asc"|"desc"\n): Promise<Cell[]> {\n    \nconst collector = new CellCollector(INDEXER, { lock:lockScript, order:order});\nconst cells: Cell[] = [];\nconsole.log("Find Cells in descending", order, "order of block numbers:");\nfor await (const cell of collector.collect()) {\n    cells.push(cell);\n }\nreturn cells;\n};\n')),Object(a.b)("p",null,"The following example gets the live cells for Alice and returns the result in descending order of block numbers."),Object(a.b)("details",null,Object(a.b)("summary",null,"CLICK ME"),Object(a.b)("p",null,Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1-8}","{1-8}":!0},"> const { accounts, querycells }=require(\".\");\n> const alice = accounts.ALICE;\n> const script={\n code_hash: \"0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8\",\n hash_type: \"type\",\n args: alice.ARGS,\n };\n> await querycells.findCellsandOrder(script,\"desc\");\nFind Cells in descending desc order of block numbers:\n[\n  {\n    cell_output: { capacity: '0x124462255f12', lock: [Object], type: undefined },\n    out_point: {\n      tx_hash: '0x53d845d810109d6ee4e94df96565100a4126c6fa671db1d237f60eca4a8d2105',\n      index: '0x0'\n    },\n    block_hash: '0x0301f7aa0c2902383e15662008f9886aa4cd628c4948ba737d13894e7334ea54',\n    block_number: '0x805',\n    data: '0x'\n  },\n  {\n    cell_output: { capacity: '0x1244628be0aa', lock: [Object], type: undefined },\n    out_point: {\n      tx_hash: '0xea8f658e6ea08c38f58f6a0af3530396aba0e51e1064db8626ecd38976625c34',\n      index: '0x0'\n    },\n    block_hash: '0xbae60c9c4f54d6f6a970fb76c2fdd226a83dd8724cff082157da559ce6cf507f',\n    block_number: '0x804',\n    data: '0x'\n  },\n  {\n    cell_output: { capacity: '0x1242ecee4f71', lock: [Object], type: undefined },\n    out_point: {\n      tx_hash: '0xe332fb6efba38e16b8fd20a4f47d5fffcf8fcac0c863b0eb30ef75067847936d',\n      index: '0x1'\n    },\n    block_hash: '0xd0c09a6615b30f685dd0b0e627021f89e0f35e9b59c575001d8a11f63436b76c',\n    block_number: '0x803',\n    data: '0x'\n  },\n...\n")))),Object(a.b)("h3",{id:"get-the-cell-minimal-capacity"},"Get the Cell Minimal Capacity"),Object(a.b)("p",null,"The three fields of a CKB cell and the cell itself all take up CKB capacity. The cell must have the capacity that is equal or more than the total size of information stored in the cell. For more information, see ",Object(a.b)("a",{parentName:"p",href:"https://nervosnetwork.github.io/docs-new/docs/reference/cell"},"Cell"),"."),Object(a.b)("p",null,"For example, the minimum CKB capacity requirement is 61 CKB (6,100,000,000 shannons) for a common transaction, and 102 CKB (10,200,000,000 shannons) for a DAO deposit transaction."),Object(a.b)("p",null,"The ",Object(a.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/lumos/blob/c3bd18e6baac9c283995f25d226a689970dc9537/packages/helpers/src/index.ts#L44"},"minimalCellCapacity")," function of the ",Object(a.b)("inlineCode",{parentName:"p"},"@ckb-lumos/helpers")," package can be used to get the minimal capacity for a cell."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/querycells.ts/getMinimalCellCapacity()" {6}',title:'"hellolumos/src/querycells.ts/getMinimalCellCapacity()"',"{6}":!0},'import { minimalCellCapacity } from "@ckb-lumos/helpers";\n\nexport async function getMinimalCellCapacity(\n fullcell:Cell\n) {\n  const result = minimalCellCapacity(fullcell);\n  console.log("The minimal cell capacity is",result);\n};\n')),Object(a.b)("p",null,"Choose one cell with the full structure from the previous queries and get the minimal capacity for the cell by using the ",Object(a.b)("inlineCode",{parentName:"p"},"getMinimalCellCapacity")," function in the Node.js REPL mode:"),Object(a.b)("details",null,Object(a.b)("summary",null,"CLICK ME"),Object(a.b)("p",null,Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1-19}","{1-19}":!0},"> const cell ={\n  cell_output: {\n    capacity: '0x1247656167b4',\n    lock: {\n      code_hash: '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8',\n      hash_type: 'type',\n      args: '0x7e00660b8ab122bca3ba468c5b6eee71f40b7d8e'\n    },\n    type: undefined\n  },\n  out_point: {\n    tx_hash: '0xdcd898c29a2d9dcbaca6c5112bb681d55acb5a557aaf2cbaa1ea2fe561ba3b36',\n    index: '0x0'\n  },\n  block_hash: '0x8030e31e760905f4e2c220f45b653ed73d0bdea5962bd34ca96bc3ea50cbc725',\n  block_number: '0x9a',\n  data: '0x'\n}\n> await querycells.getMinimalCellCapacity(cell);\nThe minimal cell capacity is 6100000000n\n")))),Object(a.b)("h3",{id:"get-the-balance-of-an-account"},"Get the Balance of an Account"),Object(a.b)("p",null,"The following example uses the ",Object(a.b)("inlineCode",{parentName:"p"},"Indexer.collector")," function to collect live cells for a specific lock script and then calculates the total capacity as the balance of the account. "),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/querycells.ts/getBalancebyLock()"',title:'"hellolumos/src/querycells.ts/getBalancebyLock()"'},'export async function getBalancebyLock (\n  lockScript:Script\n)  {\n  let balance = BigInt(0);\n  const collector = INDEXER.collector({ lock:lockScript});\n  const cells: Cell[] = [];\n \n  for await (const cell of collector.collect()) {\n      cells.push(cell);\n   }\n  balance = cells\n   .map((cell) =>\n     BigInt(\n       cell.cell_output.capacity\n     )\n   )\n   .reduce((balance, capacity) => (balance = balance += capacity));\n  console.log("The balance of the account is", balance);\n}\n')),Object(a.b)("p",null,"Try the ",Object(a.b)("inlineCode",{parentName:"p"},"GetBalancebyLock")," function in the Node.js REPL mode:"),Object(a.b)("details",null,Object(a.b)("summary",null,"CLICK ME"),Object(a.b)("p",null,Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1}","{1}":!0},"> await querycells.getBalancebyLock(script);\nThe balance of the account is 522545522203302n\n")))),Object(a.b)("h3",{id:"get-uncommitted-cells"},"Get Uncommitted Cells"),Object(a.b)("p",null,"You can get uncommitted outputs by the ",Object(a.b)("inlineCode",{parentName:"p"},"collector")," of the transaction manager."),Object(a.b)("p",null,"Example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/querycells.ts/getUncommittedCells()"',title:'"hellolumos/src/querycells.ts/getUncommittedCells()"'},'export const transactionManager = new TransactionManager(INDEXER);\ntransactionManager.start();\n\nexport async function getUncommittedCells(\n  lockScript:Script\n): Promise<Cell[]>  {\n  const cells:Cell[] = [];\n  console.log("Get uncommitted cells");\n  const collector = transactionManager.collector( {lock:lockScript});\n  for await (const cell of collector.collect()) {\n    cells.push(cell);\n  }\n  return cells;\n}\n')),Object(a.b)("h3",{id:"fetch-cells-in-locktime-pool"},"Fetch Cells in Locktime Pool"),Object(a.b)("p",null,"Lumos provides the ",Object(a.b)("inlineCode",{parentName:"p"},"locktimepool")," module for the cells with a lock period. Now the ",Object(a.b)("inlineCode",{parentName:"p"},"locktimepool")," module supports DAO withdrawn cells and Multisig cells. "),Object(a.b)("p",null,"The following example uses the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/lumos/blob/c3bd18e6baac9c283995f25d226a689970dc9537/packages/common-scripts/src/locktime_pool.ts#L57"},"locktimepool.Cellcollector")," class to collect all the withdrawn cells and Multisig cells of an account and returns the collected cells as the result. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/querycells.ts/locktimePoolCells()"',title:'"hellolumos/src/querycells.ts/locktimePoolCells()"'},'import {locktimePool} from "@ckb-lumos/common-scripts";\n\nexport async function locktimePoolCells(\n  frominfo: string,\n):Promise<Cell[]> {\n  const collector = new locktimePool.CellCollector(frominfo,INDEXER);\n  const cells: Cell[] = [];\n  for await (const cell of collector.collect()) { \n      cells.push(cell);\n      console.log(cell); }\n   return cells;\n}\n')),Object(a.b)("p",null,"Try the ",Object(a.b)("inlineCode",{parentName:"p"},"LocktimePoolCells")," function in the Node.js REPL mode:"),Object(a.b)("details",null,Object(a.b)("summary",null,"CLICK ME"),Object(a.b)("p",null,Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"> await querycells.locktimePoolCells(alice.ADDRESS);\n{\n  cell_output: {\n    capacity: '0x4a818dbb9',\n    lock: {\n      code_hash: '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8',\n      hash_type: 'type',\n      args: '0x7e00660b8ab122bca3ba468c5b6eee71f40b7d8e'\n    },\n    type: {\n      code_hash: '0x82d76d1b75fe2fd9a27dfbaa65a039221a380d76c926f378d3f81cf3e7e13f2e',\n      hash_type: 'type',\n      args: '0x'\n    }\n  },\n  out_point: {\n    tx_hash: '0x74104fe19b92c48ea8dbc16180740f6274ec9135e8aaea9c6a9d01ba2d76b08d',\n    index: '0x0'\n  },\n  block_hash: '0x3cb8bd2b527265a3f9a9ee067c4659a756681e3f065e13a99498b11a34338a6a',\n  block_number: '0x772',\n  data: '0x6e07000000000000',\n  since: '0x20000a0002000172',\n  depositBlockHash: '0x1a59e0832a7123a1b134496e799c0257023c2cec29a38b0ad76c7447931ed25e',\n  withdrawBlockHash: '0x3cb8bd2b527265a3f9a9ee067c4659a756681e3f065e13a99498b11a34338a6a',\n  sinceValidationInfo: undefined\n}\n")))))}b.isMDXComponent=!0}}]);