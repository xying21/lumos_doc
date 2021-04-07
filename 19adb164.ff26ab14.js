(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,m=p["".concat(o,".").concat(u)]||p[u]||b[u]||i;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),i=(n(0),n(121)),o={id:"indexer",title:"Set Up the Lumos Indexer"},s={unversionedId:"tutorials/indexer",id:"tutorials/indexer",isDocsHomePage:!1,title:"Set Up the Lumos Indexer",description:"Lumos is designed based on the Index-Query-Assemble pattern. The Lumos indexer polls blocks from a CKB node, indexes them and stores the indexed data in a local database to provide optimal queries.",source:"@site/docs\\tutorials\\indexer.md",slug:"/tutorials/indexer",permalink:"/lumos_doc/docs/tutorials/indexer",editUrl:"https://github.com/xying21/lumos_doc/tree/master/docs/tutorials/indexer.md",version:"current",sidebar:"sidebar2",previous:{title:"Set Up the Config Manager",permalink:"/lumos_doc/docs/tutorials/config"},next:{title:"Query on Cells",permalink:"/lumos_doc/docs/tutorials/querycells"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Environment",id:"environment",children:[]},{value:"Set Up the RocksDB Backed Indexer",id:"set-up-the-rocksdb-backed-indexer",children:[{value:"Step 1. Install the indexer package.",id:"step-1-install-the-indexer-package",children:[]},{value:"Step 2. Start the indexer.",id:"step-2-start-the-indexer",children:[]}]},{value:"Set Up the SQL Backed Indexer",id:"set-up-the-sql-backed-indexer",children:[{value:"Step 1. Install Docker.",id:"step-1-install-docker",children:[]},{value:"Step 2. Create a PostgreSQL instance.",id:"step-2-create-a-postgresql-instance",children:[]},{value:"Step 3. Clone the Lumos repository to initialize the SQL database.",id:"step-3-clone-the-lumos-repository-to-initialize-the-sql-database",children:[]},{value:"Step 4. Check the Current Indexed Tip",id:"step-4-check-the-current-indexed-tip",children:[]}]}],l={toc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Lumos is designed based on the ",Object(i.b)("a",{parentName:"p",href:"https://docs.nervos.org/docs/reference/cell#index-query-assemble-pattern"},"Index-Query-Assemble")," pattern. The Lumos indexer polls blocks from a CKB node, indexes them and stores the indexed data in a local database to provide optimal queries."),Object(i.b)("p",null,"Lumos provides the following two types of indexers:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The RocksDB backed indexer: The RocksDB backed indexer is contained in the  ",Object(i.b)("inlineCode",{parentName:"p"},"@ckb-lumos/indexer")," package. After the ",Object(i.b)("inlineCode",{parentName:"p"},"@ckb-lumos/indexer")," package is installed, the RocksDB backed indexer can be used directly.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The SQL backed indexer: The Lumos indexer supports the SQL database of the latest stable versions of PostgreSQL and MySQL. A separate package, the ",Object(i.b)("inlineCode",{parentName:"p"},"@ckb-lumos/sql-indexer")," package contains the SQL backed indexer. Specific SQL database settings are required before using the SQL backed indexer. "),Object(i.b)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The usage for the SQL backed indexer is not fully verified. It is still in the experimental stage."))))),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The Lumos indexer is based on the CKB indexer that is developed by Rust. To leverage the native Rust code without installing Rust, Lumos provides the Lumos indexer with a pre-built native module of the CKB indexer."),Object(i.b)("p",{parentName:"div"},"For Electron applications, you can install the pre-built native module of the CKB indexer by running the ",Object(i.b)("b",null,"LUMOS_NODE_RUNTIME=electron npm i")," command."))),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("p",null,"The following prerequisites apply for setting up the Lumos indexer:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The development environment is set up. "),Object(i.b)("p",{parentName:"li"},"For more information, see ",Object(i.b)("a",{parentName:"p",href:"../preparation/setupsystem"},"Set Up the Development Environment"),"."))),Object(i.b)("h2",{id:"environment"},"Environment"),Object(i.b)("p",null,"The following examples are verified on Ubuntu 20.04.2. Steps on the other platforms can be adjusted accordingly."),Object(i.b)("h2",{id:"set-up-the-rocksdb-backed-indexer"},"Set Up the RocksDB Backed Indexer"),Object(i.b)("h3",{id:"step-1-install-the-indexer-package"},"Step 1. Install the indexer package."),Object(i.b)("p",null,"The following commands install the RocksDB backed indexer as a dependency for ",Object(i.b)("var",null,"mydapp"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"$ cd mydapp\n$ yarn add @ckb-lumos/indexer\n")),Object(i.b)("h3",{id:"step-2-start-the-indexer"},"Step 2. Start the indexer."),Object(i.b)("p",null,"The following commands initialize and start the RocksDB backed indexer. The Indexer URI, for example, ",Object(i.b)("a",{parentName:"p",href:"http://127.0.0.1:8114"},"http://127.0.0.1:8114")," (the default RPC URL), is the ",Object(i.b)("var",null,"listen_address")," configuration in the ",Object(i.b)("inlineCode",{parentName:"p"},"ckb.toml")," file of the CKB node."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="mydapp/src/index.ts"',title:'"mydapp/src/index.ts"'},'import { Indexer } from "@ckb-lumos/indexer";\nconst CKB_RPC = "http://127.0.0.1:8114";\nconst INDEXER = new Indexer(CKB_RPC, "./indexed-data");\nINDEXER.startForever();\n')),Object(i.b)("h2",{id:"set-up-the-sql-backed-indexer"},"Set Up the SQL Backed Indexer"),Object(i.b)("p",null,"To be Updated..."),Object(i.b)("h3",{id:"step-1-install-docker"},"Step 1. Install Docker."),Object(i.b)("p",null,"For more information about Docker installation, see ",Object(i.b)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Install Docker Engine"),"."),Object(i.b)("h3",{id:"step-2-create-a-postgresql-instance"},"Step 2. Create a PostgreSQL instance."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"$ docker run --name postgres -e POSTGRES_USER=user -e POSTGRES_DB=lumos -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres\n")),Object(i.b)("h3",{id:"step-3-clone-the-lumos-repository-to-initialize-the-sql-database"},"Step 3. Clone the Lumos repository to initialize the SQL database."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"$ cd $TOP\n$ git clone --recursive https://github.com/nervosnetwork/lumos\n$ cd lumos && git checkout v0.15.0\n$ yarn\n$ cd packages/sql-indexer\n$ cat << EOF > knexfile.js\nmodule.exports = {\n  development: {\n    client: 'postgresql',\n    connection: {\n      database: 'lumos',\n      user:     'user',\n      password: 'password'\n    },\n    pool: {\n      min: 2,\n      max: 10\n    },\n    migrations: {\n      tableName: 'knex_migrations'\n    }\n  }\n};\nEOF\n$ npx knex migrate:up\n")),Object(i.b)("h3",{id:"step-4-check-the-current-indexed-tip"},"Step 4. Check the Current Indexed Tip"),Object(i.b)("p",null,"Enter the Node.js REPL mode to check the current indexed tip after the indexer is started:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'$ cd hellolumos\n$ node --experimental-repl-await\nWelcome to Node.js v14.0.0.\nType ".help" for more information.\n> const { Indexer, CellCollector, TransactionCollector } = require("@ckb-lumos/sql-indexer");\n> const indexer = new Indexer("http://127.0.0.1:5432", "/sql-indexed-data");\n> indexer.startForever();\n> await indexer.tip()\n{\n  block_number: \'0x0\',\n  block_hash: \'0x120ab9abd48e3b82f93b88eba8c50a0e1304cc2fffb5573fb14b56c6348f2305\'\n}\n')))}d.isMDXComponent=!0}}]);