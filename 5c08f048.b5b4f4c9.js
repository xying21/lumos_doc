(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{108:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function f(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var b=i.a.createContext({}),l=function(e){var n=i.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return i.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},s=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,b=f(e,["components","mdxType","originalType","parentName"]),u=l(t),s=a,d=u["".concat(o,".").concat(s)]||u[s]||p[s]||r;return t?i.a.createElement(d,c(c({ref:n},b),{},{components:t})):i.a.createElement(d,c({ref:n},b))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=s;var c={};for(var f in n)hasOwnProperty.call(n,f)&&(c[f]=n[f]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<r;b++)o[b]=t[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},85:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return f})),t.d(n,"default",(function(){return l}));var a=t(3),i=t(7),r=(t(0),t(108)),o={id:"config",title:"Config Manager Setup"},c={unversionedId:"tutorials/config",id:"tutorials/config",isDocsHomePage:!1,title:"Config Manager Setup",description:"The config manager deals with differences between chains, such as the mainnet, testnet, or numerous dev chains. Each chain is abstracted into an individual config file.",source:"@site/docs\\tutorials\\config.md",slug:"/tutorials/config",permalink:"/lumos_doc/docs/tutorials/config",editUrl:"https://github.com/xying21/lumos_doc/tree/master/docs/tutorials/config.md",version:"current",sidebar:"someSidebar",previous:{title:"Install and Configure Nervos CKB",permalink:"/lumos_doc/docs/tutorials/installckb"},next:{title:"Database Setup",permalink:"/lumos_doc/docs/tutorials/database"}},f=[{value:"Setup the Config Manager using Pre-defined Configurations",id:"setup-the-config-manager-using-pre-defined-configurations",children:[]},{value:"Setup the Configuration Manager through a Local Config File",id:"setup-the-configuration-manager-through-a-local-config-file",children:[]}],b={toc:f};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The config manager deals with differences between chains, such as the mainnet, testnet, or numerous dev chains. Each chain is abstracted into an individual config file. "),Object(r.b)("p",null,"When a config file is loaded, the config manager handles the chain specific logic that saves corresponding coding effort for configuration management."),Object(r.b)("p",null,"The config manager supports the node app to boot with a specific chain configuration, so other parts in Lumos can consult the configuration manager directly for information."),Object(r.b)("p",null,"There are two options for setting up the config manager:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Setup the config manager using pre-defined configurations specified by the ",Object(r.b)("inlineCode",{parentName:"li"},"LUMOS_CONFIG_NAME")," variable."),Object(r.b)("li",{parentName:"ul"},"Setup the configuration manager via a local config file.")),Object(r.b)("h2",{id:"setup-the-config-manager-using-pre-defined-configurations"},"Setup the Config Manager using Pre-defined Configurations"),Object(r.b)("p",null,"Pre-defined configurations include:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"LINA"),": mainnet configurations")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"AGGRON4"),": testnet configurations "),Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Note"),": When the ",Object(r.b)("inlineCode",{parentName:"p"},"AGGRON4")," testnet network is reset, Lumos is upgraded with new testnet configurations."))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ LUMOS_CONFIG_NAME=LINA node --experimental-repl-await\nWelcome to Node.js v12.16.2.\nType \".help\" for more information.\n> const { initializeConfig, getConfig } = require(\"@ckb-lumos/config-manager\");\n> initializeConfig();\n> getConfig();\n{\n  PREFIX: 'ckb',\n  SCRIPTS: {\n    SECP256K1_BLAKE160: {\n      CODE_HASH: '0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8',\n      HASH_TYPE: 'type',\n      TX_HASH: '0x71a7ba8fc96349fea0ed3a5c47992e3b4084b031a42264a018e0072e8172e46c',\n      INDEX: '0x0',\n      DEP_TYPE: 'dep_group',\n      SHORT_ID: 0\n    },\n    SECP256K1_BLAKE160_MULTISIG: {\n      CODE_HASH: '0x5c5069eb0857efc65e1bca0c07df34c31663b3622fd3876c876320fc9634e2a8',\n      HASH_TYPE: 'type',\n      TX_HASH: '0x71a7ba8fc96349fea0ed3a5c47992e3b4084b031a42264a018e0072e8172e46c',\n      INDEX: '0x1',\n      DEP_TYPE: 'dep_group',\n      SHORT_ID: 1\n    },\n    DAO: {\n      CODE_HASH: '0x82d76d1b75fe2fd9a27dfbaa65a039221a380d76c926f378d3f81cf3e7e13f2e',\n      HASH_TYPE: 'type',\n      TX_HASH: '0xe2fb199810d49a4d8beec56718ba2593b665db9d52299a0f9e6e75416d73ff5c',\n      INDEX: '0x2',\n      DEP_TYPE: 'code'\n    }\n  }\n}\n")),Object(r.b)("h2",{id:"setup-the-configuration-manager-through-a-local-config-file"},"Setup the Configuration Manager through a Local Config File"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"LUMOS_CONFIG_FILE")," variable can be set pointing to a config file from that Lumos reads the configurations.  ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If the ",Object(r.b)("inlineCode",{parentName:"p"},"LUMOS_CONFIG_FILE")," variable is not set, Lumos reads configurations from the ",Object(r.b)("inlineCode",{parentName:"p"},"config.json")," file in the current directory."))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'$ cat <<EOF > config.json\n{\n  "PREFIX": "ckt",\n  "SCRIPTS": {\n    "SECP256K1_BLAKE160": {\n      "CODE_HASH": "0x9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8",\n      "HASH_TYPE": "type",\n      "TX_HASH": "0xace5ea83c478bb866edf122ff862085789158f5cbff155b7bb5f13058555b708",\n      "INDEX": "0x0",\n      "DEP_TYPE": "dep_group",\n      "SHORT_ID": 0\n    },\n    "SECP256K1_BLAKE160_MULTISIG": {\n      "CODE_HASH": "0x5c5069eb0857efc65e1bca0c07df34c31663b3622fd3876c876320fc9634e2a8",\n      "HASH_TYPE": "type",\n      "TX_HASH": "0xace5ea83c478bb866edf122ff862085789158f5cbff155b7bb5f13058555b708",\n      "INDEX": "0x1",\n      "DEP_TYPE": "dep_group",\n      "SHORT_ID": 1\n    },\n    "DAO": {\n      "CODE_HASH": "0x82d76d1b75fe2fd9a27dfbaa65a039221a380d76c926f378d3f81cf3e7e13f2e",\n      "HASH_TYPE": "type",\n      "TX_HASH": "0xa563884b3686078ec7e7677a5f86449b15cf2693f3c1241766c6996f206cc541",\n      "INDEX": "0x2",\n      "DEP_TYPE": "code"\n    }\n  }\n}\nEOF\n$ LUMOS_CONFIG_FILE="config.json" node --experimental-repl-await\nWelcome to Node.js v12.16.2.\nType ".help" for more information.\n> const { initializeConfig, getConfig } = require("@ckb-lumos/config-manager");\n> initializeConfig();\n')))}l.isMDXComponent=!0}}]);