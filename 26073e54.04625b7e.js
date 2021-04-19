(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),b=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||c;return n?r.a.createElement(m,s(s({ref:t},i),{},{components:n})):r.a.createElement(m,s({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<c;i++)o[i]=n[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),c=(n(0),n(121)),o={id:"manageaccounts",title:"Manage Accounts"},s={unversionedId:"tutorials/manageaccounts",id:"tutorials/manageaccounts",isDocsHomePage:!1,title:"Manage Accounts",description:"The ownership of CKB is established through keys, the lock script and addresses. Lumos also provides the functions to manage the keys, addresses and the lock script of a CKB account.",source:"@site/docs\\tutorials\\manageaccounts.md",slug:"/tutorials/manageaccounts",permalink:"/lumos_doc/docs/tutorials/manageaccounts",editUrl:"https://github.com/xying21/lumos_doc/tree/master/docs/tutorials/manageaccounts.md",version:"current",sidebar:"sidebar2",previous:{title:"Assemble Transactions",permalink:"/lumos_doc/docs/tutorials/buildtransactions"},next:{title:"DApps on CKB Workshop Code",permalink:"/lumos_doc/docs/tutorials/integratenft"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Environment",id:"environment",children:[]},{value:"Examples",id:"examples",children:[{value:"Generate Keys",id:"generate-keys",children:[]},{value:"Convert a Private Key to a Public Key",id:"convert-a-private-key-to-a-public-key",children:[]},{value:"Generate the Args from a Public Key",id:"generate-the-args-from-a-public-key",children:[]},{value:"Recover the Public Key from a Signature and a Signed Message",id:"recover-the-public-key-from-a-signature-and-a-signed-message",children:[]},{value:"Generate a Keystore File from an Extended Private Key",id:"generate-a-keystore-file-from-an-extended-private-key",children:[]},{value:"Generate an XPub Key File from an Extended Private Key",id:"generate-an-xpub-key-file-from-an-extended-private-key",children:[]},{value:"Generate the Address from a Lock Script",id:"generate-the-address-from-a-lock-script",children:[]},{value:"Get the Lock Script from an Address",id:"get-the-lock-script-from-an-address",children:[]},{value:"Generate the Lock Hash from a Lock Script",id:"generate-the-lock-hash-from-a-lock-script",children:[]},{value:"Generate an Account from a Private Key",id:"generate-an-account-from-a-private-key",children:[]}]}],i={toc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The ownership of CKB is established through keys, the lock script and addresses. Lumos also provides the functions to manage the keys, addresses and the lock script of ",Object(c.b)("a",{parentName:"p",href:"../preparation/createaccount"},"a CKB account"),". "," "),Object(c.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(c.b)("p",null,"The following prerequisites apply for the examples in this guide:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"The development environment is set up. For more information, see ",Object(c.b)("a",{parentName:"li",href:"http://localhost:3000/lumos_doc/docs/preparation/setupsystem"},"Set Up the Development Environment"),"."),Object(c.b)("li",{parentName:"ul"},"The CKB node is installed and started on DEV chain. For more information, see ",Object(c.b)("a",{parentName:"li",href:"http://localhost:3000/lumos_doc/docs/preparation/installckb"},"Install a CKB Node"),"."),Object(c.b)("li",{parentName:"ul"},"The Lumos packages (",Object(c.b)("inlineCode",{parentName:"li"},"@ckb-lumos/base"),", ",Object(c.b)("inlineCode",{parentName:"li"},"@ckb-lumos/indexer"),", ",Object(c.b)("inlineCode",{parentName:"li"},"@ckb-lumos/helpers"),", ",Object(c.b)("inlineCode",{parentName:"li"},"@ckb-lumos/config-manager"),", ",Object(c.b)("inlineCode",{parentName:"li"},"@ckb-lumos/hd"),") are installed.")),Object(c.b)("h2",{id:"environment"},"Environment"),Object(c.b)("p",null,"The following examples are verified on Ubuntu 20.04.2. Steps on the other platforms can be adjusted accordingly."),Object(c.b)("h2",{id:"examples"},"Examples"),Object(c.b)("h3",{id:"generate-keys"},"Generate Keys"),Object(c.b)("p",null,"The HD wallet manager (",Object(c.b)("inlineCode",{parentName:"p"},"@ckb-lumos/hd"),") supports BIP-39 for generating seeds, mnemonic codes (12 words), extended private and public keys. "),Object(c.b)("p",null,"The ",Object(c.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/lumos/blob/develop/packages/hd/src/mnemonic/index.ts#L173"},"mnemonic.generateMnemonic")," function can generate 12 words mnemonic."),Object(c.b)("p",null,"Example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/manageaccounts.ts/generateKey" {4,6,7,10}',title:'"hellolumos/src/manageaccounts.ts/generateKey"',"{4,6,7,10}":!0},'import { mnemonic, ExtendedPrivateKey } from "@ckb-lumos/hd";\n\nexport async function generateKey(){\n  const m = mnemonic.generateMnemonic();\n  console.log("The mnemonic is",m);\n  const seed = mnemonic.mnemonicToSeedSync(m);\n  const extendedPrivateKey = ExtendedPrivateKey.fromSeed(seed);\n  console.log(extendedPrivateKey);\n  \n  const publickey = extendedPrivateKey.toExtendedPublicKey().publicKey;\n  console.log("The public key is", publickey);\n}\n')),Object(c.b)("p",null,"Try the ",Object(c.b)("inlineCode",{parentName:"p"},"generateKey")," function in the Node.js REPL mode:"),Object(c.b)("details",null,Object(c.b)("summary",null,"CLICK ME"),Object(c.b)("p",null,Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1,4,6}","{1,4,6}":!0},"$ node --experimental-repl-await\nWelcome to Node.js v14.0.0.\nType \".help\" for more information.\n> const { accounts, manageaccounts}=require(\".\");\nThe server is started.\n> await manageaccounts.generateKey();\nThe mnemonic is put sweet bomb route thrive version evoke about excite pumpkin voyage tragic\nExtendedPrivateKey {\n  privateKey: '0xb0551ab24a366ae15fe8cbf450d275ed5c5dd72f2a8de0fbc74072230c05aa6c',\n  chainCode: '0x821f8011f21b00a82c832f1208367e31456bc81a7c1909e01d337a240bd629ed'\n}\nThe public key is 0x022186277d6626f615ec926d1a5c79ba7d6dd459e27597b68c4797e45336a2ba20\n")))),Object(c.b)("h3",{id:"convert-a-private-key-to-a-public-key"},"Convert a Private Key to a Public Key"),Object(c.b)("p",null,"The key module of the ",Object(c.b)("inlineCode",{parentName:"p"},"@ckb-lumos/hd")," package supports the secp256k1 standard. The ",Object(c.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/lumos/blob/c3bd18e6baac9c283995f25d226a689970dc9537/packages/hd/src/key.ts#L51"},"key.privateToPublic")," function can convert a private key to a public key."),Object(c.b)("p",null,"Example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/manageaccounts.ts/private2Public" {6}',title:'"hellolumos/src/manageaccounts.ts/private2Public"',"{6}":!0},'import { key } from "@ckb-lumos/hd";\n\nexport async function private2Public (\n  privatekey: HexString\n):Promise<HexString> {\n  const pubkey = key.privateToPublic(privatekey);\n  \n  console.log("The public key is",pubkey);\n  return pubkey;\n}\n')),Object(c.b)("h3",{id:"generate-the-args-from-a-public-key"},"Generate the Args from a Public Key"),Object(c.b)("p",null,"The ",Object(c.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/lumos/blob/c3bd18e6baac9c283995f25d226a689970dc9537/packages/hd/src/key.ts#L70"},"key.publicKeyToBlake160")," function uses blake160 to extracts the first 20 bytes of a public key hash as the args."),Object(c.b)("p",null,"Example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/manageaccounts.ts/public2Args" {6}',title:'"hellolumos/src/manageaccounts.ts/public2Args"',"{6}":!0},'import { key } from "@ckb-lumos/hd";\n\nexport async function public2Args (\n  publicKey: HexString\n):Promise<string> {\n  const args = key.publicKeyToBlake160(publicKey);\n  \n  console.log("The args is",args);\n  return args;\n}\n')),Object(c.b)("h3",{id:"recover-the-public-key-from-a-signature-and-a-signed-message"},"Recover the Public Key from a Signature and a Signed Message"),Object(c.b)("p",null,"Signatures are based on elliptic curve private/public key pairs. The public key is recoverable from the signature. "),Object(c.b)("p",null,"The ",Object(c.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/lumos/blob/c3bd18e6baac9c283995f25d226a689970dc9537/packages/hd/src/key.ts#L27"},"key.recoverFromSignature")," function can recover the public key from a signature and a signed message."),Object(c.b)("p",null,"Example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/manageaccounts.ts/signature2PublicKey" {7}',title:'"hellolumos/src/manageaccounts.ts/signature2PublicKey"',"{7}":!0},'import { key } from "@ckb-lumos/hd";\n\nexport async function signature2PublicKey (\n  message: HexString,\n  signature: HexString\n):Promise<HexString> {\n  const pubkey = key.recoverFromSignature(message,signature);\n  \n  console.log("The public key is",pubkey);\n  return pubkey;\n  \n}\n')),Object(c.b)("h3",{id:"generate-a-keystore-file-from-an-extended-private-key"},"Generate a Keystore File from an Extended Private Key"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"A keystore file is an encrypted version of a private key. The keystore file is generated by using the private key and a password that is used to encrypt the keystore file. The ckb-cli tool or wallets like the CKB wallet, ",Object(c.b)("a",{parentName:"p",href:"https://docs.nervos.org/docs/basics/guides/neuron#3-create-a-new-wallet-or-import-existing-keystore-file-or-seed-phrase-to-the-neuron-wallet"},"Neuron Wallet"),", can import keystore files to create new accounts.")),Object(c.b)("p",null,"The ",Object(c.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/lumos/blob/c3bd18e6baac9c283995f25d226a689970dc9537/packages/hd/src/keystore.ts#L55"},"Keystore")," module of the ",Object(c.b)("inlineCode",{parentName:"p"},"@ckb-lumos/hd")," package supports to generate keystore files from extended private keys."),Object(c.b)("p",null,"Example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/manageaccounts.ts/generateKeystore" {14,15}',title:'"hellolumos/src/manageaccounts.ts/generateKeystore"',"{14,15}":!0},'import { Keystore } from "@ckb-lumos/hd";\n\nexport async function generateKeystore(\n  password: string,\n  path: string,\n  name: string,\n  overwrite: boolean | undefined\n  ){\n    const m = mnemonic.generateMnemonic();\n    console.log("The mnemonic is",m);\n    const seed = mnemonic.mnemonicToSeedSync(m);\n    const extendedPrivateKey = ExtendedPrivateKey.fromSeed(seed);\n    console.log("The extendedPrivateKey is", extendedPrivateKey);\n    const keystore = Keystore.create(extendedPrivateKey,password);\n    keystore.save(path,{name, overwrite});\n  }\n')),Object(c.b)("p",null,"Try the ",Object(c.b)("inlineCode",{parentName:"p"},"generateKeystore")," function in the Node.js REPL mode:"),Object(c.b)("details",null,Object(c.b)("summary",null,"CLICK ME"),Object(c.b)("p",null,Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1,4,6}","{1,4,6}":!0},'$ node --experimental-repl-await\nWelcome to Node.js v14.0.0.\nType ".help" for more information.\n> const { manageaccounts}=require(".");\nThe server is started.\n> await manageaccounts.generateKeystore("test","C:\\\\test","keystore",true);\nThe mnemonic is spike way breeze cradle viable width ensure owner purchase wait just clip\nThe extendedPrivateKey is ExtendedPrivateKey {\n  privateKey: \'0x5503cc1d40b9e05a46fe8e1d4702786c624a1b5e774f964db6746ea754b4843a\',\n  chainCode: \'0x568e6eba7d3be6edf051d5de2e0384637c82f1a2e5bab56f5431b2978bd73a27\'\n}\n')))),Object(c.b)("h3",{id:"generate-an-xpub-key-file-from-an-extended-private-key"},"Generate an XPub Key File from an Extended Private Key"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"An xPub Key (extended public key) can be used to derive a unique address for every transaction.")),Object(c.b)("p",null,"The ",Object(c.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/lumos/blob/c3bd18e6baac9c283995f25d226a689970dc9537/packages/hd/src/xpub_store.ts#L4"},"XPubStore")," class of the ",Object(c.b)("inlineCode",{parentName:"p"},"@ckb-lumos/hd")," package supports to generate xPub key files from extended private keys."),Object(c.b)("p",null,"Example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/manageaccounts.ts/generateXpubStore" {9,10}',title:'"hellolumos/src/manageaccounts.ts/generateXpubStore"',"{9,10}":!0},'import { ExtendedPrivateKey, XPubStore } from "@ckb-lumos/hd";\n\nexport async function generateXPubStore(\n    extendedPrivateKey: ExtendedPrivateKey,\n    path: string,\n    overwrite: boolean | undefined\n  ){\n    const accountExtendedPublicKey = extendedPrivateKey.toAccountExtendedPublicKey();\n    const xpubstore = new XPubStore(accountExtendedPublicKey);\n    xpubstore.save(path,{overwrite});\n}\n')),Object(c.b)("p",null,"Try the ",Object(c.b)("inlineCode",{parentName:"p"},"generateXPubStore")," function in the Node.js REPL mode:"),Object(c.b)("details",null,Object(c.b)("summary",null,"CLICK ME"),Object(c.b)("p",null,Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-javascript",metastring:"{1,4,6-10}","{1,4,6-10}":!0},'$ node --experimental-repl-await\nWelcome to Node.js v14.0.0.\nType ".help" for more information.\n> const { manageaccounts}=require(".");\nThe server is started.\n> const {ExtendedPrivateKey}=require("@ckb-lumos/hd");\n> const privateKey="0x5503cc1d40b9e05a46fe8e1d4702786c624a1b5e774f964db6746ea754b4843a";\n> const chainCode = "0x568e6eba7d3be6edf051d5de2e0384637c82f1a2e5bab56f5431b2978bd73a27";\n> const extendedPrivateKey = new ExtendedPrivateKey(privateKey,chainCode);\n> await manageaccounts.generateXPubStore(extendedPK,"C:\\\\xpub",true);\n>//The example generates a xpub file under the C:\\ disk.\n>//The generated content of this example is "{"xpubkey":"027f5e9f79ff3739990a0a4581304d3128cbe0f22ee6274c6601defc87c04986cbcd1efd7be4123e6cd9d15a434407661b30b570ef0b9d444553cfec4527ec8ee3"}".\n')))),Object(c.b)("h3",{id:"generate-the-address-from-a-lock-script"},"Generate the Address from a Lock Script"),Object(c.b)("p",null,"The ",Object(c.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/lumos/blob/c3bd18e6baac9c283995f25d226a689970dc9537/packages/helpers/src/index.ts#L89"},"generateAddress")," function of the ",Object(c.b)("inlineCode",{parentName:"p"},"@ckb-lumos/helpers")," package can be used to generate the address from a specific lock script."),Object(c.b)("p",null,"Example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/manageaccounts.ts/generateAddressfromLock" {7}',title:'"hellolumos/src/manageaccounts.ts/generateAddressfromLock"',"{7}":!0},'import { generateAddress } from "@ckb-lumos/helpers";\n\nexport async function generateAddressfromLock(\n  lockScript:Script,\n  config: Config\n)  {\n  const address = generateAddress(lockScript, {config});\n  console.log("The address for the lockscript is", address);  \n}\n')),Object(c.b)("p",null,"Try the ",Object(c.b)("inlineCode",{parentName:"p"},"generateAddressfromLock")," function in the Node.js REPL mode:"),Object(c.b)("details",null,Object(c.b)("summary",null,"CLICK ME"),Object(c.b)("p",null,Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash",metastring:"{1,4,6-9}","{1,4,6-9}":!0},'$ node --experimental-repl-await\nWelcome to Node.js v14.0.0.\nType ".help" for more information.\n> const { accounts, manageaccounts, CONFIG}=require(".");\nThe server is started.\n> const alice = accounts.ALICE;\n> const { parseAddress }=require("@ckb-lumos/helpers");\n> const script = parseAddress(alice.ADDRESS);\n> const address = await manageaccounts.generateAddressfromLock(script,CONFIG);\nThe address for the lockscript is ckt1qyq8uqrxpw9tzg4u5waydrzmdmh8raqt0k8qmuetsf\n')))),Object(c.b)("h3",{id:"get-the-lock-script-from-an-address"},"Get the Lock Script from an Address"),Object(c.b)("p",null,"The ",Object(c.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/lumos/blob/c3bd18e6baac9c283995f25d226a689970dc9537/packages/helpers/src/index.ts#L145"},"parseAddress")," function of the ",Object(c.b)("inlineCode",{parentName:"p"},"@ckb-lumos/helpers")," package can be used to get the lock script from an address."),Object(c.b)("p",null,"Example:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/manageaccounts.ts/generatelockFromAddress" {6}',title:'"hellolumos/src/manageaccounts.ts/generatelockFromAddress"',"{6}":!0},'import { parseAddress } from "@ckb-lumos/helpers";\n\nexport async function generateLockFromAddress (\n  address:Address\n)  {\n  const lockscript = parseAddress(address);\n  console.log("The lockscript of the address is", lockscript);  \n}\n')),Object(c.b)("p",null,"Try the ",Object(c.b)("inlineCode",{parentName:"p"},"generatelockFromAddress")," function in the Node.js REPL mode: "),Object(c.b)("details",null,Object(c.b)("summary",null,"CLICK ME"),Object(c.b)("p",null,Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1,4,6,7}","{1,4,6,7}":!0},"$ node --experimental-repl-await\nWelcome to Node.js v14.0.0.\nType \".help\" for more information.\n> const { accounts, manageaccounts }=require(\".\");\nThe server is started.\n> const alice = accounts.ALICE;\n> await manageaccounts.generateLockFromAddress(alice.ADDRESS);\nThe lockscript of the address is {\n  code_hash: '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8',\n  hash_type: 'type',\n  args: '0x7e00660b8ab122bca3ba468c5b6eee71f40b7d8e'\n}\n")))),Object(c.b)("h3",{id:"generate-the-lock-hash-from-a-lock-script"},"Generate the Lock Hash from a Lock Script"),Object(c.b)("p",null,"The ",Object(c.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/lumos/blob/c3bd18e6baac9c283995f25d226a689970dc9537/packages/base/lib/utils.js#L73"},"computeScriptHash")," function generates the hash value for a specific lock script."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/manageaccounts.ts/generateLockHash" {7}',title:'"hellolumos/src/manageaccounts.ts/generateLockHash"',"{7}":!0},'import { utils } from "@ckb-lumos/base";\nconst {  computeScriptHash } = utils;\n\nexport async function generateLockHash(\n  lock:Script\n  ){\n    const lockHash = computeScriptHash(lock);\n    console.log("The lockHash is", lockHash);\n}\n')),Object(c.b)("h3",{id:"generate-an-account-from-a-private-key"},"Generate an Account from a Private Key"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="hellolumos/src/manageaccounts.ts/generateAccountFromPrivateKey"',title:'"hellolumos/src/manageaccounts.ts/generateAccountFromPrivateKey"'},'import { parseAddress} from "@ckb-lumos/helpers";\nimport { utils, Address, Hash, Script, HexString } from "@ckb-lumos/base";\nconst { computeScriptHash } = utils;\nimport { key } from "@ckb-lumos/hd";\n\nexport type Account = {\n  lockScript: Script;\n  lockHash: Hash;\n  address: Address;\n  pubKey: string;\n  lockScriptMeta?: any;\n}\nexport const generateAccountFromPrivateKey = (privKey: string): Account => {\n  const pubKey = key.privateToPublic(privKey);\n  const args = key.publicKeyToBlake160(pubKey);\n  const template = CONFIG.SCRIPTS["SECP256K1_BLAKE160"]!\n  const lockScript = {    \n    code_hash: template.CODE_HASH,\n    hash_type: template.HASH_TYPE,\n    args: args\n  };\n  const address = generateAddress(lockScript);\n  const lockHash = computeScriptHash(lockScript);\n  return {\n    lockScript,\n    lockHash,\n    address,\n    pubKey,\n  }\n}\n')),Object(c.b)("p",null,"Try the ",Object(c.b)("inlineCode",{parentName:"p"},"generateAccountFromPrivateKey")," function in the Node.js REPL mode: "),Object(c.b)("details",null,Object(c.b)("summary",null,"CLICK ME"),Object(c.b)("p",null,Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1,4,6,7}","{1,4,6,7}":!0},"$ node --experimental-repl-await\nWelcome to Node.js v14.0.0.\nType \".help\" for more information.\n> const { accounts, manageaccounts }=require(\".\");\nThe server is started.\n> const alice = accounts.ALICE;\n> await manageaccounts.generateAccountFromPrivateKey(alice.PRIVATE_KEY);\n{\n  lockScript: {\n    code_hash: '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8',\n    hash_type: 'type',\n    args: '0x7e00660b8ab122bca3ba468c5b6eee71f40b7d8e'\n  },\n  lockHash: '0xf6ea009a4829de7aeecd75f3ae6bcdbaacf7328074ae52a48456a8793a4b1cca',\n  address: 'ckt1qyq8uqrxpw9tzg4u5waydrzmdmh8raqt0k8qmuetsf',\n  pubKey: '0x02963f88be6c4163a68abf0539facdfc2a77064c6091f618953a230caeacf5237e'\n}\n")))))}b.isMDXComponent=!0}}]);