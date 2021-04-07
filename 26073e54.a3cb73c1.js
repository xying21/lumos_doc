(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||c;return n?r.a.createElement(m,s(s({ref:t},i),{},{components:n})):r.a.createElement(m,s({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<c;i++)o[i]=n[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(121)),o={id:"manageaccounts",title:"Manage Accounts"},s={unversionedId:"tutorials/manageaccounts",id:"tutorials/manageaccounts",isDocsHomePage:!1,title:"Manage Accounts",description:"The ownership of CKB is established through keys, the lock script and addresses. Lumos also provides the functions to manage the keys, addresses and the lock script of a CKB account.",source:"@site/docs\\tutorials\\manageaccounts.md",slug:"/tutorials/manageaccounts",permalink:"/lumos_doc/docs/tutorials/manageaccounts",editUrl:"https://github.com/xying21/lumos_doc/tree/master/docs/tutorials/manageaccounts.md",version:"current",sidebar:"sidebar2",previous:{title:"Assemble Transactions",permalink:"/lumos_doc/docs/tutorials/buildtransactions"},next:{title:"DApps on CKB Workshop Code",permalink:"/lumos_doc/docs/tutorials/integratenft"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Environment",id:"environment",children:[]},{value:"Examples",id:"examples",children:[{value:"Generate Keys",id:"generate-keys",children:[]},{value:"Recover Public Keys from Signatures",id:"recover-public-keys-from-signatures",children:[]},{value:"Convert a Private Key to a Public Key",id:"convert-a-private-key-to-a-public-key",children:[]},{value:"Generate the Address from a Lock Script",id:"generate-the-address-from-a-lock-script",children:[]},{value:"Get the Lock Script from an Address",id:"get-the-lock-script-from-an-address",children:[]},{value:"Generate the Lock Hash from a Lock Script",id:"generate-the-lock-hash-from-a-lock-script",children:[]},{value:"Generate an Account from a Private Key",id:"generate-an-account-from-a-private-key",children:[]}]}],i={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ownership of CKB is established through keys, the lock script and addresses. Lumos also provides the functions to manage the keys, addresses and the lock script of ",Object(c.b)("a",{parentName:"p",href:"../concepts/ckbaccounts"},"a CKB account"),". "," "),Object(c.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(c.b)("p",null,"The following prerequisites apply for managing accounts by using Lumos:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"The development environment is set up. For more information, see ",Object(c.b)("a",{parentName:"li",href:"http://localhost:3000/lumos_doc/docs/preparation/setupsystem"},"Set Up the Development Environment"),"."),Object(c.b)("li",{parentName:"ul"},"The CKB node is installed and started on DEV chain. For more information, see ",Object(c.b)("a",{parentName:"li",href:"http://localhost:3000/lumos_doc/docs/preparation/installckb"},"Install a CKB Node"),"."),Object(c.b)("li",{parentName:"ul"},"The Lumos packages (@ckb-lumos/base, @ckb-lumos/indexer, @ckb-lumos/helpers, @ckb-lumos/config-manager, @ckb-lumos/hd) are installed.")),Object(c.b)("h2",{id:"environment"},"Environment"),Object(c.b)("p",null,"The following examples are verified on Ubuntu 20.04.2. Steps on the other platforms can be adjusted accordingly."),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("h3",{id:"generate-keys"},"Generate Keys"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/manageaccounts.ts"',title:'"hellolumos/src/manageaccounts.ts"'},'import { mnemonic, ExtendedPrivateKey } from "@ckb-lumos/hd";\n\nexport async function generateKey(){\n  const m = mnemonic.generateMnemonic();\n  console.log("The mnemonic is",m);\n  const seed = mnemonic.mnemonicToSeedSync(m);\n  const extendedPrivateKey = ExtendedPrivateKey.fromSeed(seed);\n  console.log(extendedPrivateKey);\n  \n  const publickey = extendedPrivateKey.toExtendedPublicKey().publicKey;\n  console.log("The public key is", publickey);\n}\n')),Object(c.b)("p",null,"Try the ",Object(c.b)("inlineCode",{parentName:"p"},"generateKey")," function in the Node.js REPL mode:"),Object(c.b)("details",null,Object(c.b)("summary",null,"CLICK ME"),Object(c.b)("p",null,Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"$ node --experimental-repl-await\nWelcome to Node.js v14.0.0.\nType \".help\" for more information.\n> const { accounts, manageaccounts}=require(\".\");\nThe server is started.\n> await manageaccounts.generateKey();\nThe mnemonic is put sweet bomb route thrive version evoke about excite pumpkin voyage tragic\nExtendedPrivateKey {\n  privateKey: '0xb0551ab24a366ae15fe8cbf450d275ed5c5dd72f2a8de0fbc74072230c05aa6c',\n  chainCode: '0x821f8011f21b00a82c832f1208367e31456bc81a7c1909e01d337a240bd629ed'\n}\nThe public key is 0x022186277d6626f615ec926d1a5c79ba7d6dd459e27597b68c4797e45336a2ba20\n")))),Object(c.b)("h3",{id:"recover-public-keys-from-signatures"},"Recover Public Keys from Signatures"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/manageaccounts.ts"',title:'"hellolumos/src/manageaccounts.ts"'},'export async function signature2PublicKey (\n  message: HexString,\n  signature: HexString\n):Promise<HexString> {\n  const pubkey = key.recoverFromSignature(message,signature);\n  \n  console.log("The public key is",pubkey);\n  return pubkey;\n  \n}\n')),Object(c.b)("h3",{id:"convert-a-private-key-to-a-public-key"},"Convert a Private Key to a Public Key"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/manageaccounts.ts"',title:'"hellolumos/src/manageaccounts.ts"'},'export async function private2Public (\n  privatekey: HexString\n):Promise<HexString> {\n  const pubkey = key.privateToPublic(privatekey);\n  \n  console.log("The public key is",pubkey);\n  return pubkey;\n}\n')),Object(c.b)("h3",{id:"generate-the-address-from-a-lock-script"},"Generate the Address from a Lock Script"),Object(c.b)("p",null,"The ",Object(c.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/lumos/blob/c3bd18e6baac9c283995f25d226a689970dc9537/packages/helpers/src/index.ts#L89"},"generateAddress")," function of the @ckb-lumos/helpers package can be used to generate address from a specific lock script."),Object(c.b)("p",null,"The following example generates the address from a lock script."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/manageaccounts.ts"',title:'"hellolumos/src/manageaccounts.ts"'},'export async function generateAddressfromLock(\n  lockScript:Script,\n  config: Config\n)  {\n  const address = generateAddress(lockScript, {config});\n  console.log("The address for the lockscript is", address);  \n}\n')),Object(c.b)("p",null,"Try the ",Object(c.b)("inlineCode",{parentName:"p"},"generateAddressfromLock")," function in the Node.js REPL mode:"),Object(c.b)("details",null,Object(c.b)("summary",null,"CLICK ME"),Object(c.b)("p",null,Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash",metastring:"{1,4,6-9}","{1,4,6-9}":!0},'$ node --experimental-repl-await\nWelcome to Node.js v14.0.0.\nType ".help" for more information.\n> const { accounts, manageaccounts, CONFIG}=require(".");\nThe server is started.\n> const alice = accounts.ALICE;\n> const { parseAddress }=require("@ckb-lumos/helpers");\n> const script = parseAddress(alice.ADDRESS);\n> const address = await manageaccounts.generateAddressfromLock(script,CONFIG);\nThe address for the lockscript is ckt1qyq8uqrxpw9tzg4u5waydrzmdmh8raqt0k8qmuetsf\n')))),Object(c.b)("h3",{id:"get-the-lock-script-from-an-address"},"Get the Lock Script from an Address"),Object(c.b)("p",null,"The ",Object(c.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/lumos/blob/c3bd18e6baac9c283995f25d226a689970dc9537/packages/helpers/src/index.ts#L145"},"parseAddress")," function of the @ckb-lumos/helpers package can be used to get the lock script from an address."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Example"),":"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/manageaccounts.ts"',title:'"hellolumos/src/manageaccounts.ts"'},'import { parseAddress } from "@ckb-lumos/helpers";\n\nexport async function generatelockFromAddress (\n  address:Address\n)  {\n  const lockscript = parseAddress(address);\n  console.log("The lockscript of the address is", lockscript);  \n}\n')),Object(c.b)("p",null,"Try the ",Object(c.b)("inlineCode",{parentName:"p"},"generatelockFromAddress")," function in the Node.js REPL mode: "),Object(c.b)("details",null,Object(c.b)("summary",null,"CLICK ME"),Object(c.b)("p",null,Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"$ node --experimental-repl-await\nWelcome to Node.js v14.0.0.\nType \".help\" for more information.\n> const { accounts, manageaccounts }=require(\".\");\nThe server is started.\n> const alice = accounts.ALICE;\n> await manageaccounts.generatelockFromAddress(alice.ADDRESS);\nThe lockscript of the address is {\n  code_hash: '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8',\n  hash_type: 'type',\n  args: '0x7e00660b8ab122bca3ba468c5b6eee71f40b7d8e'\n}\n")))),Object(c.b)("h3",{id:"generate-the-lock-hash-from-a-lock-script"},"Generate the Lock Hash from a Lock Script"),Object(c.b)("p",null,"The ",Object(c.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/lumos/blob/c3bd18e6baac9c283995f25d226a689970dc9537/packages/base/lib/utils.js#L73"},"computeScriptHash")," function generates the hash value for a specific lock script."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/manageaccounts.ts"',title:'"hellolumos/src/manageaccounts.ts"'},'import { utils } from "@ckb-lumos/base";\nconst {  computeScriptHash } = utils;\n\nexport async function generateLockHash(\n  lock:Script\n  ){\n    const lockHash = computeScriptHash(lock);\n    console.log("The lockHash is", lockHash);\n}\n')),Object(c.b)("h3",{id:"generate-an-account-from-a-private-key"},"Generate an Account from a Private Key"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/manageaccounts.ts"',title:'"hellolumos/src/manageaccounts.ts"'},'import { parseAddress} from "@ckb-lumos/helpers";\nimport { utils, Address, Hash, Script, HexString } from "@ckb-lumos/base";\nconst { computeScriptHash } = utils;\nimport { key } from "@ckb-lumos/hd";\n\nexport type Account = {\n  lockScript: Script;\n  lockHash: Hash;\n  address: Address;\n  pubKey: string;\n  lockScriptMeta?: any;\n}\nexport const generateAccountFromPrivateKey = (privKey: string): Account => {\n  const pubKey = key.privateToPublic(privKey);\n  const args = key.publicKeyToBlake160(pubKey);\n  const template = CONFIG.SCRIPTS["SECP256K1_BLAKE160"]!\n  const lockScript = {    \n    code_hash: template.CODE_HASH,\n    hash_type: template.HASH_TYPE,\n    args: args\n  };\n  const address = generateAddress(lockScript);\n  const lockHash = computeScriptHash(lockScript);\n  return {\n    lockScript,\n    lockHash,\n    address,\n    pubKey,\n  }\n}\n')),Object(c.b)("p",null,"Try the ",Object(c.b)("inlineCode",{parentName:"p"},"generateAccountFromPrivateKey")," function in the Node.js REPL mode: "),Object(c.b)("details",null,Object(c.b)("summary",null,"CLICK ME"),Object(c.b)("p",null,Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"$ node --experimental-repl-await\nWelcome to Node.js v14.0.0.\nType \".help\" for more information.\n> const { accounts, manageaccounts }=require(\".\");\nThe server is started.\n> const alice = accounts.ALICE;\n> await manageaccounts.generateAccountFromPrivateKey(alice.PRIVATE_KEY);\n{\n  lockScript: {\n    code_hash: '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8',\n    hash_type: 'type',\n    args: '0x7e00660b8ab122bca3ba468c5b6eee71f40b7d8e'\n  },\n  lockHash: '0xf6ea009a4829de7aeecd75f3ae6bcdbaacf7328074ae52a48456a8793a4b1cca',\n  address: 'ckt1qyq8uqrxpw9tzg4u5waydrzmdmh8raqt0k8qmuetsf',\n  pubKey: '0x02963f88be6c4163a68abf0539facdfc2a77064c6091f618953a230caeacf5237e'\n}\n")))))}p.isMDXComponent=!0}}]);