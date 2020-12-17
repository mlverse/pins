(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{138:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pins-starting-overview-98b2bfcfee6ab889c7c18cab687895f9.png"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),o=(n(0),n(80)),i=n(85),s=n(86),c={id:"getting-started",title:"Overview",slug:"/"},l={unversionedId:"overview/getting-started",id:"overview/getting-started",isDocsHomePage:!1,title:"Overview",description:"A typical Data Science project starts with importing data and finishes with communicating your results with others; however, some projects have a few additional steps that we will refer as: Discover, Cache and Share. While these steps might not deserve to be part of the official Data Science diagram, they can help us understand where the pins.js package can help.",source:"@site/docs/overview/getting-started.md",slug:"/",permalink:"/pinsjs/docs/",editUrl:"https://github.com/pinsjs/pinsjs/edit/master/website/docs/overview/getting-started.md",version:"current",sidebar:"docs",next:{title:"Caching",permalink:"/pinsjs/docs/caching"}},u=[],p={rightToc:u};function d(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://r4ds.had.co.nz/introduction.html"}),"typical Data Science project")," starts with importing data and finishes with communicating your results with others; however, some projects have a few additional steps that we will refer as: ",Object(o.b)("strong",{parentName:"p"},"Discover"),", ",Object(o.b)("strong",{parentName:"p"},"Cache")," and ",Object(o.b)("strong",{parentName:"p"},"Share"),". While these steps might not deserve to be part of the official Data Science diagram, they can help us understand where the ",Object(o.b)("inlineCode",{parentName:"p"},"pins.js")," package can help."),Object(o.b)("p",null,"Conceptually, the modified Data Science diagram looks as follows:"),Object(o.b)("p",null,Object(o.b)("img",{src:n(138).default})),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"pins.js")," package refers to arbitrary resources as pins, and refers to the action of caching a resource as pinning. A pin is something useful to have but not terrible to lose -- you should always have reproducible code to regenerate a pin."),Object(o.b)("p",null,"Let's now introduce each operation the ",Object(o.b)("inlineCode",{parentName:"p"},"pins.js")," package supports."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Cache"),': Once you identify which datasets to import, it is often the case that they are manually downloaded. It is common to give explicit instructions to download datasets before actually importing the dataset. However, manual steps make it hard to reproduce your code -- we can no longer just copy-paste and run code. One easy solution is to explicitly download the file from code; however, this would cause the file to be re-downloaded each time the code runs, so you can then try to check if the file already exists, and keep adding complexity to try to reliably download and cache files. Quoting Phil Karlton, "There are only two hard things in Computer Science: cache invalidation and naming things". So instead of worrying when to invalidate and cache online resources, you can use ',Object(o.b)("inlineCode",{parentName:"p"},"pin()")," to cache any resource with ease."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Share"),": There are cases where you might want to not only communicate with others your results, but also allow others to reuse your results. For instance, once you finish analyzing house remodel projects, you might also want to share your final dataset for others to reuse. The ",Object(o.b)("inlineCode",{parentName:"p"},"pins.js")," package allows you to share resources cloud services like Amazon S3, Microsoft Azure, Digital Ocean, and RStudio Connect."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Discover"),": In some Data Science projects, it might not be obvious which dataset you should use; therefore, a first step might be to search online for specific datasets. For instance, suppose that you are trying to figure out what kind of house remodel could increase your home property value the most, where do you get such data from? You can search online but is often hard to filter results to contain only datasets, it also requires you to have some knowledge of which data sources are trustworthy and so on. This is obviously a hard problem and we can't expect a single tool to magically fix this for us; instead, the ",Object(o.b)("inlineCode",{parentName:"p"},"pins.js")," package gives you a few tools to search well known data repositories through the ",Object(o.b)("inlineCode",{parentName:"p"},"pin_find()")," function. In addition, even though most projects have well-defined datasets to import from, you might also want to consider enhancing them with additional data sources; for example, while analyzing a well-known ice-cream sales dataset, you might want also want to find resources with historical weather to properly adjust the existing data."),Object(o.b)("p",null,"Before we present code examples on how to discover datasets, install the ",Object(o.b)("inlineCode",{parentName:"p"},"pins.js")," package as follows:"),Object(o.b)(i.a,{groupId:"multilang-plugin",defaultValue:"html",values:[{label:"HTML",value:"html"},{label:"Python",value:"py"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"html",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),' <html>\n   <head>\n     <script language="javascript" src="pins.js"><\/script>\n     <script language="javascript" src="pins.browser.js"><\/script>\n   </head>\n </html>\n'))),Object(o.b)(s.a,{value:"py",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"})," # pip3 install git+https://github.com/pinsjs/pinsjs.git@master#subdirectory=python --user\n\n")))))}d.isMDXComponent=!0},80:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,f=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return n?r.a.createElement(f,s(s({ref:t},l),{},{components:n})):r.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},83:function(e,t,n){"use strict";var a=n(0),r=n(84);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},84:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},85:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(83),i=n(81),s=n(45),c=n.n(s),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,s=e.defaultValue,p=e.values,d=e.groupId,h=e.className,f=Object(o.a)(),b=f.tabGroupChoices,m=f.setTabGroupChoices,g=Object(a.useState)(s),y=g[0],w=g[1],v=Object(a.useState)(!1),j=v[0],O=v[1];if(null!=d){var k=b[d];null!=k&&k!==y&&p.some((function(e){return e.value===k}))&&w(k)}var C=function(e){w(e),null!=d&&m(d,e)},x=[],N=function(e){e.metaKey||e.altKey||e.ctrlKey||O(!0)},T=function(){O(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",N),window.addEventListener("mousedown",T),function(){window.removeEventListener("keydown",N),window.removeEventListener("mousedown",T)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},h)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===t}),style:j?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),N(e)},onFocus:function(){return C(t)},onClick:function(){C(t),O(!1)},onPointerDown:function(){return O(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===y}))[0]))}},86:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);