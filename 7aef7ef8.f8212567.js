(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(80)),i=n(85),c=n(86),s={id:"sharing",title:"Sharing",slug:"/sharing"},u={unversionedId:"overview/sharing",id:"overview/sharing",isDocsHomePage:!1,title:"Sharing",description:'After performing a data analysis, you might want to share your dataset with others, which you can achieve using pin(data, board = "").',source:"@site/docs/overview/sharing.md",slug:"/sharing",permalink:"/pinsjs/docs/sharing",editUrl:"https://github.com/pinsjs/pinsjs/edit/master/website/docs/overview/sharing.md",version:"current",sidebar:"docs",previous:{title:"Discovering",permalink:"/pinsjs/docs/discovering"}},l=[],b={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"After performing a data analysis, you might want to share your dataset with others, which you can achieve using ",Object(o.b)("inlineCode",{parentName:"p"},'pin(data, board = "<board-name>")'),"."),Object(o.b)("p",null,'There are multiple boards available, one of them is the "local" board which ',Object(o.b)("inlineCode",{parentName:"p"},"pins.js"),' uses by default. A "local" board can help you share pins with other JavaScript or Python sessions using a well-known cache folder in your local computer. Notice that this board is available by default:'),Object(o.b)(i.a,{groupId:"multilang-plugin",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"})," boardList()\n"))),Object(o.b)(c.a,{value:"py",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"})," board_list()\n")))),Object(o.b)("p",null,'Unless you\'ve registered a board, you can expect the output to be an array containing the "local" board.'),Object(o.b)("p",null,"Other boards supported in ",Object(o.b)("inlineCode",{parentName:"p"},"pins.js")," include Amazon S3 and RStudio Connnect boards, you can register an Amazon S3 board as follows:"),Object(o.b)(i.a,{groupId:"multilang-plugin",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"})," pins.boardRegister('s3', {\n  bucket: 'bucket',\n  key: 'key',\n  secret: 'secret'\n});\n\n"))),Object(o.b)(c.a,{value:"py",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),' pins.board_register("s3", bucket = "bucket", key = "key", secret = "secrert")\n')))),Object(o.b)("p",null,"Similarily, and RStudio Connect board can be register as:"),Object(o.b)(i.a,{groupId:"multilang-plugin",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"})," pins.boardRegister('rsconnect', { 'key', 'server' }); \n"))),Object(o.b)(c.a,{value:"py",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),' pins.board_register(\'rsconnect\', key = "key", server = "https://rsconnectsrv/" });\n')))))}p.isMDXComponent=!0},80:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,f=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?a.a.createElement(f,c(c({ref:t},u),{},{components:n})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},83:function(e,t,n){"use strict";var r=n(0),a=n(84);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},84:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},85:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(83),i=n(81),c=n(45),s=n.n(c),u=37,l=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,b=e.values,p=e.groupId,d=e.className,f=Object(o.a)(),m=f.tabGroupChoices,y=f.setTabGroupChoices,v=Object(r.useState)(c),j=v[0],g=v[1],O=Object(r.useState)(!1),h=O[0],w=O[1];if(null!=p){var T=m[p];null!=T&&T!==j&&b.some((function(e){return e.value===T}))&&g(T)}var k=function(e){g(e),null!=p&&y(p,e)},x=[],N=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},E=function(){w(!1)};return Object(r.useEffect)((function(){return window.addEventListener("keydown",N),window.addEventListener("mousedown",E),function(){window.removeEventListener("keydown",N),window.removeEventListener("mousedown",E)}}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},d)},b.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":j===t}),style:h?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),N(e)},onFocus:function(){return k(t)},onClick:function(){k(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===j}))[0]))}},86:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);