(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{121:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var b=c.a.createContext({}),i=function(e){var t=c.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=i(e.components);return c.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=i(a),d=n,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||r;return a?c.a.createElement(m,l(l({ref:t},b),{},{components:a})):c.a.createElement(m,l({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var b=2;b<r;b++)o[b]=a[b];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},122:function(e,t,a){"use strict";function n(e){var t,a,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(c&&(c+=" "),c+=a);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}t.a=function(){for(var e,t,a=0,c="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(c&&(c+=" "),c+=t);return c}},128:function(e,t,a){"use strict";var n=a(0),c=a(129);t.a=function(){const e=Object(n.useContext)(c.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},129:function(e,t,a){"use strict";var n=a(0);const c=Object(n.createContext)(void 0);t.a=c},136:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(128),o=a(122),l=a(55),s=a.n(l);const b=37,i=39;t.a=function(e){const{lazy:t,block:a,defaultValue:l,values:p,groupId:u,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:h}=Object(r.a)(),[f,g]=Object(n.useState)(l),O=n.Children.toArray(e.children);if(null!=u){const e=m[u];null!=e&&e!==f&&p.some((t=>t.value===e))&&g(e)}const j=e=>{g(e),null!=u&&h(u,e)},k=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":a},d)},p.map((({value:e,label:t})=>c.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>k.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case i:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case b:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(k,e.target,e)},onFocus:()=>j(e),onClick:()=>{j(e)}},t)))),t?Object(n.cloneElement)(O.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):c.a.createElement("div",{className:"margin-vert--md"},O.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==f})))))}},137:function(e,t,a){"use strict";var n=a(3),c=a(0),r=a.n(c);t.a=function({children:e,hidden:t,className:a}){return r.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:a}),e)}},84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return u}));var n=a(3),c=a(7),r=(a(0),a(121)),o=a(136),l=a(137),s={id:"createaccount",title:"Create Accounts"},b={unversionedId:"preparation/createaccount",id:"preparation/createaccount",isDocsHomePage:!1,title:"Create Accounts",description:"A CKB account is represented as a collection of live cells locked by a lock script. The ID of the account is the lock script args.",source:"@site/docs\\preparation\\createaccount.md",slug:"/preparation/createaccount",permalink:"/lumos_doc/docs/preparation/createaccount",editUrl:"https://github.com/xying21/lumos_doc/tree/master/docs/preparation/createaccount.md",version:"current",sidebar:"sidebar2",previous:{title:"Install a CKB Node",permalink:"/lumos_doc/docs/preparation/installckb"},next:{title:"Hello Lumos",permalink:"/lumos_doc/docs/preparation/hellolumos"}},i=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create the accounts by using ckb-cli.",id:"create-the-accounts-by-using-ckb-cli",children:[]}],p={toc:i};function u(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A CKB account is represented as a collection of live cells locked by a lock script. The ID of the account is the lock script args."),Object(r.b)("p",null,"The following table lists the elements of an account that are useful during the DApp development process."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Element"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Lock","\xa0","script",Object(r.b)("br",null)),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("pre",null,"A lock script consists of three key parameters, including ",Object(r.b)("em",{parentName:"td"},"code_hash"),", ",Object(r.b)("em",{parentName:"td"},"hash_type")," and ",Object(r.b)("em",{parentName:"td"},"args"),".",Object(r.b)("br",null),"Example:",Object(r.b)("br",null),Object(r.b)("samp",null,"{",Object(r.b)("br",null),"\xa0","code_hash: '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8',",Object(r.b)("br",null)," ","\xa0","hash_type:","\xa0","'type',",Object(r.b)("br",null),"\xa0","args: '0x82be41cf167110e6c00e79009a3fd4d9abe8c65a'",Object(r.b)("br",null),"}")))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Address"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("pre",null,"A CKB address packages a lock script into a single line in a verifiable and human-readable format.",Object(r.b)("br",null),"Example:",Object(r.b)("br",null),Object(r.b)("samp",null,"ckt1qyqg90jpeut8zy8xcq88jqy68l2dn2lgcedqd7ye7n")))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Private","\xa0","key"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("pre",null,"A private key is a string of letters and numbers that is normally stored in a wallet. It proves the ownership of cryptocurrencies or digital assets and allows the user to send his/her cryptocurrency or digital assets to other payment addresses.",Object(r.b)("br",null),"A private key must be kept secret at all times. Anyone with the key has the ability to access the cryptocurrency or digital assets."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"CKB","\xa0","capacity"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("pre",null,"CKB capacity of an account is the total CKB capacity of the live cells of an account.",Object(r.b)("br",null),Object(r.b)("strong",{parentName:"td"},"Note"),": If an account wants to perform transaction actions like transferring CKB to other accounts, the account must have enough CKB capacity that is equal or more than the minimal CKB requirement of a transaction.",Object(r.b)("br",null),"For example, the minimum CKB capacity requirement is 61 ",Object(r.b)("a",{parentName:"td",href:"https://docs.nervos.org/docs/basics/glossary#shannon",title:"One CKByte is equal to 100,000,000 Shannons."},"CKB")," (6,100,000,000 shannons) for one common transaction, and 102 CKB (10,200,000,000 shannons) for a DAO deposit transaction."))))),Object(r.b)("p",null,"This guide introduces how to create CKB accounts by using ckb-cli. We will prepare two CKB accounts, Alice and Bob for later usage in the ",Object(r.b)("a",{parentName:"p",href:"../preparation/hellolumos"},"Hello Lumos")," example."," "),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("p",null,"The following prerequisites apply for creating the accounts:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The CKB node is installed and running. ")),Object(r.b)("h2",{id:"create-the-accounts-by-using-ckb-cli"},"Create the accounts by using ckb-cli."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"ckb-cli")," is included in the CKB pre-built installer package. It is a command line tool that provides the functions of rpc requests, creating CKB addresses, managing wallets, sending transactions, and depositing to Nervos DAO etc. These functions can help with debugging and testing during the development process. For more information, see ",Object(r.b)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-cli/wiki/Sub-Commands"},"ckb-cli Sub Commands"),".")),Object(r.b)(o.a,{defaultValue:"ubuntu",values:[{label:"Ubuntu 20.04",value:"ubuntu"},{label:"Windows 10",value:"windows"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"ubuntu",mdxType:"TabItem"},Object(r.b)("p",null,Object(r.b)("b",null,"Step 1. Download the CKB Pre-built Installer Package.")),Object(r.b)("p",null,"If the package is already downloaded, go to Step 2 directly."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1-4}","{1-4}":!0},"$ export TOP=$(pwd)\n$ curl -LO https://github.com/nervosnetwork/ckb/releases/download/v0.39.0/ckb_v0.39.0_x86_64-unknown-linux-gnu.tar.gz\n$ tar xzf ckb_v0.39.0_x86_64-unknown-linux-gnu.tar.gz\n$ export PATH=$PATH:$TOP/ckb_v0.39.0_x86_64-unknown-linux-gnu\n")),Object(r.b)("p",null,"Verify the tool is working."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1}","{1}":!0},"$ ckb-cli -V\nckb-cli 0.39.0\n")),Object(r.b)("b",null,"Step 3. Create the account for Alice."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1}","{1}":!0},"$ ckb-cli account new\nYour new account is locked with a password. Please give a password. Do not forget this password.\nPassword: \nRepeat password: \naddress:\n  mainnet: ckb1qyq8uqrxpw9tzg4u5waydrzmdmh8raqt0k8qxe85u4\n  testnet: ckt1qyq8uqrxpw9tzg4u5waydrzmdmh8raqt0k8qmuetsf\nlock_arg: 0x7e00660b8ab122bca3ba468c5b6eee71f40b7d8e\nlock_hash: 0xf6ea009a4829de7aeecd75f3ae6bcdbaacf7328074ae52a48456a8793a4b1cca\n")),Object(r.b)("b",null,"Step 4. Get the private key for the account of Alice."),Object(r.b)("p",null,"The extended private key is exported to the ",Object(r.b)("inlineCode",{parentName:"p"},"$(pwd)/alice")," file. The first line in the file is the private key of the account. The second line is the chain code."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1}","{1}":!0},'$ ckb-cli account export --extended-privkey-path alice --lock-arg 0x7e00660b8ab122bca3ba468c5b6eee71f40b7d8e\nPassword: \nmessage: "Success exported account as extended privkey to: \\"alice\\", please use this file carefully"\n')),Object(r.b)("b",null,"Step 5. Get CKB Capacity for the account of Alice.")," (to be updated)",Object(r.b)("p",null,"The process of getting CKB capacity varies for the accounts on different networks (chains). "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To get CKB capacity for an account on ",Object(r.b)("strong",{parentName:"p"},"DEV chain"),", specify the account as the miner for receiving mining rewards."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If the CKB node is installed by using the pre-built installer, specify the ",Object(r.b)("inlineCode",{parentName:"p"},"args")," in the ",Object(r.b)("inlineCode",{parentName:"p"},"block_assembler")," section in ckb.toml with the ",Object(r.b)("inlineCode",{parentName:"p"},"lock_arg")," of the account."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1-10}","{1-10}":!0},'$ ed devnet/ckb.toml <<EOF\n143a\n[block_assembler]\ncode_hash = "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8"\nargs = "0x7e00660b8ab122bca3ba468c5b6eee71f40b7d8e"\nhash_type = "type"\nmessage = "0x"\n.\nwq\nEOF\n')),Object(r.b)("p",{parentName:"li"},"After the miner is specified, restart the CKB node and start the CKB miner."),Object(r.b)("p",{parentName:"li"},"To restart the CKB node, stop the CKB node by using the ctrl + C command in the terminal that runs the node and then start the node by executing ",Object(r.b)("inlineCode",{parentName:"p"},"ckb run -C devnet"),"."),Object(r.b)("p",{parentName:"li"},"To start the miner, open a new terminal and run the following commands:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1-3}","{1-3}":!0},"$ export TOP=$(pwd)\n$ export PATH=$PATH:$TOP/ckb_v0.40.0_x86_64-unknown-linux-gnu.tar.gz\n$ ckb miner -C devnet\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If the CKB node is installed by Tippy, specify ",Object(r.b)("strong",{parentName:"p"},"Block Assembler Lock Arg")," in the Edit Chain form with the ",Object(r.b)("inlineCode",{parentName:"p"},"lock_arg")," of the account."),Object(r.b)("p",{parentName:"li"},"After the miner is specified, restart the CKB node and start the CKB miner on the Tippy dashboard.")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To get CKB capacity for an account on ",Object(r.b)("strong",{parentName:"p"},"Testnet"),", go to ",Object(r.b)("a",{parentName:"p",href:"https://faucet.nervos.org"},"https://faucet.nervos.org")," and paste the Testnet address of the account in the address inputbox, then click the ",Object(r.b)("strong",{parentName:"p"},"Claim")," button."),Object(r.b)("p",{parentName:"li"},"50,000 CKB can be claimed for each Testnet address from the ",Object(r.b)("a",{parentName:"p",href:"https://faucet.nervos.org/"},"faucet")," per 24 hours. "))),Object(r.b)("b",null,"Step 6. Check the Capacity of the Account of Alice."),Object(r.b)("p",null,"To check the capacity of the account, execute the ",Object(r.b)("inlineCode",{parentName:"p"},"ckb-cli wallet get-capacity --address <the Testnet address of the account>")," command as follows:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1}","{1}":!0},'$ ckb-cli wallet get-capacity --address "ckt1qyq8uqrxpw9tzg4u5waydrzmdmh8raqt0k8qmuetsf"\nimmature: 8039446.8758295 (CKB)\ntotal: 10451302.54823011 (CKB)\n')),Object(r.b)("b",null,"Step 7. Create an account for Bob."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1}","{1}":!0},"$ ckb-cli account new\nYour new account is locked with a password. Please give a password. Do not forget this password.\nPassword: \nRepeat password: \naddress:\n  mainnet: ckb1qyqwe03shn6udvhjmrkzm53f53sr5l3qdwvsewv2mv\n  testnet: ckt1qyqwe03shn6udvhjmrkzm53f53sr5l3qdwvsytj4hs\nlock_arg: 0xecbe30bcf5c6b2f2d8ec2dd229a4603a7e206b99\nlock_hash: 0x34f085b5d2fa3f4ad2880713082a72864522a6ebffa1eb931b09e0407092eda5\n")),Object(r.b)("p",null,"To get the private key for the account of Bob:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1}","{1}":!0},'$ ckb-cli account export --extended-privkey-path bob --lock-arg 0xecbe30bcf5c6b2f2d8ec2dd229a4603a7e206b99\nPassword: \nmessage: "Success exported account as extended privkey to: \\"bob\\", please use this file carefully"\n'))),Object(r.b)(l.a,{value:"windows",mdxType:"TabItem"},Object(r.b)("p",null,Object(r.b)("b",null,"Step 1. Download the CKB pre-built installer package.")),Object(r.b)("p",null,"This example downloads ",Object(r.b)("a",{href:"https://github.com/nervosnetwork/ckb/releases/download/v0.39.0/ckb_v0.39.0_x86_64-pc-windows-msvc.zip"},"v0.39.0"),". All releases can be found on the ",Object(r.b)("a",{href:"https://github.com/nervosnetwork/ckb/releases"},"CKB releases")," page."),Object(r.b)("p",null,"If the package is already downloaded, go to Step 2 directly."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1}","{1}":!0},"C:\\curl -LO https://github.com/nervosnetwork/ckb/releases/download/v0.39.0/ckb_v0.39.0_x86_64-pc-windows-msvc.zip\n  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100   646  100   646    0     0    646      0  0:00:01 --:--:--  0:00:01   861\n100 15.8M  100 15.8M    0     0  1472k      0  0:00:11  0:00:11 --:--:-- 1645k\n")),Object(r.b)("p",null,"Unzip the files into the C:\\ckb folder and verify the tool is working."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1}","{1}":!0},"C:\\ckb> ckb-cli -V\nckb-cli 0.39.0\n")),Object(r.b)("b",null,"Step 2. Create the account for Alice."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1}","{1}":!0},"C:\\ckb> ckb-cli account new\nYour new account is locked with a password. Please give a password. Do not forget this password.\nPassword: \nRepeat password: \naddress:\n  mainnet: ckb1qyq8uqrxpw9tzg4u5waydrzmdmh8raqt0k8qxe85u4\n  testnet: ckt1qyq8uqrxpw9tzg4u5waydrzmdmh8raqt0k8qmuetsf\nlock_arg: 0x7e00660b8ab122bca3ba468c5b6eee71f40b7d8e\nlock_hash: 0xf6ea009a4829de7aeecd75f3ae6bcdbaacf7328074ae52a48456a8793a4b1cca\n")),Object(r.b)("b",null,"Step 3. Get the private key for the account of Alice."),Object(r.b)("p",null,"The extended private key is exported to the ",Object(r.b)("inlineCode",{parentName:"p"},"C:/ckb/alice")," file. The first line in the file is the private key of the account. The second line is the chain code."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1}","{1}":!0},'C:\\ckb> ckb-cli account export --extended-privkey-path alice --lock-arg 0x7e00660b8ab122bca3ba468c5b6eee71f40b7d8e\nPassword: \nmessage: "Success exported account as extended privkey to: \\"alice\\", please use this file carefully"\n')),Object(r.b)("b",null,"Step 4. Get CKB Capacity for the account of Alice.")," (to be updated)",Object(r.b)("p",null,"The process for getting CKB capacity is different for the accounts on different networks (chains). "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To get CKB capacity for an account on ",Object(r.b)("strong",{parentName:"p"},"DEV chain"),", specify the account as the miner for receiving mining rewards."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If the CKB node is installed by using the pre-built installer, specify the ",Object(r.b)("inlineCode",{parentName:"p"},"args")," in the ",Object(r.b)("inlineCode",{parentName:"p"},"block_assembler")," section in ckb.toml with the ",Object(r.b)("inlineCode",{parentName:"p"},"lock_arg")," of the account."),Object(r.b)("p",{parentName:"li"},"The ckb.toml file is under the ckb installation path, for example, /ckb_v0.39.0_x86_64-unknown-linux-gnu/devnet."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-toml",metastring:'title="../devnet/ckb.toml"',title:'"../devnet/ckb.toml"'},'[block_assembler]\ncode_hash = "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8"\nargs = "0x7e00660b8ab122bca3ba468c5b6eee71f40b7d8e"\nhash_type = "type"\nmessage = "0x"\n')),Object(r.b)("p",{parentName:"li"},"After the miner is specified, restart the CKB node and start the CKB miner."),Object(r.b)("p",{parentName:"li"},"To restart the CKB node, stop the CKB node by using the ctrl + C command in the terminal that runs the node and then start the node by executing ",Object(r.b)("inlineCode",{parentName:"p"},"ckb run -C devnet"),"."),Object(r.b)("p",{parentName:"li"},"To start the miner, open a new terminal and run the following commands:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1}","{1}":!0},"C:\\ckb> ckb miner -C devnet\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If the CKB node is installed by Tippy, specify ",Object(r.b)("strong",{parentName:"p"},"Block Assembler Lock Arg")," in the Edit Chain form with the ",Object(r.b)("inlineCode",{parentName:"p"},"lock_arg")," of the account."),Object(r.b)("p",{parentName:"li"},"After the miner is specified, restart the CKB node and start the CKB miner on the Tippy dashboard.")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To get CKB capacity for an account on ",Object(r.b)("strong",{parentName:"p"},"Testnet"),", go to ",Object(r.b)("a",{parentName:"p",href:"https://faucet.nervos.org"},"https://faucet.nervos.org")," and paste the Testnet address of the account in the address inputbox, then click the ",Object(r.b)("strong",{parentName:"p"},"Claim")," button."),Object(r.b)("p",{parentName:"li"},"50,000 CKB can be claimed for each Testnet address from the ",Object(r.b)("a",{parentName:"p",href:"https://faucet.nervos.org/"},"faucet")," per 24 hours. "))),Object(r.b)("b",null,"Step 5. Check the Capacity of the Account of Alice."),Object(r.b)("p",null,"To check the capacity of the account, execute the ",Object(r.b)("inlineCode",{parentName:"p"},"ckb-cli wallet get-capacity --address <the Testnet address of the account> command")," as follows:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1}","{1}":!0},'$ ckb-cli wallet get-capacity --address "ckt1qyq8uqrxpw9tzg4u5waydrzmdmh8raqt0k8qmuetsf"\nimmature: 8039446.8758295 (CKB)\ntotal: 10451302.54823011 (CKB)\n')),Object(r.b)("b",null,"Step 6. Create an account for Bob."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1}","{1}":!0},"$ ckb-cli account new\nYour new account is locked with a password. Please give a password. Do not forget this password.\nPassword: \nRepeat password: \naddress:\n  mainnet: ckb1qyqwe03shn6udvhjmrkzm53f53sr5l3qdwvsewv2mv\n  testnet: ckt1qyqwe03shn6udvhjmrkzm53f53sr5l3qdwvsytj4hs\nlock_arg: 0xecbe30bcf5c6b2f2d8ec2dd229a4603a7e206b99\nlock_hash: 0x34f085b5d2fa3f4ad2880713082a72864522a6ebffa1eb931b09e0407092eda5\n")),Object(r.b)("p",null,"To get the private key for the account of Bob:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell",metastring:"{1}","{1}":!0},'$ ckb-cli account export --extended-privkey-path bob --lock-arg 0xecbe30bcf5c6b2f2d8ec2dd229a4603a7e206b99\nPassword: \nmessage: "Success exported account as extended privkey to: \\"bob\\", please use this file carefully"\n')))))}u.isMDXComponent=!0}}]);