(self.webpackChunknew_docs=self.webpackChunknew_docs||[]).push([[4293],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,f=d["".concat(i,".").concat(p)]||d[p]||m[p]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2503:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7462),a=n(3366),o=n(7294),l=n(6010),c=n(5999),i=n(6668),s="anchorWithStickyNavbar_LWe7",u="anchorWithHideOnScrollNavbar_WYt5",m=["as","id"];function d(e){var t=e.as,n=e.id,d=(0,a.Z)(e,m),p=(0,i.L)().navbar.hideOnScroll;return"h1"!==t&&n?o.createElement(t,(0,r.Z)({},d,{className:(0,l.Z)("anchor",p?u:s),id:n}),d.children,o.createElement("a",{className:"hash-link",href:"#"+n,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,(0,r.Z)({},d,{id:void 0}))}},8811:function(e,t,n){"use strict";n.d(t,{Z:function(){return de}});var r=n(7462),a=n(7294),o=n(3366),l=n(5742),c=["mdxType","originalType"];var i=n(2389),s=n(6010),u=n(2949),m=n(6668);function d(){var e=(0,m.L)().prism,t=(0,u.I)().colorMode,n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var p=n(6528),f=n(7594),v=n.n(f),g=(0,p.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),h=(0,p.Z)(/\{([\d,-]+)\}/,{range:1}),y={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function b(e,t){var n=e.map((function(e){var n=y[e],r=n.start,a=n.end;return"(?:"+r+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+a+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function k(e,t){var n=e.replace(/\n$/,""),r=t.language,a=t.magicComments,o=t.metastring;if(o&&h.test(o)){var l=o.match(h).groups.range;if(0===a.length)throw new Error("A highlight range has been given in code block's metastring (``` "+o+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var c=a[0].className,i=v()(l).filter((function(e){return e>0})).map((function(e){return[e-1,[c]]}));return{lineClassNames:Object.fromEntries(i),code:n}}if(void 0===r)return{lineClassNames:{},code:n};for(var s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return b(["js","jsBlock"],t);case"jsx":case"tsx":return b(["js","jsBlock","jsx"],t);case"html":return b(["js","jsBlock","html"],t);case"python":case"py":case"bash":return b(["bash"],t);case"markdown":case"md":return b(["html","jsx","bash"],t);default:return b(Object.keys(y),t)}}(r,a),u=n.split("\n"),m=Object.fromEntries(a.map((function(e){return[e.className,{start:0,range:""}]}))),d=Object.fromEntries(a.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),p=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),f=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),g=0;g<u.length;){var k=u[g].match(s);if(k){var E=k.slice(1).find((function(e){return void 0!==e}));d[E]?m[d[E]].range+=g+",":p[E]?m[p[E]].start=g:f[E]&&(m[f[E]].range+=m[f[E]].start+"-"+(g-1)+","),u.splice(g,1)}else g+=1}n=u.join("\n");var N={};return Object.entries(m).forEach((function(e){var t=e[0],n=e[1].range;v()(n).forEach((function(e){null!=N[e]||(N[e]=[]),N[e].push(t)}))})),{lineClassNames:N,code:n}}var E=n(5281),N="codeBlockContainer_Ckt0",L=["as"];function C(e){var t=e.as,n=(0,o.Z)(e,L),l=function(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var r=e[0],a=e[1],o=t[r];o&&"string"==typeof a&&(n[o]=a)})),n}(d());return a.createElement(t,(0,r.Z)({},n,{style:l,className:(0,s.Z)(n.className,N,E.k.common.codeBlock)}))}var O={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function Z(e){var t=e.children,n=e.className;return a.createElement(C,{as:"pre",tabIndex:0,className:(0,s.Z)(O.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:O.codeBlockLines},t))}var B={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},j={Prism:n(7410).Z,theme:B};function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}var T=/\r\n|\r|\n/,_=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},S=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},H=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=w({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=w({},n,{backgroundColor:null}),a};function P(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var A=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),x(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?H(e.theme,e.language):void 0;return t.themeDict=n})),x(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=w({},P(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==a&&(o.style=void 0!==o.style?w({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),x(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var l=r?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),x(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,l=w({},P(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(l.style=void 0!==l.style?w({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),x(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=r[l]++)<a[l];){var s=void 0,u=t[l],m=n[l][o];if("string"==typeof m?(u=l>0?u:["plain"],s=m):(u=S(u,m.type),m.alias&&(u=S(u,m.alias)),s=m.content),"string"==typeof s){var d=s.split(T),p=d.length;c.push({types:u,content:d[0]});for(var f=1;f<p;f++)_(c),i.push(c=[]),c.push({types:u,content:d[f]})}else l++,t.push(u),n.push(s),r.push(0),a.push(s.length)}l--,t.pop(),n.pop(),r.pop(),a.pop()}return _(c),i}(void 0!==l?this.tokenize(t,r,l,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),I=A,D="codeLine_lJS_",M="codeLineNumber_Tfdd",R="codeLineContent_feaV";function z(e){var t=e.line,n=e.classNames,o=e.showLineNumbers,l=e.getLineProps,c=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var i=l({line:t,className:(0,s.Z)(n,o&&D)}),u=t.map((function(e,t){return a.createElement("span",(0,r.Z)({key:t},c({token:e,key:t})))}));return a.createElement("span",i,o?a.createElement(a.Fragment,null,a.createElement("span",{className:M}),a.createElement("span",{className:R},u)):a.createElement(a.Fragment,null,u,a.createElement("br",null)))}var V=n(5999),W={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function q(e){var t=e.code,n=e.className,r=(0,a.useState)(!1),o=r[0],l=r[1],c=(0,a.useRef)(void 0),i=(0,a.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var l=document.getSelection(),c=!1;l.rangeCount>0&&(c=l.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}a.remove(),c&&(l.removeAllRanges(),l.addRange(c)),o&&o.focus()}(t),l(!0),c.current=window.setTimeout((function(){l(!1)}),1e3)}),[t]);return(0,a.useEffect)((function(){return function(){return window.clearTimeout(c.current)}}),[]),a.createElement("button",{type:"button","aria-label":o?(0,V.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,V.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,V.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)("clean-btn",n,W.copyButton,o&&W.copyButtonCopied),onClick:i},a.createElement("span",{className:W.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:W.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:W.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var F="wordWrapButtonIcon_Bwma",$="wordWrapButtonEnabled_EoeP";function G(e){var t=e.className,n=e.onClick,r=e.isEnabled,o=(0,V.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,s.Z)("clean-btn",t,r&&$),"aria-label":o,title:o},a.createElement("svg",{className:F,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function U(e){var t,n,o,l,c,i,u,p,f,v,h,y=e.children,b=e.className,E=void 0===b?"":b,N=e.metastring,L=e.title,Z=e.showLineNumbers,B=e.language,x=(0,m.L)().prism,w=x.defaultLanguage,T=x.magicComments,_=null!=(t=null!=B?B:null==(n=E.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:n.replace(/language-/,""))?t:w,S=d(),H=(o=(0,a.useState)(!1),l=o[0],c=o[1],i=(0,a.useState)(!1),u=i[0],p=i[1],f=(0,a.useRef)(null),v=(0,a.useCallback)((function(){var e=f.current.querySelector("code");l?e.removeAttribute("style"):e.style.whiteSpace="pre-wrap",c((function(e){return!e}))}),[f,l]),h=(0,a.useCallback)((function(){var e=f.current,t=e.scrollWidth>e.clientWidth||f.current.querySelector("code").hasAttribute("style");p(t)}),[f]),(0,a.useEffect)((function(){h()}),[l,h]),(0,a.useEffect)((function(){return window.addEventListener("resize",h,{passive:!0}),function(){window.removeEventListener("resize",h)}}),[h]),{codeBlockRef:f,isEnabled:l,isCodeScrollable:u,toggle:v}),P=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(g))?void 0:n.groups.title)?t:""}(N)||L,A=k(y,{metastring:N,language:_,magicComments:T}),D=A.lineClassNames,M=A.code,R=null!=Z?Z:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(N);return a.createElement(C,{as:"div",className:(0,s.Z)(E,_&&!E.includes("language-"+_)&&"language-"+_)},P&&a.createElement("div",{className:O.codeBlockTitle},P),a.createElement("div",{className:O.codeBlockContent},a.createElement(I,(0,r.Z)({},j,{theme:S,code:M,language:null!=_?_:"text"}),(function(e){var t=e.className,n=e.tokens,r=e.getLineProps,o=e.getTokenProps;return a.createElement("pre",{tabIndex:0,ref:H.codeBlockRef,className:(0,s.Z)(t,O.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,s.Z)(O.codeBlockLines,R&&O.codeBlockLinesWithNumbering)},n.map((function(e,t){return a.createElement(z,{key:t,line:e,getLineProps:r,getTokenProps:o,classNames:D[t],showLineNumbers:R})}))))})),a.createElement("div",{className:O.buttonGroup},(H.isEnabled||H.isCodeScrollable)&&a.createElement(G,{className:O.codeButton,onClick:function(){return H.toggle()},isEnabled:H.isEnabled}),a.createElement(q,{className:O.codeButton,code:M}))))}var Y=["children"];function J(e){var t=e.children,n=(0,o.Z)(e,Y),l=(0,i.Z)(),c=function(e){return a.Children.toArray(e).some((function(e){return(0,a.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t),s="string"==typeof c?U:Z;return a.createElement(s,(0,r.Z)({key:String(l)},n),c)}var K=n(9960);var X=n(6043),Q="details_lb9f",ee="isBrowser_bmU9",te="collapsibleContent_i85q",ne=["summary","children"];function re(e){return!!e&&("SUMMARY"===e.tagName||re(e.parentElement))}function ae(e,t){return!!e&&(e===t||ae(e.parentElement,t))}function oe(e){var t=e.summary,n=e.children,l=(0,o.Z)(e,ne),c=(0,i.Z)(),u=(0,a.useRef)(null),m=(0,X.u)({initialState:!l.open}),d=m.collapsed,p=m.setCollapsed,f=(0,a.useState)(l.open),v=f[0],g=f[1];return a.createElement("details",(0,r.Z)({},l,{ref:u,open:v,"data-collapsed":d,className:(0,s.Z)(Q,c&&ee,l.className),onMouseDown:function(e){re(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;re(t)&&ae(t,u.current)&&(e.preventDefault(),d?(p(!1),g(!0)):p(!0))}}),null!=t?t:a.createElement("summary",null,"Details"),a.createElement(X.z,{lazy:!1,collapsed:d,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){p(e),g(!e)}},a.createElement("div",{className:te},n)))}var le="details_b_Ee";function ce(e){var t=Object.assign({},e);return a.createElement(oe,(0,r.Z)({},t,{className:(0,s.Z)("alert alert--info",le,t.className)}))}var ie=n(2503);function se(e){return a.createElement(ie.Z,e)}var ue="containsTaskList_mC6p";var me="img_ev3q";var de={head:function(e){var t=a.Children.map(e.children,(function(e){return a.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){var n=e.props,r=(n.mdxType,n.originalType,(0,o.Z)(n,c));return a.createElement(e.props.originalType,r)}return e}(e):e}));return a.createElement(l.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props.mdxType)}))?a.createElement("code",e):a.createElement(J,e)},a:function(e){return a.createElement(K.Z,e)},pre:function(e){var t;return a.createElement(J,(0,a.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return a.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),o=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(ce,(0,r.Z)({},e,{summary:n}),o)},ul:function(e){return a.createElement("ul",(0,r.Z)({},e,{className:(t=e.className,(0,s.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&ue))}));var t},img:function(e){return a.createElement("img",(0,r.Z)({loading:"lazy"},e,{className:(t=e.className,(0,s.Z)(t,me))}));var t},h1:function(e){return a.createElement(se,(0,r.Z)({as:"h1"},e))},h2:function(e){return a.createElement(se,(0,r.Z)({as:"h2"},e))},h3:function(e){return a.createElement(se,(0,r.Z)({as:"h3"},e))},h4:function(e){return a.createElement(se,(0,r.Z)({as:"h4"},e))},h5:function(e){return a.createElement(se,(0,r.Z)({as:"h5"},e))},h6:function(e){return a.createElement(se,(0,r.Z)({as:"h6"},e))}}},5042:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a=n(3905),o=n(8642);function l(e){var t=e.children;return r.createElement(a.Zo,{components:o.Z},t)}},9407:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7462),a=n(3366),o=n(7294),l=n(6010),c=n(3743),i="tableOfContents_bqdL",s=["className"];function u(e){var t=e.className,n=(0,a.Z)(e,s);return o.createElement("div",{className:(0,l.Z)(i,"thin-scrollbar",t)},o.createElement(c.Z,(0,r.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(7462),a=n(3366),o=n(7294),l=["parentIndex"];function c(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var r=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,r),n[e.level]=t}));var r=[];return t.forEach((function(e){var n=e.parentIndex,o=(0,a.Z)(e,l);n>=0?t[n].children.push(o):r.push(o)})),r}function i(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return t.flatMap((function(e){var t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[Object.assign({},e,{children:t})]:t}))}var s=n(6668);function u(e){var t=e.getBoundingClientRect();return t.top===t.bottom?u(e.parentNode):t}function m(e,t){var n,r,a=t.anchorTopOffset,o=e.find((function(e){return u(e).top>=a}));return o?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(u(o))?o:null!=(r=e[e.indexOf(o)-1])?r:null:null!=(n=e[e.length-1])?n:null}function d(){var e=(0,o.useRef)(0),t=(0,s.L)().navbar.hideOnScroll;return(0,o.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function p(e){var t=(0,o.useRef)(void 0),n=d();(0,o.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,a=e.linkActiveClassName,o=e.minHeadingLevel,l=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,r=[],a=t;a<=n;a+=1)r.push("h"+a+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:o,maxHeadingLevel:l}),i=m(c,{anchorTopOffset:n.current}),s=e.find((function(e){return i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===s)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function f(e){var t=e.toc,n=e.className,r=e.linkClassName,a=e.isChild;return t.length?o.createElement("ul",{className:a?void 0:n},t.map((function(e){return o.createElement("li",{key:e.id},o.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(f,{isChild:!0,toc:e.children,className:n,linkClassName:r}))}))):null}var v=o.memo(f),g=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,n=e.className,l=void 0===n?"table-of-contents table-of-contents__left-border":n,u=e.linkClassName,m=void 0===u?"table-of-contents__link":u,d=e.linkActiveClassName,f=void 0===d?void 0:d,h=e.minHeadingLevel,y=e.maxHeadingLevel,b=(0,a.Z)(e,g),k=(0,s.L)(),E=null!=h?h:k.tableOfContents.minHeadingLevel,N=null!=y?y:k.tableOfContents.maxHeadingLevel,L=function(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,o.useMemo)((function(){return i({toc:c(t),minHeadingLevel:n,maxHeadingLevel:r})}),[t,n,r])}({toc:t,minHeadingLevel:E,maxHeadingLevel:N});return p((0,o.useMemo)((function(){if(m&&f)return{linkClassName:m,linkActiveClassName:f,minHeadingLevel:E,maxHeadingLevel:N}}),[m,f,E,N])),o.createElement(v,(0,r.Z)({toc:L,className:l,linkClassName:m},b))}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);