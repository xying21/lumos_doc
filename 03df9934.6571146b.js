(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{114:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return u}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function f(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var b=i.a.createContext({}),p=function(e){var n=i.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return i.a.createElement(b.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},s=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,b=f(e,["components","mdxType","originalType","parentName"]),l=p(t),s=a,u=l["".concat(c,".").concat(s)]||l[s]||d[s]||r;return t?i.a.createElement(u,o(o({ref:n},b),{},{components:t})):i.a.createElement(u,o({ref:n},b))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=s;var o={};for(var f in n)hasOwnProperty.call(n,f)&&(o[f]=n[f]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var b=2;b<r;b++)c[b]=t[b];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},72:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return f})),t.d(n,"default",(function(){return p}));var a=t(3),i=t(7),r=(t(0),t(114)),c={id:"configmanager",title:"Config Manager"},o={unversionedId:"package/configmanager",id:"package/configmanager",isDocsHomePage:!1,title:"Config Manager",description:"The config manager feature deals with differences between different chains, such as mainnet, testnet, or numerous dev chains. Each chain is abstracted into an individual config file.",source:"@site/docs\\package\\config-manager.md",slug:"/package/configmanager",permalink:"/lumos_doc/docs/package/configmanager",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/package/config-manager.md",version:"current",sidebar:"someSidebar",previous:{title:"Common Scripts",permalink:"/lumos_doc/docs/package/commonscripts"},next:{title:"HD Wallet Manager",permalink:"/lumos_doc/docs/package/hd"}},f=[{value:"Examples",id:"examples",children:[{value:"Setup the Config Manager Using Pre-defined Configurations",id:"setup-the-config-manager-using-pre-defined-configurations",children:[]},{value:"Setup the Config Manager via a Local Config File",id:"setup-the-config-manager-via-a-local-config-file",children:[]}]}],b={toc:f};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The config manager feature deals with differences between different chains, such as mainnet, testnet, or numerous dev chains. Each chain is abstracted into an individual config file. "),Object(r.b)("p",null,"When a config file is loaded, the config manager handles the chain specific logic that saves corresponding coding effort for configuration management."),Object(r.b)("p",null,"The config manager supports the node app to boot with a specific chain configuration, so other parts in Lumos can consult the config manager directly for information."),Object(r.b)("p",null,"There are two options for setting up the config manager:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Setup the config manager using pre-defined configurations specified by the ",Object(r.b)("inlineCode",{parentName:"p"},"LUMOS_CONFIG_NAME")," variable."),Object(r.b)("p",{parentName:"li"},"Pre-defined configurations include:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"LINA"),": mainnet configurations")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"AGGRON4"),": testnet configurations "),Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Note"),": when the testnet network is reset, Lumos is upgraded with new testnet configurations.")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Setup the config manager via a local config file."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"LUMOS_CONFIG_FILE")," variable can be set pointing to a config file from that Lumos reads the configurations.  ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If the ",Object(r.b)("inlineCode",{parentName:"p"},"LUMOS_CONFIG_FILE")," variable is not set, Lumos reads configurations from the ",Object(r.b)("inlineCode",{parentName:"p"},"config.json")," file in the current directory."))))),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("h3",{id:"setup-the-config-manager-using-pre-defined-configurations"},"Setup the Config Manager Using Pre-defined Configurations"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"\u200b```js\n$ LUMOS_CONFIG_NAME=LINA node --experimental-repl-await\nWelcome to Node.js v12.16.2.\nType \".help\" for more information.\n> const { initializeConfig, getConfig } = require(\"@ckb-lumos/config-manager\");\n> initializeConfig();\n> getConfig();\n{\n  PREFIX: 'ckb',\n  SCRIPTS: {\n    SECP256K1_BLAKE160: {\n      CODE_HASH: '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8',\n      HASH_TYPE: 'type',\n      TX_HASH: '0x71a7ba8fc96349fea0ed3a5c47992e3b4084b031a42264a018e0072e8172e46c',\n      INDEX: '0x0',\n      DEP_TYPE: 'dep_group',\n      SHORT_ID: 0\n    },\n    SECP256K1_BLAKE160_MULTISIG: {\n      CODE_HASH: '0x5c5069eb0857efc65e1bca0c07df34c31663b3622fd3876c876320fc9634e2a8',\n      HASH_TYPE: 'type',\n      TX_HASH: '0x71a7ba8fc96349fea0ed3a5c47992e3b4084b031a42264a018e0072e8172e46c',\n      INDEX: '0x1',\n      DEP_TYPE: 'dep_group',\n      SHORT_ID: 1\n    },\n    DAO: {\n      CODE_HASH: '0x82d76d1b75fe2fd9a27dfbaa65a039221a380d76c926f378d3f81cf3e7e13f2e',\n      HASH_TYPE: 'type',\n      TX_HASH: '0xe2fb199810d49a4d8beec56718ba2593b665db9d52299a0f9e6e75416d73ff5c',\n      INDEX: '0x2',\n      DEP_TYPE: 'code'\n    }\n  }\n}\n\u200b```\n")),Object(r.b)("h3",{id:"setup-the-config-manager-via-a-local-config-file"},"Setup the Config Manager via a Local Config File"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'$ cat <<EOF > config.json\n{\n  "PREFIX": "ckt",\n  "SCRIPTS": {\n    "SECP256K1_BLAKE160": {\n      "CODE_HASH": "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8",\n      "HASH_TYPE": "type",\n      "TX_HASH": "0xace5ea83c478bb866edf122ff862085789158f5cbff155b7bb5f13058555b708",\n      "INDEX": "0x0",\n      "DEP_TYPE": "dep_group",\n      "SHORT_ID": 0\n    },\n    "SECP256K1_BLAKE160_MULTISIG": {\n      "CODE_HASH": "0x5c5069eb0857efc65e1bca0c07df34c31663b3622fd3876c876320fc9634e2a8",\n      "HASH_TYPE": "type",\n      "TX_HASH": "0xace5ea83c478bb866edf122ff862085789158f5cbff155b7bb5f13058555b708",\n      "INDEX": "0x1",\n      "DEP_TYPE": "dep_group",\n      "SHORT_ID": 1\n    },\n    "DAO": {\n      "CODE_HASH": "0x82d76d1b75fe2fd9a27dfbaa65a039221a380d76c926f378d3f81cf3e7e13f2e",\n      "HASH_TYPE": "type",\n      "TX_HASH": "0xa563884b3686078ec7e7677a5f86449b15cf2693f3c1241766c6996f206cc541",\n      "INDEX": "0x2",\n      "DEP_TYPE": "code"\n    }\n  }\n}\nEOF\n$ LUMOS_CONFIG_FILE="config.json" node --experimental-repl-await\nWelcome to Node.js v12.16.2.\nType ".help" for more information.\n> const { initializeConfig, getConfig } = require("@ckb-lumos/config-manager");\n> initializeConfig();\n')))}p.isMDXComponent=!0}}]);