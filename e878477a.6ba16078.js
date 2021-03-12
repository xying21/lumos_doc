(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var o=n(3),a=n(7),l=(n(0),n(112)),r=n(144),s=n(145),i={id:"setupsystem",title:"Set Up the Development Environment"},u={unversionedId:"preparation/setupsystem",id:"preparation/setupsystem",isDocsHomePage:!1,title:"Set Up the Development Environment",description:"This guide will help you get your system set up for building DApps with Lumos. If you already have everything installed, read the other guides and walk through the examples to learn the usage of Lumos.",source:"@site/docs\\preparation\\setupsystem.md",slug:"/preparation/setupsystem",permalink:"/lumos_doc/docs/preparation/setupsystem",editUrl:"https://github.com/xying21/lumos_doc/tree/master/docs/preparation/setupsystem.md",version:"current",sidebar:"someSidebar",previous:{title:"Workflow",permalink:"/lumos_doc/docs/introduction/workflow"},next:{title:"Install a CKB Node",permalink:"/lumos_doc/docs/preparation/installckb"}},c=[{value:"Install Node.js",id:"install-nodejs",children:[]},{value:"Install Yarn",id:"install-yarn",children:[]},{value:"Install Dependencies for node-gyp",id:"install-dependencies-for-node-gyp",children:[]}],d={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This guide will help you get your system set up for building DApps with Lumos. If you already have everything installed, read the other guides and walk through the examples to learn the usage of Lumos."),Object(l.b)("h2",{id:"install-nodejs"},"Install Node.js"),Object(l.b)("p",null,"Node.js is the runtime environment that must be installed on the system before using Lumos. The following sections explain the easiest way to install the Long Term Supported (LTS) version of Node.js on Ubuntu Linux 20.04, macOS, and Windows 10."),Object(l.b)(r.a,{defaultValue:"ubuntu",values:[{label:"Ubuntu 20.04",value:"ubuntu"},{label:"macOS and Windows 10",value:"macoswin"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"ubuntu",mdxType:"TabItem"},Object(l.b)("p",null,"Install Node.js with Apt by Using a NodeSource PPA:"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{}),"curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh\nsudo apt install nodejs\n"))),Object(l.b)(s.a,{value:"macoswin",mdxType:"TabItem"},"Download and install ",Object(l.b)("a",{href:"https://nodejs.org/en/"},"the LTS version")," that is Recommended For Most Users.")),Object(l.b)("h2",{id:"install-yarn"},"Install Yarn"),Object(l.b)("p",null,"It is recommended to install Yarn through the NPM package manager, which comes bundled with ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"https://nodejs.org/"}),"Node.js")," when it is installed on the system."),Object(l.b)("p",null,"To install Yarn through NPM:"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{}),"npm install --global yarn\n")),Object(l.b)("h2",{id:"install-dependencies-for-node-gyp"},"Install Dependencies for node-gyp"),Object(l.b)("p",null,"Lumos depends on ",Object(l.b)("strong",{parentName:"p"},"node-gyp")," that is a cross-platform command-line tool for compiling native addon modules for ",Object(l.b)("em",{parentName:"p"},"Node"),".js. "),Object(l.b)("p",null,"node-gyp has a few additional system requirements and dependencies that have different installation steps on different operating systems."),Object(l.b)(r.a,{defaultValue:"ubuntu",values:[{label:"Ubuntu 20.04",value:"ubuntu"},{label:"Windows 10",value:"windows"},{label:"macOS",value:"macos"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"ubuntu",mdxType:"TabItem"},"The development dependencies for Ubuntu 20.04 LTS are as follows:",Object(l.b)("ul",null,Object(l.b)("li",null,"Python v3.6, v3.7, v3.8, or v3.9 (Ubuntu 20.04 and other versions of Debian Linux ship with Python 3 pre-installed)"),Object(l.b)("li",null,"make"),Object(l.b)("li",null,"A proper C/C++ compiler toolchain, like ",Object(l.b)("a",{href:"https://gcc.gnu.org/"},"GCC"))),Object(l.b)("p",null,"To install ",Object(l.b)("code",null,"GCC")," and ",Object(l.b)("code",null,"make")," on Ubuntu 20.04, run the following command as root or user with sudo privileges:"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{}),"$ sudo apt update\n$ sudo apt install build-essential\n"))),Object(l.b)(s.a,{value:"windows",mdxType:"TabItem"},"The development dependencies for Windows are as follows:",Object(l.b)("ul",null,Object(l.b)("li",null,"Python 2.7"),Object(l.b)("li",null,"Visual C++ Build Environment")),Object(l.b)("b",null,"Installation Options"),Object(l.b)("ul",null,Object(l.b)("li",null,"Option 1: Install all the required tools and configurations using Microsoft's windows-build-tools by running ",Object(l.b)("code",null,"npm install -g windows-build-tools -vs2015")," from an elevated PowerShell (run as Administrator).",Object(l.b)("p",null,"Note: This command installs all the system dependencies without conflicting with any software already installed on the system. Depending on the build tools' version, the installation requires 3 to 8 gigabytes space to get all dependencies installed. It can take at least 30 minutes depending on the network connection.")),Object(l.b)("li",null,"Option 2: Install dependencies and configure the tools manually.",Object(l.b)("ul",null,Object(l.b)("li",null,"Install Visual C++ Build Environment: ",Object(l.b)("a",{href:"https://www.microsoft.com/en-us/download/details.aspx?id=48159"},"Visual Studio 2015 Build Tools"),' (using "Visual C++ build tools" workload) and run ',Object(l.b)("code",null,"npm config set msvs_version 2015")," in a cmd terminal."),Object(l.b)("li",null,"Install Python 2.7 (v3.x.x is not supported), and run ",Object(l.b)("code",null,"npm config set python /path/to/python2.7"),"."))))),Object(l.b)(s.a,{value:"macos",mdxType:"TabItem"},"The development dependencies for macOS are as follows:",Object(l.b)("ul",null,Object(l.b)("li",null,"Python v3.6, v3.7, v3.8, or v3.9"),Object(l.b)("li",null,Object(l.b)("a",{href:"https://developer.apple.com/xcode/download/"},"Xcode")," and Xcode command line tools")))),"For more information, see the instructions of ",Object(l.b)("a",{href:"https://github.com/nodejs/node-gyp"},"node-gyp"),".")}b.isMDXComponent=!0},112:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),c=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,r=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,m=d["".concat(r,".").concat(p)]||d[p]||b[p]||l;return n?a.a.createElement(m,s(s({ref:t},u),{},{components:n})):a.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<l;u++)r[u]=n[u];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},113:function(e,t,n){"use strict";function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}},120:function(e,t,n){"use strict";var o=n(0),a=n(121);t.a=function(){const e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},121:function(e,t,n){"use strict";var o=n(0);const a=Object(o.createContext)(void 0);t.a=a},144:function(e,t,n){"use strict";var o=n(0),a=n.n(o),l=n(120),r=n(113),s=n(55),i=n.n(s);const u=37,c=39;t.a=function(e){const{lazy:t,block:n,defaultValue:s,values:d,groupId:b,className:p}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(l.a)(),[h,O]=Object(o.useState)(s),y=o.Children.toArray(e.children);if(null!=b){const e=m[b];null!=e&&e!==h&&d.some((t=>t.value===e))&&O(e)}const j=e=>{O(e),null!=b&&f(b,e)},v=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},p)},d.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===e,className:Object(r.a)("tabs__item",i.a.tabItem,{"tabs__item--active":h===e}),key:e,ref:e=>v.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case c:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e)},onFocus:()=>j(e),onClick:()=>{j(e)}},t)))),t?Object(o.cloneElement)(y.filter((e=>e.props.value===h))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},y.map(((e,t)=>Object(o.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}},145:function(e,t,n){"use strict";var o=n(3),a=n(0),l=n.n(a);t.a=function({children:e,hidden:t,className:n}){return l.a.createElement("div",Object(o.a)({role:"tabpanel"},{hidden:t,className:n}),e)}}}]);