// Custom Scripts
/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

const ASIDE_OVERLAY_HTML = '<div class="aside_overlay close_aside"></div>';
const $document = $(document);

function init() {
	let $overlay = $('.aside_overlay');
	if (!$overlay.length) {
			$overlay = $(ASIDE_OVERLAY_HTML);
			$('body').append($overlay);
	}
}

function close() {
    $('body').removeClass('aside_open');
    $('.aside.open').removeClass('open')
        .trigger('aside:close');
}

function open($aside) {
    const $body = $('body');

    $body.addClass('aside_open');

    if ($aside.attr('data-aside-overlay') === 'false') {
        $body.addClass('no_overlay');
    }

    $aside.addClass('open')
        .trigger('aside:open');
}



function toggleAside() {
    let $button = $(this);
    let id = $button.attr('data-aside-id');

    if (!id) return;
    if (id[0] !== '#') id = '#'.concat(id);

    let $aside = $document.find(id);

    if (!$aside.length) return;

    if (document.body.classList.contains('aside_open')) {
        close();
    } else {
        close();
        open($aside);
    }
};

init();

$document.on('click', '[data-toggle="aside"]', toggleAside);
$document.on('click', '[data-toggle-aside="aside"]', toggleAside);
$document.on('click', '.close_aside', close);
/*! SmoothScroll v16.1.4 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).SmoothScroll=t()}(this,(function(){"use strict";var e={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},t=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},n=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,i="",r=n.charCodeAt(0);++a<o;){if(0===(t=n.charCodeAt(a)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t>=1&&t<=31||127==t||0===a&&t>=48&&t<=57||1===a&&t>=48&&t<=57&&45===r?i+="\\"+t.toString(16)+" ":i+=t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+i},o=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},a=function(e){return e?(t=e,parseInt(window.getComputedStyle(t).height,10)+e.offsetTop):0;var t},i=function(e,t,n){0===e&&document.body.focus(),n||(e.focus(),document.activeElement!==e&&(e.setAttribute("tabindex","-1"),e.focus(),e.style.outline="none"),window.scrollTo(0,t))},r=function(e,t,n,o){if(t.emitEvents&&"function"==typeof window.CustomEvent){var a=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:o}});document.dispatchEvent(a)}};return function(s,c){var u,l,d,f,m={};m.cancelScroll=function(e){cancelAnimationFrame(f),f=null,e||r("scrollCancel",u)},m.animateScroll=function(n,s,c){m.cancelScroll();var l=t(u||e,c||{}),h="[object Number]"===Object.prototype.toString.call(n),p=h||!n.tagName?null:n;if(h||p){var w=window.pageYOffset;l.header&&!d&&(d=document.querySelector(l.header));var g,y,v,S=a(d),E=h?n:function(e,t,n,a){var i=0;if(e.offsetParent)do{i+=e.offsetTop,e=e.offsetParent}while(e);return i=Math.max(i-t-n,0),a&&(i=Math.min(i,o()-window.innerHeight)),i}(p,S,parseInt("function"==typeof l.offset?l.offset(n,s):l.offset,10),l.clip),b=E-w,O=o(),I=0,M=function(e,t){var n=t.speedAsDuration?t.speed:Math.abs(e/1e3*t.speed);return t.durationMax&&n>t.durationMax?t.durationMax:t.durationMin&&n<t.durationMin?t.durationMin:parseInt(n,10)}(b,l),A=function(e){g||(g=e),I+=e-g,v=w+b*function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t}(l,y=(y=0===M?0:I/M)>1?1:y),window.scrollTo(0,Math.floor(v)),function(e,t){var o=window.pageYOffset;if(e==t||o==t||(w<t&&window.innerHeight+o)>=O)return m.cancelScroll(!0),i(n,t,h),r("scrollStop",l,n,s),g=null,f=null,!0}(v,E)||(f=window.requestAnimationFrame(A),g=e)};0===window.pageYOffset&&window.scrollTo(0,0),function(e,t,n){t||history.pushState&&n.updateURL&&history.pushState({smoothScroll:JSON.stringify(n),anchor:e.id},document.title,e===document.documentElement?"#top":"#"+e.id)}(n,h,l),"matchMedia"in window&&window.matchMedia("(prefers-reduced-motion)").matches?i(n,Math.floor(E),!1):(r("scrollStart",l,n,s),m.cancelScroll(!0),window.requestAnimationFrame(A))}};var h=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(l=e.target.closest(s))&&"a"===l.tagName.toLowerCase()&&!e.target.closest(u.ignore)&&l.hostname===window.location.hostname&&l.pathname===window.location.pathname&&/#/.test(l.href)){var t,o;try{t=n(decodeURIComponent(l.hash))}catch(e){t=n(l.hash)}if("#"===t){if(!u.topOnEmptyHash)return;o=document.documentElement}else o=document.querySelector(t);(o=o||"#top"!==t?o:document.documentElement)&&(e.preventDefault(),function(e){if(history.replaceState&&e.updateURL&&!history.state){var t=window.location.hash;t=t||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:t||window.pageYOffset},document.title,t||window.location.href)}}(u),m.animateScroll(o,l))}},p=function(){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(u)){var e=history.state.anchor;"string"==typeof e&&e&&!(e=document.querySelector(n(history.state.anchor)))||m.animateScroll(e,null,{updateURL:!1})}};m.destroy=function(){u&&(document.removeEventListener("click",h,!1),window.removeEventListener("popstate",p,!1),m.cancelScroll(),u=null,l=null,d=null,f=null)};return function(){if(!("querySelector"in document&&"addEventListener"in window&&"requestAnimationFrame"in window&&"closest"in window.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";m.destroy(),u=t(e,c||{}),d=u.header?document.querySelector(u.header):null,document.addEventListener("click",h,!1),u.updateURL&&u.popstate&&window.addEventListener("popstate",p,!1)}(),m}}));

/**
 * Swiper 7.3.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 24, 2021
 */

 !function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Swiper=t()}(this,(function(){"use strict";function e(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function t(s={},a={}){Object.keys(a).forEach((i=>{void 0===s[i]?s[i]=a[i]:e(a[i])&&e(s[i])&&Object.keys(a[i]).length>0&&t(s[i],a[i])}))}const s={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function a(){const e="undefined"!=typeof document?document:{};return t(e,s),e}const i={document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function r(){const e="undefined"!=typeof window?window:{};return t(e,i),e}class n extends Array{constructor(e){super(...e||[]),function(e){const t=e.__proto__;Object.defineProperty(e,"__proto__",{get:()=>t,set(e){t.__proto__=e}})}(this)}}function l(e=[]){const t=[];return e.forEach((e=>{Array.isArray(e)?t.push(...l(e)):t.push(e)})),t}function o(e,t){return Array.prototype.filter.call(e,t)}function d(e,t){const s=r(),i=a();let l=[];if(!t&&e instanceof n)return e;if(!e)return new n(l);if("string"==typeof e){const s=e.trim();if(s.indexOf("<")>=0&&s.indexOf(">")>=0){let e="div";0===s.indexOf("<li")&&(e="ul"),0===s.indexOf("<tr")&&(e="tbody"),0!==s.indexOf("<td")&&0!==s.indexOf("<th")||(e="tr"),0===s.indexOf("<tbody")&&(e="table"),0===s.indexOf("<option")&&(e="select");const t=i.createElement(e);t.innerHTML=s;for(let e=0;e<t.childNodes.length;e+=1)l.push(t.childNodes[e])}else l=function(e,t){if("string"!=typeof e)return[e];const s=[],a=t.querySelectorAll(e);for(let e=0;e<a.length;e+=1)s.push(a[e]);return s}(e.trim(),t||i)}else if(e.nodeType||e===s||e===i)l.push(e);else if(Array.isArray(e)){if(e instanceof n)return e;l=e}return new n(function(e){const t=[];for(let s=0;s<e.length;s+=1)-1===t.indexOf(e[s])&&t.push(e[s]);return t}(l))}d.fn=n.prototype;const c={addClass:function(...e){const t=l(e.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.add(...t)})),this},removeClass:function(...e){const t=l(e.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.remove(...t)})),this},hasClass:function(...e){const t=l(e.map((e=>e.split(" "))));return o(this,(e=>t.filter((t=>e.classList.contains(t))).length>0)).length>0},toggleClass:function(...e){const t=l(e.map((e=>e.split(" "))));this.forEach((e=>{t.forEach((t=>{e.classList.toggle(t)}))}))},attr:function(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(let s=0;s<this.length;s+=1)if(2===arguments.length)this[s].setAttribute(e,t);else for(const t in e)this[s][t]=e[t],this[s].setAttribute(t,e[t]);return this},removeAttr:function(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},transform:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this},transition:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?`${e}ms`:e;return this},on:function(...e){let[t,s,a,i]=e;function r(e){const t=e.target;if(!t)return;const i=e.target.dom7EventData||[];if(i.indexOf(e)<0&&i.unshift(e),d(t).is(s))a.apply(t,i);else{const e=d(t).parents();for(let t=0;t<e.length;t+=1)d(e[t]).is(s)&&a.apply(e[t],i)}}function n(e){const t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),a.apply(this,t)}"function"==typeof e[1]&&([t,a,i]=e,s=void 0),i||(i=!1);const l=t.split(" ");let o;for(let e=0;e<this.length;e+=1){const t=this[e];if(s)for(o=0;o<l.length;o+=1){const e=l[o];t.dom7LiveListeners||(t.dom7LiveListeners={}),t.dom7LiveListeners[e]||(t.dom7LiveListeners[e]=[]),t.dom7LiveListeners[e].push({listener:a,proxyListener:r}),t.addEventListener(e,r,i)}else for(o=0;o<l.length;o+=1){const e=l[o];t.dom7Listeners||(t.dom7Listeners={}),t.dom7Listeners[e]||(t.dom7Listeners[e]=[]),t.dom7Listeners[e].push({listener:a,proxyListener:n}),t.addEventListener(e,n,i)}}return this},off:function(...e){let[t,s,a,i]=e;"function"==typeof e[1]&&([t,a,i]=e,s=void 0),i||(i=!1);const r=t.split(" ");for(let e=0;e<r.length;e+=1){const t=r[e];for(let e=0;e<this.length;e+=1){const r=this[e];let n;if(!s&&r.dom7Listeners?n=r.dom7Listeners[t]:s&&r.dom7LiveListeners&&(n=r.dom7LiveListeners[t]),n&&n.length)for(let e=n.length-1;e>=0;e-=1){const s=n[e];a&&s.listener===a||a&&s.listener&&s.listener.dom7proxy&&s.listener.dom7proxy===a?(r.removeEventListener(t,s.proxyListener,i),n.splice(e,1)):a||(r.removeEventListener(t,s.proxyListener,i),n.splice(e,1))}}}return this},trigger:function(...e){const t=r(),s=e[0].split(" "),a=e[1];for(let i=0;i<s.length;i+=1){const r=s[i];for(let s=0;s<this.length;s+=1){const i=this[s];if(t.CustomEvent){const s=new t.CustomEvent(r,{detail:a,bubbles:!0,cancelable:!0});i.dom7EventData=e.filter(((e,t)=>t>0)),i.dispatchEvent(s),i.dom7EventData=[],delete i.dom7EventData}}}return this},transitionEnd:function(e){const t=this;return e&&t.on("transitionend",(function s(a){a.target===this&&(e.call(this,a),t.off("transitionend",s))})),this},outerWidth:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},styles:function(){const e=r();return this[0]?e.getComputedStyle(this[0],null):{}},offset:function(){if(this.length>0){const e=r(),t=a(),s=this[0],i=s.getBoundingClientRect(),n=t.body,l=s.clientTop||n.clientTop||0,o=s.clientLeft||n.clientLeft||0,d=s===e?e.scrollY:s.scrollTop,c=s===e?e.scrollX:s.scrollLeft;return{top:i.top+d-l,left:i.left+c-o}}return null},css:function(e,t){const s=r();let a;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(const t in e)this[a].style[t]=e[t];return this}if(this[0])return s.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)this[a].style[e]=t;return this}return this},each:function(e){return e?(this.forEach(((t,s)=>{e.apply(t,[t,s])})),this):this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){const t=r(),s=a(),i=this[0];let l,o;if(!i||void 0===e)return!1;if("string"==typeof e){if(i.matches)return i.matches(e);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e);if(i.msMatchesSelector)return i.msMatchesSelector(e);for(l=d(e),o=0;o<l.length;o+=1)if(l[o]===i)return!0;return!1}if(e===s)return i===s;if(e===t)return i===t;if(e.nodeType||e instanceof n){for(l=e.nodeType?[e]:e,o=0;o<l.length;o+=1)if(l[o]===i)return!0;return!1}return!1},index:function(){let e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;const t=this.length;if(e>t-1)return d([]);if(e<0){const s=t+e;return d(s<0?[]:[this[s]])}return d([this[e]])},append:function(...e){let t;const s=a();for(let a=0;a<e.length;a+=1){t=e[a];for(let e=0;e<this.length;e+=1)if("string"==typeof t){const a=s.createElement("div");for(a.innerHTML=t;a.firstChild;)this[e].appendChild(a.firstChild)}else if(t instanceof n)for(let s=0;s<t.length;s+=1)this[e].appendChild(t[s]);else this[e].appendChild(t)}return this},prepend:function(e){const t=a();let s,i;for(s=0;s<this.length;s+=1)if("string"==typeof e){const a=t.createElement("div");for(a.innerHTML=e,i=a.childNodes.length-1;i>=0;i-=1)this[s].insertBefore(a.childNodes[i],this[s].childNodes[0])}else if(e instanceof n)for(i=0;i<e.length;i+=1)this[s].insertBefore(e[i],this[s].childNodes[0]);else this[s].insertBefore(e,this[s].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&d(this[0].nextElementSibling).is(e)?d([this[0].nextElementSibling]):d([]):this[0].nextElementSibling?d([this[0].nextElementSibling]):d([]):d([])},nextAll:function(e){const t=[];let s=this[0];if(!s)return d([]);for(;s.nextElementSibling;){const a=s.nextElementSibling;e?d(a).is(e)&&t.push(a):t.push(a),s=a}return d(t)},prev:function(e){if(this.length>0){const t=this[0];return e?t.previousElementSibling&&d(t.previousElementSibling).is(e)?d([t.previousElementSibling]):d([]):t.previousElementSibling?d([t.previousElementSibling]):d([])}return d([])},prevAll:function(e){const t=[];let s=this[0];if(!s)return d([]);for(;s.previousElementSibling;){const a=s.previousElementSibling;e?d(a).is(e)&&t.push(a):t.push(a),s=a}return d(t)},parent:function(e){const t=[];for(let s=0;s<this.length;s+=1)null!==this[s].parentNode&&(e?d(this[s].parentNode).is(e)&&t.push(this[s].parentNode):t.push(this[s].parentNode));return d(t)},parents:function(e){const t=[];for(let s=0;s<this.length;s+=1){let a=this[s].parentNode;for(;a;)e?d(a).is(e)&&t.push(a):t.push(a),a=a.parentNode}return d(t)},closest:function(e){let t=this;return void 0===e?d([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){const t=[];for(let s=0;s<this.length;s+=1){const a=this[s].querySelectorAll(e);for(let e=0;e<a.length;e+=1)t.push(a[e])}return d(t)},children:function(e){const t=[];for(let s=0;s<this.length;s+=1){const a=this[s].children;for(let s=0;s<a.length;s+=1)e&&!d(a[s]).is(e)||t.push(a[s])}return d(t)},filter:function(e){return d(o(this,e))},remove:function(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}};function p(e,t=0){return setTimeout(e,t)}function u(){return Date.now()}function h(e,t="x"){const s=r();let a,i,n;const l=function(e){const t=r();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}(e);return s.WebKitCSSMatrix?(i=l.transform||l.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map((e=>e.replace(",","."))).join(", ")),n=new s.WebKitCSSMatrix("none"===i?"":i)):(n=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=n.toString().split(",")),"x"===t&&(i=s.WebKitCSSMatrix?n.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=s.WebKitCSSMatrix?n.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0}function m(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function f(...e){const t=Object(e[0]),s=["__proto__","constructor","prototype"];for(let i=1;i<e.length;i+=1){const r=e[i];if(null!=r&&(a=r,!("undefined"!=typeof window&&void 0!==window.HTMLElement?a instanceof HTMLElement:a&&(1===a.nodeType||11===a.nodeType)))){const e=Object.keys(Object(r)).filter((e=>s.indexOf(e)<0));for(let s=0,a=e.length;s<a;s+=1){const a=e[s],i=Object.getOwnPropertyDescriptor(r,a);void 0!==i&&i.enumerable&&(m(t[a])&&m(r[a])?r[a].__swiper__?t[a]=r[a]:f(t[a],r[a]):!m(t[a])&&m(r[a])?(t[a]={},r[a].__swiper__?t[a]=r[a]:f(t[a],r[a])):t[a]=r[a])}}}var a;return t}function g(e,t,s){e.style.setProperty(t,s)}function v({swiper:e,targetPosition:t,side:s}){const a=r(),i=-e.translate;let n,l=null;const o=e.params.speed;e.wrapperEl.style.scrollSnapType="none",a.cancelAnimationFrame(e.cssModeFrameID);const d=t>i?"next":"prev",c=(e,t)=>"next"===d&&e>=t||"prev"===d&&e<=t,p=()=>{n=(new Date).getTime(),null===l&&(l=n);const r=Math.max(Math.min((n-l)/o,1),0),d=.5-Math.cos(r*Math.PI)/2;let u=i+d*(t-i);if(c(u,t)&&(u=t),e.wrapperEl.scrollTo({[s]:u}),c(u,t))return e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout((()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[s]:u})})),void a.cancelAnimationFrame(e.cssModeFrameID);e.cssModeFrameID=a.requestAnimationFrame(p)};p()}let w,b,x;function y(){return w||(w=function(){const e=r(),t=a();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function(){let t=!1;try{const s=Object.defineProperty({},"passive",{get(){t=!0}});e.addEventListener("testPassiveListener",null,s)}catch(e){}return t}(),gestures:"ongesturestart"in e}}()),w}function E(e={}){return b||(b=function({userAgent:e}={}){const t=y(),s=r(),a=s.navigator.platform,i=e||s.navigator.userAgent,n={ios:!1,android:!1},l=s.screen.width,o=s.screen.height,d=i.match(/(Android);?[\s\/]+([\d.]+)?/);let c=i.match(/(iPad).*OS\s([\d_]+)/);const p=i.match(/(iPod)(.*OS\s([\d_]+))?/),u=!c&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h="Win32"===a;let m="MacIntel"===a;return!c&&m&&t.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${l}x${o}`)>=0&&(c=i.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),m=!1),d&&!h&&(n.os="android",n.android=!0),(c||u||p)&&(n.os="ios",n.ios=!0),n}(e)),b}function T(){return x||(x=function(){const e=r();return{isSafari:function(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),x}Object.keys(c).forEach((e=>{Object.defineProperty(d.fn,e,{value:c[e],writable:!0})}));var C={on(e,t,s){const a=this;if("function"!=typeof t)return a;const i=s?"unshift":"push";return e.split(" ").forEach((e=>{a.eventsListeners[e]||(a.eventsListeners[e]=[]),a.eventsListeners[e][i](t)})),a},once(e,t,s){const a=this;if("function"!=typeof t)return a;function i(...s){a.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(a,s)}return i.__emitterProxy=t,a.on(e,i,s)},onAny(e,t){const s=this;if("function"!=typeof e)return s;const a=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[a](e),s},offAny(e){const t=this;if(!t.eventsAnyListeners)return t;const s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this;return s.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?s.eventsListeners[e]=[]:s.eventsListeners[e]&&s.eventsListeners[e].forEach(((a,i)=>{(a===t||a.__emitterProxy&&a.__emitterProxy===t)&&s.eventsListeners[e].splice(i,1)}))})),s):s},emit(...e){const t=this;if(!t.eventsListeners)return t;let s,a,i;"string"==typeof e[0]||Array.isArray(e[0])?(s=e[0],a=e.slice(1,e.length),i=t):(s=e[0].events,a=e[0].data,i=e[0].context||t),a.unshift(i);return(Array.isArray(s)?s:s.split(" ")).forEach((e=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach((t=>{t.apply(i,[e,...a])})),t.eventsListeners&&t.eventsListeners[e]&&t.eventsListeners[e].forEach((e=>{e.apply(i,a)}))})),t}};function $({swiper:e,runCallbacks:t,direction:s,step:a}){const{activeIndex:i,previousIndex:r}=e;let n=s;if(n||(n=i>r?"next":i<r?"prev":"reset"),e.emit(`transition${a}`),t&&i!==r){if("reset"===n)return void e.emit(`slideResetTransition${a}`);e.emit(`slideChangeTransition${a}`),"next"===n?e.emit(`slideNextTransition${a}`):e.emit(`slidePrevTransition${a}`)}}function S(e){const t=this,s=a(),i=r(),n=t.touchEventsData,{params:l,touches:o,enabled:c}=t;if(!c)return;if(t.animating&&l.preventInteractionOnTransition)return;!t.animating&&l.cssMode&&l.loop&&t.loopFix();let p=e;p.originalEvent&&(p=p.originalEvent);let h=d(p.target);if("wrapper"===l.touchEventsTarget&&!h.closest(t.wrapperEl).length)return;if(n.isTouchEvent="touchstart"===p.type,!n.isTouchEvent&&"which"in p&&3===p.which)return;if(!n.isTouchEvent&&"button"in p&&p.button>0)return;if(n.isTouched&&n.isMoved)return;!!l.noSwipingClass&&""!==l.noSwipingClass&&p.target&&p.target.shadowRoot&&e.path&&e.path[0]&&(h=d(e.path[0]));const m=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,f=!(!p.target||!p.target.shadowRoot);if(l.noSwiping&&(f?function(e,t=this){return function t(s){return s&&s!==a()&&s!==r()?(s.assignedSlot&&(s=s.assignedSlot),s.closest(e)||t(s.getRootNode().host)):null}(t)}(m,p.target):h.closest(m)[0]))return void(t.allowClick=!0);if(l.swipeHandler&&!h.closest(l.swipeHandler)[0])return;o.currentX="touchstart"===p.type?p.targetTouches[0].pageX:p.pageX,o.currentY="touchstart"===p.type?p.targetTouches[0].pageY:p.pageY;const g=o.currentX,v=o.currentY,w=l.edgeSwipeDetection||l.iOSEdgeSwipeDetection,b=l.edgeSwipeThreshold||l.iOSEdgeSwipeThreshold;if(w&&(g<=b||g>=i.innerWidth-b)){if("prevent"!==w)return;e.preventDefault()}if(Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=g,o.startY=v,n.touchStartTime=u(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,l.threshold>0&&(n.allowThresholdMove=!1),"touchstart"!==p.type){let e=!0;h.is(n.focusableElements)&&(e=!1),s.activeElement&&d(s.activeElement).is(n.focusableElements)&&s.activeElement!==h[0]&&s.activeElement.blur();const a=e&&t.allowTouchMove&&l.touchStartPreventDefault;!l.touchStartForcePreventDefault&&!a||h[0].isContentEditable||p.preventDefault()}t.emit("touchStart",p)}function M(e){const t=a(),s=this,i=s.touchEventsData,{params:r,touches:n,rtlTranslate:l,enabled:o}=s;if(!o)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),!i.isTouched)return void(i.startMoving&&i.isScrolling&&s.emit("touchMoveOpposite",c));if(i.isTouchEvent&&"touchmove"!==c.type)return;const p="touchmove"===c.type&&c.targetTouches&&(c.targetTouches[0]||c.changedTouches[0]),h="touchmove"===c.type?p.pageX:c.pageX,m="touchmove"===c.type?p.pageY:c.pageY;if(c.preventedByNestedSwiper)return n.startX=h,void(n.startY=m);if(!s.allowTouchMove)return s.allowClick=!1,void(i.isTouched&&(Object.assign(n,{startX:h,startY:m,currentX:h,currentY:m}),i.touchStartTime=u()));if(i.isTouchEvent&&r.touchReleaseOnEdges&&!r.loop)if(s.isVertical()){if(m<n.startY&&s.translate<=s.maxTranslate()||m>n.startY&&s.translate>=s.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(h<n.startX&&s.translate<=s.maxTranslate()||h>n.startX&&s.translate>=s.minTranslate())return;if(i.isTouchEvent&&t.activeElement&&c.target===t.activeElement&&d(c.target).is(i.focusableElements))return i.isMoved=!0,void(s.allowClick=!1);if(i.allowTouchCallbacks&&s.emit("touchMove",c),c.targetTouches&&c.targetTouches.length>1)return;n.currentX=h,n.currentY=m;const f=n.currentX-n.startX,g=n.currentY-n.startY;if(s.params.threshold&&Math.sqrt(f**2+g**2)<s.params.threshold)return;if(void 0===i.isScrolling){let e;s.isHorizontal()&&n.currentY===n.startY||s.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:f*f+g*g>=25&&(e=180*Math.atan2(Math.abs(g),Math.abs(f))/Math.PI,i.isScrolling=s.isHorizontal()?e>r.touchAngle:90-e>r.touchAngle)}if(i.isScrolling&&s.emit("touchMoveOpposite",c),void 0===i.startMoving&&(n.currentX===n.startX&&n.currentY===n.startY||(i.startMoving=!0)),i.isScrolling)return void(i.isTouched=!1);if(!i.startMoving)return;s.allowClick=!1,!r.cssMode&&c.cancelable&&c.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&c.stopPropagation(),i.isMoved||(r.loop&&!r.cssMode&&s.loopFix(),i.startTranslate=s.getTranslate(),s.setTransition(0),s.animating&&s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!r.grabCursor||!0!==s.allowSlideNext&&!0!==s.allowSlidePrev||s.setGrabCursor(!0),s.emit("sliderFirstMove",c)),s.emit("sliderMove",c),i.isMoved=!0;let v=s.isHorizontal()?f:g;n.diff=v,v*=r.touchRatio,l&&(v=-v),s.swipeDirection=v>0?"prev":"next",i.currentTranslate=v+i.startTranslate;let w=!0,b=r.resistanceRatio;if(r.touchReleaseOnEdges&&(b=0),v>0&&i.currentTranslate>s.minTranslate()?(w=!1,r.resistance&&(i.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+i.startTranslate+v)**b)):v<0&&i.currentTranslate<s.maxTranslate()&&(w=!1,r.resistance&&(i.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-i.startTranslate-v)**b)),w&&(c.preventedByNestedSwiper=!0),!s.allowSlideNext&&"next"===s.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!s.allowSlidePrev&&"prev"===s.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),s.allowSlidePrev||s.allowSlideNext||(i.currentTranslate=i.startTranslate),r.threshold>0){if(!(Math.abs(v)>r.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,void(n.diff=s.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY)}r.followFinger&&!r.cssMode&&((r.freeMode&&r.freeMode.enabled&&s.freeMode||r.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),s.params.freeMode&&r.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(i.currentTranslate),s.setTranslate(i.currentTranslate))}function P(e){const t=this,s=t.touchEventsData,{params:a,touches:i,rtlTranslate:r,slidesGrid:n,enabled:l}=t;if(!l)return;let o=e;if(o.originalEvent&&(o=o.originalEvent),s.allowTouchCallbacks&&t.emit("touchEnd",o),s.allowTouchCallbacks=!1,!s.isTouched)return s.isMoved&&a.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,void(s.startMoving=!1);a.grabCursor&&s.isMoved&&s.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const d=u(),c=d-s.touchStartTime;if(t.allowClick){const e=o.path||o.composedPath&&o.composedPath();t.updateClickedSlide(e&&e[0]||o.target),t.emit("tap click",o),c<300&&d-s.lastClickTime<300&&t.emit("doubleTap doubleClick",o)}if(s.lastClickTime=u(),p((()=>{t.destroyed||(t.allowClick=!0)})),!s.isTouched||!s.isMoved||!t.swipeDirection||0===i.diff||s.currentTranslate===s.startTranslate)return s.isTouched=!1,s.isMoved=!1,void(s.startMoving=!1);let h;if(s.isTouched=!1,s.isMoved=!1,s.startMoving=!1,h=a.followFinger?r?t.translate:-t.translate:-s.currentTranslate,a.cssMode)return;if(t.params.freeMode&&a.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:h});let m=0,f=t.slidesSizesGrid[0];for(let e=0;e<n.length;e+=e<a.slidesPerGroupSkip?1:a.slidesPerGroup){const t=e<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;void 0!==n[e+t]?h>=n[e]&&h<n[e+t]&&(m=e,f=n[e+t]-n[e]):h>=n[e]&&(m=e,f=n[n.length-1]-n[n.length-2])}const g=(h-n[m])/f,v=m<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(c>a.longSwipesMs){if(!a.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(g>=a.longSwipesRatio?t.slideTo(m+v):t.slideTo(m)),"prev"===t.swipeDirection&&(g>1-a.longSwipesRatio?t.slideTo(m+v):t.slideTo(m))}else{if(!a.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(o.target===t.navigation.nextEl||o.target===t.navigation.prevEl)?o.target===t.navigation.nextEl?t.slideTo(m+v):t.slideTo(m):("next"===t.swipeDirection&&t.slideTo(m+v),"prev"===t.swipeDirection&&t.slideTo(m))}}function k(){const e=this,{params:t,el:s}=e;if(s&&0===s.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:i,snapGrid:r}=e;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=i,e.allowSlideNext=a,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function z(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function O(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:a}=e;if(!a)return;let i;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,-0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const r=e.maxTranslate()-e.minTranslate();i=0===r?0:(e.translate-e.minTranslate())/r,i!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}let I=!1;function L(){}const A=(e,t)=>{const s=a(),{params:i,touchEvents:r,el:n,wrapperEl:l,device:o,support:d}=e,c=!!i.nested,p="on"===t?"addEventListener":"removeEventListener",u=t;if(d.touch){const t=!("touchstart"!==r.start||!d.passiveListener||!i.passiveListeners)&&{passive:!0,capture:!1};n[p](r.start,e.onTouchStart,t),n[p](r.move,e.onTouchMove,d.passiveListener?{passive:!1,capture:c}:c),n[p](r.end,e.onTouchEnd,t),r.cancel&&n[p](r.cancel,e.onTouchEnd,t)}else n[p](r.start,e.onTouchStart,!1),s[p](r.move,e.onTouchMove,c),s[p](r.end,e.onTouchEnd,!1);(i.preventClicks||i.preventClicksPropagation)&&n[p]("click",e.onClick,!0),i.cssMode&&l[p]("scroll",e.onScroll),i.updateOnWindowResize?e[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",k,!0):e[u]("observerUpdate",k,!0)};const D=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var G={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function N(e,t){return function(s={}){const a=Object.keys(s)[0],i=s[a];"object"==typeof i&&null!==i?(["navigation","pagination","scrollbar"].indexOf(a)>=0&&!0===e[a]&&(e[a]={auto:!0}),a in e&&"enabled"in i?(!0===e[a]&&(e[a]={enabled:!0}),"object"!=typeof e[a]||"enabled"in e[a]||(e[a].enabled=!0),e[a]||(e[a]={enabled:!1}),f(t,s)):f(t,s)):f(t,s)}}const B={eventsEmitter:C,update:{updateSize:function(){const e=this;let t,s;const a=e.$el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:a[0].clientWidth,s=void 0!==e.params.height&&null!==e.params.height?e.params.height:a[0].clientHeight,0===t&&e.isHorizontal()||0===s&&e.isVertical()||(t=t-parseInt(a.css("padding-left")||0,10)-parseInt(a.css("padding-right")||0,10),s=s-parseInt(a.css("padding-top")||0,10)-parseInt(a.css("padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))},updateSlides:function(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function s(e,s){return parseFloat(e.getPropertyValue(t(s))||0)}const a=e.params,{$wrapperEl:i,size:r,rtlTranslate:n,wrongRTL:l}=e,o=e.virtual&&a.virtual.enabled,d=o?e.virtual.slides.length:e.slides.length,c=i.children(`.${e.params.slideClass}`),p=o?e.virtual.slides.length:c.length;let u=[];const h=[],m=[];let f=a.slidesOffsetBefore;"function"==typeof f&&(f=a.slidesOffsetBefore.call(e));let v=a.slidesOffsetAfter;"function"==typeof v&&(v=a.slidesOffsetAfter.call(e));const w=e.snapGrid.length,b=e.slidesGrid.length;let x=a.spaceBetween,y=-f,E=0,T=0;if(void 0===r)return;"string"==typeof x&&x.indexOf("%")>=0&&(x=parseFloat(x.replace("%",""))/100*r),e.virtualSize=-x,n?c.css({marginLeft:"",marginBottom:"",marginTop:""}):c.css({marginRight:"",marginBottom:"",marginTop:""}),a.centeredSlides&&a.cssMode&&(g(e.wrapperEl,"--swiper-centered-offset-before",""),g(e.wrapperEl,"--swiper-centered-offset-after",""));const C=a.grid&&a.grid.rows>1&&e.grid;let $;C&&e.grid.initSlides(p);const S="auto"===a.slidesPerView&&a.breakpoints&&Object.keys(a.breakpoints).filter((e=>void 0!==a.breakpoints[e].slidesPerView)).length>0;for(let i=0;i<p;i+=1){$=0;const n=c.eq(i);if(C&&e.grid.updateSlide(i,n,p,t),"none"!==n.css("display")){if("auto"===a.slidesPerView){S&&(c[i].style[t("width")]="");const r=getComputedStyle(n[0]),l=n[0].style.transform,o=n[0].style.webkitTransform;if(l&&(n[0].style.transform="none"),o&&(n[0].style.webkitTransform="none"),a.roundLengths)$=e.isHorizontal()?n.outerWidth(!0):n.outerHeight(!0);else{const e=s(r,"width"),t=s(r,"padding-left"),a=s(r,"padding-right"),i=s(r,"margin-left"),l=s(r,"margin-right"),o=r.getPropertyValue("box-sizing");if(o&&"border-box"===o)$=e+i+l;else{const{clientWidth:s,offsetWidth:r}=n[0];$=e+t+a+i+l+(r-s)}}l&&(n[0].style.transform=l),o&&(n[0].style.webkitTransform=o),a.roundLengths&&($=Math.floor($))}else $=(r-(a.slidesPerView-1)*x)/a.slidesPerView,a.roundLengths&&($=Math.floor($)),c[i]&&(c[i].style[t("width")]=`${$}px`);c[i]&&(c[i].swiperSlideSize=$),m.push($),a.centeredSlides?(y=y+$/2+E/2+x,0===E&&0!==i&&(y=y-r/2-x),0===i&&(y=y-r/2-x),Math.abs(y)<.001&&(y=0),a.roundLengths&&(y=Math.floor(y)),T%a.slidesPerGroup==0&&u.push(y),h.push(y)):(a.roundLengths&&(y=Math.floor(y)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup==0&&u.push(y),h.push(y),y=y+$+x),e.virtualSize+=$+x,E=$,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+v,n&&l&&("slide"===a.effect||"coverflow"===a.effect)&&i.css({width:`${e.virtualSize+a.spaceBetween}px`}),a.setWrapperSize&&i.css({[t("width")]:`${e.virtualSize+a.spaceBetween}px`}),C&&e.grid.updateWrapperSize($,u,t),!a.centeredSlides){const t=[];for(let s=0;s<u.length;s+=1){let i=u[s];a.roundLengths&&(i=Math.floor(i)),u[s]<=e.virtualSize-r&&t.push(i)}u=t,Math.floor(e.virtualSize-r)-Math.floor(u[u.length-1])>1&&u.push(e.virtualSize-r)}if(0===u.length&&(u=[0]),0!==a.spaceBetween){const s=e.isHorizontal()&&n?"marginLeft":t("marginRight");c.filter(((e,t)=>!a.cssMode||t!==c.length-1)).css({[s]:`${x}px`})}if(a.centeredSlides&&a.centeredSlidesBounds){let e=0;m.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween;const t=e-r;u=u.map((e=>e<0?-f:e>t?t+v:e))}if(a.centerInsufficientSlides){let e=0;if(m.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween,e<r){const t=(r-e)/2;u.forEach(((e,s)=>{u[s]=e-t})),h.forEach(((e,s)=>{h[s]=e+t}))}}if(Object.assign(e,{slides:c,snapGrid:u,slidesGrid:h,slidesSizesGrid:m}),a.centeredSlides&&a.cssMode&&!a.centeredSlidesBounds){g(e.wrapperEl,"--swiper-centered-offset-before",-u[0]+"px"),g(e.wrapperEl,"--swiper-centered-offset-after",e.size/2-m[m.length-1]/2+"px");const t=-e.snapGrid[0],s=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+s))}p!==d&&e.emit("slidesLengthChange"),u.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),h.length!==b&&e.emit("slidesGridLengthChange"),a.watchSlidesProgress&&e.updateSlidesOffset()},updateAutoHeight:function(e){const t=this,s=[],a=t.virtual&&t.params.virtual.enabled;let i,r=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const n=e=>a?t.slides.filter((t=>parseInt(t.getAttribute("data-swiper-slide-index"),10)===e))[0]:t.slides.eq(e)[0];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)t.visibleSlides.each((e=>{s.push(e)}));else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const e=t.activeIndex+i;if(e>t.slides.length&&!a)break;s.push(n(e))}else s.push(n(t.activeIndex));for(i=0;i<s.length;i+=1)if(void 0!==s[i]){const e=s[i].offsetHeight;r=e>r?e:r}r&&t.$wrapperEl.css("height",`${r}px`)},updateSlidesOffset:function(){const e=this,t=e.slides;for(let s=0;s<t.length;s+=1)t[s].swiperSlideOffset=e.isHorizontal()?t[s].offsetLeft:t[s].offsetTop},updateSlidesProgress:function(e=this&&this.translate||0){const t=this,s=t.params,{slides:a,rtlTranslate:i,snapGrid:r}=t;if(0===a.length)return;void 0===a[0].swiperSlideOffset&&t.updateSlidesOffset();let n=-e;i&&(n=e),a.removeClass(s.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let e=0;e<a.length;e+=1){const l=a[e];let o=l.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(o-=a[0].swiperSlideOffset);const d=(n+(s.centeredSlides?t.minTranslate():0)-o)/(l.swiperSlideSize+s.spaceBetween),c=(n-r[0]+(s.centeredSlides?t.minTranslate():0)-o)/(l.swiperSlideSize+s.spaceBetween),p=-(n-o),u=p+t.slidesSizesGrid[e];(p>=0&&p<t.size-1||u>1&&u<=t.size||p<=0&&u>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(e),a.eq(e).addClass(s.slideVisibleClass)),l.progress=i?-d:d,l.originalProgress=i?-c:c}t.visibleSlides=d(t.visibleSlides)},updateProgress:function(e){const t=this;if(void 0===e){const s=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*s||0}const s=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:r,isEnd:n}=t;const l=r,o=n;0===a?(i=0,r=!0,n=!0):(i=(e-t.minTranslate())/a,r=i<=0,n=i>=1),Object.assign(t,{progress:i,isBeginning:r,isEnd:n}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),r&&!l&&t.emit("reachBeginning toEdge"),n&&!o&&t.emit("reachEnd toEdge"),(l&&!r||o&&!n)&&t.emit("fromEdge"),t.emit("progress",i)},updateSlidesClasses:function(){const e=this,{slides:t,params:s,$wrapperEl:a,activeIndex:i,realIndex:r}=e,n=e.virtual&&s.virtual.enabled;let l;t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`),l=n?e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`):t.eq(i),l.addClass(s.slideActiveClass),s.loop&&(l.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));let o=l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);s.loop&&0===o.length&&(o=t.eq(0),o.addClass(s.slideNextClass));let d=l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);s.loop&&0===d.length&&(d=t.eq(-1),d.addClass(s.slidePrevClass)),s.loop&&(o.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass),d.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)),e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{slidesGrid:a,snapGrid:i,params:r,activeIndex:n,realIndex:l,snapIndex:o}=t;let d,c=e;if(void 0===c){for(let e=0;e<a.length;e+=1)void 0!==a[e+1]?s>=a[e]&&s<a[e+1]-(a[e+1]-a[e])/2?c=e:s>=a[e]&&s<a[e+1]&&(c=e+1):s>=a[e]&&(c=e);r.normalizeSlideIndex&&(c<0||void 0===c)&&(c=0)}if(i.indexOf(s)>=0)d=i.indexOf(s);else{const e=Math.min(r.slidesPerGroupSkip,c);d=e+Math.floor((c-e)/r.slidesPerGroup)}if(d>=i.length&&(d=i.length-1),c===n)return void(d!==o&&(t.snapIndex=d,t.emit("snapIndexChange")));const p=parseInt(t.slides.eq(c).attr("data-swiper-slide-index")||c,10);Object.assign(t,{snapIndex:d,realIndex:p,previousIndex:n,activeIndex:c}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),l!==p&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")},updateClickedSlide:function(e){const t=this,s=t.params,a=d(e).closest(`.${s.slideClass}`)[0];let i,r=!1;if(a)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===a){r=!0,i=e;break}if(!a||!r)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=a,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(d(a).attr("data-swiper-slide-index"),10):t.clickedIndex=i,s.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}},translate:{getTranslate:function(e=(this.isHorizontal()?"x":"y")){const{params:t,rtlTranslate:s,translate:a,$wrapperEl:i}=this;if(t.virtualTranslate)return s?-a:a;if(t.cssMode)return a;let r=h(i[0],e);return s&&(r=-r),r||0},setTranslate:function(e,t){const s=this,{rtlTranslate:a,params:i,$wrapperEl:r,wrapperEl:n,progress:l}=s;let o,d=0,c=0;s.isHorizontal()?d=a?-e:e:c=e,i.roundLengths&&(d=Math.floor(d),c=Math.floor(c)),i.cssMode?n[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-d:-c:i.virtualTranslate||r.transform(`translate3d(${d}px, ${c}px, 0px)`),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?d:c;const p=s.maxTranslate()-s.minTranslate();o=0===p?0:(e-s.minTranslate())/p,o!==l&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e=0,t=this.params.speed,s=!0,a=!0,i){const r=this,{params:n,wrapperEl:l}=r;if(r.animating&&n.preventInteractionOnTransition)return!1;const o=r.minTranslate(),d=r.maxTranslate();let c;if(c=a&&e>o?o:a&&e<d?d:e,r.updateProgress(c),n.cssMode){const e=r.isHorizontal();if(0===t)l[e?"scrollLeft":"scrollTop"]=-c;else{if(!r.support.smoothScroll)return v({swiper:r,targetPosition:-c,side:e?"left":"top"}),!0;l.scrollTo({[e?"left":"top"]:-c,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,s&&r.emit("transitionEnd"))}),r.$wrapperEl[0].addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd))),!0}},transition:{setTransition:function(e,t){const s=this;s.params.cssMode||s.$wrapperEl.transition(e),s.emit("setTransition",e,t)},transitionStart:function(e=!0,t){const s=this,{params:a}=s;a.cssMode||(a.autoHeight&&s.updateAutoHeight(),$({swiper:s,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e=!0,t){const s=this,{params:a}=s;s.animating=!1,a.cssMode||(s.setTransition(0),$({swiper:s,runCallbacks:e,direction:t,step:"End"}))}},slide:{slideTo:function(e=0,t=this.params.speed,s=!0,a,i){if("number"!=typeof e&&"string"!=typeof e)throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);if("string"==typeof e){const t=parseInt(e,10);if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const r=this;let n=e;n<0&&(n=0);const{params:l,snapGrid:o,slidesGrid:d,previousIndex:c,activeIndex:p,rtlTranslate:u,wrapperEl:h,enabled:m}=r;if(r.animating&&l.preventInteractionOnTransition||!m&&!a&&!i)return!1;const f=Math.min(r.params.slidesPerGroupSkip,n);let g=f+Math.floor((n-f)/r.params.slidesPerGroup);g>=o.length&&(g=o.length-1),(p||l.initialSlide||0)===(c||0)&&s&&r.emit("beforeSlideChangeStart");const w=-o[g];if(r.updateProgress(w),l.normalizeSlideIndex)for(let e=0;e<d.length;e+=1){const t=-Math.floor(100*w),s=Math.floor(100*d[e]),a=Math.floor(100*d[e+1]);void 0!==d[e+1]?t>=s&&t<a-(a-s)/2?n=e:t>=s&&t<a&&(n=e+1):t>=s&&(n=e)}if(r.initialized&&n!==p){if(!r.allowSlideNext&&w<r.translate&&w<r.minTranslate())return!1;if(!r.allowSlidePrev&&w>r.translate&&w>r.maxTranslate()&&(p||0)!==n)return!1}let b;if(b=n>p?"next":n<p?"prev":"reset",u&&-w===r.translate||!u&&w===r.translate)return r.updateActiveIndex(n),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==l.effect&&r.setTranslate(w),"reset"!==b&&(r.transitionStart(s,b),r.transitionEnd(s,b)),!1;if(l.cssMode){const e=r.isHorizontal(),s=u?w:-w;if(0===t){const t=r.virtual&&r.params.virtual.enabled;t&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),h[e?"scrollLeft":"scrollTop"]=s,t&&requestAnimationFrame((()=>{r.wrapperEl.style.scrollSnapType="",r._swiperImmediateVirtual=!1}))}else{if(!r.support.smoothScroll)return v({swiper:r,targetPosition:s,side:e?"left":"top"}),!0;h.scrollTo({[e?"left":"top"]:s,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(w),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,a),r.transitionStart(s,b),r.transitionEnd(s,b)):(r.setTransition(t),r.setTranslate(w),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,a),r.transitionStart(s,b),r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,b))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd))),!0},slideToLoop:function(e=0,t=this.params.speed,s=!0,a){const i=this;let r=e;return i.params.loop&&(r+=i.loopedSlides),i.slideTo(r,t,s,a)},slideNext:function(e=this.params.speed,t=!0,s){const a=this,{animating:i,enabled:r,params:n}=a;if(!r)return a;let l=n.slidesPerGroup;"auto"===n.slidesPerView&&1===n.slidesPerGroup&&n.slidesPerGroupAuto&&(l=Math.max(a.slidesPerViewDynamic("current",!0),1));const o=a.activeIndex<n.slidesPerGroupSkip?1:l;if(n.loop){if(i&&n.loopPreventsSlide)return!1;a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft}return a.slideTo(a.activeIndex+o,e,t,s)},slidePrev:function(e=this.params.speed,t=!0,s){const a=this,{params:i,animating:r,snapGrid:n,slidesGrid:l,rtlTranslate:o,enabled:d}=a;if(!d)return a;if(i.loop){if(r&&i.loopPreventsSlide)return!1;a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft}function c(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const p=c(o?a.translate:-a.translate),u=n.map((e=>c(e)));let h=n[u.indexOf(p)-1];if(void 0===h&&i.cssMode){let e;n.forEach(((t,s)=>{p>=t&&(e=s)})),void 0!==e&&(h=n[e>0?e-1:e])}let m=0;return void 0!==h&&(m=l.indexOf(h),m<0&&(m=a.activeIndex-1),"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(m=m-a.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),a.slideTo(m,e,t,s)},slideReset:function(e=this.params.speed,t=!0,s){return this.slideTo(this.activeIndex,e,t,s)},slideToClosest:function(e=this.params.speed,t=!0,s,a=.5){const i=this;let r=i.activeIndex;const n=Math.min(i.params.slidesPerGroupSkip,r),l=n+Math.floor((r-n)/i.params.slidesPerGroup),o=i.rtlTranslate?i.translate:-i.translate;if(o>=i.snapGrid[l]){const e=i.snapGrid[l];o-e>(i.snapGrid[l+1]-e)*a&&(r+=i.params.slidesPerGroup)}else{const e=i.snapGrid[l-1];o-e<=(i.snapGrid[l]-e)*a&&(r-=i.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,i.slidesGrid.length-1),i.slideTo(r,e,t,s)},slideToClickedSlide:function(){const e=this,{params:t,$wrapperEl:s}=e,a="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let i,r=e.clickedIndex;if(t.loop){if(e.animating)return;i=parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-a/2||r>e.slides.length-e.loopedSlides+a/2?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),p((()=>{e.slideTo(r)}))):e.slideTo(r):r>e.slides.length-a?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),p((()=>{e.slideTo(r)}))):e.slideTo(r)}else e.slideTo(r)}},loop:{loopCreate:function(){const e=this,t=a(),{params:s,$wrapperEl:i}=e,r=i.children().length>0?d(i.children()[0].parentNode):i;r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();let n=r.children(`.${s.slideClass}`);if(s.loopFillGroupWithBlank){const e=s.slidesPerGroup-n.length%s.slidesPerGroup;if(e!==s.slidesPerGroup){for(let a=0;a<e;a+=1){const e=d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);r.append(e)}n=r.children(`.${s.slideClass}`)}}"auto"!==s.slidesPerView||s.loopedSlides||(s.loopedSlides=n.length),e.loopedSlides=Math.ceil(parseFloat(s.loopedSlides||s.slidesPerView,10)),e.loopedSlides+=s.loopAdditionalSlides,e.loopedSlides>n.length&&(e.loopedSlides=n.length);const l=[],o=[];n.each(((t,s)=>{const a=d(t);s<e.loopedSlides&&o.push(t),s<n.length&&s>=n.length-e.loopedSlides&&l.push(t),a.attr("data-swiper-slide-index",s)}));for(let e=0;e<o.length;e+=1)r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));for(let e=l.length-1;e>=0;e-=1)r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass))},loopFix:function(){const e=this;e.emit("beforeLoopFix");const{activeIndex:t,slides:s,loopedSlides:a,allowSlidePrev:i,allowSlideNext:r,snapGrid:n,rtlTranslate:l}=e;let o;e.allowSlidePrev=!0,e.allowSlideNext=!0;const d=-n[t]-e.getTranslate();if(t<a){o=s.length-3*a+t,o+=a;e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}else if(t>=s.length-a){o=-s.length+t+a,o+=a;e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}e.allowSlidePrev=i,e.allowSlideNext=r,e.emit("loopFix")},loopDestroy:function(){const{$wrapperEl:e,params:t,slides:s}=this;e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),s.removeAttr("data-swiper-slide-index")}},grabCursor:{setGrabCursor:function(e){const t=this;if(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const s="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;s.style.cursor="move",s.style.cursor=e?"-webkit-grabbing":"-webkit-grab",s.style.cursor=e?"-moz-grabbin":"-moz-grab",s.style.cursor=e?"grabbing":"grab"},unsetGrabCursor:function(){const e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="")}},events:{attachEvents:function(){const e=this,t=a(),{params:s,support:i}=e;e.onTouchStart=S.bind(e),e.onTouchMove=M.bind(e),e.onTouchEnd=P.bind(e),s.cssMode&&(e.onScroll=O.bind(e)),e.onClick=z.bind(e),i.touch&&!I&&(t.addEventListener("touchstart",L),I=!0),A(e,"on")},detachEvents:function(){A(this,"off")}},breakpoints:{setBreakpoint:function(){const e=this,{activeIndex:t,initialized:s,loopedSlides:a=0,params:i,$el:r}=e,n=i.breakpoints;if(!n||n&&0===Object.keys(n).length)return;const l=e.getBreakpoint(n,e.params.breakpointsBase,e.el);if(!l||e.currentBreakpoint===l)return;const o=(l in n?n[l]:void 0)||e.originalParams,d=D(e,i),c=D(e,o),p=i.enabled;d&&!c?(r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&c&&(r.addClass(`${i.containerModifierClass}grid`),(o.grid.fill&&"column"===o.grid.fill||!o.grid.fill&&"column"===i.grid.fill)&&r.addClass(`${i.containerModifierClass}grid-column`),e.emitContainerClasses());const u=o.direction&&o.direction!==i.direction,h=i.loop&&(o.slidesPerView!==i.slidesPerView||u);u&&s&&e.changeDirection(),f(e.params,o);const m=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),p&&!m?e.disable():!p&&m&&e.enable(),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",o),h&&s&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-a+e.loopedSlides,0,!1)),e.emit("breakpoint",o)},getBreakpoint:function(e,t="window",s){if(!e||"container"===t&&!s)return;let a=!1;const i=r(),n="window"===t?i.innerHeight:s.clientHeight,l=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:n*t,point:e}}return{value:e,point:e}}));l.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<l.length;e+=1){const{point:r,value:n}=l[e];"window"===t?i.matchMedia(`(min-width: ${n}px)`).matches&&(a=r):n<=s.clientWidth&&(a=r)}return a||"max"}},checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:a}=s;if(a){const t=e.slides.length-1,s=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*a;e.isLocked=e.size>s}else e.isLocked=1===e.snapGrid.length;!0===s.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===s.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:{addClasses:function(){const e=this,{classNames:t,params:s,rtl:a,$el:i,device:r,support:n}=e,l=function(e,t){const s=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((a=>{e[a]&&s.push(t+a)})):"string"==typeof e&&s.push(t+e)})),s}(["initialized",s.direction,{"pointer-events":!n.touch},{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:a},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&"column"===s.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides}],s.containerModifierClass);t.push(...l),i.addClass([...t].join(" ")),e.emitContainerClasses()},removeClasses:function(){const{$el:e,classNames:t}=this;e.removeClass(t.join(" ")),this.emitContainerClasses()}},images:{loadImage:function(e,t,s,a,i,n){const l=r();let o;function c(){n&&n()}d(e).parent("picture")[0]||e.complete&&i?c():t?(o=new l.Image,o.onload=c,o.onerror=c,a&&(o.sizes=a),s&&(o.srcset=s),t&&(o.src=t)):c()},preloadImages:function(){const e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(let s=0;s<e.imagesToLoad.length;s+=1){const a=e.imagesToLoad[s];e.loadImage(a,a.currentSrc||a.getAttribute("src"),a.srcset||a.getAttribute("srcset"),a.sizes||a.getAttribute("sizes"),!0,t)}}}},X={};class H{constructor(...e){let t,s;if(1===e.length&&e[0].constructor&&"Object"===Object.prototype.toString.call(e[0]).slice(8,-1)?s=e[0]:[t,s]=e,s||(s={}),s=f({},s),t&&!s.el&&(s.el=t),s.el&&d(s.el).length>1){const e=[];return d(s.el).each((t=>{const a=f({},s,{el:t});e.push(new H(a))})),e}const a=this;a.__swiper__=!0,a.support=y(),a.device=E({userAgent:s.userAgent}),a.browser=T(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],s.modules&&Array.isArray(s.modules)&&a.modules.push(...s.modules);const i={};a.modules.forEach((e=>{e({swiper:a,extendParams:N(s,i),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})}));const r=f({},G,i);return a.params=f({},r,X,s),a.originalParams=f({},a.params),a.passedParams=f({},s),a.params&&a.params.on&&Object.keys(a.params.on).forEach((e=>{a.on(e,a.params.on[e])})),a.params&&a.params.onAny&&a.onAny(a.params.onAny),a.$=d,Object.assign(a,{enabled:a.params.enabled,el:t,classNames:[],slides:d(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===a.params.direction,isVertical:()=>"vertical"===a.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEvents:function(){const e=["touchstart","touchmove","touchend","touchcancel"],t=["pointerdown","pointermove","pointerup"];return a.touchEventsTouch={start:e[0],move:e[1],end:e[2],cancel:e[3]},a.touchEventsDesktop={start:t[0],move:t[1],end:t[2]},a.support.touch||!a.params.simulateTouch?a.touchEventsTouch:a.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:u(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit("_swiper"),a.params.init&&a.init(),a}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const s=this;e=Math.min(Math.max(e,0),1);const a=s.minTranslate(),i=(s.maxTranslate()-a)*e+a;s.translateTo(i,void 0===t?0:t),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.each((s=>{const a=e.getSlideClasses(s);t.push({slideEl:s,classNames:a}),e.emit("_slideClass",s,a)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const{params:s,slides:a,slidesGrid:i,slidesSizesGrid:r,size:n,activeIndex:l}=this;let o=1;if(s.centeredSlides){let e,t=a[l].swiperSlideSize;for(let s=l+1;s<a.length;s+=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0));for(let s=l-1;s>=0;s-=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0))}else if("current"===e)for(let e=l+1;e<a.length;e+=1){(t?i[e]+r[e]-i[l]<n:i[e]-i[l]<n)&&(o+=1)}else for(let e=l-1;e>=0;e-=1){i[l]-i[e]<n&&(o+=1)}return o}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:s}=e;function a(){const t=e.rtlTranslate?-1*e.translate:e.translate,s=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(s),e.updateActiveIndex(),e.updateSlidesClasses()}let i;s.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled?(a(),e.params.autoHeight&&e.updateAutoHeight()):(i=("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),i||a()),s.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const s=this,a=s.params.direction;return e||(e="horizontal"===a?"vertical":"horizontal"),e===a||"horizontal"!==e&&"vertical"!==e||(s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.each((t=>{"vertical"===e?t.style.width="":t.style.height=""})),s.emit("changeDirection"),t&&s.update()),s}mount(e){const t=this;if(t.mounted)return!0;const s=d(e||t.params.el);if(!(e=s[0]))return!1;e.swiper=t;const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let r=(()=>{if(e&&e.shadowRoot&&e.shadowRoot.querySelector){const t=d(e.shadowRoot.querySelector(i()));return t.children=e=>s.children(e),t}return s.children(i())})();if(0===r.length&&t.params.createElements){const e=a().createElement("div");r=d(e),e.className=t.params.wrapperClass,s.append(e),s.children(`.${t.params.slideClass}`).each((e=>{r.append(e)}))}return Object.assign(t,{$el:s,el:e,$wrapperEl:r,wrapperEl:r[0],mounted:!0,rtl:"rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction")),wrongRTL:"-webkit-box"===r.css("display")}),!0}init(e){const t=this;if(t.initialized)return t;return!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t}destroy(e=!0,t=!0){const s=this,{params:a,$el:i,$wrapperEl:r,slides:n}=s;return void 0===s.params||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),a.loop&&s.loopDestroy(),t&&(s.removeClasses(),i.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([a.slideVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),s.emit("destroy"),Object.keys(s.eventsListeners).forEach((e=>{s.off(e)})),!1!==e&&(s.$el[0].swiper=null,function(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}(s)),s.destroyed=!0),null}static extendDefaults(e){f(X,e)}static get extendedDefaults(){return X}static get defaults(){return G}static installModule(e){H.prototype.__modules__||(H.prototype.__modules__=[]);const t=H.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>H.installModule(e))),H):(H.installModule(e),H)}}function Y(e,t,s,i){const r=a();return e.params.createElements&&Object.keys(i).forEach((a=>{if(!s[a]&&!0===s.auto){let n=e.$el.children(`.${i[a]}`)[0];n||(n=r.createElement("div"),n.className=i[a],e.$el.append(n)),s[a]=n,t[a]=n}})),s}function W(e=""){return`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function R(e){const t=this,{$wrapperEl:s,params:a}=t;if(a.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.append(e[t]);else s.append(e);a.loop&&t.loopCreate(),a.observer||t.update()}function j(e){const t=this,{params:s,$wrapperEl:a,activeIndex:i}=t;s.loop&&t.loopDestroy();let r=i+1;if("object"==typeof e&&"length"in e){for(let t=0;t<e.length;t+=1)e[t]&&a.prepend(e[t]);r=i+e.length}else a.prepend(e);s.loop&&t.loopCreate(),s.observer||t.update(),t.slideTo(r,0,!1)}function _(e,t){const s=this,{$wrapperEl:a,params:i,activeIndex:r}=s;let n=r;i.loop&&(n-=s.loopedSlides,s.loopDestroy(),s.slides=a.children(`.${i.slideClass}`));const l=s.slides.length;if(e<=0)return void s.prependSlide(t);if(e>=l)return void s.appendSlide(t);let o=n>e?n+1:n;const d=[];for(let t=l-1;t>=e;t-=1){const e=s.slides.eq(t);e.remove(),d.unshift(e)}if("object"==typeof t&&"length"in t){for(let e=0;e<t.length;e+=1)t[e]&&a.append(t[e]);o=n>e?n+t.length:n}else a.append(t);for(let e=0;e<d.length;e+=1)a.append(d[e]);i.loop&&s.loopCreate(),i.observer||s.update(),i.loop?s.slideTo(o+s.loopedSlides,0,!1):s.slideTo(o,0,!1)}function V(e){const t=this,{params:s,$wrapperEl:a,activeIndex:i}=t;let r=i;s.loop&&(r-=t.loopedSlides,t.loopDestroy(),t.slides=a.children(`.${s.slideClass}`));let n,l=r;if("object"==typeof e&&"length"in e){for(let s=0;s<e.length;s+=1)n=e[s],t.slides[n]&&t.slides.eq(n).remove(),n<l&&(l-=1);l=Math.max(l,0)}else n=e,t.slides[n]&&t.slides.eq(n).remove(),n<l&&(l-=1),l=Math.max(l,0);s.loop&&t.loopCreate(),s.observer||t.update(),s.loop?t.slideTo(l+t.loopedSlides,0,!1):t.slideTo(l,0,!1)}function q(){const e=this,t=[];for(let s=0;s<e.slides.length;s+=1)t.push(s);e.removeSlide(t)}function F(e){const{effect:t,swiper:s,on:a,setTranslate:i,setTransition:r,overwriteParams:n,perspective:l}=e;a("beforeInit",(()=>{if(s.params.effect!==t)return;s.classNames.push(`${s.params.containerModifierClass}${t}`),l&&l()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const e=n?n():{};Object.assign(s.params,e),Object.assign(s.originalParams,e)})),a("setTranslate",(()=>{s.params.effect===t&&i()})),a("setTransition",((e,a)=>{s.params.effect===t&&r(a)}))}function U(e,t){return e.transformEl?t.find(e.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):t}function K({swiper:e,duration:t,transformEl:s,allSlides:a}){const{slides:i,activeIndex:r,$wrapperEl:n}=e;if(e.params.virtualTranslate&&0!==t){let t,l=!1;t=a?s?i.find(s):i:s?i.eq(r).find(s):i.eq(r),t.transitionEnd((()=>{if(l)return;if(!e||e.destroyed)return;l=!0,e.animating=!1;const t=["webkitTransitionEnd","transitionend"];for(let e=0;e<t.length;e+=1)n.trigger(t[e])}))}}function Z(e,t,s){const a="swiper-slide-shadow"+(s?`-${s}`:""),i=e.transformEl?t.find(e.transformEl):t;let r=i.children(`.${a}`);return r.length||(r=d(`<div class="swiper-slide-shadow${s?`-${s}`:""}"></div>`),i.append(r)),r}Object.keys(B).forEach((e=>{Object.keys(B[e]).forEach((t=>{H.prototype[t]=B[e][t]}))})),H.use([function({swiper:e,on:t,emit:s}){const a=r();let i=null;const n=()=>{e&&!e.destroyed&&e.initialized&&(s("beforeResize"),s("resize"))},l=()=>{e&&!e.destroyed&&e.initialized&&s("orientationchange")};t("init",(()=>{e.params.resizeObserver&&void 0!==a.ResizeObserver?e&&!e.destroyed&&e.initialized&&(i=new ResizeObserver((t=>{const{width:s,height:a}=e;let i=s,r=a;t.forEach((({contentBoxSize:t,contentRect:s,target:a})=>{a&&a!==e.el||(i=s?s.width:(t[0]||t).inlineSize,r=s?s.height:(t[0]||t).blockSize)})),i===s&&r===a||n()})),i.observe(e.el)):(a.addEventListener("resize",n),a.addEventListener("orientationchange",l))})),t("destroy",(()=>{i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null),a.removeEventListener("resize",n),a.removeEventListener("orientationchange",l)}))},function({swiper:e,extendParams:t,on:s,emit:a}){const i=[],n=r(),l=(e,t={})=>{const s=new(n.MutationObserver||n.WebkitMutationObserver)((e=>{if(1===e.length)return void a("observerUpdate",e[0]);const t=function(){a("observerUpdate",e[0])};n.requestAnimationFrame?n.requestAnimationFrame(t):n.setTimeout(t,0)}));s.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),i.push(s)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),s("init",(()=>{if(e.params.observer){if(e.params.observeParents){const t=e.$el.parents();for(let e=0;e<t.length;e+=1)l(t[e])}l(e.$el[0],{childList:e.params.observeSlideChildren}),l(e.$wrapperEl[0],{attributes:!1})}})),s("destroy",(()=>{i.forEach((e=>{e.disconnect()})),i.splice(0,i.length)}))}]);const J=[function({swiper:e,extendParams:t,on:s}){let a;function i(t,s){const a=e.params.virtual;if(a.cache&&e.virtual.cache[s])return e.virtual.cache[s];const i=a.renderSlide?d(a.renderSlide.call(e,t,s)):d(`<div class="${e.params.slideClass}" data-swiper-slide-index="${s}">${t}</div>`);return i.attr("data-swiper-slide-index")||i.attr("data-swiper-slide-index",s),a.cache&&(e.virtual.cache[s]=i),i}function r(t){const{slidesPerView:s,slidesPerGroup:a,centeredSlides:r}=e.params,{addSlidesBefore:n,addSlidesAfter:l}=e.params.virtual,{from:o,to:d,slides:c,slidesGrid:p,offset:u}=e.virtual;e.params.cssMode||e.updateActiveIndex();const h=e.activeIndex||0;let m,f,g;m=e.rtlTranslate?"right":e.isHorizontal()?"left":"top",r?(f=Math.floor(s/2)+a+l,g=Math.floor(s/2)+a+n):(f=s+(a-1)+l,g=a+n);const v=Math.max((h||0)-g,0),w=Math.min((h||0)+f,c.length-1),b=(e.slidesGrid[v]||0)-(e.slidesGrid[0]||0);function x(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.lazy&&e.params.lazy.enabled&&e.lazy.load()}if(Object.assign(e.virtual,{from:v,to:w,offset:b,slidesGrid:e.slidesGrid}),o===v&&d===w&&!t)return e.slidesGrid!==p&&b!==u&&e.slides.css(m,`${b}px`),void e.updateProgress();if(e.params.virtual.renderExternal)return e.params.virtual.renderExternal.call(e,{offset:b,from:v,to:w,slides:function(){const e=[];for(let t=v;t<=w;t+=1)e.push(c[t]);return e}()}),void(e.params.virtual.renderExternalUpdate&&x());const y=[],E=[];if(t)e.$wrapperEl.find(`.${e.params.slideClass}`).remove();else for(let t=o;t<=d;t+=1)(t<v||t>w)&&e.$wrapperEl.find(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`).remove();for(let e=0;e<c.length;e+=1)e>=v&&e<=w&&(void 0===d||t?E.push(e):(e>d&&E.push(e),e<o&&y.push(e)));E.forEach((t=>{e.$wrapperEl.append(i(c[t],t))})),y.sort(((e,t)=>t-e)).forEach((t=>{e.$wrapperEl.prepend(i(c[t],t))})),e.$wrapperEl.children(".swiper-slide").css(m,`${b}px`),x()}t({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}}),e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]},s("beforeInit",(()=>{e.params.virtual.enabled&&(e.virtual.slides=e.params.virtual.slides,e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,e.params.initialSlide||r())})),s("setTranslate",(()=>{e.params.virtual.enabled&&(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(a),a=setTimeout((()=>{r()}),100)):r())})),s("init update resize",(()=>{e.params.virtual.enabled&&e.params.cssMode&&g(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)})),Object.assign(e.virtual,{appendSlide:function(t){if("object"==typeof t&&"length"in t)for(let s=0;s<t.length;s+=1)t[s]&&e.virtual.slides.push(t[s]);else e.virtual.slides.push(t);r(!0)},prependSlide:function(t){const s=e.activeIndex;let a=s+1,i=1;if(Array.isArray(t)){for(let s=0;s<t.length;s+=1)t[s]&&e.virtual.slides.unshift(t[s]);a=s+t.length,i=t.length}else e.virtual.slides.unshift(t);if(e.params.virtual.cache){const t=e.virtual.cache,s={};Object.keys(t).forEach((e=>{const a=t[e],r=a.attr("data-swiper-slide-index");r&&a.attr("data-swiper-slide-index",parseInt(r,10)+i),s[parseInt(e,10)+i]=a})),e.virtual.cache=s}r(!0),e.slideTo(a,0)},removeSlide:function(t){if(null==t)return;let s=e.activeIndex;if(Array.isArray(t))for(let a=t.length-1;a>=0;a-=1)e.virtual.slides.splice(t[a],1),e.params.virtual.cache&&delete e.virtual.cache[t[a]],t[a]<s&&(s-=1),s=Math.max(s,0);else e.virtual.slides.splice(t,1),e.params.virtual.cache&&delete e.virtual.cache[t],t<s&&(s-=1),s=Math.max(s,0);r(!0),e.slideTo(s,0)},removeAllSlides:function(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),r(!0),e.slideTo(0,0)},update:r})},function({swiper:e,extendParams:t,on:s,emit:i}){const n=a(),l=r();function o(t){if(!e.enabled)return;const{rtlTranslate:s}=e;let a=t;a.originalEvent&&(a=a.originalEvent);const r=a.keyCode||a.charCode,o=e.params.keyboard.pageUpDown,d=o&&33===r,c=o&&34===r,p=37===r,u=39===r,h=38===r,m=40===r;if(!e.allowSlideNext&&(e.isHorizontal()&&u||e.isVertical()&&m||c))return!1;if(!e.allowSlidePrev&&(e.isHorizontal()&&p||e.isVertical()&&h||d))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||n.activeElement&&n.activeElement.nodeName&&("input"===n.activeElement.nodeName.toLowerCase()||"textarea"===n.activeElement.nodeName.toLowerCase()))){if(e.params.keyboard.onlyInViewport&&(d||c||p||u||h||m)){let t=!1;if(e.$el.parents(`.${e.params.slideClass}`).length>0&&0===e.$el.parents(`.${e.params.slideActiveClass}`).length)return;const a=e.$el,i=a[0].clientWidth,r=a[0].clientHeight,n=l.innerWidth,o=l.innerHeight,d=e.$el.offset();s&&(d.left-=e.$el[0].scrollLeft);const c=[[d.left,d.top],[d.left+i,d.top],[d.left,d.top+r],[d.left+i,d.top+r]];for(let e=0;e<c.length;e+=1){const s=c[e];if(s[0]>=0&&s[0]<=n&&s[1]>=0&&s[1]<=o){if(0===s[0]&&0===s[1])continue;t=!0}}if(!t)return}e.isHorizontal()?((d||c||p||u)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),((c||u)&&!s||(d||p)&&s)&&e.slideNext(),((d||p)&&!s||(c||u)&&s)&&e.slidePrev()):((d||c||h||m)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),(c||m)&&e.slideNext(),(d||h)&&e.slidePrev()),i("keyPress",r)}}function c(){e.keyboard.enabled||(d(n).on("keydown",o),e.keyboard.enabled=!0)}function p(){e.keyboard.enabled&&(d(n).off("keydown",o),e.keyboard.enabled=!1)}e.keyboard={enabled:!1},t({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}}),s("init",(()=>{e.params.keyboard.enabled&&c()})),s("destroy",(()=>{e.keyboard.enabled&&p()})),Object.assign(e.keyboard,{enable:c,disable:p})},function({swiper:e,extendParams:t,on:s,emit:a}){const i=r();let n;t({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}}),e.mousewheel={enabled:!1};let l,o=u();const c=[];function h(){e.enabled&&(e.mouseEntered=!0)}function m(){e.enabled&&(e.mouseEntered=!1)}function f(t){return!(e.params.mousewheel.thresholdDelta&&t.delta<e.params.mousewheel.thresholdDelta)&&(!(e.params.mousewheel.thresholdTime&&u()-o<e.params.mousewheel.thresholdTime)&&(t.delta>=6&&u()-o<60||(t.direction<0?e.isEnd&&!e.params.loop||e.animating||(e.slideNext(),a("scroll",t.raw)):e.isBeginning&&!e.params.loop||e.animating||(e.slidePrev(),a("scroll",t.raw)),o=(new i.Date).getTime(),!1)))}function g(t){let s=t,i=!0;if(!e.enabled)return;const r=e.params.mousewheel;e.params.cssMode&&s.preventDefault();let o=e.$el;if("container"!==e.params.mousewheel.eventsTarget&&(o=d(e.params.mousewheel.eventsTarget)),!e.mouseEntered&&!o[0].contains(s.target)&&!r.releaseOnEdges)return!0;s.originalEvent&&(s=s.originalEvent);let h=0;const m=e.rtlTranslate?-1:1,g=function(e){let t=0,s=0,a=0,i=0;return"detail"in e&&(s=e.detail),"wheelDelta"in e&&(s=-e.wheelDelta/120),"wheelDeltaY"in e&&(s=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=s,s=0),a=10*t,i=10*s,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(a=e.deltaX),e.shiftKey&&!a&&(a=i,i=0),(a||i)&&e.deltaMode&&(1===e.deltaMode?(a*=40,i*=40):(a*=800,i*=800)),a&&!t&&(t=a<1?-1:1),i&&!s&&(s=i<1?-1:1),{spinX:t,spinY:s,pixelX:a,pixelY:i}}(s);if(r.forceToAxis)if(e.isHorizontal()){if(!(Math.abs(g.pixelX)>Math.abs(g.pixelY)))return!0;h=-g.pixelX*m}else{if(!(Math.abs(g.pixelY)>Math.abs(g.pixelX)))return!0;h=-g.pixelY}else h=Math.abs(g.pixelX)>Math.abs(g.pixelY)?-g.pixelX*m:-g.pixelY;if(0===h)return!0;r.invert&&(h=-h);let v=e.getTranslate()+h*r.sensitivity;if(v>=e.minTranslate()&&(v=e.minTranslate()),v<=e.maxTranslate()&&(v=e.maxTranslate()),i=!!e.params.loop||!(v===e.minTranslate()||v===e.maxTranslate()),i&&e.params.nested&&s.stopPropagation(),e.params.freeMode&&e.params.freeMode.enabled){const t={time:u(),delta:Math.abs(h),direction:Math.sign(h)},i=l&&t.time<l.time+500&&t.delta<=l.delta&&t.direction===l.direction;if(!i){l=void 0,e.params.loop&&e.loopFix();let o=e.getTranslate()+h*r.sensitivity;const d=e.isBeginning,u=e.isEnd;if(o>=e.minTranslate()&&(o=e.minTranslate()),o<=e.maxTranslate()&&(o=e.maxTranslate()),e.setTransition(0),e.setTranslate(o),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!d&&e.isBeginning||!u&&e.isEnd)&&e.updateSlidesClasses(),e.params.freeMode.sticky){clearTimeout(n),n=void 0,c.length>=15&&c.shift();const s=c.length?c[c.length-1]:void 0,a=c[0];if(c.push(t),s&&(t.delta>s.delta||t.direction!==s.direction))c.splice(0);else if(c.length>=15&&t.time-a.time<500&&a.delta-t.delta>=1&&t.delta<=6){const s=h>0?.8:.2;l=t,c.splice(0),n=p((()=>{e.slideToClosest(e.params.speed,!0,void 0,s)}),0)}n||(n=p((()=>{l=t,c.splice(0),e.slideToClosest(e.params.speed,!0,void 0,.5)}),500))}if(i||a("scroll",s),e.params.autoplay&&e.params.autoplayDisableOnInteraction&&e.autoplay.stop(),o===e.minTranslate()||o===e.maxTranslate())return!0}}else{const s={time:u(),delta:Math.abs(h),direction:Math.sign(h),raw:t};c.length>=2&&c.shift();const a=c.length?c[c.length-1]:void 0;if(c.push(s),a?(s.direction!==a.direction||s.delta>a.delta||s.time>a.time+150)&&f(s):f(s),function(t){const s=e.params.mousewheel;if(t.direction<0){if(e.isEnd&&!e.params.loop&&s.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&s.releaseOnEdges)return!0;return!1}(s))return!0}return s.preventDefault?s.preventDefault():s.returnValue=!1,!1}function v(t){let s=e.$el;"container"!==e.params.mousewheel.eventsTarget&&(s=d(e.params.mousewheel.eventsTarget)),s[t]("mouseenter",h),s[t]("mouseleave",m),s[t]("wheel",g)}function w(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",g),!0):!e.mousewheel.enabled&&(v("on"),e.mousewheel.enabled=!0,!0)}function b(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,g),!0):!!e.mousewheel.enabled&&(v("off"),e.mousewheel.enabled=!1,!0)}s("init",(()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&b(),e.params.mousewheel.enabled&&w()})),s("destroy",(()=>{e.params.cssMode&&w(),e.mousewheel.enabled&&b()})),Object.assign(e.mousewheel,{enable:w,disable:b})},function({swiper:e,extendParams:t,on:s,emit:a}){function i(t){let s;return t&&(s=d(t),e.params.uniqueNavElements&&"string"==typeof t&&s.length>1&&1===e.$el.find(t).length&&(s=e.$el.find(t))),s}function r(t,s){const a=e.params.navigation;t&&t.length>0&&(t[s?"addClass":"removeClass"](a.disabledClass),t[0]&&"BUTTON"===t[0].tagName&&(t[0].disabled=s),e.params.watchOverflow&&e.enabled&&t[e.isLocked?"addClass":"removeClass"](a.lockClass))}function n(){if(e.params.loop)return;const{$nextEl:t,$prevEl:s}=e.navigation;r(s,e.isBeginning),r(t,e.isEnd)}function l(t){t.preventDefault(),e.isBeginning&&!e.params.loop||e.slidePrev()}function o(t){t.preventDefault(),e.isEnd&&!e.params.loop||e.slideNext()}function c(){const t=e.params.navigation;if(e.params.navigation=Y(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!t.nextEl&&!t.prevEl)return;const s=i(t.nextEl),a=i(t.prevEl);s&&s.length>0&&s.on("click",o),a&&a.length>0&&a.on("click",l),Object.assign(e.navigation,{$nextEl:s,nextEl:s&&s[0],$prevEl:a,prevEl:a&&a[0]}),e.enabled||(s&&s.addClass(t.lockClass),a&&a.addClass(t.lockClass))}function p(){const{$nextEl:t,$prevEl:s}=e.navigation;t&&t.length&&(t.off("click",o),t.removeClass(e.params.navigation.disabledClass)),s&&s.length&&(s.off("click",l),s.removeClass(e.params.navigation.disabledClass))}t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}}),e.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null},s("init",(()=>{c(),n()})),s("toEdge fromEdge lock unlock",(()=>{n()})),s("destroy",(()=>{p()})),s("enable disable",(()=>{const{$nextEl:t,$prevEl:s}=e.navigation;t&&t[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),s&&s[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)})),s("click",((t,s)=>{const{$nextEl:i,$prevEl:r}=e.navigation,n=s.target;if(e.params.navigation.hideOnClick&&!d(n).is(r)&&!d(n).is(i)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===n||e.pagination.el.contains(n)))return;let t;i?t=i.hasClass(e.params.navigation.hiddenClass):r&&(t=r.hasClass(e.params.navigation.hiddenClass)),a(!0===t?"navigationShow":"navigationHide"),i&&i.toggleClass(e.params.navigation.hiddenClass),r&&r.toggleClass(e.params.navigation.hiddenClass)}})),Object.assign(e.navigation,{update:n,init:c,destroy:p})},function({swiper:e,extendParams:t,on:s,emit:a}){const i="swiper-pagination";let r;t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`}}),e.pagination={el:null,$el:null,bullets:[]};let n=0;function l(){return!e.params.pagination.el||!e.pagination.el||!e.pagination.$el||0===e.pagination.$el.length}function o(t,s){const{bulletActiveClass:a}=e.params.pagination;t[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)}function c(){const t=e.rtl,s=e.params.pagination;if(l())return;const i=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,c=e.pagination.$el;let p;const u=e.params.loop?Math.ceil((i-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(p=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup),p>i-1-2*e.loopedSlides&&(p-=i-2*e.loopedSlides),p>u-1&&(p-=u),p<0&&"bullets"!==e.params.paginationType&&(p=u+p)):p=void 0!==e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===s.type&&e.pagination.bullets&&e.pagination.bullets.length>0){const a=e.pagination.bullets;let i,l,u;if(s.dynamicBullets&&(r=a.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),c.css(e.isHorizontal()?"width":"height",r*(s.dynamicMainBullets+4)+"px"),s.dynamicMainBullets>1&&void 0!==e.previousIndex&&(n+=p-e.previousIndex,n>s.dynamicMainBullets-1?n=s.dynamicMainBullets-1:n<0&&(n=0)),i=p-n,l=i+(Math.min(a.length,s.dynamicMainBullets)-1),u=(l+i)/2),a.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${s.bulletActiveClass}${e}`)).join(" ")),c.length>1)a.each((e=>{const t=d(e),a=t.index();a===p&&t.addClass(s.bulletActiveClass),s.dynamicBullets&&(a>=i&&a<=l&&t.addClass(`${s.bulletActiveClass}-main`),a===i&&o(t,"prev"),a===l&&o(t,"next"))}));else{const t=a.eq(p),r=t.index();if(t.addClass(s.bulletActiveClass),s.dynamicBullets){const t=a.eq(i),n=a.eq(l);for(let e=i;e<=l;e+=1)a.eq(e).addClass(`${s.bulletActiveClass}-main`);if(e.params.loop)if(r>=a.length-s.dynamicMainBullets){for(let e=s.dynamicMainBullets;e>=0;e-=1)a.eq(a.length-e).addClass(`${s.bulletActiveClass}-main`);a.eq(a.length-s.dynamicMainBullets-1).addClass(`${s.bulletActiveClass}-prev`)}else o(t,"prev"),o(n,"next");else o(t,"prev"),o(n,"next")}}if(s.dynamicBullets){const i=Math.min(a.length,s.dynamicMainBullets+4),n=(r*i-r)/2-u*r,l=t?"right":"left";a.css(e.isHorizontal()?l:"top",`${n}px`)}}if("fraction"===s.type&&(c.find(W(s.currentClass)).text(s.formatFractionCurrent(p+1)),c.find(W(s.totalClass)).text(s.formatFractionTotal(u))),"progressbar"===s.type){let t;t=s.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";const a=(p+1)/u;let i=1,r=1;"horizontal"===t?i=a:r=a,c.find(W(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${r})`).transition(e.params.speed)}"custom"===s.type&&s.renderCustom?(c.html(s.renderCustom(e,p+1,u)),a("paginationRender",c[0])):a("paginationUpdate",c[0]),e.params.watchOverflow&&e.enabled&&c[e.isLocked?"addClass":"removeClass"](s.lockClass)}function p(){const t=e.params.pagination;if(l())return;const s=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el;let r="";if("bullets"===t.type){let a=e.params.loop?Math.ceil((s-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&!e.params.loop&&a>s&&(a=s);for(let s=0;s<a;s+=1)t.renderBullet?r+=t.renderBullet.call(e,s,t.bulletClass):r+=`<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;i.html(r),e.pagination.bullets=i.find(W(t.bulletClass))}"fraction"===t.type&&(r=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`,i.html(r)),"progressbar"===t.type&&(r=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):`<span class="${t.progressbarFillClass}"></span>`,i.html(r)),"custom"!==t.type&&a("paginationRender",e.pagination.$el[0])}function u(){e.params.pagination=Y(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const t=e.params.pagination;if(!t.el)return;let s=d(t.el);0!==s.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&s.length>1&&(s=e.$el.find(t.el),s.length>1&&(s=s.filter((t=>d(t).parents(".swiper")[0]===e.el)))),"bullets"===t.type&&t.clickable&&s.addClass(t.clickableClass),s.addClass(t.modifierClass+t.type),s.addClass(t.modifierClass+e.params.direction),"bullets"===t.type&&t.dynamicBullets&&(s.addClass(`${t.modifierClass}${t.type}-dynamic`),n=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&s.addClass(t.progressbarOppositeClass),t.clickable&&s.on("click",W(t.bulletClass),(function(t){t.preventDefault();let s=d(this).index()*e.params.slidesPerGroup;e.params.loop&&(s+=e.loopedSlides),e.slideTo(s)})),Object.assign(e.pagination,{$el:s,el:s[0]}),e.enabled||s.addClass(t.lockClass))}function h(){const t=e.params.pagination;if(l())return;const s=e.pagination.$el;s.removeClass(t.hiddenClass),s.removeClass(t.modifierClass+t.type),s.removeClass(t.modifierClass+e.params.direction),e.pagination.bullets&&e.pagination.bullets.removeClass&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&s.off("click",W(t.bulletClass))}s("init",(()=>{u(),p(),c()})),s("activeIndexChange",(()=>{(e.params.loop||void 0===e.snapIndex)&&c()})),s("snapIndexChange",(()=>{e.params.loop||c()})),s("slidesLengthChange",(()=>{e.params.loop&&(p(),c())})),s("snapGridLengthChange",(()=>{e.params.loop||(p(),c())})),s("destroy",(()=>{h()})),s("enable disable",(()=>{const{$el:t}=e.pagination;t&&t[e.enabled?"removeClass":"addClass"](e.params.pagination.lockClass)})),s("lock unlock",(()=>{c()})),s("click",((t,s)=>{const i=s.target,{$el:r}=e.pagination;if(e.params.pagination.el&&e.params.pagination.hideOnClick&&r.length>0&&!d(i).hasClass(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&i===e.navigation.nextEl||e.navigation.prevEl&&i===e.navigation.prevEl))return;const t=r.hasClass(e.params.pagination.hiddenClass);a(!0===t?"paginationShow":"paginationHide"),r.toggleClass(e.params.pagination.hiddenClass)}})),Object.assign(e.pagination,{render:p,update:c,init:u,destroy:h})},function({swiper:e,extendParams:t,on:s,emit:i}){const r=a();let n,l,o,c,u=!1,h=null,m=null;function f(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:t,rtlTranslate:s,progress:a}=e,{$dragEl:i,$el:r}=t,n=e.params.scrollbar;let d=l,c=(o-l)*a;s?(c=-c,c>0?(d=l-c,c=0):-c+l>o&&(d=o+c)):c<0?(d=l+c,c=0):c+l>o&&(d=o-c),e.isHorizontal()?(i.transform(`translate3d(${c}px, 0, 0)`),i[0].style.width=`${d}px`):(i.transform(`translate3d(0px, ${c}px, 0)`),i[0].style.height=`${d}px`),n.hide&&(clearTimeout(h),r[0].style.opacity=1,h=setTimeout((()=>{r[0].style.opacity=0,r.transition(400)}),1e3))}function g(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:t}=e,{$dragEl:s,$el:a}=t;s[0].style.width="",s[0].style.height="",o=e.isHorizontal()?a[0].offsetWidth:a[0].offsetHeight,c=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),l="auto"===e.params.scrollbar.dragSize?o*c:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?s[0].style.width=`${l}px`:s[0].style.height=`${l}px`,a[0].style.display=c>=1?"none":"",e.params.scrollbar.hide&&(a[0].style.opacity=0),e.params.watchOverflow&&e.enabled&&t.$el[e.isLocked?"addClass":"removeClass"](e.params.scrollbar.lockClass)}function v(t){return e.isHorizontal()?"touchstart"===t.type||"touchmove"===t.type?t.targetTouches[0].clientX:t.clientX:"touchstart"===t.type||"touchmove"===t.type?t.targetTouches[0].clientY:t.clientY}function w(t){const{scrollbar:s,rtlTranslate:a}=e,{$el:i}=s;let r;r=(v(t)-i.offset()[e.isHorizontal()?"left":"top"]-(null!==n?n:l/2))/(o-l),r=Math.max(Math.min(r,1),0),a&&(r=1-r);const d=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*r;e.updateProgress(d),e.setTranslate(d),e.updateActiveIndex(),e.updateSlidesClasses()}function b(t){const s=e.params.scrollbar,{scrollbar:a,$wrapperEl:r}=e,{$el:l,$dragEl:o}=a;u=!0,n=t.target===o[0]||t.target===o?v(t)-t.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,t.preventDefault(),t.stopPropagation(),r.transition(100),o.transition(100),w(t),clearTimeout(m),l.transition(0),s.hide&&l.css("opacity",1),e.params.cssMode&&e.$wrapperEl.css("scroll-snap-type","none"),i("scrollbarDragStart",t)}function x(t){const{scrollbar:s,$wrapperEl:a}=e,{$el:r,$dragEl:n}=s;u&&(t.preventDefault?t.preventDefault():t.returnValue=!1,w(t),a.transition(0),r.transition(0),n.transition(0),i("scrollbarDragMove",t))}function y(t){const s=e.params.scrollbar,{scrollbar:a,$wrapperEl:r}=e,{$el:n}=a;u&&(u=!1,e.params.cssMode&&(e.$wrapperEl.css("scroll-snap-type",""),r.transition("")),s.hide&&(clearTimeout(m),m=p((()=>{n.css("opacity",0),n.transition(400)}),1e3)),i("scrollbarDragEnd",t),s.snapOnRelease&&e.slideToClosest())}function E(t){const{scrollbar:s,touchEventsTouch:a,touchEventsDesktop:i,params:n,support:l}=e,o=s.$el[0],d=!(!l.passiveListener||!n.passiveListeners)&&{passive:!1,capture:!1},c=!(!l.passiveListener||!n.passiveListeners)&&{passive:!0,capture:!1};if(!o)return;const p="on"===t?"addEventListener":"removeEventListener";l.touch?(o[p](a.start,b,d),o[p](a.move,x,d),o[p](a.end,y,c)):(o[p](i.start,b,d),r[p](i.move,x,d),r[p](i.end,y,c))}function T(){const{scrollbar:t,$el:s}=e;e.params.scrollbar=Y(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const a=e.params.scrollbar;if(!a.el)return;let i=d(a.el);e.params.uniqueNavElements&&"string"==typeof a.el&&i.length>1&&1===s.find(a.el).length&&(i=s.find(a.el));let r=i.find(`.${e.params.scrollbar.dragClass}`);0===r.length&&(r=d(`<div class="${e.params.scrollbar.dragClass}"></div>`),i.append(r)),Object.assign(t,{$el:i,el:i[0],$dragEl:r,dragEl:r[0]}),a.draggable&&e.params.scrollbar.el&&E("on"),i&&i[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)}function C(){e.params.scrollbar.el&&E("off")}t({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}}),e.scrollbar={el:null,dragEl:null,$el:null,$dragEl:null},s("init",(()=>{T(),g(),f()})),s("update resize observerUpdate lock unlock",(()=>{g()})),s("setTranslate",(()=>{f()})),s("setTransition",((t,s)=>{!function(t){e.params.scrollbar.el&&e.scrollbar.el&&e.scrollbar.$dragEl.transition(t)}(s)})),s("enable disable",(()=>{const{$el:t}=e.scrollbar;t&&t[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)})),s("destroy",(()=>{C()})),Object.assign(e.scrollbar,{updateSize:g,setTranslate:f,init:T,destroy:C})},function({swiper:e,extendParams:t,on:s}){t({parallax:{enabled:!1}});const a=(t,s)=>{const{rtl:a}=e,i=d(t),r=a?-1:1,n=i.attr("data-swiper-parallax")||"0";let l=i.attr("data-swiper-parallax-x"),o=i.attr("data-swiper-parallax-y");const c=i.attr("data-swiper-parallax-scale"),p=i.attr("data-swiper-parallax-opacity");if(l||o?(l=l||"0",o=o||"0"):e.isHorizontal()?(l=n,o="0"):(o=n,l="0"),l=l.indexOf("%")>=0?parseInt(l,10)*s*r+"%":l*s*r+"px",o=o.indexOf("%")>=0?parseInt(o,10)*s+"%":o*s+"px",null!=p){const e=p-(p-1)*(1-Math.abs(s));i[0].style.opacity=e}if(null==c)i.transform(`translate3d(${l}, ${o}, 0px)`);else{const e=c-(c-1)*(1-Math.abs(s));i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)}},i=()=>{const{$el:t,slides:s,progress:i,snapGrid:r}=e;t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{a(e,i)})),s.each(((t,s)=>{let n=t.progress;e.params.slidesPerGroup>1&&"auto"!==e.params.slidesPerView&&(n+=Math.ceil(s/2)-i*(r.length-1)),n=Math.min(Math.max(n,-1),1),d(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{a(e,n)}))}))};s("beforeInit",(()=>{e.params.parallax.enabled&&(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)})),s("init",(()=>{e.params.parallax.enabled&&i()})),s("setTranslate",(()=>{e.params.parallax.enabled&&i()})),s("setTransition",((t,s)=>{e.params.parallax.enabled&&((t=e.params.speed)=>{const{$el:s}=e;s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{const s=d(e);let a=parseInt(s.attr("data-swiper-parallax-duration"),10)||t;0===t&&(a=0),s.transition(a)}))})(s)}))},function({swiper:e,extendParams:t,on:s,emit:a}){const i=r();t({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),e.zoom={enabled:!1};let n,l,o,c=1,p=!1;const u={$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},m={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},f={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let g=1;function v(e){if(e.targetTouches.length<2)return 1;const t=e.targetTouches[0].pageX,s=e.targetTouches[0].pageY,a=e.targetTouches[1].pageX,i=e.targetTouches[1].pageY;return Math.sqrt((a-t)**2+(i-s)**2)}function w(t){const s=e.support,a=e.params.zoom;if(l=!1,o=!1,!s.gestures){if("touchstart"!==t.type||"touchstart"===t.type&&t.targetTouches.length<2)return;l=!0,u.scaleStart=v(t)}u.$slideEl&&u.$slideEl.length||(u.$slideEl=d(t.target).closest(`.${e.params.slideClass}`),0===u.$slideEl.length&&(u.$slideEl=e.slides.eq(e.activeIndex)),u.$imageEl=u.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),u.$imageWrapEl=u.$imageEl.parent(`.${a.containerClass}`),u.maxRatio=u.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,0!==u.$imageWrapEl.length)?(u.$imageEl&&u.$imageEl.transition(0),p=!0):u.$imageEl=void 0}function b(t){const s=e.support,a=e.params.zoom,i=e.zoom;if(!s.gestures){if("touchmove"!==t.type||"touchmove"===t.type&&t.targetTouches.length<2)return;o=!0,u.scaleMove=v(t)}u.$imageEl&&0!==u.$imageEl.length?(s.gestures?i.scale=t.scale*c:i.scale=u.scaleMove/u.scaleStart*c,i.scale>u.maxRatio&&(i.scale=u.maxRatio-1+(i.scale-u.maxRatio+1)**.5),i.scale<a.minRatio&&(i.scale=a.minRatio+1-(a.minRatio-i.scale+1)**.5),u.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)):"gesturechange"===t.type&&w(t)}function x(t){const s=e.device,a=e.support,i=e.params.zoom,r=e.zoom;if(!a.gestures){if(!l||!o)return;if("touchend"!==t.type||"touchend"===t.type&&t.changedTouches.length<2&&!s.android)return;l=!1,o=!1}u.$imageEl&&0!==u.$imageEl.length&&(r.scale=Math.max(Math.min(r.scale,u.maxRatio),i.minRatio),u.$imageEl.transition(e.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`),c=r.scale,p=!1,1===r.scale&&(u.$slideEl=void 0))}function y(t){const s=e.zoom;if(!u.$imageEl||0===u.$imageEl.length)return;if(e.allowClick=!1,!m.isTouched||!u.$slideEl)return;m.isMoved||(m.width=u.$imageEl[0].offsetWidth,m.height=u.$imageEl[0].offsetHeight,m.startX=h(u.$imageWrapEl[0],"x")||0,m.startY=h(u.$imageWrapEl[0],"y")||0,u.slideWidth=u.$slideEl[0].offsetWidth,u.slideHeight=u.$slideEl[0].offsetHeight,u.$imageWrapEl.transition(0));const a=m.width*s.scale,i=m.height*s.scale;if(!(a<u.slideWidth&&i<u.slideHeight)){if(m.minX=Math.min(u.slideWidth/2-a/2,0),m.maxX=-m.minX,m.minY=Math.min(u.slideHeight/2-i/2,0),m.maxY=-m.minY,m.touchesCurrent.x="touchmove"===t.type?t.targetTouches[0].pageX:t.pageX,m.touchesCurrent.y="touchmove"===t.type?t.targetTouches[0].pageY:t.pageY,!m.isMoved&&!p){if(e.isHorizontal()&&(Math.floor(m.minX)===Math.floor(m.startX)&&m.touchesCurrent.x<m.touchesStart.x||Math.floor(m.maxX)===Math.floor(m.startX)&&m.touchesCurrent.x>m.touchesStart.x))return void(m.isTouched=!1);if(!e.isHorizontal()&&(Math.floor(m.minY)===Math.floor(m.startY)&&m.touchesCurrent.y<m.touchesStart.y||Math.floor(m.maxY)===Math.floor(m.startY)&&m.touchesCurrent.y>m.touchesStart.y))return void(m.isTouched=!1)}t.cancelable&&t.preventDefault(),t.stopPropagation(),m.isMoved=!0,m.currentX=m.touchesCurrent.x-m.touchesStart.x+m.startX,m.currentY=m.touchesCurrent.y-m.touchesStart.y+m.startY,m.currentX<m.minX&&(m.currentX=m.minX+1-(m.minX-m.currentX+1)**.8),m.currentX>m.maxX&&(m.currentX=m.maxX-1+(m.currentX-m.maxX+1)**.8),m.currentY<m.minY&&(m.currentY=m.minY+1-(m.minY-m.currentY+1)**.8),m.currentY>m.maxY&&(m.currentY=m.maxY-1+(m.currentY-m.maxY+1)**.8),f.prevPositionX||(f.prevPositionX=m.touchesCurrent.x),f.prevPositionY||(f.prevPositionY=m.touchesCurrent.y),f.prevTime||(f.prevTime=Date.now()),f.x=(m.touchesCurrent.x-f.prevPositionX)/(Date.now()-f.prevTime)/2,f.y=(m.touchesCurrent.y-f.prevPositionY)/(Date.now()-f.prevTime)/2,Math.abs(m.touchesCurrent.x-f.prevPositionX)<2&&(f.x=0),Math.abs(m.touchesCurrent.y-f.prevPositionY)<2&&(f.y=0),f.prevPositionX=m.touchesCurrent.x,f.prevPositionY=m.touchesCurrent.y,f.prevTime=Date.now(),u.$imageWrapEl.transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`)}}function E(){const t=e.zoom;u.$slideEl&&e.previousIndex!==e.activeIndex&&(u.$imageEl&&u.$imageEl.transform("translate3d(0,0,0) scale(1)"),u.$imageWrapEl&&u.$imageWrapEl.transform("translate3d(0,0,0)"),t.scale=1,c=1,u.$slideEl=void 0,u.$imageEl=void 0,u.$imageWrapEl=void 0)}function T(t){const s=e.zoom,a=e.params.zoom;if(u.$slideEl||(t&&t.target&&(u.$slideEl=d(t.target).closest(`.${e.params.slideClass}`)),u.$slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?u.$slideEl=e.$wrapperEl.children(`.${e.params.slideActiveClass}`):u.$slideEl=e.slides.eq(e.activeIndex)),u.$imageEl=u.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),u.$imageWrapEl=u.$imageEl.parent(`.${a.containerClass}`)),!u.$imageEl||0===u.$imageEl.length||!u.$imageWrapEl||0===u.$imageWrapEl.length)return;let r,n,l,o,p,h,f,g,v,w,b,x,y,E,T,C,$,S;e.params.cssMode&&(e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.touchAction="none"),u.$slideEl.addClass(`${a.zoomedSlideClass}`),void 0===m.touchesStart.x&&t?(r="touchend"===t.type?t.changedTouches[0].pageX:t.pageX,n="touchend"===t.type?t.changedTouches[0].pageY:t.pageY):(r=m.touchesStart.x,n=m.touchesStart.y),s.scale=u.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,c=u.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,t?($=u.$slideEl[0].offsetWidth,S=u.$slideEl[0].offsetHeight,l=u.$slideEl.offset().left+i.scrollX,o=u.$slideEl.offset().top+i.scrollY,p=l+$/2-r,h=o+S/2-n,v=u.$imageEl[0].offsetWidth,w=u.$imageEl[0].offsetHeight,b=v*s.scale,x=w*s.scale,y=Math.min($/2-b/2,0),E=Math.min(S/2-x/2,0),T=-y,C=-E,f=p*s.scale,g=h*s.scale,f<y&&(f=y),f>T&&(f=T),g<E&&(g=E),g>C&&(g=C)):(f=0,g=0),u.$imageWrapEl.transition(300).transform(`translate3d(${f}px, ${g}px,0)`),u.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)}function C(){const t=e.zoom,s=e.params.zoom;u.$slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?u.$slideEl=e.$wrapperEl.children(`.${e.params.slideActiveClass}`):u.$slideEl=e.slides.eq(e.activeIndex),u.$imageEl=u.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),u.$imageWrapEl=u.$imageEl.parent(`.${s.containerClass}`)),u.$imageEl&&0!==u.$imageEl.length&&u.$imageWrapEl&&0!==u.$imageWrapEl.length&&(e.params.cssMode&&(e.wrapperEl.style.overflow="",e.wrapperEl.style.touchAction=""),t.scale=1,c=1,u.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),u.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),u.$slideEl.removeClass(`${s.zoomedSlideClass}`),u.$slideEl=void 0)}function $(t){const s=e.zoom;s.scale&&1!==s.scale?C():T(t)}function S(){const t=e.support;return{passiveListener:!("touchstart"!==e.touchEvents.start||!t.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1},activeListenerWithCapture:!t.passiveListener||{passive:!1,capture:!0}}}function M(){return`.${e.params.slideClass}`}function P(t){const{passiveListener:s}=S(),a=M();e.$wrapperEl[t]("gesturestart",a,w,s),e.$wrapperEl[t]("gesturechange",a,b,s),e.$wrapperEl[t]("gestureend",a,x,s)}function k(){n||(n=!0,P("on"))}function z(){n&&(n=!1,P("off"))}function O(){const t=e.zoom;if(t.enabled)return;t.enabled=!0;const s=e.support,{passiveListener:a,activeListenerWithCapture:i}=S(),r=M();s.gestures?(e.$wrapperEl.on(e.touchEvents.start,k,a),e.$wrapperEl.on(e.touchEvents.end,z,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.on(e.touchEvents.start,r,w,a),e.$wrapperEl.on(e.touchEvents.move,r,b,i),e.$wrapperEl.on(e.touchEvents.end,r,x,a),e.touchEvents.cancel&&e.$wrapperEl.on(e.touchEvents.cancel,r,x,a)),e.$wrapperEl.on(e.touchEvents.move,`.${e.params.zoom.containerClass}`,y,i)}function I(){const t=e.zoom;if(!t.enabled)return;const s=e.support;t.enabled=!1;const{passiveListener:a,activeListenerWithCapture:i}=S(),r=M();s.gestures?(e.$wrapperEl.off(e.touchEvents.start,k,a),e.$wrapperEl.off(e.touchEvents.end,z,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.off(e.touchEvents.start,r,w,a),e.$wrapperEl.off(e.touchEvents.move,r,b,i),e.$wrapperEl.off(e.touchEvents.end,r,x,a),e.touchEvents.cancel&&e.$wrapperEl.off(e.touchEvents.cancel,r,x,a)),e.$wrapperEl.off(e.touchEvents.move,`.${e.params.zoom.containerClass}`,y,i)}Object.defineProperty(e.zoom,"scale",{get:()=>g,set(e){if(g!==e){const t=u.$imageEl?u.$imageEl[0]:void 0,s=u.$slideEl?u.$slideEl[0]:void 0;a("zoomChange",e,t,s)}g=e}}),s("init",(()=>{e.params.zoom.enabled&&O()})),s("destroy",(()=>{I()})),s("touchStart",((t,s)=>{e.zoom.enabled&&function(t){const s=e.device;u.$imageEl&&0!==u.$imageEl.length&&(m.isTouched||(s.android&&t.cancelable&&t.preventDefault(),m.isTouched=!0,m.touchesStart.x="touchstart"===t.type?t.targetTouches[0].pageX:t.pageX,m.touchesStart.y="touchstart"===t.type?t.targetTouches[0].pageY:t.pageY))}(s)})),s("touchEnd",((t,s)=>{e.zoom.enabled&&function(){const t=e.zoom;if(!u.$imageEl||0===u.$imageEl.length)return;if(!m.isTouched||!m.isMoved)return m.isTouched=!1,void(m.isMoved=!1);m.isTouched=!1,m.isMoved=!1;let s=300,a=300;const i=f.x*s,r=m.currentX+i,n=f.y*a,l=m.currentY+n;0!==f.x&&(s=Math.abs((r-m.currentX)/f.x)),0!==f.y&&(a=Math.abs((l-m.currentY)/f.y));const o=Math.max(s,a);m.currentX=r,m.currentY=l;const d=m.width*t.scale,c=m.height*t.scale;m.minX=Math.min(u.slideWidth/2-d/2,0),m.maxX=-m.minX,m.minY=Math.min(u.slideHeight/2-c/2,0),m.maxY=-m.minY,m.currentX=Math.max(Math.min(m.currentX,m.maxX),m.minX),m.currentY=Math.max(Math.min(m.currentY,m.maxY),m.minY),u.$imageWrapEl.transition(o).transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`)}()})),s("doubleTap",((t,s)=>{!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&$(s)})),s("transitionEnd",(()=>{e.zoom.enabled&&e.params.zoom.enabled&&E()})),s("slideChange",(()=>{e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&E()})),Object.assign(e.zoom,{enable:O,disable:I,in:T,out:C,toggle:$})},function({swiper:e,extendParams:t,on:s,emit:a}){t({lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}}),e.lazy={};let i=!1,n=!1;function l(t,s=!0){const i=e.params.lazy;if(void 0===t)return;if(0===e.slides.length)return;const r=e.virtual&&e.params.virtual.enabled?e.$wrapperEl.children(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`):e.slides.eq(t),n=r.find(`.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`);!r.hasClass(i.elementClass)||r.hasClass(i.loadedClass)||r.hasClass(i.loadingClass)||n.push(r[0]),0!==n.length&&n.each((t=>{const n=d(t);n.addClass(i.loadingClass);const o=n.attr("data-background"),c=n.attr("data-src"),p=n.attr("data-srcset"),u=n.attr("data-sizes"),h=n.parent("picture");e.loadImage(n[0],c||o,p,u,!1,(()=>{if(null!=e&&e&&(!e||e.params)&&!e.destroyed){if(o?(n.css("background-image",`url("${o}")`),n.removeAttr("data-background")):(p&&(n.attr("srcset",p),n.removeAttr("data-srcset")),u&&(n.attr("sizes",u),n.removeAttr("data-sizes")),h.length&&h.children("source").each((e=>{const t=d(e);t.attr("data-srcset")&&(t.attr("srcset",t.attr("data-srcset")),t.removeAttr("data-srcset"))})),c&&(n.attr("src",c),n.removeAttr("data-src"))),n.addClass(i.loadedClass).removeClass(i.loadingClass),r.find(`.${i.preloaderClass}`).remove(),e.params.loop&&s){const t=r.attr("data-swiper-slide-index");if(r.hasClass(e.params.slideDuplicateClass)){l(e.$wrapperEl.children(`[data-swiper-slide-index="${t}"]:not(.${e.params.slideDuplicateClass})`).index(),!1)}else{l(e.$wrapperEl.children(`.${e.params.slideDuplicateClass}[data-swiper-slide-index="${t}"]`).index(),!1)}}a("lazyImageReady",r[0],n[0]),e.params.autoHeight&&e.updateAutoHeight()}})),a("lazyImageLoad",r[0],n[0])}))}function o(){const{$wrapperEl:t,params:s,slides:a,activeIndex:i}=e,r=e.virtual&&s.virtual.enabled,o=s.lazy;let c=s.slidesPerView;function p(e){if(r){if(t.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]`).length)return!0}else if(a[e])return!0;return!1}function u(e){return r?d(e).attr("data-swiper-slide-index"):d(e).index()}if("auto"===c&&(c=0),n||(n=!0),e.params.watchSlidesProgress)t.children(`.${s.slideVisibleClass}`).each((e=>{l(r?d(e).attr("data-swiper-slide-index"):d(e).index())}));else if(c>1)for(let e=i;e<i+c;e+=1)p(e)&&l(e);else l(i);if(o.loadPrevNext)if(c>1||o.loadPrevNextAmount&&o.loadPrevNextAmount>1){const e=o.loadPrevNextAmount,t=c,s=Math.min(i+t+Math.max(e,t),a.length),r=Math.max(i-Math.max(t,e),0);for(let e=i+c;e<s;e+=1)p(e)&&l(e);for(let e=r;e<i;e+=1)p(e)&&l(e)}else{const e=t.children(`.${s.slideNextClass}`);e.length>0&&l(u(e));const a=t.children(`.${s.slidePrevClass}`);a.length>0&&l(u(a))}}function c(){const t=r();if(!e||e.destroyed)return;const s=e.params.lazy.scrollingElement?d(e.params.lazy.scrollingElement):d(t),a=s[0]===t,n=a?t.innerWidth:s[0].offsetWidth,l=a?t.innerHeight:s[0].offsetHeight,p=e.$el.offset(),{rtlTranslate:u}=e;let h=!1;u&&(p.left-=e.$el[0].scrollLeft);const m=[[p.left,p.top],[p.left+e.width,p.top],[p.left,p.top+e.height],[p.left+e.width,p.top+e.height]];for(let e=0;e<m.length;e+=1){const t=m[e];if(t[0]>=0&&t[0]<=n&&t[1]>=0&&t[1]<=l){if(0===t[0]&&0===t[1])continue;h=!0}}const f=!("touchstart"!==e.touchEvents.start||!e.support.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1};h?(o(),s.off("scroll",c,f)):i||(i=!0,s.on("scroll",c,f))}s("beforeInit",(()=>{e.params.lazy.enabled&&e.params.preloadImages&&(e.params.preloadImages=!1)})),s("init",(()=>{e.params.lazy.enabled&&(e.params.lazy.checkInView?c():o())})),s("scroll",(()=>{e.params.freeMode&&e.params.freeMode.enabled&&!e.params.freeMode.sticky&&o()})),s("scrollbarDragMove resize _freeModeNoMomentumRelease",(()=>{e.params.lazy.enabled&&(e.params.lazy.checkInView?c():o())})),s("transitionStart",(()=>{e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!n)&&(e.params.lazy.checkInView?c():o())})),s("transitionEnd",(()=>{e.params.lazy.enabled&&!e.params.lazy.loadOnTransitionStart&&(e.params.lazy.checkInView?c():o())})),s("slideChange",(()=>{const{lazy:t,cssMode:s,watchSlidesProgress:a,touchReleaseOnEdges:i,resistanceRatio:r}=e.params;t.enabled&&(s||a&&(i||0===r))&&o()})),Object.assign(e.lazy,{load:o,loadInSlide:l})},function({swiper:e,extendParams:t,on:s}){function a(e,t){const s=function(){let e,t,s;return(a,i)=>{for(t=-1,e=a.length;e-t>1;)s=e+t>>1,a[s]<=i?t=s:e=s;return e}}();let a,i;return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(i=s(this.x,e),a=i-1,(e-this.x[a])*(this.y[i]-this.y[a])/(this.x[i]-this.x[a])+this.y[a]):0},this}function i(){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)}t({controller:{control:void 0,inverse:!1,by:"slide"}}),e.controller={control:void 0},s("beforeInit",(()=>{e.controller.control=e.params.controller.control})),s("update",(()=>{i()})),s("resize",(()=>{i()})),s("observerUpdate",(()=>{i()})),s("setTranslate",((t,s,a)=>{e.controller.control&&e.controller.setTranslate(s,a)})),s("setTransition",((t,s,a)=>{e.controller.control&&e.controller.setTransition(s,a)})),Object.assign(e.controller,{setTranslate:function(t,s){const i=e.controller.control;let r,n;const l=e.constructor;function o(t){const s=e.rtlTranslate?-e.translate:e.translate;"slide"===e.params.controller.by&&(!function(t){e.controller.spline||(e.controller.spline=e.params.loop?new a(e.slidesGrid,t.slidesGrid):new a(e.snapGrid,t.snapGrid))}(t),n=-e.controller.spline.interpolate(-s)),n&&"container"!==e.params.controller.by||(r=(t.maxTranslate()-t.minTranslate())/(e.maxTranslate()-e.minTranslate()),n=(s-e.minTranslate())*r+t.minTranslate()),e.params.controller.inverse&&(n=t.maxTranslate()-n),t.updateProgress(n),t.setTranslate(n,e),t.updateActiveIndex(),t.updateSlidesClasses()}if(Array.isArray(i))for(let e=0;e<i.length;e+=1)i[e]!==s&&i[e]instanceof l&&o(i[e]);else i instanceof l&&s!==i&&o(i)},setTransition:function(t,s){const a=e.constructor,i=e.controller.control;let r;function n(s){s.setTransition(t,e),0!==t&&(s.transitionStart(),s.params.autoHeight&&p((()=>{s.updateAutoHeight()})),s.$wrapperEl.transitionEnd((()=>{i&&(s.params.loop&&"slide"===e.params.controller.by&&s.loopFix(),s.transitionEnd())})))}if(Array.isArray(i))for(r=0;r<i.length;r+=1)i[r]!==s&&i[r]instanceof a&&n(i[r]);else i instanceof a&&s!==i&&n(i)}})},function({swiper:e,extendParams:t,on:s}){t({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group"}});let a=null;function i(e){const t=a;0!==t.length&&(t.html(""),t.html(e))}function r(e){e.attr("tabIndex","0")}function n(e){e.attr("tabIndex","-1")}function l(e,t){e.attr("role",t)}function o(e,t){e.attr("aria-roledescription",t)}function c(e,t){e.attr("aria-label",t)}function p(e){e.attr("aria-disabled",!0)}function u(e){e.attr("aria-disabled",!1)}function h(t){if(13!==t.keyCode&&32!==t.keyCode)return;const s=e.params.a11y,a=d(t.target);e.navigation&&e.navigation.$nextEl&&a.is(e.navigation.$nextEl)&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?i(s.lastSlideMessage):i(s.nextSlideMessage)),e.navigation&&e.navigation.$prevEl&&a.is(e.navigation.$prevEl)&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?i(s.firstSlideMessage):i(s.prevSlideMessage)),e.pagination&&a.is(W(e.params.pagination.bulletClass))&&a[0].click()}function m(){if(e.params.loop||!e.navigation)return;const{$nextEl:t,$prevEl:s}=e.navigation;s&&s.length>0&&(e.isBeginning?(p(s),n(s)):(u(s),r(s))),t&&t.length>0&&(e.isEnd?(p(t),n(t)):(u(t),r(t)))}function f(){return e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length}const g=(e,t,s)=>{r(e),"BUTTON"!==e[0].tagName&&(l(e,"button"),e.on("keydown",h)),c(e,s),function(e,t){e.attr("aria-controls",t)}(e,t)};function v(){const t=e.params.a11y;e.$el.append(a);const s=e.$el;t.containerRoleDescriptionMessage&&o(s,t.containerRoleDescriptionMessage),t.containerMessage&&c(s,t.containerMessage);const i=e.$wrapperEl,r=i.attr("id")||`swiper-wrapper-${function(e=16){return"x".repeat(e).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}(16)}`,n=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";var p;p=r,i.attr("id",p),function(e,t){e.attr("aria-live",t)}(i,n),t.itemRoleDescriptionMessage&&o(d(e.slides),t.itemRoleDescriptionMessage),l(d(e.slides),t.slideRole);const u=e.params.loop?e.slides.filter((t=>!t.classList.contains(e.params.slideDuplicateClass))).length:e.slides.length;let m,v;e.slides.each(((s,a)=>{const i=d(s),r=e.params.loop?parseInt(i.attr("data-swiper-slide-index"),10):a;c(i,t.slideLabelMessage.replace(/\{\{index\}\}/,r+1).replace(/\{\{slidesLength\}\}/,u))})),e.navigation&&e.navigation.$nextEl&&(m=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(v=e.navigation.$prevEl),m&&m.length&&g(m,r,t.nextSlideMessage),v&&v.length&&g(v,r,t.prevSlideMessage),f()&&e.pagination.$el.on("keydown",W(e.params.pagination.bulletClass),h)}s("beforeInit",(()=>{a=d(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)})),s("afterInit",(()=>{e.params.a11y.enabled&&(v(),m())})),s("toEdge",(()=>{e.params.a11y.enabled&&m()})),s("fromEdge",(()=>{e.params.a11y.enabled&&m()})),s("paginationUpdate",(()=>{e.params.a11y.enabled&&function(){const t=e.params.a11y;f()&&e.pagination.bullets.each((s=>{const a=d(s);r(a),e.params.pagination.renderBullet||(l(a,"button"),c(a,t.paginationBulletMessage.replace(/\{\{index\}\}/,a.index()+1)))}))}()})),s("destroy",(()=>{e.params.a11y.enabled&&function(){let t,s;a&&a.length>0&&a.remove(),e.navigation&&e.navigation.$nextEl&&(t=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(s=e.navigation.$prevEl),t&&t.off("keydown",h),s&&s.off("keydown",h),f()&&e.pagination.$el.off("keydown",W(e.params.pagination.bulletClass),h)}()}))},function({swiper:e,extendParams:t,on:s}){t({history:{enabled:!1,root:"",replaceState:!1,key:"slides"}});let a=!1,i={};const n=e=>e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),l=e=>{const t=r();let s;s=e?new URL(e):t.location;const a=s.pathname.slice(1).split("/").filter((e=>""!==e)),i=a.length;return{key:a[i-2],value:a[i-1]}},o=(t,s)=>{const i=r();if(!a||!e.params.history.enabled)return;let l;l=e.params.url?new URL(e.params.url):i.location;const o=e.slides.eq(s);let d=n(o.attr("data-history"));if(e.params.history.root.length>0){let s=e.params.history.root;"/"===s[s.length-1]&&(s=s.slice(0,s.length-1)),d=`${s}/${t}/${d}`}else l.pathname.includes(t)||(d=`${t}/${d}`);const c=i.history.state;c&&c.value===d||(e.params.history.replaceState?i.history.replaceState({value:d},null,d):i.history.pushState({value:d},null,d))},d=(t,s,a)=>{if(s)for(let i=0,r=e.slides.length;i<r;i+=1){const r=e.slides.eq(i);if(n(r.attr("data-history"))===s&&!r.hasClass(e.params.slideDuplicateClass)){const s=r.index();e.slideTo(s,t,a)}}else e.slideTo(0,t,a)},c=()=>{i=l(e.params.url),d(e.params.speed,e.paths.value,!1)};s("init",(()=>{e.params.history.enabled&&(()=>{const t=r();if(e.params.history){if(!t.history||!t.history.pushState)return e.params.history.enabled=!1,void(e.params.hashNavigation.enabled=!0);a=!0,i=l(e.params.url),(i.key||i.value)&&(d(0,i.value,e.params.runCallbacksOnInit),e.params.history.replaceState||t.addEventListener("popstate",c))}})()})),s("destroy",(()=>{e.params.history.enabled&&(()=>{const t=r();e.params.history.replaceState||t.removeEventListener("popstate",c)})()})),s("transitionEnd _freeModeNoMomentumRelease",(()=>{a&&o(e.params.history.key,e.activeIndex)})),s("slideChange",(()=>{a&&e.params.cssMode&&o(e.params.history.key,e.activeIndex)}))},function({swiper:e,extendParams:t,emit:s,on:i}){let n=!1;const l=a(),o=r();t({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}});const c=()=>{s("hashChange");const t=l.location.hash.replace("#","");if(t!==e.slides.eq(e.activeIndex).attr("data-hash")){const s=e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();if(void 0===s)return;e.slideTo(s)}},p=()=>{if(n&&e.params.hashNavigation.enabled)if(e.params.hashNavigation.replaceState&&o.history&&o.history.replaceState)o.history.replaceState(null,null,`#${e.slides.eq(e.activeIndex).attr("data-hash")}`||""),s("hashSet");else{const t=e.slides.eq(e.activeIndex),a=t.attr("data-hash")||t.attr("data-history");l.location.hash=a||"",s("hashSet")}};i("init",(()=>{e.params.hashNavigation.enabled&&(()=>{if(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)return;n=!0;const t=l.location.hash.replace("#","");if(t){const s=0;for(let a=0,i=e.slides.length;a<i;a+=1){const i=e.slides.eq(a);if((i.attr("data-hash")||i.attr("data-history"))===t&&!i.hasClass(e.params.slideDuplicateClass)){const t=i.index();e.slideTo(t,s,e.params.runCallbacksOnInit,!0)}}}e.params.hashNavigation.watchState&&d(o).on("hashchange",c)})()})),i("destroy",(()=>{e.params.hashNavigation.enabled&&e.params.hashNavigation.watchState&&d(o).off("hashchange",c)})),i("transitionEnd _freeModeNoMomentumRelease",(()=>{n&&p()})),i("slideChange",(()=>{n&&e.params.cssMode&&p()}))},function({swiper:e,extendParams:t,on:s,emit:i}){let r;function n(){const t=e.slides.eq(e.activeIndex);let s=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(s=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(r),r=p((()=>{let t;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),t=e.slidePrev(e.params.speed,!0,!0),i("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?o():(t=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),i("autoplay")):(t=e.slidePrev(e.params.speed,!0,!0),i("autoplay")):e.params.loop?(e.loopFix(),t=e.slideNext(e.params.speed,!0,!0),i("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?o():(t=e.slideTo(0,e.params.speed,!0,!0),i("autoplay")):(t=e.slideNext(e.params.speed,!0,!0),i("autoplay")),(e.params.cssMode&&e.autoplay.running||!1===t)&&n()}),s)}function l(){return void 0===r&&(!e.autoplay.running&&(e.autoplay.running=!0,i("autoplayStart"),n(),!0))}function o(){return!!e.autoplay.running&&(void 0!==r&&(r&&(clearTimeout(r),r=void 0),e.autoplay.running=!1,i("autoplayStop"),!0))}function d(t){e.autoplay.running&&(e.autoplay.paused||(r&&clearTimeout(r),e.autoplay.paused=!0,0!==t&&e.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach((t=>{e.$wrapperEl[0].addEventListener(t,u)})):(e.autoplay.paused=!1,n())))}function c(){const t=a();"hidden"===t.visibilityState&&e.autoplay.running&&d(),"visible"===t.visibilityState&&e.autoplay.paused&&(n(),e.autoplay.paused=!1)}function u(t){e&&!e.destroyed&&e.$wrapperEl&&t.target===e.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach((t=>{e.$wrapperEl[0].removeEventListener(t,u)})),e.autoplay.paused=!1,e.autoplay.running?n():o())}function h(){e.params.autoplay.disableOnInteraction?o():d(),["transitionend","webkitTransitionEnd"].forEach((t=>{e.$wrapperEl[0].removeEventListener(t,u)}))}function m(){e.params.autoplay.disableOnInteraction||(e.autoplay.paused=!1,n())}e.autoplay={running:!1,paused:!1},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}}),s("init",(()=>{if(e.params.autoplay.enabled){l();a().addEventListener("visibilitychange",c),e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",h),e.$el.on("mouseleave",m))}})),s("beforeTransitionStart",((t,s,a)=>{e.autoplay.running&&(a||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(s):o())})),s("sliderFirstMove",(()=>{e.autoplay.running&&(e.params.autoplay.disableOnInteraction?o():d())})),s("touchEnd",(()=>{e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&n()})),s("destroy",(()=>{e.$el.off("mouseenter",h),e.$el.off("mouseleave",m),e.autoplay.running&&o();a().removeEventListener("visibilitychange",c)})),Object.assign(e.autoplay,{pause:d,run:n,start:l,stop:o})},function({swiper:e,extendParams:t,on:s}){t({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let a=!1,i=!1;function r(){const t=e.thumbs.swiper;if(!t)return;const s=t.clickedIndex,a=t.clickedSlide;if(a&&d(a).hasClass(e.params.thumbs.slideThumbActiveClass))return;if(null==s)return;let i;if(i=t.params.loop?parseInt(d(t.clickedSlide).attr("data-swiper-slide-index"),10):s,e.params.loop){let t=e.activeIndex;e.slides.eq(t).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,t=e.activeIndex);const s=e.slides.eq(t).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),a=e.slides.eq(t).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();i=void 0===s?a:void 0===a?s:a-t<t-s?a:s}e.slideTo(i)}function n(){const{thumbs:t}=e.params;if(a)return!1;a=!0;const s=e.constructor;if(t.swiper instanceof s)e.thumbs.swiper=t.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(m(t.swiper)){const a=Object.assign({},t.swiper);Object.assign(a,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new s(a),i=!0}return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",r),!0}function l(t){const s=e.thumbs.swiper;if(!s)return;const a="auto"===s.params.slidesPerView?s.slidesPerViewDynamic():s.params.slidesPerView,i=e.params.thumbs.autoScrollOffset,r=i&&!s.params.loop;if(e.realIndex!==s.realIndex||r){let n,l,o=s.activeIndex;if(s.params.loop){s.slides.eq(o).hasClass(s.params.slideDuplicateClass)&&(s.loopFix(),s._clientLeft=s.$wrapperEl[0].clientLeft,o=s.activeIndex);const t=s.slides.eq(o).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),a=s.slides.eq(o).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();n=void 0===t?a:void 0===a?t:a-o==o-t?s.params.slidesPerGroup>1?a:o:a-o<o-t?a:t,l=e.activeIndex>e.previousIndex?"next":"prev"}else n=e.realIndex,l=n>e.previousIndex?"next":"prev";r&&(n+="next"===l?i:-1*i),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(n)<0&&(s.params.centeredSlides?n=n>o?n-Math.floor(a/2)+1:n+Math.floor(a/2)-1:n>o&&s.params.slidesPerGroup,s.slideTo(n,t?0:void 0))}let n=1;const l=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(n=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(n=1),n=Math.floor(n),s.slides.removeClass(l),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let t=0;t<n;t+=1)s.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+t}"]`).addClass(l);else for(let t=0;t<n;t+=1)s.slides.eq(e.realIndex+t).addClass(l)}e.thumbs={swiper:null},s("beforeInit",(()=>{const{thumbs:t}=e.params;t&&t.swiper&&(n(),l(!0))})),s("slideChange update resize observerUpdate",(()=>{e.thumbs.swiper&&l()})),s("setTransition",((t,s)=>{const a=e.thumbs.swiper;a&&a.setTransition(s)})),s("beforeDestroy",(()=>{const t=e.thumbs.swiper;t&&i&&t&&t.destroy()})),Object.assign(e.thumbs,{init:n,update:l})},function({swiper:e,extendParams:t,emit:s,once:a}){t({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(e,{freeMode:{onTouchMove:function(){const{touchEventsData:t,touches:s}=e;0===t.velocities.length&&t.velocities.push({position:s[e.isHorizontal()?"startX":"startY"],time:t.touchStartTime}),t.velocities.push({position:s[e.isHorizontal()?"currentX":"currentY"],time:u()})},onTouchEnd:function({currentPos:t}){const{params:i,$wrapperEl:r,rtlTranslate:n,snapGrid:l,touchEventsData:o}=e,d=u()-o.touchStartTime;if(t<-e.minTranslate())e.slideTo(e.activeIndex);else if(t>-e.maxTranslate())e.slides.length<l.length?e.slideTo(l.length-1):e.slideTo(e.slides.length-1);else{if(i.freeMode.momentum){if(o.velocities.length>1){const t=o.velocities.pop(),s=o.velocities.pop(),a=t.position-s.position,r=t.time-s.time;e.velocity=a/r,e.velocity/=2,Math.abs(e.velocity)<i.freeMode.minimumVelocity&&(e.velocity=0),(r>150||u()-t.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=i.freeMode.momentumVelocityRatio,o.velocities.length=0;let t=1e3*i.freeMode.momentumRatio;const d=e.velocity*t;let c=e.translate+d;n&&(c=-c);let p,h=!1;const m=20*Math.abs(e.velocity)*i.freeMode.momentumBounceRatio;let f;if(c<e.maxTranslate())i.freeMode.momentumBounce?(c+e.maxTranslate()<-m&&(c=e.maxTranslate()-m),p=e.maxTranslate(),h=!0,o.allowMomentumBounce=!0):c=e.maxTranslate(),i.loop&&i.centeredSlides&&(f=!0);else if(c>e.minTranslate())i.freeMode.momentumBounce?(c-e.minTranslate()>m&&(c=e.minTranslate()+m),p=e.minTranslate(),h=!0,o.allowMomentumBounce=!0):c=e.minTranslate(),i.loop&&i.centeredSlides&&(f=!0);else if(i.freeMode.sticky){let t;for(let e=0;e<l.length;e+=1)if(l[e]>-c){t=e;break}c=Math.abs(l[t]-c)<Math.abs(l[t-1]-c)||"next"===e.swipeDirection?l[t]:l[t-1],c=-c}if(f&&a("transitionEnd",(()=>{e.loopFix()})),0!==e.velocity){if(t=n?Math.abs((-c-e.translate)/e.velocity):Math.abs((c-e.translate)/e.velocity),i.freeMode.sticky){const s=Math.abs((n?-c:c)-e.translate),a=e.slidesSizesGrid[e.activeIndex];t=s<a?i.speed:s<2*a?1.5*i.speed:2.5*i.speed}}else if(i.freeMode.sticky)return void e.slideToClosest();i.freeMode.momentumBounce&&h?(e.updateProgress(p),e.setTransition(t),e.setTranslate(c),e.transitionStart(!0,e.swipeDirection),e.animating=!0,r.transitionEnd((()=>{e&&!e.destroyed&&o.allowMomentumBounce&&(s("momentumBounce"),e.setTransition(i.speed),setTimeout((()=>{e.setTranslate(p),r.transitionEnd((()=>{e&&!e.destroyed&&e.transitionEnd()}))}),0))}))):e.velocity?(s("_freeModeNoMomentumRelease"),e.updateProgress(c),e.setTransition(t),e.setTranslate(c),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,r.transitionEnd((()=>{e&&!e.destroyed&&e.transitionEnd()})))):e.updateProgress(c),e.updateActiveIndex(),e.updateSlidesClasses()}else{if(i.freeMode.sticky)return void e.slideToClosest();i.freeMode&&s("_freeModeNoMomentumRelease")}(!i.freeMode.momentum||d>=i.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}}}})},function({swiper:e,extendParams:t}){let s,a,i;t({grid:{rows:1,fill:"column"}}),e.grid={initSlides:t=>{const{slidesPerView:r}=e.params,{rows:n,fill:l}=e.params.grid;a=s/n,i=Math.floor(t/n),s=Math.floor(t/n)===t/n?t:Math.ceil(t/n)*n,"auto"!==r&&"row"===l&&(s=Math.max(s,r*n))},updateSlide:(t,r,n,l)=>{const{slidesPerGroup:o,spaceBetween:d}=e.params,{rows:c,fill:p}=e.params.grid;let u,h,m;if("row"===p&&o>1){const e=Math.floor(t/(o*c)),a=t-c*o*e,i=0===e?o:Math.min(Math.ceil((n-e*c*o)/c),o);m=Math.floor(a/i),h=a-m*i+e*o,u=h+m*s/c,r.css({"-webkit-order":u,order:u})}else"column"===p?(h=Math.floor(t/c),m=t-h*c,(h>i||h===i&&m===c-1)&&(m+=1,m>=c&&(m=0,h+=1))):(m=Math.floor(t/a),h=t-m*a);r.css(l("margin-top"),0!==m?d&&`${d}px`:"")},updateWrapperSize:(t,a,i)=>{const{spaceBetween:r,centeredSlides:n,roundLengths:l}=e.params,{rows:o}=e.params.grid;if(e.virtualSize=(t+r)*s,e.virtualSize=Math.ceil(e.virtualSize/o)-r,e.$wrapperEl.css({[i("width")]:`${e.virtualSize+r}px`}),n){a.splice(0,a.length);const t=[];for(let s=0;s<a.length;s+=1){let i=a[s];l&&(i=Math.floor(i)),a[s]<e.virtualSize+a[0]&&t.push(i)}a.push(...t)}}}},function({swiper:e}){Object.assign(e,{appendSlide:R.bind(e),prependSlide:j.bind(e),addSlide:_.bind(e),removeSlide:V.bind(e),removeAllSlides:q.bind(e)})},function({swiper:e,extendParams:t,on:s}){t({fadeEffect:{crossFade:!1,transformEl:null}}),F({effect:"fade",swiper:e,on:s,setTranslate:()=>{const{slides:t}=e,s=e.params.fadeEffect;for(let a=0;a<t.length;a+=1){const t=e.slides.eq(a);let i=-t[0].swiperSlideOffset;e.params.virtualTranslate||(i-=e.translate);let r=0;e.isHorizontal()||(r=i,i=0);const n=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(t[0].progress),0):1+Math.min(Math.max(t[0].progress,-1),0);U(s,t).css({opacity:n}).transform(`translate3d(${i}px, ${r}px, 0px)`)}},setTransition:t=>{const{transformEl:s}=e.params.fadeEffect;(s?e.slides.find(s):e.slides).transition(t),K({swiper:e,duration:t,transformEl:s,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})},function({swiper:e,extendParams:t,on:s}){t({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}}),F({effect:"cube",swiper:e,on:s,setTranslate:()=>{const{$el:t,$wrapperEl:s,slides:a,width:i,height:r,rtlTranslate:n,size:l,browser:o}=e,c=e.params.cubeEffect,p=e.isHorizontal(),u=e.virtual&&e.params.virtual.enabled;let h,m=0;c.shadow&&(p?(h=s.find(".swiper-cube-shadow"),0===h.length&&(h=d('<div class="swiper-cube-shadow"></div>'),s.append(h)),h.css({height:`${i}px`})):(h=t.find(".swiper-cube-shadow"),0===h.length&&(h=d('<div class="swiper-cube-shadow"></div>'),t.append(h))));for(let e=0;e<a.length;e+=1){const t=a.eq(e);let s=e;u&&(s=parseInt(t.attr("data-swiper-slide-index"),10));let i=90*s,r=Math.floor(i/360);n&&(i=-i,r=Math.floor(-i/360));const o=Math.max(Math.min(t[0].progress,1),-1);let h=0,f=0,g=0;s%4==0?(h=4*-r*l,g=0):(s-1)%4==0?(h=0,g=4*-r*l):(s-2)%4==0?(h=l+4*r*l,g=l):(s-3)%4==0&&(h=-l,g=3*l+4*l*r),n&&(h=-h),p||(f=h,h=0);const v=`rotateX(${p?0:-i}deg) rotateY(${p?i:0}deg) translate3d(${h}px, ${f}px, ${g}px)`;if(o<=1&&o>-1&&(m=90*s+90*o,n&&(m=90*-s-90*o)),t.transform(v),c.slideShadows){let e=p?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),s=p?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===e.length&&(e=d(`<div class="swiper-slide-shadow-${p?"left":"top"}"></div>`),t.append(e)),0===s.length&&(s=d(`<div class="swiper-slide-shadow-${p?"right":"bottom"}"></div>`),t.append(s)),e.length&&(e[0].style.opacity=Math.max(-o,0)),s.length&&(s[0].style.opacity=Math.max(o,0))}}if(s.css({"-webkit-transform-origin":`50% 50% -${l/2}px`,"transform-origin":`50% 50% -${l/2}px`}),c.shadow)if(p)h.transform(`translate3d(0px, ${i/2+c.shadowOffset}px, ${-i/2}px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`);else{const e=Math.abs(m)-90*Math.floor(Math.abs(m)/90),t=1.5-(Math.sin(2*e*Math.PI/360)/2+Math.cos(2*e*Math.PI/360)/2),s=c.shadowScale,a=c.shadowScale/t,i=c.shadowOffset;h.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${r/2+i}px, ${-r/2/a}px) rotateX(-90deg)`)}const f=o.isSafari||o.isWebView?-l/2:0;s.transform(`translate3d(0px,0,${f}px) rotateX(${e.isHorizontal()?0:m}deg) rotateY(${e.isHorizontal()?-m:0}deg)`)},setTransition:t=>{const{$el:s,slides:a}=e;a.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),e.params.cubeEffect.shadow&&!e.isHorizontal()&&s.find(".swiper-cube-shadow").transition(t)},perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})},function({swiper:e,extendParams:t,on:s}){t({flipEffect:{slideShadows:!0,limitRotation:!0,transformEl:null}}),F({effect:"flip",swiper:e,on:s,setTranslate:()=>{const{slides:t,rtlTranslate:s}=e,a=e.params.flipEffect;for(let i=0;i<t.length;i+=1){const r=t.eq(i);let n=r[0].progress;e.params.flipEffect.limitRotation&&(n=Math.max(Math.min(r[0].progress,1),-1));const l=r[0].swiperSlideOffset;let o=-180*n,d=0,c=e.params.cssMode?-l-e.translate:-l,p=0;if(e.isHorizontal()?s&&(o=-o):(p=c,c=0,d=-o,o=0),r[0].style.zIndex=-Math.abs(Math.round(n))+t.length,a.slideShadows){let t=e.isHorizontal()?r.find(".swiper-slide-shadow-left"):r.find(".swiper-slide-shadow-top"),s=e.isHorizontal()?r.find(".swiper-slide-shadow-right"):r.find(".swiper-slide-shadow-bottom");0===t.length&&(t=Z(a,r,e.isHorizontal()?"left":"top")),0===s.length&&(s=Z(a,r,e.isHorizontal()?"right":"bottom")),t.length&&(t[0].style.opacity=Math.max(-n,0)),s.length&&(s[0].style.opacity=Math.max(n,0))}const u=`translate3d(${c}px, ${p}px, 0px) rotateX(${d}deg) rotateY(${o}deg)`;U(a,r).transform(u)}},setTransition:t=>{const{transformEl:s}=e.params.flipEffect;(s?e.slides.find(s):e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),K({swiper:e,duration:t,transformEl:s})},perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})},function({swiper:e,extendParams:t,on:s}){t({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}}),F({effect:"coverflow",swiper:e,on:s,setTranslate:()=>{const{width:t,height:s,slides:a,slidesSizesGrid:i}=e,r=e.params.coverflowEffect,n=e.isHorizontal(),l=e.translate,o=n?t/2-l:s/2-l,d=n?r.rotate:-r.rotate,c=r.depth;for(let e=0,t=a.length;e<t;e+=1){const t=a.eq(e),s=i[e],l=(o-t[0].swiperSlideOffset-s/2)/s*r.modifier;let p=n?d*l:0,u=n?0:d*l,h=-c*Math.abs(l),m=r.stretch;"string"==typeof m&&-1!==m.indexOf("%")&&(m=parseFloat(r.stretch)/100*s);let f=n?0:m*l,g=n?m*l:0,v=1-(1-r.scale)*Math.abs(l);Math.abs(g)<.001&&(g=0),Math.abs(f)<.001&&(f=0),Math.abs(h)<.001&&(h=0),Math.abs(p)<.001&&(p=0),Math.abs(u)<.001&&(u=0),Math.abs(v)<.001&&(v=0);const w=`translate3d(${g}px,${f}px,${h}px)  rotateX(${u}deg) rotateY(${p}deg) scale(${v})`;if(U(r,t).transform(w),t[0].style.zIndex=1-Math.abs(Math.round(l)),r.slideShadows){let e=n?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),s=n?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===e.length&&(e=Z(r,t,n?"left":"top")),0===s.length&&(s=Z(r,t,n?"right":"bottom")),e.length&&(e[0].style.opacity=l>0?l:0),s.length&&(s[0].style.opacity=-l>0?-l:0)}}},setTransition:t=>{const{transformEl:s}=e.params.coverflowEffect;(s?e.slides.find(s):e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})},function({swiper:e,extendParams:t,on:s}){t({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const a=e=>"string"==typeof e?e:`${e}px`;F({effect:"creative",swiper:e,on:s,setTranslate:()=>{const{slides:t,$wrapperEl:s,slidesSizesGrid:i}=e,r=e.params.creativeEffect,{progressMultiplier:n}=r,l=e.params.centeredSlides;if(l){const t=i[0]/2-e.params.slidesOffsetBefore||0;s.transform(`translateX(calc(50% - ${t}px))`)}for(let s=0;s<t.length;s+=1){const i=t.eq(s),o=i[0].progress,d=Math.min(Math.max(i[0].progress,-r.limitProgress),r.limitProgress);let c=d;l||(c=Math.min(Math.max(i[0].originalProgress,-r.limitProgress),r.limitProgress));const p=i[0].swiperSlideOffset,u=[e.params.cssMode?-p-e.translate:-p,0,0],h=[0,0,0];let m=!1;e.isHorizontal()||(u[1]=u[0],u[0]=0);let f={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};d<0?(f=r.next,m=!0):d>0&&(f=r.prev,m=!0),u.forEach(((e,t)=>{u[t]=`calc(${e}px + (${a(f.translate[t])} * ${Math.abs(d*n)}))`})),h.forEach(((e,t)=>{h[t]=f.rotate[t]*Math.abs(d*n)})),i[0].style.zIndex=-Math.abs(Math.round(o))+t.length;const g=u.join(", "),v=`rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,w=c<0?`scale(${1+(1-f.scale)*c*n})`:`scale(${1-(1-f.scale)*c*n})`,b=c<0?1+(1-f.opacity)*c*n:1-(1-f.opacity)*c*n,x=`translate3d(${g}) ${v} ${w}`;if(m&&f.shadow||!m){let e=i.children(".swiper-slide-shadow");if(0===e.length&&f.shadow&&(e=Z(r,i)),e.length){const t=r.shadowPerProgress?d*(1/r.limitProgress):d;e[0].style.opacity=Math.min(Math.max(Math.abs(t),0),1)}}const y=U(r,i);y.transform(x).css({opacity:b}),f.origin&&y.css("transform-origin",f.origin)}},setTransition:t=>{const{transformEl:s}=e.params.creativeEffect;(s?e.slides.find(s):e.slides).transition(t).find(".swiper-slide-shadow").transition(t),K({swiper:e,duration:t,transformEl:s,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})},function({swiper:e,extendParams:t,on:s}){t({cardsEffect:{slideShadows:!0,transformEl:null}}),F({effect:"cards",swiper:e,on:s,setTranslate:()=>{const{slides:t,activeIndex:s}=e,a=e.params.cardsEffect,{startTranslate:i,isTouched:r}=e.touchEventsData,n=e.translate;for(let l=0;l<t.length;l+=1){const o=t.eq(l),d=o[0].progress,c=Math.min(Math.max(d,-4),4);let p=o[0].swiperSlideOffset;e.params.centeredSlides&&!e.params.cssMode&&e.$wrapperEl.transform(`translateX(${e.minTranslate()}px)`),e.params.centeredSlides&&e.params.cssMode&&(p-=t[0].swiperSlideOffset);let u=e.params.cssMode?-p-e.translate:-p,h=0;const m=-100*Math.abs(c);let f=1,g=-2*c,v=8-.75*Math.abs(c);const w=(l===s||l===s-1)&&c>0&&c<1&&(r||e.params.cssMode)&&n<i,b=(l===s||l===s+1)&&c<0&&c>-1&&(r||e.params.cssMode)&&n>i;if(w||b){const e=(1-Math.abs((Math.abs(c)-.5)/.5))**.5;g+=-28*c*e,f+=-.5*e,v+=96*e,h=-25*e*Math.abs(c)+"%"}if(u=c<0?`calc(${u}px + (${v*Math.abs(c)}%))`:c>0?`calc(${u}px + (-${v*Math.abs(c)}%))`:`${u}px`,!e.isHorizontal()){const e=h;h=u,u=e}const x=`\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${g}deg)\n        scale(${c<0?""+(1+(1-f)*c):""+(1-(1-f)*c)})\n      `;if(a.slideShadows){let e=o.find(".swiper-slide-shadow");0===e.length&&(e=Z(a,o)),e.length&&(e[0].style.opacity=Math.min(Math.max((Math.abs(c)-.5)/.5,0),1))}o[0].style.zIndex=-Math.abs(Math.round(d))+t.length;U(a,o).transform(x)}},setTransition:t=>{const{transformEl:s}=e.params.cardsEffect;(s?e.slides.find(s):e.slides).transition(t).find(".swiper-slide-shadow").transition(t),K({swiper:e,duration:t,transformEl:s})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}];return H.use(J),H}));
 //# sourceMappingURL=swiper-bundle.min.js.map
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.IMask = {}));
})(this, (function (exports) { 'use strict';

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }

  /**
   * Applies mask on element.
   * @constructor
   * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
   * @param {Object} opts - Custom mask options
   * @return {InputMask}
   */
  function IMask(el) {
    let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // currently available only for input-like elements
    return new IMask.InputMask(el, opts);
  }

  /**
    Provides details of changing model value
    @param {Object} [details]
    @param {string} [details.inserted] - Inserted symbols
    @param {boolean} [details.skip] - Can skip chars
    @param {number} [details.removeCount] - Removed symbols count
    @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
  */
  class ChangeDetails {
    /** Inserted symbols */

    /** Can skip chars */

    /** Additional offset if any changes occurred before tail */

    /** Raw inserted is used by dynamic mask */

    constructor(details) {
      Object.assign(this, {
        inserted: '',
        rawInserted: '',
        skip: false,
        tailShift: 0
      }, details);
    }

    /**
      Aggregate changes
      @returns {ChangeDetails} `this`
    */
    aggregate(details) {
      this.rawInserted += details.rawInserted;
      this.skip = this.skip || details.skip;
      this.inserted += details.inserted;
      this.tailShift += details.tailShift;
      return this;
    }

    /** Total offset considering all changes */
    get offset() {
      return this.tailShift + this.inserted.length;
    }
  }
  IMask.ChangeDetails = ChangeDetails;

  /** Checks if value is string */
  function isString(str) {
    return typeof str === 'string' || str instanceof String;
  }

  /**
    Direction
    @prop {string} NONE
    @prop {string} LEFT
    @prop {string} FORCE_LEFT
    @prop {string} RIGHT
    @prop {string} FORCE_RIGHT
  */
  const DIRECTION = {
    NONE: 'NONE',
    LEFT: 'LEFT',
    FORCE_LEFT: 'FORCE_LEFT',
    RIGHT: 'RIGHT',
    FORCE_RIGHT: 'FORCE_RIGHT'
  };

  /** */
  function forceDirection(direction) {
    switch (direction) {
      case DIRECTION.LEFT:
        return DIRECTION.FORCE_LEFT;
      case DIRECTION.RIGHT:
        return DIRECTION.FORCE_RIGHT;
      default:
        return direction;
    }
  }

  /** Escapes regular expression control chars */
  function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
  }
  function normalizePrepare(prep) {
    return Array.isArray(prep) ? prep : [prep, new ChangeDetails()];
  }

  // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes
  function objectIncludes(b, a) {
    if (a === b) return true;
    var arrA = Array.isArray(a),
      arrB = Array.isArray(b),
      i;
    if (arrA && arrB) {
      if (a.length != b.length) return false;
      for (i = 0; i < a.length; i++) if (!objectIncludes(a[i], b[i])) return false;
      return true;
    }
    if (arrA != arrB) return false;
    if (a && b && typeof a === 'object' && typeof b === 'object') {
      var dateA = a instanceof Date,
        dateB = b instanceof Date;
      if (dateA && dateB) return a.getTime() == b.getTime();
      if (dateA != dateB) return false;
      var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
      if (regexpA && regexpB) return a.toString() == b.toString();
      if (regexpA != regexpB) return false;
      var keys = Object.keys(a);
      // if (keys.length !== Object.keys(b).length) return false;

      for (i = 0; i < keys.length; i++)
      // $FlowFixMe ... ???
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
      for (i = 0; i < keys.length; i++) if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
      return true;
    } else if (a && b && typeof a === 'function' && typeof b === 'function') {
      return a.toString() === b.toString();
    }
    return false;
  }

  /** Selection range */

  /** Provides details of changing input */
  class ActionDetails {
    /** Current input value */

    /** Current cursor position */

    /** Old input value */

    /** Old selection */

    constructor(value, cursorPos, oldValue, oldSelection) {
      this.value = value;
      this.cursorPos = cursorPos;
      this.oldValue = oldValue;
      this.oldSelection = oldSelection;

      // double check if left part was changed (autofilling, other non-standard input triggers)
      while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
        --this.oldSelection.start;
      }
    }

    /**
      Start changing position
      @readonly
    */
    get startChangePos() {
      return Math.min(this.cursorPos, this.oldSelection.start);
    }

    /**
      Inserted symbols count
      @readonly
    */
    get insertedCount() {
      return this.cursorPos - this.startChangePos;
    }

    /**
      Inserted symbols
      @readonly
    */
    get inserted() {
      return this.value.substr(this.startChangePos, this.insertedCount);
    }

    /**
      Removed symbols count
      @readonly
    */
    get removedCount() {
      // Math.max for opposite operation
      return Math.max(this.oldSelection.end - this.startChangePos ||
      // for Delete
      this.oldValue.length - this.value.length, 0);
    }

    /**
      Removed symbols
      @readonly
    */
    get removed() {
      return this.oldValue.substr(this.startChangePos, this.removedCount);
    }

    /**
      Unchanged head symbols
      @readonly
    */
    get head() {
      return this.value.substring(0, this.startChangePos);
    }

    /**
      Unchanged tail symbols
      @readonly
    */
    get tail() {
      return this.value.substring(this.startChangePos + this.insertedCount);
    }

    /**
      Remove direction
      @readonly
    */
    get removeDirection() {
      if (!this.removedCount || this.insertedCount) return DIRECTION.NONE;

      // align right if delete at right
      return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) &&
      // if not range removed (event with backspace)
      this.oldSelection.end === this.oldSelection.start ? DIRECTION.RIGHT : DIRECTION.LEFT;
    }
  }

  /** Provides details of continuous extracted tail */
  class ContinuousTailDetails {
    /** Tail value as string */

    /** Tail start position */

    /** Start position */

    constructor() {
      let value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      let from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      let stop = arguments.length > 2 ? arguments[2] : undefined;
      this.value = value;
      this.from = from;
      this.stop = stop;
    }
    toString() {
      return this.value;
    }
    extend(tail) {
      this.value += String(tail);
    }
    appendTo(masked) {
      return masked.append(this.toString(), {
        tail: true
      }).aggregate(masked._appendPlaceholder());
    }
    get state() {
      return {
        value: this.value,
        from: this.from,
        stop: this.stop
      };
    }
    set state(state) {
      Object.assign(this, state);
    }
    unshift(beforePos) {
      if (!this.value.length || beforePos != null && this.from >= beforePos) return '';
      const shiftChar = this.value[0];
      this.value = this.value.slice(1);
      return shiftChar;
    }
    shift() {
      if (!this.value.length) return '';
      const shiftChar = this.value[this.value.length - 1];
      this.value = this.value.slice(0, -1);
      return shiftChar;
    }
  }

  /** Supported mask type */

  /** Append flags */

  /** Extract flags */

  /** Provides common masking stuff */
  class Masked {
    // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

    /** @type {Mask} */

    /** */ // $FlowFixMe no ideas
    /** Transforms value before mask processing */
    /** Validates if value is acceptable */
    /** Does additional processing in the end of editing */
    /** Format typed value to string */
    /** Parse strgin to get typed value */
    /** Enable characters overwriting */
    /** */
    /** */
    /** */
    constructor(opts) {
      this._value = '';
      this._update(Object.assign({}, Masked.DEFAULTS, opts));
      this.isInitialized = true;
    }

    /** Sets and applies new options */
    updateOptions(opts) {
      if (!Object.keys(opts).length) return;
      // $FlowFixMe
      this.withValueRefresh(this._update.bind(this, opts));
    }

    /**
      Sets new options
      @protected
    */
    _update(opts) {
      Object.assign(this, opts);
    }

    /** Mask state */
    get state() {
      return {
        _value: this.value
      };
    }
    set state(state) {
      this._value = state._value;
    }

    /** Resets value */
    reset() {
      this._value = '';
    }

    /** */
    get value() {
      return this._value;
    }
    set value(value) {
      this.resolve(value);
    }

    /** Resolve new value */
    resolve(value) {
      this.reset();
      this.append(value, {
        input: true
      }, '');
      this.doCommit();
      return this.value;
    }

    /** */
    get unmaskedValue() {
      return this.value;
    }
    set unmaskedValue(value) {
      this.reset();
      this.append(value, {}, '');
      this.doCommit();
    }

    /** */
    get typedValue() {
      return this.doParse(this.value);
    }
    set typedValue(value) {
      this.value = this.doFormat(value);
    }

    /** Value that includes raw user input */
    get rawInputValue() {
      return this.extractInput(0, this.value.length, {
        raw: true
      });
    }
    set rawInputValue(value) {
      this.reset();
      this.append(value, {
        raw: true
      }, '');
      this.doCommit();
    }
    get displayValue() {
      return this.value;
    }

    /** */
    get isComplete() {
      return true;
    }

    /** */
    get isFilled() {
      return this.isComplete;
    }

    /** Finds nearest input position in direction */
    nearestInputPos(cursorPos, direction) {
      return cursorPos;
    }
    totalInputPositions() {
      let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return Math.min(this.value.length, toPos - fromPos);
    }

    /** Extracts value in range considering flags */
    extractInput() {
      let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return this.value.slice(fromPos, toPos);
    }

    /** Extracts tail in range */
    extractTail() {
      let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
    }

    /** Appends tail */
    // $FlowFixMe no ideas
    appendTail(tail) {
      if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
      return tail.appendTo(this);
    }

    /** Appends char */
    _appendCharRaw(ch) {
      if (!ch) return new ChangeDetails();
      this._value += ch;
      return new ChangeDetails({
        inserted: ch,
        rawInserted: ch
      });
    }

    /** Appends char */
    _appendChar(ch) {
      let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let checkTail = arguments.length > 2 ? arguments[2] : undefined;
      const consistentState = this.state;
      let details;
      [ch, details] = normalizePrepare(this.doPrepare(ch, flags));
      details = details.aggregate(this._appendCharRaw(ch, flags));
      if (details.inserted) {
        let consistentTail;
        let appended = this.doValidate(flags) !== false;
        if (appended && checkTail != null) {
          // validation ok, check tail
          const beforeTailState = this.state;
          if (this.overwrite === true) {
            consistentTail = checkTail.state;
            checkTail.unshift(this.value.length - details.tailShift);
          }
          let tailDetails = this.appendTail(checkTail);
          appended = tailDetails.rawInserted === checkTail.toString();

          // not ok, try shift
          if (!(appended && tailDetails.inserted) && this.overwrite === 'shift') {
            this.state = beforeTailState;
            consistentTail = checkTail.state;
            checkTail.shift();
            tailDetails = this.appendTail(checkTail);
            appended = tailDetails.rawInserted === checkTail.toString();
          }

          // if ok, rollback state after tail
          if (appended && tailDetails.inserted) this.state = beforeTailState;
        }

        // revert all if something went wrong
        if (!appended) {
          details = new ChangeDetails();
          this.state = consistentState;
          if (checkTail && consistentTail) checkTail.state = consistentTail;
        }
      }
      return details;
    }

    /** Appends optional placeholder at end */
    _appendPlaceholder() {
      return new ChangeDetails();
    }

    /** Appends optional eager placeholder at end */
    _appendEager() {
      return new ChangeDetails();
    }

    /** Appends symbols considering flags */
    // $FlowFixMe no ideas
    append(str, flags, tail) {
      if (!isString(str)) throw new Error('value should be string');
      const details = new ChangeDetails();
      const checkTail = isString(tail) ? new ContinuousTailDetails(String(tail)) : tail;
      if (flags !== null && flags !== void 0 && flags.tail) flags._beforeTailState = this.state;
      for (let ci = 0; ci < str.length; ++ci) {
        const d = this._appendChar(str[ci], flags, checkTail);
        if (!d.rawInserted && !this.doSkipInvalid(str[ci], flags, checkTail)) break;
        details.aggregate(d);
      }

      // append tail but aggregate only tailShift
      if (checkTail != null) {
        details.tailShift += this.appendTail(checkTail).tailShift;
        // TODO it's a good idea to clear state after appending ends
        // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
        // this._resetBeforeTailState();
      }

      if ((this.eager === true || this.eager === 'append') && flags !== null && flags !== void 0 && flags.input && str) {
        details.aggregate(this._appendEager());
      }
      return details;
    }

    /** */
    remove() {
      let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
      return new ChangeDetails();
    }

    /** Calls function and reapplies current value */
    withValueRefresh(fn) {
      if (this._refreshing || !this.isInitialized) return fn();
      this._refreshing = true;
      const rawInput = this.rawInputValue;
      const value = this.value;
      const ret = fn();
      this.rawInputValue = rawInput;
      // append lost trailing chars at end
      if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
        this.append(value.slice(this.value.length), {}, '');
      }
      delete this._refreshing;
      return ret;
    }

    /** */
    runIsolated(fn) {
      if (this._isolated || !this.isInitialized) return fn(this);
      this._isolated = true;
      const state = this.state;
      const ret = fn(this);
      this.state = state;
      delete this._isolated;
      return ret;
    }

    /** */
    doSkipInvalid(ch) {
      return this.skipInvalid;
    }

    /**
      Prepares string before mask processing
      @protected
    */
    doPrepare(str) {
      let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.prepare ? this.prepare(str, this, flags) : str;
    }

    /**
      Validates if value is acceptable
      @protected
    */
    doValidate(flags) {
      return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
    }

    /**
      Does additional processing in the end of editing
      @protected
    */
    doCommit() {
      if (this.commit) this.commit(this.value, this);
    }

    /** */
    doFormat(value) {
      return this.format ? this.format(value, this) : value;
    }

    /** */
    doParse(str) {
      return this.parse ? this.parse(str, this) : str;
    }

    /** */
    splice(start, deleteCount, inserted, removeDirection) {
      let flags = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
        input: true
      };
      const tailPos = start + deleteCount;
      const tail = this.extractTail(tailPos);
      const eagerRemove = this.eager === true || this.eager === 'remove';
      let oldRawValue;
      if (eagerRemove) {
        removeDirection = forceDirection(removeDirection);
        oldRawValue = this.extractInput(0, tailPos, {
          raw: true
        });
      }
      let startChangePos = start;
      const details = new ChangeDetails();

      // if it is just deletion without insertion
      if (removeDirection !== DIRECTION.NONE) {
        startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !eagerRemove ? DIRECTION.NONE : removeDirection);

        // adjust tailShift if start was aligned
        details.tailShift = startChangePos - start;
      }
      details.aggregate(this.remove(startChangePos));
      if (eagerRemove && removeDirection !== DIRECTION.NONE && oldRawValue === this.rawInputValue) {
        if (removeDirection === DIRECTION.FORCE_LEFT) {
          let valLength;
          while (oldRawValue === this.rawInputValue && (valLength = this.value.length)) {
            details.aggregate(new ChangeDetails({
              tailShift: -1
            })).aggregate(this.remove(valLength - 1));
          }
        } else if (removeDirection === DIRECTION.FORCE_RIGHT) {
          tail.unshift();
        }
      }
      return details.aggregate(this.append(inserted, flags, tail));
    }
    maskEquals(mask) {
      return this.mask === mask;
    }
    typedValueEquals(value) {
      const tval = this.typedValue;
      return value === tval || Masked.EMPTY_VALUES.includes(value) && Masked.EMPTY_VALUES.includes(tval) || this.doFormat(value) === this.doFormat(this.typedValue);
    }
  }
  Masked.DEFAULTS = {
    format: String,
    parse: v => v,
    skipInvalid: true
  };
  Masked.EMPTY_VALUES = [undefined, null, ''];
  IMask.Masked = Masked;

  /** Get Masked class by mask type */
  function maskedClass(mask) {
    if (mask == null) {
      throw new Error('mask property should be defined');
    }

    // $FlowFixMe
    if (mask instanceof RegExp) return IMask.MaskedRegExp;
    // $FlowFixMe
    if (isString(mask)) return IMask.MaskedPattern;
    // $FlowFixMe
    if (mask instanceof Date || mask === Date) return IMask.MaskedDate;
    // $FlowFixMe
    if (mask instanceof Number || typeof mask === 'number' || mask === Number) return IMask.MaskedNumber;
    // $FlowFixMe
    if (Array.isArray(mask) || mask === Array) return IMask.MaskedDynamic;
    // $FlowFixMe
    if (IMask.Masked && mask.prototype instanceof IMask.Masked) return mask;
    // $FlowFixMe
    if (mask instanceof IMask.Masked) return mask.constructor;
    // $FlowFixMe
    if (mask instanceof Function) return IMask.MaskedFunction;
    console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
    // $FlowFixMe
    return IMask.Masked;
  }

  /** Creates new {@link Masked} depending on mask type */
  function createMask(opts) {
    // $FlowFixMe
    if (IMask.Masked && opts instanceof IMask.Masked) return opts;
    opts = Object.assign({}, opts);
    const mask = opts.mask;

    // $FlowFixMe
    if (IMask.Masked && mask instanceof IMask.Masked) return mask;
    const MaskedClass = maskedClass(mask);
    if (!MaskedClass) throw new Error('Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.');
    return new MaskedClass(opts);
  }
  IMask.createMask = createMask;

  const _excluded$4 = ["parent", "isOptional", "placeholderChar", "displayChar", "lazy", "eager"];

  /** */

  const DEFAULT_INPUT_DEFINITIONS = {
    '0': /\d/,
    'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    // http://stackoverflow.com/a/22075070
    '*': /./
  };

  /** */
  class PatternInputDefinition {
    /** */

    /** */

    /** */

    /** */

    /** */

    /** */

    /** */

    /** */

    constructor(opts) {
      const {
          parent,
          isOptional,
          placeholderChar,
          displayChar,
          lazy,
          eager
        } = opts,
        maskOpts = _objectWithoutPropertiesLoose(opts, _excluded$4);
      this.masked = createMask(maskOpts);
      Object.assign(this, {
        parent,
        isOptional,
        placeholderChar,
        displayChar,
        lazy,
        eager
      });
    }
    reset() {
      this.isFilled = false;
      this.masked.reset();
    }
    remove() {
      let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      if (fromPos === 0 && toPos >= 1) {
        this.isFilled = false;
        return this.masked.remove(fromPos, toPos);
      }
      return new ChangeDetails();
    }
    get value() {
      return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : '');
    }
    get unmaskedValue() {
      return this.masked.unmaskedValue;
    }
    get displayValue() {
      return this.masked.value && this.displayChar || this.value;
    }
    get isComplete() {
      return Boolean(this.masked.value) || this.isOptional;
    }
    _appendChar(ch) {
      let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (this.isFilled) return new ChangeDetails();
      const state = this.masked.state;
      // simulate input
      const details = this.masked._appendChar(ch, flags);
      if (details.inserted && this.doValidate(flags) === false) {
        details.inserted = details.rawInserted = '';
        this.masked.state = state;
      }
      if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
        details.inserted = this.placeholderChar;
      }
      details.skip = !details.inserted && !this.isOptional;
      this.isFilled = Boolean(details.inserted);
      return details;
    }
    append() {
      // TODO probably should be done via _appendChar
      return this.masked.append(...arguments);
    }
    _appendPlaceholder() {
      const details = new ChangeDetails();
      if (this.isFilled || this.isOptional) return details;
      this.isFilled = true;
      details.inserted = this.placeholderChar;
      return details;
    }
    _appendEager() {
      return new ChangeDetails();
    }
    extractTail() {
      return this.masked.extractTail(...arguments);
    }
    appendTail() {
      return this.masked.appendTail(...arguments);
    }
    extractInput() {
      let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      let flags = arguments.length > 2 ? arguments[2] : undefined;
      return this.masked.extractInput(fromPos, toPos, flags);
    }
    nearestInputPos(cursorPos) {
      let direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
      const minPos = 0;
      const maxPos = this.value.length;
      const boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);
      switch (direction) {
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
          return this.isComplete ? boundPos : minPos;
        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
          return this.isComplete ? boundPos : maxPos;
        case DIRECTION.NONE:
        default:
          return boundPos;
      }
    }
    totalInputPositions() {
      let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return this.value.slice(fromPos, toPos).length;
    }
    doValidate() {
      return this.masked.doValidate(...arguments) && (!this.parent || this.parent.doValidate(...arguments));
    }
    doCommit() {
      this.masked.doCommit();
    }
    get state() {
      return {
        masked: this.masked.state,
        isFilled: this.isFilled
      };
    }
    set state(state) {
      this.masked.state = state.masked;
      this.isFilled = state.isFilled;
    }
  }

  /** */

  class PatternFixedDefinition {
    /** */

    /** */

    /** */

    /** */

    /** */

    /** */

    constructor(opts) {
      Object.assign(this, opts);
      this._value = '';
      this.isFixed = true;
    }
    get value() {
      return this._value;
    }
    get unmaskedValue() {
      return this.isUnmasking ? this.value : '';
    }
    get displayValue() {
      return this.value;
    }
    reset() {
      this._isRawInput = false;
      this._value = '';
    }
    remove() {
      let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
      this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
      if (!this._value) this._isRawInput = false;
      return new ChangeDetails();
    }
    nearestInputPos(cursorPos) {
      let direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
      const minPos = 0;
      const maxPos = this._value.length;
      switch (direction) {
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
          return minPos;
        case DIRECTION.NONE:
        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
        default:
          return maxPos;
      }
    }
    totalInputPositions() {
      let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
      return this._isRawInput ? toPos - fromPos : 0;
    }
    extractInput() {
      let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
      let flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
    }
    get isComplete() {
      return true;
    }
    get isFilled() {
      return Boolean(this._value);
    }
    _appendChar(ch) {
      let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      const details = new ChangeDetails();
      if (this.isFilled) return details;
      const appendEager = this.eager === true || this.eager === 'append';
      const appended = this.char === ch;
      const isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && (!flags.raw || !appendEager) && !flags.tail;
      if (isResolved) details.rawInserted = this.char;
      this._value = details.inserted = this.char;
      this._isRawInput = isResolved && (flags.raw || flags.input);
      return details;
    }
    _appendEager() {
      return this._appendChar(this.char, {
        tail: true
      });
    }
    _appendPlaceholder() {
      const details = new ChangeDetails();
      if (this.isFilled) return details;
      this._value = details.inserted = this.char;
      return details;
    }
    extractTail() {
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      return new ContinuousTailDetails('');
    }

    // $FlowFixMe no ideas
    appendTail(tail) {
      if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
      return tail.appendTo(this);
    }
    append(str, flags, tail) {
      const details = this._appendChar(str[0], flags);
      if (tail != null) {
        details.tailShift += this.appendTail(tail).tailShift;
      }
      return details;
    }
    doCommit() {}
    get state() {
      return {
        _value: this._value,
        _isRawInput: this._isRawInput
      };
    }
    set state(state) {
      Object.assign(this, state);
    }
  }

  const _excluded$3 = ["chunks"];
  class ChunksTailDetails {
    /** */

    constructor() {
      let chunks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      let from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      this.chunks = chunks;
      this.from = from;
    }
    toString() {
      return this.chunks.map(String).join('');
    }

    // $FlowFixMe no ideas
    extend(tailChunk) {
      if (!String(tailChunk)) return;
      if (isString(tailChunk)) tailChunk = new ContinuousTailDetails(String(tailChunk));
      const lastChunk = this.chunks[this.chunks.length - 1];
      const extendLast = lastChunk && (
      // if stops are same or tail has no stop
      lastChunk.stop === tailChunk.stop || tailChunk.stop == null) &&
      // if tail chunk goes just after last chunk
      tailChunk.from === lastChunk.from + lastChunk.toString().length;
      if (tailChunk instanceof ContinuousTailDetails) {
        // check the ability to extend previous chunk
        if (extendLast) {
          // extend previous chunk
          lastChunk.extend(tailChunk.toString());
        } else {
          // append new chunk
          this.chunks.push(tailChunk);
        }
      } else if (tailChunk instanceof ChunksTailDetails) {
        if (tailChunk.stop == null) {
          // unwrap floating chunks to parent, keeping `from` pos
          let firstTailChunk;
          while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
            firstTailChunk = tailChunk.chunks.shift();
            firstTailChunk.from += tailChunk.from;
            this.extend(firstTailChunk);
          }
        }

        // if tail chunk still has value
        if (tailChunk.toString()) {
          // if chunks contains stops, then popup stop to container
          tailChunk.stop = tailChunk.blockIndex;
          this.chunks.push(tailChunk);
        }
      }
    }
    appendTo(masked) {
      // $FlowFixMe
      if (!(masked instanceof IMask.MaskedPattern)) {
        const tail = new ContinuousTailDetails(this.toString());
        return tail.appendTo(masked);
      }
      const details = new ChangeDetails();
      for (let ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
        const chunk = this.chunks[ci];
        const lastBlockIter = masked._mapPosToBlock(masked.value.length);
        const stop = chunk.stop;
        let chunkBlock;
        if (stop != null && (
        // if block not found or stop is behind lastBlock
        !lastBlockIter || lastBlockIter.index <= stop)) {
          if (chunk instanceof ChunksTailDetails ||
          // for continuous block also check if stop is exist
          masked._stops.indexOf(stop) >= 0) {
            const phDetails = masked._appendPlaceholder(stop);
            details.aggregate(phDetails);
          }
          chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
        }
        if (chunkBlock) {
          const tailDetails = chunkBlock.appendTail(chunk);
          tailDetails.skip = false; // always ignore skip, it will be set on last
          details.aggregate(tailDetails);
          masked._value += tailDetails.inserted;

          // get not inserted chars
          const remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
          if (remainChars) details.aggregate(masked.append(remainChars, {
            tail: true
          }));
        } else {
          details.aggregate(masked.append(chunk.toString(), {
            tail: true
          }));
        }
      }
      return details;
    }
    get state() {
      return {
        chunks: this.chunks.map(c => c.state),
        from: this.from,
        stop: this.stop,
        blockIndex: this.blockIndex
      };
    }
    set state(state) {
      const {
          chunks
        } = state,
        props = _objectWithoutPropertiesLoose(state, _excluded$3);
      Object.assign(this, props);
      this.chunks = chunks.map(cstate => {
        const chunk = "chunks" in cstate ? new ChunksTailDetails() : new ContinuousTailDetails();
        // $FlowFixMe already checked above
        chunk.state = cstate;
        return chunk;
      });
    }
    unshift(beforePos) {
      if (!this.chunks.length || beforePos != null && this.from >= beforePos) return '';
      const chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
      let ci = 0;
      while (ci < this.chunks.length) {
        const chunk = this.chunks[ci];
        const shiftChar = chunk.unshift(chunkShiftPos);
        if (chunk.toString()) {
          // chunk still contains value
          // but not shifted - means no more available chars to shift
          if (!shiftChar) break;
          ++ci;
        } else {
          // clean if chunk has no value
          this.chunks.splice(ci, 1);
        }
        if (shiftChar) return shiftChar;
      }
      return '';
    }
    shift() {
      if (!this.chunks.length) return '';
      let ci = this.chunks.length - 1;
      while (0 <= ci) {
        const chunk = this.chunks[ci];
        const shiftChar = chunk.shift();
        if (chunk.toString()) {
          // chunk still contains value
          // but not shifted - means no more available chars to shift
          if (!shiftChar) break;
          --ci;
        } else {
          // clean if chunk has no value
          this.chunks.splice(ci, 1);
        }
        if (shiftChar) return shiftChar;
      }
      return '';
    }
  }

  class PatternCursor {
    constructor(masked, pos) {
      this.masked = masked;
      this._log = [];
      const {
        offset,
        index
      } = masked._mapPosToBlock(pos) || (pos < 0 ?
      // first
      {
        index: 0,
        offset: 0
      } :
      // last
      {
        index: this.masked._blocks.length,
        offset: 0
      });
      this.offset = offset;
      this.index = index;
      this.ok = false;
    }
    get block() {
      return this.masked._blocks[this.index];
    }
    get pos() {
      return this.masked._blockStartPos(this.index) + this.offset;
    }
    get state() {
      return {
        index: this.index,
        offset: this.offset,
        ok: this.ok
      };
    }
    set state(s) {
      Object.assign(this, s);
    }
    pushState() {
      this._log.push(this.state);
    }
    popState() {
      const s = this._log.pop();
      this.state = s;
      return s;
    }
    bindBlock() {
      if (this.block) return;
      if (this.index < 0) {
        this.index = 0;
        this.offset = 0;
      }
      if (this.index >= this.masked._blocks.length) {
        this.index = this.masked._blocks.length - 1;
        this.offset = this.block.value.length;
      }
    }
    _pushLeft(fn) {
      this.pushState();
      for (this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((_this$block = this.block) === null || _this$block === void 0 ? void 0 : _this$block.value.length) || 0) {
        var _this$block;
        if (fn()) return this.ok = true;
      }
      return this.ok = false;
    }
    _pushRight(fn) {
      this.pushState();
      for (this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) {
        if (fn()) return this.ok = true;
      }
      return this.ok = false;
    }
    pushLeftBeforeFilled() {
      return this._pushLeft(() => {
        if (this.block.isFixed || !this.block.value) return;
        this.offset = this.block.nearestInputPos(this.offset, DIRECTION.FORCE_LEFT);
        if (this.offset !== 0) return true;
      });
    }
    pushLeftBeforeInput() {
      // cases:
      // filled input: 00|
      // optional empty input: 00[]|
      // nested block: XX<[]>|
      return this._pushLeft(() => {
        if (this.block.isFixed) return;
        this.offset = this.block.nearestInputPos(this.offset, DIRECTION.LEFT);
        return true;
      });
    }
    pushLeftBeforeRequired() {
      return this._pushLeft(() => {
        if (this.block.isFixed || this.block.isOptional && !this.block.value) return;
        this.offset = this.block.nearestInputPos(this.offset, DIRECTION.LEFT);
        return true;
      });
    }
    pushRightBeforeFilled() {
      return this._pushRight(() => {
        if (this.block.isFixed || !this.block.value) return;
        this.offset = this.block.nearestInputPos(this.offset, DIRECTION.FORCE_RIGHT);
        if (this.offset !== this.block.value.length) return true;
      });
    }
    pushRightBeforeInput() {
      return this._pushRight(() => {
        if (this.block.isFixed) return;

        // const o = this.offset;
        this.offset = this.block.nearestInputPos(this.offset, DIRECTION.NONE);
        // HACK cases like (STILL DOES NOT WORK FOR NESTED)
        // aa|X
        // aa<X|[]>X_    - this will not work
        // if (o && o === this.offset && this.block instanceof PatternInputDefinition) continue;
        return true;
      });
    }
    pushRightBeforeRequired() {
      return this._pushRight(() => {
        if (this.block.isFixed || this.block.isOptional && !this.block.value) return;

        // TODO check |[*]XX_
        this.offset = this.block.nearestInputPos(this.offset, DIRECTION.NONE);
        return true;
      });
    }
  }

  /** Masking by RegExp */
  class MaskedRegExp extends Masked {
    /**
      @override
      @param {Object} opts
    */
    _update(opts) {
      if (opts.mask) opts.validate = value => value.search(opts.mask) >= 0;
      super._update(opts);
    }
  }
  IMask.MaskedRegExp = MaskedRegExp;

  const _excluded$2 = ["_blocks"];

  /**
    Pattern mask
    @param {Object} opts
    @param {Object} opts.blocks
    @param {Object} opts.definitions
    @param {string} opts.placeholderChar
    @param {string} opts.displayChar
    @param {boolean} opts.lazy
  */
  class MaskedPattern extends Masked {
    /** */

    /** */

    /** Single char for empty input */

    /** Single char for filled input */

    /** Show placeholder only when needed */

    constructor() {
      let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // TODO type $Shape<MaskedPatternOptions>={} does not work
      opts.definitions = Object.assign({}, DEFAULT_INPUT_DEFINITIONS, opts.definitions);
      super(Object.assign({}, MaskedPattern.DEFAULTS, opts));
    }

    /**
      @override
      @param {Object} opts
    */
    _update() {
      let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      opts.definitions = Object.assign({}, this.definitions, opts.definitions);
      super._update(opts);
      this._rebuildMask();
    }

    /** */
    _rebuildMask() {
      const defs = this.definitions;
      this._blocks = [];
      this._stops = [];
      this._maskedBlocks = {};
      let pattern = this.mask;
      if (!pattern || !defs) return;
      let unmaskingBlock = false;
      let optionalBlock = false;
      for (let i = 0; i < pattern.length; ++i) {
        var _defs$char, _defs$char2;
        if (this.blocks) {
          const p = pattern.slice(i);
          const bNames = Object.keys(this.blocks).filter(bName => p.indexOf(bName) === 0);
          // order by key length
          bNames.sort((a, b) => b.length - a.length);
          // use block name with max length
          const bName = bNames[0];
          if (bName) {
            // $FlowFixMe no ideas
            const maskedBlock = createMask(Object.assign({
              parent: this,
              lazy: this.lazy,
              eager: this.eager,
              placeholderChar: this.placeholderChar,
              displayChar: this.displayChar,
              overwrite: this.overwrite
            }, this.blocks[bName]));
            if (maskedBlock) {
              this._blocks.push(maskedBlock);

              // store block index
              if (!this._maskedBlocks[bName]) this._maskedBlocks[bName] = [];
              this._maskedBlocks[bName].push(this._blocks.length - 1);
            }
            i += bName.length - 1;
            continue;
          }
        }
        let char = pattern[i];
        let isInput = (char in defs);
        if (char === MaskedPattern.STOP_CHAR) {
          this._stops.push(this._blocks.length);
          continue;
        }
        if (char === '{' || char === '}') {
          unmaskingBlock = !unmaskingBlock;
          continue;
        }
        if (char === '[' || char === ']') {
          optionalBlock = !optionalBlock;
          continue;
        }
        if (char === MaskedPattern.ESCAPE_CHAR) {
          ++i;
          char = pattern[i];
          if (!char) break;
          isInput = false;
        }
        const maskOpts = (_defs$char = defs[char]) !== null && _defs$char !== void 0 && _defs$char.mask && !(((_defs$char2 = defs[char]) === null || _defs$char2 === void 0 ? void 0 : _defs$char2.mask.prototype) instanceof IMask.Masked) ? defs[char] : {
          mask: defs[char]
        };
        const def = isInput ? new PatternInputDefinition(Object.assign({
          parent: this,
          isOptional: optionalBlock,
          lazy: this.lazy,
          eager: this.eager,
          placeholderChar: this.placeholderChar,
          displayChar: this.displayChar
        }, maskOpts)) : new PatternFixedDefinition({
          char,
          eager: this.eager,
          isUnmasking: unmaskingBlock
        });
        this._blocks.push(def);
      }
    }

    /**
      @override
    */
    get state() {
      return Object.assign({}, super.state, {
        _blocks: this._blocks.map(b => b.state)
      });
    }
    set state(state) {
      const {
          _blocks
        } = state,
        maskedState = _objectWithoutPropertiesLoose(state, _excluded$2);
      this._blocks.forEach((b, bi) => b.state = _blocks[bi]);
      super.state = maskedState;
    }

    /**
      @override
    */
    reset() {
      super.reset();
      this._blocks.forEach(b => b.reset());
    }

    /**
      @override
    */
    get isComplete() {
      return this._blocks.every(b => b.isComplete);
    }

    /**
      @override
    */
    get isFilled() {
      return this._blocks.every(b => b.isFilled);
    }
    get isFixed() {
      return this._blocks.every(b => b.isFixed);
    }
    get isOptional() {
      return this._blocks.every(b => b.isOptional);
    }

    /**
      @override
    */
    doCommit() {
      this._blocks.forEach(b => b.doCommit());
      super.doCommit();
    }

    /**
      @override
    */
    get unmaskedValue() {
      return this._blocks.reduce((str, b) => str += b.unmaskedValue, '');
    }
    set unmaskedValue(unmaskedValue) {
      super.unmaskedValue = unmaskedValue;
    }

    /**
      @override
    */
    get value() {
      // TODO return _value when not in change?
      return this._blocks.reduce((str, b) => str += b.value, '');
    }
    set value(value) {
      super.value = value;
    }
    get displayValue() {
      return this._blocks.reduce((str, b) => str += b.displayValue, '');
    }

    /**
      @override
    */
    appendTail(tail) {
      return super.appendTail(tail).aggregate(this._appendPlaceholder());
    }

    /**
      @override
    */
    _appendEager() {
      var _this$_mapPosToBlock;
      const details = new ChangeDetails();
      let startBlockIndex = (_this$_mapPosToBlock = this._mapPosToBlock(this.value.length)) === null || _this$_mapPosToBlock === void 0 ? void 0 : _this$_mapPosToBlock.index;
      if (startBlockIndex == null) return details;

      // TODO test if it works for nested pattern masks
      if (this._blocks[startBlockIndex].isFilled) ++startBlockIndex;
      for (let bi = startBlockIndex; bi < this._blocks.length; ++bi) {
        const d = this._blocks[bi]._appendEager();
        if (!d.inserted) break;
        details.aggregate(d);
      }
      return details;
    }

    /**
      @override
    */
    _appendCharRaw(ch) {
      let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      const blockIter = this._mapPosToBlock(this.value.length);
      const details = new ChangeDetails();
      if (!blockIter) return details;
      for (let bi = blockIter.index;; ++bi) {
        var _flags$_beforeTailSta, _flags$_beforeTailSta2;
        const block = this._blocks[bi];
        if (!block) break;
        const blockDetails = block._appendChar(ch, Object.assign({}, flags, {
          _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) === null || _flags$_beforeTailSta === void 0 ? void 0 : (_flags$_beforeTailSta2 = _flags$_beforeTailSta._blocks) === null || _flags$_beforeTailSta2 === void 0 ? void 0 : _flags$_beforeTailSta2[bi]
        }));
        const skip = blockDetails.skip;
        details.aggregate(blockDetails);
        if (skip || blockDetails.rawInserted) break; // go next char
      }

      return details;
    }

    /**
      @override
    */
    extractTail() {
      let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      const chunkTail = new ChunksTailDetails();
      if (fromPos === toPos) return chunkTail;
      this._forEachBlocksInRange(fromPos, toPos, (b, bi, bFromPos, bToPos) => {
        const blockChunk = b.extractTail(bFromPos, bToPos);
        blockChunk.stop = this._findStopBefore(bi);
        blockChunk.from = this._blockStartPos(bi);
        if (blockChunk instanceof ChunksTailDetails) blockChunk.blockIndex = bi;
        chunkTail.extend(blockChunk);
      });
      return chunkTail;
    }

    /**
      @override
    */
    extractInput() {
      let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      let flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (fromPos === toPos) return '';
      let input = '';
      this._forEachBlocksInRange(fromPos, toPos, (b, _, fromPos, toPos) => {
        input += b.extractInput(fromPos, toPos, flags);
      });
      return input;
    }
    _findStopBefore(blockIndex) {
      let stopBefore;
      for (let si = 0; si < this._stops.length; ++si) {
        const stop = this._stops[si];
        if (stop <= blockIndex) stopBefore = stop;else break;
      }
      return stopBefore;
    }

    /** Appends placeholder depending on laziness */
    _appendPlaceholder(toBlockIndex) {
      const details = new ChangeDetails();
      if (this.lazy && toBlockIndex == null) return details;
      const startBlockIter = this._mapPosToBlock(this.value.length);
      if (!startBlockIter) return details;
      const startBlockIndex = startBlockIter.index;
      const endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;
      this._blocks.slice(startBlockIndex, endBlockIndex).forEach(b => {
        if (!b.lazy || toBlockIndex != null) {
          // $FlowFixMe `_blocks` may not be present
          const args = b._blocks != null ? [b._blocks.length] : [];
          const bDetails = b._appendPlaceholder(...args);
          this._value += bDetails.inserted;
          details.aggregate(bDetails);
        }
      });
      return details;
    }

    /** Finds block in pos */
    _mapPosToBlock(pos) {
      let accVal = '';
      for (let bi = 0; bi < this._blocks.length; ++bi) {
        const block = this._blocks[bi];
        const blockStartPos = accVal.length;
        accVal += block.value;
        if (pos <= accVal.length) {
          return {
            index: bi,
            offset: pos - blockStartPos
          };
        }
      }
    }

    /** */
    _blockStartPos(blockIndex) {
      return this._blocks.slice(0, blockIndex).reduce((pos, b) => pos += b.value.length, 0);
    }

    /** */
    _forEachBlocksInRange(fromPos) {
      let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      let fn = arguments.length > 2 ? arguments[2] : undefined;
      const fromBlockIter = this._mapPosToBlock(fromPos);
      if (fromBlockIter) {
        const toBlockIter = this._mapPosToBlock(toPos);
        // process first block
        const isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
        const fromBlockStartPos = fromBlockIter.offset;
        const fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
        fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);
        if (toBlockIter && !isSameBlock) {
          // process intermediate blocks
          for (let bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
            fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
          }

          // process last block
          fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
        }
      }
    }

    /**
      @override
    */
    remove() {
      let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      const removeDetails = super.remove(fromPos, toPos);
      this._forEachBlocksInRange(fromPos, toPos, (b, _, bFromPos, bToPos) => {
        removeDetails.aggregate(b.remove(bFromPos, bToPos));
      });
      return removeDetails;
    }

    /**
      @override
    */
    nearestInputPos(cursorPos) {
      let direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
      if (!this._blocks.length) return 0;
      const cursor = new PatternCursor(this, cursorPos);
      if (direction === DIRECTION.NONE) {
        // -------------------------------------------------
        // NONE should only go out from fixed to the right!
        // -------------------------------------------------
        if (cursor.pushRightBeforeInput()) return cursor.pos;
        cursor.popState();
        if (cursor.pushLeftBeforeInput()) return cursor.pos;
        return this.value.length;
      }

      // FORCE is only about a|* otherwise is 0
      if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
        // try to break fast when *|a
        if (direction === DIRECTION.LEFT) {
          cursor.pushRightBeforeFilled();
          if (cursor.ok && cursor.pos === cursorPos) return cursorPos;
          cursor.popState();
        }

        // forward flow
        cursor.pushLeftBeforeInput();
        cursor.pushLeftBeforeRequired();
        cursor.pushLeftBeforeFilled();

        // backward flow
        if (direction === DIRECTION.LEFT) {
          cursor.pushRightBeforeInput();
          cursor.pushRightBeforeRequired();
          if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
          cursor.popState();
          if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
          cursor.popState();
        }
        if (cursor.ok) return cursor.pos;
        if (direction === DIRECTION.FORCE_LEFT) return 0;
        cursor.popState();
        if (cursor.ok) return cursor.pos;
        cursor.popState();
        if (cursor.ok) return cursor.pos;

        // cursor.popState();
        // if (
        //   cursor.pushRightBeforeInput() &&
        //   // TODO HACK for lazy if has aligned left inside fixed and has came to the start - use start position
        //   (!this.lazy || this.extractInput())
        // ) return cursor.pos;

        return 0;
      }
      if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
        // forward flow
        cursor.pushRightBeforeInput();
        cursor.pushRightBeforeRequired();
        if (cursor.pushRightBeforeFilled()) return cursor.pos;
        if (direction === DIRECTION.FORCE_RIGHT) return this.value.length;

        // backward flow
        cursor.popState();
        if (cursor.ok) return cursor.pos;
        cursor.popState();
        if (cursor.ok) return cursor.pos;
        return this.nearestInputPos(cursorPos, DIRECTION.LEFT);
      }
      return cursorPos;
    }

    /**
      @override
    */
    totalInputPositions() {
      let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      let total = 0;
      this._forEachBlocksInRange(fromPos, toPos, (b, _, bFromPos, bToPos) => {
        total += b.totalInputPositions(bFromPos, bToPos);
      });
      return total;
    }

    /** Get block by name */
    maskedBlock(name) {
      return this.maskedBlocks(name)[0];
    }

    /** Get all blocks by name */
    maskedBlocks(name) {
      const indices = this._maskedBlocks[name];
      if (!indices) return [];
      return indices.map(gi => this._blocks[gi]);
    }
  }
  MaskedPattern.DEFAULTS = {
    lazy: true,
    placeholderChar: '_'
  };
  MaskedPattern.STOP_CHAR = '`';
  MaskedPattern.ESCAPE_CHAR = '\\';
  MaskedPattern.InputDefinition = PatternInputDefinition;
  MaskedPattern.FixedDefinition = PatternFixedDefinition;
  IMask.MaskedPattern = MaskedPattern;

  /** Pattern which accepts ranges */
  class MaskedRange extends MaskedPattern {
    /**
      Optionally sets max length of pattern.
      Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
    */

    /** Min bound */

    /** Max bound */

    /** */

    get _matchFrom() {
      return this.maxLength - String(this.from).length;
    }

    /**
      @override
    */
    _update(opts) {
      // TODO type
      opts = Object.assign({
        to: this.to || 0,
        from: this.from || 0,
        maxLength: this.maxLength || 0
      }, opts);
      let maxLength = String(opts.to).length;
      if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
      opts.maxLength = maxLength;
      const fromStr = String(opts.from).padStart(maxLength, '0');
      const toStr = String(opts.to).padStart(maxLength, '0');
      let sameCharsCount = 0;
      while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) ++sameCharsCount;
      opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(maxLength - sameCharsCount);
      super._update(opts);
    }

    /**
      @override
    */
    get isComplete() {
      return super.isComplete && Boolean(this.value);
    }
    boundaries(str) {
      let minstr = '';
      let maxstr = '';
      const [, placeholder, num] = str.match(/^(\D*)(\d*)(\D*)/) || [];
      if (num) {
        minstr = '0'.repeat(placeholder.length) + num;
        maxstr = '9'.repeat(placeholder.length) + num;
      }
      minstr = minstr.padEnd(this.maxLength, '0');
      maxstr = maxstr.padEnd(this.maxLength, '9');
      return [minstr, maxstr];
    }

    // TODO str is a single char everytime
    /**
      @override
    */
    doPrepare(ch) {
      let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let details;
      [ch, details] = normalizePrepare(super.doPrepare(ch.replace(/\D/g, ''), flags));
      if (!this.autofix || !ch) return ch;
      const fromStr = String(this.from).padStart(this.maxLength, '0');
      const toStr = String(this.to).padStart(this.maxLength, '0');
      let nextVal = this.value + ch;
      if (nextVal.length > this.maxLength) return '';
      const [minstr, maxstr] = this.boundaries(nextVal);
      if (Number(maxstr) < this.from) return fromStr[nextVal.length - 1];
      if (Number(minstr) > this.to) {
        if (this.autofix === 'pad' && nextVal.length < this.maxLength) {
          return ['', details.aggregate(this.append(fromStr[nextVal.length - 1] + ch, flags))];
        }
        return toStr[nextVal.length - 1];
      }
      return ch;
    }

    /**
      @override
    */
    doValidate() {
      const str = this.value;
      const firstNonZero = str.search(/[^0]/);
      if (firstNonZero === -1 && str.length <= this._matchFrom) return true;
      const [minstr, maxstr] = this.boundaries(str);
      return this.from <= Number(maxstr) && Number(minstr) <= this.to && super.doValidate(...arguments);
    }
  }
  IMask.MaskedRange = MaskedRange;

  /** Date mask */
  class MaskedDate extends MaskedPattern {
    /** Pattern mask for date according to {@link MaskedDate#format} */

    /** Start date */

    /** End date */

    /** */

    /**
      @param {Object} opts
    */
    constructor(opts) {
      super(Object.assign({}, MaskedDate.DEFAULTS, opts));
    }

    /**
      @override
    */
    _update(opts) {
      if (opts.mask === Date) delete opts.mask;
      if (opts.pattern) opts.mask = opts.pattern;
      const blocks = opts.blocks;
      opts.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS());
      // adjust year block
      if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
      if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();
      if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
        opts.blocks.m.from = opts.min.getMonth() + 1;
        opts.blocks.m.to = opts.max.getMonth() + 1;
        if (opts.blocks.m.from === opts.blocks.m.to) {
          opts.blocks.d.from = opts.min.getDate();
          opts.blocks.d.to = opts.max.getDate();
        }
      }
      Object.assign(opts.blocks, this.blocks, blocks);

      // add autofix
      Object.keys(opts.blocks).forEach(bk => {
        const b = opts.blocks[bk];
        if (!('autofix' in b) && 'autofix' in opts) b.autofix = opts.autofix;
      });
      super._update(opts);
    }

    /**
      @override
    */
    doValidate() {
      const date = this.date;
      return super.doValidate(...arguments) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
    }

    /** Checks if date is exists */
    isDateExist(str) {
      return this.format(this.parse(str, this), this).indexOf(str) >= 0;
    }

    /** Parsed Date */
    get date() {
      return this.typedValue;
    }
    set date(date) {
      this.typedValue = date;
    }

    /**
      @override
    */
    get typedValue() {
      return this.isComplete ? super.typedValue : null;
    }
    set typedValue(value) {
      super.typedValue = value;
    }

    /**
      @override
    */
    maskEquals(mask) {
      return mask === Date || super.maskEquals(mask);
    }
  }
  MaskedDate.DEFAULTS = {
    pattern: 'd{.}`m{.}`Y',
    format: date => {
      if (!date) return '';
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return [day, month, year].join('.');
    },
    parse: str => {
      const [day, month, year] = str.split('.');
      return new Date(year, month - 1, day);
    }
  };
  MaskedDate.GET_DEFAULT_BLOCKS = () => ({
    d: {
      mask: MaskedRange,
      from: 1,
      to: 31,
      maxLength: 2
    },
    m: {
      mask: MaskedRange,
      from: 1,
      to: 12,
      maxLength: 2
    },
    Y: {
      mask: MaskedRange,
      from: 1900,
      to: 9999
    }
  });
  IMask.MaskedDate = MaskedDate;

  /**
    Generic element API to use with mask
    @interface
  */
  class MaskElement {
    /** */

    /** */

    /** */

    /** Safely returns selection start */
    get selectionStart() {
      let start;
      try {
        start = this._unsafeSelectionStart;
      } catch (e) {}
      return start != null ? start : this.value.length;
    }

    /** Safely returns selection end */
    get selectionEnd() {
      let end;
      try {
        end = this._unsafeSelectionEnd;
      } catch (e) {}
      return end != null ? end : this.value.length;
    }

    /** Safely sets element selection */
    select(start, end) {
      if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;
      try {
        this._unsafeSelect(start, end);
      } catch (e) {}
    }

    /** Should be overriden in subclasses */
    _unsafeSelect(start, end) {}
    /** Should be overriden in subclasses */
    get isActive() {
      return false;
    }
    /** Should be overriden in subclasses */
    bindEvents(handlers) {}
    /** Should be overriden in subclasses */
    unbindEvents() {}
  }
  IMask.MaskElement = MaskElement;

  /** Bridge between HTMLElement and {@link Masked} */
  class HTMLMaskElement extends MaskElement {
    /** Mapping between HTMLElement events and mask internal events */

    /** HTMLElement to use mask on */

    /**
      @param {HTMLInputElement|HTMLTextAreaElement} input
    */
    constructor(input) {
      super();
      this.input = input;
      this._handlers = {};
    }

    /** */
    // $FlowFixMe https://github.com/facebook/flow/issues/2839
    get rootElement() {
      var _this$input$getRootNo, _this$input$getRootNo2, _this$input;
      return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) === null || _this$input$getRootNo2 === void 0 ? void 0 : _this$input$getRootNo2.call(_this$input)) !== null && _this$input$getRootNo !== void 0 ? _this$input$getRootNo : document;
    }

    /**
      Is element in focus
      @readonly
    */
    get isActive() {
      //$FlowFixMe
      return this.input === this.rootElement.activeElement;
    }

    /**
      Returns HTMLElement selection start
      @override
    */
    get _unsafeSelectionStart() {
      return this.input.selectionStart;
    }

    /**
      Returns HTMLElement selection end
      @override
    */
    get _unsafeSelectionEnd() {
      return this.input.selectionEnd;
    }

    /**
      Sets HTMLElement selection
      @override
    */
    _unsafeSelect(start, end) {
      this.input.setSelectionRange(start, end);
    }

    /**
      HTMLElement value
      @override
    */
    get value() {
      return this.input.value;
    }
    set value(value) {
      this.input.value = value;
    }

    /**
      Binds HTMLElement events to mask internal events
      @override
    */
    bindEvents(handlers) {
      Object.keys(handlers).forEach(event => this._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]));
    }

    /**
      Unbinds HTMLElement events to mask internal events
      @override
    */
    unbindEvents() {
      Object.keys(this._handlers).forEach(event => this._toggleEventHandler(event));
    }

    /** */
    _toggleEventHandler(event, handler) {
      if (this._handlers[event]) {
        this.input.removeEventListener(event, this._handlers[event]);
        delete this._handlers[event];
      }
      if (handler) {
        this.input.addEventListener(event, handler);
        this._handlers[event] = handler;
      }
    }
  }
  HTMLMaskElement.EVENTS_MAP = {
    selectionChange: 'keydown',
    input: 'input',
    drop: 'drop',
    click: 'click',
    focus: 'focus',
    commit: 'blur'
  };
  IMask.HTMLMaskElement = HTMLMaskElement;

  class HTMLContenteditableMaskElement extends HTMLMaskElement {
    /**
      Returns HTMLElement selection start
      @override
    */
    get _unsafeSelectionStart() {
      const root = this.rootElement;
      const selection = root.getSelection && root.getSelection();
      const anchorOffset = selection && selection.anchorOffset;
      const focusOffset = selection && selection.focusOffset;
      if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) {
        return anchorOffset;
      }
      return focusOffset;
    }

    /**
      Returns HTMLElement selection end
      @override
    */
    get _unsafeSelectionEnd() {
      const root = this.rootElement;
      const selection = root.getSelection && root.getSelection();
      const anchorOffset = selection && selection.anchorOffset;
      const focusOffset = selection && selection.focusOffset;
      if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) {
        return anchorOffset;
      }
      return focusOffset;
    }

    /**
      Sets HTMLElement selection
      @override
    */
    _unsafeSelect(start, end) {
      if (!this.rootElement.createRange) return;
      const range = this.rootElement.createRange();
      range.setStart(this.input.firstChild || this.input, start);
      range.setEnd(this.input.lastChild || this.input, end);
      const root = this.rootElement;
      const selection = root.getSelection && root.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }

    /**
      HTMLElement value
      @override
    */
    get value() {
      // $FlowFixMe
      return this.input.textContent;
    }
    set value(value) {
      this.input.textContent = value;
    }
  }
  IMask.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;

  const _excluded$1 = ["mask"];

  /** Listens to element events and controls changes between element and {@link Masked} */
  class InputMask {
    /**
      View element
      @readonly
    */

    /**
      Internal {@link Masked} model
      @readonly
    */

    /**
      @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
      @param {Object} opts
    */
    constructor(el, opts) {
      this.el = el instanceof MaskElement ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new HTMLContenteditableMaskElement(el) : new HTMLMaskElement(el);
      this.masked = createMask(opts);
      this._listeners = {};
      this._value = '';
      this._unmaskedValue = '';
      this._saveSelection = this._saveSelection.bind(this);
      this._onInput = this._onInput.bind(this);
      this._onChange = this._onChange.bind(this);
      this._onDrop = this._onDrop.bind(this);
      this._onFocus = this._onFocus.bind(this);
      this._onClick = this._onClick.bind(this);
      this.alignCursor = this.alignCursor.bind(this);
      this.alignCursorFriendly = this.alignCursorFriendly.bind(this);
      this._bindEvents();

      // refresh
      this.updateValue();
      this._onChange();
    }

    /** Read or update mask */
    get mask() {
      return this.masked.mask;
    }
    maskEquals(mask) {
      var _this$masked;
      return mask == null || ((_this$masked = this.masked) === null || _this$masked === void 0 ? void 0 : _this$masked.maskEquals(mask));
    }
    set mask(mask) {
      if (this.maskEquals(mask)) return;

      // $FlowFixMe No ideas ... after update
      if (!(mask instanceof IMask.Masked) && this.masked.constructor === maskedClass(mask)) {
        this.masked.updateOptions({
          mask
        });
        return;
      }
      const masked = createMask({
        mask
      });
      masked.unmaskedValue = this.masked.unmaskedValue;
      this.masked = masked;
    }

    /** Raw value */
    get value() {
      return this._value;
    }
    set value(str) {
      if (this.value === str) return;
      this.masked.value = str;
      this.updateControl();
      this.alignCursor();
    }

    /** Unmasked value */
    get unmaskedValue() {
      return this._unmaskedValue;
    }
    set unmaskedValue(str) {
      if (this.unmaskedValue === str) return;
      this.masked.unmaskedValue = str;
      this.updateControl();
      this.alignCursor();
    }

    /** Typed unmasked value */
    get typedValue() {
      return this.masked.typedValue;
    }
    set typedValue(val) {
      if (this.masked.typedValueEquals(val)) return;
      this.masked.typedValue = val;
      this.updateControl();
      this.alignCursor();
    }

    /** Display value */
    get displayValue() {
      return this.masked.displayValue;
    }

    /**
      Starts listening to element events
      @protected
    */
    _bindEvents() {
      this.el.bindEvents({
        selectionChange: this._saveSelection,
        input: this._onInput,
        drop: this._onDrop,
        click: this._onClick,
        focus: this._onFocus,
        commit: this._onChange
      });
    }

    /**
      Stops listening to element events
      @protected
     */
    _unbindEvents() {
      if (this.el) this.el.unbindEvents();
    }

    /**
      Fires custom event
      @protected
     */
    _fireEvent(ev) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      const listeners = this._listeners[ev];
      if (!listeners) return;
      listeners.forEach(l => l(...args));
    }

    /**
      Current selection start
      @readonly
    */
    get selectionStart() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
    }

    /** Current cursor position */
    get cursorPos() {
      return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
    }
    set cursorPos(pos) {
      if (!this.el || !this.el.isActive) return;
      this.el.select(pos, pos);
      this._saveSelection();
    }

    /**
      Stores current selection
      @protected
    */
    _saveSelection( /* ev */
    ) {
      if (this.displayValue !== this.el.value) {
        console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
      }

      this._selection = {
        start: this.selectionStart,
        end: this.cursorPos
      };
    }

    /** Syncronizes model value from view */
    updateValue() {
      this.masked.value = this.el.value;
      this._value = this.masked.value;
    }

    /** Syncronizes view from model value, fires change events */
    updateControl() {
      const newUnmaskedValue = this.masked.unmaskedValue;
      const newValue = this.masked.value;
      const newDisplayValue = this.displayValue;
      const isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
      this._unmaskedValue = newUnmaskedValue;
      this._value = newValue;
      if (this.el.value !== newDisplayValue) this.el.value = newDisplayValue;
      if (isChanged) this._fireChangeEvents();
    }

    /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */
    updateOptions(opts) {
      const {
          mask
        } = opts,
        restOpts = _objectWithoutPropertiesLoose(opts, _excluded$1);
      const updateMask = !this.maskEquals(mask);
      const updateOpts = !objectIncludes(this.masked, restOpts);
      if (updateMask) this.mask = mask;
      if (updateOpts) this.masked.updateOptions(restOpts);
      if (updateMask || updateOpts) this.updateControl();
    }

    /** Updates cursor */
    updateCursor(cursorPos) {
      if (cursorPos == null) return;
      this.cursorPos = cursorPos;

      // also queue change cursor for mobile browsers
      this._delayUpdateCursor(cursorPos);
    }

    /**
      Delays cursor update to support mobile browsers
      @private
    */
    _delayUpdateCursor(cursorPos) {
      this._abortUpdateCursor();
      this._changingCursorPos = cursorPos;
      this._cursorChanging = setTimeout(() => {
        if (!this.el) return; // if was destroyed
        this.cursorPos = this._changingCursorPos;
        this._abortUpdateCursor();
      }, 10);
    }

    /**
      Fires custom events
      @protected
    */
    _fireChangeEvents() {
      this._fireEvent('accept', this._inputEvent);
      if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
    }

    /**
      Aborts delayed cursor update
      @private
    */
    _abortUpdateCursor() {
      if (this._cursorChanging) {
        clearTimeout(this._cursorChanging);
        delete this._cursorChanging;
      }
    }

    /** Aligns cursor to nearest available position */
    alignCursor() {
      this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT));
    }

    /** Aligns cursor only if selection is empty */
    alignCursorFriendly() {
      if (this.selectionStart !== this.cursorPos) return; // skip if range is selected
      this.alignCursor();
    }

    /** Adds listener on custom event */
    on(ev, handler) {
      if (!this._listeners[ev]) this._listeners[ev] = [];
      this._listeners[ev].push(handler);
      return this;
    }

    /** Removes custom event listener */
    off(ev, handler) {
      if (!this._listeners[ev]) return this;
      if (!handler) {
        delete this._listeners[ev];
        return this;
      }
      const hIndex = this._listeners[ev].indexOf(handler);
      if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
      return this;
    }

    /** Handles view input event */
    _onInput(e) {
      this._inputEvent = e;
      this._abortUpdateCursor();

      // fix strange IE behavior
      if (!this._selection) return this.updateValue();
      const details = new ActionDetails(
      // new state
      this.el.value, this.cursorPos,
      // old state
      this.displayValue, this._selection);
      const oldRawValue = this.masked.rawInputValue;
      const offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection, {
        input: true,
        raw: true
      }).offset;

      // force align in remove direction only if no input chars were removed
      // otherwise we still need to align with NONE (to get out from fixed symbols for instance)
      const removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
      let cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
      if (removeDirection !== DIRECTION.NONE) cursorPos = this.masked.nearestInputPos(cursorPos, DIRECTION.NONE);
      this.updateControl();
      this.updateCursor(cursorPos);
      delete this._inputEvent;
    }

    /** Handles view change event and commits model value */
    _onChange() {
      if (this.displayValue !== this.el.value) {
        this.updateValue();
      }
      this.masked.doCommit();
      this.updateControl();
      this._saveSelection();
    }

    /** Handles view drop event, prevents by default */
    _onDrop(ev) {
      ev.preventDefault();
      ev.stopPropagation();
    }

    /** Restore last selection on focus */
    _onFocus(ev) {
      this.alignCursorFriendly();
    }

    /** Restore last selection on focus */
    _onClick(ev) {
      this.alignCursorFriendly();
    }

    /** Unbind view events and removes element reference */
    destroy() {
      this._unbindEvents();
      // $FlowFixMe why not do so?
      this._listeners.length = 0;
      // $FlowFixMe
      delete this.el;
    }
  }
  IMask.InputMask = InputMask;

  /** Pattern which validates enum values */
  class MaskedEnum extends MaskedPattern {
    /**
      @override
      @param {Object} opts
    */
    _update(opts) {
      // TODO type
      if (opts.enum) opts.mask = '*'.repeat(opts.enum[0].length);
      super._update(opts);
    }

    /**
      @override
    */
    doValidate() {
      return this.enum.some(e => e.indexOf(this.unmaskedValue) >= 0) && super.doValidate(...arguments);
    }
  }
  IMask.MaskedEnum = MaskedEnum;

  /**
    Number mask
    @param {Object} opts
    @param {string} opts.radix - Single char
    @param {string} opts.thousandsSeparator - Single char
    @param {Array<string>} opts.mapToRadix - Array of single chars
    @param {number} opts.min
    @param {number} opts.max
    @param {number} opts.scale - Digits after point
    @param {boolean} opts.signed - Allow negative
    @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
    @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
  */
  class MaskedNumber extends Masked {
    /** Single char */

    /** Single char */

    /** Array of single chars */

    /** */

    /** */

    /** Digits after point */

    /** */

    /** Flag to remove leading and trailing zeros in the end of editing */

    /** Flag to pad trailing zeros after point in the end of editing */

    constructor(opts) {
      super(Object.assign({}, MaskedNumber.DEFAULTS, opts));
    }

    /**
      @override
    */
    _update(opts) {
      super._update(opts);
      this._updateRegExps();
    }

    /** */
    _updateRegExps() {
      let start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
      let mid = '\\d*';
      let end = (this.scale ? "(".concat(escapeRegExp(this.radix), "\\d{0,").concat(this.scale, "})?") : '') + '$';
      this._numberRegExp = new RegExp(start + mid + end);
      this._mapToRadixRegExp = new RegExp("[".concat(this.mapToRadix.map(escapeRegExp).join(''), "]"), 'g');
      this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), 'g');
    }

    /** */
    _removeThousandsSeparators(value) {
      return value.replace(this._thousandsSeparatorRegExp, '');
    }

    /** */
    _insertThousandsSeparators(value) {
      // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
      const parts = value.split(this.radix);
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
      return parts.join(this.radix);
    }

    /**
      @override
    */
    doPrepare(ch) {
      let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      ch = this._removeThousandsSeparators(this.scale && this.mapToRadix.length && (
      /*
        radix should be mapped when
        1) input is done from keyboard = flags.input && flags.raw
        2) unmasked value is set = !flags.input && !flags.raw
        and should not be mapped when
        1) value is set = flags.input && !flags.raw
        2) raw value is set = !flags.input && flags.raw
      */
      flags.input && flags.raw || !flags.input && !flags.raw) ? ch.replace(this._mapToRadixRegExp, this.radix) : ch);
      const [prepCh, details] = normalizePrepare(super.doPrepare(ch, flags));
      if (ch && !prepCh) details.skip = true;
      return [prepCh, details];
    }

    /** */
    _separatorsCount(to) {
      let extendOnSeparators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      let count = 0;
      for (let pos = 0; pos < to; ++pos) {
        if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
          ++count;
          if (extendOnSeparators) to += this.thousandsSeparator.length;
        }
      }
      return count;
    }

    /** */
    _separatorsCountFromSlice() {
      let slice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value;
      return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
    }

    /**
      @override
    */
    extractInput() {
      let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      let flags = arguments.length > 2 ? arguments[2] : undefined;
      [fromPos, toPos] = this._adjustRangeWithSeparators(fromPos, toPos);
      return this._removeThousandsSeparators(super.extractInput(fromPos, toPos, flags));
    }

    /**
      @override
    */
    _appendCharRaw(ch) {
      let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!this.thousandsSeparator) return super._appendCharRaw(ch, flags);
      const prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
      const prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);
      this._value = this._removeThousandsSeparators(this.value);
      const appendDetails = super._appendCharRaw(ch, flags);
      this._value = this._insertThousandsSeparators(this._value);
      const beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
      const beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);
      appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
      appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
      return appendDetails;
    }

    /** */
    _findSeparatorAround(pos) {
      if (this.thousandsSeparator) {
        const searchFrom = pos - this.thousandsSeparator.length + 1;
        const separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
        if (separatorPos <= pos) return separatorPos;
      }
      return -1;
    }
    _adjustRangeWithSeparators(from, to) {
      const separatorAroundFromPos = this._findSeparatorAround(from);
      if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;
      const separatorAroundToPos = this._findSeparatorAround(to);
      if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
      return [from, to];
    }

    /**
      @override
    */
    remove() {
      let fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      let toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
      [fromPos, toPos] = this._adjustRangeWithSeparators(fromPos, toPos);
      const valueBeforePos = this.value.slice(0, fromPos);
      const valueAfterPos = this.value.slice(toPos);
      const prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);
      this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));
      const beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);
      return new ChangeDetails({
        tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
      });
    }

    /**
      @override
    */
    nearestInputPos(cursorPos, direction) {
      if (!this.thousandsSeparator) return cursorPos;
      switch (direction) {
        case DIRECTION.NONE:
        case DIRECTION.LEFT:
        case DIRECTION.FORCE_LEFT:
          {
            const separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);
            if (separatorAtLeftPos >= 0) {
              const separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;
              if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) {
                return separatorAtLeftPos;
              }
            }
            break;
          }
        case DIRECTION.RIGHT:
        case DIRECTION.FORCE_RIGHT:
          {
            const separatorAtRightPos = this._findSeparatorAround(cursorPos);
            if (separatorAtRightPos >= 0) {
              return separatorAtRightPos + this.thousandsSeparator.length;
            }
          }
      }
      return cursorPos;
    }

    /**
      @override
    */
    doValidate(flags) {
      // validate as string
      let valid = Boolean(this._removeThousandsSeparators(this.value).match(this._numberRegExp));
      if (valid) {
        // validate as number
        const number = this.number;
        valid = valid && !isNaN(number) && (
        // check min bound for negative values
        this.min == null || this.min >= 0 || this.min <= this.number) && (
        // check max bound for positive values
        this.max == null || this.max <= 0 || this.number <= this.max);
      }
      return valid && super.doValidate(flags);
    }

    /**
      @override
    */
    doCommit() {
      if (this.value) {
        const number = this.number;
        let validnum = number;

        // check bounds
        if (this.min != null) validnum = Math.max(validnum, this.min);
        if (this.max != null) validnum = Math.min(validnum, this.max);
        if (validnum !== number) this.unmaskedValue = this.doFormat(validnum);
        let formatted = this.value;
        if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
        if (this.padFractionalZeros && this.scale > 0) formatted = this._padFractionalZeros(formatted);
        this._value = formatted;
      }
      super.doCommit();
    }

    /** */
    _normalizeZeros(value) {
      const parts = this._removeThousandsSeparators(value).split(this.radix);

      // remove leading zeros
      parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, (match, sign, zeros, num) => sign + num);
      // add leading zero
      if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';
      if (parts.length > 1) {
        parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros
        if (!parts[1].length) parts.length = 1; // remove fractional
      }

      return this._insertThousandsSeparators(parts.join(this.radix));
    }

    /** */
    _padFractionalZeros(value) {
      if (!value) return value;
      const parts = value.split(this.radix);
      if (parts.length < 2) parts.push('');
      parts[1] = parts[1].padEnd(this.scale, '0');
      return parts.join(this.radix);
    }

    /** */
    doSkipInvalid(ch) {
      let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let checkTail = arguments.length > 2 ? arguments[2] : undefined;
      const dropFractional = this.scale === 0 && ch !== this.thousandsSeparator && (ch === this.radix || ch === MaskedNumber.UNMASKED_RADIX || this.mapToRadix.includes(ch));
      return super.doSkipInvalid(ch, flags, checkTail) && !dropFractional;
    }

    /**
      @override
    */
    get unmaskedValue() {
      return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, MaskedNumber.UNMASKED_RADIX);
    }
    set unmaskedValue(unmaskedValue) {
      super.unmaskedValue = unmaskedValue;
    }

    /**
      @override
    */
    get typedValue() {
      return this.doParse(this.unmaskedValue);
    }
    set typedValue(n) {
      this.rawInputValue = this.doFormat(n).replace(MaskedNumber.UNMASKED_RADIX, this.radix);
    }

    /** Parsed Number */
    get number() {
      return this.typedValue;
    }
    set number(number) {
      this.typedValue = number;
    }

    /**
      Is negative allowed
      @readonly
    */
    get allowNegative() {
      return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
    }

    /**
      @override
    */
    typedValueEquals(value) {
      // handle  0 -> '' case (typed = 0 even if value = '')
      // for details see https://github.com/uNmAnNeR/imaskjs/issues/134
      return (super.typedValueEquals(value) || MaskedNumber.EMPTY_VALUES.includes(value) && MaskedNumber.EMPTY_VALUES.includes(this.typedValue)) && !(value === 0 && this.value === '');
    }
  }
  MaskedNumber.UNMASKED_RADIX = '.';
  MaskedNumber.DEFAULTS = {
    radix: ',',
    thousandsSeparator: '',
    mapToRadix: [MaskedNumber.UNMASKED_RADIX],
    scale: 2,
    signed: false,
    normalizeZeros: true,
    padFractionalZeros: false,
    parse: Number,
    format: n => n.toLocaleString('en-US', {
      useGrouping: false,
      maximumFractionDigits: 20
    })
  };
  MaskedNumber.EMPTY_VALUES = [...Masked.EMPTY_VALUES, 0];
  IMask.MaskedNumber = MaskedNumber;

  /** Masking by custom Function */
  class MaskedFunction extends Masked {
    /**
      @override
      @param {Object} opts
    */
    _update(opts) {
      if (opts.mask) opts.validate = opts.mask;
      super._update(opts);
    }
  }
  IMask.MaskedFunction = MaskedFunction;

  const _excluded = ["compiledMasks", "currentMaskRef", "currentMask"],
    _excluded2 = ["mask"];
  /** Dynamic mask for choosing apropriate mask in run-time */
  class MaskedDynamic extends Masked {
    /** Currently chosen mask */

    /** Compliled {@link Masked} options */

    /** Chooses {@link Masked} depending on input value */

    /**
      @param {Object} opts
    */
    constructor(opts) {
      super(Object.assign({}, MaskedDynamic.DEFAULTS, opts));
      this.currentMask = null;
    }

    /**
      @override
    */
    _update(opts) {
      super._update(opts);
      if ('mask' in opts) {
        // mask could be totally dynamic with only `dispatch` option
        this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(m => createMask(m)) : [];

        // this.currentMask = this.doDispatch(''); // probably not needed but lets see
      }
    }

    /**
      @override
    */
    _appendCharRaw(ch) {
      let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      const details = this._applyDispatch(ch, flags);
      if (this.currentMask) {
        details.aggregate(this.currentMask._appendChar(ch, this.currentMaskFlags(flags)));
      }
      return details;
    }
    _applyDispatch() {
      let appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let tail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      const prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
      const inputValue = this.rawInputValue;
      const insertValue = flags.tail && flags._beforeTailState != null ?
      // $FlowFixMe - tired to fight with type system
      flags._beforeTailState._rawInputValue : inputValue;
      const tailValue = inputValue.slice(insertValue.length);
      const prevMask = this.currentMask;
      const details = new ChangeDetails();
      const prevMaskState = prevMask === null || prevMask === void 0 ? void 0 : prevMask.state;

      // clone flags to prevent overwriting `_beforeTailState`
      this.currentMask = this.doDispatch(appended, Object.assign({}, flags), tail);

      // restore state after dispatch
      if (this.currentMask) {
        if (this.currentMask !== prevMask) {
          // if mask changed reapply input
          this.currentMask.reset();
          if (insertValue) {
            // $FlowFixMe - it's ok, we don't change current mask above
            const d = this.currentMask.append(insertValue, {
              raw: true
            });
            details.tailShift = d.inserted.length - prevValueBeforeTail.length;
          }
          if (tailValue) {
            // $FlowFixMe - it's ok, we don't change current mask above
            details.tailShift += this.currentMask.append(tailValue, {
              raw: true,
              tail: true
            }).tailShift;
          }
        } else {
          // Dispatch can do something bad with state, so
          // restore prev mask state
          this.currentMask.state = prevMaskState;
        }
      }
      return details;
    }
    _appendPlaceholder() {
      const details = this._applyDispatch(...arguments);
      if (this.currentMask) {
        details.aggregate(this.currentMask._appendPlaceholder());
      }
      return details;
    }

    /**
     @override
    */
    _appendEager() {
      const details = this._applyDispatch(...arguments);
      if (this.currentMask) {
        details.aggregate(this.currentMask._appendEager());
      }
      return details;
    }
    appendTail(tail) {
      const details = new ChangeDetails();
      if (tail) details.aggregate(this._applyDispatch('', {}, tail));
      return details.aggregate(this.currentMask ? this.currentMask.appendTail(tail) : super.appendTail(tail));
    }
    currentMaskFlags(flags) {
      var _flags$_beforeTailSta, _flags$_beforeTailSta2;
      return Object.assign({}, flags, {
        _beforeTailState: ((_flags$_beforeTailSta = flags._beforeTailState) === null || _flags$_beforeTailSta === void 0 ? void 0 : _flags$_beforeTailSta.currentMaskRef) === this.currentMask && ((_flags$_beforeTailSta2 = flags._beforeTailState) === null || _flags$_beforeTailSta2 === void 0 ? void 0 : _flags$_beforeTailSta2.currentMask) || flags._beforeTailState
      });
    }

    /**
      @override
    */
    doDispatch(appended) {
      let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let tail = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      return this.dispatch(appended, this, flags, tail);
    }

    /**
      @override
    */
    doValidate(flags) {
      return super.doValidate(flags) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(flags)));
    }

    /**
      @override
    */
    doPrepare(str) {
      let flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      let [s, details] = normalizePrepare(super.doPrepare(str, flags));
      if (this.currentMask) {
        let currentDetails;
        [s, currentDetails] = normalizePrepare(super.doPrepare(s, this.currentMaskFlags(flags)));
        details = details.aggregate(currentDetails);
      }
      return [s, details];
    }

    /**
      @override
    */
    reset() {
      var _this$currentMask;
      (_this$currentMask = this.currentMask) === null || _this$currentMask === void 0 ? void 0 : _this$currentMask.reset();
      this.compiledMasks.forEach(m => m.reset());
    }

    /**
      @override
    */
    get value() {
      return this.currentMask ? this.currentMask.value : '';
    }
    set value(value) {
      super.value = value;
    }

    /**
      @override
    */
    get unmaskedValue() {
      return this.currentMask ? this.currentMask.unmaskedValue : '';
    }
    set unmaskedValue(unmaskedValue) {
      super.unmaskedValue = unmaskedValue;
    }

    /**
      @override
    */
    get typedValue() {
      return this.currentMask ? this.currentMask.typedValue : '';
    }

    // probably typedValue should not be used with dynamic
    set typedValue(value) {
      let unmaskedValue = String(value);

      // double check it
      if (this.currentMask) {
        this.currentMask.typedValue = value;
        unmaskedValue = this.currentMask.unmaskedValue;
      }
      this.unmaskedValue = unmaskedValue;
    }
    get displayValue() {
      return this.currentMask ? this.currentMask.displayValue : '';
    }

    /**
      @override
    */
    get isComplete() {
      var _this$currentMask2;
      return Boolean((_this$currentMask2 = this.currentMask) === null || _this$currentMask2 === void 0 ? void 0 : _this$currentMask2.isComplete);
    }

    /**
      @override
    */
    get isFilled() {
      var _this$currentMask3;
      return Boolean((_this$currentMask3 = this.currentMask) === null || _this$currentMask3 === void 0 ? void 0 : _this$currentMask3.isFilled);
    }

    /**
      @override
    */
    remove() {
      const details = new ChangeDetails();
      if (this.currentMask) {
        details.aggregate(this.currentMask.remove(...arguments))
        // update with dispatch
        .aggregate(this._applyDispatch());
      }
      return details;
    }

    /**
      @override
    */
    get state() {
      var _this$currentMask4;
      return Object.assign({}, super.state, {
        _rawInputValue: this.rawInputValue,
        compiledMasks: this.compiledMasks.map(m => m.state),
        currentMaskRef: this.currentMask,
        currentMask: (_this$currentMask4 = this.currentMask) === null || _this$currentMask4 === void 0 ? void 0 : _this$currentMask4.state
      });
    }
    set state(state) {
      const {
          compiledMasks,
          currentMaskRef,
          currentMask
        } = state,
        maskedState = _objectWithoutPropertiesLoose(state, _excluded);
      this.compiledMasks.forEach((m, mi) => m.state = compiledMasks[mi]);
      if (currentMaskRef != null) {
        this.currentMask = currentMaskRef;
        this.currentMask.state = currentMask;
      }
      super.state = maskedState;
    }

    /**
      @override
    */
    extractInput() {
      return this.currentMask ? this.currentMask.extractInput(...arguments) : '';
    }

    /**
      @override
    */
    extractTail() {
      return this.currentMask ? this.currentMask.extractTail(...arguments) : super.extractTail(...arguments);
    }

    /**
      @override
    */
    doCommit() {
      if (this.currentMask) this.currentMask.doCommit();
      super.doCommit();
    }

    /**
      @override
    */
    nearestInputPos() {
      return this.currentMask ? this.currentMask.nearestInputPos(...arguments) : super.nearestInputPos(...arguments);
    }
    get overwrite() {
      return this.currentMask ? this.currentMask.overwrite : super.overwrite;
    }
    set overwrite(overwrite) {
      console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
    }
    get eager() {
      return this.currentMask ? this.currentMask.eager : super.eager;
    }
    set eager(eager) {
      console.warn('"eager" option is not available in dynamic mask, use this option in siblings');
    }
    get skipInvalid() {
      return this.currentMask ? this.currentMask.skipInvalid : super.skipInvalid;
    }
    set skipInvalid(skipInvalid) {
      if (this.isInitialized || skipInvalid !== Masked.DEFAULTS.skipInvalid) {
        console.warn('"skipInvalid" option is not available in dynamic mask, use this option in siblings');
      }
    }

    /**
      @override
    */
    maskEquals(mask) {
      return Array.isArray(mask) && this.compiledMasks.every((m, mi) => {
        if (!mask[mi]) return;
        const _mask$mi = mask[mi],
          {
            mask: oldMask
          } = _mask$mi,
          restOpts = _objectWithoutPropertiesLoose(_mask$mi, _excluded2);
        return objectIncludes(m, restOpts) && m.maskEquals(oldMask);
      });
    }

    /**
      @override
    */
    typedValueEquals(value) {
      var _this$currentMask5;
      return Boolean((_this$currentMask5 = this.currentMask) === null || _this$currentMask5 === void 0 ? void 0 : _this$currentMask5.typedValueEquals(value));
    }
  }
  MaskedDynamic.DEFAULTS = {
    dispatch: (appended, masked, flags, tail) => {
      if (!masked.compiledMasks.length) return;
      const inputValue = masked.rawInputValue;

      // simulate input
      const inputs = masked.compiledMasks.map((m, index) => {
        const isCurrent = masked.currentMask === m;
        const startInputPos = isCurrent ? m.value.length : m.nearestInputPos(m.value.length, DIRECTION.FORCE_LEFT);
        if (m.rawInputValue !== inputValue) {
          m.reset();
          m.append(inputValue, {
            raw: true
          });
        } else if (!isCurrent) {
          m.remove(startInputPos);
        }
        m.append(appended, masked.currentMaskFlags(flags));
        m.appendTail(tail);
        return {
          index,
          weight: m.rawInputValue.length,
          totalInputPositions: m.totalInputPositions(0, Math.max(startInputPos, m.nearestInputPos(m.value.length, DIRECTION.FORCE_LEFT)))
        };
      });

      // pop masks with longer values first
      inputs.sort((i1, i2) => i2.weight - i1.weight || i2.totalInputPositions - i1.totalInputPositions);
      return masked.compiledMasks[inputs[0].index];
    }
  };
  IMask.MaskedDynamic = MaskedDynamic;

  /** Mask pipe source and destination types */
  const PIPE_TYPE = {
    MASKED: 'value',
    UNMASKED: 'unmaskedValue',
    TYPED: 'typedValue'
  };

  /** Creates new pipe function depending on mask type, source and destination options */
  function createPipe(mask) {
    let from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PIPE_TYPE.MASKED;
    let to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PIPE_TYPE.MASKED;
    const masked = createMask(mask);
    return value => masked.runIsolated(m => {
      m[from] = value;
      return m[to];
    });
  }

  /** Pipes value through mask depending on mask type, source and destination options */
  function pipe(value) {
    for (var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      pipeArgs[_key - 1] = arguments[_key];
    }
    return createPipe(...pipeArgs)(value);
  }
  IMask.PIPE_TYPE = PIPE_TYPE;
  IMask.createPipe = createPipe;
  IMask.pipe = pipe;

  try {
    globalThis.IMask = IMask;
  } catch (e) {}

  exports.ChangeDetails = ChangeDetails;
  exports.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;
  exports.HTMLMaskElement = HTMLMaskElement;
  exports.InputMask = InputMask;
  exports.MaskElement = MaskElement;
  exports.Masked = Masked;
  exports.MaskedDate = MaskedDate;
  exports.MaskedDynamic = MaskedDynamic;
  exports.MaskedEnum = MaskedEnum;
  exports.MaskedFunction = MaskedFunction;
  exports.MaskedNumber = MaskedNumber;
  exports.MaskedPattern = MaskedPattern;
  exports.MaskedRange = MaskedRange;
  exports.MaskedRegExp = MaskedRegExp;
  exports.PIPE_TYPE = PIPE_TYPE;
  exports.createMask = createMask;
  exports.createPipe = createPipe;
  exports["default"] = IMask;
  exports.pipe = pipe;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=imask.js.map

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.window = global.window || {}));
}(this, (function (exports) { 'use strict';

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  /*!
   * GSAP 3.12.1
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */
  var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  },
      _defaults = {
    duration: .5,
    overwrite: false,
    delay: 0
  },
      _suppressOverwrites,
      _reverting,
      _context,
      _bigNum = 1e8,
      _tinyNum = 1 / _bigNum,
      _2PI = Math.PI * 2,
      _HALF_PI = _2PI / 4,
      _gsID = 0,
      _sqrt = Math.sqrt,
      _cos = Math.cos,
      _sin = Math.sin,
      _isString = function _isString(value) {
    return typeof value === "string";
  },
      _isFunction = function _isFunction(value) {
    return typeof value === "function";
  },
      _isNumber = function _isNumber(value) {
    return typeof value === "number";
  },
      _isUndefined = function _isUndefined(value) {
    return typeof value === "undefined";
  },
      _isObject = function _isObject(value) {
    return typeof value === "object";
  },
      _isNotFalse = function _isNotFalse(value) {
    return value !== false;
  },
      _windowExists = function _windowExists() {
    return typeof window !== "undefined";
  },
      _isFuncOrString = function _isFuncOrString(value) {
    return _isFunction(value) || _isString(value);
  },
      _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
      _isArray = Array.isArray,
      _strictNumExp = /(?:-?\.?\d|\.)+/gi,
      _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      _relExp = /[+-]=-?[.\d]+/,
      _delimitedValueExp = /[^,'"\[\]\s]+/gi,
      _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
      _globalTimeline,
      _win,
      _coreInitted,
      _doc,
      _globals = {},
      _installScope = {},
      _coreReady,
      _install = function _install(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
  },
      _missingPlugin = function _missingPlugin(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
  },
      _warn = function _warn(message, suppress) {
    return !suppress && console.warn(message);
  },
      _addGlobal = function _addGlobal(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
  },
      _emptyFunc = function _emptyFunc() {
    return 0;
  },
      _startAtRevertConfig = {
    suppressEvents: true,
    isStart: true,
    kill: false
  },
      _revertConfigNoKill = {
    suppressEvents: true,
    kill: false
  },
      _revertConfig = {
    suppressEvents: true
  },
      _reservedProps = {},
      _lazyTweens = [],
      _lazyLookup = {},
      _lastRenderedFrame,
      _plugins = {},
      _effects = {},
      _nextGCFrame = 30,
      _harnessPlugins = [],
      _callbackNames = "",
      _harness = function _harness(targets) {
    var target = targets[0],
        harnessPlugin,
        i;
    _isObject(target) || _isFunction(target) || (targets = [targets]);

    if (!(harnessPlugin = (target._gsap || {}).harness)) {
      i = _harnessPlugins.length;

      while (i-- && !_harnessPlugins[i].targetTest(target)) {}

      harnessPlugin = _harnessPlugins[i];
    }

    i = targets.length;

    while (i--) {
      targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
    }

    return targets;
  },
      _getCache = function _getCache(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
  },
      _getProperty = function _getProperty(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
  },
      _forEachName = function _forEachName(names, func) {
    return (names = names.split(",")).forEach(func) || names;
  },
      _round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
  },
      _roundPrecise = function _roundPrecise(value) {
    return Math.round(value * 10000000) / 10000000 || 0;
  },
      _parseRelative = function _parseRelative(start, value) {
    var operator = value.charAt(0),
        end = parseFloat(value.substr(2));
    start = parseFloat(start);
    return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
  },
      _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
    var l = toFind.length,
        i = 0;

    for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}

    return i < l;
  },
      _lazyRender = function _lazyRender() {
    var l = _lazyTweens.length,
        a = _lazyTweens.slice(0),
        i,
        tween;

    _lazyLookup = {};
    _lazyTweens.length = 0;

    for (i = 0; i < l; i++) {
      tween = a[i];
      tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
  },
      _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
    _lazyTweens.length && !_reverting && _lazyRender();
    animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
    _lazyTweens.length && !_reverting && _lazyRender();
  },
      _numericIfPossible = function _numericIfPossible(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
  },
      _passThrough = function _passThrough(p) {
    return p;
  },
      _setDefaults = function _setDefaults(obj, defaults) {
    for (var p in defaults) {
      p in obj || (obj[p] = defaults[p]);
    }

    return obj;
  },
      _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
    return function (obj, defaults) {
      for (var p in defaults) {
        p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
      }
    };
  },
      _merge = function _merge(base, toMerge) {
    for (var p in toMerge) {
      base[p] = toMerge[p];
    }

    return base;
  },
      _mergeDeep = function _mergeDeep(base, toMerge) {
    for (var p in toMerge) {
      p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
    }

    return base;
  },
      _copyExcluding = function _copyExcluding(obj, excluding) {
    var copy = {},
        p;

    for (p in obj) {
      p in excluding || (copy[p] = obj[p]);
    }

    return copy;
  },
      _inheritDefaults = function _inheritDefaults(vars) {
    var parent = vars.parent || _globalTimeline,
        func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;

    if (_isNotFalse(vars.inherit)) {
      while (parent) {
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
      }
    }

    return vars;
  },
      _arraysMatch = function _arraysMatch(a1, a2) {
    var i = a1.length,
        match = i === a2.length;

    while (match && i-- && a1[i] === a2[i]) {}

    return i < 0;
  },
      _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }

    if (lastProp === void 0) {
      lastProp = "_last";
    }

    var prev = parent[lastProp],
        t;

    if (sortBy) {
      t = child[sortBy];

      while (prev && prev[sortBy] > t) {
        prev = prev._prev;
      }
    }

    if (prev) {
      child._next = prev._next;
      prev._next = child;
    } else {
      child._next = parent[firstProp];
      parent[firstProp] = child;
    }

    if (child._next) {
      child._next._prev = child;
    } else {
      parent[lastProp] = child;
    }

    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
  },
      _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }

    if (lastProp === void 0) {
      lastProp = "_last";
    }

    var prev = child._prev,
        next = child._next;

    if (prev) {
      prev._next = next;
    } else if (parent[firstProp] === child) {
      parent[firstProp] = next;
    }

    if (next) {
      next._prev = prev;
    } else if (parent[lastProp] === child) {
      parent[lastProp] = prev;
    }

    child._next = child._prev = child.parent = null;
  },
      _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
    child._act = 0;
  },
      _uncache = function _uncache(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
      var a = animation;

      while (a) {
        a._dirty = 1;
        a = a.parent;
      }
    }

    return animation;
  },
      _recacheAncestors = function _recacheAncestors(animation) {
    var parent = animation.parent;

    while (parent && parent.parent) {
      parent._dirty = 1;
      parent.totalDuration();
      parent = parent.parent;
    }

    return animation;
  },
      _rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
    return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
  },
      _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
  },
      _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
  },
      _animationCycle = function _animationCycle(tTime, cycleDuration) {
    var whole = Math.floor(tTime /= cycleDuration);
    return tTime && whole === tTime ? whole - 1 : whole;
  },
      _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
  },
      _setEnd = function _setEnd(animation) {
    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
  },
      _alignPlayhead = function _alignPlayhead(animation, totalTime) {
    var parent = animation._dp;

    if (parent && parent.smoothChildTiming && animation._ts) {
      animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

      _setEnd(animation);

      parent._dirty || _uncache(parent, animation);
    }

    return animation;
  },
      _postAddChecks = function _postAddChecks(timeline, child) {
    var t;

    if (child._time || child._initted && !child._dur) {
      t = _parentToChildTotalTime(timeline.rawTime(), child);

      if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
        child.render(t, true);
      }
    }

    if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
      if (timeline._dur < timeline.duration()) {
        t = timeline;

        while (t._dp) {
          t.rawTime() >= 0 && t.totalTime(t._tTime);
          t = t._dp;
        }
      }

      timeline._zTime = -_tinyNum;
    }
  },
      _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
    child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

    _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

    _isFromOrFromStart(child) || (timeline._recent = child);
    skipChecks || _postAddChecks(timeline, child);
    timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime);
    return timeline;
  },
      _scrollTrigger = function _scrollTrigger(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
  },
      _attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
    _initTween(tween, time, tTime);

    if (!tween._initted) {
      return 1;
    }

    if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
      _lazyTweens.push(tween);

      tween._lazy = [tTime, suppressEvents];
      return 1;
    }
  },
      _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
  },
      _isFromOrFromStart = function _isFromOrFromStart(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
  },
      _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio,
        ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1,
        repeatDelay = tween._rDelay,
        tTime = 0,
        pt,
        iteration,
        prevIteration;

    if (repeatDelay && tween._repeat) {
      tTime = _clamp(0, tween._tDur, totalTime);
      iteration = _animationCycle(tTime, repeatDelay);
      tween._yoyo && iteration & 1 && (ratio = 1 - ratio);

      if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
        prevRatio = 1 - ratio;
        tween.vars.repeatRefresh && tween._initted && tween.invalidate();
      }
    }

    if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
      if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
        return;
      }

      prevIteration = tween._zTime;
      tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
      suppressEvents || (suppressEvents = totalTime && !prevIteration);
      tween.ratio = ratio;
      tween._from && (ratio = 1 - ratio);
      tween._time = 0;
      tween._tTime = tTime;
      pt = tween._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
      tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
      tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

      if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
        ratio && _removeFromParent(tween, 1);

        if (!suppressEvents && !_reverting) {
          _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

          tween._prom && tween._prom();
        }
      }
    } else if (!tween._zTime) {
      tween._zTime = totalTime;
    }
  },
      _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
    var child;

    if (time > prevTime) {
      child = animation._first;

      while (child && child._start <= time) {
        if (child.data === "isPause" && child._start > prevTime) {
          return child;
        }

        child = child._next;
      }
    } else {
      child = animation._last;

      while (child && child._start >= time) {
        if (child.data === "isPause" && child._start < prevTime) {
          return child;
        }

        child = child._prev;
      }
    }
  },
      _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat,
        dur = _roundPrecise(duration) || 0,
        totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
    animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
  },
      _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
  },
      _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
  },
      _parsePosition = function _parsePosition(animation, position, percentAnimation) {
    var labels = animation.labels,
        recent = animation._recent || _zeroPosition,
        clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
        i,
        offset,
        isPercent;

    if (_isString(position) && (isNaN(position) || position in labels)) {
      offset = position.charAt(0);
      isPercent = position.substr(-1) === "%";
      i = position.indexOf("=");

      if (offset === "<" || offset === ">") {
        i >= 0 && (position = position.replace(/=/, ""));
        return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
      }

      if (i < 0) {
        position in labels || (labels[position] = clippedDuration);
        return labels[position];
      }

      offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));

      if (isPercent && percentAnimation) {
        offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
      }

      return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
    }

    return position == null ? clippedDuration : +position;
  },
      _createTweenType = function _createTweenType(type, params, timeline) {
    var isLegacy = _isNumber(params[1]),
        varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
        vars = params[varsIndex],
        irVars,
        parent;

    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline;

    if (type) {
      irVars = vars;
      parent = timeline;

      while (parent && !("immediateRender" in irVars)) {
        irVars = parent.vars.defaults || {};
        parent = _isNotFalse(parent.vars.inherit) && parent.parent;
      }

      vars.immediateRender = _isNotFalse(irVars.immediateRender);
      type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
    }

    return new Tween(params[0], vars, params[varsIndex + 1]);
  },
      _conditionalReturn = function _conditionalReturn(value, func) {
    return value || value === 0 ? func(value) : func;
  },
      _clamp = function _clamp(min, max, value) {
    return value < min ? min : value > max ? max : value;
  },
      getUnit = function getUnit(value, v) {
    return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
  },
      clamp = function clamp(min, max, value) {
    return _conditionalReturn(value, function (v) {
      return _clamp(min, max, v);
    });
  },
      _slice = [].slice,
      _isArrayLike = function _isArrayLike(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
  },
      _flatten = function _flatten(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
      accumulator = [];
    }

    return ar.forEach(function (value) {
      var _accumulator;

      return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
  },
      toArray = function toArray(value, scope, leaveStrings) {
    return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
  },
      selector = function selector(value) {
    value = toArray(value)[0] || _warn("Invalid scope") || {};
    return function (v) {
      var el = value.current || value.nativeElement || value;
      return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
    };
  },
      shuffle = function shuffle(a) {
    return a.sort(function () {
      return .5 - Math.random();
    });
  },
      distribute = function distribute(v) {
    if (_isFunction(v)) {
      return v;
    }

    var vars = _isObject(v) ? v : {
      each: v
    },
        ease = _parseEase(vars.ease),
        from = vars.from || 0,
        base = parseFloat(vars.base) || 0,
        cache = {},
        isDecimal = from > 0 && from < 1,
        ratios = isNaN(from) || isDecimal,
        axis = vars.axis,
        ratioX = from,
        ratioY = from;

    if (_isString(from)) {
      ratioX = ratioY = {
        center: .5,
        edges: .5,
        end: 1
      }[from] || 0;
    } else if (!isDecimal && ratios) {
      ratioX = from[0];
      ratioY = from[1];
    }

    return function (i, target, a) {
      var l = (a || vars).length,
          distances = cache[l],
          originX,
          originY,
          x,
          y,
          d,
          j,
          max,
          min,
          wrapAt;

      if (!distances) {
        wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];

        if (!wrapAt) {
          max = -_bigNum;

          while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}

          wrapAt--;
        }

        distances = cache[l] = [];
        originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
        originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
        max = 0;
        min = _bigNum;

        for (j = 0; j < l; j++) {
          x = j % wrapAt - originX;
          y = originY - (j / wrapAt | 0);
          distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
          d > max && (max = d);
          d < min && (min = d);
        }

        from === "random" && shuffle(distances);
        distances.max = max - min;
        distances.min = min;
        distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
        distances.b = l < 0 ? base - l : base;
        distances.u = getUnit(vars.amount || vars.each) || 0;
        ease = ease && l < 0 ? _invertEase(ease) : ease;
      }

      l = (distances[i] - distances.min) / distances.max || 0;
      return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
    };
  },
      _roundModifier = function _roundModifier(v) {
    var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
    return function (raw) {
      var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);

      return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
    };
  },
      snap = function snap(snapTo, value) {
    var isArray = _isArray(snapTo),
        radius,
        is2D;

    if (!isArray && _isObject(snapTo)) {
      radius = isArray = snapTo.radius || _bigNum;

      if (snapTo.values) {
        snapTo = toArray(snapTo.values);

        if (is2D = !_isNumber(snapTo[0])) {
          radius *= radius;
        }
      } else {
        snapTo = _roundModifier(snapTo.increment);
      }
    }

    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
      is2D = snapTo(raw);
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function (raw) {
      var x = parseFloat(is2D ? raw.x : raw),
          y = parseFloat(is2D ? raw.y : 0),
          min = _bigNum,
          closest = 0,
          i = snapTo.length,
          dx,
          dy;

      while (i--) {
        if (is2D) {
          dx = snapTo[i].x - x;
          dy = snapTo[i].y - y;
          dx = dx * dx + dy * dy;
        } else {
          dx = Math.abs(snapTo[i] - x);
        }

        if (dx < min) {
          min = dx;
          closest = i;
        }
      }

      closest = !radius || min <= radius ? snapTo[closest] : raw;
      return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
  },
      random = function random(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
      return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
  },
      pipe = function pipe() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }

    return function (value) {
      return functions.reduce(function (v, f) {
        return f(v);
      }, value);
    };
  },
      unitize = function unitize(func, unit) {
    return function (value) {
      return func(parseFloat(value)) + (unit || getUnit(value));
    };
  },
      normalize = function normalize(min, max, value) {
    return mapRange(min, max, 0, 1, value);
  },
      _wrapArray = function _wrapArray(a, wrapper, value) {
    return _conditionalReturn(value, function (index) {
      return a[~~wrapper(index)];
    });
  },
      wrap = function wrap(min, max, value) {
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
      return (range + (value - min) % range) % range + min;
    });
  },
      wrapYoyo = function wrapYoyo(min, max, value) {
    var range = max - min,
        total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
      value = (total + (value - min) % total) % total || 0;
      return min + (value > range ? total - value : value);
    });
  },
      _replaceRandom = function _replaceRandom(value) {
    var prev = 0,
        s = "",
        i,
        nums,
        end,
        isArray;

    while (~(i = value.indexOf("random(", prev))) {
      end = value.indexOf(")", i);
      isArray = value.charAt(i + 7) === "[";
      nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
      s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
      prev = end + 1;
    }

    return s + value.substr(prev, value.length - prev);
  },
      mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin,
        outRange = outMax - outMin;
    return _conditionalReturn(value, function (value) {
      return outMin + ((value - inMin) / inRange * outRange || 0);
    });
  },
      interpolate = function interpolate(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function (p) {
      return (1 - p) * start + p * end;
    };

    if (!func) {
      var isString = _isString(start),
          master = {},
          p,
          i,
          interpolators,
          l,
          il;

      progress === true && (mutate = 1) && (progress = null);

      if (isString) {
        start = {
          p: start
        };
        end = {
          p: end
        };
      } else if (_isArray(start) && !_isArray(end)) {
        interpolators = [];
        l = start.length;
        il = l - 2;

        for (i = 1; i < l; i++) {
          interpolators.push(interpolate(start[i - 1], start[i]));
        }

        l--;

        func = function func(p) {
          p *= l;
          var i = Math.min(il, ~~p);
          return interpolators[i](p - i);
        };

        progress = end;
      } else if (!mutate) {
        start = _merge(_isArray(start) ? [] : {}, start);
      }

      if (!interpolators) {
        for (p in end) {
          _addPropTween.call(master, start, p, "get", end[p]);
        }

        func = function func(p) {
          return _renderPropTweens(p, master) || (isString ? start.p : start);
        };
      }
    }

    return _conditionalReturn(progress, func);
  },
      _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
    var labels = timeline.labels,
        min = _bigNum,
        p,
        distance,
        label;

    for (p in labels) {
      distance = labels[p] - fromTime;

      if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
        label = p;
        min = distance;
      }
    }

    return label;
  },
      _callback = function _callback(animation, type, executeLazyFirst) {
    var v = animation.vars,
        callback = v[type],
        prevContext = _context,
        context = animation._ctx,
        params,
        scope,
        result;

    if (!callback) {
      return;
    }

    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender();
    context && (_context = context);
    result = params ? callback.apply(scope, params) : callback.call(scope);
    _context = prevContext;
    return result;
  },
      _interrupt = function _interrupt(animation) {
    _removeFromParent(animation);

    animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
  },
      _quickTween,
      _registerPluginQueue = [],
      _createPlugin = function _createPlugin(config) {
    if (_windowExists() && config) {
      config = !config.name && config["default"] || config;

      var name = config.name,
          isFunc = _isFunction(config),
          Plugin = name && !isFunc && config.init ? function () {
        this._props = [];
      } : config,
          instanceDefaults = {
        init: _emptyFunc,
        render: _renderPropTweens,
        add: _addPropTween,
        kill: _killPropTweensOf,
        modifier: _addPluginModifier,
        rawVars: 0
      },
          statics = {
        targetTest: 0,
        get: 0,
        getSetter: _getSetter,
        aliases: {},
        register: 0
      };

      _wake();

      if (config !== Plugin) {
        if (_plugins[name]) {
          return;
        }

        _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics));

        _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics)));

        _plugins[Plugin.prop = name] = Plugin;

        if (config.targetTest) {
          _harnessPlugins.push(Plugin);

          _reservedProps[name] = 1;
        }

        name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
      }

      _addGlobal(name, Plugin);

      config.register && config.register(gsap, Plugin, PropTween);
    } else {
      config && _registerPluginQueue.push(config);
    }
  },
      _255 = 255,
      _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
  },
      _hue = function _hue(h, m1, m2) {
    h += h < 0 ? 1 : h > 1 ? -1 : 0;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
  },
      splitColor = function splitColor(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
        r,
        g,
        b,
        h,
        s,
        l,
        max,
        min,
        d,
        wasHSL;

    if (!a) {
      if (v.substr(-1) === ",") {
        v = v.substr(0, v.length - 1);
      }

      if (_colorLookup[v]) {
        a = _colorLookup[v];
      } else if (v.charAt(0) === "#") {
        if (v.length < 6) {
          r = v.charAt(1);
          g = v.charAt(2);
          b = v.charAt(3);
          v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
        }

        if (v.length === 9) {
          a = parseInt(v.substr(1, 6), 16);
          return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
        }

        v = parseInt(v.substr(1), 16);
        a = [v >> 16, v >> 8 & _255, v & _255];
      } else if (v.substr(0, 3) === "hsl") {
        a = wasHSL = v.match(_strictNumExp);

        if (!toHSL) {
          h = +a[0] % 360 / 360;
          s = +a[1] / 100;
          l = +a[2] / 100;
          g = l <= .5 ? l * (s + 1) : l + s - l * s;
          r = l * 2 - g;
          a.length > 3 && (a[3] *= 1);
          a[0] = _hue(h + 1 / 3, r, g);
          a[1] = _hue(h, r, g);
          a[2] = _hue(h - 1 / 3, r, g);
        } else if (~v.indexOf("=")) {
          a = v.match(_numExp);
          forceAlpha && a.length < 4 && (a[3] = 1);
          return a;
        }
      } else {
        a = v.match(_strictNumExp) || _colorLookup.transparent;
      }

      a = a.map(Number);
    }

    if (toHSL && !wasHSL) {
      r = a[0] / _255;
      g = a[1] / _255;
      b = a[2] / _255;
      max = Math.max(r, g, b);
      min = Math.min(r, g, b);
      l = (max + min) / 2;

      if (max === min) {
        h = s = 0;
      } else {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
        h *= 60;
      }

      a[0] = ~~(h + .5);
      a[1] = ~~(s * 100 + .5);
      a[2] = ~~(l * 100 + .5);
    }

    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
  },
      _colorOrderData = function _colorOrderData(v) {
    var values = [],
        c = [],
        i = -1;
    v.split(_colorExp).forEach(function (v) {
      var a = v.match(_numWithUnitExp) || [];
      values.push.apply(values, a);
      c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
  },
      _formatColors = function _formatColors(s, toHSL, orderMatchData) {
    var result = "",
        colors = (s + result).match(_colorExp),
        type = toHSL ? "hsla(" : "rgba(",
        i = 0,
        c,
        shell,
        d,
        l;

    if (!colors) {
      return s;
    }

    colors = colors.map(function (color) {
      return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });

    if (orderMatchData) {
      d = _colorOrderData(s);
      c = orderMatchData.c;

      if (c.join(result) !== d.c.join(result)) {
        shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
        l = shell.length - 1;

        for (; i < l; i++) {
          result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
      }
    }

    if (!shell) {
      shell = s.split(_colorExp);
      l = shell.length - 1;

      for (; i < l; i++) {
        result += shell[i] + colors[i];
      }
    }

    return result + shell[l];
  },
      _colorExp = function () {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        p;

    for (p in _colorLookup) {
      s += "|" + p + "\\b";
    }

    return new RegExp(s + ")", "gi");
  }(),
      _hslExp = /hsl[a]?\(/,
      _colorStringFilter = function _colorStringFilter(a) {
    var combined = a.join(" "),
        toHSL;
    _colorExp.lastIndex = 0;

    if (_colorExp.test(combined)) {
      toHSL = _hslExp.test(combined);
      a[1] = _formatColors(a[1], toHSL);
      a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
      return true;
    }
  },
      _tickerActive,
      _ticker = function () {
    var _getTime = Date.now,
        _lagThreshold = 500,
        _adjustedLag = 33,
        _startTime = _getTime(),
        _lastUpdate = _startTime,
        _gap = 1000 / 240,
        _nextTime = _gap,
        _listeners = [],
        _id,
        _req,
        _raf,
        _self,
        _delta,
        _i,
        _tick = function _tick(v) {
      var elapsed = _getTime() - _lastUpdate,
          manual = v === true,
          overlap,
          dispatch,
          time,
          frame;

      elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
      _lastUpdate += elapsed;
      time = _lastUpdate - _startTime;
      overlap = time - _nextTime;

      if (overlap > 0 || manual) {
        frame = ++_self.frame;
        _delta = time - _self.time * 1000;
        _self.time = time = time / 1000;
        _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
        dispatch = 1;
      }

      manual || (_id = _req(_tick));

      if (dispatch) {
        for (_i = 0; _i < _listeners.length; _i++) {
          _listeners[_i](time, _delta, frame, v);
        }
      }
    };

    _self = {
      time: 0,
      frame: 0,
      tick: function tick() {
        _tick(true);
      },
      deltaRatio: function deltaRatio(fps) {
        return _delta / (1000 / (fps || 60));
      },
      wake: function wake() {
        if (_coreReady) {
          if (!_coreInitted && _windowExists()) {
            _win = _coreInitted = window;
            _doc = _win.document || {};
            _globals.gsap = gsap;
            (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);

            _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});

            _raf = _win.requestAnimationFrame;

            _registerPluginQueue.forEach(_createPlugin);
          }

          _id && _self.sleep();

          _req = _raf || function (f) {
            return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
          };

          _tickerActive = 1;

          _tick(2);
        }
      },
      sleep: function sleep() {
        (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
        _tickerActive = 0;
        _req = _emptyFunc;
      },
      lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
        _lagThreshold = threshold || Infinity;
        _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
      },
      fps: function fps(_fps) {
        _gap = 1000 / (_fps || 240);
        _nextTime = _self.time * 1000 + _gap;
      },
      add: function add(callback, once, prioritize) {
        var func = once ? function (t, d, f, v) {
          callback(t, d, f, v);

          _self.remove(func);
        } : callback;

        _self.remove(callback);

        _listeners[prioritize ? "unshift" : "push"](func);

        _wake();

        return func;
      },
      remove: function remove(callback, i) {
        ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
      },
      _listeners: _listeners
    };
    return _self;
  }(),
      _wake = function _wake() {
    return !_tickerActive && _ticker.wake();
  },
      _easeMap = {},
      _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
      _quotesExp = /["']/g,
      _parseObjectInString = function _parseObjectInString(value) {
    var obj = {},
        split = value.substr(1, value.length - 3).split(":"),
        key = split[0],
        i = 1,
        l = split.length,
        index,
        val,
        parsedVal;

    for (; i < l; i++) {
      val = split[i];
      index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
      parsedVal = val.substr(0, index);
      obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
      key = val.substr(index + 1).trim();
    }

    return obj;
  },
      _valueInParentheses = function _valueInParentheses(value) {
    var open = value.indexOf("(") + 1,
        close = value.indexOf(")"),
        nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
  },
      _configEaseFromString = function _configEaseFromString(name) {
    var split = (name + "").split("("),
        ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
  },
      _invertEase = function _invertEase(ease) {
    return function (p) {
      return 1 - ease(1 - p);
    };
  },
      _propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
    var child = timeline._first,
        ease;

    while (child) {
      if (child instanceof Timeline) {
        _propagateYoyoEase(child, isYoyo);
      } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
        if (child.timeline) {
          _propagateYoyoEase(child.timeline, isYoyo);
        } else {
          ease = child._ease;
          child._ease = child._yEase;
          child._yEase = ease;
          child._yoyo = isYoyo;
        }
      }

      child = child._next;
    }
  },
      _parseEase = function _parseEase(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
  },
      _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) {
      easeOut = function easeOut(p) {
        return 1 - easeIn(1 - p);
      };
    }

    if (easeInOut === void 0) {
      easeInOut = function easeInOut(p) {
        return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
      };
    }

    var ease = {
      easeIn: easeIn,
      easeOut: easeOut,
      easeInOut: easeInOut
    },
        lowercaseName;

    _forEachName(names, function (name) {
      _easeMap[name] = _globals[name] = ease;
      _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

      for (var p in ease) {
        _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
      }
    });

    return ease;
  },
      _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
    return function (p) {
      return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
    };
  },
      _configElastic = function _configElastic(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1,
        p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
        p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
        easeOut = function easeOut(p) {
      return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
    },
        ease = type === "out" ? easeOut : type === "in" ? function (p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);

    p2 = _2PI / p2;

    ease.config = function (amplitude, period) {
      return _configElastic(type, amplitude, period);
    };

    return ease;
  },
      _configBack = function _configBack(type, overshoot) {
    if (overshoot === void 0) {
      overshoot = 1.70158;
    }

    var easeOut = function easeOut(p) {
      return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    },
        ease = type === "out" ? easeOut : type === "in" ? function (p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);

    ease.config = function (overshoot) {
      return _configBack(type, overshoot);
    };

    return ease;
  };

  _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
    var power = i < 5 ? i + 1 : i;

    _insertEase(name + ",Power" + (power - 1), i ? function (p) {
      return Math.pow(p, power);
    } : function (p) {
      return p;
    }, function (p) {
      return 1 - Math.pow(1 - p, power);
    }, function (p) {
      return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
  });

  _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

  _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

  (function (n, c) {
    var n1 = 1 / c,
        n2 = 2 * n1,
        n3 = 2.5 * n1,
        easeOut = function easeOut(p) {
      return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
    };

    _insertEase("Bounce", function (p) {
      return 1 - easeOut(1 - p);
    }, easeOut);
  })(7.5625, 2.75);

  _insertEase("Expo", function (p) {
    return p ? Math.pow(2, 10 * (p - 1)) : 0;
  });

  _insertEase("Circ", function (p) {
    return -(_sqrt(1 - p * p) - 1);
  });

  _insertEase("Sine", function (p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
  });

  _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

  _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
      if (steps === void 0) {
        steps = 1;
      }

      var p1 = 1 / steps,
          p2 = steps + (immediateStart ? 0 : 1),
          p3 = immediateStart ? 1 : 0,
          max = 1 - _tinyNum;
      return function (p) {
        return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
      };
    }
  };
  _defaults.ease = _easeMap["quad.out"];

  _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
    return _callbackNames += name + "," + name + "Params,";
  });

  var GSCache = function GSCache(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
  };
  var Animation = function () {
    function Animation(vars) {
      this.vars = vars;
      this._delay = +vars.delay || 0;

      if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
        this._rDelay = vars.repeatDelay || 0;
        this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
      }

      this._ts = 1;

      _setDuration(this, +vars.duration, 1, 1);

      this.data = vars.data;

      if (_context) {
        this._ctx = _context;

        _context.data.push(this);
      }

      _tickerActive || _ticker.wake();
    }

    var _proto = Animation.prototype;

    _proto.delay = function delay(value) {
      if (value || value === 0) {
        this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
        this._delay = value;
        return this;
      }

      return this._delay;
    };

    _proto.duration = function duration(value) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };

    _proto.totalDuration = function totalDuration(value) {
      if (!arguments.length) {
        return this._tDur;
      }

      this._dirty = 0;
      return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };

    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
      _wake();

      if (!arguments.length) {
        return this._tTime;
      }

      var parent = this._dp;

      if (parent && parent.smoothChildTiming && this._ts) {
        _alignPlayhead(this, _totalTime);

        !parent._dp || parent.parent || _postAddChecks(parent, this);

        while (parent && parent.parent) {
          if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
            parent.totalTime(parent._tTime, true);
          }

          parent = parent.parent;
        }

        if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
          _addToTimeline(this._dp, this, this._start - this._delay);
        }
      }

      if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
        this._ts || (this._pTime = _totalTime);

        _lazySafeRender(this, _totalTime, suppressEvents);
      }

      return this;
    };

    _proto.time = function time(value, suppressEvents) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
    };

    _proto.totalProgress = function totalProgress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    };

    _proto.progress = function progress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    };

    _proto.iteration = function iteration(value, suppressEvents) {
      var cycleDuration = this.duration() + this._rDelay;

      return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    };

    _proto.timeScale = function timeScale(value) {
      if (!arguments.length) {
        return this._rts === -_tinyNum ? 0 : this._rts;
      }

      if (this._rts === value) {
        return this;
      }

      var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
      this._rts = +value || 0;
      this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
      this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), true);

      _setEnd(this);

      return _recacheAncestors(this);
    };

    _proto.paused = function paused(value) {
      if (!arguments.length) {
        return this._ps;
      }

      if (this._ps !== value) {
        this._ps = value;

        if (value) {
          this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
          this._ts = this._act = 0;
        } else {
          _wake();

          this._ts = this._rts;
          this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
        }
      }

      return this;
    };

    _proto.startTime = function startTime(value) {
      if (arguments.length) {
        this._start = value;
        var parent = this.parent || this._dp;
        parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
        return this;
      }

      return this._start;
    };

    _proto.endTime = function endTime(includeRepeats) {
      return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    };

    _proto.rawTime = function rawTime(wrapRepeats) {
      var parent = this.parent || this._dp;
      return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };

    _proto.revert = function revert(config) {
      if (config === void 0) {
        config = _revertConfig;
      }

      var prevIsReverting = _reverting;
      _reverting = config;

      if (this._initted || this._startAt) {
        this.timeline && this.timeline.revert(config);
        this.totalTime(-0.01, config.suppressEvents);
      }

      this.data !== "nested" && config.kill !== false && this.kill();
      _reverting = prevIsReverting;
      return this;
    };

    _proto.globalTime = function globalTime(rawTime) {
      var animation = this,
          time = arguments.length ? rawTime : animation.rawTime();

      while (animation) {
        time = animation._start + time / (animation._ts || 1);
        animation = animation._dp;
      }

      return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(rawTime) : time;
    };

    _proto.repeat = function repeat(value) {
      if (arguments.length) {
        this._repeat = value === Infinity ? -2 : value;
        return _onUpdateTotalDuration(this);
      }

      return this._repeat === -2 ? Infinity : this._repeat;
    };

    _proto.repeatDelay = function repeatDelay(value) {
      if (arguments.length) {
        var time = this._time;
        this._rDelay = value;

        _onUpdateTotalDuration(this);

        return time ? this.time(time) : this;
      }

      return this._rDelay;
    };

    _proto.yoyo = function yoyo(value) {
      if (arguments.length) {
        this._yoyo = value;
        return this;
      }

      return this._yoyo;
    };

    _proto.seek = function seek(position, suppressEvents) {
      return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };

    _proto.restart = function restart(includeDelay, suppressEvents) {
      return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    };

    _proto.play = function play(from, suppressEvents) {
      from != null && this.seek(from, suppressEvents);
      return this.reversed(false).paused(false);
    };

    _proto.reverse = function reverse(from, suppressEvents) {
      from != null && this.seek(from || this.totalDuration(), suppressEvents);
      return this.reversed(true).paused(false);
    };

    _proto.pause = function pause(atTime, suppressEvents) {
      atTime != null && this.seek(atTime, suppressEvents);
      return this.paused(true);
    };

    _proto.resume = function resume() {
      return this.paused(false);
    };

    _proto.reversed = function reversed(value) {
      if (arguments.length) {
        !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
        return this;
      }

      return this._rts < 0;
    };

    _proto.invalidate = function invalidate() {
      this._initted = this._act = 0;
      this._zTime = -_tinyNum;
      return this;
    };

    _proto.isActive = function isActive() {
      var parent = this.parent || this._dp,
          start = this._start,
          rawTime;
      return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };

    _proto.eventCallback = function eventCallback(type, callback, params) {
      var vars = this.vars;

      if (arguments.length > 1) {
        if (!callback) {
          delete vars[type];
        } else {
          vars[type] = callback;
          params && (vars[type + "Params"] = params);
          type === "onUpdate" && (this._onUpdate = callback);
        }

        return this;
      }

      return vars[type];
    };

    _proto.then = function then(onFulfilled) {
      var self = this;
      return new Promise(function (resolve) {
        var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
            _resolve = function _resolve() {
          var _then = self.then;
          self.then = null;
          _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
          resolve(f);
          self.then = _then;
        };

        if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
          _resolve();
        } else {
          self._prom = _resolve;
        }
      });
    };

    _proto.kill = function kill() {
      _interrupt(this);
    };

    return Animation;
  }();

  _setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
  });

  var Timeline = function (_Animation) {
    _inheritsLoose(Timeline, _Animation);

    function Timeline(vars, position) {
      var _this;

      if (vars === void 0) {
        vars = {};
      }

      _this = _Animation.call(this, vars) || this;
      _this.labels = {};
      _this.smoothChildTiming = !!vars.smoothChildTiming;
      _this.autoRemoveChildren = !!vars.autoRemoveChildren;
      _this._sort = _isNotFalse(vars.sortChildren);
      _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
      vars.reversed && _this.reverse();
      vars.paused && _this.paused(true);
      vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
      return _this;
    }

    var _proto2 = Timeline.prototype;

    _proto2.to = function to(targets, vars, position) {
      _createTweenType(0, arguments, this);

      return this;
    };

    _proto2.from = function from(targets, vars, position) {
      _createTweenType(1, arguments, this);

      return this;
    };

    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
      _createTweenType(2, arguments, this);

      return this;
    };

    _proto2.set = function set(targets, vars, position) {
      vars.duration = 0;
      vars.parent = this;
      _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
      vars.immediateRender = !!vars.immediateRender;
      new Tween(targets, vars, _parsePosition(this, position), 1);
      return this;
    };

    _proto2.call = function call(callback, params, position) {
      return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
    };

    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.duration = duration;
      vars.stagger = vars.stagger || stagger;
      vars.onComplete = onCompleteAll;
      vars.onCompleteParams = onCompleteAllParams;
      vars.parent = this;
      new Tween(targets, vars, _parsePosition(this, position));
      return this;
    };

    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.runBackwards = 1;
      _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
      return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };

    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
      toVars.startAt = fromVars;
      _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
      return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };

    _proto2.render = function render(totalTime, suppressEvents, force) {
      var prevTime = this._time,
          tDur = this._dirty ? this.totalDuration() : this._tDur,
          dur = this._dur,
          tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
          crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
          time,
          child,
          next,
          iteration,
          cycleDuration,
          prevPaused,
          pauseTween,
          timeScale,
          prevStart,
          prevIteration,
          yoyo,
          isYoyo;
      this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);

      if (tTime !== this._tTime || force || crossingStart) {
        if (prevTime !== this._time && dur) {
          tTime += this._time - prevTime;
          totalTime += this._time - prevTime;
        }

        time = tTime;
        prevStart = this._start;
        timeScale = this._ts;
        prevPaused = !timeScale;

        if (crossingStart) {
          dur || (prevTime = this._zTime);
          (totalTime || !suppressEvents) && (this._zTime = totalTime);
        }

        if (this._repeat) {
          yoyo = this._yoyo;
          cycleDuration = dur + this._rDelay;

          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }

          time = _roundPrecise(tTime % cycleDuration);

          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);

            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }

            time > dur && (time = dur);
          }

          prevIteration = _animationCycle(this._tTime, cycleDuration);
          !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);

          if (yoyo && iteration & 1) {
            time = dur - time;
            isYoyo = 1;
          }

          if (iteration !== prevIteration && !this._lock) {
            var rewinding = yoyo && prevIteration & 1,
                doesWrap = rewinding === (yoyo && iteration & 1);
            iteration < prevIteration && (rewinding = !rewinding);
            prevTime = rewinding ? 0 : dur;
            this._lock = 1;
            this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
            this._tTime = tTime;
            !suppressEvents && this.parent && _callback(this, "onRepeat");
            this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

            if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
              return this;
            }

            dur = this._dur;
            tDur = this._tDur;

            if (doesWrap) {
              this._lock = 2;
              prevTime = rewinding ? dur : -0.0001;
              this.render(prevTime, true);
              this.vars.repeatRefresh && !isYoyo && this.invalidate();
            }

            this._lock = 0;

            if (!this._ts && !prevPaused) {
              return this;
            }

            _propagateYoyoEase(this, isYoyo);
          }
        }

        if (this._hasPause && !this._forcing && this._lock < 2) {
          pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));

          if (pauseTween) {
            tTime -= time - (time = pauseTween._start);
          }
        }

        this._tTime = tTime;
        this._time = time;
        this._act = !timeScale;

        if (!this._initted) {
          this._onUpdate = this.vars.onUpdate;
          this._initted = 1;
          this._zTime = totalTime;
          prevTime = 0;
        }

        if (!prevTime && time && !suppressEvents && !iteration) {
          _callback(this, "onStart");

          if (this._tTime !== tTime) {
            return this;
          }
        }

        if (time >= prevTime && totalTime >= 0) {
          child = this._first;

          while (child) {
            next = child._next;

            if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }

              child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = -_tinyNum);
                break;
              }
            }

            child = next;
          }
        } else {
          child = this._last;
          var adjustedTime = totalTime < 0 ? totalTime : time;

          while (child) {
            next = child._prev;

            if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }

              child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt));

              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                break;
              }
            }

            child = next;
          }
        }

        if (pauseTween && !suppressEvents) {
          this.pause();
          pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

          if (this._ts) {
            this._start = prevStart;

            _setEnd(this);

            return this.render(totalTime, suppressEvents, force);
          }
        }

        this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
        if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
          (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);

          if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
            _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);

            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }

      return this;
    };

    _proto2.add = function add(child, position) {
      var _this2 = this;

      _isNumber(position) || (position = _parsePosition(this, position, child));

      if (!(child instanceof Animation)) {
        if (_isArray(child)) {
          child.forEach(function (obj) {
            return _this2.add(obj, position);
          });
          return this;
        }

        if (_isString(child)) {
          return this.addLabel(child, position);
        }

        if (_isFunction(child)) {
          child = Tween.delayedCall(0, child);
        } else {
          return this;
        }
      }

      return this !== child ? _addToTimeline(this, child, position) : this;
    };

    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
      if (nested === void 0) {
        nested = true;
      }

      if (tweens === void 0) {
        tweens = true;
      }

      if (timelines === void 0) {
        timelines = true;
      }

      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = -_bigNum;
      }

      var a = [],
          child = this._first;

      while (child) {
        if (child._start >= ignoreBeforeTime) {
          if (child instanceof Tween) {
            tweens && a.push(child);
          } else {
            timelines && a.push(child);
            nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
          }
        }

        child = child._next;
      }

      return a;
    };

    _proto2.getById = function getById(id) {
      var animations = this.getChildren(1, 1, 1),
          i = animations.length;

      while (i--) {
        if (animations[i].vars.id === id) {
          return animations[i];
        }
      }
    };

    _proto2.remove = function remove(child) {
      if (_isString(child)) {
        return this.removeLabel(child);
      }

      if (_isFunction(child)) {
        return this.killTweensOf(child);
      }

      _removeLinkedListItem(this, child);

      if (child === this._recent) {
        this._recent = this._last;
      }

      return _uncache(this);
    };

    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
      if (!arguments.length) {
        return this._tTime;
      }

      this._forcing = 1;

      if (!this._dp && this._ts) {
        this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
      }

      _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

      this._forcing = 0;
      return this;
    };

    _proto2.addLabel = function addLabel(label, position) {
      this.labels[label] = _parsePosition(this, position);
      return this;
    };

    _proto2.removeLabel = function removeLabel(label) {
      delete this.labels[label];
      return this;
    };

    _proto2.addPause = function addPause(position, callback, params) {
      var t = Tween.delayedCall(0, callback || _emptyFunc, params);
      t.data = "isPause";
      this._hasPause = 1;
      return _addToTimeline(this, t, _parsePosition(this, position));
    };

    _proto2.removePause = function removePause(position) {
      var child = this._first;
      position = _parsePosition(this, position);

      while (child) {
        if (child._start === position && child.data === "isPause") {
          _removeFromParent(child);
        }

        child = child._next;
      }
    };

    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      var tweens = this.getTweensOf(targets, onlyActive),
          i = tweens.length;

      while (i--) {
        _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
      }

      return this;
    };

    _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
      var a = [],
          parsedTargets = toArray(targets),
          child = this._first,
          isGlobalTime = _isNumber(onlyActive),
          children;

      while (child) {
        if (child instanceof Tween) {
          if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
            a.push(child);
          }
        } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
          a.push.apply(a, children);
        }

        child = child._next;
      }

      return a;
    };

    _proto2.tweenTo = function tweenTo(position, vars) {
      vars = vars || {};

      var tl = this,
          endTime = _parsePosition(tl, position),
          _vars = vars,
          startAt = _vars.startAt,
          _onStart = _vars.onStart,
          onStartParams = _vars.onStartParams,
          immediateRender = _vars.immediateRender,
          initted,
          tween = Tween.to(tl, _setDefaults({
        ease: vars.ease || "none",
        lazy: false,
        immediateRender: false,
        time: endTime,
        overwrite: "auto",
        duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
        onStart: function onStart() {
          tl.pause();

          if (!initted) {
            var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
            tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
            initted = 1;
          }

          _onStart && _onStart.apply(tween, onStartParams || []);
        }
      }, vars));

      return immediateRender ? tween.render(0) : tween;
    };

    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
      return this.tweenTo(toPosition, _setDefaults({
        startAt: {
          time: _parsePosition(this, fromPosition)
        }
      }, vars));
    };

    _proto2.recent = function recent() {
      return this._recent;
    };

    _proto2.nextLabel = function nextLabel(afterTime) {
      if (afterTime === void 0) {
        afterTime = this._time;
      }

      return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };

    _proto2.previousLabel = function previousLabel(beforeTime) {
      if (beforeTime === void 0) {
        beforeTime = this._time;
      }

      return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };

    _proto2.currentLabel = function currentLabel(value) {
      return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };

    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = 0;
      }

      var child = this._first,
          labels = this.labels,
          p;

      while (child) {
        if (child._start >= ignoreBeforeTime) {
          child._start += amount;
          child._end += amount;
        }

        child = child._next;
      }

      if (adjustLabels) {
        for (p in labels) {
          if (labels[p] >= ignoreBeforeTime) {
            labels[p] += amount;
          }
        }
      }

      return _uncache(this);
    };

    _proto2.invalidate = function invalidate(soft) {
      var child = this._first;
      this._lock = 0;

      while (child) {
        child.invalidate(soft);
        child = child._next;
      }

      return _Animation.prototype.invalidate.call(this, soft);
    };

    _proto2.clear = function clear(includeLabels) {
      if (includeLabels === void 0) {
        includeLabels = true;
      }

      var child = this._first,
          next;

      while (child) {
        next = child._next;
        this.remove(child);
        child = next;
      }

      this._dp && (this._time = this._tTime = this._pTime = 0);
      includeLabels && (this.labels = {});
      return _uncache(this);
    };

    _proto2.totalDuration = function totalDuration(value) {
      var max = 0,
          self = this,
          child = self._last,
          prevStart = _bigNum,
          prev,
          start,
          parent;

      if (arguments.length) {
        return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
      }

      if (self._dirty) {
        parent = self.parent;

        while (child) {
          prev = child._prev;
          child._dirty && child.totalDuration();
          start = child._start;

          if (start > prevStart && self._sort && child._ts && !self._lock) {
            self._lock = 1;
            _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
          } else {
            prevStart = start;
          }

          if (start < 0 && child._ts) {
            max -= start;

            if (!parent && !self._dp || parent && parent.smoothChildTiming) {
              self._start += start / self._ts;
              self._time -= start;
              self._tTime -= start;
            }

            self.shiftChildren(-start, false, -1e999);
            prevStart = 0;
          }

          child._end > max && child._ts && (max = child._end);
          child = prev;
        }

        _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

        self._dirty = 0;
      }

      return self._tDur;
    };

    Timeline.updateRoot = function updateRoot(time) {
      if (_globalTimeline._ts) {
        _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

        _lastRenderedFrame = _ticker.frame;
      }

      if (_ticker.frame >= _nextGCFrame) {
        _nextGCFrame += _config.autoSleep || 120;
        var child = _globalTimeline._first;
        if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
          while (child && !child._ts) {
            child = child._next;
          }

          child || _ticker.sleep();
        }
      }
    };

    return Timeline;
  }(Animation);

  _setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });

  var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
        index = 0,
        matchIndex = 0,
        result,
        startNums,
        color,
        endNum,
        chunk,
        startNum,
        hasRandom,
        a;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";

    if (hasRandom = ~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }

    if (stringFilter) {
      a = [start, end];
      stringFilter(a, target, prop);
      start = a[0];
      end = a[1];
    }

    startNums = start.match(_complexStringNumExp) || [];

    while (result = _complexStringNumExp.exec(end)) {
      endNum = result[0];
      chunk = end.substring(index, result.index);

      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(") {
        color = 1;
      }

      if (endNum !== startNums[matchIndex++]) {
        startNum = parseFloat(startNums[matchIndex - 1]) || 0;
        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          s: startNum,
          c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
          m: color && color < 4 ? Math.round : 0
        };
        index = _complexStringNumExp.lastIndex;
      }
    }

    pt.c = index < end.length ? end.substring(index, end.length) : "";
    pt.fp = funcParam;

    if (_relExp.test(end) || hasRandom) {
      pt.e = 0;
    }

    this._pt = pt;
    return pt;
  },
      _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop],
        parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
        setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
        pt;

    if (_isString(end)) {
      if (~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }

      if (end.charAt(1) === "=") {
        pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);

        if (pt || pt === 0) {
          end = pt;
        }
      }
    }

    if (!optional || parsedStart !== end || _forceAllPropTweens) {
      if (!isNaN(parsedStart * end) && end !== "") {
        pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
        funcParam && (pt.fp = funcParam);
        modifier && pt.modifier(modifier, this, target);
        return this._pt = pt;
      }

      !currentValue && !(prop in target) && _missingPlugin(prop, end);
      return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
  },
      _processVars = function _processVars(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
      return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    }

    var copy = {},
        p;

    for (p in vars) {
      copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    }

    return copy;
  },
      _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;

    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
      tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

      if (tween !== _quickTween) {
        ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
        i = plugin._props.length;

        while (i--) {
          ptLookup[plugin._props[i]] = pt;
        }
      }
    }

    return plugin;
  },
      _overwritingTween,
      _forceAllPropTweens,
      _initTween = function _initTween(tween, time, tTime) {
    var vars = tween.vars,
        ease = vars.ease,
        startAt = vars.startAt,
        immediateRender = vars.immediateRender,
        lazy = vars.lazy,
        onUpdate = vars.onUpdate,
        onUpdateParams = vars.onUpdateParams,
        callbackScope = vars.callbackScope,
        runBackwards = vars.runBackwards,
        yoyoEase = vars.yoyoEase,
        keyframes = vars.keyframes,
        autoRevert = vars.autoRevert,
        dur = tween._dur,
        prevStartAt = tween._startAt,
        targets = tween._targets,
        parent = tween.parent,
        fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets,
        autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
        tl = tween.timeline,
        cleanVars,
        i,
        p,
        pt,
        target,
        hasPriority,
        gsData,
        harness,
        plugin,
        ptLookup,
        index,
        harnessVars,
        overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

    if (yoyoEase && tween._yoyo && !tween._repeat) {
      yoyoEase = tween._yEase;
      tween._yEase = tween._ease;
      tween._ease = yoyoEase;
    }

    tween._from = !tl && !!vars.runBackwards;

    if (!tl || keyframes && !vars.stagger) {
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop];
      cleanVars = _copyExcluding(vars, _reservedProps);

      if (prevStartAt) {
        prevStartAt._zTime < 0 && prevStartAt.progress(1);
        time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
        prevStartAt._lazy = 0;
      }

      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
          data: "isStart",
          overwrite: false,
          parent: parent,
          immediateRender: true,
          lazy: !prevStartAt && _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate: onUpdate,
          onUpdateParams: onUpdateParams,
          callbackScope: callbackScope,
          stagger: 0
        }, startAt)));

        tween._startAt._dp = 0;
        tween._startAt._sat = tween;
        time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);

        if (immediateRender) {
          if (dur && time <= 0 && tTime <= 0) {
            time && (tween._zTime = time);
            return;
          }
        }
      } else if (runBackwards && dur) {
        if (!prevStartAt) {
          time && (immediateRender = false);
          p = _setDefaults({
            overwrite: false,
            data: "isFromStart",
            lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
            immediateRender: immediateRender,
            stagger: 0,
            parent: parent
          }, cleanVars);
          harnessVars && (p[harness.prop] = harnessVars);

          _removeFromParent(tween._startAt = Tween.set(targets, p));

          tween._startAt._dp = 0;
          tween._startAt._sat = tween;
          time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
          tween._zTime = time;

          if (!immediateRender) {
            _initTween(tween._startAt, _tinyNum, _tinyNum);
          } else if (!time) {
            return;
          }
        }
      }

      tween._pt = tween._ptCache = 0;
      lazy = dur && _isNotFalse(lazy) || lazy && !dur;

      for (i = 0; i < targets.length; i++) {
        target = targets[i];
        gsData = target._gsap || _harness(targets)[i]._gsap;
        tween._ptLookup[i] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
        index = fullTargets === targets ? i : fullTargets.indexOf(target);

        if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

          plugin._props.forEach(function (name) {
            ptLookup[name] = pt;
          });

          plugin.priority && (hasPriority = 1);
        }

        if (!harness || harnessVars) {
          for (p in cleanVars) {
            if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
              plugin.priority && (hasPriority = 1);
            } else {
              ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
          }
        }

        tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

        if (autoOverwrite && tween._pt) {
          _overwritingTween = tween;

          _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));

          overwritten = !tween.parent;
          _overwritingTween = 0;
        }

        tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
      }

      hasPriority && _sortPropTweensByPriority(tween);
      tween._onInit && tween._onInit(tween);
    }

    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten;
    keyframes && time <= 0 && tl.render(_bigNum, true, true);
  },
      _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time) {
    var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property],
        pt,
        rootPT,
        lookup,
        i;

    if (!ptCache) {
      ptCache = tween._ptCache[property] = [];
      lookup = tween._ptLookup;
      i = tween._targets.length;

      while (i--) {
        pt = lookup[i][property];

        if (pt && pt.d && pt.d._pt) {
          pt = pt.d._pt;

          while (pt && pt.p !== property && pt.fp !== property) {
            pt = pt._next;
          }
        }

        if (!pt) {
          _forceAllPropTweens = 1;
          tween.vars[property] = "+=0";

          _initTween(tween, time);

          _forceAllPropTweens = 0;
          return 1;
        }

        ptCache.push(pt);
      }
    }

    i = ptCache.length;

    while (i--) {
      rootPT = ptCache[i];
      pt = rootPT._pt || rootPT;
      pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
      pt.c = value - pt.s;
      rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
      rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
    }
  },
      _addAliasesToVars = function _addAliasesToVars(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0,
        propertyAliases = harness && harness.aliases,
        copy,
        p,
        i,
        aliases;

    if (!propertyAliases) {
      return vars;
    }

    copy = _merge({}, vars);

    for (p in propertyAliases) {
      if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;

        while (i--) {
          copy[aliases[i]] = copy[p];
        }
      }
    }

    return copy;
  },
      _parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut",
        p,
        a;

    if (_isArray(obj)) {
      a = allProps[prop] || (allProps[prop] = []);
      obj.forEach(function (value, i) {
        return a.push({
          t: i / (obj.length - 1) * 100,
          v: value,
          e: ease
        });
      });
    } else {
      for (p in obj) {
        a = allProps[p] || (allProps[p] = []);
        p === "ease" || a.push({
          t: parseFloat(prop),
          v: obj[p],
          e: ease
        });
      }
    }
  },
      _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
    return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
  },
      _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
      _staggerPropsToSkip = {};

  _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function (name) {
    return _staggerPropsToSkip[name] = 1;
  });

  var Tween = function (_Animation2) {
    _inheritsLoose(Tween, _Animation2);

    function Tween(targets, vars, position, skipInherit) {
      var _this3;

      if (typeof vars === "number") {
        position.duration = vars;
        vars = position;
        position = null;
      }

      _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
      var _this3$vars = _this3.vars,
          duration = _this3$vars.duration,
          delay = _this3$vars.delay,
          immediateRender = _this3$vars.immediateRender,
          stagger = _this3$vars.stagger,
          overwrite = _this3$vars.overwrite,
          keyframes = _this3$vars.keyframes,
          defaults = _this3$vars.defaults,
          scrollTrigger = _this3$vars.scrollTrigger,
          yoyoEase = _this3$vars.yoyoEase,
          parent = vars.parent || _globalTimeline,
          parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
          tl,
          i,
          copy,
          l,
          p,
          curTarget,
          staggerFunc,
          staggerVarsToMerge;
      _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
      _this3._ptLookup = [];
      _this3._overwrite = overwrite;

      if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        vars = _this3.vars;
        tl = _this3.timeline = new Timeline({
          data: "nested",
          defaults: defaults || {},
          targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
        });
        tl.kill();
        tl.parent = tl._dp = _assertThisInitialized(_this3);
        tl._start = 0;

        if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
          l = parsedTargets.length;
          staggerFunc = stagger && distribute(stagger);

          if (_isObject(stagger)) {
            for (p in stagger) {
              if (~_staggerTweenProps.indexOf(p)) {
                staggerVarsToMerge || (staggerVarsToMerge = {});
                staggerVarsToMerge[p] = stagger[p];
              }
            }
          }

          for (i = 0; i < l; i++) {
            copy = _copyExcluding(vars, _staggerPropsToSkip);
            copy.stagger = 0;
            yoyoEase && (copy.yoyoEase = yoyoEase);
            staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
            curTarget = parsedTargets[i];
            copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
            copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

            if (!stagger && l === 1 && copy.delay) {
              _this3._delay = delay = copy.delay;
              _this3._start += delay;
              copy.delay = 0;
            }

            tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
            tl._ease = _easeMap.none;
          }

          tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
        } else if (keyframes) {
          _inheritDefaults(_setDefaults(tl.vars.defaults, {
            ease: "none"
          }));

          tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
          var time = 0,
              a,
              kf,
              v;

          if (_isArray(keyframes)) {
            keyframes.forEach(function (frame) {
              return tl.to(parsedTargets, frame, ">");
            });
            tl.duration();
          } else {
            copy = {};

            for (p in keyframes) {
              p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
            }

            for (p in copy) {
              a = copy[p].sort(function (a, b) {
                return a.t - b.t;
              });
              time = 0;

              for (i = 0; i < a.length; i++) {
                kf = a[i];
                v = {
                  ease: kf.e,
                  duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                };
                v[p] = kf.v;
                tl.to(parsedTargets, v, time);
                time += v.duration;
              }
            }

            tl.duration() < duration && tl.to({}, {
              duration: duration - tl.duration()
            });
          }
        }

        duration || _this3.duration(duration = tl.duration());
      } else {
        _this3.timeline = 0;
      }

      if (overwrite === true && !_suppressOverwrites) {
        _overwritingTween = _assertThisInitialized(_this3);

        _globalTimeline.killTweensOf(parsedTargets);

        _overwritingTween = 0;
      }

      _addToTimeline(parent, _assertThisInitialized(_this3), position);

      vars.reversed && _this3.reverse();
      vars.paused && _this3.paused(true);

      if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
        _this3._tTime = -_tinyNum;

        _this3.render(Math.max(0, -delay) || 0);
      }

      scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
      return _this3;
    }

    var _proto3 = Tween.prototype;

    _proto3.render = function render(totalTime, suppressEvents, force) {
      var prevTime = this._time,
          tDur = this._tDur,
          dur = this._dur,
          isNegative = totalTime < 0,
          tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime,
          time,
          pt,
          iteration,
          cycleDuration,
          prevIteration,
          isYoyo,
          ratio,
          timeline,
          yoyoEase;

      if (!dur) {
        _renderZeroDurationTween(this, totalTime, suppressEvents, force);
      } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
        time = tTime;
        timeline = this.timeline;

        if (this._repeat) {
          cycleDuration = dur + this._rDelay;

          if (this._repeat < -1 && isNegative) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }

          time = _roundPrecise(tTime % cycleDuration);

          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);

            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }

            time > dur && (time = dur);
          }

          isYoyo = this._yoyo && iteration & 1;

          if (isYoyo) {
            yoyoEase = this._yEase;
            time = dur - time;
          }

          prevIteration = _animationCycle(this._tTime, cycleDuration);

          if (time === prevTime && !force && this._initted) {
            this._tTime = tTime;
            return this;
          }

          if (iteration !== prevIteration) {
            timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);

            if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
              this._lock = force = 1;
              this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
            }
          }
        }

        if (!this._initted) {
          if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
            this._tTime = 0;
            return this;
          }

          if (prevTime !== this._time) {
            return this;
          }

          if (dur !== this._dur) {
            return this.render(totalTime, suppressEvents, force);
          }
        }

        this._tTime = tTime;
        this._time = time;

        if (!this._act && this._ts) {
          this._act = 1;
          this._lazy = 0;
        }

        this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

        if (this._from) {
          this.ratio = ratio = 1 - ratio;
        }

        if (time && !prevTime && !suppressEvents && !iteration) {
          _callback(this, "onStart");

          if (this._tTime !== tTime) {
            return this;
          }
        }

        pt = this._pt;

        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }

        timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);

        if (this._onUpdate && !suppressEvents) {
          isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);

          _callback(this, "onUpdate");
        }

        this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

        if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
          isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
          (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);

          if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }

      return this;
    };

    _proto3.targets = function targets() {
      return this._targets;
    };

    _proto3.invalidate = function invalidate(soft) {
      (!soft || !this.vars.runBackwards) && (this._startAt = 0);
      this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
      this._ptLookup = [];
      this.timeline && this.timeline.invalidate(soft);
      return _Animation2.prototype.invalidate.call(this, soft);
    };

    _proto3.resetTo = function resetTo(property, value, start, startIsRelative) {
      _tickerActive || _ticker.wake();
      this._ts || this.play();
      var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          ratio;
      this._initted || _initTween(this, time);
      ratio = this._ease(time / this._dur);

      if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time)) {
        return this.resetTo(property, value, start, startIsRelative);
      }

      _alignPlayhead(this, 0);

      this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
      return this.render(0);
    };

    _proto3.kill = function kill(targets, vars) {
      if (vars === void 0) {
        vars = "all";
      }

      if (!targets && (!vars || vars === "all")) {
        this._lazy = this._pt = 0;
        return this.parent ? _interrupt(this) : this;
      }

      if (this.timeline) {
        var tDur = this.timeline.totalDuration();
        this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
        this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
        return this;
      }

      var parsedTargets = this._targets,
          killingTargets = targets ? toArray(targets) : parsedTargets,
          propTweenLookup = this._ptLookup,
          firstPT = this._pt,
          overwrittenProps,
          curLookup,
          curOverwriteProps,
          props,
          p,
          pt,
          i;

      if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
        vars === "all" && (this._pt = 0);
        return _interrupt(this);
      }

      overwrittenProps = this._op = this._op || [];

      if (vars !== "all") {
        if (_isString(vars)) {
          p = {};

          _forEachName(vars, function (name) {
            return p[name] = 1;
          });

          vars = p;
        }

        vars = _addAliasesToVars(parsedTargets, vars);
      }

      i = parsedTargets.length;

      while (i--) {
        if (~killingTargets.indexOf(parsedTargets[i])) {
          curLookup = propTweenLookup[i];

          if (vars === "all") {
            overwrittenProps[i] = vars;
            props = curLookup;
            curOverwriteProps = {};
          } else {
            curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
            props = vars;
          }

          for (p in props) {
            pt = curLookup && curLookup[p];

            if (pt) {
              if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                _removeLinkedListItem(this, pt, "_pt");
              }

              delete curLookup[p];
            }

            if (curOverwriteProps !== "all") {
              curOverwriteProps[p] = 1;
            }
          }
        }
      }

      this._initted && !this._pt && firstPT && _interrupt(this);
      return this;
    };

    Tween.to = function to(targets, vars) {
      return new Tween(targets, vars, arguments[2]);
    };

    Tween.from = function from(targets, vars) {
      return _createTweenType(1, arguments);
    };

    Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
      return new Tween(callback, 0, {
        immediateRender: false,
        lazy: false,
        overwrite: false,
        delay: delay,
        onComplete: callback,
        onReverseComplete: callback,
        onCompleteParams: params,
        onReverseCompleteParams: params,
        callbackScope: scope
      });
    };

    Tween.fromTo = function fromTo(targets, fromVars, toVars) {
      return _createTweenType(2, arguments);
    };

    Tween.set = function set(targets, vars) {
      vars.duration = 0;
      vars.repeatDelay || (vars.repeat = 0);
      return new Tween(targets, vars);
    };

    Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };

    return Tween;
  }(Animation);

  _setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });

  _forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
    Tween[name] = function () {
      var tl = new Timeline(),
          params = _slice.call(arguments, 0);

      params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
      return tl[name].apply(tl, params);
    };
  });

  var _setterPlain = function _setterPlain(target, property, value) {
    return target[property] = value;
  },
      _setterFunc = function _setterFunc(target, property, value) {
    return target[property](value);
  },
      _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
    return target[property](data.fp, value);
  },
      _setterAttribute = function _setterAttribute(target, property, value) {
    return target.setAttribute(property, value);
  },
      _getSetter = function _getSetter(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
  },
      _renderPlain = function _renderPlain(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
  },
      _renderBoolean = function _renderBoolean(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
  },
      _renderComplexString = function _renderComplexString(ratio, data) {
    var pt = data._pt,
        s = "";

    if (!ratio && data.b) {
      s = data.b;
    } else if (ratio === 1 && data.e) {
      s = data.e;
    } else {
      while (pt) {
        s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s;
        pt = pt._next;
      }

      s += data.c;
    }

    data.set(data.t, data.p, s, data);
  },
      _renderPropTweens = function _renderPropTweens(ratio, data) {
    var pt = data._pt;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
  },
      _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
    var pt = this._pt,
        next;

    while (pt) {
      next = pt._next;
      pt.p === property && pt.modifier(modifier, tween, target);
      pt = next;
    }
  },
      _killPropTweensOf = function _killPropTweensOf(property) {
    var pt = this._pt,
        hasNonDependentRemaining,
        next;

    while (pt) {
      next = pt._next;

      if (pt.p === property && !pt.op || pt.op === property) {
        _removeLinkedListItem(this, pt, "_pt");
      } else if (!pt.dep) {
        hasNonDependentRemaining = 1;
      }

      pt = next;
    }

    return !hasNonDependentRemaining;
  },
      _setterWithModifier = function _setterWithModifier(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
  },
      _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
    var pt = parent._pt,
        next,
        pt2,
        first,
        last;

    while (pt) {
      next = pt._next;
      pt2 = first;

      while (pt2 && pt2.pr > pt.pr) {
        pt2 = pt2._next;
      }

      if (pt._prev = pt2 ? pt2._prev : last) {
        pt._prev._next = pt;
      } else {
        first = pt;
      }

      if (pt._next = pt2) {
        pt2._prev = pt;
      } else {
        last = pt;
      }

      pt = next;
    }

    parent._pt = first;
  };

  var PropTween = function () {
    function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
      this.t = target;
      this.s = start;
      this.c = change;
      this.p = prop;
      this.r = renderer || _renderPlain;
      this.d = data || this;
      this.set = setter || _setterPlain;
      this.pr = priority || 0;
      this._next = next;

      if (next) {
        next._prev = this;
      }
    }

    var _proto4 = PropTween.prototype;

    _proto4.modifier = function modifier(func, tween, target) {
      this.mSet = this.mSet || this.set;
      this.set = _setterWithModifier;
      this.m = func;
      this.mt = target;
      this.tween = tween;
    };

    return PropTween;
  }();

  _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
    return _reservedProps[name] = 1;
  });

  _globals.TweenMax = _globals.TweenLite = Tween;
  _globals.TimelineLite = _globals.TimelineMax = Timeline;
  _globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
  });
  _config.stringFilter = _colorStringFilter;

  var _media = [],
      _listeners = {},
      _emptyArray = [],
      _lastMediaTime = 0,
      _contextID = 0,
      _dispatch = function _dispatch(type) {
    return (_listeners[type] || _emptyArray).map(function (f) {
      return f();
    });
  },
      _onMediaChange = function _onMediaChange() {
    var time = Date.now(),
        matches = [];

    if (time - _lastMediaTime > 2) {
      _dispatch("matchMediaInit");

      _media.forEach(function (c) {
        var queries = c.queries,
            conditions = c.conditions,
            match,
            p,
            anyMatch,
            toggled;

        for (p in queries) {
          match = _win.matchMedia(queries[p]).matches;
          match && (anyMatch = 1);

          if (match !== conditions[p]) {
            conditions[p] = match;
            toggled = 1;
          }
        }

        if (toggled) {
          c.revert();
          anyMatch && matches.push(c);
        }
      });

      _dispatch("matchMediaRevert");

      matches.forEach(function (c) {
        return c.onMatch(c);
      });
      _lastMediaTime = time;

      _dispatch("matchMedia");
    }
  };

  var Context = function () {
    function Context(func, scope) {
      this.selector = scope && selector(scope);
      this.data = [];
      this._r = [];
      this.isReverted = false;
      this.id = _contextID++;
      func && this.add(func);
    }

    var _proto5 = Context.prototype;

    _proto5.add = function add(name, func, scope) {
      if (_isFunction(name)) {
        scope = func;
        func = name;
        name = _isFunction;
      }

      var self = this,
          f = function f() {
        var prev = _context,
            prevSelector = self.selector,
            result;
        prev && prev !== self && prev.data.push(self);
        scope && (self.selector = selector(scope));
        _context = self;
        result = func.apply(self, arguments);
        _isFunction(result) && self._r.push(result);
        _context = prev;
        self.selector = prevSelector;
        self.isReverted = false;
        return result;
      };

      self.last = f;
      return name === _isFunction ? f(self) : name ? self[name] = f : f;
    };

    _proto5.ignore = function ignore(func) {
      var prev = _context;
      _context = null;
      func(this);
      _context = prev;
    };

    _proto5.getTweens = function getTweens() {
      var a = [];
      this.data.forEach(function (e) {
        return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
      });
      return a;
    };

    _proto5.clear = function clear() {
      this._r.length = this.data.length = 0;
    };

    _proto5.kill = function kill(revert, matchMedia) {
      var _this4 = this;

      if (revert) {
        var tweens = this.getTweens();
        this.data.forEach(function (t) {
          if (t.data === "isFlip") {
            t.revert();
            t.getChildren(true, true, false).forEach(function (tween) {
              return tweens.splice(tweens.indexOf(tween), 1);
            });
          }
        });
        tweens.map(function (t) {
          return {
            g: t.globalTime(0),
            t: t
          };
        }).sort(function (a, b) {
          return b.g - a.g || -1;
        }).forEach(function (o) {
          return o.t.revert(revert);
        });
        this.data.forEach(function (e) {
          return e instanceof Timeline ? e.data !== "nested" && e.kill() : !(e instanceof Tween) && e.revert && e.revert(revert);
        });

        this._r.forEach(function (f) {
          return f(revert, _this4);
        });

        this.isReverted = true;
      } else {
        this.data.forEach(function (e) {
          return e.kill && e.kill();
        });
      }

      this.clear();

      if (matchMedia) {
        var i = _media.length;

        while (i--) {
          _media[i].id === this.id && _media.splice(i, 1);
        }
      }
    };

    _proto5.revert = function revert(config) {
      this.kill(config || {});
    };

    return Context;
  }();

  var MatchMedia = function () {
    function MatchMedia(scope) {
      this.contexts = [];
      this.scope = scope;
    }

    var _proto6 = MatchMedia.prototype;

    _proto6.add = function add(conditions, func, scope) {
      _isObject(conditions) || (conditions = {
        matches: conditions
      });
      var context = new Context(0, scope || this.scope),
          cond = context.conditions = {},
          mq,
          p,
          active;
      _context && !context.selector && (context.selector = _context.selector);
      this.contexts.push(context);
      func = context.add("onMatch", func);
      context.queries = conditions;

      for (p in conditions) {
        if (p === "all") {
          active = 1;
        } else {
          mq = _win.matchMedia(conditions[p]);

          if (mq) {
            _media.indexOf(context) < 0 && _media.push(context);
            (cond[p] = mq.matches) && (active = 1);
            mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
          }
        }
      }

      active && func(context);
      return this;
    };

    _proto6.revert = function revert(config) {
      this.kill(config || {});
    };

    _proto6.kill = function kill(revert) {
      this.contexts.forEach(function (c) {
        return c.kill(revert, true);
      });
    };

    return MatchMedia;
  }();

  var _gsap = {
    registerPlugin: function registerPlugin() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      args.forEach(function (config) {
        return _createPlugin(config);
      });
    },
    timeline: function timeline(vars) {
      return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
      return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
      _isString(target) && (target = toArray(target)[0]);

      var getter = _getCache(target || {}).get,
          format = unit ? _passThrough : _numericIfPossible;

      unit === "native" && (unit = "");
      return !target ? target : !property ? function (property, unit, uncache) {
        return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
      } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
      target = toArray(target);

      if (target.length > 1) {
        var setters = target.map(function (t) {
          return gsap.quickSetter(t, property, unit);
        }),
            l = setters.length;
        return function (value) {
          var i = l;

          while (i--) {
            setters[i](value);
          }
        };
      }

      target = target[0] || {};

      var Plugin = _plugins[property],
          cache = _getCache(target),
          p = cache.harness && (cache.harness.aliases || {})[property] || property,
          setter = Plugin ? function (value) {
        var p = new Plugin();
        _quickTween._pt = 0;
        p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
        p.render(1, p);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache.set(target, p);

      return Plugin ? setter : function (value) {
        return setter(target, p, unit ? value + unit : value, cache, 1);
      };
    },
    quickTo: function quickTo(target, property, vars) {
      var _merge2;

      var tween = gsap.to(target, _merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, _merge2), vars || {})),
          func = function func(value, start, startIsRelative) {
        return tween.resetTo(property, value, start, startIsRelative);
      };

      func.tween = tween;
      return func;
    },
    isTweening: function isTweening(targets) {
      return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
      value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
      return _mergeDeep(_defaults, value || {});
    },
    config: function config(value) {
      return _mergeDeep(_config, value || {});
    },
    registerEffect: function registerEffect(_ref3) {
      var name = _ref3.name,
          effect = _ref3.effect,
          plugins = _ref3.plugins,
          defaults = _ref3.defaults,
          extendTimeline = _ref3.extendTimeline;
      (plugins || "").split(",").forEach(function (pluginName) {
        return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
      });

      _effects[name] = function (targets, vars, tl) {
        return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
      };

      if (extendTimeline) {
        Timeline.prototype[name] = function (targets, vars, position) {
          return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
        };
      }
    },
    registerEase: function registerEase(name, ease) {
      _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
      return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
      return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
      if (vars === void 0) {
        vars = {};
      }

      var tl = new Timeline(vars),
          child,
          next;
      tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

      _globalTimeline.remove(tl);

      tl._dp = 0;
      tl._time = tl._tTime = _globalTimeline._time;
      child = _globalTimeline._first;

      while (child) {
        next = child._next;

        if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
          _addToTimeline(tl, child, child._start - child._delay);
        }

        child = next;
      }

      _addToTimeline(_globalTimeline, tl, 0);

      return tl;
    },
    context: function context(func, scope) {
      return func ? new Context(func, scope) : _context;
    },
    matchMedia: function matchMedia(scope) {
      return new MatchMedia(scope);
    },
    matchMediaRefresh: function matchMediaRefresh() {
      return _media.forEach(function (c) {
        var cond = c.conditions,
            found,
            p;

        for (p in cond) {
          if (cond[p]) {
            cond[p] = false;
            found = 1;
          }
        }

        found && c.revert();
      }) || _onMediaChange();
    },
    addEventListener: function addEventListener(type, callback) {
      var a = _listeners[type] || (_listeners[type] = []);
      ~a.indexOf(callback) || a.push(callback);
    },
    removeEventListener: function removeEventListener(type, callback) {
      var a = _listeners[type],
          i = a && a.indexOf(callback);
      i >= 0 && a.splice(i, 1);
    },
    utils: {
      wrap: wrap,
      wrapYoyo: wrapYoyo,
      distribute: distribute,
      random: random,
      snap: snap,
      normalize: normalize,
      getUnit: getUnit,
      clamp: clamp,
      splitColor: splitColor,
      toArray: toArray,
      selector: selector,
      mapRange: mapRange,
      pipe: pipe,
      unitize: unitize,
      interpolate: interpolate,
      shuffle: shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
      PropTween: PropTween,
      globals: _addGlobal,
      Tween: Tween,
      Timeline: Timeline,
      Animation: Animation,
      getCache: _getCache,
      _removeLinkedListItem: _removeLinkedListItem,
      reverting: function reverting() {
        return _reverting;
      },
      context: function context(toAdd) {
        if (toAdd && _context) {
          _context.data.push(toAdd);

          toAdd._ctx = _context;
        }

        return _context;
      },
      suppressOverwrites: function suppressOverwrites(value) {
        return _suppressOverwrites = value;
      }
    }
  };

  _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
    return _gsap[name] = Tween[name];
  });

  _ticker.add(Timeline.updateRoot);

  _quickTween = _gsap.to({}, {
    duration: 0
  });

  var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
    var pt = plugin._pt;

    while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
      pt = pt._next;
    }

    return pt;
  },
      _addModifiers = function _addModifiers(tween, modifiers) {
    var targets = tween._targets,
        p,
        i,
        pt;

    for (p in modifiers) {
      i = targets.length;

      while (i--) {
        pt = tween._ptLookup[i][p];

        if (pt && (pt = pt.d)) {
          if (pt._pt) {
            pt = _getPluginPropTween(pt, p);
          }

          pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
        }
      }
    }
  },
      _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
    return {
      name: name,
      rawVars: 1,
      init: function init(target, vars, tween) {
        tween._onInit = function (tween) {
          var temp, p;

          if (_isString(vars)) {
            temp = {};

            _forEachName(vars, function (name) {
              return temp[name] = 1;
            });

            vars = temp;
          }

          if (modifier) {
            temp = {};

            for (p in vars) {
              temp[p] = modifier(vars[p]);
            }

            vars = temp;
          }

          _addModifiers(tween, vars);
        };
      }
    };
  };

  var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
      var p, pt, v;
      this.tween = tween;

      for (p in vars) {
        v = target.getAttribute(p) || "";
        pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
        pt.op = p;
        pt.b = v;

        this._props.push(p);
      }
    },
    render: function render(ratio, data) {
      var pt = data._pt;

      while (pt) {
        _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
        pt = pt._next;
      }
    }
  }, {
    name: "endArray",
    init: function init(target, value) {
      var i = value.length;

      while (i--) {
        this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
      }
    }
  }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
  Tween.version = Timeline.version = gsap.version = "3.12.1";
  _coreReady = 1;
  _windowExists() && _wake();
  var Power0 = _easeMap.Power0,
      Power1 = _easeMap.Power1,
      Power2 = _easeMap.Power2,
      Power3 = _easeMap.Power3,
      Power4 = _easeMap.Power4,
      Linear = _easeMap.Linear,
      Quad = _easeMap.Quad,
      Cubic = _easeMap.Cubic,
      Quart = _easeMap.Quart,
      Quint = _easeMap.Quint,
      Strong = _easeMap.Strong,
      Elastic = _easeMap.Elastic,
      Back = _easeMap.Back,
      SteppedEase = _easeMap.SteppedEase,
      Bounce = _easeMap.Bounce,
      Sine = _easeMap.Sine,
      Expo = _easeMap.Expo,
      Circ = _easeMap.Circ;

  var _win$1,
      _doc$1,
      _docElement,
      _pluginInitted,
      _tempDiv,
      _tempDivStyler,
      _recentSetterPlugin,
      _reverting$1,
      _windowExists$1 = function _windowExists() {
    return typeof window !== "undefined";
  },
      _transformProps = {},
      _RAD2DEG = 180 / Math.PI,
      _DEG2RAD = Math.PI / 180,
      _atan2 = Math.atan2,
      _bigNum$1 = 1e8,
      _capsExp = /([A-Z])/g,
      _horizontalExp = /(left|right|width|margin|padding|x)/i,
      _complexExp = /[\s,\(]\S/,
      _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  },
      _renderCSSProp = function _renderCSSProp(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
  },
      _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
  },
      _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
  },
      _renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
  },
      _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
  },
      _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
  },
      _setterCSSStyle = function _setterCSSStyle(target, property, value) {
    return target.style[property] = value;
  },
      _setterCSSProp = function _setterCSSProp(target, property, value) {
    return target.style.setProperty(property, value);
  },
      _setterTransform = function _setterTransform(target, property, value) {
    return target._gsap[property] = value;
  },
      _setterScale = function _setterScale(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
  },
      _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
  },
      _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
  },
      _transformProp = "transform",
      _transformOriginProp = _transformProp + "Origin",
      _saveStyle = function _saveStyle(property, isNotCSS) {
    var _this = this;

    var target = this.target,
        style = target.style;

    if (property in _transformProps && style) {
      this.tfm = this.tfm || {};

      if (property !== "transform") {
        property = _propertyAliases[property] || property;
        ~property.indexOf(",") ? property.split(",").forEach(function (a) {
          return _this.tfm[a] = _get(target, a);
        }) : this.tfm[property] = target._gsap.x ? target._gsap[property] : _get(target, property);
      } else {
        return _propertyAliases.transform.split(",").forEach(function (p) {
          return _saveStyle.call(_this, p, isNotCSS);
        });
      }

      if (this.props.indexOf(_transformProp) >= 0) {
        return;
      }

      if (target._gsap.svg) {
        this.svgo = target.getAttribute("data-svg-origin");
        this.props.push(_transformOriginProp, isNotCSS, "");
      }

      property = _transformProp;
    }

    (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
  },
      _removeIndependentTransforms = function _removeIndependentTransforms(style) {
    if (style.translate) {
      style.removeProperty("translate");
      style.removeProperty("scale");
      style.removeProperty("rotate");
    }
  },
      _revertStyle = function _revertStyle() {
    var props = this.props,
        target = this.target,
        style = target.style,
        cache = target._gsap,
        i,
        p;

    for (i = 0; i < props.length; i += 3) {
      props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
    }

    if (this.tfm) {
      for (p in this.tfm) {
        cache[p] = this.tfm[p];
      }

      if (cache.svg) {
        cache.renderTransform();
        target.setAttribute("data-svg-origin", this.svgo || "");
      }

      i = _reverting$1();

      if ((!i || !i.isStart) && !style[_transformProp]) {
        _removeIndependentTransforms(style);

        cache.uncache = 1;
      }
    }
  },
      _getStyleSaver = function _getStyleSaver(target, properties) {
    var saver = {
      target: target,
      props: [],
      revert: _revertStyle,
      save: _saveStyle
    };
    target._gsap || gsap.core.getCache(target);
    properties && properties.split(",").forEach(function (p) {
      return saver.save(p);
    });
    return saver;
  },
      _supports3D,
      _createElement = function _createElement(type, ns) {
    var e = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type);
    return e.style ? e : _doc$1.createElement(type);
  },
      _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || "";
  },
      _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
      _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
    var e = element || _tempDiv,
        s = e.style,
        i = 5;

    if (property in s && !preferPrefix) {
      return property;
    }

    property = property.charAt(0).toUpperCase() + property.substr(1);

    while (i-- && !(_prefixes[i] + property in s)) {}

    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
  },
      _initCore = function _initCore() {
    if (_windowExists$1() && window.document) {
      _win$1 = window;
      _doc$1 = _win$1.document;
      _docElement = _doc$1.documentElement;
      _tempDiv = _createElement("div") || {
        style: {}
      };
      _tempDivStyler = _createElement("div");
      _transformProp = _checkPropPrefix(_transformProp);
      _transformOriginProp = _transformProp + "Origin";
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
      _supports3D = !!_checkPropPrefix("perspective");
      _reverting$1 = gsap.core.reverting;
      _pluginInitted = 1;
    }
  },
      _getBBoxHack = function _getBBoxHack(swapIfPossible) {
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
        oldParent = this.parentNode,
        oldSibling = this.nextSibling,
        oldCSS = this.style.cssText,
        bbox;

    _docElement.appendChild(svg);

    svg.appendChild(this);
    this.style.display = "block";

    if (swapIfPossible) {
      try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox;
        this.getBBox = _getBBoxHack;
      } catch (e) {}
    } else if (this._gsapBBox) {
      bbox = this._gsapBBox();
    }

    if (oldParent) {
      if (oldSibling) {
        oldParent.insertBefore(this, oldSibling);
      } else {
        oldParent.appendChild(this);
      }
    }

    _docElement.removeChild(svg);

    this.style.cssText = oldCSS;
    return bbox;
  },
      _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
    var i = attributesArray.length;

    while (i--) {
      if (target.hasAttribute(attributesArray[i])) {
        return target.getAttribute(attributesArray[i]);
      }
    }
  },
      _getBBox = function _getBBox(target) {
    var bounds;

    try {
      bounds = target.getBBox();
    } catch (error) {
      bounds = _getBBoxHack.call(target, true);
    }

    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
      x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
      y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : bounds;
  },
      _isSVG = function _isSVG(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
  },
      _removeProperty = function _removeProperty(target, property) {
    if (property) {
      var style = target.style;

      if (property in _transformProps && property !== _transformOriginProp) {
        property = _transformProp;
      }

      if (style.removeProperty) {
        if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
          property = "-" + property;
        }

        style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
      } else {
        style.removeAttribute(property);
      }
    }
  },
      _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;

    plugin._props.push(property);

    return pt;
  },
      _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  },
      _nonStandardLayouts = {
    grid: 1,
    flex: 1
  },
      _convertToUnit = function _convertToUnit(target, property, value, unit) {
    var curValue = parseFloat(value) || 0,
        curUnit = (value + "").trim().substr((curValue + "").length) || "px",
        style = _tempDiv.style,
        horizontal = _horizontalExp.test(property),
        isRootSVG = target.tagName.toLowerCase() === "svg",
        measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
        amount = 100,
        toPixels = unit === "px",
        toPercent = unit === "%",
        px,
        parent,
        cache,
        isSVG;

    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }

    curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);

    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
      px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
      return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
    }

    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

    if (isSVG) {
      parent = (target.ownerSVGElement || {}).parentNode;
    }

    if (!parent || parent === _doc$1 || !parent.appendChild) {
      parent = _doc$1.body;
    }

    cache = parent._gsap;

    if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
      return _round(curValue / cache.width * amount);
    } else {
      (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
      parent === target && (style.position = "static");
      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style.position = "absolute";

      if (horizontal && toPercent) {
        cache = _getCache(parent);
        cache.time = _ticker.time;
        cache.width = parent[measureProperty];
      }
    }

    return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  },
      _get = function _get(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();

    if (property in _propertyAliases && property !== "transform") {
      property = _propertyAliases[property];

      if (~property.indexOf(",")) {
        property = property.split(",")[0];
      }
    }

    if (_transformProps[property] && property !== "transform") {
      value = _parseTransform(target, uncache);
      value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
      value = target.style[property];

      if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
        value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
      }
    }

    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
  },
      _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
    if (!start || start === "none") {
      var p = _checkPropPrefix(prop, target, 1),
          s = p && _getComputedProperty(target, p, 1);

      if (s && s !== start) {
        prop = p;
        start = s;
      } else if (prop === "borderColor") {
        start = _getComputedProperty(target, "borderTopColor");
      }
    }

    var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString),
        index = 0,
        matchIndex = 0,
        a,
        result,
        startValues,
        startNum,
        color,
        startValue,
        endValue,
        endNum,
        chunk,
        endUnit,
        startUnit,
        endValues;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";

    if (end === "auto") {
      target.style[prop] = end;
      end = _getComputedProperty(target, prop) || end;
      target.style[prop] = start;
    }

    a = [start, end];

    _colorStringFilter(a);

    start = a[0];
    end = a[1];
    startValues = start.match(_numWithUnitExp) || [];
    endValues = end.match(_numWithUnitExp) || [];

    if (endValues.length) {
      while (result = _numWithUnitExp.exec(end)) {
        endValue = result[0];
        chunk = end.substring(index, result.index);

        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
          color = 1;
        }

        if (endValue !== (startValue = startValues[matchIndex++] || "")) {
          startNum = parseFloat(startValue) || 0;
          startUnit = startValue.substr((startNum + "").length);
          endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
          endNum = parseFloat(endValue);
          endUnit = endValue.substr((endNum + "").length);
          index = _numWithUnitExp.lastIndex - endUnit.length;

          if (!endUnit) {
            endUnit = endUnit || _config.units[prop] || startUnit;

            if (index === end.length) {
              end += endUnit;
              pt.e += endUnit;
            }
          }

          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
          }

          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            s: startNum,
            c: endNum - startNum,
            m: color && color < 4 || prop === "zIndex" ? Math.round : 0
          };
        }
      }

      pt.c = index < end.length ? end.substring(index, end.length) : "";
    } else {
      pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }

    _relExp.test(end) && (pt.e = 0);
    this._pt = pt;
    return pt;
  },
      _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  },
      _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
    var split = value.split(" "),
        x = split[0],
        y = split[1] || "50%";

    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
      value = x;
      x = y;
      y = value;
    }

    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
  },
      _renderClearProps = function _renderClearProps(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
      var target = data.t,
          style = target.style,
          props = data.u,
          cache = target._gsap,
          prop,
          clearTransforms,
          i;

      if (props === "all" || props === true) {
        style.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i = props.length;

        while (--i > -1) {
          prop = props[i];

          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
          }

          _removeProperty(target, prop);
        }
      }

      if (clearTransforms) {
        _removeProperty(target, _transformProp);

        if (cache) {
          cache.svg && target.removeAttribute("transform");

          _parseTransform(target, 1);

          cache.uncache = 1;

          _removeIndependentTransforms(style);
        }
      }
    }
  },
      _specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
      if (tween.data !== "isFromStart") {
        var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
        pt.u = endValue;
        pt.pr = -10;
        pt.tween = tween;

        plugin._props.push(property);

        return 1;
      }
    }
  },
      _identity2DMatrix = [1, 0, 0, 1, 0, 0],
      _rotationalProperties = {},
      _isNullTransform = function _isNullTransform(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
  },
      _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
    var matrixString = _getComputedProperty(target, _transformProp);

    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
  },
      _getMatrix = function _getMatrix(target, force2D) {
    var cache = target._gsap || _getCache(target),
        style = target.style,
        matrix = _getComputedTransformMatrixAsArray(target),
        parent,
        nextSibling,
        temp,
        addedToDOM;

    if (cache.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix;
      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
      temp = style.display;
      style.display = "block";
      parent = target.parentNode;

      if (!parent || !target.offsetParent) {
        addedToDOM = 1;
        nextSibling = target.nextElementSibling;

        _docElement.appendChild(target);
      }

      matrix = _getComputedTransformMatrixAsArray(target);
      temp ? style.display = temp : _removeProperty(target, "display");

      if (addedToDOM) {
        nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
      }
    }

    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
  },
      _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap,
        matrix = matrixArray || _getMatrix(target, true),
        xOriginOld = cache.xOrigin || 0,
        yOriginOld = cache.yOrigin || 0,
        xOffsetOld = cache.xOffset || 0,
        yOffsetOld = cache.yOffset || 0,
        a = matrix[0],
        b = matrix[1],
        c = matrix[2],
        d = matrix[3],
        tx = matrix[4],
        ty = matrix[5],
        originSplit = origin.split(" "),
        xOrigin = parseFloat(originSplit[0]) || 0,
        yOrigin = parseFloat(originSplit[1]) || 0,
        bounds,
        determinant,
        x,
        y;

    if (!originIsAbsolute) {
      bounds = _getBBox(target);
      xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
      yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
      x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
      y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
      xOrigin = x;
      yOrigin = y;
    }

    if (smooth || smooth !== false && cache.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
      cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else {
      cache.xOffset = cache.yOffset = 0;
    }

    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px";

    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }

    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  },
      _parseTransform = function _parseTransform(target, uncache) {
    var cache = target._gsap || new GSCache(target);

    if ("x" in cache && !uncache && !cache.uncache) {
      return cache;
    }

    var style = target.style,
        invertedScaleX = cache.scaleX < 0,
        px = "px",
        deg = "deg",
        cs = getComputedStyle(target),
        origin = _getComputedProperty(target, _transformOriginProp) || "0",
        x,
        y,
        z,
        scaleX,
        scaleY,
        rotation,
        rotationX,
        rotationY,
        skewX,
        skewY,
        perspective,
        xOrigin,
        yOrigin,
        matrix,
        angle,
        cos,
        sin,
        a,
        b,
        c,
        d,
        a12,
        a22,
        t1,
        t2,
        t3,
        a13,
        a23,
        a33,
        a42,
        a43,
        a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));

    if (cs.translate) {
      if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
        style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
      }

      style.scale = style.rotate = style.translate = "none";
    }

    matrix = _getMatrix(target, cache.svg);

    if (cache.svg) {
      if (cache.uncache) {
        t2 = target.getBBox();
        origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
        t1 = "";
      } else {
        t1 = !uncache && target.getAttribute("data-svg-origin");
      }

      _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }

    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;

    if (matrix !== _identity2DMatrix) {
      a = matrix[0];
      b = matrix[1];
      c = matrix[2];
      d = matrix[3];
      x = a12 = matrix[4];
      y = a22 = matrix[5];

      if (matrix.length === 6) {
        scaleX = Math.sqrt(a * a + b * b);
        scaleY = Math.sqrt(d * d + c * c);
        rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
        skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
        skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));

        if (cache.svg) {
          x -= xOrigin - (xOrigin * a + yOrigin * c);
          y -= yOrigin - (xOrigin * b + yOrigin * d);
        }
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x = matrix[12];
        y = matrix[13];
        z = matrix[14];
        angle = _atan2(a32, a33);
        rotationX = angle * _RAD2DEG;

        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        }

        angle = _atan2(-c, a33);
        rotationY = angle * _RAD2DEG;

        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a * cos - a13 * sin;
          t2 = b * cos - a23 * sin;
          t3 = c * cos - a33 * sin;
          a43 = d * sin + a43 * cos;
          a = t1;
          b = t2;
          c = t3;
        }

        angle = _atan2(b, a);
        rotation = angle * _RAD2DEG;

        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a * cos + b * sin;
          t2 = a12 * cos + a22 * sin;
          b = b * cos - a * sin;
          a22 = a22 * cos - a12 * sin;
          a = t1;
          a12 = t2;
        }

        if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
          rotationX = rotation = 0;
          rotationY = 180 - rotationY;
        }

        scaleX = _round(Math.sqrt(a * a + b * b + c * c));
        scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
        angle = _atan2(a12, a22);
        skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
        perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }

      if (cache.svg) {
        t1 = target.getAttribute("transform");
        cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
        t1 && target.setAttribute("transform", t1);
      }
    }

    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation <= 0 ? 180 : -180;
        rotation += rotation <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }

    uncache = uncache || cache.uncache;
    cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = _round(scaleX);
    cache.scaleY = _round(scaleY);
    cache.rotation = _round(rotation) + deg;
    cache.rotationX = _round(rotationX) + deg;
    cache.rotationY = _round(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;

    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
      style[_transformOriginProp] = _firstTwoOnly(origin);
    }

    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
  },
      _firstTwoOnly = function _firstTwoOnly(value) {
    return (value = value.split(" "))[0] + " " + value[1];
  },
      _addPxTranslate = function _addPxTranslate(target, start, value) {
    var unit = getUnit(start);
    return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
  },
      _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;

    _renderCSSTransforms(ratio, cache);
  },
      _zeroDeg = "0deg",
      _zeroPx = "0px",
      _endParenthesis = ") ",
      _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
    var _ref = cache || this,
        xPercent = _ref.xPercent,
        yPercent = _ref.yPercent,
        x = _ref.x,
        y = _ref.y,
        z = _ref.z,
        rotation = _ref.rotation,
        rotationY = _ref.rotationY,
        rotationX = _ref.rotationX,
        skewX = _ref.skewX,
        skewY = _ref.skewY,
        scaleX = _ref.scaleX,
        scaleY = _ref.scaleY,
        transformPerspective = _ref.transformPerspective,
        force3D = _ref.force3D,
        target = _ref.target,
        zOrigin = _ref.zOrigin,
        transforms = "",
        use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;

    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
      var angle = parseFloat(rotationY) * _DEG2RAD,
          a13 = Math.sin(angle),
          a33 = Math.cos(angle),
          cos;

      angle = parseFloat(rotationX) * _DEG2RAD;
      cos = Math.cos(angle);
      x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
      y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
      z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }

    if (transformPerspective !== _zeroPx) {
      transforms += "perspective(" + transformPerspective + _endParenthesis;
    }

    if (xPercent || yPercent) {
      transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }

    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
      transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    }

    if (rotation !== _zeroDeg) {
      transforms += "rotate(" + rotation + _endParenthesis;
    }

    if (rotationY !== _zeroDeg) {
      transforms += "rotateY(" + rotationY + _endParenthesis;
    }

    if (rotationX !== _zeroDeg) {
      transforms += "rotateX(" + rotationX + _endParenthesis;
    }

    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
      transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }

    if (scaleX !== 1 || scaleY !== 1) {
      transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }

    target.style[_transformProp] = transforms || "translate(0, 0)";
  },
      _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
    var _ref2 = cache || this,
        xPercent = _ref2.xPercent,
        yPercent = _ref2.yPercent,
        x = _ref2.x,
        y = _ref2.y,
        rotation = _ref2.rotation,
        skewX = _ref2.skewX,
        skewY = _ref2.skewY,
        scaleX = _ref2.scaleX,
        scaleY = _ref2.scaleY,
        target = _ref2.target,
        xOrigin = _ref2.xOrigin,
        yOrigin = _ref2.yOrigin,
        xOffset = _ref2.xOffset,
        yOffset = _ref2.yOffset,
        forceCSS = _ref2.forceCSS,
        tx = parseFloat(x),
        ty = parseFloat(y),
        a11,
        a21,
        a12,
        a22,
        temp;

    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);

    if (skewY) {
      skewY = parseFloat(skewY);
      skewX += skewY;
      rotation += skewY;
    }

    if (rotation || skewX) {
      rotation *= _DEG2RAD;
      skewX *= _DEG2RAD;
      a11 = Math.cos(rotation) * scaleX;
      a21 = Math.sin(rotation) * scaleX;
      a12 = Math.sin(rotation - skewX) * -scaleY;
      a22 = Math.cos(rotation - skewX) * scaleY;

      if (skewX) {
        skewY *= _DEG2RAD;
        temp = Math.tan(skewX - skewY);
        temp = Math.sqrt(1 + temp * temp);
        a12 *= temp;
        a22 *= temp;

        if (skewY) {
          temp = Math.tan(skewY);
          temp = Math.sqrt(1 + temp * temp);
          a11 *= temp;
          a21 *= temp;
        }
      }

      a11 = _round(a11);
      a21 = _round(a21);
      a12 = _round(a12);
      a22 = _round(a22);
    } else {
      a11 = scaleX;
      a22 = scaleY;
      a21 = a12 = 0;
    }

    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
      tx = _convertToUnit(target, "x", x, "px");
      ty = _convertToUnit(target, "y", y, "px");
    }

    if (xOrigin || yOrigin || xOffset || yOffset) {
      tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
      ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }

    if (xPercent || yPercent) {
      temp = target.getBBox();
      tx = _round(tx + xPercent / 100 * temp.width);
      ty = _round(ty + yPercent / 100 * temp.height);
    }

    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp);
  },
      _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
    var cap = 360,
        isString = _isString(endValue),
        endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
        change = endNum - startNum,
        finalValue = startNum + change + "deg",
        direction,
        pt;

    if (isString) {
      direction = endValue.split("_")[1];

      if (direction === "short") {
        change %= cap;

        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }

      if (direction === "cw" && change < 0) {
        change = (change + cap * _bigNum$1) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * _bigNum$1) % cap - ~~(change / cap) * cap;
      }
    }

    plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";

    plugin._props.push(property);

    return pt;
  },
      _assign = function _assign(target, source) {
    for (var p in source) {
      target[p] = source[p];
    }

    return target;
  },
      _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
    var startCache = _assign({}, target._gsap),
        exclude = "perspective,force3D,transformOrigin,svgOrigin",
        style = target.style,
        endCache,
        p,
        startValue,
        endValue,
        startNum,
        endNum,
        startUnit,
        endUnit;

    if (startCache.svg) {
      startValue = target.getAttribute("transform");
      target.setAttribute("transform", "");
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);

      _removeProperty(target, _transformProp);

      target.setAttribute("transform", startValue);
    } else {
      startValue = getComputedStyle(target)[_transformProp];
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      style[_transformProp] = startValue;
    }

    for (p in _transformProps) {
      startValue = startCache[p];
      endValue = endCache[p];

      if (startValue !== endValue && exclude.indexOf(p) < 0) {
        startUnit = getUnit(startValue);
        endUnit = getUnit(endValue);
        startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
        endNum = parseFloat(endValue);
        plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
        plugin._pt.u = endUnit || 0;

        plugin._props.push(p);
      }
    }

    _assign(endCache, startCache);
  };

  _forEachName("padding,margin,Width,Radius", function (name, index) {
    var t = "Top",
        r = "Right",
        b = "Bottom",
        l = "Left",
        props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
      return index < 2 ? name + side : "border" + side + name;
    });

    _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
      var a, vars;

      if (arguments.length < 4) {
        a = props.map(function (prop) {
          return _get(plugin, prop, property);
        });
        vars = a.join(" ");
        return vars.split(a[0]).length === 5 ? a[0] : vars;
      }

      a = (endValue + "").split(" ");
      vars = {};
      props.forEach(function (prop, i) {
        return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
      });
      plugin.init(target, vars, tween);
    };
  });

  var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
      return target.style && target.nodeType;
    },
    init: function init(target, vars, tween, index, targets) {
      var props = this._props,
          style = target.style,
          startAt = tween.vars.startAt,
          startValue,
          endValue,
          endNum,
          startNum,
          type,
          specialProp,
          p,
          startUnit,
          endUnit,
          relative,
          isTransformRelated,
          transformPropTween,
          cache,
          smooth,
          hasPriority,
          inlineProps;
      _pluginInitted || _initCore();
      this.styles = this.styles || _getStyleSaver(target);
      inlineProps = this.styles.props;
      this.tween = tween;

      for (p in vars) {
        if (p === "autoRound") {
          continue;
        }

        endValue = vars[p];

        if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
          continue;
        }

        type = typeof endValue;
        specialProp = _specialProps[p];

        if (type === "function") {
          endValue = endValue.call(tween, index, target, targets);
          type = typeof endValue;
        }

        if (type === "string" && ~endValue.indexOf("random(")) {
          endValue = _replaceRandom(endValue);
        }

        if (specialProp) {
          specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
        } else if (p.substr(0, 2) === "--") {
          startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
          endValue += "";
          _colorExp.lastIndex = 0;

          if (!_colorExp.test(startValue)) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
          }

          endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
          this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
          props.push(p);
          inlineProps.push(p, 0, style[p]);
        } else if (type !== "undefined") {
          if (startAt && p in startAt) {
            startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
            _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
            getUnit(startValue + "") || (startValue += _config.units[p] || getUnit(_get(target, p)) || "");
            (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
          } else {
            startValue = _get(target, p);
          }

          startNum = parseFloat(startValue);
          relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
          relative && (endValue = endValue.substr(2));
          endNum = parseFloat(endValue);

          if (p in _propertyAliases) {
            if (p === "autoAlpha") {
              if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                startNum = 0;
              }

              inlineProps.push("visibility", 0, style.visibility);

              _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
            }

            if (p !== "scale" && p !== "transform") {
              p = _propertyAliases[p];
              ~p.indexOf(",") && (p = p.split(",")[0]);
            }
          }

          isTransformRelated = p in _transformProps;

          if (isTransformRelated) {
            this.styles.save(p);

            if (!transformPropTween) {
              cache = target._gsap;
              cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
              smooth = vars.smoothOrigin !== false && cache.smooth;
              transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
              transformPropTween.dep = 1;
            }

            if (p === "scale") {
              this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
              this._pt.u = 0;
              props.push("scaleY", p);
              p += "X";
            } else if (p === "transformOrigin") {
              inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
              endValue = _convertKeywordsToPercentages(endValue);

              if (cache.svg) {
                _applySVGOrigin(target, endValue, 0, smooth, 0, this);
              } else {
                endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

                _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
              }

              continue;
            } else if (p === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth, 0, this);

              continue;
            } else if (p in _rotationalProperties) {
              _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);

              continue;
            } else if (p === "smoothOrigin") {
              _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

              continue;
            } else if (p === "force3D") {
              cache[p] = endValue;
              continue;
            } else if (p === "transform") {
              _addRawTransformPTs(this, endValue, target);

              continue;
            }
          } else if (!(p in style)) {
            p = _checkPropPrefix(p) || p;
          }

          if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
            startUnit = (startValue + "").substr((startNum + "").length);
            endNum || (endNum = 0);
            endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
            startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
            this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
            this._pt.u = endUnit || 0;

            if (startUnit !== endUnit && endUnit !== "%") {
              this._pt.b = startValue;
              this._pt.r = _renderCSSPropWithBeginning;
            }
          } else if (!(p in style)) {
            if (p in target) {
              this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
            } else if (p !== "parseTransform") {
              _missingPlugin(p, endValue);

              continue;
            }
          } else {
            _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
          }

          isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
          props.push(p);
        }
      }

      hasPriority && _sortPropTweensByPriority(this);
    },
    render: function render(ratio, data) {
      if (data.tween._time || !_reverting$1()) {
        var pt = data._pt;

        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
      } else {
        data.styles.revert();
      }
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
      var p = _propertyAliases[property];
      p && p.indexOf(",") < 0 && (property = p);
      return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
    },
    core: {
      _removeProperty: _removeProperty,
      _getMatrix: _getMatrix
    }
  };
  gsap.utils.checkPrefix = _checkPropPrefix;
  gsap.core.getStyleSaver = _getStyleSaver;

  (function (positionAndScale, rotation, others, aliases) {
    var all = _forEachName(positionAndScale + "," + rotation + "," + others, function (name) {
      _transformProps[name] = 1;
    });

    _forEachName(rotation, function (name) {
      _config.units[name] = "deg";
      _rotationalProperties[name] = 1;
    });

    _propertyAliases[all[13]] = positionAndScale + "," + rotation;

    _forEachName(aliases, function (name) {
      var split = name.split(":");
      _propertyAliases[split[1]] = all[split[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

  _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
    _config.units[name] = "px";
  });

  gsap.registerPlugin(CSSPlugin);

  var _svgPathExp = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
      _numbersExp = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
      _scientific = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig,
      _selectorExp = /(^[#\.][a-z]|[a-y][a-z])/i,
      _DEG2RAD$1 = Math.PI / 180,
      _RAD2DEG$1 = 180 / Math.PI,
      _sin$1 = Math.sin,
      _cos$1 = Math.cos,
      _abs = Math.abs,
      _sqrt$1 = Math.sqrt,
      _atan2$1 = Math.atan2,
      _largeNum = 1e8,
      _isString$1 = function _isString(value) {
    return typeof value === "string";
  },
      _isNumber$1 = function _isNumber(value) {
    return typeof value === "number";
  },
      _isUndefined$1 = function _isUndefined(value) {
    return typeof value === "undefined";
  },
      _temp = {},
      _temp2 = {},
      _roundingNum = 1e5,
      _wrapProgress = function _wrapProgress(progress) {
    return Math.round((progress + _largeNum) % 1 * _roundingNum) / _roundingNum || (progress < 0 ? 0 : 1);
  },
      _round$1 = function _round(value) {
    return Math.round(value * _roundingNum) / _roundingNum || 0;
  },
      _roundPrecise$1 = function _roundPrecise(value) {
    return Math.round(value * 1e10) / 1e10 || 0;
  },
      _splitSegment = function _splitSegment(rawPath, segIndex, i, t) {
    var segment = rawPath[segIndex],
        shift = t === 1 ? 6 : subdivideSegment(segment, i, t);

    if (shift && shift + i + 2 < segment.length) {
      rawPath.splice(segIndex, 0, segment.slice(0, i + shift + 2));
      segment.splice(0, i + shift);
      return 1;
    }
  },
      _getSampleIndex = function _getSampleIndex(samples, length, progress) {
    var l = samples.length,
        i = ~~(progress * l);

    if (samples[i] > length) {
      while (--i && samples[i] > length) {}

      i < 0 && (i = 0);
    } else {
      while (samples[++i] < length && i < l) {}
    }

    return i < l ? i : l - 1;
  },
      _reverseRawPath = function _reverseRawPath(rawPath, skipOuter) {
    var i = rawPath.length;
    skipOuter || rawPath.reverse();

    while (i--) {
      rawPath[i].reversed || reverseSegment(rawPath[i]);
    }
  },
      _copyMetaData = function _copyMetaData(source, copy) {
    copy.totalLength = source.totalLength;

    if (source.samples) {
      copy.samples = source.samples.slice(0);
      copy.lookup = source.lookup.slice(0);
      copy.minLength = source.minLength;
      copy.resolution = source.resolution;
    } else if (source.totalPoints) {
      copy.totalPoints = source.totalPoints;
    }

    return copy;
  },
      _appendOrMerge = function _appendOrMerge(rawPath, segment) {
    var index = rawPath.length,
        prevSeg = rawPath[index - 1] || [],
        l = prevSeg.length;

    if (index && segment[0] === prevSeg[l - 2] && segment[1] === prevSeg[l - 1]) {
      segment = prevSeg.concat(segment.slice(2));
      index--;
    }

    rawPath[index] = segment;
  };

  function getRawPath(value) {
    value = _isString$1(value) && _selectorExp.test(value) ? document.querySelector(value) || value : value;
    var e = value.getAttribute ? value : 0,
        rawPath;

    if (e && (value = value.getAttribute("d"))) {
      if (!e._gsPath) {
        e._gsPath = {};
      }

      rawPath = e._gsPath[value];
      return rawPath && !rawPath._dirty ? rawPath : e._gsPath[value] = stringToRawPath(value);
    }

    return !value ? console.warn("Expecting a <path> element or an SVG path data string") : _isString$1(value) ? stringToRawPath(value) : _isNumber$1(value[0]) ? [value] : value;
  }
  function copyRawPath(rawPath) {
    var a = [],
        i = 0;

    for (; i < rawPath.length; i++) {
      a[i] = _copyMetaData(rawPath[i], rawPath[i].slice(0));
    }

    return _copyMetaData(rawPath, a);
  }
  function reverseSegment(segment) {
    var i = 0,
        y;
    segment.reverse();

    for (; i < segment.length; i += 2) {
      y = segment[i];
      segment[i] = segment[i + 1];
      segment[i + 1] = y;
    }

    segment.reversed = !segment.reversed;
  }

  var _createPath = function _createPath(e, ignore) {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path"),
        attr = [].slice.call(e.attributes),
        i = attr.length,
        name;
    ignore = "," + ignore + ",";

    while (--i > -1) {
      name = attr[i].nodeName.toLowerCase();

      if (ignore.indexOf("," + name + ",") < 0) {
        path.setAttributeNS(null, name, attr[i].nodeValue);
      }
    }

    return path;
  },
      _typeAttrs = {
    rect: "rx,ry,x,y,width,height",
    circle: "r,cx,cy",
    ellipse: "rx,ry,cx,cy",
    line: "x1,x2,y1,y2"
  },
      _attrToObj = function _attrToObj(e, attrs) {
    var props = attrs ? attrs.split(",") : [],
        obj = {},
        i = props.length;

    while (--i > -1) {
      obj[props[i]] = +e.getAttribute(props[i]) || 0;
    }

    return obj;
  };

  function convertToPath(element, swap) {
    var type = element.tagName.toLowerCase(),
        circ = 0.552284749831,
        data,
        x,
        y,
        r,
        ry,
        path,
        rcirc,
        rycirc,
        points,
        w,
        h,
        x2,
        x3,
        x4,
        x5,
        x6,
        y2,
        y3,
        y4,
        y5,
        y6,
        attr;

    if (type === "path" || !element.getBBox) {
      return element;
    }

    path = _createPath(element, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points");
    attr = _attrToObj(element, _typeAttrs[type]);

    if (type === "rect") {
      r = attr.rx;
      ry = attr.ry || r;
      x = attr.x;
      y = attr.y;
      w = attr.width - r * 2;
      h = attr.height - ry * 2;

      if (r || ry) {
        x2 = x + r * (1 - circ);
        x3 = x + r;
        x4 = x3 + w;
        x5 = x4 + r * circ;
        x6 = x4 + r;
        y2 = y + ry * (1 - circ);
        y3 = y + ry;
        y4 = y3 + h;
        y5 = y4 + ry * circ;
        y6 = y4 + ry;
        data = "M" + x6 + "," + y3 + " V" + y4 + " C" + [x6, y5, x5, y6, x4, y6, x4 - (x4 - x3) / 3, y6, x3 + (x4 - x3) / 3, y6, x3, y6, x2, y6, x, y5, x, y4, x, y4 - (y4 - y3) / 3, x, y3 + (y4 - y3) / 3, x, y3, x, y2, x2, y, x3, y, x3 + (x4 - x3) / 3, y, x4 - (x4 - x3) / 3, y, x4, y, x5, y, x6, y2, x6, y3].join(",") + "z";
      } else {
        data = "M" + (x + w) + "," + y + " v" + h + " h" + -w + " v" + -h + " h" + w + "z";
      }
    } else if (type === "circle" || type === "ellipse") {
      if (type === "circle") {
        r = ry = attr.r;
        rycirc = r * circ;
      } else {
        r = attr.rx;
        ry = attr.ry;
        rycirc = ry * circ;
      }

      x = attr.cx;
      y = attr.cy;
      rcirc = r * circ;
      data = "M" + (x + r) + "," + y + " C" + [x + r, y + rycirc, x + rcirc, y + ry, x, y + ry, x - rcirc, y + ry, x - r, y + rycirc, x - r, y, x - r, y - rycirc, x - rcirc, y - ry, x, y - ry, x + rcirc, y - ry, x + r, y - rycirc, x + r, y].join(",") + "z";
    } else if (type === "line") {
      data = "M" + attr.x1 + "," + attr.y1 + " L" + attr.x2 + "," + attr.y2;
    } else if (type === "polyline" || type === "polygon") {
      points = (element.getAttribute("points") + "").match(_numbersExp) || [];
      x = points.shift();
      y = points.shift();
      data = "M" + x + "," + y + " L" + points.join(",");

      if (type === "polygon") {
        data += "," + x + "," + y + "z";
      }
    }

    path.setAttribute("d", rawPathToString(path._gsRawPath = stringToRawPath(data)));

    if (swap && element.parentNode) {
      element.parentNode.insertBefore(path, element);
      element.parentNode.removeChild(element);
    }

    return path;
  }

  function getRotationAtBezierT(segment, i, t) {
    var a = segment[i],
        b = segment[i + 2],
        c = segment[i + 4],
        x;
    a += (b - a) * t;
    b += (c - b) * t;
    a += (b - a) * t;
    x = b + (c + (segment[i + 6] - c) * t - b) * t - a;
    a = segment[i + 1];
    b = segment[i + 3];
    c = segment[i + 5];
    a += (b - a) * t;
    b += (c - b) * t;
    a += (b - a) * t;
    return _round$1(_atan2$1(b + (c + (segment[i + 7] - c) * t - b) * t - a, x) * _RAD2DEG$1);
  }

  function sliceRawPath(rawPath, start, end) {
    end = _isUndefined$1(end) ? 1 : _roundPrecise$1(end) || 0;
    start = _roundPrecise$1(start) || 0;
    var loops = Math.max(0, ~~(_abs(end - start) - 1e-8)),
        path = copyRawPath(rawPath);

    if (start > end) {
      start = 1 - start;
      end = 1 - end;

      _reverseRawPath(path);

      path.totalLength = 0;
    }

    if (start < 0 || end < 0) {
      var offset = Math.abs(~~Math.min(start, end)) + 1;
      start += offset;
      end += offset;
    }

    path.totalLength || cacheRawPathMeasurements(path);
    var wrap = end > 1,
        s = getProgressData(path, start, _temp, true),
        e = getProgressData(path, end, _temp2),
        eSeg = e.segment,
        sSeg = s.segment,
        eSegIndex = e.segIndex,
        sSegIndex = s.segIndex,
        ei = e.i,
        si = s.i,
        sameSegment = sSegIndex === eSegIndex,
        sameBezier = ei === si && sameSegment,
        wrapsBehind,
        sShift,
        eShift,
        i,
        copy,
        totalSegments,
        l,
        j;

    if (wrap || loops) {
      wrapsBehind = eSegIndex < sSegIndex || sameSegment && ei < si || sameBezier && e.t < s.t;

      if (_splitSegment(path, sSegIndex, si, s.t)) {
        sSegIndex++;

        if (!wrapsBehind) {
          eSegIndex++;

          if (sameBezier) {
            e.t = (e.t - s.t) / (1 - s.t);
            ei = 0;
          } else if (sameSegment) {
            ei -= si;
          }
        }
      }

      if (Math.abs(1 - (end - start)) < 1e-5) {
        eSegIndex = sSegIndex - 1;
      } else if (!e.t && eSegIndex) {
        eSegIndex--;
      } else if (_splitSegment(path, eSegIndex, ei, e.t) && wrapsBehind) {
        sSegIndex++;
      }

      if (s.t === 1) {
        sSegIndex = (sSegIndex + 1) % path.length;
      }

      copy = [];
      totalSegments = path.length;
      l = 1 + totalSegments * loops;
      j = sSegIndex;
      l += (totalSegments - sSegIndex + eSegIndex) % totalSegments;

      for (i = 0; i < l; i++) {
        _appendOrMerge(copy, path[j++ % totalSegments]);
      }

      path = copy;
    } else {
      eShift = e.t === 1 ? 6 : subdivideSegment(eSeg, ei, e.t);

      if (start !== end) {
        sShift = subdivideSegment(sSeg, si, sameBezier ? s.t / e.t : s.t);
        sameSegment && (eShift += sShift);
        eSeg.splice(ei + eShift + 2);
        (sShift || si) && sSeg.splice(0, si + sShift);
        i = path.length;

        while (i--) {
          (i < sSegIndex || i > eSegIndex) && path.splice(i, 1);
        }
      } else {
        eSeg.angle = getRotationAtBezierT(eSeg, ei + eShift, 0);
        ei += eShift;
        s = eSeg[ei];
        e = eSeg[ei + 1];
        eSeg.length = eSeg.totalLength = 0;
        eSeg.totalPoints = path.totalPoints = 8;
        eSeg.push(s, e, s, e, s, e, s, e);
      }
    }

    path.totalLength = 0;
    return path;
  }

  function measureSegment(segment, startIndex, bezierQty) {
    startIndex = startIndex || 0;

    if (!segment.samples) {
      segment.samples = [];
      segment.lookup = [];
    }

    var resolution = ~~segment.resolution || 12,
        inc = 1 / resolution,
        endIndex = bezierQty ? startIndex + bezierQty * 6 + 1 : segment.length,
        x1 = segment[startIndex],
        y1 = segment[startIndex + 1],
        samplesIndex = startIndex ? startIndex / 6 * resolution : 0,
        samples = segment.samples,
        lookup = segment.lookup,
        min = (startIndex ? segment.minLength : _largeNum) || _largeNum,
        prevLength = samples[samplesIndex + bezierQty * resolution - 1],
        length = startIndex ? samples[samplesIndex - 1] : 0,
        i,
        j,
        x4,
        x3,
        x2,
        xd,
        xd1,
        y4,
        y3,
        y2,
        yd,
        yd1,
        inv,
        t,
        lengthIndex,
        l,
        segLength;
    samples.length = lookup.length = 0;

    for (j = startIndex + 2; j < endIndex; j += 6) {
      x4 = segment[j + 4] - x1;
      x3 = segment[j + 2] - x1;
      x2 = segment[j] - x1;
      y4 = segment[j + 5] - y1;
      y3 = segment[j + 3] - y1;
      y2 = segment[j + 1] - y1;
      xd = xd1 = yd = yd1 = 0;

      if (_abs(x4) < .01 && _abs(y4) < .01 && _abs(x2) + _abs(y2) < .01) {
        if (segment.length > 8) {
          segment.splice(j, 6);
          j -= 6;
          endIndex -= 6;
        }
      } else {
        for (i = 1; i <= resolution; i++) {
          t = inc * i;
          inv = 1 - t;
          xd = xd1 - (xd1 = (t * t * x4 + 3 * inv * (t * x3 + inv * x2)) * t);
          yd = yd1 - (yd1 = (t * t * y4 + 3 * inv * (t * y3 + inv * y2)) * t);
          l = _sqrt$1(yd * yd + xd * xd);

          if (l < min) {
            min = l;
          }

          length += l;
          samples[samplesIndex++] = length;
        }
      }

      x1 += x4;
      y1 += y4;
    }

    if (prevLength) {
      prevLength -= length;

      for (; samplesIndex < samples.length; samplesIndex++) {
        samples[samplesIndex] += prevLength;
      }
    }

    if (samples.length && min) {
      segment.totalLength = segLength = samples[samples.length - 1] || 0;
      segment.minLength = min;

      if (segLength / min < 9999) {
        l = lengthIndex = 0;

        for (i = 0; i < segLength; i += min) {
          lookup[l++] = samples[lengthIndex] < i ? ++lengthIndex : lengthIndex;
        }
      }
    } else {
      segment.totalLength = samples[0] = 0;
    }

    return startIndex ? length - samples[startIndex / 2 - 1] : length;
  }

  function cacheRawPathMeasurements(rawPath, resolution) {
    var pathLength, points, i;

    for (i = pathLength = points = 0; i < rawPath.length; i++) {
      rawPath[i].resolution = ~~resolution || 12;
      points += rawPath[i].length;
      pathLength += measureSegment(rawPath[i]);
    }

    rawPath.totalPoints = points;
    rawPath.totalLength = pathLength;
    return rawPath;
  }
  function subdivideSegment(segment, i, t) {
    if (t <= 0 || t >= 1) {
      return 0;
    }

    var ax = segment[i],
        ay = segment[i + 1],
        cp1x = segment[i + 2],
        cp1y = segment[i + 3],
        cp2x = segment[i + 4],
        cp2y = segment[i + 5],
        bx = segment[i + 6],
        by = segment[i + 7],
        x1a = ax + (cp1x - ax) * t,
        x2 = cp1x + (cp2x - cp1x) * t,
        y1a = ay + (cp1y - ay) * t,
        y2 = cp1y + (cp2y - cp1y) * t,
        x1 = x1a + (x2 - x1a) * t,
        y1 = y1a + (y2 - y1a) * t,
        x2a = cp2x + (bx - cp2x) * t,
        y2a = cp2y + (by - cp2y) * t;
    x2 += (x2a - x2) * t;
    y2 += (y2a - y2) * t;
    segment.splice(i + 2, 4, _round$1(x1a), _round$1(y1a), _round$1(x1), _round$1(y1), _round$1(x1 + (x2 - x1) * t), _round$1(y1 + (y2 - y1) * t), _round$1(x2), _round$1(y2), _round$1(x2a), _round$1(y2a));
    segment.samples && segment.samples.splice(i / 6 * segment.resolution | 0, 0, 0, 0, 0, 0, 0, 0);
    return 6;
  }

  function getProgressData(rawPath, progress, decoratee, pushToNextIfAtEnd) {
    decoratee = decoratee || {};
    rawPath.totalLength || cacheRawPathMeasurements(rawPath);

    if (progress < 0 || progress > 1) {
      progress = _wrapProgress(progress);
    }

    var segIndex = 0,
        segment = rawPath[0],
        samples,
        resolution,
        length,
        min,
        max,
        i,
        t;

    if (!progress) {
      t = i = segIndex = 0;
      segment = rawPath[0];
    } else if (progress === 1) {
      t = 1;
      segIndex = rawPath.length - 1;
      segment = rawPath[segIndex];
      i = segment.length - 8;
    } else {
      if (rawPath.length > 1) {
        length = rawPath.totalLength * progress;
        max = i = 0;

        while ((max += rawPath[i++].totalLength) < length) {
          segIndex = i;
        }

        segment = rawPath[segIndex];
        min = max - segment.totalLength;
        progress = (length - min) / (max - min) || 0;
      }

      samples = segment.samples;
      resolution = segment.resolution;
      length = segment.totalLength * progress;
      i = segment.lookup.length ? segment.lookup[~~(length / segment.minLength)] || 0 : _getSampleIndex(samples, length, progress);
      min = i ? samples[i - 1] : 0;
      max = samples[i];

      if (max < length) {
        min = max;
        max = samples[++i];
      }

      t = 1 / resolution * ((length - min) / (max - min) + i % resolution);
      i = ~~(i / resolution) * 6;

      if (pushToNextIfAtEnd && t === 1) {
        if (i + 6 < segment.length) {
          i += 6;
          t = 0;
        } else if (segIndex + 1 < rawPath.length) {
          i = t = 0;
          segment = rawPath[++segIndex];
        }
      }
    }

    decoratee.t = t;
    decoratee.i = i;
    decoratee.path = rawPath;
    decoratee.segment = segment;
    decoratee.segIndex = segIndex;
    return decoratee;
  }

  function getPositionOnPath(rawPath, progress, includeAngle, point) {
    var segment = rawPath[0],
        result = point || {},
        samples,
        resolution,
        length,
        min,
        max,
        i,
        t,
        a,
        inv;

    if (progress < 0 || progress > 1) {
      progress = _wrapProgress(progress);
    }

    segment.lookup || cacheRawPathMeasurements(rawPath);

    if (rawPath.length > 1) {
      length = rawPath.totalLength * progress;
      max = i = 0;

      while ((max += rawPath[i++].totalLength) < length) {
        segment = rawPath[i];
      }

      min = max - segment.totalLength;
      progress = (length - min) / (max - min) || 0;
    }

    samples = segment.samples;
    resolution = segment.resolution;
    length = segment.totalLength * progress;
    i = segment.lookup.length ? segment.lookup[progress < 1 ? ~~(length / segment.minLength) : segment.lookup.length - 1] || 0 : _getSampleIndex(samples, length, progress);
    min = i ? samples[i - 1] : 0;
    max = samples[i];

    if (max < length) {
      min = max;
      max = samples[++i];
    }

    t = 1 / resolution * ((length - min) / (max - min) + i % resolution) || 0;
    inv = 1 - t;
    i = ~~(i / resolution) * 6;
    a = segment[i];
    result.x = _round$1((t * t * (segment[i + 6] - a) + 3 * inv * (t * (segment[i + 4] - a) + inv * (segment[i + 2] - a))) * t + a);
    result.y = _round$1((t * t * (segment[i + 7] - (a = segment[i + 1])) + 3 * inv * (t * (segment[i + 5] - a) + inv * (segment[i + 3] - a))) * t + a);

    if (includeAngle) {
      result.angle = segment.totalLength ? getRotationAtBezierT(segment, i, t >= 1 ? 1 - 1e-9 : t ? t : 1e-9) : segment.angle || 0;
    }

    return result;
  }
  function transformRawPath(rawPath, a, b, c, d, tx, ty) {
    var j = rawPath.length,
        segment,
        l,
        i,
        x,
        y;

    while (--j > -1) {
      segment = rawPath[j];
      l = segment.length;

      for (i = 0; i < l; i += 2) {
        x = segment[i];
        y = segment[i + 1];
        segment[i] = x * a + y * c + tx;
        segment[i + 1] = x * b + y * d + ty;
      }
    }

    rawPath._dirty = 1;
    return rawPath;
  }

  function arcToSegment(lastX, lastY, rx, ry, angle, largeArcFlag, sweepFlag, x, y) {
    if (lastX === x && lastY === y) {
      return;
    }

    rx = _abs(rx);
    ry = _abs(ry);

    var angleRad = angle % 360 * _DEG2RAD$1,
        cosAngle = _cos$1(angleRad),
        sinAngle = _sin$1(angleRad),
        PI = Math.PI,
        TWOPI = PI * 2,
        dx2 = (lastX - x) / 2,
        dy2 = (lastY - y) / 2,
        x1 = cosAngle * dx2 + sinAngle * dy2,
        y1 = -sinAngle * dx2 + cosAngle * dy2,
        x1_sq = x1 * x1,
        y1_sq = y1 * y1,
        radiiCheck = x1_sq / (rx * rx) + y1_sq / (ry * ry);

    if (radiiCheck > 1) {
      rx = _sqrt$1(radiiCheck) * rx;
      ry = _sqrt$1(radiiCheck) * ry;
    }

    var rx_sq = rx * rx,
        ry_sq = ry * ry,
        sq = (rx_sq * ry_sq - rx_sq * y1_sq - ry_sq * x1_sq) / (rx_sq * y1_sq + ry_sq * x1_sq);

    if (sq < 0) {
      sq = 0;
    }

    var coef = (largeArcFlag === sweepFlag ? -1 : 1) * _sqrt$1(sq),
        cx1 = coef * (rx * y1 / ry),
        cy1 = coef * -(ry * x1 / rx),
        sx2 = (lastX + x) / 2,
        sy2 = (lastY + y) / 2,
        cx = sx2 + (cosAngle * cx1 - sinAngle * cy1),
        cy = sy2 + (sinAngle * cx1 + cosAngle * cy1),
        ux = (x1 - cx1) / rx,
        uy = (y1 - cy1) / ry,
        vx = (-x1 - cx1) / rx,
        vy = (-y1 - cy1) / ry,
        temp = ux * ux + uy * uy,
        angleStart = (uy < 0 ? -1 : 1) * Math.acos(ux / _sqrt$1(temp)),
        angleExtent = (ux * vy - uy * vx < 0 ? -1 : 1) * Math.acos((ux * vx + uy * vy) / _sqrt$1(temp * (vx * vx + vy * vy)));

    isNaN(angleExtent) && (angleExtent = PI);

    if (!sweepFlag && angleExtent > 0) {
      angleExtent -= TWOPI;
    } else if (sweepFlag && angleExtent < 0) {
      angleExtent += TWOPI;
    }

    angleStart %= TWOPI;
    angleExtent %= TWOPI;

    var segments = Math.ceil(_abs(angleExtent) / (TWOPI / 4)),
        rawPath = [],
        angleIncrement = angleExtent / segments,
        controlLength = 4 / 3 * _sin$1(angleIncrement / 2) / (1 + _cos$1(angleIncrement / 2)),
        ma = cosAngle * rx,
        mb = sinAngle * rx,
        mc = sinAngle * -ry,
        md = cosAngle * ry,
        i;

    for (i = 0; i < segments; i++) {
      angle = angleStart + i * angleIncrement;
      x1 = _cos$1(angle);
      y1 = _sin$1(angle);
      ux = _cos$1(angle += angleIncrement);
      uy = _sin$1(angle);
      rawPath.push(x1 - controlLength * y1, y1 + controlLength * x1, ux + controlLength * uy, uy - controlLength * ux, ux, uy);
    }

    for (i = 0; i < rawPath.length; i += 2) {
      x1 = rawPath[i];
      y1 = rawPath[i + 1];
      rawPath[i] = x1 * ma + y1 * mc + cx;
      rawPath[i + 1] = x1 * mb + y1 * md + cy;
    }

    rawPath[i - 2] = x;
    rawPath[i - 1] = y;
    return rawPath;
  }

  function stringToRawPath(d) {
    var a = (d + "").replace(_scientific, function (m) {
      var n = +m;
      return n < 0.0001 && n > -0.0001 ? 0 : n;
    }).match(_svgPathExp) || [],
        path = [],
        relativeX = 0,
        relativeY = 0,
        twoThirds = 2 / 3,
        elements = a.length,
        points = 0,
        errorMessage = "ERROR: malformed path: " + d,
        i,
        j,
        x,
        y,
        command,
        isRelative,
        segment,
        startX,
        startY,
        difX,
        difY,
        beziers,
        prevCommand,
        flag1,
        flag2,
        line = function line(sx, sy, ex, ey) {
      difX = (ex - sx) / 3;
      difY = (ey - sy) / 3;
      segment.push(sx + difX, sy + difY, ex - difX, ey - difY, ex, ey);
    };

    if (!d || !isNaN(a[0]) || isNaN(a[1])) {
      console.log(errorMessage);
      return path;
    }

    for (i = 0; i < elements; i++) {
      prevCommand = command;

      if (isNaN(a[i])) {
        command = a[i].toUpperCase();
        isRelative = command !== a[i];
      } else {
        i--;
      }

      x = +a[i + 1];
      y = +a[i + 2];

      if (isRelative) {
        x += relativeX;
        y += relativeY;
      }

      if (!i) {
        startX = x;
        startY = y;
      }

      if (command === "M") {
        if (segment) {
          if (segment.length < 8) {
            path.length -= 1;
          } else {
            points += segment.length;
          }
        }

        relativeX = startX = x;
        relativeY = startY = y;
        segment = [x, y];
        path.push(segment);
        i += 2;
        command = "L";
      } else if (command === "C") {
        if (!segment) {
          segment = [0, 0];
        }

        if (!isRelative) {
          relativeX = relativeY = 0;
        }

        segment.push(x, y, relativeX + a[i + 3] * 1, relativeY + a[i + 4] * 1, relativeX += a[i + 5] * 1, relativeY += a[i + 6] * 1);
        i += 6;
      } else if (command === "S") {
        difX = relativeX;
        difY = relativeY;

        if (prevCommand === "C" || prevCommand === "S") {
          difX += relativeX - segment[segment.length - 4];
          difY += relativeY - segment[segment.length - 3];
        }

        if (!isRelative) {
          relativeX = relativeY = 0;
        }

        segment.push(difX, difY, x, y, relativeX += a[i + 3] * 1, relativeY += a[i + 4] * 1);
        i += 4;
      } else if (command === "Q") {
        difX = relativeX + (x - relativeX) * twoThirds;
        difY = relativeY + (y - relativeY) * twoThirds;

        if (!isRelative) {
          relativeX = relativeY = 0;
        }

        relativeX += a[i + 3] * 1;
        relativeY += a[i + 4] * 1;
        segment.push(difX, difY, relativeX + (x - relativeX) * twoThirds, relativeY + (y - relativeY) * twoThirds, relativeX, relativeY);
        i += 4;
      } else if (command === "T") {
        difX = relativeX - segment[segment.length - 4];
        difY = relativeY - segment[segment.length - 3];
        segment.push(relativeX + difX, relativeY + difY, x + (relativeX + difX * 1.5 - x) * twoThirds, y + (relativeY + difY * 1.5 - y) * twoThirds, relativeX = x, relativeY = y);
        i += 2;
      } else if (command === "H") {
        line(relativeX, relativeY, relativeX = x, relativeY);
        i += 1;
      } else if (command === "V") {
        line(relativeX, relativeY, relativeX, relativeY = x + (isRelative ? relativeY - relativeX : 0));
        i += 1;
      } else if (command === "L" || command === "Z") {
        if (command === "Z") {
          x = startX;
          y = startY;
          segment.closed = true;
        }

        if (command === "L" || _abs(relativeX - x) > 0.5 || _abs(relativeY - y) > 0.5) {
          line(relativeX, relativeY, x, y);

          if (command === "L") {
            i += 2;
          }
        }

        relativeX = x;
        relativeY = y;
      } else if (command === "A") {
        flag1 = a[i + 4];
        flag2 = a[i + 5];
        difX = a[i + 6];
        difY = a[i + 7];
        j = 7;

        if (flag1.length > 1) {
          if (flag1.length < 3) {
            difY = difX;
            difX = flag2;
            j--;
          } else {
            difY = flag2;
            difX = flag1.substr(2);
            j -= 2;
          }

          flag2 = flag1.charAt(1);
          flag1 = flag1.charAt(0);
        }

        beziers = arcToSegment(relativeX, relativeY, +a[i + 1], +a[i + 2], +a[i + 3], +flag1, +flag2, (isRelative ? relativeX : 0) + difX * 1, (isRelative ? relativeY : 0) + difY * 1);
        i += j;

        if (beziers) {
          for (j = 0; j < beziers.length; j++) {
            segment.push(beziers[j]);
          }
        }

        relativeX = segment[segment.length - 2];
        relativeY = segment[segment.length - 1];
      } else {
        console.log(errorMessage);
      }
    }

    i = segment.length;

    if (i < 6) {
      path.pop();
      i = 0;
    } else if (segment[0] === segment[i - 2] && segment[1] === segment[i - 1]) {
      segment.closed = true;
    }

    path.totalPoints = points + i;
    return path;
  }
  function flatPointsToSegment(points, curviness) {
    if (curviness === void 0) {
      curviness = 1;
    }

    var x = points[0],
        y = 0,
        segment = [x, y],
        i = 2;

    for (; i < points.length; i += 2) {
      segment.push(x, y, points[i], y = (points[i] - x) * curviness / 2, x = points[i], -y);
    }

    return segment;
  }
  function pointsToSegment(points, curviness) {
    _abs(points[0] - points[2]) < 1e-4 && _abs(points[1] - points[3]) < 1e-4 && (points = points.slice(2));
    var l = points.length - 2,
        x = +points[0],
        y = +points[1],
        nextX = +points[2],
        nextY = +points[3],
        segment = [x, y, x, y],
        dx2 = nextX - x,
        dy2 = nextY - y,
        closed = Math.abs(points[l] - x) < 0.001 && Math.abs(points[l + 1] - y) < 0.001,
        prevX,
        prevY,
        i,
        dx1,
        dy1,
        r1,
        r2,
        r3,
        tl,
        mx1,
        mx2,
        mxm,
        my1,
        my2,
        mym;

    if (closed) {
      points.push(nextX, nextY);
      nextX = x;
      nextY = y;
      x = points[l - 2];
      y = points[l - 1];
      points.unshift(x, y);
      l += 4;
    }

    curviness = curviness || curviness === 0 ? +curviness : 1;

    for (i = 2; i < l; i += 2) {
      prevX = x;
      prevY = y;
      x = nextX;
      y = nextY;
      nextX = +points[i + 2];
      nextY = +points[i + 3];

      if (x === nextX && y === nextY) {
        continue;
      }

      dx1 = dx2;
      dy1 = dy2;
      dx2 = nextX - x;
      dy2 = nextY - y;
      r1 = _sqrt$1(dx1 * dx1 + dy1 * dy1);
      r2 = _sqrt$1(dx2 * dx2 + dy2 * dy2);
      r3 = _sqrt$1(Math.pow(dx2 / r2 + dx1 / r1, 2) + Math.pow(dy2 / r2 + dy1 / r1, 2));
      tl = (r1 + r2) * curviness * 0.25 / r3;
      mx1 = x - (x - prevX) * (r1 ? tl / r1 : 0);
      mx2 = x + (nextX - x) * (r2 ? tl / r2 : 0);
      mxm = x - (mx1 + ((mx2 - mx1) * (r1 * 3 / (r1 + r2) + 0.5) / 4 || 0));
      my1 = y - (y - prevY) * (r1 ? tl / r1 : 0);
      my2 = y + (nextY - y) * (r2 ? tl / r2 : 0);
      mym = y - (my1 + ((my2 - my1) * (r1 * 3 / (r1 + r2) + 0.5) / 4 || 0));

      if (x !== prevX || y !== prevY) {
        segment.push(_round$1(mx1 + mxm), _round$1(my1 + mym), _round$1(x), _round$1(y), _round$1(mx2 + mxm), _round$1(my2 + mym));
      }
    }

    x !== nextX || y !== nextY || segment.length < 4 ? segment.push(_round$1(nextX), _round$1(nextY), _round$1(nextX), _round$1(nextY)) : segment.length -= 2;

    if (segment.length === 2) {
      segment.push(x, y, x, y, x, y);
    } else if (closed) {
      segment.splice(0, 6);
      segment.length = segment.length - 6;
    }

    return segment;
  }
  function rawPathToString(rawPath) {
    if (_isNumber$1(rawPath[0])) {
      rawPath = [rawPath];
    }

    var result = "",
        l = rawPath.length,
        sl,
        s,
        i,
        segment;

    for (s = 0; s < l; s++) {
      segment = rawPath[s];
      result += "M" + _round$1(segment[0]) + "," + _round$1(segment[1]) + " C";
      sl = segment.length;

      for (i = 2; i < sl; i++) {
        result += _round$1(segment[i++]) + "," + _round$1(segment[i++]) + " " + _round$1(segment[i++]) + "," + _round$1(segment[i++]) + " " + _round$1(segment[i++]) + "," + _round$1(segment[i]) + " ";
      }

      if (segment.closed) {
        result += "z";
      }
    }

    return result;
  }

  /*!
   * CustomEase 3.12.1
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */

  var gsap$1,
      _coreInitted$1,
      _getGSAP = function _getGSAP() {
    return gsap$1 || typeof window !== "undefined" && (gsap$1 = window.gsap) && gsap$1.registerPlugin && gsap$1;
  },
      _initCore$1 = function _initCore() {
    gsap$1 = _getGSAP();

    if (gsap$1) {
      gsap$1.registerEase("_CE", CustomEase.create);
      _coreInitted$1 = 1;
    } else {
      console.warn("Please gsap.registerPlugin(CustomEase)");
    }
  },
      _bigNum$2 = 1e20,
      _round$2 = function _round(value) {
    return ~~(value * 1000 + (value < 0 ? -.5 : .5)) / 1000;
  },
      _numExp$1 = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
      _needsParsingExp = /[cLlsSaAhHvVtTqQ]/g,
      _findMinimum = function _findMinimum(values) {
    var l = values.length,
        min = _bigNum$2,
        i;

    for (i = 1; i < l; i += 6) {
      +values[i] < min && (min = +values[i]);
    }

    return min;
  },
      _normalize = function _normalize(values, height, originY) {
    if (!originY && originY !== 0) {
      originY = Math.max(+values[values.length - 1], +values[1]);
    }

    var tx = +values[0] * -1,
        ty = -originY,
        l = values.length,
        sx = 1 / (+values[l - 2] + tx),
        sy = -height || (Math.abs(+values[l - 1] - +values[1]) < 0.01 * (+values[l - 2] - +values[0]) ? _findMinimum(values) + ty : +values[l - 1] + ty),
        i;

    if (sy) {
      sy = 1 / sy;
    } else {
      sy = -sx;
    }

    for (i = 0; i < l; i += 2) {
      values[i] = (+values[i] + tx) * sx;
      values[i + 1] = (+values[i + 1] + ty) * sy;
    }
  },
      _bezierToPoints = function _bezierToPoints(x1, y1, x2, y2, x3, y3, x4, y4, threshold, points, index) {
    var x12 = (x1 + x2) / 2,
        y12 = (y1 + y2) / 2,
        x23 = (x2 + x3) / 2,
        y23 = (y2 + y3) / 2,
        x34 = (x3 + x4) / 2,
        y34 = (y3 + y4) / 2,
        x123 = (x12 + x23) / 2,
        y123 = (y12 + y23) / 2,
        x234 = (x23 + x34) / 2,
        y234 = (y23 + y34) / 2,
        x1234 = (x123 + x234) / 2,
        y1234 = (y123 + y234) / 2,
        dx = x4 - x1,
        dy = y4 - y1,
        d2 = Math.abs((x2 - x4) * dy - (y2 - y4) * dx),
        d3 = Math.abs((x3 - x4) * dy - (y3 - y4) * dx),
        length;

    if (!points) {
      points = [{
        x: x1,
        y: y1
      }, {
        x: x4,
        y: y4
      }];
      index = 1;
    }

    points.splice(index || points.length - 1, 0, {
      x: x1234,
      y: y1234
    });

    if ((d2 + d3) * (d2 + d3) > threshold * (dx * dx + dy * dy)) {
      length = points.length;

      _bezierToPoints(x1, y1, x12, y12, x123, y123, x1234, y1234, threshold, points, index);

      _bezierToPoints(x1234, y1234, x234, y234, x34, y34, x4, y4, threshold, points, index + 1 + (points.length - length));
    }

    return points;
  };

  var CustomEase = function () {
    function CustomEase(id, data, config) {
      _coreInitted$1 || _initCore$1();
      this.id = id;
       this.setData(data, config);
    }

    var _proto = CustomEase.prototype;

    _proto.setData = function setData(data, config) {
      config = config || {};
      data = data || "0,0,1,1";
      var values = data.match(_numExp$1),
          closest = 1,
          points = [],
          lookup = [],
          precision = config.precision || 1,
          fast = precision <= 1,
          l,
          a1,
          a2,
          i,
          inc,
          j,
          point,
          prevPoint,
          p;
      this.data = data;

      if (_needsParsingExp.test(data) || ~data.indexOf("M") && data.indexOf("C") < 0) {
        values = stringToRawPath(data)[0];
      }

      l = values.length;

      if (l === 4) {
        values.unshift(0, 0);
        values.push(1, 1);
        l = 8;
      } else if ((l - 2) % 6) {
        throw "Invalid CustomEase";
      }

      if (+values[0] !== 0 || +values[l - 2] !== 1) {
        _normalize(values, config.height, config.originY);
      }

      this.segment = values;

      for (i = 2; i < l; i += 6) {
        a1 = {
          x: +values[i - 2],
          y: +values[i - 1]
        };
        a2 = {
          x: +values[i + 4],
          y: +values[i + 5]
        };
        points.push(a1, a2);

        _bezierToPoints(a1.x, a1.y, +values[i], +values[i + 1], +values[i + 2], +values[i + 3], a2.x, a2.y, 1 / (precision * 200000), points, points.length - 1);
      }

      l = points.length;

      for (i = 0; i < l; i++) {
        point = points[i];
        prevPoint = points[i - 1] || point;

        if ((point.x > prevPoint.x || prevPoint.y !== point.y && prevPoint.x === point.x || point === prevPoint) && point.x <= 1) {
          prevPoint.cx = point.x - prevPoint.x;
          prevPoint.cy = point.y - prevPoint.y;
          prevPoint.n = point;
          prevPoint.nx = point.x;

          if (fast && i > 1 && Math.abs(prevPoint.cy / prevPoint.cx - points[i - 2].cy / points[i - 2].cx) > 2) {
            fast = 0;
          }

          if (prevPoint.cx < closest) {
            if (!prevPoint.cx) {
              prevPoint.cx = 0.001;

              if (i === l - 1) {
                prevPoint.x -= 0.001;
                closest = Math.min(closest, 0.001);
                fast = 0;
              }
            } else {
              closest = prevPoint.cx;
            }
          }
        } else {
          points.splice(i--, 1);
          l--;
        }
      }

      l = 1 / closest + 1 | 0;
      inc = 1 / l;
      j = 0;
      point = points[0];

      if (fast) {
        for (i = 0; i < l; i++) {
          p = i * inc;

          if (point.nx < p) {
            point = points[++j];
          }

          a1 = point.y + (p - point.x) / point.cx * point.cy;
          lookup[i] = {
            x: p,
            cx: inc,
            y: a1,
            cy: 0,
            nx: 9
          };

          if (i) {
            lookup[i - 1].cy = a1 - lookup[i - 1].y;
          }
        }

        lookup[l - 1].cy = points[points.length - 1].y - a1;
      } else {
        for (i = 0; i < l; i++) {
          if (point.nx < i * inc) {
            point = points[++j];
          }

          lookup[i] = point;
        }

        if (j < points.length - 1) {
          lookup[i - 1] = points[points.length - 2];
        }
      }

      this.ease = function (p) {
        var point = lookup[p * l | 0] || lookup[l - 1];

        if (point.nx < p) {
          point = point.n;
        }

        return point.y + (p - point.x) / point.cx * point.cy;
      };

      this.ease.custom = this;
      this.id && gsap$1 && gsap$1.registerEase(this.id, this.ease);
      return this;
    };

    _proto.getSVGData = function getSVGData(config) {
      return CustomEase.getSVGData(this, config);
    };

    CustomEase.create = function create(id, data, config) {
      return new CustomEase(id, data, config).ease;
    };

    CustomEase.register = function register(core) {
      gsap$1 = core;

      _initCore$1();
    };

    CustomEase.get = function get(id) {
      return gsap$1.parseEase(id);
    };

    CustomEase.getSVGData = function getSVGData(ease, config) {
      config = config || {};
      var width = config.width || 100,
          height = config.height || 100,
          x = config.x || 0,
          y = (config.y || 0) + height,
          e = gsap$1.utils.toArray(config.path)[0],
          a,
          slope,
          i,
          inc,
          tx,
          ty,
          precision,
          threshold,
          prevX,
          prevY;

      if (config.invert) {
        height = -height;
        y = 0;
      }

      if (typeof ease === "string") {
        ease = gsap$1.parseEase(ease);
      }

      if (ease.custom) {
        ease = ease.custom;
      }

      if (ease instanceof CustomEase) {
        a = rawPathToString(transformRawPath([ease.segment], width, 0, 0, -height, x, y));
      } else {
        a = [x, y];
        precision = Math.max(5, (config.precision || 1) * 200);
        inc = 1 / precision;
        precision += 2;
        threshold = 5 / precision;
        prevX = _round$2(x + inc * width);
        prevY = _round$2(y + ease(inc) * -height);
        slope = (prevY - y) / (prevX - x);

        for (i = 2; i < precision; i++) {
          tx = _round$2(x + i * inc * width);
          ty = _round$2(y + ease(i * inc) * -height);

          if (Math.abs((ty - prevY) / (tx - prevX) - slope) > threshold || i === precision - 1) {
            a.push(prevX, prevY);
            slope = (ty - prevY) / (tx - prevX);
          }

          prevX = tx;
          prevY = ty;
        }

        a = "M" + a.join(",");
      }

      e && e.setAttribute("d", a);
      return a;
    };

    return CustomEase;
  }();
  _getGSAP() && gsap$1.registerPlugin(CustomEase);
  CustomEase.version = "3.12.1";

  var _doc$2,
      _win$2,
      _docElement$1,
      _body,
      _divContainer,
      _svgContainer,
      _identityMatrix,
      _gEl,
      _transformProp$1 = "transform",
      _transformOriginProp$1 = _transformProp$1 + "Origin",
      _hasOffsetBug,
      _setDoc = function _setDoc(element) {
    var doc = element.ownerDocument || element;

    if (!(_transformProp$1 in element.style) && "msTransform" in element.style) {
      _transformProp$1 = "msTransform";
      _transformOriginProp$1 = _transformProp$1 + "Origin";
    }

    while (doc.parentNode && (doc = doc.parentNode)) {}

    _win$2 = window;
    _identityMatrix = new Matrix2D();

    if (doc) {
      _doc$2 = doc;
      _docElement$1 = doc.documentElement;
      _body = doc.body;
      _gEl = _doc$2.createElementNS("http://www.w3.org/2000/svg", "g");
      _gEl.style.transform = "none";
      var d1 = doc.createElement("div"),
          d2 = doc.createElement("div");

      _body.appendChild(d1);

      d1.appendChild(d2);
      d1.style.position = "static";
      d1.style[_transformProp$1] = "translate3d(0,0,1px)";
      _hasOffsetBug = d2.offsetParent !== d1;

      _body.removeChild(d1);
    }

    return doc;
  },
      _forceNonZeroScale = function _forceNonZeroScale(e) {
    var a, cache;

    while (e && e !== _body) {
      cache = e._gsap;
      cache && cache.uncache && cache.get(e, "x");

      if (cache && !cache.scaleX && !cache.scaleY && cache.renderTransform) {
        cache.scaleX = cache.scaleY = 1e-4;
        cache.renderTransform(1, cache);
        a ? a.push(cache) : a = [cache];
      }

      e = e.parentNode;
    }

    return a;
  },
      _svgTemps = [],
      _divTemps = [],
      _getDocScrollTop = function _getDocScrollTop() {
    return _win$2.pageYOffset || _doc$2.scrollTop || _docElement$1.scrollTop || _body.scrollTop || 0;
  },
      _getDocScrollLeft = function _getDocScrollLeft() {
    return _win$2.pageXOffset || _doc$2.scrollLeft || _docElement$1.scrollLeft || _body.scrollLeft || 0;
  },
      _svgOwner = function _svgOwner(element) {
    return element.ownerSVGElement || ((element.tagName + "").toLowerCase() === "svg" ? element : null);
  },
      _isFixed = function _isFixed(element) {
    if (_win$2.getComputedStyle(element).position === "fixed") {
      return true;
    }

    element = element.parentNode;

    if (element && element.nodeType === 1) {
      return _isFixed(element);
    }
  },
      _createSibling = function _createSibling(element, i) {
    if (element.parentNode && (_doc$2 || _setDoc(element))) {
      var svg = _svgOwner(element),
          ns = svg ? svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
          type = svg ? i ? "rect" : "g" : "div",
          x = i !== 2 ? 0 : 100,
          y = i === 3 ? 100 : 0,
          css = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
          e = _doc$2.createElementNS ? _doc$2.createElementNS(ns.replace(/^https/, "http"), type) : _doc$2.createElement(type);

      if (i) {
        if (!svg) {
          if (!_divContainer) {
            _divContainer = _createSibling(element);
            _divContainer.style.cssText = css;
          }

          e.style.cssText = css + "width:0.1px;height:0.1px;top:" + y + "px;left:" + x + "px";

          _divContainer.appendChild(e);
        } else {
          _svgContainer || (_svgContainer = _createSibling(element));
          e.setAttribute("width", 0.01);
          e.setAttribute("height", 0.01);
          e.setAttribute("transform", "translate(" + x + "," + y + ")");

          _svgContainer.appendChild(e);
        }
      }

      return e;
    }

    throw "Need document and parent.";
  },
      _consolidate = function _consolidate(m) {
    var c = new Matrix2D(),
        i = 0;

    for (; i < m.numberOfItems; i++) {
      c.multiply(m.getItem(i).matrix);
    }

    return c;
  },
      _getCTM = function _getCTM(svg) {
    var m = svg.getCTM(),
        transform;

    if (!m) {
      transform = svg.style[_transformProp$1];
      svg.style[_transformProp$1] = "none";
      svg.appendChild(_gEl);
      m = _gEl.getCTM();
      svg.removeChild(_gEl);
      transform ? svg.style[_transformProp$1] = transform : svg.style.removeProperty(_transformProp$1.replace(/([A-Z])/g, "-$1").toLowerCase());
    }

    return m || _identityMatrix.clone();
  },
      _placeSiblings = function _placeSiblings(element, adjustGOffset) {
    var svg = _svgOwner(element),
        isRootSVG = element === svg,
        siblings = svg ? _svgTemps : _divTemps,
        parent = element.parentNode,
        container,
        m,
        b,
        x,
        y,
        cs;

    if (element === _win$2) {
      return element;
    }

    siblings.length || siblings.push(_createSibling(element, 1), _createSibling(element, 2), _createSibling(element, 3));
    container = svg ? _svgContainer : _divContainer;

    if (svg) {
      if (isRootSVG) {
        b = _getCTM(element);
        x = -b.e / b.a;
        y = -b.f / b.d;
        m = _identityMatrix;
      } else if (element.getBBox) {
        b = element.getBBox();
        m = element.transform ? element.transform.baseVal : {};
        m = !m.numberOfItems ? _identityMatrix : m.numberOfItems > 1 ? _consolidate(m) : m.getItem(0).matrix;
        x = m.a * b.x + m.c * b.y;
        y = m.b * b.x + m.d * b.y;
      } else {
        m = new Matrix2D();
        x = y = 0;
      }

      if (adjustGOffset && element.tagName.toLowerCase() === "g") {
        x = y = 0;
      }

      (isRootSVG ? svg : parent).appendChild(container);
      container.setAttribute("transform", "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + (m.e + x) + "," + (m.f + y) + ")");
    } else {
      x = y = 0;

      if (_hasOffsetBug) {
        m = element.offsetParent;
        b = element;

        while (b && (b = b.parentNode) && b !== m && b.parentNode) {
          if ((_win$2.getComputedStyle(b)[_transformProp$1] + "").length > 4) {
            x = b.offsetLeft;
            y = b.offsetTop;
            b = 0;
          }
        }
      }

      cs = _win$2.getComputedStyle(element);

      if (cs.position !== "absolute" && cs.position !== "fixed") {
        m = element.offsetParent;

        while (parent && parent !== m) {
          x += parent.scrollLeft || 0;
          y += parent.scrollTop || 0;
          parent = parent.parentNode;
        }
      }

      b = container.style;
      b.top = element.offsetTop - y + "px";
      b.left = element.offsetLeft - x + "px";
      b[_transformProp$1] = cs[_transformProp$1];
      b[_transformOriginProp$1] = cs[_transformOriginProp$1];
      b.position = cs.position === "fixed" ? "fixed" : "absolute";
      element.parentNode.appendChild(container);
    }

    return container;
  },
      _setMatrix = function _setMatrix(m, a, b, c, d, e, f) {
    m.a = a;
    m.b = b;
    m.c = c;
    m.d = d;
    m.e = e;
    m.f = f;
    return m;
  };

  var Matrix2D = function () {
    function Matrix2D(a, b, c, d, e, f) {
      if (a === void 0) {
        a = 1;
      }

      if (b === void 0) {
        b = 0;
      }

      if (c === void 0) {
        c = 0;
      }

      if (d === void 0) {
        d = 1;
      }

      if (e === void 0) {
        e = 0;
      }

      if (f === void 0) {
        f = 0;
      }

      _setMatrix(this, a, b, c, d, e, f);
    }

    var _proto = Matrix2D.prototype;

    _proto.inverse = function inverse() {
      var a = this.a,
          b = this.b,
          c = this.c,
          d = this.d,
          e = this.e,
          f = this.f,
          determinant = a * d - b * c || 1e-10;
      return _setMatrix(this, d / determinant, -b / determinant, -c / determinant, a / determinant, (c * f - d * e) / determinant, -(a * f - b * e) / determinant);
    };

    _proto.multiply = function multiply(matrix) {
      var a = this.a,
          b = this.b,
          c = this.c,
          d = this.d,
          e = this.e,
          f = this.f,
          a2 = matrix.a,
          b2 = matrix.c,
          c2 = matrix.b,
          d2 = matrix.d,
          e2 = matrix.e,
          f2 = matrix.f;
      return _setMatrix(this, a2 * a + c2 * c, a2 * b + c2 * d, b2 * a + d2 * c, b2 * b + d2 * d, e + e2 * a + f2 * c, f + e2 * b + f2 * d);
    };

    _proto.clone = function clone() {
      return new Matrix2D(this.a, this.b, this.c, this.d, this.e, this.f);
    };

    _proto.equals = function equals(matrix) {
      var a = this.a,
          b = this.b,
          c = this.c,
          d = this.d,
          e = this.e,
          f = this.f;
      return a === matrix.a && b === matrix.b && c === matrix.c && d === matrix.d && e === matrix.e && f === matrix.f;
    };

    _proto.apply = function apply(point, decoratee) {
      if (decoratee === void 0) {
        decoratee = {};
      }

      var x = point.x,
          y = point.y,
          a = this.a,
          b = this.b,
          c = this.c,
          d = this.d,
          e = this.e,
          f = this.f;
      decoratee.x = x * a + y * c + e || 0;
      decoratee.y = x * b + y * d + f || 0;
      return decoratee;
    };

    return Matrix2D;
  }();
  function getGlobalMatrix(element, inverse, adjustGOffset, includeScrollInFixed) {
    if (!element || !element.parentNode || (_doc$2 || _setDoc(element)).documentElement === element) {
      return new Matrix2D();
    }

    var zeroScales = _forceNonZeroScale(element),
        svg = _svgOwner(element),
        temps = svg ? _svgTemps : _divTemps,
        container = _placeSiblings(element, adjustGOffset),
        b1 = temps[0].getBoundingClientRect(),
        b2 = temps[1].getBoundingClientRect(),
        b3 = temps[2].getBoundingClientRect(),
        parent = container.parentNode,
        isFixed = !includeScrollInFixed && _isFixed(element),
        m = new Matrix2D((b2.left - b1.left) / 100, (b2.top - b1.top) / 100, (b3.left - b1.left) / 100, (b3.top - b1.top) / 100, b1.left + (isFixed ? 0 : _getDocScrollLeft()), b1.top + (isFixed ? 0 : _getDocScrollTop()));

    parent.removeChild(container);

    if (zeroScales) {
      b1 = zeroScales.length;

      while (b1--) {
        b2 = zeroScales[b1];
        b2.scaleX = b2.scaleY = 0;
        b2.renderTransform(1, b2);
      }
    }

    return inverse ? m.inverse() : m;
  }

  var gsap$2,
      _win$3,
      _doc$3,
      _docElement$2,
      _body$1,
      _tempDiv$1,
      _placeholderDiv,
      _coreInitted$2,
      _checkPrefix,
      _toArray,
      _supportsPassive,
      _isTouchDevice,
      _touchEventLookup,
      _isMultiTouching,
      _isAndroid,
      InertiaPlugin,
      _defaultCursor,
      _supportsPointer,
      _context$1,
      _getStyleSaver$1,
      _dragCount = 0,
      _windowExists$2 = function _windowExists() {
    return typeof window !== "undefined";
  },
      _getGSAP$1 = function _getGSAP() {
    return gsap$2 || _windowExists$2() && (gsap$2 = window.gsap) && gsap$2.registerPlugin && gsap$2;
  },
      _isFunction$1 = function _isFunction(value) {
    return typeof value === "function";
  },
      _isObject$1 = function _isObject(value) {
    return typeof value === "object";
  },
      _isUndefined$2 = function _isUndefined(value) {
    return typeof value === "undefined";
  },
      _emptyFunc$1 = function _emptyFunc() {
    return false;
  },
      _transformProp$2 = "transform",
      _transformOriginProp$2 = "transformOrigin",
      _round$3 = function _round(value) {
    return Math.round(value * 10000) / 10000;
  },
      _isArray$1 = Array.isArray,
      _createElement$1 = function _createElement(type, ns) {
    var e = _doc$3.createElementNS ? _doc$3.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$3.createElement(type);
    return e.style ? e : _doc$3.createElement(type);
  },
      _RAD2DEG$2 = 180 / Math.PI,
      _bigNum$3 = 1e20,
      _identityMatrix$1 = new Matrix2D(),
      _getTime = Date.now || function () {
    return new Date().getTime();
  },
      _renderQueue = [],
      _lookup = {},
      _lookupCount = 0,
      _clickableTagExp = /^(?:a|input|textarea|button|select)$/i,
      _lastDragTime = 0,
      _temp1 = {},
      _windowProxy = {},
      _copy = function _copy(obj, factor) {
    var copy = {},
        p;

    for (p in obj) {
      copy[p] = factor ? obj[p] * factor : obj[p];
    }

    return copy;
  },
      _extend = function _extend(obj, defaults) {
    for (var p in defaults) {
      if (!(p in obj)) {
        obj[p] = defaults[p];
      }
    }

    return obj;
  },
      _setTouchActionForAllDescendants = function _setTouchActionForAllDescendants(elements, value) {
    var i = elements.length,
        children;

    while (i--) {
      value ? elements[i].style.touchAction = value : elements[i].style.removeProperty("touch-action");
      children = elements[i].children;
      children && children.length && _setTouchActionForAllDescendants(children, value);
    }
  },
      _renderQueueTick = function _renderQueueTick() {
    return _renderQueue.forEach(function (func) {
      return func();
    });
  },
      _addToRenderQueue = function _addToRenderQueue(func) {
    _renderQueue.push(func);

    if (_renderQueue.length === 1) {
      gsap$2.ticker.add(_renderQueueTick);
    }
  },
      _renderQueueTimeout = function _renderQueueTimeout() {
    return !_renderQueue.length && gsap$2.ticker.remove(_renderQueueTick);
  },
      _removeFromRenderQueue = function _removeFromRenderQueue(func) {
    var i = _renderQueue.length;

    while (i--) {
      if (_renderQueue[i] === func) {
        _renderQueue.splice(i, 1);
      }
    }

    gsap$2.to(_renderQueueTimeout, {
      overwrite: true,
      delay: 15,
      duration: 0,
      onComplete: _renderQueueTimeout,
      data: "_draggable"
    });
  },
      _setDefaults$1 = function _setDefaults(obj, defaults) {
    for (var p in defaults) {
      if (!(p in obj)) {
        obj[p] = defaults[p];
      }
    }

    return obj;
  },
      _addListener = function _addListener(element, type, func, capture) {
    if (element.addEventListener) {
      var touchType = _touchEventLookup[type];
      capture = capture || (_supportsPassive ? {
        passive: false
      } : null);
      element.addEventListener(touchType || type, func, capture);
      touchType && type !== touchType && element.addEventListener(type, func, capture);
    }
  },
      _removeListener = function _removeListener(element, type, func, capture) {
    if (element.removeEventListener) {
      var touchType = _touchEventLookup[type];
      element.removeEventListener(touchType || type, func, capture);
      touchType && type !== touchType && element.removeEventListener(type, func, capture);
    }
  },
      _preventDefault = function _preventDefault(event) {
    event.preventDefault && event.preventDefault();
    event.preventManipulation && event.preventManipulation();
  },
      _hasTouchID = function _hasTouchID(list, ID) {
    var i = list.length;

    while (i--) {
      if (list[i].identifier === ID) {
        return true;
      }
    }
  },
      _onMultiTouchDocumentEnd = function _onMultiTouchDocumentEnd(event) {
    _isMultiTouching = event.touches && _dragCount < event.touches.length;

    _removeListener(event.target, "touchend", _onMultiTouchDocumentEnd);
  },
      _onMultiTouchDocument = function _onMultiTouchDocument(event) {
    _isMultiTouching = event.touches && _dragCount < event.touches.length;

    _addListener(event.target, "touchend", _onMultiTouchDocumentEnd);
  },
      _getDocScrollTop$1 = function _getDocScrollTop(doc) {
    return _win$3.pageYOffset || doc.scrollTop || doc.documentElement.scrollTop || doc.body.scrollTop || 0;
  },
      _getDocScrollLeft$1 = function _getDocScrollLeft(doc) {
    return _win$3.pageXOffset || doc.scrollLeft || doc.documentElement.scrollLeft || doc.body.scrollLeft || 0;
  },
      _addScrollListener = function _addScrollListener(e, callback) {
    _addListener(e, "scroll", callback);

    if (!_isRoot(e.parentNode)) {
      _addScrollListener(e.parentNode, callback);
    }
  },
      _removeScrollListener = function _removeScrollListener(e, callback) {
    _removeListener(e, "scroll", callback);

    if (!_isRoot(e.parentNode)) {
      _removeScrollListener(e.parentNode, callback);
    }
  },
      _isRoot = function _isRoot(e) {
    return !!(!e || e === _docElement$2 || e.nodeType === 9 || e === _doc$3.body || e === _win$3 || !e.nodeType || !e.parentNode);
  },
      _getMaxScroll = function _getMaxScroll(element, axis) {
    var dim = axis === "x" ? "Width" : "Height",
        scroll = "scroll" + dim,
        client = "client" + dim;
    return Math.max(0, _isRoot(element) ? Math.max(_docElement$2[scroll], _body$1[scroll]) - (_win$3["inner" + dim] || _docElement$2[client] || _body$1[client]) : element[scroll] - element[client]);
  },
      _recordMaxScrolls = function _recordMaxScrolls(e, skipCurrent) {
    var x = _getMaxScroll(e, "x"),
        y = _getMaxScroll(e, "y");

    if (_isRoot(e)) {
      e = _windowProxy;
    } else {
      _recordMaxScrolls(e.parentNode, skipCurrent);
    }

    e._gsMaxScrollX = x;
    e._gsMaxScrollY = y;

    if (!skipCurrent) {
      e._gsScrollX = e.scrollLeft || 0;
      e._gsScrollY = e.scrollTop || 0;
    }
  },
      _setStyle = function _setStyle(element, property, value) {
    var style = element.style;

    if (!style) {
      return;
    }

    if (_isUndefined$2(style[property])) {
      property = _checkPrefix(property, element) || property;
    }

    if (value == null) {
      style.removeProperty && style.removeProperty(property.replace(/([A-Z])/g, "-$1").toLowerCase());
    } else {
      style[property] = value;
    }
  },
      _getComputedStyle = function _getComputedStyle(element) {
    return _win$3.getComputedStyle(element instanceof Element ? element : element.host || (element.parentNode || {}).host || element);
  },
      _tempRect = {},
      _parseRect = function _parseRect(e) {
    if (e === _win$3) {
      _tempRect.left = _tempRect.top = 0;
      _tempRect.width = _tempRect.right = _docElement$2.clientWidth || e.innerWidth || _body$1.clientWidth || 0;
      _tempRect.height = _tempRect.bottom = (e.innerHeight || 0) - 20 < _docElement$2.clientHeight ? _docElement$2.clientHeight : e.innerHeight || _body$1.clientHeight || 0;
      return _tempRect;
    }

    var doc = e.ownerDocument || _doc$3,
        r = !_isUndefined$2(e.pageX) ? {
      left: e.pageX - _getDocScrollLeft$1(doc),
      top: e.pageY - _getDocScrollTop$1(doc),
      right: e.pageX - _getDocScrollLeft$1(doc) + 1,
      bottom: e.pageY - _getDocScrollTop$1(doc) + 1
    } : !e.nodeType && !_isUndefined$2(e.left) && !_isUndefined$2(e.top) ? e : _toArray(e)[0].getBoundingClientRect();

    if (_isUndefined$2(r.right) && !_isUndefined$2(r.width)) {
      r.right = r.left + r.width;
      r.bottom = r.top + r.height;
    } else if (_isUndefined$2(r.width)) {
      r = {
        width: r.right - r.left,
        height: r.bottom - r.top,
        right: r.right,
        left: r.left,
        bottom: r.bottom,
        top: r.top
      };
    }

    return r;
  },
      _dispatchEvent = function _dispatchEvent(target, type, callbackName) {
    var vars = target.vars,
        callback = vars[callbackName],
        listeners = target._listeners[type],
        result;

    if (_isFunction$1(callback)) {
      result = callback.apply(vars.callbackScope || target, vars[callbackName + "Params"] || [target.pointerEvent]);
    }

    if (listeners && target.dispatchEvent(type) === false) {
      result = false;
    }

    return result;
  },
      _getBounds = function _getBounds(target, context) {
    var e = _toArray(target)[0],
        top,
        left,
        offset;

    if (!e.nodeType && e !== _win$3) {
      if (!_isUndefined$2(target.left)) {
        offset = {
          x: 0,
          y: 0
        };
        return {
          left: target.left - offset.x,
          top: target.top - offset.y,
          width: target.width,
          height: target.height
        };
      }

      left = target.min || target.minX || target.minRotation || 0;
      top = target.min || target.minY || 0;
      return {
        left: left,
        top: top,
        width: (target.max || target.maxX || target.maxRotation || 0) - left,
        height: (target.max || target.maxY || 0) - top
      };
    }

    return _getElementBounds(e, context);
  },
      _point1 = {},
      _getElementBounds = function _getElementBounds(element, context) {
    context = _toArray(context)[0];
    var isSVG = element.getBBox && element.ownerSVGElement,
        doc = element.ownerDocument || _doc$3,
        left,
        right,
        top,
        bottom,
        matrix,
        p1,
        p2,
        p3,
        p4,
        bbox,
        width,
        height,
        cs;

    if (element === _win$3) {
      top = _getDocScrollTop$1(doc);
      left = _getDocScrollLeft$1(doc);
      right = left + (doc.documentElement.clientWidth || element.innerWidth || doc.body.clientWidth || 0);
      bottom = top + ((element.innerHeight || 0) - 20 < doc.documentElement.clientHeight ? doc.documentElement.clientHeight : element.innerHeight || doc.body.clientHeight || 0);
    } else if (context === _win$3 || _isUndefined$2(context)) {
      return element.getBoundingClientRect();
    } else {
      left = top = 0;

      if (isSVG) {
        bbox = element.getBBox();
        width = bbox.width;
        height = bbox.height;
      } else {
        if (element.viewBox && (bbox = element.viewBox.baseVal)) {
          left = bbox.x || 0;
          top = bbox.y || 0;
          width = bbox.width;
          height = bbox.height;
        }

        if (!width) {
          cs = _getComputedStyle(element);
          bbox = cs.boxSizing === "border-box";
          width = (parseFloat(cs.width) || element.clientWidth || 0) + (bbox ? 0 : parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth));
          height = (parseFloat(cs.height) || element.clientHeight || 0) + (bbox ? 0 : parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth));
        }
      }

      right = width;
      bottom = height;
    }

    if (element === context) {
      return {
        left: left,
        top: top,
        width: right - left,
        height: bottom - top
      };
    }

    matrix = getGlobalMatrix(context, true).multiply(getGlobalMatrix(element));
    p1 = matrix.apply({
      x: left,
      y: top
    });
    p2 = matrix.apply({
      x: right,
      y: top
    });
    p3 = matrix.apply({
      x: right,
      y: bottom
    });
    p4 = matrix.apply({
      x: left,
      y: bottom
    });
    left = Math.min(p1.x, p2.x, p3.x, p4.x);
    top = Math.min(p1.y, p2.y, p3.y, p4.y);
    return {
      left: left,
      top: top,
      width: Math.max(p1.x, p2.x, p3.x, p4.x) - left,
      height: Math.max(p1.y, p2.y, p3.y, p4.y) - top
    };
  },
      _parseInertia = function _parseInertia(draggable, snap, max, min, factor, forceZeroVelocity) {
    var vars = {},
        a,
        i,
        l;

    if (snap) {
      if (factor !== 1 && snap instanceof Array) {
        vars.end = a = [];
        l = snap.length;

        if (_isObject$1(snap[0])) {
          for (i = 0; i < l; i++) {
            a[i] = _copy(snap[i], factor);
          }
        } else {
          for (i = 0; i < l; i++) {
            a[i] = snap[i] * factor;
          }
        }

        max += 1.1;
        min -= 1.1;
      } else if (_isFunction$1(snap)) {
        vars.end = function (value) {
          var result = snap.call(draggable, value),
              copy,
              p;

          if (factor !== 1) {
            if (_isObject$1(result)) {
              copy = {};

              for (p in result) {
                copy[p] = result[p] * factor;
              }

              result = copy;
            } else {
              result *= factor;
            }
          }

          return result;
        };
      } else {
        vars.end = snap;
      }
    }

    if (max || max === 0) {
      vars.max = max;
    }

    if (min || min === 0) {
      vars.min = min;
    }

    if (forceZeroVelocity) {
      vars.velocity = 0;
    }

    return vars;
  },
      _isClickable = function _isClickable(element) {
    var data;
    return !element || !element.getAttribute || element === _body$1 ? false : (data = element.getAttribute("data-clickable")) === "true" || data !== "false" && (_clickableTagExp.test(element.nodeName + "") || element.getAttribute("contentEditable") === "true") ? true : _isClickable(element.parentNode);
  },
      _setSelectable = function _setSelectable(elements, selectable) {
    var i = elements.length,
        e;

    while (i--) {
      e = elements[i];
      e.ondragstart = e.onselectstart = selectable ? null : _emptyFunc$1;
      gsap$2.set(e, {
        lazy: true,
        userSelect: selectable ? "text" : "none"
      });
    }
  },
      _isFixed$1 = function _isFixed(element) {
    if (_getComputedStyle(element).position === "fixed") {
      return true;
    }

    element = element.parentNode;

    if (element && element.nodeType === 1) {
      return _isFixed(element);
    }
  },
      _supports3D$1,
      _addPaddingBR,
      ScrollProxy = function ScrollProxy(element, vars) {
    element = gsap$2.utils.toArray(element)[0];
    vars = vars || {};
    var content = document.createElement("div"),
        style = content.style,
        node = element.firstChild,
        offsetTop = 0,
        offsetLeft = 0,
        prevTop = element.scrollTop,
        prevLeft = element.scrollLeft,
        scrollWidth = element.scrollWidth,
        scrollHeight = element.scrollHeight,
        extraPadRight = 0,
        maxLeft = 0,
        maxTop = 0,
        elementWidth,
        elementHeight,
        contentHeight,
        nextNode,
        transformStart,
        transformEnd;

    if (_supports3D$1 && vars.force3D !== false) {
      transformStart = "translate3d(";
      transformEnd = "px,0px)";
    } else if (_transformProp$2) {
      transformStart = "translate(";
      transformEnd = "px)";
    }

    this.scrollTop = function (value, force) {
      if (!arguments.length) {
        return -this.top();
      }

      this.top(-value, force);
    };

    this.scrollLeft = function (value, force) {
      if (!arguments.length) {
        return -this.left();
      }

      this.left(-value, force);
    };

    this.left = function (value, force) {
      if (!arguments.length) {
        return -(element.scrollLeft + offsetLeft);
      }

      var dif = element.scrollLeft - prevLeft,
          oldOffset = offsetLeft;

      if ((dif > 2 || dif < -2) && !force) {
        prevLeft = element.scrollLeft;
        gsap$2.killTweensOf(this, {
          left: 1,
          scrollLeft: 1
        });
        this.left(-prevLeft);

        if (vars.onKill) {
          vars.onKill();
        }

        return;
      }

      value = -value;

      if (value < 0) {
        offsetLeft = value - 0.5 | 0;
        value = 0;
      } else if (value > maxLeft) {
        offsetLeft = value - maxLeft | 0;
        value = maxLeft;
      } else {
        offsetLeft = 0;
      }

      if (offsetLeft || oldOffset) {
        if (!this._skip) {
          style[_transformProp$2] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
        }

        if (offsetLeft + extraPadRight >= 0) {
          style.paddingRight = offsetLeft + extraPadRight + "px";
        }
      }

      element.scrollLeft = value | 0;
      prevLeft = element.scrollLeft;
    };

    this.top = function (value, force) {
      if (!arguments.length) {
        return -(element.scrollTop + offsetTop);
      }

      var dif = element.scrollTop - prevTop,
          oldOffset = offsetTop;

      if ((dif > 2 || dif < -2) && !force) {
        prevTop = element.scrollTop;
        gsap$2.killTweensOf(this, {
          top: 1,
          scrollTop: 1
        });
        this.top(-prevTop);

        if (vars.onKill) {
          vars.onKill();
        }

        return;
      }

      value = -value;

      if (value < 0) {
        offsetTop = value - 0.5 | 0;
        value = 0;
      } else if (value > maxTop) {
        offsetTop = value - maxTop | 0;
        value = maxTop;
      } else {
        offsetTop = 0;
      }

      if (offsetTop || oldOffset) {
        if (!this._skip) {
          style[_transformProp$2] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
        }
      }

      element.scrollTop = value | 0;
      prevTop = element.scrollTop;
    };

    this.maxScrollTop = function () {
      return maxTop;
    };

    this.maxScrollLeft = function () {
      return maxLeft;
    };

    this.disable = function () {
      node = content.firstChild;

      while (node) {
        nextNode = node.nextSibling;
        element.appendChild(node);
        node = nextNode;
      }

      if (element === content.parentNode) {
        element.removeChild(content);
      }
    };

    this.enable = function () {
      node = element.firstChild;

      if (node === content) {
        return;
      }

      while (node) {
        nextNode = node.nextSibling;
        content.appendChild(node);
        node = nextNode;
      }

      element.appendChild(content);
      this.calibrate();
    };

    this.calibrate = function (force) {
      var widthMatches = element.clientWidth === elementWidth,
          cs,
          x,
          y;
      prevTop = element.scrollTop;
      prevLeft = element.scrollLeft;

      if (widthMatches && element.clientHeight === elementHeight && content.offsetHeight === contentHeight && scrollWidth === element.scrollWidth && scrollHeight === element.scrollHeight && !force) {
        return;
      }

      if (offsetTop || offsetLeft) {
        x = this.left();
        y = this.top();
        this.left(-element.scrollLeft);
        this.top(-element.scrollTop);
      }

      cs = _getComputedStyle(element);

      if (!widthMatches || force) {
        style.display = "block";
        style.width = "auto";
        style.paddingRight = "0px";
        extraPadRight = Math.max(0, element.scrollWidth - element.clientWidth);

        if (extraPadRight) {
          extraPadRight += parseFloat(cs.paddingLeft) + (_addPaddingBR ? parseFloat(cs.paddingRight) : 0);
        }
      }

      style.display = "inline-block";
      style.position = "relative";
      style.overflow = "visible";
      style.verticalAlign = "top";
      style.boxSizing = "content-box";
      style.width = "100%";
      style.paddingRight = extraPadRight + "px";

      if (_addPaddingBR) {
        style.paddingBottom = cs.paddingBottom;
      }

      elementWidth = element.clientWidth;
      elementHeight = element.clientHeight;
      scrollWidth = element.scrollWidth;
      scrollHeight = element.scrollHeight;
      maxLeft = element.scrollWidth - elementWidth;
      maxTop = element.scrollHeight - elementHeight;
      contentHeight = content.offsetHeight;
      style.display = "block";

      if (x || y) {
        this.left(x);
        this.top(y);
      }
    };

    this.content = content;
    this.element = element;
    this._skip = false;
    this.enable();
  },
      _initCore$2 = function _initCore(required) {
    if (_windowExists$2() && document.body) {
      var nav = window && window.navigator;
      _win$3 = window;
      _doc$3 = document;
      _docElement$2 = _doc$3.documentElement;
      _body$1 = _doc$3.body;
      _tempDiv$1 = _createElement$1("div");
      _supportsPointer = !!window.PointerEvent;
      _placeholderDiv = _createElement$1("div");
      _placeholderDiv.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab";
      _defaultCursor = _placeholderDiv.style.cursor === "grab" ? "grab" : "move";
      _isAndroid = nav && nav.userAgent.toLowerCase().indexOf("android") !== -1;
      _isTouchDevice = "ontouchstart" in _docElement$2 && "orientation" in _win$3 || nav && (nav.MaxTouchPoints > 0 || nav.msMaxTouchPoints > 0);

      _addPaddingBR = function () {
        var div = _createElement$1("div"),
            child = _createElement$1("div"),
            childStyle = child.style,
            parent = _body$1,
            val;

        childStyle.display = "inline-block";
        childStyle.position = "relative";
        div.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden";
        div.appendChild(child);
        parent.appendChild(div);
        val = child.offsetHeight + 18 > div.scrollHeight;
        parent.removeChild(div);
        return val;
      }();

      _touchEventLookup = function (types) {
        var standard = types.split(","),
            converted = ("onpointerdown" in _tempDiv$1 ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in _tempDiv$1 ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : types).split(","),
            obj = {},
            i = 4;

        while (--i > -1) {
          obj[standard[i]] = converted[i];
          obj[converted[i]] = standard[i];
        }

        try {
          _docElement$2.addEventListener("test", null, Object.defineProperty({}, "passive", {
            get: function get() {
              _supportsPassive = 1;
            }
          }));
        } catch (e) {}

        return obj;
      }("touchstart,touchmove,touchend,touchcancel");

      _addListener(_doc$3, "touchcancel", _emptyFunc$1);

      _addListener(_win$3, "touchmove", _emptyFunc$1);

      _body$1 && _body$1.addEventListener("touchstart", _emptyFunc$1);

      _addListener(_doc$3, "contextmenu", function () {
        for (var p in _lookup) {
          if (_lookup[p].isPressed) {
            _lookup[p].endDrag();
          }
        }
      });

      gsap$2 = _coreInitted$2 = _getGSAP$1();
    }

    if (gsap$2) {
      InertiaPlugin = gsap$2.plugins.inertia;

      _context$1 = gsap$2.core.context || function () {};

      _checkPrefix = gsap$2.utils.checkPrefix;
      _transformProp$2 = _checkPrefix(_transformProp$2);
      _transformOriginProp$2 = _checkPrefix(_transformOriginProp$2);
      _toArray = gsap$2.utils.toArray;
      _getStyleSaver$1 = gsap$2.core.getStyleSaver;
      _supports3D$1 = !!_checkPrefix("perspective");
    } else if (required) {
      console.warn("Please gsap.registerPlugin(Draggable)");
    }
  };

  var EventDispatcher = function () {
    function EventDispatcher(target) {
      this._listeners = {};
      this.target = target || this;
    }

    var _proto = EventDispatcher.prototype;

    _proto.addEventListener = function addEventListener(type, callback) {
      var list = this._listeners[type] || (this._listeners[type] = []);

      if (!~list.indexOf(callback)) {
        list.push(callback);
      }
    };

    _proto.removeEventListener = function removeEventListener(type, callback) {
      var list = this._listeners[type],
          i = list && list.indexOf(callback);
      i >= 0 && list.splice(i, 1);
    };

    _proto.dispatchEvent = function dispatchEvent(type) {
      var _this = this;

      var result;
      (this._listeners[type] || []).forEach(function (callback) {
        return callback.call(_this, {
          type: type,
          target: _this.target
        }) === false && (result = false);
      });
      return result;
    };

    return EventDispatcher;
  }();

  var Draggable = function (_EventDispatcher) {
    _inheritsLoose(Draggable, _EventDispatcher);

    function Draggable(target, vars) {
      var _this2;

      _this2 = _EventDispatcher.call(this) || this;
      _coreInitted$2 || _initCore$2(1);
      target = _toArray(target)[0];
      _this2.styles = _getStyleSaver$1 && _getStyleSaver$1(target, "transform,left,top");

      if (!InertiaPlugin) {
        InertiaPlugin = gsap$2.plugins.inertia;
      }

      _this2.vars = vars = _copy(vars || {});
      _this2.target = target;
      _this2.x = _this2.y = _this2.rotation = 0;
      _this2.dragResistance = parseFloat(vars.dragResistance) || 0;
      _this2.edgeResistance = isNaN(vars.edgeResistance) ? 1 : parseFloat(vars.edgeResistance) || 0;
      _this2.lockAxis = vars.lockAxis;
      _this2.autoScroll = vars.autoScroll || 0;
      _this2.lockedAxis = null;
      _this2.allowEventDefault = !!vars.allowEventDefault;
      gsap$2.getProperty(target, "x");

      var type = (vars.type || "x,y").toLowerCase(),
          xyMode = ~type.indexOf("x") || ~type.indexOf("y"),
          rotationMode = type.indexOf("rotation") !== -1,
          xProp = rotationMode ? "rotation" : xyMode ? "x" : "left",
          yProp = xyMode ? "y" : "top",
          allowX = !!(~type.indexOf("x") || ~type.indexOf("left") || type === "scroll"),
          allowY = !!(~type.indexOf("y") || ~type.indexOf("top") || type === "scroll"),
          minimumMovement = vars.minimumMovement || 2,
          self = _assertThisInitialized(_this2),
          triggers = _toArray(vars.trigger || vars.handle || target),
          killProps = {},
          dragEndTime = 0,
          checkAutoScrollBounds = false,
          autoScrollMarginTop = vars.autoScrollMarginTop || 40,
          autoScrollMarginRight = vars.autoScrollMarginRight || 40,
          autoScrollMarginBottom = vars.autoScrollMarginBottom || 40,
          autoScrollMarginLeft = vars.autoScrollMarginLeft || 40,
          isClickable = vars.clickableTest || _isClickable,
          clickTime = 0,
          gsCache = target._gsap || gsap$2.core.getCache(target),
          isFixed = _isFixed$1(target),
          getPropAsNum = function getPropAsNum(property, unit) {
        return parseFloat(gsCache.get(target, property, unit));
      },
          ownerDoc = target.ownerDocument || _doc$3,
          enabled,
          scrollProxy,
          startPointerX,
          startPointerY,
          startElementX,
          startElementY,
          hasBounds,
          hasDragCallback,
          hasMoveCallback,
          maxX,
          minX,
          maxY,
          minY,
          touch,
          touchID,
          rotationOrigin,
          dirty,
          old,
          snapX,
          snapY,
          snapXY,
          isClicking,
          touchEventTarget,
          matrix,
          interrupted,
          allowNativeTouchScrolling,
          touchDragAxis,
          isDispatching,
          clickDispatch,
          trustedClickDispatch,
          isPreventingDefault,
          innerMatrix,
          dragged,
          onContextMenu = function onContextMenu(e) {
        _preventDefault(e);

        e.stopImmediatePropagation && e.stopImmediatePropagation();
        return false;
      },
          render = function render(suppressEvents) {
        if (self.autoScroll && self.isDragging && (checkAutoScrollBounds || dirty)) {
          var e = target,
              autoScrollFactor = self.autoScroll * 15,
              parent,
              isRoot,
              rect,
              pointerX,
              pointerY,
              changeX,
              changeY,
              gap;
          checkAutoScrollBounds = false;
          _windowProxy.scrollTop = _win$3.pageYOffset != null ? _win$3.pageYOffset : ownerDoc.documentElement.scrollTop != null ? ownerDoc.documentElement.scrollTop : ownerDoc.body.scrollTop;
          _windowProxy.scrollLeft = _win$3.pageXOffset != null ? _win$3.pageXOffset : ownerDoc.documentElement.scrollLeft != null ? ownerDoc.documentElement.scrollLeft : ownerDoc.body.scrollLeft;
          pointerX = self.pointerX - _windowProxy.scrollLeft;
          pointerY = self.pointerY - _windowProxy.scrollTop;

          while (e && !isRoot) {
            isRoot = _isRoot(e.parentNode);
            parent = isRoot ? _windowProxy : e.parentNode;
            rect = isRoot ? {
              bottom: Math.max(_docElement$2.clientHeight, _win$3.innerHeight || 0),
              right: Math.max(_docElement$2.clientWidth, _win$3.innerWidth || 0),
              left: 0,
              top: 0
            } : parent.getBoundingClientRect();
            changeX = changeY = 0;

            if (allowY) {
              gap = parent._gsMaxScrollY - parent.scrollTop;

              if (gap < 0) {
                changeY = gap;
              } else if (pointerY > rect.bottom - autoScrollMarginBottom && gap) {
                checkAutoScrollBounds = true;
                changeY = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.bottom - pointerY) / autoScrollMarginBottom) | 0);
              } else if (pointerY < rect.top + autoScrollMarginTop && parent.scrollTop) {
                checkAutoScrollBounds = true;
                changeY = -Math.min(parent.scrollTop, autoScrollFactor * (1 - Math.max(0, pointerY - rect.top) / autoScrollMarginTop) | 0);
              }

              if (changeY) {
                parent.scrollTop += changeY;
              }
            }

            if (allowX) {
              gap = parent._gsMaxScrollX - parent.scrollLeft;

              if (gap < 0) {
                changeX = gap;
              } else if (pointerX > rect.right - autoScrollMarginRight && gap) {
                checkAutoScrollBounds = true;
                changeX = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.right - pointerX) / autoScrollMarginRight) | 0);
              } else if (pointerX < rect.left + autoScrollMarginLeft && parent.scrollLeft) {
                checkAutoScrollBounds = true;
                changeX = -Math.min(parent.scrollLeft, autoScrollFactor * (1 - Math.max(0, pointerX - rect.left) / autoScrollMarginLeft) | 0);
              }

              if (changeX) {
                parent.scrollLeft += changeX;
              }
            }

            if (isRoot && (changeX || changeY)) {
              _win$3.scrollTo(parent.scrollLeft, parent.scrollTop);

              setPointerPosition(self.pointerX + changeX, self.pointerY + changeY);
            }

            e = parent;
          }
        }

        if (dirty) {
          var x = self.x,
              y = self.y;

          if (rotationMode) {
            self.deltaX = x - parseFloat(gsCache.rotation);
            self.rotation = x;
            gsCache.rotation = x + "deg";
            gsCache.renderTransform(1, gsCache);
          } else {
            if (scrollProxy) {
              if (allowY) {
                self.deltaY = y - scrollProxy.top();
                scrollProxy.top(y);
              }

              if (allowX) {
                self.deltaX = x - scrollProxy.left();
                scrollProxy.left(x);
              }
            } else if (xyMode) {
              if (allowY) {
                self.deltaY = y - parseFloat(gsCache.y);
                gsCache.y = y + "px";
              }

              if (allowX) {
                self.deltaX = x - parseFloat(gsCache.x);
                gsCache.x = x + "px";
              }

              gsCache.renderTransform(1, gsCache);
            } else {
              if (allowY) {
                self.deltaY = y - parseFloat(target.style.top || 0);
                target.style.top = y + "px";
              }

              if (allowX) {
                self.deltaX = x - parseFloat(target.style.left || 0);
                target.style.left = x + "px";
              }
            }
          }

          if (hasDragCallback && !suppressEvents && !isDispatching) {
            isDispatching = true;

            if (_dispatchEvent(self, "drag", "onDrag") === false) {
              if (allowX) {
                self.x -= self.deltaX;
              }

              if (allowY) {
                self.y -= self.deltaY;
              }

              render(true);
            }

            isDispatching = false;
          }
        }

        dirty = false;
      },
          syncXY = function syncXY(skipOnUpdate, skipSnap) {
        var x = self.x,
            y = self.y,
            snappedValue,
            cs;

        if (!target._gsap) {
          gsCache = gsap$2.core.getCache(target);
        }

        gsCache.uncache && gsap$2.getProperty(target, "x");

        if (xyMode) {
          self.x = parseFloat(gsCache.x);
          self.y = parseFloat(gsCache.y);
        } else if (rotationMode) {
          self.x = self.rotation = parseFloat(gsCache.rotation);
        } else if (scrollProxy) {
          self.y = scrollProxy.top();
          self.x = scrollProxy.left();
        } else {
          self.y = parseFloat(target.style.top || (cs = _getComputedStyle(target)) && cs.top) || 0;
          self.x = parseFloat(target.style.left || (cs || {}).left) || 0;
        }

        if ((snapX || snapY || snapXY) && !skipSnap && (self.isDragging || self.isThrowing)) {
          if (snapXY) {
            _temp1.x = self.x;
            _temp1.y = self.y;
            snappedValue = snapXY(_temp1);

            if (snappedValue.x !== self.x) {
              self.x = snappedValue.x;
              dirty = true;
            }

            if (snappedValue.y !== self.y) {
              self.y = snappedValue.y;
              dirty = true;
            }
          }

          if (snapX) {
            snappedValue = snapX(self.x);

            if (snappedValue !== self.x) {
              self.x = snappedValue;

              if (rotationMode) {
                self.rotation = snappedValue;
              }

              dirty = true;
            }
          }

          if (snapY) {
            snappedValue = snapY(self.y);

            if (snappedValue !== self.y) {
              self.y = snappedValue;
            }

            dirty = true;
          }
        }

        dirty && render(true);

        if (!skipOnUpdate) {
          self.deltaX = self.x - x;
          self.deltaY = self.y - y;

          _dispatchEvent(self, "throwupdate", "onThrowUpdate");
        }
      },
          buildSnapFunc = function buildSnapFunc(snap, min, max, factor) {
        if (min == null) {
          min = -_bigNum$3;
        }

        if (max == null) {
          max = _bigNum$3;
        }

        if (_isFunction$1(snap)) {
          return function (n) {
            var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance;
            return snap.call(self, (n > max ? max + (n - max) * edgeTolerance : n < min ? min + (n - min) * edgeTolerance : n) * factor) * factor;
          };
        }

        if (_isArray$1(snap)) {
          return function (n) {
            var i = snap.length,
                closest = 0,
                absDif = _bigNum$3,
                val,
                dif;

            while (--i > -1) {
              val = snap[i];
              dif = val - n;

              if (dif < 0) {
                dif = -dif;
              }

              if (dif < absDif && val >= min && val <= max) {
                closest = i;
                absDif = dif;
              }
            }

            return snap[closest];
          };
        }

        return isNaN(snap) ? function (n) {
          return n;
        } : function () {
          return snap * factor;
        };
      },
          buildPointSnapFunc = function buildPointSnapFunc(snap, minX, maxX, minY, maxY, radius, factor) {
        radius = radius && radius < _bigNum$3 ? radius * radius : _bigNum$3;

        if (_isFunction$1(snap)) {
          return function (point) {
            var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance,
                x = point.x,
                y = point.y,
                result,
                dx,
                dy;
            point.x = x = x > maxX ? maxX + (x - maxX) * edgeTolerance : x < minX ? minX + (x - minX) * edgeTolerance : x;
            point.y = y = y > maxY ? maxY + (y - maxY) * edgeTolerance : y < minY ? minY + (y - minY) * edgeTolerance : y;
            result = snap.call(self, point);

            if (result !== point) {
              point.x = result.x;
              point.y = result.y;
            }

            if (factor !== 1) {
              point.x *= factor;
              point.y *= factor;
            }

            if (radius < _bigNum$3) {
              dx = point.x - x;
              dy = point.y - y;

              if (dx * dx + dy * dy > radius) {
                point.x = x;
                point.y = y;
              }
            }

            return point;
          };
        }

        if (_isArray$1(snap)) {
          return function (p) {
            var i = snap.length,
                closest = 0,
                minDist = _bigNum$3,
                x,
                y,
                point,
                dist;

            while (--i > -1) {
              point = snap[i];
              x = point.x - p.x;
              y = point.y - p.y;
              dist = x * x + y * y;

              if (dist < minDist) {
                closest = i;
                minDist = dist;
              }
            }

            return minDist <= radius ? snap[closest] : p;
          };
        }

        return function (n) {
          return n;
        };
      },
          calculateBounds = function calculateBounds() {
        var bounds, targetBounds, snap, snapIsRaw;
        hasBounds = false;

        if (scrollProxy) {
          scrollProxy.calibrate();
          self.minX = minX = -scrollProxy.maxScrollLeft();
          self.minY = minY = -scrollProxy.maxScrollTop();
          self.maxX = maxX = self.maxY = maxY = 0;
          hasBounds = true;
        } else if (!!vars.bounds) {
          bounds = _getBounds(vars.bounds, target.parentNode);

          if (rotationMode) {
            self.minX = minX = bounds.left;
            self.maxX = maxX = bounds.left + bounds.width;
            self.minY = minY = self.maxY = maxY = 0;
          } else if (!_isUndefined$2(vars.bounds.maxX) || !_isUndefined$2(vars.bounds.maxY)) {
            bounds = vars.bounds;
            self.minX = minX = bounds.minX;
            self.minY = minY = bounds.minY;
            self.maxX = maxX = bounds.maxX;
            self.maxY = maxY = bounds.maxY;
          } else {
            targetBounds = _getBounds(target, target.parentNode);
            self.minX = minX = Math.round(getPropAsNum(xProp, "px") + bounds.left - targetBounds.left);
            self.minY = minY = Math.round(getPropAsNum(yProp, "px") + bounds.top - targetBounds.top);
            self.maxX = maxX = Math.round(minX + (bounds.width - targetBounds.width));
            self.maxY = maxY = Math.round(minY + (bounds.height - targetBounds.height));
          }

          if (minX > maxX) {
            self.minX = maxX;
            self.maxX = maxX = minX;
            minX = self.minX;
          }

          if (minY > maxY) {
            self.minY = maxY;
            self.maxY = maxY = minY;
            minY = self.minY;
          }

          if (rotationMode) {
            self.minRotation = minX;
            self.maxRotation = maxX;
          }

          hasBounds = true;
        }

        if (vars.liveSnap) {
          snap = vars.liveSnap === true ? vars.snap || {} : vars.liveSnap;
          snapIsRaw = _isArray$1(snap) || _isFunction$1(snap);

          if (rotationMode) {
            snapX = buildSnapFunc(snapIsRaw ? snap : snap.rotation, minX, maxX, 1);
            snapY = null;
          } else {
            if (snap.points) {
              snapXY = buildPointSnapFunc(snapIsRaw ? snap : snap.points, minX, maxX, minY, maxY, snap.radius, scrollProxy ? -1 : 1);
            } else {
              if (allowX) {
                snapX = buildSnapFunc(snapIsRaw ? snap : snap.x || snap.left || snap.scrollLeft, minX, maxX, scrollProxy ? -1 : 1);
              }

              if (allowY) {
                snapY = buildSnapFunc(snapIsRaw ? snap : snap.y || snap.top || snap.scrollTop, minY, maxY, scrollProxy ? -1 : 1);
              }
            }
          }
        }
      },
          onThrowComplete = function onThrowComplete() {
        self.isThrowing = false;

        _dispatchEvent(self, "throwcomplete", "onThrowComplete");
      },
          onThrowInterrupt = function onThrowInterrupt() {
        self.isThrowing = false;
      },
          animate = function animate(inertia, forceZeroVelocity) {
        var snap, snapIsRaw, tween, overshootTolerance;

        if (inertia && InertiaPlugin) {
          if (inertia === true) {
            snap = vars.snap || vars.liveSnap || {};
            snapIsRaw = _isArray$1(snap) || _isFunction$1(snap);
            inertia = {
              resistance: (vars.throwResistance || vars.resistance || 1000) / (rotationMode ? 10 : 1)
            };

            if (rotationMode) {
              inertia.rotation = _parseInertia(self, snapIsRaw ? snap : snap.rotation, maxX, minX, 1, forceZeroVelocity);
            } else {
              if (allowX) {
                inertia[xProp] = _parseInertia(self, snapIsRaw ? snap : snap.points || snap.x || snap.left, maxX, minX, scrollProxy ? -1 : 1, forceZeroVelocity || self.lockedAxis === "x");
              }

              if (allowY) {
                inertia[yProp] = _parseInertia(self, snapIsRaw ? snap : snap.points || snap.y || snap.top, maxY, minY, scrollProxy ? -1 : 1, forceZeroVelocity || self.lockedAxis === "y");
              }

              if (snap.points || _isArray$1(snap) && _isObject$1(snap[0])) {
                inertia.linkedProps = xProp + "," + yProp;
                inertia.radius = snap.radius;
              }
            }
          }

          self.isThrowing = true;
          overshootTolerance = !isNaN(vars.overshootTolerance) ? vars.overshootTolerance : vars.edgeResistance === 1 ? 0 : 1 - self.edgeResistance + 0.2;

          if (!inertia.duration) {
            inertia.duration = {
              max: Math.max(vars.minDuration || 0, "maxDuration" in vars ? vars.maxDuration : 2),
              min: !isNaN(vars.minDuration) ? vars.minDuration : overshootTolerance === 0 || _isObject$1(inertia) && inertia.resistance > 1000 ? 0 : 0.5,
              overshoot: overshootTolerance
            };
          }

          self.tween = tween = gsap$2.to(scrollProxy || target, {
            inertia: inertia,
            data: "_draggable",
            onComplete: onThrowComplete,
            onInterrupt: onThrowInterrupt,
            onUpdate: vars.fastMode ? _dispatchEvent : syncXY,
            onUpdateParams: vars.fastMode ? [self, "onthrowupdate", "onThrowUpdate"] : snap && snap.radius ? [false, true] : []
          });

          if (!vars.fastMode) {
            if (scrollProxy) {
              scrollProxy._skip = true;
            }

            tween.render(1e9, true, true);
            syncXY(true, true);
            self.endX = self.x;
            self.endY = self.y;

            if (rotationMode) {
              self.endRotation = self.x;
            }

            tween.play(0);
            syncXY(true, true);

            if (scrollProxy) {
              scrollProxy._skip = false;
            }
          }
        } else if (hasBounds) {
          self.applyBounds();
        }
      },
          updateMatrix = function updateMatrix(shiftStart) {
        var start = matrix,
            p;
        matrix = getGlobalMatrix(target.parentNode, true);

        if (shiftStart && self.isPressed && !matrix.equals(start || new Matrix2D())) {
          p = start.inverse().apply({
            x: startPointerX,
            y: startPointerY
          });
          matrix.apply(p, p);
          startPointerX = p.x;
          startPointerY = p.y;
        }

        if (matrix.equals(_identityMatrix$1)) {
          matrix = null;
        }
      },
          recordStartPositions = function recordStartPositions() {
        var edgeTolerance = 1 - self.edgeResistance,
            offsetX = isFixed ? _getDocScrollLeft$1(ownerDoc) : 0,
            offsetY = isFixed ? _getDocScrollTop$1(ownerDoc) : 0,
            parsedOrigin,
            x,
            y;

        if (xyMode) {
          gsCache.x = getPropAsNum(xProp, "px") + "px";
          gsCache.y = getPropAsNum(yProp, "px") + "px";
          gsCache.renderTransform();
        }

        updateMatrix(false);
        _point1.x = self.pointerX - offsetX;
        _point1.y = self.pointerY - offsetY;
        matrix && matrix.apply(_point1, _point1);
        startPointerX = _point1.x;
        startPointerY = _point1.y;

        if (dirty) {
          setPointerPosition(self.pointerX, self.pointerY);
          render(true);
        }

        innerMatrix = getGlobalMatrix(target);

        if (scrollProxy) {
          calculateBounds();
          startElementY = scrollProxy.top();
          startElementX = scrollProxy.left();
        } else {
          if (isTweening()) {
            syncXY(true, true);
            calculateBounds();
          } else {
            self.applyBounds();
          }

          if (rotationMode) {
            parsedOrigin = target.ownerSVGElement ? [gsCache.xOrigin - target.getBBox().x, gsCache.yOrigin - target.getBBox().y] : (_getComputedStyle(target)[_transformOriginProp$2] || "0 0").split(" ");
            rotationOrigin = self.rotationOrigin = getGlobalMatrix(target).apply({
              x: parseFloat(parsedOrigin[0]) || 0,
              y: parseFloat(parsedOrigin[1]) || 0
            });
            syncXY(true, true);
            x = self.pointerX - rotationOrigin.x - offsetX;
            y = rotationOrigin.y - self.pointerY + offsetY;
            startElementX = self.x;
            startElementY = self.y = Math.atan2(y, x) * _RAD2DEG$2;
          } else {
            startElementY = getPropAsNum(yProp, "px");
            startElementX = getPropAsNum(xProp, "px");
          }
        }

        if (hasBounds && edgeTolerance) {
          if (startElementX > maxX) {
            startElementX = maxX + (startElementX - maxX) / edgeTolerance;
          } else if (startElementX < minX) {
            startElementX = minX - (minX - startElementX) / edgeTolerance;
          }

          if (!rotationMode) {
            if (startElementY > maxY) {
              startElementY = maxY + (startElementY - maxY) / edgeTolerance;
            } else if (startElementY < minY) {
              startElementY = minY - (minY - startElementY) / edgeTolerance;
            }
          }
        }

        self.startX = startElementX = _round$3(startElementX);
        self.startY = startElementY = _round$3(startElementY);
      },
          isTweening = function isTweening() {
        return self.tween && self.tween.isActive();
      },
          removePlaceholder = function removePlaceholder() {
        if (_placeholderDiv.parentNode && !isTweening() && !self.isDragging) {
          _placeholderDiv.parentNode.removeChild(_placeholderDiv);
        }
      },
          onPress = function onPress(e, force) {
        var i;

        if (!enabled || self.isPressed || !e || (e.type === "mousedown" || e.type === "pointerdown") && !force && _getTime() - clickTime < 30 && _touchEventLookup[self.pointerEvent.type]) {
          isPreventingDefault && e && enabled && _preventDefault(e);
          return;
        }

        interrupted = isTweening();
        dragged = false;
        self.pointerEvent = e;

        if (_touchEventLookup[e.type]) {
          touchEventTarget = ~e.type.indexOf("touch") ? e.currentTarget || e.target : ownerDoc;

          _addListener(touchEventTarget, "touchend", onRelease);

          _addListener(touchEventTarget, "touchmove", onMove);

          _addListener(touchEventTarget, "touchcancel", onRelease);

          _addListener(ownerDoc, "touchstart", _onMultiTouchDocument);
        } else {
          touchEventTarget = null;

          _addListener(ownerDoc, "mousemove", onMove);
        }

        touchDragAxis = null;

        if (!_supportsPointer || !touchEventTarget) {
          _addListener(ownerDoc, "mouseup", onRelease);

          e && e.target && _addListener(e.target, "mouseup", onRelease);
        }

        isClicking = isClickable.call(self, e.target) && vars.dragClickables === false && !force;

        if (isClicking) {
          _addListener(e.target, "change", onRelease);

          _dispatchEvent(self, "pressInit", "onPressInit");

          _dispatchEvent(self, "press", "onPress");

          _setSelectable(triggers, true);

          isPreventingDefault = false;
          return;
        }

        allowNativeTouchScrolling = !touchEventTarget || allowX === allowY || self.vars.allowNativeTouchScrolling === false || self.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2) ? false : allowX ? "y" : "x";
        isPreventingDefault = !allowNativeTouchScrolling && !self.allowEventDefault;

        if (isPreventingDefault) {
          _preventDefault(e);

          _addListener(_win$3, "touchforcechange", _preventDefault);
        }

        if (e.changedTouches) {
          e = touch = e.changedTouches[0];
          touchID = e.identifier;
        } else if (e.pointerId) {
          touchID = e.pointerId;
        } else {
          touch = touchID = null;
        }

        _dragCount++;

        _addToRenderQueue(render);

        startPointerY = self.pointerY = e.pageY;
        startPointerX = self.pointerX = e.pageX;

        _dispatchEvent(self, "pressInit", "onPressInit");

        if (allowNativeTouchScrolling || self.autoScroll) {
          _recordMaxScrolls(target.parentNode);
        }

        if (target.parentNode && self.autoScroll && !scrollProxy && !rotationMode && target.parentNode._gsMaxScrollX && !_placeholderDiv.parentNode && !target.getBBox) {
          _placeholderDiv.style.width = target.parentNode.scrollWidth + "px";
          target.parentNode.appendChild(_placeholderDiv);
        }

        recordStartPositions();
        self.tween && self.tween.kill();
        self.isThrowing = false;
        gsap$2.killTweensOf(scrollProxy || target, killProps, true);
        scrollProxy && gsap$2.killTweensOf(target, {
          scrollTo: 1
        }, true);
        self.tween = self.lockedAxis = null;

        if (vars.zIndexBoost || !rotationMode && !scrollProxy && vars.zIndexBoost !== false) {
          target.style.zIndex = Draggable.zIndex++;
        }

        self.isPressed = true;
        hasDragCallback = !!(vars.onDrag || self._listeners.drag);
        hasMoveCallback = !!(vars.onMove || self._listeners.move);

        if (vars.cursor !== false || vars.activeCursor) {
          i = triggers.length;

          while (--i > -1) {
            gsap$2.set(triggers[i], {
              cursor: vars.activeCursor || vars.cursor || (_defaultCursor === "grab" ? "grabbing" : _defaultCursor)
            });
          }
        }

        _dispatchEvent(self, "press", "onPress");
      },
          onMove = function onMove(e) {
        var originalEvent = e,
            touches,
            pointerX,
            pointerY,
            i,
            dx,
            dy;

        if (!enabled || _isMultiTouching || !self.isPressed || !e) {
          isPreventingDefault && e && enabled && _preventDefault(e);
          return;
        }

        self.pointerEvent = e;
        touches = e.changedTouches;

        if (touches) {
          e = touches[0];

          if (e !== touch && e.identifier !== touchID) {
            i = touches.length;

            while (--i > -1 && (e = touches[i]).identifier !== touchID && e.target !== target) {}

            if (i < 0) {
              return;
            }
          }
        } else if (e.pointerId && touchID && e.pointerId !== touchID) {
          return;
        }

        if (touchEventTarget && allowNativeTouchScrolling && !touchDragAxis) {
          _point1.x = e.pageX - (isFixed ? _getDocScrollLeft$1(ownerDoc) : 0);
          _point1.y = e.pageY - (isFixed ? _getDocScrollTop$1(ownerDoc) : 0);
          matrix && matrix.apply(_point1, _point1);
          pointerX = _point1.x;
          pointerY = _point1.y;
          dx = Math.abs(pointerX - startPointerX);
          dy = Math.abs(pointerY - startPointerY);

          if (dx !== dy && (dx > minimumMovement || dy > minimumMovement) || _isAndroid && allowNativeTouchScrolling === touchDragAxis) {
            touchDragAxis = dx > dy && allowX ? "x" : "y";

            if (allowNativeTouchScrolling && touchDragAxis !== allowNativeTouchScrolling) {
              _addListener(_win$3, "touchforcechange", _preventDefault);
            }

            if (self.vars.lockAxisOnTouchScroll !== false && allowX && allowY) {
              self.lockedAxis = touchDragAxis === "x" ? "y" : "x";
              _isFunction$1(self.vars.onLockAxis) && self.vars.onLockAxis.call(self, originalEvent);
            }

            if (_isAndroid && allowNativeTouchScrolling === touchDragAxis) {
              onRelease(originalEvent);
              return;
            }
          }
        }

        if (!self.allowEventDefault && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling !== touchDragAxis) && originalEvent.cancelable !== false) {
          _preventDefault(originalEvent);

          isPreventingDefault = true;
        } else if (isPreventingDefault) {
          isPreventingDefault = false;
        }

        if (self.autoScroll) {
          checkAutoScrollBounds = true;
        }

        setPointerPosition(e.pageX, e.pageY, hasMoveCallback);
      },
          setPointerPosition = function setPointerPosition(pointerX, pointerY, invokeOnMove) {
        var dragTolerance = 1 - self.dragResistance,
            edgeTolerance = 1 - self.edgeResistance,
            prevPointerX = self.pointerX,
            prevPointerY = self.pointerY,
            prevStartElementY = startElementY,
            prevX = self.x,
            prevY = self.y,
            prevEndX = self.endX,
            prevEndY = self.endY,
            prevEndRotation = self.endRotation,
            prevDirty = dirty,
            xChange,
            yChange,
            x,
            y,
            dif,
            temp;
        self.pointerX = pointerX;
        self.pointerY = pointerY;

        if (isFixed) {
          pointerX -= _getDocScrollLeft$1(ownerDoc);
          pointerY -= _getDocScrollTop$1(ownerDoc);
        }

        if (rotationMode) {
          y = Math.atan2(rotationOrigin.y - pointerY, pointerX - rotationOrigin.x) * _RAD2DEG$2;
          dif = self.y - y;

          if (dif > 180) {
            startElementY -= 360;
            self.y = y;
          } else if (dif < -180) {
            startElementY += 360;
            self.y = y;
          }

          if (self.x !== startElementX || Math.abs(startElementY - y) > minimumMovement) {
            self.y = y;
            x = startElementX + (startElementY - y) * dragTolerance;
          } else {
            x = startElementX;
          }
        } else {
          if (matrix) {
            temp = pointerX * matrix.a + pointerY * matrix.c + matrix.e;
            pointerY = pointerX * matrix.b + pointerY * matrix.d + matrix.f;
            pointerX = temp;
          }

          yChange = pointerY - startPointerY;
          xChange = pointerX - startPointerX;

          if (yChange < minimumMovement && yChange > -minimumMovement) {
            yChange = 0;
          }

          if (xChange < minimumMovement && xChange > -minimumMovement) {
            xChange = 0;
          }

          if ((self.lockAxis || self.lockedAxis) && (xChange || yChange)) {
            temp = self.lockedAxis;

            if (!temp) {
              self.lockedAxis = temp = allowX && Math.abs(xChange) > Math.abs(yChange) ? "y" : allowY ? "x" : null;

              if (temp && _isFunction$1(self.vars.onLockAxis)) {
                self.vars.onLockAxis.call(self, self.pointerEvent);
              }
            }

            if (temp === "y") {
              yChange = 0;
            } else if (temp === "x") {
              xChange = 0;
            }
          }

          x = _round$3(startElementX + xChange * dragTolerance);
          y = _round$3(startElementY + yChange * dragTolerance);
        }

        if ((snapX || snapY || snapXY) && (self.x !== x || self.y !== y && !rotationMode)) {
          if (snapXY) {
            _temp1.x = x;
            _temp1.y = y;
            temp = snapXY(_temp1);
            x = _round$3(temp.x);
            y = _round$3(temp.y);
          }

          if (snapX) {
            x = _round$3(snapX(x));
          }

          if (snapY) {
            y = _round$3(snapY(y));
          }
        }

        if (hasBounds) {
          if (x > maxX) {
            x = maxX + Math.round((x - maxX) * edgeTolerance);
          } else if (x < minX) {
            x = minX + Math.round((x - minX) * edgeTolerance);
          }

          if (!rotationMode) {
            if (y > maxY) {
              y = Math.round(maxY + (y - maxY) * edgeTolerance);
            } else if (y < minY) {
              y = Math.round(minY + (y - minY) * edgeTolerance);
            }
          }
        }

        if (self.x !== x || self.y !== y && !rotationMode) {
          if (rotationMode) {
            self.endRotation = self.x = self.endX = x;
            dirty = true;
          } else {
            if (allowY) {
              self.y = self.endY = y;
              dirty = true;
            }

            if (allowX) {
              self.x = self.endX = x;
              dirty = true;
            }
          }

          if (!invokeOnMove || _dispatchEvent(self, "move", "onMove") !== false) {
            if (!self.isDragging && self.isPressed) {
              self.isDragging = dragged = true;

              _dispatchEvent(self, "dragstart", "onDragStart");
            }
          } else {
            self.pointerX = prevPointerX;
            self.pointerY = prevPointerY;
            startElementY = prevStartElementY;
            self.x = prevX;
            self.y = prevY;
            self.endX = prevEndX;
            self.endY = prevEndY;
            self.endRotation = prevEndRotation;
            dirty = prevDirty;
          }
        }
      },
          onRelease = function onRelease(e, force) {
        if (!enabled || !self.isPressed || e && touchID != null && !force && (e.pointerId && e.pointerId !== touchID && e.target !== target || e.changedTouches && !_hasTouchID(e.changedTouches, touchID))) {
          isPreventingDefault && e && enabled && _preventDefault(e);
          return;
        }

        self.isPressed = false;
        var originalEvent = e,
            wasDragging = self.isDragging,
            isContextMenuRelease = self.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2),
            placeholderDelayedCall = gsap$2.delayedCall(0.001, removePlaceholder),
            touches,
            i,
            syntheticEvent,
            eventTarget,
            syntheticClick;

        if (touchEventTarget) {
          _removeListener(touchEventTarget, "touchend", onRelease);

          _removeListener(touchEventTarget, "touchmove", onMove);

          _removeListener(touchEventTarget, "touchcancel", onRelease);

          _removeListener(ownerDoc, "touchstart", _onMultiTouchDocument);
        } else {
          _removeListener(ownerDoc, "mousemove", onMove);
        }

        _removeListener(_win$3, "touchforcechange", _preventDefault);

        if (!_supportsPointer || !touchEventTarget) {
          _removeListener(ownerDoc, "mouseup", onRelease);

          e && e.target && _removeListener(e.target, "mouseup", onRelease);
        }

        dirty = false;

        if (wasDragging) {
          dragEndTime = _lastDragTime = _getTime();
          self.isDragging = false;
        }

        _removeFromRenderQueue(render);

        if (isClicking && !isContextMenuRelease) {
          if (e) {
            _removeListener(e.target, "change", onRelease);

            self.pointerEvent = originalEvent;
          }

          _setSelectable(triggers, false);

          _dispatchEvent(self, "release", "onRelease");

          _dispatchEvent(self, "click", "onClick");

          isClicking = false;
          return;
        }

        i = triggers.length;

        while (--i > -1) {
          _setStyle(triggers[i], "cursor", vars.cursor || (vars.cursor !== false ? _defaultCursor : null));
        }

        _dragCount--;

        if (e) {
          touches = e.changedTouches;

          if (touches) {
            e = touches[0];

            if (e !== touch && e.identifier !== touchID) {
              i = touches.length;

              while (--i > -1 && (e = touches[i]).identifier !== touchID && e.target !== target) {}

              if (i < 0 && !force) {
                return;
              }
            }
          }

          self.pointerEvent = originalEvent;
          self.pointerX = e.pageX;
          self.pointerY = e.pageY;
        }

        if (isContextMenuRelease && originalEvent) {
          _preventDefault(originalEvent);

          isPreventingDefault = true;

          _dispatchEvent(self, "release", "onRelease");
        } else if (originalEvent && !wasDragging) {
          isPreventingDefault = false;

          if (interrupted && (vars.snap || vars.bounds)) {
            animate(vars.inertia || vars.throwProps);
          }

          _dispatchEvent(self, "release", "onRelease");

          if ((!_isAndroid || originalEvent.type !== "touchmove") && originalEvent.type.indexOf("cancel") === -1) {
            _dispatchEvent(self, "click", "onClick");

            if (_getTime() - clickTime < 300) {
              _dispatchEvent(self, "doubleclick", "onDoubleClick");
            }

            eventTarget = originalEvent.target || target;
            clickTime = _getTime();

            syntheticClick = function syntheticClick() {
              if (clickTime !== clickDispatch && self.enabled() && !self.isPressed && !originalEvent.defaultPrevented) {
                if (eventTarget.click) {
                  eventTarget.click();
                } else if (ownerDoc.createEvent) {
                  syntheticEvent = ownerDoc.createEvent("MouseEvents");
                  syntheticEvent.initMouseEvent("click", true, true, _win$3, 1, self.pointerEvent.screenX, self.pointerEvent.screenY, self.pointerX, self.pointerY, false, false, false, false, 0, null);
                  eventTarget.dispatchEvent(syntheticEvent);
                }
              }
            };

            if (!_isAndroid && !originalEvent.defaultPrevented) {
              gsap$2.delayedCall(0.05, syntheticClick);
            }
          }
        } else {
          animate(vars.inertia || vars.throwProps);

          if (!self.allowEventDefault && originalEvent && (vars.dragClickables !== false || !isClickable.call(self, originalEvent.target)) && wasDragging && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling === touchDragAxis) && originalEvent.cancelable !== false) {
            isPreventingDefault = true;

            _preventDefault(originalEvent);
          } else {
            isPreventingDefault = false;
          }

          _dispatchEvent(self, "release", "onRelease");
        }

        isTweening() && placeholderDelayedCall.duration(self.tween.duration());
        wasDragging && _dispatchEvent(self, "dragend", "onDragEnd");
        return true;
      },
          updateScroll = function updateScroll(e) {
        if (e && self.isDragging && !scrollProxy) {
          var parent = e.target || target.parentNode,
              deltaX = parent.scrollLeft - parent._gsScrollX,
              deltaY = parent.scrollTop - parent._gsScrollY;

          if (deltaX || deltaY) {
            if (matrix) {
              startPointerX -= deltaX * matrix.a + deltaY * matrix.c;
              startPointerY -= deltaY * matrix.d + deltaX * matrix.b;
            } else {
              startPointerX -= deltaX;
              startPointerY -= deltaY;
            }

            parent._gsScrollX += deltaX;
            parent._gsScrollY += deltaY;
            setPointerPosition(self.pointerX, self.pointerY);
          }
        }
      },
          onClick = function onClick(e) {
        var time = _getTime(),
            recentlyClicked = time - clickTime < 100,
            recentlyDragged = time - dragEndTime < 50,
            alreadyDispatched = recentlyClicked && clickDispatch === clickTime,
            defaultPrevented = self.pointerEvent && self.pointerEvent.defaultPrevented,
            alreadyDispatchedTrusted = recentlyClicked && trustedClickDispatch === clickTime,
            trusted = e.isTrusted || e.isTrusted == null && recentlyClicked && alreadyDispatched;

        if ((alreadyDispatched || recentlyDragged && self.vars.suppressClickOnDrag !== false) && e.stopImmediatePropagation) {
          e.stopImmediatePropagation();
        }

        if (recentlyClicked && !(self.pointerEvent && self.pointerEvent.defaultPrevented) && (!alreadyDispatched || trusted && !alreadyDispatchedTrusted)) {
          if (trusted && alreadyDispatched) {
            trustedClickDispatch = clickTime;
          }

          clickDispatch = clickTime;
          return;
        }

        if (self.isPressed || recentlyDragged || recentlyClicked) {
          if (!trusted || !e.detail || !recentlyClicked || defaultPrevented) {
            _preventDefault(e);
          }
        }

        if (!recentlyClicked && !recentlyDragged && !dragged) {
          e && e.target && (self.pointerEvent = e);

          _dispatchEvent(self, "click", "onClick");
        }
      },
          localizePoint = function localizePoint(p) {
        return matrix ? {
          x: p.x * matrix.a + p.y * matrix.c + matrix.e,
          y: p.x * matrix.b + p.y * matrix.d + matrix.f
        } : {
          x: p.x,
          y: p.y
        };
      };

      old = Draggable.get(target);
      old && old.kill();

      _this2.startDrag = function (event, align) {
        var r1, r2, p1, p2;
        onPress(event || self.pointerEvent, true);

        if (align && !self.hitTest(event || self.pointerEvent)) {
          r1 = _parseRect(event || self.pointerEvent);
          r2 = _parseRect(target);
          p1 = localizePoint({
            x: r1.left + r1.width / 2,
            y: r1.top + r1.height / 2
          });
          p2 = localizePoint({
            x: r2.left + r2.width / 2,
            y: r2.top + r2.height / 2
          });
          startPointerX -= p1.x - p2.x;
          startPointerY -= p1.y - p2.y;
        }

        if (!self.isDragging) {
          self.isDragging = dragged = true;

          _dispatchEvent(self, "dragstart", "onDragStart");
        }
      };

      _this2.drag = onMove;

      _this2.endDrag = function (e) {
        return onRelease(e || self.pointerEvent, true);
      };

      _this2.timeSinceDrag = function () {
        return self.isDragging ? 0 : (_getTime() - dragEndTime) / 1000;
      };

      _this2.timeSinceClick = function () {
        return (_getTime() - clickTime) / 1000;
      };

      _this2.hitTest = function (target, threshold) {
        return Draggable.hitTest(self.target, target, threshold);
      };

      _this2.getDirection = function (from, diagonalThreshold) {
        var mode = from === "velocity" && InertiaPlugin ? from : _isObject$1(from) && !rotationMode ? "element" : "start",
            xChange,
            yChange,
            ratio,
            direction,
            r1,
            r2;

        if (mode === "element") {
          r1 = _parseRect(self.target);
          r2 = _parseRect(from);
        }

        xChange = mode === "start" ? self.x - startElementX : mode === "velocity" ? InertiaPlugin.getVelocity(target, xProp) : r1.left + r1.width / 2 - (r2.left + r2.width / 2);

        if (rotationMode) {
          return xChange < 0 ? "counter-clockwise" : "clockwise";
        } else {
          diagonalThreshold = diagonalThreshold || 2;
          yChange = mode === "start" ? self.y - startElementY : mode === "velocity" ? InertiaPlugin.getVelocity(target, yProp) : r1.top + r1.height / 2 - (r2.top + r2.height / 2);
          ratio = Math.abs(xChange / yChange);
          direction = ratio < 1 / diagonalThreshold ? "" : xChange < 0 ? "left" : "right";

          if (ratio < diagonalThreshold) {
            if (direction !== "") {
              direction += "-";
            }

            direction += yChange < 0 ? "up" : "down";
          }
        }

        return direction;
      };

      _this2.applyBounds = function (newBounds, sticky) {
        var x, y, forceZeroVelocity, e, parent, isRoot;

        if (newBounds && vars.bounds !== newBounds) {
          vars.bounds = newBounds;
          return self.update(true, sticky);
        }

        syncXY(true);
        calculateBounds();

        if (hasBounds && !isTweening()) {
          x = self.x;
          y = self.y;

          if (x > maxX) {
            x = maxX;
          } else if (x < minX) {
            x = minX;
          }

          if (y > maxY) {
            y = maxY;
          } else if (y < minY) {
            y = minY;
          }

          if (self.x !== x || self.y !== y) {
            forceZeroVelocity = true;
            self.x = self.endX = x;

            if (rotationMode) {
              self.endRotation = x;
            } else {
              self.y = self.endY = y;
            }

            dirty = true;
            render(true);

            if (self.autoScroll && !self.isDragging) {
              _recordMaxScrolls(target.parentNode);

              e = target;
              _windowProxy.scrollTop = _win$3.pageYOffset != null ? _win$3.pageYOffset : ownerDoc.documentElement.scrollTop != null ? ownerDoc.documentElement.scrollTop : ownerDoc.body.scrollTop;
              _windowProxy.scrollLeft = _win$3.pageXOffset != null ? _win$3.pageXOffset : ownerDoc.documentElement.scrollLeft != null ? ownerDoc.documentElement.scrollLeft : ownerDoc.body.scrollLeft;

              while (e && !isRoot) {
                isRoot = _isRoot(e.parentNode);
                parent = isRoot ? _windowProxy : e.parentNode;

                if (allowY && parent.scrollTop > parent._gsMaxScrollY) {
                  parent.scrollTop = parent._gsMaxScrollY;
                }

                if (allowX && parent.scrollLeft > parent._gsMaxScrollX) {
                  parent.scrollLeft = parent._gsMaxScrollX;
                }

                e = parent;
              }
            }
          }

          if (self.isThrowing && (forceZeroVelocity || self.endX > maxX || self.endX < minX || self.endY > maxY || self.endY < minY)) {
            animate(vars.inertia || vars.throwProps, forceZeroVelocity);
          }
        }

        return self;
      };

      _this2.update = function (applyBounds, sticky, ignoreExternalChanges) {
        if (sticky && self.isPressed) {
          var m = getGlobalMatrix(target),
              p = innerMatrix.apply({
            x: self.x - startElementX,
            y: self.y - startElementY
          }),
              m2 = getGlobalMatrix(target.parentNode, true);
          m2.apply({
            x: m.e - p.x,
            y: m.f - p.y
          }, p);
          self.x -= p.x - m2.e;
          self.y -= p.y - m2.f;
          render(true);
          recordStartPositions();
        }

        var x = self.x,
            y = self.y;
        updateMatrix(!sticky);

        if (applyBounds) {
          self.applyBounds();
        } else {
          dirty && ignoreExternalChanges && render(true);
          syncXY(true);
        }

        if (sticky) {
          setPointerPosition(self.pointerX, self.pointerY);
          dirty && render(true);
        }

        if (self.isPressed && !sticky && (allowX && Math.abs(x - self.x) > 0.01 || allowY && Math.abs(y - self.y) > 0.01 && !rotationMode)) {
          recordStartPositions();
        }

        if (self.autoScroll) {
          _recordMaxScrolls(target.parentNode, self.isDragging);

          checkAutoScrollBounds = self.isDragging;
          render(true);

          _removeScrollListener(target, updateScroll);

          _addScrollListener(target, updateScroll);
        }

        return self;
      };

      _this2.enable = function (type) {
        var setVars = {
          lazy: true
        },
            id,
            i,
            trigger;

        if (vars.cursor !== false) {
          setVars.cursor = vars.cursor || _defaultCursor;
        }

        if (gsap$2.utils.checkPrefix("touchCallout")) {
          setVars.touchCallout = "none";
        }

        if (type !== "soft") {
          _setTouchActionForAllDescendants(triggers, allowX === allowY ? "none" : vars.allowNativeTouchScrolling && target.scrollHeight === target.clientHeight === (target.scrollWidth === target.clientHeight) || vars.allowEventDefault ? "manipulation" : allowX ? "pan-y" : "pan-x");

          i = triggers.length;

          while (--i > -1) {
            trigger = triggers[i];
            _supportsPointer || _addListener(trigger, "mousedown", onPress);

            _addListener(trigger, "touchstart", onPress);

            _addListener(trigger, "click", onClick, true);

            gsap$2.set(trigger, setVars);

            if (trigger.getBBox && trigger.ownerSVGElement && allowX !== allowY) {
              gsap$2.set(trigger.ownerSVGElement, {
                touchAction: vars.allowNativeTouchScrolling || vars.allowEventDefault ? "manipulation" : allowX ? "pan-y" : "pan-x"
              });
            }

            vars.allowContextMenu || _addListener(trigger, "contextmenu", onContextMenu);
          }

          _setSelectable(triggers, false);
        }

        _addScrollListener(target, updateScroll);

        enabled = true;

        if (InertiaPlugin && type !== "soft") {
          InertiaPlugin.track(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
        }

        target._gsDragID = id = "d" + _lookupCount++;
        _lookup[id] = self;

        if (scrollProxy) {
          scrollProxy.enable();
          scrollProxy.element._gsDragID = id;
        }

        (vars.bounds || rotationMode) && recordStartPositions();
        vars.bounds && self.applyBounds();
        return self;
      };

      _this2.disable = function (type) {
        var dragging = self.isDragging,
            i = triggers.length,
            trigger;

        while (--i > -1) {
          _setStyle(triggers[i], "cursor", null);
        }

        if (type !== "soft") {
          _setTouchActionForAllDescendants(triggers, null);

          i = triggers.length;

          while (--i > -1) {
            trigger = triggers[i];

            _setStyle(trigger, "touchCallout", null);

            _removeListener(trigger, "mousedown", onPress);

            _removeListener(trigger, "touchstart", onPress);

            _removeListener(trigger, "click", onClick, true);

            _removeListener(trigger, "contextmenu", onContextMenu);
          }

          _setSelectable(triggers, true);

          if (touchEventTarget) {
            _removeListener(touchEventTarget, "touchcancel", onRelease);

            _removeListener(touchEventTarget, "touchend", onRelease);

            _removeListener(touchEventTarget, "touchmove", onMove);
          }

          _removeListener(ownerDoc, "mouseup", onRelease);

          _removeListener(ownerDoc, "mousemove", onMove);
        }

        _removeScrollListener(target, updateScroll);

        enabled = false;

        if (InertiaPlugin && type !== "soft") {
          InertiaPlugin.untrack(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
          self.tween && self.kill();
        }

        scrollProxy && scrollProxy.disable();

        _removeFromRenderQueue(render);

        self.isDragging = self.isPressed = isClicking = false;
        dragging && _dispatchEvent(self, "dragend", "onDragEnd");
        return self;
      };

      _this2.enabled = function (value, type) {
        return arguments.length ? value ? self.enable(type) : self.disable(type) : enabled;
      };

      _this2.kill = function () {
        self.isThrowing = false;
        self.tween && self.tween.kill();
        self.disable();
        gsap$2.set(triggers, {
          clearProps: "userSelect"
        });
        delete _lookup[target._gsDragID];
        return self;
      };

      _this2.revert = function () {
        this.kill();
        this.styles && this.styles.revert();
      };

      if (~type.indexOf("scroll")) {
        scrollProxy = _this2.scrollProxy = new ScrollProxy(target, _extend({
          onKill: function onKill() {
            self.isPressed && onRelease(null);
          }
        }, vars));
        target.style.overflowY = allowY && !_isTouchDevice ? "auto" : "hidden";
        target.style.overflowX = allowX && !_isTouchDevice ? "auto" : "hidden";
        target = scrollProxy.content;
      }

      if (rotationMode) {
        killProps.rotation = 1;
      } else {
        if (allowX) {
          killProps[xProp] = 1;
        }

        if (allowY) {
          killProps[yProp] = 1;
        }
      }

      gsCache.force3D = "force3D" in vars ? vars.force3D : true;

      _context$1(_assertThisInitialized(_this2));

      _this2.enable();

      return _this2;
    }

    Draggable.register = function register(core) {
      gsap$2 = core;

      _initCore$2();
    };

    Draggable.create = function create(targets, vars) {
      _coreInitted$2 || _initCore$2(true);
      return _toArray(targets).map(function (target) {
        return new Draggable(target, vars);
      });
    };

    Draggable.get = function get(target) {
      return _lookup[(_toArray(target)[0] || {})._gsDragID];
    };

    Draggable.timeSinceDrag = function timeSinceDrag() {
      return (_getTime() - _lastDragTime) / 1000;
    };

    Draggable.hitTest = function hitTest(obj1, obj2, threshold) {
      if (obj1 === obj2) {
        return false;
      }

      var r1 = _parseRect(obj1),
          r2 = _parseRect(obj2),
          top = r1.top,
          left = r1.left,
          right = r1.right,
          bottom = r1.bottom,
          width = r1.width,
          height = r1.height,
          isOutside = r2.left > right || r2.right < left || r2.top > bottom || r2.bottom < top,
          overlap,
          area,
          isRatio;

      if (isOutside || !threshold) {
        return !isOutside;
      }

      isRatio = (threshold + "").indexOf("%") !== -1;
      threshold = parseFloat(threshold) || 0;
      overlap = {
        left: Math.max(left, r2.left),
        top: Math.max(top, r2.top)
      };
      overlap.width = Math.min(right, r2.right) - overlap.left;
      overlap.height = Math.min(bottom, r2.bottom) - overlap.top;

      if (overlap.width < 0 || overlap.height < 0) {
        return false;
      }

      if (isRatio) {
        threshold *= 0.01;
        area = overlap.width * overlap.height;
        return area >= width * height * threshold || area >= r2.width * r2.height * threshold;
      }

      return overlap.width > threshold && overlap.height > threshold;
    };

    return Draggable;
  }(EventDispatcher);

  _setDefaults$1(Draggable.prototype, {
    pointerX: 0,
    pointerY: 0,
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    isDragging: false,
    isPressed: false
  });

  Draggable.zIndex = 1000;
  Draggable.version = "3.12.1";
  _getGSAP$1() && gsap$2.registerPlugin(Draggable);

  /*!
   * CSSRulePlugin 3.12.1
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */
  var gsap$3,
      _coreInitted$3,
      _doc$4,
      CSSPlugin$1,
      _windowExists$3 = function _windowExists() {
    return typeof window !== "undefined";
  },
      _getGSAP$2 = function _getGSAP() {
    return gsap$3 || _windowExists$3() && (gsap$3 = window.gsap) && gsap$3.registerPlugin && gsap$3;
  },
      _checkRegister = function _checkRegister() {
    if (!_coreInitted$3) {
      _initCore$3();

      if (!CSSPlugin$1) {
        console.warn("Please gsap.registerPlugin(CSSPlugin, CSSRulePlugin)");
      }
    }

    return _coreInitted$3;
  },
      _initCore$3 = function _initCore(core) {
    gsap$3 = core || _getGSAP$2();

    if (_windowExists$3()) {
      _doc$4 = document;
    }

    if (gsap$3) {
      CSSPlugin$1 = gsap$3.plugins.css;

      if (CSSPlugin$1) {
        _coreInitted$3 = 1;
      }
    }
  };

  var CSSRulePlugin = {
    version: "3.12.1",
    name: "cssRule",
    init: function init(target, value, tween, index, targets) {
      if (!_checkRegister() || typeof target.cssText === "undefined") {
        return false;
      }

      var div = target._gsProxy = target._gsProxy || _doc$4.createElement("div");

      this.ss = target;
      this.style = div.style;
      div.style.cssText = target.cssText;
      CSSPlugin$1.prototype.init.call(this, div, value, tween, index, targets);
    },
    render: function render(ratio, data) {
      var pt = data._pt,
          style = data.style,
          ss = data.ss,
          i;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      i = style.length;

      while (--i > -1) {
        ss[style[i]] = style[style[i]];
      }
    },
    getRule: function getRule(selector) {
      _checkRegister();

      var ruleProp = _doc$4.all ? "rules" : "cssRules",
          styleSheets = _doc$4.styleSheets,
          i = styleSheets.length,
          pseudo = selector.charAt(0) === ":",
          j,
          curSS,
          cs,
          a;
      selector = (pseudo ? "" : ",") + selector.split("::").join(":").toLowerCase() + ",";

      if (pseudo) {
        a = [];
      }

      while (i--) {
        try {
          curSS = styleSheets[i][ruleProp];

          if (!curSS) {
            continue;
          }

          j = curSS.length;
        } catch (e) {
          console.warn(e);
          continue;
        }

        while (--j > -1) {
          cs = curSS[j];

          if (cs.selectorText && ("," + cs.selectorText.split("::").join(":").toLowerCase() + ",").indexOf(selector) !== -1) {
            if (pseudo) {
              a.push(cs.style);
            } else {
              return cs.style;
            }
          }
        }
      }

      return a;
    },
    register: _initCore$3
  };
  _getGSAP$2() && gsap$3.registerPlugin(CSSRulePlugin);

  /*!
   * EaselPlugin 3.12.1
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */
  var gsap$4,
      _coreInitted$4,
      _win$4,
      _createJS,
      _ColorFilter,
      _ColorMatrixFilter,
      _colorProps = "redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset".split(","),
      _windowExists$4 = function _windowExists() {
    return typeof window !== "undefined";
  },
      _getGSAP$3 = function _getGSAP() {
    return gsap$4 || _windowExists$4() && (gsap$4 = window.gsap) && gsap$4.registerPlugin && gsap$4;
  },
      _getCreateJS = function _getCreateJS() {
    return _createJS || _win$4 && _win$4.createjs || _win$4 || {};
  },
      _warn$1 = function _warn(message) {
    return console.warn(message);
  },
      _cache = function _cache(target) {
    var b = target.getBounds && target.getBounds();

    if (!b) {
      b = target.nominalBounds || {
        x: 0,
        y: 0,
        width: 100,
        height: 100
      };
      target.setBounds && target.setBounds(b.x, b.y, b.width, b.height);
    }

    target.cache && target.cache(b.x, b.y, b.width, b.height);

    _warn$1("EaselPlugin: for filters to display in EaselJS, you must call the object's cache() method first. GSAP attempted to use the target's getBounds() for the cache but that may not be completely accurate. " + target);
  },
      _parseColorFilter = function _parseColorFilter(target, v, plugin) {
    if (!_ColorFilter) {
      _ColorFilter = _getCreateJS().ColorFilter;

      if (!_ColorFilter) {
        _warn$1("EaselPlugin error: The EaselJS ColorFilter JavaScript file wasn't loaded.");
      }
    }

    var filters = target.filters || [],
        i = filters.length,
        c,
        s,
        e,
        a,
        p,
        pt;

    while (i--) {
      if (filters[i] instanceof _ColorFilter) {
        s = filters[i];
        break;
      }
    }

    if (!s) {
      s = new _ColorFilter();
      filters.push(s);
      target.filters = filters;
    }

    e = s.clone();

    if (v.tint != null) {
      c = gsap$4.utils.splitColor(v.tint);
      a = v.tintAmount != null ? +v.tintAmount : 1;
      e.redOffset = +c[0] * a;
      e.greenOffset = +c[1] * a;
      e.blueOffset = +c[2] * a;
      e.redMultiplier = e.greenMultiplier = e.blueMultiplier = 1 - a;
    } else {
      for (p in v) {
        if (p !== "exposure") if (p !== "brightness") {
          e[p] = +v[p];
        }
      }
    }

    if (v.exposure != null) {
      e.redOffset = e.greenOffset = e.blueOffset = 255 * (+v.exposure - 1);
      e.redMultiplier = e.greenMultiplier = e.blueMultiplier = 1;
    } else if (v.brightness != null) {
      a = +v.brightness - 1;
      e.redOffset = e.greenOffset = e.blueOffset = a > 0 ? a * 255 : 0;
      e.redMultiplier = e.greenMultiplier = e.blueMultiplier = 1 - Math.abs(a);
    }

    i = 8;

    while (i--) {
      p = _colorProps[i];

      if (s[p] !== e[p]) {
        pt = plugin.add(s, p, s[p], e[p], 0, 0, 0, 0, 0, 1);

        if (pt) {
          pt.op = "easel_colorFilter";
        }
      }
    }

    plugin._props.push("easel_colorFilter");

    if (!target.cacheID) {
      _cache(target);
    }
  },
      _idMatrix = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
      _lumR = 0.212671,
      _lumG = 0.715160,
      _lumB = 0.072169,
      _applyMatrix = function _applyMatrix(m, m2) {
    if (!(m instanceof Array) || !(m2 instanceof Array)) {
      return m2;
    }

    var temp = [],
        i = 0,
        z = 0,
        y,
        x;

    for (y = 0; y < 4; y++) {
      for (x = 0; x < 5; x++) {
        z = x === 4 ? m[i + 4] : 0;
        temp[i + x] = m[i] * m2[x] + m[i + 1] * m2[x + 5] + m[i + 2] * m2[x + 10] + m[i + 3] * m2[x + 15] + z;
      }

      i += 5;
    }

    return temp;
  },
      _setSaturation = function _setSaturation(m, n) {
    if (isNaN(n)) {
      return m;
    }

    var inv = 1 - n,
        r = inv * _lumR,
        g = inv * _lumG,
        b = inv * _lumB;
    return _applyMatrix([r + n, g, b, 0, 0, r, g + n, b, 0, 0, r, g, b + n, 0, 0, 0, 0, 0, 1, 0], m);
  },
      _colorize = function _colorize(m, color, amount) {
    if (isNaN(amount)) {
      amount = 1;
    }

    var c = gsap$4.utils.splitColor(color),
        r = c[0] / 255,
        g = c[1] / 255,
        b = c[2] / 255,
        inv = 1 - amount;
    return _applyMatrix([inv + amount * r * _lumR, amount * r * _lumG, amount * r * _lumB, 0, 0, amount * g * _lumR, inv + amount * g * _lumG, amount * g * _lumB, 0, 0, amount * b * _lumR, amount * b * _lumG, inv + amount * b * _lumB, 0, 0, 0, 0, 0, 1, 0], m);
  },
      _setHue = function _setHue(m, n) {
    if (isNaN(n)) {
      return m;
    }

    n *= Math.PI / 180;
    var c = Math.cos(n),
        s = Math.sin(n);
    return _applyMatrix([_lumR + c * (1 - _lumR) + s * -_lumR, _lumG + c * -_lumG + s * -_lumG, _lumB + c * -_lumB + s * (1 - _lumB), 0, 0, _lumR + c * -_lumR + s * 0.143, _lumG + c * (1 - _lumG) + s * 0.14, _lumB + c * -_lumB + s * -0.283, 0, 0, _lumR + c * -_lumR + s * -(1 - _lumR), _lumG + c * -_lumG + s * _lumG, _lumB + c * (1 - _lumB) + s * _lumB, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], m);
  },
      _setContrast = function _setContrast(m, n) {
    if (isNaN(n)) {
      return m;
    }

    n += 0.01;
    return _applyMatrix([n, 0, 0, 0, 128 * (1 - n), 0, n, 0, 0, 128 * (1 - n), 0, 0, n, 0, 128 * (1 - n), 0, 0, 0, 1, 0], m);
  },
      _parseColorMatrixFilter = function _parseColorMatrixFilter(target, v, plugin) {
    if (!_ColorMatrixFilter) {
      _ColorMatrixFilter = _getCreateJS().ColorMatrixFilter;

      if (!_ColorMatrixFilter) {
        _warn$1("EaselPlugin: The EaselJS ColorMatrixFilter JavaScript file wasn't loaded.");
      }
    }

    var filters = target.filters || [],
        i = filters.length,
        matrix,
        startMatrix,
        s,
        pg;

    while (--i > -1) {
      if (filters[i] instanceof _ColorMatrixFilter) {
        s = filters[i];
        break;
      }
    }

    if (!s) {
      s = new _ColorMatrixFilter(_idMatrix.slice());
      filters.push(s);
      target.filters = filters;
    }

    startMatrix = s.matrix;
    matrix = _idMatrix.slice();

    if (v.colorize != null) {
      matrix = _colorize(matrix, v.colorize, Number(v.colorizeAmount));
    }

    if (v.contrast != null) {
      matrix = _setContrast(matrix, Number(v.contrast));
    }

    if (v.hue != null) {
      matrix = _setHue(matrix, Number(v.hue));
    }

    if (v.saturation != null) {
      matrix = _setSaturation(matrix, Number(v.saturation));
    }

    i = matrix.length;

    while (--i > -1) {
      if (matrix[i] !== startMatrix[i]) {
        pg = plugin.add(startMatrix, i, startMatrix[i], matrix[i], 0, 0, 0, 0, 0, 1);

        if (pg) {
          pg.op = "easel_colorMatrixFilter";
        }
      }
    }

    plugin._props.push("easel_colorMatrixFilter");

    if (!target.cacheID) {
      _cache();
    }

    plugin._matrix = startMatrix;
  },
      _initCore$4 = function _initCore(core) {
    gsap$4 = core || _getGSAP$3();

    if (_windowExists$4()) {
      _win$4 = window;
    }

    if (gsap$4) {
      _coreInitted$4 = 1;
    }
  };

  var EaselPlugin = {
    version: "3.12.1",
    name: "easel",
    init: function init(target, value, tween, index, targets) {
      if (!_coreInitted$4) {
        _initCore$4();

        if (!gsap$4) {
          _warn$1("Please gsap.registerPlugin(EaselPlugin)");
        }
      }

      this.target = target;
      var p, pt, tint, colorMatrix, end, labels, i;

      for (p in value) {
        end = value[p];

        if (p === "colorFilter" || p === "tint" || p === "tintAmount" || p === "exposure" || p === "brightness") {
          if (!tint) {
            _parseColorFilter(target, value.colorFilter || value, this);

            tint = true;
          }
        } else if (p === "saturation" || p === "contrast" || p === "hue" || p === "colorize" || p === "colorizeAmount") {
          if (!colorMatrix) {
            _parseColorMatrixFilter(target, value.colorMatrixFilter || value, this);

            colorMatrix = true;
          }
        } else if (p === "frame") {
          if (typeof end === "string" && end.charAt(1) !== "=" && (labels = target.labels)) {
            for (i = 0; i < labels.length; i++) {
              if (labels[i].label === end) {
                end = labels[i].position;
              }
            }
          }

          pt = this.add(target, "gotoAndStop", target.currentFrame, end, index, targets, Math.round, 0, 0, 1);

          if (pt) {
            pt.op = p;
          }
        } else if (target[p] != null) {
          this.add(target, p, "get", end);
        }
      }
    },
    render: function render(ratio, data) {
      var pt = data._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      if (data.target.cacheID) {
        data.target.updateCache();
      }
    },
    register: _initCore$4
  };

  EaselPlugin.registerCreateJS = function (createjs) {
    _createJS = createjs;
  };

  _getGSAP$3() && gsap$4.registerPlugin(EaselPlugin);

  /*!
   * EasePack 3.12.1
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */
  var gsap$5,
      _registerEase,
      _getGSAP$4 = function _getGSAP() {
    return gsap$5 || typeof window !== "undefined" && (gsap$5 = window.gsap) && gsap$5.registerPlugin && gsap$5;
  },
      _boolean = function _boolean(value, defaultValue) {
    return !!(typeof value === "undefined" ? defaultValue : value && !~(value + "").indexOf("false"));
  },
      _initCore$5 = function _initCore(core) {
    gsap$5 = core || _getGSAP$4();

    if (gsap$5) {
      _registerEase = gsap$5.registerEase;

      var eases = gsap$5.parseEase(),
          createConfig = function createConfig(ease) {
        return function (ratio) {
          var y = 0.5 + ratio / 2;

          ease.config = function (p) {
            return ease(2 * (1 - p) * p * y + p * p);
          };
        };
      },
          p;

      for (p in eases) {
        if (!eases[p].config) {
          createConfig(eases[p]);
        }
      }

      _registerEase("slow", SlowMo);

      _registerEase("expoScale", ExpoScaleEase);

      _registerEase("rough", RoughEase);

      for (p in EasePack) {
        p !== "version" && gsap$5.core.globals(p, EasePack[p]);
      }
    }
  },
      _createSlowMo = function _createSlowMo(linearRatio, power, yoyoMode) {
    linearRatio = Math.min(1, linearRatio || 0.7);

    var pow = linearRatio < 1 ? power || power === 0 ? power : 0.7 : 0,
        p1 = (1 - linearRatio) / 2,
        p3 = p1 + linearRatio,
        calcEnd = _boolean(yoyoMode);

    return function (p) {
      var r = p + (0.5 - p) * pow;
      return p < p1 ? calcEnd ? 1 - (p = 1 - p / p1) * p : r - (p = 1 - p / p1) * p * p * p * r : p > p3 ? calcEnd ? p === 1 ? 0 : 1 - (p = (p - p3) / p1) * p : r + (p - r) * (p = (p - p3) / p1) * p * p * p : calcEnd ? 1 : r;
    };
  },
      _createExpoScale = function _createExpoScale(start, end, ease) {
    var p1 = Math.log(end / start),
        p2 = end - start;
    ease && (ease = gsap$5.parseEase(ease));
    return function (p) {
      return (start * Math.exp(p1 * (ease ? ease(p) : p)) - start) / p2;
    };
  },
      EasePoint = function EasePoint(time, value, next) {
    this.t = time;
    this.v = value;

    if (next) {
      this.next = next;
      next.prev = this;
      this.c = next.v - value;
      this.gap = next.t - time;
    }
  },
      _createRoughEase = function _createRoughEase(vars) {
    if (typeof vars !== "object") {
      vars = {
        points: +vars || 20
      };
    }

    var taper = vars.taper || "none",
        a = [],
        cnt = 0,
        points = (+vars.points || 20) | 0,
        i = points,
        randomize = _boolean(vars.randomize, true),
        clamp = _boolean(vars.clamp),
        template = gsap$5 ? gsap$5.parseEase(vars.template) : 0,
        strength = (+vars.strength || 1) * 0.4,
        x,
        y,
        bump,
        invX,
        obj,
        pnt,
        recent;

    while (--i > -1) {
      x = randomize ? Math.random() : 1 / points * i;
      y = template ? template(x) : x;

      if (taper === "none") {
        bump = strength;
      } else if (taper === "out") {
        invX = 1 - x;
        bump = invX * invX * strength;
      } else if (taper === "in") {
        bump = x * x * strength;
      } else if (x < 0.5) {
        invX = x * 2;
        bump = invX * invX * 0.5 * strength;
      } else {
        invX = (1 - x) * 2;
        bump = invX * invX * 0.5 * strength;
      }

      if (randomize) {
        y += Math.random() * bump - bump * 0.5;
      } else if (i % 2) {
        y += bump * 0.5;
      } else {
        y -= bump * 0.5;
      }

      if (clamp) {
        if (y > 1) {
          y = 1;
        } else if (y < 0) {
          y = 0;
        }
      }

      a[cnt++] = {
        x: x,
        y: y
      };
    }

    a.sort(function (a, b) {
      return a.x - b.x;
    });
    pnt = new EasePoint(1, 1, null);
    i = points;

    while (i--) {
      obj = a[i];
      pnt = new EasePoint(obj.x, obj.y, pnt);
    }

    recent = new EasePoint(0, 0, pnt.t ? pnt : pnt.next);
    return function (p) {
      var pnt = recent;

      if (p > pnt.t) {
        while (pnt.next && p >= pnt.t) {
          pnt = pnt.next;
        }

        pnt = pnt.prev;
      } else {
        while (pnt.prev && p <= pnt.t) {
          pnt = pnt.prev;
        }
      }

      recent = pnt;
      return pnt.v + (p - pnt.t) / pnt.gap * pnt.c;
    };
  };

  var SlowMo = _createSlowMo(0.7);
  SlowMo.ease = SlowMo;
  SlowMo.config = _createSlowMo;
  var ExpoScaleEase = _createExpoScale(1, 2);
  ExpoScaleEase.config = _createExpoScale;
  var RoughEase = _createRoughEase();
  RoughEase.ease = RoughEase;
  RoughEase.config = _createRoughEase;
  var EasePack = {
    SlowMo: SlowMo,
    RoughEase: RoughEase,
    ExpoScaleEase: ExpoScaleEase
  };

  for (var p in EasePack) {
    EasePack[p].register = _initCore$5;
    EasePack[p].version = "3.12.1";
  }

  _getGSAP$4() && gsap$5.registerPlugin(SlowMo);

  /*!
   * Flip 3.12.1
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */

  var _id = 1,
      _toArray$1,
      gsap$6,
      _batch,
      _batchAction,
      _body$2,
      _closestTenth,
      _getStyleSaver$2,
      _forEachBatch = function _forEachBatch(batch, name) {
    return batch.actions.forEach(function (a) {
      return a.vars[name] && a.vars[name](a);
    });
  },
      _batchLookup = {},
      _RAD2DEG$3 = 180 / Math.PI,
      _DEG2RAD$2 = Math.PI / 180,
      _emptyObj = {},
      _dashedNameLookup = {},
      _memoizedRemoveProps = {},
      _listToArray = function _listToArray(list) {
    return typeof list === "string" ? list.split(" ").join("").split(",") : list;
  },
      _callbacks = _listToArray("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),
      _removeProps = _listToArray("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),
      _getEl = function _getEl(target) {
    return _toArray$1(target)[0] || console.warn("Element not found:", target);
  },
      _round$4 = function _round(value) {
    return Math.round(value * 10000) / 10000 || 0;
  },
      _toggleClass = function _toggleClass(targets, className, action) {
    return targets.forEach(function (el) {
      return el.classList[action](className);
    });
  },
      _reserved = {
    zIndex: 1,
    kill: 1,
    simple: 1,
    spin: 1,
    clearProps: 1,
    targets: 1,
    toggleClass: 1,
    onComplete: 1,
    onUpdate: 1,
    onInterrupt: 1,
    onStart: 1,
    delay: 1,
    repeat: 1,
    repeatDelay: 1,
    yoyo: 1,
    scale: 1,
    fade: 1,
    absolute: 1,
    props: 1,
    onEnter: 1,
    onLeave: 1,
    custom: 1,
    paused: 1,
    nested: 1,
    prune: 1,
    absoluteOnLeave: 1
  },
      _fitReserved = {
    zIndex: 1,
    simple: 1,
    clearProps: 1,
    scale: 1,
    absolute: 1,
    fitChild: 1,
    getVars: 1,
    props: 1
  },
      _camelToDashed = function _camelToDashed(p) {
    return p.replace(/([A-Z])/g, "-$1").toLowerCase();
  },
      _copy$1 = function _copy(obj, exclude) {
    var result = {},
        p;

    for (p in obj) {
      exclude[p] || (result[p] = obj[p]);
    }

    return result;
  },
      _memoizedProps = {},
      _memoizeProps = function _memoizeProps(props) {
    var p = _memoizedProps[props] = _listToArray(props);

    _memoizedRemoveProps[props] = p.concat(_removeProps);
    return p;
  },
      _getInverseGlobalMatrix = function _getInverseGlobalMatrix(el) {
    var cache = el._gsap || gsap$6.core.getCache(el);

    if (cache.gmCache === gsap$6.ticker.frame) {
      return cache.gMatrix;
    }

    cache.gmCache = gsap$6.ticker.frame;
    return cache.gMatrix = getGlobalMatrix(el, true, false, true);
  },
      _getDOMDepth = function _getDOMDepth(el, invert, level) {
    if (level === void 0) {
      level = 0;
    }

    var parent = el.parentNode,
        inc = 1000 * Math.pow(10, level) * (invert ? -1 : 1),
        l = invert ? -inc * 900 : 0;

    while (el) {
      l += inc;
      el = el.previousSibling;
    }

    return parent ? l + _getDOMDepth(parent, invert, level + 1) : l;
  },
      _orderByDOMDepth = function _orderByDOMDepth(comps, invert, isElStates) {
    comps.forEach(function (comp) {
      return comp.d = _getDOMDepth(isElStates ? comp.element : comp.t, invert);
    });
    comps.sort(function (c1, c2) {
      return c1.d - c2.d;
    });
    return comps;
  },
      _recordInlineStyles = function _recordInlineStyles(elState, props) {
    var style = elState.element.style,
        a = elState.css = elState.css || [],
        i = props.length,
        p,
        v;

    while (i--) {
      p = props[i];
      v = style[p] || style.getPropertyValue(p);
      a.push(v ? p : _dashedNameLookup[p] || (_dashedNameLookup[p] = _camelToDashed(p)), v);
    }

    return style;
  },
      _applyInlineStyles = function _applyInlineStyles(state) {
    var css = state.css,
        style = state.element.style,
        i = 0;
    state.cache.uncache = 1;

    for (; i < css.length; i += 2) {
      css[i + 1] ? style[css[i]] = css[i + 1] : style.removeProperty(css[i]);
    }

    if (!css[css.indexOf("transform") + 1] && style.translate) {
      style.removeProperty("translate");
      style.removeProperty("scale");
      style.removeProperty("rotate");
    }
  },
      _setFinalStates = function _setFinalStates(comps, onlyTransforms) {
    comps.forEach(function (c) {
      return c.a.cache.uncache = 1;
    });
    onlyTransforms || comps.finalStates.forEach(_applyInlineStyles);
  },
      _absoluteProps = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),
      _makeAbsolute = function _makeAbsolute(elState, fallbackNode, ignoreBatch) {
    var element = elState.element,
        width = elState.width,
        height = elState.height,
        uncache = elState.uncache,
        getProp = elState.getProp,
        style = element.style,
        i = 4,
        result,
        displayIsNone,
        cs;
    typeof fallbackNode !== "object" && (fallbackNode = elState);

    if (_batch && ignoreBatch !== 1) {
      _batch._abs.push({
        t: element,
        b: elState,
        a: elState,
        sd: 0
      });

      _batch._final.push(function () {
        return (elState.cache.uncache = 1) && _applyInlineStyles(elState);
      });

      return element;
    }

    displayIsNone = getProp("display") === "none";

    if (!elState.isVisible || displayIsNone) {
      displayIsNone && (_recordInlineStyles(elState, ["display"]).display = fallbackNode.display);
      elState.matrix = fallbackNode.matrix;
      elState.width = width = elState.width || fallbackNode.width;
      elState.height = height = elState.height || fallbackNode.height;
    }

    _recordInlineStyles(elState, _absoluteProps);

    cs = window.getComputedStyle(element);

    while (i--) {
      style[_absoluteProps[i]] = cs[_absoluteProps[i]];
    }

    style.gridArea = "1 / 1 / 1 / 1";
    style.transition = "none";
    style.position = "absolute";
    style.width = width + "px";
    style.height = height + "px";
    style.top || (style.top = "0px");
    style.left || (style.left = "0px");

    if (uncache) {
      result = new ElementState(element);
    } else {
      result = _copy$1(elState, _emptyObj);
      result.position = "absolute";

      if (elState.simple) {
        var bounds = element.getBoundingClientRect();
        result.matrix = new Matrix2D(1, 0, 0, 1, bounds.left + _getDocScrollLeft(), bounds.top + _getDocScrollTop());
      } else {
        result.matrix = getGlobalMatrix(element, false, false, true);
      }
    }

    result = _fit(result, elState, true);
    elState.x = _closestTenth(result.x, 0.01);
    elState.y = _closestTenth(result.y, 0.01);
    return element;
  },
      _filterComps = function _filterComps(comps, targets) {
    if (targets !== true) {
      targets = _toArray$1(targets);
      comps = comps.filter(function (c) {
        if (targets.indexOf((c.sd < 0 ? c.b : c.a).element) !== -1) {
          return true;
        } else {
          c.t._gsap.renderTransform(1);

          if (c.b.isVisible) {
            c.t.style.width = c.b.width + "px";
            c.t.style.height = c.b.height + "px";
          }
        }
      });
    }

    return comps;
  },
      _makeCompsAbsolute = function _makeCompsAbsolute(comps) {
    return _orderByDOMDepth(comps, true).forEach(function (c) {
      return (c.a.isVisible || c.b.isVisible) && _makeAbsolute(c.sd < 0 ? c.b : c.a, c.b, 1);
    });
  },
      _findElStateInState = function _findElStateInState(state, other) {
    return other && state.idLookup[_parseElementState(other).id] || state.elementStates[0];
  },
      _parseElementState = function _parseElementState(elOrNode, props, simple, other) {
    return elOrNode instanceof ElementState ? elOrNode : elOrNode instanceof FlipState ? _findElStateInState(elOrNode, other) : new ElementState(typeof elOrNode === "string" ? _getEl(elOrNode) || console.warn(elOrNode + " not found") : elOrNode, props, simple);
  },
      _recordProps = function _recordProps(elState, props) {
    var getProp = gsap$6.getProperty(elState.element, null, "native"),
        obj = elState.props = {},
        i = props.length;

    while (i--) {
      obj[props[i]] = (getProp(props[i]) + "").trim();
    }

    obj.zIndex && (obj.zIndex = parseFloat(obj.zIndex) || 0);
    return elState;
  },
      _applyProps = function _applyProps(element, props) {
    var style = element.style || element,
        p;

    for (p in props) {
      style[p] = props[p];
    }
  },
      _getID = function _getID(el) {
    var id = el.getAttribute("data-flip-id");
    id || el.setAttribute("data-flip-id", id = "auto-" + _id++);
    return id;
  },
      _elementsFromElementStates = function _elementsFromElementStates(elStates) {
    return elStates.map(function (elState) {
      return elState.element;
    });
  },
      _handleCallback = function _handleCallback(callback, elStates, tl) {
    return callback && elStates.length && tl.add(callback(_elementsFromElementStates(elStates), tl, new FlipState(elStates, 0, true)), 0);
  },
      _fit = function _fit(fromState, toState, scale, applyProps, fitChild, vars) {
    var element = fromState.element,
        cache = fromState.cache,
        parent = fromState.parent,
        x = fromState.x,
        y = fromState.y,
        width = toState.width,
        height = toState.height,
        scaleX = toState.scaleX,
        scaleY = toState.scaleY,
        rotation = toState.rotation,
        bounds = toState.bounds,
        styles = vars && _getStyleSaver$2 && _getStyleSaver$2(element, "transform"),
        dimensionState = fromState,
        _toState$matrix = toState.matrix,
        e = _toState$matrix.e,
        f = _toState$matrix.f,
        deep = fromState.bounds.width !== bounds.width || fromState.bounds.height !== bounds.height || fromState.scaleX !== scaleX || fromState.scaleY !== scaleY || fromState.rotation !== rotation,
        simple = !deep && fromState.simple && toState.simple && !fitChild,
        skewX,
        fromPoint,
        toPoint,
        getProp,
        parentMatrix,
        matrix,
        bbox;

    if (simple || !parent) {
      scaleX = scaleY = 1;
      rotation = skewX = 0;
    } else {
      parentMatrix = _getInverseGlobalMatrix(parent);
      matrix = parentMatrix.clone().multiply(toState.ctm ? toState.matrix.clone().multiply(toState.ctm) : toState.matrix);
      rotation = _round$4(Math.atan2(matrix.b, matrix.a) * _RAD2DEG$3);
      skewX = _round$4(Math.atan2(matrix.c, matrix.d) * _RAD2DEG$3 + rotation) % 360;
      scaleX = Math.sqrt(Math.pow(matrix.a, 2) + Math.pow(matrix.b, 2));
      scaleY = Math.sqrt(Math.pow(matrix.c, 2) + Math.pow(matrix.d, 2)) * Math.cos(skewX * _DEG2RAD$2);

      if (fitChild) {
        fitChild = _toArray$1(fitChild)[0];
        getProp = gsap$6.getProperty(fitChild);
        bbox = fitChild.getBBox && typeof fitChild.getBBox === "function" && fitChild.getBBox();
        dimensionState = {
          scaleX: getProp("scaleX"),
          scaleY: getProp("scaleY"),
          width: bbox ? bbox.width : Math.ceil(parseFloat(getProp("width", "px"))),
          height: bbox ? bbox.height : parseFloat(getProp("height", "px"))
        };
      }

      cache.rotation = rotation + "deg";
      cache.skewX = skewX + "deg";
    }

    if (scale) {
      scaleX *= width === dimensionState.width || !dimensionState.width ? 1 : width / dimensionState.width;
      scaleY *= height === dimensionState.height || !dimensionState.height ? 1 : height / dimensionState.height;
      cache.scaleX = scaleX;
      cache.scaleY = scaleY;
    } else {
      width = _closestTenth(width * scaleX / dimensionState.scaleX, 0);
      height = _closestTenth(height * scaleY / dimensionState.scaleY, 0);
      element.style.width = width + "px";
      element.style.height = height + "px";
    }

    applyProps && _applyProps(element, toState.props);

    if (simple || !parent) {
      x += e - fromState.matrix.e;
      y += f - fromState.matrix.f;
    } else if (deep || parent !== toState.parent) {
      cache.renderTransform(1, cache);
      matrix = getGlobalMatrix(fitChild || element, false, false, true);
      fromPoint = parentMatrix.apply({
        x: matrix.e,
        y: matrix.f
      });
      toPoint = parentMatrix.apply({
        x: e,
        y: f
      });
      x += toPoint.x - fromPoint.x;
      y += toPoint.y - fromPoint.y;
    } else {
      parentMatrix.e = parentMatrix.f = 0;
      toPoint = parentMatrix.apply({
        x: e - fromState.matrix.e,
        y: f - fromState.matrix.f
      });
      x += toPoint.x;
      y += toPoint.y;
    }

    x = _closestTenth(x, 0.02);
    y = _closestTenth(y, 0.02);

    if (vars && !(vars instanceof ElementState)) {
      styles && styles.revert();
    } else {
      cache.x = x + "px";
      cache.y = y + "px";
      cache.renderTransform(1, cache);
    }

    if (vars) {
      vars.x = x;
      vars.y = y;
      vars.rotation = rotation;
      vars.skewX = skewX;

      if (scale) {
        vars.scaleX = scaleX;
        vars.scaleY = scaleY;
      } else {
        vars.width = width;
        vars.height = height;
      }
    }

    return vars || cache;
  },
      _parseState = function _parseState(targetsOrState, vars) {
    return targetsOrState instanceof FlipState ? targetsOrState : new FlipState(targetsOrState, vars);
  },
      _getChangingElState = function _getChangingElState(toState, fromState, id) {
    var to1 = toState.idLookup[id],
        to2 = toState.alt[id];
    return to2.isVisible && (!(fromState.getElementState(to2.element) || to2).isVisible || !to1.isVisible) ? to2 : to1;
  },
      _bodyMetrics = [],
      _bodyProps = "width,height,overflowX,overflowY".split(","),
      _bodyLocked,
      _lockBodyScroll = function _lockBodyScroll(lock) {
    if (lock !== _bodyLocked) {
      var s = _body$2.style,
          w = _body$2.clientWidth === window.outerWidth,
          h = _body$2.clientHeight === window.outerHeight,
          i = 4;

      if (lock && (w || h)) {
        while (i--) {
          _bodyMetrics[i] = s[_bodyProps[i]];
        }

        if (w) {
          s.width = _body$2.clientWidth + "px";
          s.overflowY = "hidden";
        }

        if (h) {
          s.height = _body$2.clientHeight + "px";
          s.overflowX = "hidden";
        }

        _bodyLocked = lock;
      } else if (_bodyLocked) {
        while (i--) {
          _bodyMetrics[i] ? s[_bodyProps[i]] = _bodyMetrics[i] : s.removeProperty(_camelToDashed(_bodyProps[i]));
        }

        _bodyLocked = lock;
      }
    }
  },
      _fromTo = function _fromTo(fromState, toState, vars, relative) {
    fromState instanceof FlipState && toState instanceof FlipState || console.warn("Not a valid state object.");
    vars = vars || {};

    var _vars = vars,
        clearProps = _vars.clearProps,
        onEnter = _vars.onEnter,
        onLeave = _vars.onLeave,
        absolute = _vars.absolute,
        absoluteOnLeave = _vars.absoluteOnLeave,
        custom = _vars.custom,
        delay = _vars.delay,
        paused = _vars.paused,
        repeat = _vars.repeat,
        repeatDelay = _vars.repeatDelay,
        yoyo = _vars.yoyo,
        toggleClass = _vars.toggleClass,
        nested = _vars.nested,
        _zIndex = _vars.zIndex,
        scale = _vars.scale,
        fade = _vars.fade,
        stagger = _vars.stagger,
        spin = _vars.spin,
        prune = _vars.prune,
        props = ("props" in vars ? vars : fromState).props,
        tweenVars = _copy$1(vars, _reserved),
        animation = gsap$6.timeline({
      delay: delay,
      paused: paused,
      repeat: repeat,
      repeatDelay: repeatDelay,
      yoyo: yoyo,
      data: "isFlip"
    }),
        remainingProps = tweenVars,
        entering = [],
        leaving = [],
        comps = [],
        swapOutTargets = [],
        spinNum = spin === true ? 1 : spin || 0,
        spinFunc = typeof spin === "function" ? spin : function () {
      return spinNum;
    },
        interrupted = fromState.interrupted || toState.interrupted,
        addFunc = animation[relative !== 1 ? "to" : "from"],
        v,
        p,
        endTime,
        i,
        el,
        comp,
        state,
        targets,
        finalStates,
        fromNode,
        toNode,
        run,
        a,
        b;

    for (p in toState.idLookup) {
      toNode = !toState.alt[p] ? toState.idLookup[p] : _getChangingElState(toState, fromState, p);
      el = toNode.element;
      fromNode = fromState.idLookup[p];
      fromState.alt[p] && el === fromNode.element && (fromState.alt[p].isVisible || !toNode.isVisible) && (fromNode = fromState.alt[p]);

      if (fromNode) {
        comp = {
          t: el,
          b: fromNode,
          a: toNode,
          sd: fromNode.element === el ? 0 : toNode.isVisible ? 1 : -1
        };
        comps.push(comp);

        if (comp.sd) {
          if (comp.sd < 0) {
            comp.b = toNode;
            comp.a = fromNode;
          }

          interrupted && _recordInlineStyles(comp.b, props ? _memoizedRemoveProps[props] : _removeProps);
          fade && comps.push(comp.swap = {
            t: fromNode.element,
            b: comp.b,
            a: comp.a,
            sd: -comp.sd,
            swap: comp
          });
        }

        el._flip = fromNode.element._flip = _batch ? _batch.timeline : animation;
      } else if (toNode.isVisible) {
        comps.push({
          t: el,
          b: _copy$1(toNode, {
            isVisible: 1
          }),
          a: toNode,
          sd: 0,
          entering: 1
        });
        el._flip = _batch ? _batch.timeline : animation;
      }
    }

    props && (_memoizedProps[props] || _memoizeProps(props)).forEach(function (p) {
      return tweenVars[p] = function (i) {
        return comps[i].a.props[p];
      };
    });
    comps.finalStates = finalStates = [];

    run = function run() {
      _orderByDOMDepth(comps);

      _lockBodyScroll(true);

      for (i = 0; i < comps.length; i++) {
        comp = comps[i];
        a = comp.a;
        b = comp.b;

        if (prune && !a.isDifferent(b) && !comp.entering) {
          comps.splice(i--, 1);
        } else {
          el = comp.t;
          nested && !(comp.sd < 0) && i && (a.matrix = getGlobalMatrix(el, false, false, true));

          if (b.isVisible && a.isVisible) {
            if (comp.sd < 0) {
              state = new ElementState(el, props, fromState.simple);

              _fit(state, a, scale, 0, 0, state);

              state.matrix = getGlobalMatrix(el, false, false, true);
              state.css = comp.b.css;
              comp.a = a = state;
              fade && (el.style.opacity = interrupted ? b.opacity : a.opacity);
              stagger && swapOutTargets.push(el);
            } else if (comp.sd > 0 && fade) {
              el.style.opacity = interrupted ? a.opacity - b.opacity : "0";
            }

            _fit(a, b, scale, props);
          } else if (b.isVisible !== a.isVisible) {
            if (!b.isVisible) {
              a.isVisible && entering.push(a);
              comps.splice(i--, 1);
            } else if (!a.isVisible) {
              b.css = a.css;
              leaving.push(b);
              comps.splice(i--, 1);
              absolute && nested && _fit(a, b, scale, props);
            }
          }

          if (!scale) {
            el.style.maxWidth = Math.max(a.width, b.width) + "px";
            el.style.maxHeight = Math.max(a.height, b.height) + "px";
            el.style.minWidth = Math.min(a.width, b.width) + "px";
            el.style.minHeight = Math.min(a.height, b.height) + "px";
          }

          nested && toggleClass && el.classList.add(toggleClass);
        }

        finalStates.push(a);
      }

      var classTargets;

      if (toggleClass) {
        classTargets = finalStates.map(function (s) {
          return s.element;
        });
        nested && classTargets.forEach(function (e) {
          return e.classList.remove(toggleClass);
        });
      }

      _lockBodyScroll(false);

      if (scale) {
        tweenVars.scaleX = function (i) {
          return comps[i].a.scaleX;
        };

        tweenVars.scaleY = function (i) {
          return comps[i].a.scaleY;
        };
      } else {
        tweenVars.width = function (i) {
          return comps[i].a.width + "px";
        };

        tweenVars.height = function (i) {
          return comps[i].a.height + "px";
        };

        tweenVars.autoRound = vars.autoRound || false;
      }

      tweenVars.x = function (i) {
        return comps[i].a.x + "px";
      };

      tweenVars.y = function (i) {
        return comps[i].a.y + "px";
      };

      tweenVars.rotation = function (i) {
        return comps[i].a.rotation + (spin ? spinFunc(i, targets[i], targets) * 360 : 0);
      };

      tweenVars.skewX = function (i) {
        return comps[i].a.skewX;
      };

      targets = comps.map(function (c) {
        return c.t;
      });

      if (_zIndex || _zIndex === 0) {
        tweenVars.modifiers = {
          zIndex: function zIndex() {
            return _zIndex;
          }
        };
        tweenVars.zIndex = _zIndex;
        tweenVars.immediateRender = vars.immediateRender !== false;
      }

      fade && (tweenVars.opacity = function (i) {
        return comps[i].sd < 0 ? 0 : comps[i].sd > 0 ? comps[i].a.opacity : "+=0";
      });

      if (swapOutTargets.length) {
        stagger = gsap$6.utils.distribute(stagger);
        var dummyArray = targets.slice(swapOutTargets.length);

        tweenVars.stagger = function (i, el) {
          return stagger(~swapOutTargets.indexOf(el) ? targets.indexOf(comps[i].swap.t) : i, el, dummyArray);
        };
      }

      _callbacks.forEach(function (name) {
        return vars[name] && animation.eventCallback(name, vars[name], vars[name + "Params"]);
      });

      if (custom && targets.length) {
        remainingProps = _copy$1(tweenVars, _reserved);

        if ("scale" in custom) {
          custom.scaleX = custom.scaleY = custom.scale;
          delete custom.scale;
        }

        for (p in custom) {
          v = _copy$1(custom[p], _fitReserved);
          v[p] = tweenVars[p];
          !("duration" in v) && "duration" in tweenVars && (v.duration = tweenVars.duration);
          v.stagger = tweenVars.stagger;
          addFunc.call(animation, targets, v, 0);
          delete remainingProps[p];
        }
      }

      if (targets.length || leaving.length || entering.length) {
        toggleClass && animation.add(function () {
          return _toggleClass(classTargets, toggleClass, animation._zTime < 0 ? "remove" : "add");
        }, 0) && !paused && _toggleClass(classTargets, toggleClass, "add");
        targets.length && addFunc.call(animation, targets, remainingProps, 0);
      }

      _handleCallback(onEnter, entering, animation);

      _handleCallback(onLeave, leaving, animation);

      var batchTl = _batch && _batch.timeline;

      if (batchTl) {
        batchTl.add(animation, 0);

        _batch._final.push(function () {
          return _setFinalStates(comps, !clearProps);
        });
      }

      endTime = animation.duration();
      animation.call(function () {
        var forward = animation.time() >= endTime;
        forward && !batchTl && _setFinalStates(comps, !clearProps);
        toggleClass && _toggleClass(classTargets, toggleClass, forward ? "remove" : "add");
      });
    };

    absoluteOnLeave && (absolute = comps.filter(function (comp) {
      return !comp.sd && !comp.a.isVisible && comp.b.isVisible;
    }).map(function (comp) {
      return comp.a.element;
    }));

    if (_batch) {
      var _batch$_abs;

      absolute && (_batch$_abs = _batch._abs).push.apply(_batch$_abs, _filterComps(comps, absolute));

      _batch._run.push(run);
    } else {
      absolute && _makeCompsAbsolute(_filterComps(comps, absolute));
      run();
    }

    var anim = _batch ? _batch.timeline : animation;

    anim.revert = function () {
      return _killFlip(anim, 1, 1);
    };

    return anim;
  },
      _interrupt$1 = function _interrupt(tl) {
    tl.vars.onInterrupt && tl.vars.onInterrupt.apply(tl, tl.vars.onInterruptParams || []);
    tl.getChildren(true, false, true).forEach(_interrupt);
  },
      _killFlip = function _killFlip(tl, action, force) {
    if (tl && tl.progress() < 1 && (!tl.paused() || force)) {
      if (action) {
        _interrupt$1(tl);

        action < 2 && tl.progress(1);
        tl.kill();
      }

      return true;
    }
  },
      _createLookup = function _createLookup(state) {
    var lookup = state.idLookup = {},
        alt = state.alt = {},
        elStates = state.elementStates,
        i = elStates.length,
        elState;

    while (i--) {
      elState = elStates[i];
      lookup[elState.id] ? alt[elState.id] = elState : lookup[elState.id] = elState;
    }
  };

  var FlipState = function () {
    function FlipState(targets, vars, targetsAreElementStates) {
      this.props = vars && vars.props;
      this.simple = !!(vars && vars.simple);

      if (targetsAreElementStates) {
        this.targets = _elementsFromElementStates(targets);
        this.elementStates = targets;

        _createLookup(this);
      } else {
        this.targets = _toArray$1(targets);
        var soft = vars && (vars.kill === false || vars.batch && !vars.kill);
        _batch && !soft && _batch._kill.push(this);
        this.update(soft || !!_batch);
      }
    }

    var _proto = FlipState.prototype;

    _proto.update = function update(soft) {
      var _this = this;

      this.elementStates = this.targets.map(function (el) {
        return new ElementState(el, _this.props, _this.simple);
      });

      _createLookup(this);

      this.interrupt(soft);
      this.recordInlineStyles();
      return this;
    };

    _proto.clear = function clear() {
      this.targets.length = this.elementStates.length = 0;

      _createLookup(this);

      return this;
    };

    _proto.fit = function fit(state, scale, nested) {
      var elStatesInOrder = _orderByDOMDepth(this.elementStates.slice(0), false, true),
          toElStates = (state || this).idLookup,
          i = 0,
          fromNode,
          toNode;

      for (; i < elStatesInOrder.length; i++) {
        fromNode = elStatesInOrder[i];
        nested && (fromNode.matrix = getGlobalMatrix(fromNode.element, false, false, true));
        toNode = toElStates[fromNode.id];
        toNode && _fit(fromNode, toNode, scale, true, 0, fromNode);
        fromNode.matrix = getGlobalMatrix(fromNode.element, false, false, true);
      }

      return this;
    };

    _proto.getProperty = function getProperty(element, property) {
      var es = this.getElementState(element) || _emptyObj;

      return (property in es ? es : es.props || _emptyObj)[property];
    };

    _proto.add = function add(state) {
      var i = state.targets.length,
          lookup = this.idLookup,
          alt = this.alt,
          index,
          es,
          es2;

      while (i--) {
        es = state.elementStates[i];
        es2 = lookup[es.id];

        if (es2 && (es.element === es2.element || alt[es.id] && alt[es.id].element === es.element)) {
          index = this.elementStates.indexOf(es.element === es2.element ? es2 : alt[es.id]);
          this.targets.splice(index, 1, state.targets[i]);
          this.elementStates.splice(index, 1, es);
        } else {
          this.targets.push(state.targets[i]);
          this.elementStates.push(es);
        }
      }

      state.interrupted && (this.interrupted = true);
      state.simple || (this.simple = false);

      _createLookup(this);

      return this;
    };

    _proto.compare = function compare(state) {
      var l1 = state.idLookup,
          l2 = this.idLookup,
          unchanged = [],
          changed = [],
          enter = [],
          leave = [],
          targets = [],
          a1 = state.alt,
          a2 = this.alt,
          place = function place(s1, s2, el) {
        return (s1.isVisible !== s2.isVisible ? s1.isVisible ? enter : leave : s1.isVisible ? changed : unchanged).push(el) && targets.push(el);
      },
          placeIfDoesNotExist = function placeIfDoesNotExist(s1, s2, el) {
        return targets.indexOf(el) < 0 && place(s1, s2, el);
      },
          s1,
          s2,
          p,
          el,
          s1Alt,
          s2Alt,
          c1,
          c2;

      for (p in l1) {
        s1Alt = a1[p];
        s2Alt = a2[p];
        s1 = !s1Alt ? l1[p] : _getChangingElState(state, this, p);
        el = s1.element;
        s2 = l2[p];

        if (s2Alt) {
          c2 = s2.isVisible || !s2Alt.isVisible && el === s2.element ? s2 : s2Alt;
          c1 = s1Alt && !s1.isVisible && !s1Alt.isVisible && c2.element === s1Alt.element ? s1Alt : s1;

          if (c1.isVisible && c2.isVisible && c1.element !== c2.element) {
            (c1.isDifferent(c2) ? changed : unchanged).push(c1.element, c2.element);
            targets.push(c1.element, c2.element);
          } else {
            place(c1, c2, c1.element);
          }

          s1Alt && c1.element === s1Alt.element && (s1Alt = l1[p]);
          placeIfDoesNotExist(c1.element !== s2.element && s1Alt ? s1Alt : c1, s2, s2.element);
          placeIfDoesNotExist(s1Alt && s1Alt.element === s2Alt.element ? s1Alt : c1, s2Alt, s2Alt.element);
          s1Alt && placeIfDoesNotExist(s1Alt, s2Alt.element === s1Alt.element ? s2Alt : s2, s1Alt.element);
        } else {
          !s2 ? enter.push(el) : !s2.isDifferent(s1) ? unchanged.push(el) : place(s1, s2, el);
          s1Alt && placeIfDoesNotExist(s1Alt, s2, s1Alt.element);
        }
      }

      for (p in l2) {
        if (!l1[p]) {
          leave.push(l2[p].element);
          a2[p] && leave.push(a2[p].element);
        }
      }

      return {
        changed: changed,
        unchanged: unchanged,
        enter: enter,
        leave: leave
      };
    };

    _proto.recordInlineStyles = function recordInlineStyles() {
      var props = _memoizedRemoveProps[this.props] || _removeProps,
          i = this.elementStates.length;

      while (i--) {
        _recordInlineStyles(this.elementStates[i], props);
      }
    };

    _proto.interrupt = function interrupt(soft) {
      var _this2 = this;

      var timelines = [];
      this.targets.forEach(function (t) {
        var tl = t._flip,
            foundInProgress = _killFlip(tl, soft ? 0 : 1);

        soft && foundInProgress && timelines.indexOf(tl) < 0 && tl.add(function () {
          return _this2.updateVisibility();
        });
        foundInProgress && timelines.push(tl);
      });
      !soft && timelines.length && this.updateVisibility();
      this.interrupted || (this.interrupted = !!timelines.length);
    };

    _proto.updateVisibility = function updateVisibility() {
      this.elementStates.forEach(function (es) {
        var b = es.element.getBoundingClientRect();
        es.isVisible = !!(b.width || b.height || b.top || b.left);
        es.uncache = 1;
      });
    };

    _proto.getElementState = function getElementState(element) {
      return this.elementStates[this.targets.indexOf(_getEl(element))];
    };

    _proto.makeAbsolute = function makeAbsolute() {
      return _orderByDOMDepth(this.elementStates.slice(0), true, true).map(_makeAbsolute);
    };

    return FlipState;
  }();

  var ElementState = function () {
    function ElementState(element, props, simple) {
      this.element = element;
      this.update(props, simple);
    }

    var _proto2 = ElementState.prototype;

    _proto2.isDifferent = function isDifferent(state) {
      var b1 = this.bounds,
          b2 = state.bounds;
      return b1.top !== b2.top || b1.left !== b2.left || b1.width !== b2.width || b1.height !== b2.height || !this.matrix.equals(state.matrix) || this.opacity !== state.opacity || this.props && state.props && JSON.stringify(this.props) !== JSON.stringify(state.props);
    };

    _proto2.update = function update(props, simple) {
      var self = this,
          element = self.element,
          getProp = gsap$6.getProperty(element),
          cache = gsap$6.core.getCache(element),
          bounds = element.getBoundingClientRect(),
          bbox = element.getBBox && typeof element.getBBox === "function" && element.nodeName.toLowerCase() !== "svg" && element.getBBox(),
          m = simple ? new Matrix2D(1, 0, 0, 1, bounds.left + _getDocScrollLeft(), bounds.top + _getDocScrollTop()) : getGlobalMatrix(element, false, false, true);
      self.getProp = getProp;
      self.element = element;
      self.id = _getID(element);
      self.matrix = m;
      self.cache = cache;
      self.bounds = bounds;
      self.isVisible = !!(bounds.width || bounds.height || bounds.left || bounds.top);
      self.display = getProp("display");
      self.position = getProp("position");
      self.parent = element.parentNode;
      self.x = getProp("x");
      self.y = getProp("y");
      self.scaleX = cache.scaleX;
      self.scaleY = cache.scaleY;
      self.rotation = getProp("rotation");
      self.skewX = getProp("skewX");
      self.opacity = getProp("opacity");
      self.width = bbox ? bbox.width : _closestTenth(getProp("width", "px"), 0.04);
      self.height = bbox ? bbox.height : _closestTenth(getProp("height", "px"), 0.04);
      props && _recordProps(self, _memoizedProps[props] || _memoizeProps(props));
      self.ctm = element.getCTM && element.nodeName.toLowerCase() === "svg" && _getCTM(element).inverse();
      self.simple = simple || _round$4(m.a) === 1 && !_round$4(m.b) && !_round$4(m.c) && _round$4(m.d) === 1;
      self.uncache = 0;
    };

    return ElementState;
  }();

  var FlipAction = function () {
    function FlipAction(vars, batch) {
      this.vars = vars;
      this.batch = batch;
      this.states = [];
      this.timeline = batch.timeline;
    }

    var _proto3 = FlipAction.prototype;

    _proto3.getStateById = function getStateById(id) {
      var i = this.states.length;

      while (i--) {
        if (this.states[i].idLookup[id]) {
          return this.states[i];
        }
      }
    };

    _proto3.kill = function kill() {
      this.batch.remove(this);
    };

    return FlipAction;
  }();

  var FlipBatch = function () {
    function FlipBatch(id) {
      this.id = id;
      this.actions = [];
      this._kill = [];
      this._final = [];
      this._abs = [];
      this._run = [];
      this.data = {};
      this.state = new FlipState();
      this.timeline = gsap$6.timeline();
    }

    var _proto4 = FlipBatch.prototype;

    _proto4.add = function add(config) {
      var result = this.actions.filter(function (action) {
        return action.vars === config;
      });

      if (result.length) {
        return result[0];
      }

      result = new FlipAction(typeof config === "function" ? {
        animate: config
      } : config, this);
      this.actions.push(result);
      return result;
    };

    _proto4.remove = function remove(action) {
      var i = this.actions.indexOf(action);
      i >= 0 && this.actions.splice(i, 1);
      return this;
    };

    _proto4.getState = function getState(merge) {
      var _this3 = this;

      var prevBatch = _batch,
          prevAction = _batchAction;
      _batch = this;
      this.state.clear();
      this._kill.length = 0;
      this.actions.forEach(function (action) {
        if (action.vars.getState) {
          action.states.length = 0;
          _batchAction = action;
          action.state = action.vars.getState(action);
        }

        merge && action.states.forEach(function (s) {
          return _this3.state.add(s);
        });
      });
      _batchAction = prevAction;
      _batch = prevBatch;
      this.killConflicts();
      return this;
    };

    _proto4.animate = function animate() {
      var _this4 = this;

      var prevBatch = _batch,
          tl = this.timeline,
          i = this.actions.length,
          finalStates,
          endTime;
      _batch = this;
      tl.clear();
      this._abs.length = this._final.length = this._run.length = 0;
      this.actions.forEach(function (a) {
        a.vars.animate && a.vars.animate(a);
        var onEnter = a.vars.onEnter,
            onLeave = a.vars.onLeave,
            targets = a.targets,
            s,
            result;

        if (targets && targets.length && (onEnter || onLeave)) {
          s = new FlipState();
          a.states.forEach(function (state) {
            return s.add(state);
          });
          result = s.compare(Flip.getState(targets));
          result.enter.length && onEnter && onEnter(result.enter);
          result.leave.length && onLeave && onLeave(result.leave);
        }
      });

      _makeCompsAbsolute(this._abs);

      this._run.forEach(function (f) {
        return f();
      });

      endTime = tl.duration();
      finalStates = this._final.slice(0);
      tl.add(function () {
        if (endTime <= tl.time()) {
          finalStates.forEach(function (f) {
            return f();
          });

          _forEachBatch(_this4, "onComplete");
        }
      });
      _batch = prevBatch;

      while (i--) {
        this.actions[i].vars.once && this.actions[i].kill();
      }

      _forEachBatch(this, "onStart");

      tl.restart();
      return this;
    };

    _proto4.loadState = function loadState(done) {
      done || (done = function done() {
        return 0;
      });
      var queue = [];
      this.actions.forEach(function (c) {
        if (c.vars.loadState) {
          var i,
              f = function f(targets) {
            targets && (c.targets = targets);
            i = queue.indexOf(f);

            if (~i) {
              queue.splice(i, 1);
              queue.length || done();
            }
          };

          queue.push(f);
          c.vars.loadState(f);
        }
      });
      queue.length || done();
      return this;
    };

    _proto4.setState = function setState() {
      this.actions.forEach(function (c) {
        return c.targets = c.vars.setState && c.vars.setState(c);
      });
      return this;
    };

    _proto4.killConflicts = function killConflicts(soft) {
      this.state.interrupt(soft);

      this._kill.forEach(function (state) {
        return state.interrupt(soft);
      });

      return this;
    };

    _proto4.run = function run(skipGetState, merge) {
      var _this5 = this;

      if (this !== _batch) {
        skipGetState || this.getState(merge);
        this.loadState(function () {
          if (!_this5._killed) {
            _this5.setState();

            _this5.animate();
          }
        });
      }

      return this;
    };

    _proto4.clear = function clear(stateOnly) {
      this.state.clear();
      stateOnly || (this.actions.length = 0);
    };

    _proto4.getStateById = function getStateById(id) {
      var i = this.actions.length,
          s;

      while (i--) {
        s = this.actions[i].getStateById(id);

        if (s) {
          return s;
        }
      }

      return this.state.idLookup[id] && this.state;
    };

    _proto4.kill = function kill() {
      this._killed = 1;
      this.clear();
      delete _batchLookup[this.id];
    };

    return FlipBatch;
  }();

  var Flip = function () {
    function Flip() {}

    Flip.getState = function getState(targets, vars) {
      var state = _parseState(targets, vars);

      _batchAction && _batchAction.states.push(state);
      vars && vars.batch && Flip.batch(vars.batch).state.add(state);
      return state;
    };

    Flip.from = function from(state, vars) {
      vars = vars || {};
      "clearProps" in vars || (vars.clearProps = true);
      return _fromTo(state, _parseState(vars.targets || state.targets, {
        props: vars.props || state.props,
        simple: vars.simple,
        kill: !!vars.kill
      }), vars, -1);
    };

    Flip.to = function to(state, vars) {
      return _fromTo(state, _parseState(vars.targets || state.targets, {
        props: vars.props || state.props,
        simple: vars.simple,
        kill: !!vars.kill
      }), vars, 1);
    };

    Flip.fromTo = function fromTo(fromState, toState, vars) {
      return _fromTo(fromState, toState, vars);
    };

    Flip.fit = function fit(fromEl, toEl, vars) {
      var v = vars ? _copy$1(vars, _fitReserved) : {},
          _ref = vars || v,
          absolute = _ref.absolute,
          scale = _ref.scale,
          getVars = _ref.getVars,
          props = _ref.props,
          runBackwards = _ref.runBackwards,
          onComplete = _ref.onComplete,
          simple = _ref.simple,
          fitChild = vars && vars.fitChild && _getEl(vars.fitChild),
          before = _parseElementState(toEl, props, simple, fromEl),
          after = _parseElementState(fromEl, 0, simple, before),
          inlineProps = props ? _memoizedRemoveProps[props] : _removeProps;

      props && _applyProps(v, before.props);

      if (runBackwards) {
        _recordInlineStyles(after, inlineProps);

        "immediateRender" in v || (v.immediateRender = true);

        v.onComplete = function () {
          _applyInlineStyles(after);

          onComplete && onComplete.apply(this, arguments);
        };
      }

      absolute && _makeAbsolute(after, before);
      v = _fit(after, before, scale || fitChild, props, fitChild, v.duration || getVars ? v : 0);
      return getVars ? v : v.duration ? gsap$6.to(after.element, v) : null;
    };

    Flip.makeAbsolute = function makeAbsolute(targetsOrStates, vars) {
      return (targetsOrStates instanceof FlipState ? targetsOrStates : new FlipState(targetsOrStates, vars)).makeAbsolute();
    };

    Flip.batch = function batch(id) {
      id || (id = "default");
      return _batchLookup[id] || (_batchLookup[id] = new FlipBatch(id));
    };

    Flip.killFlipsOf = function killFlipsOf(targets, complete) {
      (targets instanceof FlipState ? targets.targets : _toArray$1(targets)).forEach(function (t) {
        return t && _killFlip(t._flip, complete !== false ? 1 : 2);
      });
    };

    Flip.isFlipping = function isFlipping(target) {
      var f = Flip.getByTarget(target);
      return !!f && f.isActive();
    };

    Flip.getByTarget = function getByTarget(target) {
      return (_getEl(target) || _emptyObj)._flip;
    };

    Flip.getElementState = function getElementState(target, props) {
      return new ElementState(_getEl(target), props);
    };

    Flip.convertCoordinates = function convertCoordinates(fromElement, toElement, point) {
      var m = getGlobalMatrix(toElement, true, true).multiply(getGlobalMatrix(fromElement));
      return point ? m.apply(point) : m;
    };

    Flip.register = function register(core) {
      _body$2 = typeof document !== "undefined" && document.body;

      if (_body$2) {
        gsap$6 = core;

        _setDoc(_body$2);

        _toArray$1 = gsap$6.utils.toArray;
        _getStyleSaver$2 = gsap$6.core.getStyleSaver;
        var snap = gsap$6.utils.snap(0.1);

        _closestTenth = function _closestTenth(value, add) {
          return snap(parseFloat(value) + add);
        };
      }
    };

    return Flip;
  }();
  Flip.version = "3.12.1";
  typeof window !== "undefined" && window.gsap && window.gsap.registerPlugin(Flip);

  /*!
   * MotionPathPlugin 3.12.1
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */

  var _xProps = "x,translateX,left,marginLeft,xPercent".split(","),
      _yProps = "y,translateY,top,marginTop,yPercent".split(","),
      _DEG2RAD$3 = Math.PI / 180,
      gsap$7,
      PropTween$1,
      _getUnit,
      _toArray$2,
      _getStyleSaver$3,
      _reverting$2,
      _getGSAP$5 = function _getGSAP() {
    return gsap$7 || typeof window !== "undefined" && (gsap$7 = window.gsap) && gsap$7.registerPlugin && gsap$7;
  },
      _populateSegmentFromArray = function _populateSegmentFromArray(segment, values, property, mode) {
    var l = values.length,
        si = mode === 2 ? 0 : mode,
        i = 0,
        v;

    for (; i < l; i++) {
      segment[si] = v = parseFloat(values[i][property]);
      mode === 2 && (segment[si + 1] = 0);
      si += 2;
    }

    return segment;
  },
      _getPropNum = function _getPropNum(target, prop, unit) {
    return parseFloat(target._gsap.get(target, prop, unit || "px")) || 0;
  },
      _relativize = function _relativize(segment) {
    var x = segment[0],
        y = segment[1],
        i;

    for (i = 2; i < segment.length; i += 2) {
      x = segment[i] += x;
      y = segment[i + 1] += y;
    }
  },
      _segmentToRawPath = function _segmentToRawPath(plugin, segment, target, x, y, slicer, vars, unitX, unitY) {
    if (vars.type === "cubic") {
      segment = [segment];
    } else {
      vars.fromCurrent !== false && segment.unshift(_getPropNum(target, x, unitX), y ? _getPropNum(target, y, unitY) : 0);
      vars.relative && _relativize(segment);
      var pointFunc = y ? pointsToSegment : flatPointsToSegment;
      segment = [pointFunc(segment, vars.curviness)];
    }

    segment = slicer(_align(segment, target, vars));

    _addDimensionalPropTween(plugin, target, x, segment, "x", unitX);

    y && _addDimensionalPropTween(plugin, target, y, segment, "y", unitY);
    return cacheRawPathMeasurements(segment, vars.resolution || (vars.curviness === 0 ? 20 : 12));
  },
      _emptyFunc$2 = function _emptyFunc(v) {
    return v;
  },
      _numExp$2 = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,
      _originToPoint = function _originToPoint(element, origin, parentMatrix) {
    var m = getGlobalMatrix(element),
        x = 0,
        y = 0,
        svg;

    if ((element.tagName + "").toLowerCase() === "svg") {
      svg = element.viewBox.baseVal;
      svg.width || (svg = {
        width: +element.getAttribute("width"),
        height: +element.getAttribute("height")
      });
    } else {
      svg = origin && element.getBBox && element.getBBox();
    }

    if (origin && origin !== "auto") {
      x = origin.push ? origin[0] * (svg ? svg.width : element.offsetWidth || 0) : origin.x;
      y = origin.push ? origin[1] * (svg ? svg.height : element.offsetHeight || 0) : origin.y;
    }

    return parentMatrix.apply(x || y ? m.apply({
      x: x,
      y: y
    }) : {
      x: m.e,
      y: m.f
    });
  },
      _getAlignMatrix = function _getAlignMatrix(fromElement, toElement, fromOrigin, toOrigin) {
    var parentMatrix = getGlobalMatrix(fromElement.parentNode, true, true),
        m = parentMatrix.clone().multiply(getGlobalMatrix(toElement)),
        fromPoint = _originToPoint(fromElement, fromOrigin, parentMatrix),
        _originToPoint2 = _originToPoint(toElement, toOrigin, parentMatrix),
        x = _originToPoint2.x,
        y = _originToPoint2.y,
        p;

    m.e = m.f = 0;

    if (toOrigin === "auto" && toElement.getTotalLength && toElement.tagName.toLowerCase() === "path") {
      p = toElement.getAttribute("d").match(_numExp$2) || [];
      p = m.apply({
        x: +p[0],
        y: +p[1]
      });
      x += p.x;
      y += p.y;
    }

    if (p) {
      p = m.apply(toElement.getBBox());
      x -= p.x;
      y -= p.y;
    }

    m.e = x - fromPoint.x;
    m.f = y - fromPoint.y;
    return m;
  },
      _align = function _align(rawPath, target, _ref) {
    var align = _ref.align,
        matrix = _ref.matrix,
        offsetX = _ref.offsetX,
        offsetY = _ref.offsetY,
        alignOrigin = _ref.alignOrigin;

    var x = rawPath[0][0],
        y = rawPath[0][1],
        curX = _getPropNum(target, "x"),
        curY = _getPropNum(target, "y"),
        alignTarget,
        m,
        p;

    if (!rawPath || !rawPath.length) {
      return getRawPath("M0,0L0,0");
    }

    if (align) {
      if (align === "self" || (alignTarget = _toArray$2(align)[0] || target) === target) {
        transformRawPath(rawPath, 1, 0, 0, 1, curX - x, curY - y);
      } else {
        if (alignOrigin && alignOrigin[2] !== false) {
          gsap$7.set(target, {
            transformOrigin: alignOrigin[0] * 100 + "% " + alignOrigin[1] * 100 + "%"
          });
        } else {
          alignOrigin = [_getPropNum(target, "xPercent") / -100, _getPropNum(target, "yPercent") / -100];
        }

        m = _getAlignMatrix(target, alignTarget, alignOrigin, "auto");
        p = m.apply({
          x: x,
          y: y
        });
        transformRawPath(rawPath, m.a, m.b, m.c, m.d, curX + m.e - (p.x - m.e), curY + m.f - (p.y - m.f));
      }
    }

    if (matrix) {
      transformRawPath(rawPath, matrix.a, matrix.b, matrix.c, matrix.d, matrix.e, matrix.f);
    } else if (offsetX || offsetY) {
      transformRawPath(rawPath, 1, 0, 0, 1, offsetX || 0, offsetY || 0);
    }

    return rawPath;
  },
      _addDimensionalPropTween = function _addDimensionalPropTween(plugin, target, property, rawPath, pathProperty, forceUnit) {
    var cache = target._gsap,
        harness = cache.harness,
        alias = harness && harness.aliases && harness.aliases[property],
        prop = alias && alias.indexOf(",") < 0 ? alias : property,
        pt = plugin._pt = new PropTween$1(plugin._pt, target, prop, 0, 0, _emptyFunc$2, 0, cache.set(target, prop, plugin));
    pt.u = _getUnit(cache.get(target, prop, forceUnit)) || 0;
    pt.path = rawPath;
    pt.pp = pathProperty;

    plugin._props.push(prop);
  },
      _sliceModifier = function _sliceModifier(start, end) {
    return function (rawPath) {
      return start || end !== 1 ? sliceRawPath(rawPath, start, end) : rawPath;
    };
  };

  var MotionPathPlugin = {
    version: "3.12.1",
    name: "motionPath",
    register: function register(core, Plugin, propTween) {
      gsap$7 = core;
      _getUnit = gsap$7.utils.getUnit;
      _toArray$2 = gsap$7.utils.toArray;
      _getStyleSaver$3 = gsap$7.core.getStyleSaver;

      _reverting$2 = gsap$7.core.reverting || function () {};

      PropTween$1 = propTween;
    },
    init: function init(target, vars, tween) {
      if (!gsap$7) {
        console.warn("Please gsap.registerPlugin(MotionPathPlugin)");
        return false;
      }

      if (!(typeof vars === "object" && !vars.style) || !vars.path) {
        vars = {
          path: vars
        };
      }

      var rawPaths = [],
          _vars = vars,
          path = _vars.path,
          autoRotate = _vars.autoRotate,
          unitX = _vars.unitX,
          unitY = _vars.unitY,
          x = _vars.x,
          y = _vars.y,
          firstObj = path[0],
          slicer = _sliceModifier(vars.start, "end" in vars ? vars.end : 1),
          rawPath,
          p;

      this.rawPaths = rawPaths;
      this.target = target;
      this.tween = tween;
      this.styles = _getStyleSaver$3 && _getStyleSaver$3(target, "transform");

      if (this.rotate = autoRotate || autoRotate === 0) {
        this.rOffset = parseFloat(autoRotate) || 0;
        this.radians = !!vars.useRadians;
        this.rProp = vars.rotation || "rotation";
        this.rSet = target._gsap.set(target, this.rProp, this);
        this.ru = _getUnit(target._gsap.get(target, this.rProp)) || 0;
      }

      if (Array.isArray(path) && !("closed" in path) && typeof firstObj !== "number") {
        for (p in firstObj) {
          if (!x && ~_xProps.indexOf(p)) {
            x = p;
          } else if (!y && ~_yProps.indexOf(p)) {
            y = p;
          }
        }

        if (x && y) {
          rawPaths.push(_segmentToRawPath(this, _populateSegmentFromArray(_populateSegmentFromArray([], path, x, 0), path, y, 1), target, x, y, slicer, vars, unitX || _getUnit(path[0][x]), unitY || _getUnit(path[0][y])));
        } else {
          x = y = 0;
        }

        for (p in firstObj) {
          p !== x && p !== y && rawPaths.push(_segmentToRawPath(this, _populateSegmentFromArray([], path, p, 2), target, p, 0, slicer, vars, _getUnit(path[0][p])));
        }
      } else {
        rawPath = slicer(_align(getRawPath(vars.path), target, vars));
        cacheRawPathMeasurements(rawPath, vars.resolution);
        rawPaths.push(rawPath);

        _addDimensionalPropTween(this, target, vars.x || "x", rawPath, "x", vars.unitX || "px");

        _addDimensionalPropTween(this, target, vars.y || "y", rawPath, "y", vars.unitY || "px");
      }
    },
    render: function render(ratio, data) {
      var rawPaths = data.rawPaths,
          i = rawPaths.length,
          pt = data._pt;

      if (data.tween._time || !_reverting$2()) {
        if (ratio > 1) {
          ratio = 1;
        } else if (ratio < 0) {
          ratio = 0;
        }

        while (i--) {
          getPositionOnPath(rawPaths[i], ratio, !i && data.rotate, rawPaths[i]);
        }

        while (pt) {
          pt.set(pt.t, pt.p, pt.path[pt.pp] + pt.u, pt.d, ratio);
          pt = pt._next;
        }

        data.rotate && data.rSet(data.target, data.rProp, rawPaths[0].angle * (data.radians ? _DEG2RAD$3 : 1) + data.rOffset + data.ru, data, ratio);
      } else {
        data.styles.revert();
      }
    },
    getLength: function getLength(path) {
      return cacheRawPathMeasurements(getRawPath(path)).totalLength;
    },
    sliceRawPath: sliceRawPath,
    getRawPath: getRawPath,
    pointsToSegment: pointsToSegment,
    stringToRawPath: stringToRawPath,
    rawPathToString: rawPathToString,
    transformRawPath: transformRawPath,
    getGlobalMatrix: getGlobalMatrix,
    getPositionOnPath: getPositionOnPath,
    cacheRawPathMeasurements: cacheRawPathMeasurements,
    convertToPath: function convertToPath$1(targets, swap) {
      return _toArray$2(targets).map(function (target) {
        return convertToPath(target, swap !== false);
      });
    },
    convertCoordinates: function convertCoordinates(fromElement, toElement, point) {
      var m = getGlobalMatrix(toElement, true, true).multiply(getGlobalMatrix(fromElement));
      return point ? m.apply(point) : m;
    },
    getAlignMatrix: _getAlignMatrix,
    getRelativePosition: function getRelativePosition(fromElement, toElement, fromOrigin, toOrigin) {
      var m = _getAlignMatrix(fromElement, toElement, fromOrigin, toOrigin);

      return {
        x: m.e,
        y: m.f
      };
    },
    arrayToRawPath: function arrayToRawPath(value, vars) {
      vars = vars || {};

      var segment = _populateSegmentFromArray(_populateSegmentFromArray([], value, vars.x || "x", 0), value, vars.y || "y", 1);

      vars.relative && _relativize(segment);
      return [vars.type === "cubic" ? segment : pointsToSegment(segment, vars.curviness)];
    }
  };
  _getGSAP$5() && gsap$7.registerPlugin(MotionPathPlugin);

  /*!
   * Observer 3.12.1
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */
  var gsap$8,
      _coreInitted$5,
      _clamp$1,
      _win$5,
      _doc$5,
      _docEl,
      _body$3,
      _isTouch,
      _pointerType,
      ScrollTrigger,
      _root,
      _normalizer,
      _eventTypes,
      _context$2,
      _getGSAP$6 = function _getGSAP() {
    return gsap$8 || typeof window !== "undefined" && (gsap$8 = window.gsap) && gsap$8.registerPlugin && gsap$8;
  },
      _startup = 1,
      _observers = [];
      exports._scrollers = [];
      exports._proxies = [];
      var _getTime$1 = Date.now,
      _bridge = function _bridge(name, value) {
    return value;
  },
      _integrate = function _integrate() {
    var core = ScrollTrigger.core,
        data = core.bridge || {},
        scrollers = core._scrollers,
        proxies = core._proxies;
    scrollers.push.apply(scrollers, exports._scrollers);
    proxies.push.apply(proxies, exports._proxies);
    exports._scrollers = scrollers;
    exports._proxies = proxies;

    _bridge = function _bridge(name, value) {
      return data[name](value);
    };
  },
      _getProxyProp = function _getProxyProp(element, property) {
    return ~exports._proxies.indexOf(element) && exports._proxies[exports._proxies.indexOf(element) + 1][property];
  },
      _isViewport = function _isViewport(el) {
    return !!~_root.indexOf(el);
  },
      _addListener$1 = function _addListener(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
      passive: !nonPassive,
      capture: !!capture
    });
  },
      _removeListener$1 = function _removeListener(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  },
      _scrollLeft = "scrollLeft",
      _scrollTop = "scrollTop",
      _onScroll = function _onScroll() {
    return _normalizer && _normalizer.isPressed || exports._scrollers.cache++;
  },
      _scrollCacheFunc = function _scrollCacheFunc(f, doNotCache) {
    var cachingFunc = function cachingFunc(value) {
      if (value || value === 0) {
        _startup && (_win$5.history.scrollRestoration = "manual");
        var isNormalizing = _normalizer && _normalizer.isPressed;
        value = cachingFunc.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0);
        f(value);
        cachingFunc.cacheID = exports._scrollers.cache;
        isNormalizing && _bridge("ss", value);
      } else if (doNotCache || exports._scrollers.cache !== cachingFunc.cacheID || _bridge("ref")) {
        cachingFunc.cacheID = exports._scrollers.cache;
        cachingFunc.v = f();
      }

      return cachingFunc.v + cachingFunc.offset;
    };

    cachingFunc.offset = 0;
    return f && cachingFunc;
  },
      _horizontal = {
    s: _scrollLeft,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: _scrollCacheFunc(function (value) {
      return arguments.length ? _win$5.scrollTo(value, _vertical.sc()) : _win$5.pageXOffset || _doc$5[_scrollLeft] || _docEl[_scrollLeft] || _body$3[_scrollLeft] || 0;
    })
  },
      _vertical = {
    s: _scrollTop,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: _horizontal,
    sc: _scrollCacheFunc(function (value) {
      return arguments.length ? _win$5.scrollTo(_horizontal.sc(), value) : _win$5.pageYOffset || _doc$5[_scrollTop] || _docEl[_scrollTop] || _body$3[_scrollTop] || 0;
    })
  },
      _getTarget = function _getTarget(t, self) {
    return (self && self._ctx && self._ctx.selector || gsap$8.utils.toArray)(t)[0] || (typeof t === "string" && gsap$8.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
  },
      _getScrollFunc = function _getScrollFunc(element, _ref) {
    var s = _ref.s,
        sc = _ref.sc;
    _isViewport(element) && (element = _doc$5.scrollingElement || _docEl);

    var i = exports._scrollers.indexOf(element),
        offset = sc === _vertical.sc ? 1 : 2;

    !~i && (i = exports._scrollers.push(element) - 1);
    exports._scrollers[i + offset] || element.addEventListener("scroll", _onScroll);
    var prev = exports._scrollers[i + offset],
        func = prev || (exports._scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function (value) {
      return arguments.length ? element[s] = value : element[s];
    })));
    func.target = element;
    prev || (func.smooth = gsap$8.getProperty(element, "scrollBehavior") === "smooth");
    return func;
  },
      _getVelocityProp = function _getVelocityProp(value, minTimeRefresh, useDelta) {
    var v1 = value,
        v2 = value,
        t1 = _getTime$1(),
        t2 = t1,
        min = minTimeRefresh || 50,
        dropToZeroTime = Math.max(500, min * 3),
        update = function update(value, force) {
      var t = _getTime$1();

      if (force || t - t1 > min) {
        v2 = v1;
        v1 = value;
        t2 = t1;
        t1 = t;
      } else if (useDelta) {
        v1 += value;
      } else {
        v1 = v2 + (value - v2) / (t - t2) * (t1 - t2);
      }
    },
        reset = function reset() {
      v2 = v1 = useDelta ? 0 : v1;
      t2 = t1 = 0;
    },
        getVelocity = function getVelocity(latestValue) {
      var tOld = t2,
          vOld = v2,
          t = _getTime$1();

      (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
      return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1000;
    };

    return {
      update: update,
      reset: reset,
      getVelocity: getVelocity
    };
  },
      _getEvent = function _getEvent(e, preventDefault) {
    preventDefault && !e._gsapAllow && e.preventDefault();
    return e.changedTouches ? e.changedTouches[0] : e;
  },
      _getAbsoluteMax = function _getAbsoluteMax(a) {
    var max = Math.max.apply(Math, a),
        min = Math.min.apply(Math, a);
    return Math.abs(max) >= Math.abs(min) ? max : min;
  },
      _setScrollTrigger = function _setScrollTrigger() {
    ScrollTrigger = gsap$8.core.globals().ScrollTrigger;
    ScrollTrigger && ScrollTrigger.core && _integrate();
  },
      _initCore$6 = function _initCore(core) {
    gsap$8 = core || _getGSAP$6();

    if (gsap$8 && typeof document !== "undefined" && document.body) {
      _win$5 = window;
      _doc$5 = document;
      _docEl = _doc$5.documentElement;
      _body$3 = _doc$5.body;
      _root = [_win$5, _doc$5, _docEl, _body$3];
      _clamp$1 = gsap$8.utils.clamp;

      _context$2 = gsap$8.core.context || function () {};

      _pointerType = "onpointerenter" in _body$3 ? "pointer" : "mouse";
      _isTouch = Observer.isTouch = _win$5.matchMedia && _win$5.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win$5 || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
      _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
      setTimeout(function () {
        return _startup = 0;
      }, 500);

      _setScrollTrigger();

      _coreInitted$5 = 1;
    }

    return _coreInitted$5;
  };

  _horizontal.op = _vertical;
  exports._scrollers.cache = 0;
  var Observer = function () {
    function Observer(vars) {
      this.init(vars);
    }

    var _proto = Observer.prototype;

    _proto.init = function init(vars) {
      _coreInitted$5 || _initCore$6(gsap$8) || console.warn("Please gsap.registerPlugin(Observer)");
      ScrollTrigger || _setScrollTrigger();
      var tolerance = vars.tolerance,
          dragMinimum = vars.dragMinimum,
          type = vars.type,
          target = vars.target,
          lineHeight = vars.lineHeight,
          debounce = vars.debounce,
          preventDefault = vars.preventDefault,
          onStop = vars.onStop,
          onStopDelay = vars.onStopDelay,
          ignore = vars.ignore,
          wheelSpeed = vars.wheelSpeed,
          event = vars.event,
          onDragStart = vars.onDragStart,
          onDragEnd = vars.onDragEnd,
          onDrag = vars.onDrag,
          onPress = vars.onPress,
          onRelease = vars.onRelease,
          onRight = vars.onRight,
          onLeft = vars.onLeft,
          onUp = vars.onUp,
          onDown = vars.onDown,
          onChangeX = vars.onChangeX,
          onChangeY = vars.onChangeY,
          onChange = vars.onChange,
          onToggleX = vars.onToggleX,
          onToggleY = vars.onToggleY,
          onHover = vars.onHover,
          onHoverEnd = vars.onHoverEnd,
          onMove = vars.onMove,
          ignoreCheck = vars.ignoreCheck,
          isNormalizer = vars.isNormalizer,
          onGestureStart = vars.onGestureStart,
          onGestureEnd = vars.onGestureEnd,
          onWheel = vars.onWheel,
          onEnable = vars.onEnable,
          onDisable = vars.onDisable,
          onClick = vars.onClick,
          scrollSpeed = vars.scrollSpeed,
          capture = vars.capture,
          allowClicks = vars.allowClicks,
          lockAxis = vars.lockAxis,
          onLockAxis = vars.onLockAxis;
      this.target = target = _getTarget(target) || _docEl;
      this.vars = vars;
      ignore && (ignore = gsap$8.utils.toArray(ignore));
      tolerance = tolerance || 1e-9;
      dragMinimum = dragMinimum || 0;
      wheelSpeed = wheelSpeed || 1;
      scrollSpeed = scrollSpeed || 1;
      type = type || "wheel,touch,pointer";
      debounce = debounce !== false;
      lineHeight || (lineHeight = parseFloat(_win$5.getComputedStyle(_body$3).lineHeight) || 22);

      var id,
          onStopDelayedCall,
          dragged,
          moved,
          wheeled,
          locked,
          axis,
          self = this,
          prevDeltaX = 0,
          prevDeltaY = 0,
          scrollFuncX = _getScrollFunc(target, _horizontal),
          scrollFuncY = _getScrollFunc(target, _vertical),
          scrollX = scrollFuncX(),
          scrollY = scrollFuncY(),
          limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown",
          isViewport = _isViewport(target),
          ownerDoc = target.ownerDocument || _doc$5,
          deltaX = [0, 0, 0],
          deltaY = [0, 0, 0],
          onClickTime = 0,
          clickCapture = function clickCapture() {
        return onClickTime = _getTime$1();
      },
          _ignoreCheck = function _ignoreCheck(e, isPointerOrTouch) {
        return (self.event = e) && ignore && ~ignore.indexOf(e.target) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
      },
          onStopFunc = function onStopFunc() {
        self._vx.reset();

        self._vy.reset();

        onStopDelayedCall.pause();
        onStop && onStop(self);
      },
          update = function update() {
        var dx = self.deltaX = _getAbsoluteMax(deltaX),
            dy = self.deltaY = _getAbsoluteMax(deltaY),
            changedX = Math.abs(dx) >= tolerance,
            changedY = Math.abs(dy) >= tolerance;

        onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY);

        if (changedX) {
          onRight && self.deltaX > 0 && onRight(self);
          onLeft && self.deltaX < 0 && onLeft(self);
          onChangeX && onChangeX(self);
          onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
          prevDeltaX = self.deltaX;
          deltaX[0] = deltaX[1] = deltaX[2] = 0;
        }

        if (changedY) {
          onDown && self.deltaY > 0 && onDown(self);
          onUp && self.deltaY < 0 && onUp(self);
          onChangeY && onChangeY(self);
          onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
          prevDeltaY = self.deltaY;
          deltaY[0] = deltaY[1] = deltaY[2] = 0;
        }

        if (moved || dragged) {
          onMove && onMove(self);

          if (dragged) {
            onDrag(self);
            dragged = false;
          }

          moved = false;
        }

        locked && !(locked = false) && onLockAxis && onLockAxis(self);

        if (wheeled) {
          onWheel(self);
          wheeled = false;
        }

        id = 0;
      },
          onDelta = function onDelta(x, y, index) {
        deltaX[index] += x;
        deltaY[index] += y;

        self._vx.update(x);

        self._vy.update(y);

        debounce ? id || (id = requestAnimationFrame(update)) : update();
      },
          onTouchOrPointerDelta = function onTouchOrPointerDelta(x, y) {
        if (lockAxis && !axis) {
          self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
          locked = true;
        }

        if (axis !== "y") {
          deltaX[2] += x;

          self._vx.update(x, true);
        }

        if (axis !== "x") {
          deltaY[2] += y;

          self._vy.update(y, true);
        }

        debounce ? id || (id = requestAnimationFrame(update)) : update();
      },
          _onDrag = function _onDrag(e) {
        if (_ignoreCheck(e, 1)) {
          return;
        }

        e = _getEvent(e, preventDefault);
        var x = e.clientX,
            y = e.clientY,
            dx = x - self.x,
            dy = y - self.y,
            isDragging = self.isDragging;
        self.x = x;
        self.y = y;

        if (isDragging || Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum) {
          onDrag && (dragged = true);
          isDragging || (self.isDragging = true);
          onTouchOrPointerDelta(dx, dy);
          isDragging || onDragStart && onDragStart(self);
        }
      },
          _onPress = self.onPress = function (e) {
        if (_ignoreCheck(e, 1) || e && e.button) {
          return;
        }

        self.axis = axis = null;
        onStopDelayedCall.pause();
        self.isPressed = true;
        e = _getEvent(e);
        prevDeltaX = prevDeltaY = 0;
        self.startX = self.x = e.clientX;
        self.startY = self.y = e.clientY;

        self._vx.reset();

        self._vy.reset();

        _addListener$1(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, preventDefault, true);

        self.deltaX = self.deltaY = 0;
        onPress && onPress(self);
      },
          _onRelease = self.onRelease = function (e) {
        if (_ignoreCheck(e, 1)) {
          return;
        }

        _removeListener$1(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);

        var isTrackingDrag = !isNaN(self.y - self.startY),
            wasDragging = self.isDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3),
            eventData = _getEvent(e);

        if (!wasDragging && isTrackingDrag) {
          self._vx.reset();

          self._vy.reset();

          if (preventDefault && allowClicks) {
            gsap$8.delayedCall(0.08, function () {
              if (_getTime$1() - onClickTime > 300 && !e.defaultPrevented) {
                if (e.target.click) {
                  e.target.click();
                } else if (ownerDoc.createEvent) {
                  var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                  syntheticEvent.initMouseEvent("click", true, true, _win$5, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                  e.target.dispatchEvent(syntheticEvent);
                }
              }
            });
          }
        }

        self.isDragging = self.isGesturing = self.isPressed = false;
        onStop && !isNormalizer && onStopDelayedCall.restart(true);
        onDragEnd && wasDragging && onDragEnd(self);
        onRelease && onRelease(self, wasDragging);
      },
          _onGestureStart = function _onGestureStart(e) {
        return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
      },
          _onGestureEnd = function _onGestureEnd() {
        return (self.isGesturing = false) || onGestureEnd(self);
      },
          onScroll = function onScroll(e) {
        if (_ignoreCheck(e)) {
          return;
        }

        var x = scrollFuncX(),
            y = scrollFuncY();
        onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
        scrollX = x;
        scrollY = y;
        onStop && onStopDelayedCall.restart(true);
      },
          _onWheel = function _onWheel(e) {
        if (_ignoreCheck(e)) {
          return;
        }

        e = _getEvent(e, preventDefault);
        onWheel && (wheeled = true);
        var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win$5.innerHeight : 1) * wheelSpeed;
        onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
        onStop && !isNormalizer && onStopDelayedCall.restart(true);
      },
          _onMove = function _onMove(e) {
        if (_ignoreCheck(e)) {
          return;
        }

        var x = e.clientX,
            y = e.clientY,
            dx = x - self.x,
            dy = y - self.y;
        self.x = x;
        self.y = y;
        moved = true;
        (dx || dy) && onTouchOrPointerDelta(dx, dy);
      },
          _onHover = function _onHover(e) {
        self.event = e;
        onHover(self);
      },
          _onHoverEnd = function _onHoverEnd(e) {
        self.event = e;
        onHoverEnd(self);
      },
          _onClick = function _onClick(e) {
        return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self);
      };

      onStopDelayedCall = self._dc = gsap$8.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
      self.deltaX = self.deltaY = 0;
      self._vx = _getVelocityProp(0, 50, true);
      self._vy = _getVelocityProp(0, 50, true);
      self.scrollX = scrollFuncX;
      self.scrollY = scrollFuncY;
      self.isDragging = self.isGesturing = self.isPressed = false;

      _context$2(this);

      self.enable = function (e) {
        if (!self.isEnabled) {
          _addListener$1(isViewport ? ownerDoc : target, "scroll", _onScroll);

          type.indexOf("scroll") >= 0 && _addListener$1(isViewport ? ownerDoc : target, "scroll", onScroll, preventDefault, capture);
          type.indexOf("wheel") >= 0 && _addListener$1(target, "wheel", _onWheel, preventDefault, capture);

          if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
            _addListener$1(target, _eventTypes[0], _onPress, preventDefault, capture);

            _addListener$1(ownerDoc, _eventTypes[2], _onRelease);

            _addListener$1(ownerDoc, _eventTypes[3], _onRelease);

            allowClicks && _addListener$1(target, "click", clickCapture, false, true);
            onClick && _addListener$1(target, "click", _onClick);
            onGestureStart && _addListener$1(ownerDoc, "gesturestart", _onGestureStart);
            onGestureEnd && _addListener$1(ownerDoc, "gestureend", _onGestureEnd);
            onHover && _addListener$1(target, _pointerType + "enter", _onHover);
            onHoverEnd && _addListener$1(target, _pointerType + "leave", _onHoverEnd);
            onMove && _addListener$1(target, _pointerType + "move", _onMove);
          }

          self.isEnabled = true;
          e && e.type && _onPress(e);
          onEnable && onEnable(self);
        }

        return self;
      };

      self.disable = function () {
        if (self.isEnabled) {
          _observers.filter(function (o) {
            return o !== self && _isViewport(o.target);
          }).length || _removeListener$1(isViewport ? ownerDoc : target, "scroll", _onScroll);

          if (self.isPressed) {
            self._vx.reset();

            self._vy.reset();

            _removeListener$1(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
          }

          _removeListener$1(isViewport ? ownerDoc : target, "scroll", onScroll, capture);

          _removeListener$1(target, "wheel", _onWheel, capture);

          _removeListener$1(target, _eventTypes[0], _onPress, capture);

          _removeListener$1(ownerDoc, _eventTypes[2], _onRelease);

          _removeListener$1(ownerDoc, _eventTypes[3], _onRelease);

          _removeListener$1(target, "click", clickCapture, true);

          _removeListener$1(target, "click", _onClick);

          _removeListener$1(ownerDoc, "gesturestart", _onGestureStart);

          _removeListener$1(ownerDoc, "gestureend", _onGestureEnd);

          _removeListener$1(target, _pointerType + "enter", _onHover);

          _removeListener$1(target, _pointerType + "leave", _onHoverEnd);

          _removeListener$1(target, _pointerType + "move", _onMove);

          self.isEnabled = self.isPressed = self.isDragging = false;
          onDisable && onDisable(self);
        }
      };

      self.kill = self.revert = function () {
        self.disable();

        var i = _observers.indexOf(self);

        i >= 0 && _observers.splice(i, 1);
        _normalizer === self && (_normalizer = 0);
      };

      _observers.push(self);

      isNormalizer && _isViewport(target) && (_normalizer = self);
      self.enable(event);
    };

    _createClass(Observer, [{
      key: "velocityX",
      get: function get() {
        return this._vx.getVelocity();
      }
    }, {
      key: "velocityY",
      get: function get() {
        return this._vy.getVelocity();
      }
    }]);

    return Observer;
  }();
  Observer.version = "3.12.1";

  Observer.create = function (vars) {
    return new Observer(vars);
  };

  Observer.register = _initCore$6;

  Observer.getAll = function () {
    return _observers.slice();
  };

  Observer.getById = function (id) {
    return _observers.filter(function (o) {
      return o.vars.id === id;
    })[0];
  };

  _getGSAP$6() && gsap$8.registerPlugin(Observer);

  /*!
   * PixiPlugin 3.12.1
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */
  var gsap$9,
      _win$6,
      _splitColor,
      _coreInitted$6,
      _PIXI,
      PropTween$2,
      _getSetter$1,
      _isV4,
      _windowExists$5 = function _windowExists() {
    return typeof window !== "undefined";
  },
      _getGSAP$7 = function _getGSAP() {
    return gsap$9 || _windowExists$5() && (gsap$9 = window.gsap) && gsap$9.registerPlugin && gsap$9;
  },
      _isFunction$2 = function _isFunction(value) {
    return typeof value === "function";
  },
      _warn$2 = function _warn(message) {
    return console.warn(message);
  },
      _idMatrix$1 = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
      _lumR$1 = 0.212671,
      _lumG$1 = 0.715160,
      _lumB$1 = 0.072169,
      _filterClass = function _filterClass(name) {
    return _isFunction$2(_PIXI[name]) ? _PIXI[name] : _PIXI.filters[name];
  },
      _applyMatrix$1 = function _applyMatrix(m, m2) {
    var temp = [],
        i = 0,
        z = 0,
        y,
        x;

    for (y = 0; y < 4; y++) {
      for (x = 0; x < 5; x++) {
        z = x === 4 ? m[i + 4] : 0;
        temp[i + x] = m[i] * m2[x] + m[i + 1] * m2[x + 5] + m[i + 2] * m2[x + 10] + m[i + 3] * m2[x + 15] + z;
      }

      i += 5;
    }

    return temp;
  },
      _setSaturation$1 = function _setSaturation(m, n) {
    var inv = 1 - n,
        r = inv * _lumR$1,
        g = inv * _lumG$1,
        b = inv * _lumB$1;
    return _applyMatrix$1([r + n, g, b, 0, 0, r, g + n, b, 0, 0, r, g, b + n, 0, 0, 0, 0, 0, 1, 0], m);
  },
      _colorize$1 = function _colorize(m, color, amount) {
    var c = _splitColor(color),
        r = c[0] / 255,
        g = c[1] / 255,
        b = c[2] / 255,
        inv = 1 - amount;

    return _applyMatrix$1([inv + amount * r * _lumR$1, amount * r * _lumG$1, amount * r * _lumB$1, 0, 0, amount * g * _lumR$1, inv + amount * g * _lumG$1, amount * g * _lumB$1, 0, 0, amount * b * _lumR$1, amount * b * _lumG$1, inv + amount * b * _lumB$1, 0, 0, 0, 0, 0, 1, 0], m);
  },
      _setHue$1 = function _setHue(m, n) {
    n *= Math.PI / 180;
    var c = Math.cos(n),
        s = Math.sin(n);
    return _applyMatrix$1([_lumR$1 + c * (1 - _lumR$1) + s * -_lumR$1, _lumG$1 + c * -_lumG$1 + s * -_lumG$1, _lumB$1 + c * -_lumB$1 + s * (1 - _lumB$1), 0, 0, _lumR$1 + c * -_lumR$1 + s * 0.143, _lumG$1 + c * (1 - _lumG$1) + s * 0.14, _lumB$1 + c * -_lumB$1 + s * -0.283, 0, 0, _lumR$1 + c * -_lumR$1 + s * -(1 - _lumR$1), _lumG$1 + c * -_lumG$1 + s * _lumG$1, _lumB$1 + c * (1 - _lumB$1) + s * _lumB$1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], m);
  },
      _setContrast$1 = function _setContrast(m, n) {
    return _applyMatrix$1([n, 0, 0, 0, 0.5 * (1 - n), 0, n, 0, 0, 0.5 * (1 - n), 0, 0, n, 0, 0.5 * (1 - n), 0, 0, 0, 1, 0], m);
  },
      _getFilter = function _getFilter(target, type) {
    var filterClass = _filterClass(type),
        filters = target.filters || [],
        i = filters.length,
        filter;

    filterClass || _warn$2(type + " not found. PixiPlugin.registerPIXI(PIXI)");

    while (--i > -1) {
      if (filters[i] instanceof filterClass) {
        return filters[i];
      }
    }

    filter = new filterClass();

    if (type === "BlurFilter") {
      filter.blur = 0;
    }

    filters.push(filter);
    target.filters = filters;
    return filter;
  },
      _addColorMatrixFilterCacheTween = function _addColorMatrixFilterCacheTween(p, plugin, cache, vars) {
    plugin.add(cache, p, cache[p], vars[p]);

    plugin._props.push(p);
  },
      _applyBrightnessToMatrix = function _applyBrightnessToMatrix(brightness, matrix) {
    var filterClass = _filterClass("ColorMatrixFilter"),
        temp = filterClass();

    temp.matrix = matrix;
    temp.brightness(brightness, true);
    return temp.matrix;
  },
      _copy$2 = function _copy(obj) {
    var copy = {},
        p;

    for (p in obj) {
      copy[p] = obj[p];
    }

    return copy;
  },
      _CMFdefaults = {
    contrast: 1,
    saturation: 1,
    colorizeAmount: 0,
    colorize: "rgb(255,255,255)",
    hue: 0,
    brightness: 1
  },
      _parseColorMatrixFilter$1 = function _parseColorMatrixFilter(target, v, pg) {
    var filter = _getFilter(target, "ColorMatrixFilter"),
        cache = target._gsColorMatrixFilter = target._gsColorMatrixFilter || _copy$2(_CMFdefaults),
        combine = v.combineCMF && !("colorMatrixFilter" in v && !v.colorMatrixFilter),
        i,
        matrix,
        startMatrix;

    startMatrix = filter.matrix;

    if (v.resolution) {
      filter.resolution = v.resolution;
    }

    if (v.matrix && v.matrix.length === startMatrix.length) {
      matrix = v.matrix;

      if (cache.contrast !== 1) {
        _addColorMatrixFilterCacheTween("contrast", pg, cache, _CMFdefaults);
      }

      if (cache.hue) {
        _addColorMatrixFilterCacheTween("hue", pg, cache, _CMFdefaults);
      }

      if (cache.brightness !== 1) {
        _addColorMatrixFilterCacheTween("brightness", pg, cache, _CMFdefaults);
      }

      if (cache.colorizeAmount) {
        _addColorMatrixFilterCacheTween("colorize", pg, cache, _CMFdefaults);

        _addColorMatrixFilterCacheTween("colorizeAmount", pg, cache, _CMFdefaults);
      }

      if (cache.saturation !== 1) {
        _addColorMatrixFilterCacheTween("saturation", pg, cache, _CMFdefaults);
      }
    } else {
      matrix = _idMatrix$1.slice();

      if (v.contrast != null) {
        matrix = _setContrast$1(matrix, +v.contrast);

        _addColorMatrixFilterCacheTween("contrast", pg, cache, v);
      } else if (cache.contrast !== 1) {
        if (combine) {
          matrix = _setContrast$1(matrix, cache.contrast);
        } else {
          _addColorMatrixFilterCacheTween("contrast", pg, cache, _CMFdefaults);
        }
      }

      if (v.hue != null) {
        matrix = _setHue$1(matrix, +v.hue);

        _addColorMatrixFilterCacheTween("hue", pg, cache, v);
      } else if (cache.hue) {
        if (combine) {
          matrix = _setHue$1(matrix, cache.hue);
        } else {
          _addColorMatrixFilterCacheTween("hue", pg, cache, _CMFdefaults);
        }
      }

      if (v.brightness != null) {
        matrix = _applyBrightnessToMatrix(+v.brightness, matrix);

        _addColorMatrixFilterCacheTween("brightness", pg, cache, v);
      } else if (cache.brightness !== 1) {
        if (combine) {
          matrix = _applyBrightnessToMatrix(cache.brightness, matrix);
        } else {
          _addColorMatrixFilterCacheTween("brightness", pg, cache, _CMFdefaults);
        }
      }

      if (v.colorize != null) {
        v.colorizeAmount = "colorizeAmount" in v ? +v.colorizeAmount : 1;
        matrix = _colorize$1(matrix, v.colorize, v.colorizeAmount);

        _addColorMatrixFilterCacheTween("colorize", pg, cache, v);

        _addColorMatrixFilterCacheTween("colorizeAmount", pg, cache, v);
      } else if (cache.colorizeAmount) {
        if (combine) {
          matrix = _colorize$1(matrix, cache.colorize, cache.colorizeAmount);
        } else {
          _addColorMatrixFilterCacheTween("colorize", pg, cache, _CMFdefaults);

          _addColorMatrixFilterCacheTween("colorizeAmount", pg, cache, _CMFdefaults);
        }
      }

      if (v.saturation != null) {
        matrix = _setSaturation$1(matrix, +v.saturation);

        _addColorMatrixFilterCacheTween("saturation", pg, cache, v);
      } else if (cache.saturation !== 1) {
        if (combine) {
          matrix = _setSaturation$1(matrix, cache.saturation);
        } else {
          _addColorMatrixFilterCacheTween("saturation", pg, cache, _CMFdefaults);
        }
      }
    }

    i = matrix.length;

    while (--i > -1) {
      if (matrix[i] !== startMatrix[i]) {
        pg.add(startMatrix, i, startMatrix[i], matrix[i], "colorMatrixFilter");
      }
    }

    pg._props.push("colorMatrixFilter");
  },
      _renderColor = function _renderColor(ratio, _ref) {
    var t = _ref.t,
        p = _ref.p,
        color = _ref.color,
        set = _ref.set;
    set(t, p, color[0] << 16 | color[1] << 8 | color[2]);
  },
      _renderDirtyCache = function _renderDirtyCache(ratio, _ref2) {
    var g = _ref2.g;

    if (g) {
      g.dirty++;
      g.clearDirty++;
    }
  },
      _renderAutoAlpha = function _renderAutoAlpha(ratio, data) {
    data.t.visible = !!data.t.alpha;
  },
      _addColorTween = function _addColorTween(target, p, value, plugin) {
    var currentValue = target[p],
        startColor = _splitColor(_isFunction$2(currentValue) ? target[p.indexOf("set") || !_isFunction$2(target["get" + p.substr(3)]) ? p : "get" + p.substr(3)]() : currentValue),
        endColor = _splitColor(value);

    plugin._pt = new PropTween$2(plugin._pt, target, p, 0, 0, _renderColor, {
      t: target,
      p: p,
      color: startColor,
      set: _getSetter$1(target, p)
    });
    plugin.add(startColor, 0, startColor[0], endColor[0]);
    plugin.add(startColor, 1, startColor[1], endColor[1]);
    plugin.add(startColor, 2, startColor[2], endColor[2]);
  },
      _colorProps$1 = {
    tint: 1,
    lineColor: 1,
    fillColor: 1
  },
      _xyContexts = "position,scale,skew,pivot,anchor,tilePosition,tileScale".split(","),
      _contexts = {
    x: "position",
    y: "position",
    tileX: "tilePosition",
    tileY: "tilePosition"
  },
      _colorMatrixFilterProps = {
    colorMatrixFilter: 1,
    saturation: 1,
    contrast: 1,
    hue: 1,
    colorize: 1,
    colorizeAmount: 1,
    brightness: 1,
    combineCMF: 1
  },
      _DEG2RAD$4 = Math.PI / 180,
      _isString$2 = function _isString(value) {
    return typeof value === "string";
  },
      _degreesToRadians = function _degreesToRadians(value) {
    return _isString$2(value) && value.charAt(1) === "=" ? value.substr(0, 2) + parseFloat(value.substr(2)) * _DEG2RAD$4 : value * _DEG2RAD$4;
  },
      _renderPropWithEnd$1 = function _renderPropWithEnd(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 100000) / 100000, data);
  },
      _addRotationalPropTween$1 = function _addRotationalPropTween(plugin, target, property, startNum, endValue, radians) {
    var cap = 360 * (radians ? _DEG2RAD$4 : 1),
        isString = _isString$2(endValue),
        relative = isString && endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0,
        endNum = parseFloat(relative ? endValue.substr(2) : endValue) * (radians ? _DEG2RAD$4 : 1),
        change = relative ? endNum * relative : endNum - startNum,
        finalValue = startNum + change,
        direction,
        pt;

    if (isString) {
      direction = endValue.split("_")[1];

      if (direction === "short") {
        change %= cap;

        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }

      if (direction === "cw" && change < 0) {
        change = (change + cap * 1e10) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * 1e10) % cap - ~~(change / cap) * cap;
      }
    }

    plugin._pt = pt = new PropTween$2(plugin._pt, target, property, startNum, change, _renderPropWithEnd$1);
    pt.e = finalValue;
    return pt;
  },
      _initCore$7 = function _initCore() {
    if (_windowExists$5()) {
      _win$6 = window;
      gsap$9 = _getGSAP$7();
      _PIXI = _coreInitted$6 = _PIXI || _win$6.PIXI;
      _isV4 = _PIXI && _PIXI.VERSION && _PIXI.VERSION.charAt(0) === "4";

      _splitColor = function _splitColor(color) {
        return gsap$9.utils.splitColor((color + "").substr(0, 2) === "0x" ? "#" + color.substr(2) : color);
      };
    }
  },
      i,
      p$1;

  for (i = 0; i < _xyContexts.length; i++) {
    p$1 = _xyContexts[i];
    _contexts[p$1 + "X"] = p$1;
    _contexts[p$1 + "Y"] = p$1;
  }

  var PixiPlugin = {
    version: "3.12.1",
    name: "pixi",
    register: function register(core, Plugin, propTween) {
      gsap$9 = core;
      PropTween$2 = propTween;
      _getSetter$1 = Plugin.getSetter;

      _initCore$7();
    },
    registerPIXI: function registerPIXI(pixi) {
      _PIXI = pixi;
    },
    init: function init(target, values, tween, index, targets) {
      _PIXI || _initCore$7();

      if (!_PIXI || !(target instanceof _PIXI.DisplayObject)) {
        _warn$2(target);

        return false;
      }

      var context, axis, value, colorMatrix, filter, p, padding, i, data;

      for (p in values) {
        context = _contexts[p];
        value = values[p];

        if (context) {
          axis = ~p.charAt(p.length - 1).toLowerCase().indexOf("x") ? "x" : "y";
          this.add(target[context], axis, target[context][axis], context === "skew" ? _degreesToRadians(value) : value, 0, 0, 0, 0, 0, 1);
        } else if (p === "scale" || p === "anchor" || p === "pivot" || p === "tileScale") {
          this.add(target[p], "x", target[p].x, value);
          this.add(target[p], "y", target[p].y, value);
        } else if (p === "rotation" || p === "angle") {
          _addRotationalPropTween$1(this, target, p, target[p], value, p === "rotation");
        } else if (_colorMatrixFilterProps[p]) {
          if (!colorMatrix) {
            _parseColorMatrixFilter$1(target, values.colorMatrixFilter || values, this);

            colorMatrix = true;
          }
        } else if (p === "blur" || p === "blurX" || p === "blurY" || p === "blurPadding") {
          filter = _getFilter(target, "BlurFilter");
          this.add(filter, p, filter[p], value);

          if (values.blurPadding !== 0) {
            padding = values.blurPadding || Math.max(filter[p], value) * 2;
            i = target.filters.length;

            while (--i > -1) {
              target.filters[i].padding = Math.max(target.filters[i].padding, padding);
            }
          }
        } else if (_colorProps$1[p]) {
          if ((p === "lineColor" || p === "fillColor") && target instanceof _PIXI.Graphics) {
            data = (target.geometry || target).graphicsData;
            this._pt = new PropTween$2(this._pt, target, p, 0, 0, _renderDirtyCache, {
              g: target.geometry || target
            });
            i = data.length;

            while (--i > -1) {
              _addColorTween(_isV4 ? data[i] : data[i][p.substr(0, 4) + "Style"], _isV4 ? p : "color", value, this);
            }
          } else {
            _addColorTween(target, p, value, this);
          }
        } else if (p === "autoAlpha") {
          this._pt = new PropTween$2(this._pt, target, "visible", 0, 0, _renderAutoAlpha);
          this.add(target, "alpha", target.alpha, value);

          this._props.push("alpha", "visible");
        } else if (p !== "resolution") {
          this.add(target, p, "get", value);
        }

        this._props.push(p);
      }
    }
  };
  _getGSAP$7() && gsap$9.registerPlugin(PixiPlugin);

  /*!
   * ScrollToPlugin 3.12.1
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */
  var gsap$a,
      _coreInitted$7,
      _window,
      _docEl$1,
      _body$4,
      _toArray$3,
      _config$1,
      ScrollTrigger$1,
      _windowExists$6 = function _windowExists() {
    return typeof window !== "undefined";
  },
      _getGSAP$8 = function _getGSAP() {
    return gsap$a || _windowExists$6() && (gsap$a = window.gsap) && gsap$a.registerPlugin && gsap$a;
  },
      _isString$3 = function _isString(value) {
    return typeof value === "string";
  },
      _isFunction$3 = function _isFunction(value) {
    return typeof value === "function";
  },
      _max = function _max(element, axis) {
    var dim = axis === "x" ? "Width" : "Height",
        scroll = "scroll" + dim,
        client = "client" + dim;
    return element === _window || element === _docEl$1 || element === _body$4 ? Math.max(_docEl$1[scroll], _body$4[scroll]) - (_window["inner" + dim] || _docEl$1[client] || _body$4[client]) : element[scroll] - element["offset" + dim];
  },
      _buildGetter = function _buildGetter(e, axis) {
    var p = "scroll" + (axis === "x" ? "Left" : "Top");

    if (e === _window) {
      if (e.pageXOffset != null) {
        p = "page" + axis.toUpperCase() + "Offset";
      } else {
        e = _docEl$1[p] != null ? _docEl$1 : _body$4;
      }
    }

    return function () {
      return e[p];
    };
  },
      _clean = function _clean(value, index, target, targets) {
    _isFunction$3(value) && (value = value(index, target, targets));

    if (typeof value !== "object") {
      return _isString$3(value) && value !== "max" && value.charAt(1) !== "=" ? {
        x: value,
        y: value
      } : {
        y: value
      };
    } else if (value.nodeType) {
      return {
        y: value,
        x: value
      };
    } else {
      var result = {},
          p;

      for (p in value) {
        result[p] = p !== "onAutoKill" && _isFunction$3(value[p]) ? value[p](index, target, targets) : value[p];
      }

      return result;
    }
  },
      _getOffset = function _getOffset(element, container) {
    element = _toArray$3(element)[0];

    if (!element || !element.getBoundingClientRect) {
      return console.warn("scrollTo target doesn't exist. Using 0") || {
        x: 0,
        y: 0
      };
    }

    var rect = element.getBoundingClientRect(),
        isRoot = !container || container === _window || container === _body$4,
        cRect = isRoot ? {
      top: _docEl$1.clientTop - (_window.pageYOffset || _docEl$1.scrollTop || _body$4.scrollTop || 0),
      left: _docEl$1.clientLeft - (_window.pageXOffset || _docEl$1.scrollLeft || _body$4.scrollLeft || 0)
    } : container.getBoundingClientRect(),
        offsets = {
      x: rect.left - cRect.left,
      y: rect.top - cRect.top
    };

    if (!isRoot && container) {
      offsets.x += _buildGetter(container, "x")();
      offsets.y += _buildGetter(container, "y")();
    }

    return offsets;
  },
      _parseVal = function _parseVal(value, target, axis, currentVal, offset) {
    return !isNaN(value) && typeof value !== "object" ? parseFloat(value) - offset : _isString$3(value) && value.charAt(1) === "=" ? parseFloat(value.substr(2)) * (value.charAt(0) === "-" ? -1 : 1) + currentVal - offset : value === "max" ? _max(target, axis) - offset : Math.min(_max(target, axis), _getOffset(value, target)[axis] - offset);
  },
      _initCore$8 = function _initCore() {
    gsap$a = _getGSAP$8();

    if (_windowExists$6() && gsap$a && typeof document !== "undefined" && document.body) {
      _window = window;
      _body$4 = document.body;
      _docEl$1 = document.documentElement;
      _toArray$3 = gsap$a.utils.toArray;
      gsap$a.config({
        autoKillThreshold: 7
      });
      _config$1 = gsap$a.config();
      _coreInitted$7 = 1;
    }
  };

  var ScrollToPlugin = {
    version: "3.12.1",
    name: "scrollTo",
    rawVars: 1,
    register: function register(core) {
      gsap$a = core;

      _initCore$8();
    },
    init: function init(target, value, tween, index, targets) {
      _coreInitted$7 || _initCore$8();
      var data = this,
          snapType = gsap$a.getProperty(target, "scrollSnapType");
      data.isWin = target === _window;
      data.target = target;
      data.tween = tween;
      value = _clean(value, index, target, targets);
      data.vars = value;
      data.autoKill = !!value.autoKill;
      data.getX = _buildGetter(target, "x");
      data.getY = _buildGetter(target, "y");
      data.x = data.xPrev = data.getX();
      data.y = data.yPrev = data.getY();
      ScrollTrigger$1 || (ScrollTrigger$1 = gsap$a.core.globals().ScrollTrigger);
      gsap$a.getProperty(target, "scrollBehavior") === "smooth" && gsap$a.set(target, {
        scrollBehavior: "auto"
      });

      if (snapType && snapType !== "none") {
        data.snap = 1;
        data.snapInline = target.style.scrollSnapType;
        target.style.scrollSnapType = "none";
      }

      if (value.x != null) {
        data.add(data, "x", data.x, _parseVal(value.x, target, "x", data.x, value.offsetX || 0), index, targets);

        data._props.push("scrollTo_x");
      } else {
        data.skipX = 1;
      }

      if (value.y != null) {
        data.add(data, "y", data.y, _parseVal(value.y, target, "y", data.y, value.offsetY || 0), index, targets);

        data._props.push("scrollTo_y");
      } else {
        data.skipY = 1;
      }
    },
    render: function render(ratio, data) {
      var pt = data._pt,
          target = data.target,
          tween = data.tween,
          autoKill = data.autoKill,
          xPrev = data.xPrev,
          yPrev = data.yPrev,
          isWin = data.isWin,
          snap = data.snap,
          snapInline = data.snapInline,
          x,
          y,
          yDif,
          xDif,
          threshold;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      x = isWin || !data.skipX ? data.getX() : xPrev;
      y = isWin || !data.skipY ? data.getY() : yPrev;
      yDif = y - yPrev;
      xDif = x - xPrev;
      threshold = _config$1.autoKillThreshold;

      if (data.x < 0) {
        data.x = 0;
      }

      if (data.y < 0) {
        data.y = 0;
      }

      if (autoKill) {
        if (!data.skipX && (xDif > threshold || xDif < -threshold) && x < _max(target, "x")) {
          data.skipX = 1;
        }

        if (!data.skipY && (yDif > threshold || yDif < -threshold) && y < _max(target, "y")) {
          data.skipY = 1;
        }

        if (data.skipX && data.skipY) {
          tween.kill();
          data.vars.onAutoKill && data.vars.onAutoKill.apply(tween, data.vars.onAutoKillParams || []);
        }
      }

      if (isWin) {
        _window.scrollTo(!data.skipX ? data.x : x, !data.skipY ? data.y : y);
      } else {
        data.skipY || (target.scrollTop = data.y);
        data.skipX || (target.scrollLeft = data.x);
      }

      if (snap && (ratio === 1 || ratio === 0)) {
        y = target.scrollTop;
        x = target.scrollLeft;
        snapInline ? target.style.scrollSnapType = snapInline : target.style.removeProperty("scroll-snap-type");
        target.scrollTop = y + 1;
        target.scrollLeft = x + 1;
        target.scrollTop = y;
        target.scrollLeft = x;
      }

      data.xPrev = data.x;
      data.yPrev = data.y;
      ScrollTrigger$1 && ScrollTrigger$1.update();
    },
    kill: function kill(property) {
      var both = property === "scrollTo";

      if (both || property === "scrollTo_x") {
        this.skipX = 1;
      }

      if (both || property === "scrollTo_y") {
        this.skipY = 1;
      }
    }
  };
  ScrollToPlugin.max = _max;
  ScrollToPlugin.getOffset = _getOffset;
  ScrollToPlugin.buildGetter = _buildGetter;
  _getGSAP$8() && gsap$a.registerPlugin(ScrollToPlugin);

  /*!
   * ScrollTrigger 3.12.1
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */

  var gsap$b,
      _coreInitted$8,
      _win$7,
      _doc$6,
      _docEl$2,
      _body$5,
      _root$1,
      _resizeDelay,
      _toArray$4,
      _clamp$2,
      _time2,
      _syncInterval,
      _refreshing,
      _pointerIsDown,
      _transformProp$3,
      _i,
      _prevWidth,
      _prevHeight,
      _autoRefresh,
      _sort,
      _suppressOverwrites$1,
      _ignoreResize,
      _normalizer$1,
      _ignoreMobileResize,
      _baseScreenHeight,
      _baseScreenWidth,
      _fixIOSBug,
      _context$3,
      _scrollRestoration,
      _limitCallbacks,
      _startup$1 = 1,
      _getTime$2 = Date.now,
      _time1 = _getTime$2(),
      _lastScrollTime = 0,
      _enabled = 0,
      _parseClamp = function _parseClamp(value, type, self) {
    var clamp = _isString$4(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
    self["_" + type + "Clamp"] = clamp;
    return clamp ? value.substr(6, value.length - 7) : value;
  },
      _keepClamp = function _keepClamp(value, clamp) {
    return clamp && (!_isString$4(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
  },
      _rafBugFix = function _rafBugFix() {
    return _enabled && requestAnimationFrame(_rafBugFix);
  },
      _pointerDownHandler = function _pointerDownHandler() {
    return _pointerIsDown = 1;
  },
      _pointerUpHandler = function _pointerUpHandler() {
    return _pointerIsDown = 0;
  },
      _passThrough$1 = function _passThrough(v) {
    return v;
  },
      _round$5 = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
  },
      _windowExists$7 = function _windowExists() {
    return typeof window !== "undefined";
  },
      _getGSAP$9 = function _getGSAP() {
    return gsap$b || _windowExists$7() && (gsap$b = window.gsap) && gsap$b.registerPlugin && gsap$b;
  },
      _isViewport$1 = function _isViewport(e) {
    return !!~_root$1.indexOf(e);
  },
      _getBoundsFunc = function _getBoundsFunc(element) {
    return _getProxyProp(element, "getBoundingClientRect") || (_isViewport$1(element) ? function () {
      _winOffsets.width = _win$7.innerWidth;
      _winOffsets.height = _win$7.innerHeight;
      return _winOffsets;
    } : function () {
      return _getBounds$1(element);
    });
  },
      _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref) {
    var d = _ref.d,
        d2 = _ref.d2,
        a = _ref.a;
    return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function () {
      return a()[d];
    } : function () {
      return (isViewport ? _win$7["inner" + d2] : scroller["client" + d2]) || 0;
    };
  },
      _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
    return !isViewport || ~exports._proxies.indexOf(element) ? _getBoundsFunc(element) : function () {
      return _winOffsets;
    };
  },
      _maxScroll = function _maxScroll(element, _ref2) {
    var s = _ref2.s,
        d2 = _ref2.d2,
        d = _ref2.d,
        a = _ref2.a;
    return Math.max(0, (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport$1(element) ? (_docEl$2[s] || _body$5[s]) - (_win$7["inner" + d2] || _docEl$2["client" + d2] || _body$5["client" + d2]) : element[s] - element["offset" + d2]);
  },
      _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
    for (var i = 0; i < _autoRefresh.length; i += 3) {
      (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
    }
  },
      _isString$4 = function _isString(value) {
    return typeof value === "string";
  },
      _isFunction$4 = function _isFunction(value) {
    return typeof value === "function";
  },
      _isNumber$2 = function _isNumber(value) {
    return typeof value === "number";
  },
      _isObject$2 = function _isObject(value) {
    return typeof value === "object";
  },
      _endAnimation = function _endAnimation(animation, reversed, pause) {
    return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
  },
      _callback$1 = function _callback(self, func) {
    if (self.enabled) {
      var result = func(self);
      result && result.totalTime && (self.callbackAnimation = result);
    }
  },
      _abs$1 = Math.abs,
      _left = "left",
      _top = "top",
      _right = "right",
      _bottom = "bottom",
      _width = "width",
      _height = "height",
      _Right = "Right",
      _Left = "Left",
      _Top = "Top",
      _Bottom = "Bottom",
      _padding = "padding",
      _margin = "margin",
      _Width = "Width",
      _Height = "Height",
      _px = "px",
      _getComputedStyle$1 = function _getComputedStyle(element) {
    return _win$7.getComputedStyle(element);
  },
      _makePositionable = function _makePositionable(element) {
    var position = _getComputedStyle$1(element).position;

    element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
  },
      _setDefaults$2 = function _setDefaults(obj, defaults) {
    for (var p in defaults) {
      p in obj || (obj[p] = defaults[p]);
    }

    return obj;
  },
      _getBounds$1 = function _getBounds(element, withoutTransforms) {
    var tween = withoutTransforms && _getComputedStyle$1(element)[_transformProp$3] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap$b.to(element, {
      x: 0,
      y: 0,
      xPercent: 0,
      yPercent: 0,
      rotation: 0,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0
    }).progress(1),
        bounds = element.getBoundingClientRect();
    tween && tween.progress(0).kill();
    return bounds;
  },
      _getSize = function _getSize(element, _ref3) {
    var d2 = _ref3.d2;
    return element["offset" + d2] || element["client" + d2] || 0;
  },
      _getLabelRatioArray = function _getLabelRatioArray(timeline) {
    var a = [],
        labels = timeline.labels,
        duration = timeline.duration(),
        p;

    for (p in labels) {
      a.push(labels[p] / duration);
    }

    return a;
  },
      _getClosestLabel = function _getClosestLabel(animation) {
    return function (value) {
      return gsap$b.utils.snap(_getLabelRatioArray(animation), value);
    };
  },
      _snapDirectional = function _snapDirectional(snapIncrementOrArray) {
    var snap = gsap$b.utils.snap(snapIncrementOrArray),
        a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function (a, b) {
      return a - b;
    });
    return a ? function (value, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }

      var i;

      if (!direction) {
        return snap(value);
      }

      if (direction > 0) {
        value -= threshold;

        for (i = 0; i < a.length; i++) {
          if (a[i] >= value) {
            return a[i];
          }
        }

        return a[i - 1];
      } else {
        i = a.length;
        value += threshold;

        while (i--) {
          if (a[i] <= value) {
            return a[i];
          }
        }
      }

      return a[0];
    } : function (value, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }

      var snapped = snap(value);
      return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
    };
  },
      _getLabelAtDirection = function _getLabelAtDirection(timeline) {
    return function (value, st) {
      return _snapDirectional(_getLabelRatioArray(timeline))(value, st.direction);
    };
  },
      _multiListener = function _multiListener(func, element, types, callback) {
    return types.split(",").forEach(function (type) {
      return func(element, type, callback);
    });
  },
      _addListener$2 = function _addListener(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
      passive: !nonPassive,
      capture: !!capture
    });
  },
      _removeListener$2 = function _removeListener(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  },
      _wheelListener = function _wheelListener(func, el, scrollFunc) {
    scrollFunc = scrollFunc && scrollFunc.wheelHandler;

    if (scrollFunc) {
      func(el, "wheel", scrollFunc);
      func(el, "touchmove", scrollFunc);
    }
  },
      _markerDefaults = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
  },
      _defaults$1 = {
    toggleActions: "play",
    anticipatePin: 0
  },
      _keywords = {
    top: 0,
    left: 0,
    center: 0.5,
    bottom: 1,
    right: 1
  },
      _offsetToPx = function _offsetToPx(value, size) {
    if (_isString$4(value)) {
      var eqIndex = value.indexOf("="),
          relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;

      if (~eqIndex) {
        value.indexOf("%") > eqIndex && (relative *= size / 100);
        value = value.substr(0, eqIndex - 1);
      }

      value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
    }

    return value;
  },
      _createMarker = function _createMarker(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
    var startColor = _ref4.startColor,
        endColor = _ref4.endColor,
        fontSize = _ref4.fontSize,
        indent = _ref4.indent,
        fontWeight = _ref4.fontWeight;

    var e = _doc$6.createElement("div"),
        useFixedPosition = _isViewport$1(container) || _getProxyProp(container, "pinType") === "fixed",
        isScroller = type.indexOf("scroller") !== -1,
        parent = useFixedPosition ? _body$5 : container,
        isStart = type.indexOf("start") !== -1,
        color = isStart ? startColor : endColor,
        css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";

    css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
    (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
    matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
    e._isStart = isStart;
    e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
    e.style.cssText = css;
    e.innerText = name || name === 0 ? type + "-" + name : type;
    parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
    e._offset = e["offset" + direction.op.d2];

    _positionMarker(e, 0, direction, isStart);

    return e;
  },
      _positionMarker = function _positionMarker(marker, start, direction, flipped) {
    var vars = {
      display: "block"
    },
        side = direction[flipped ? "os2" : "p2"],
        oppositeSide = direction[flipped ? "p2" : "os2"];
    marker._isFlipped = flipped;
    vars[direction.a + "Percent"] = flipped ? -100 : 0;
    vars[direction.a] = flipped ? "1px" : 0;
    vars["border" + side + _Width] = 1;
    vars["border" + oppositeSide + _Width] = 0;
    vars[direction.p] = start + "px";
    gsap$b.set(marker, vars);
  },
      _triggers = [],
      _ids = {},
      _rafID,
      _sync = function _sync() {
    return _getTime$2() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
  },
      _onScroll$1 = function _onScroll() {
    if (!_normalizer$1 || !_normalizer$1.isPressed || _normalizer$1.startX > _body$5.clientWidth) {
      exports._scrollers.cache++;

      if (_normalizer$1) {
        _rafID || (_rafID = requestAnimationFrame(_updateAll));
      } else {
        _updateAll();
      }

      _lastScrollTime || _dispatch$1("scrollStart");
      _lastScrollTime = _getTime$2();
    }
  },
      _setBaseDimensions = function _setBaseDimensions() {
    _baseScreenWidth = _win$7.innerWidth;
    _baseScreenHeight = _win$7.innerHeight;
  },
      _onResize = function _onResize() {
    exports._scrollers.cache++;
    !_refreshing && !_ignoreResize && !_doc$6.fullscreenElement && !_doc$6.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win$7.innerWidth || Math.abs(_win$7.innerHeight - _baseScreenHeight) > _win$7.innerHeight * 0.25) && _resizeDelay.restart(true);
  },
      _listeners$1 = {},
      _emptyArray$1 = [],
      _softRefresh = function _softRefresh() {
    return _removeListener$2(ScrollTrigger$2, "scrollEnd", _softRefresh) || _refreshAll(true);
  },
      _dispatch$1 = function _dispatch(type) {
    return _listeners$1[type] && _listeners$1[type].map(function (f) {
      return f();
    }) || _emptyArray$1;
  },
      _savedStyles = [],
      _revertRecorded = function _revertRecorded(media) {
    for (var i = 0; i < _savedStyles.length; i += 5) {
      if (!media || _savedStyles[i + 4] && _savedStyles[i + 4].query === media) {
        _savedStyles[i].style.cssText = _savedStyles[i + 1];
        _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
        _savedStyles[i + 3].uncache = 1;
      }
    }
  },
      _revertAll = function _revertAll(kill, media) {
    var trigger;

    for (_i = 0; _i < _triggers.length; _i++) {
      trigger = _triggers[_i];

      if (trigger && (!media || trigger._ctx === media)) {
        if (kill) {
          trigger.kill(1);
        } else {
          trigger.revert(true, true);
        }
      }
    }

    media && _revertRecorded(media);
    media || _dispatch$1("revert");
  },
      _clearScrollMemory = function _clearScrollMemory(scrollRestoration, force) {
    exports._scrollers.cache++;
    (force || !_refreshingAll) && exports._scrollers.forEach(function (obj) {
      return _isFunction$4(obj) && obj.cacheID++ && (obj.rec = 0);
    });
    _isString$4(scrollRestoration) && (_win$7.history.scrollRestoration = _scrollRestoration = scrollRestoration);
  },
      _refreshingAll,
      _refreshID = 0,
      _queueRefreshID,
      _queueRefreshAll = function _queueRefreshAll() {
    if (_queueRefreshID !== _refreshID) {
      var id = _queueRefreshID = _refreshID;
      requestAnimationFrame(function () {
        return id === _refreshID && _refreshAll(true);
      });
    }
  },
      _refreshAll = function _refreshAll(force, skipRevert) {
    if (_lastScrollTime && !force) {
      _addListener$2(ScrollTrigger$2, "scrollEnd", _softRefresh);

      return;
    }

    _refreshingAll = ScrollTrigger$2.isRefreshing = true;

    exports._scrollers.forEach(function (obj) {
      return _isFunction$4(obj) && ++obj.cacheID && (obj.rec = obj());
    });

    var refreshInits = _dispatch$1("refreshInit");

    _sort && ScrollTrigger$2.sort();
    skipRevert || _revertAll();

    exports._scrollers.forEach(function (obj) {
      if (_isFunction$4(obj)) {
        obj.smooth && (obj.target.style.scrollBehavior = "auto");
        obj(0);
      }
    });

    _triggers.slice(0).forEach(function (t) {
      return t.refresh();
    });

    _triggers.forEach(function (t, i) {
      if (t._subPinOffset && t.pin) {
        var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
            original = t.pin[prop];
        t.revert(true, 1);
        t.adjustPinSpacing(t.pin[prop] - original);
        t.refresh();
      }
    });

    _triggers.forEach(function (t) {
      var max = _maxScroll(t.scroller, t._dir);

      (t.vars.end === "max" || t._endClamp && t.end > max) && t.setPositions(t.start, Math.max(t.start + 1, max), true);
    });

    refreshInits.forEach(function (result) {
      return result && result.render && result.render(-1);
    });

    exports._scrollers.forEach(function (obj) {
      if (_isFunction$4(obj)) {
        obj.smooth && requestAnimationFrame(function () {
          return obj.target.style.scrollBehavior = "smooth";
        });
        obj.rec && obj(obj.rec);
      }
    });

    _clearScrollMemory(_scrollRestoration, 1);

    _resizeDelay.pause();

    _refreshID++;
    _refreshingAll = 2;

    _updateAll(2);

    _triggers.forEach(function (t) {
      return _isFunction$4(t.vars.onRefresh) && t.vars.onRefresh(t);
    });

    _refreshingAll = ScrollTrigger$2.isRefreshing = false;

    _dispatch$1("refresh");
  },
      _lastScroll = 0,
      _direction = 1,
      _primary,
      _updateAll = function _updateAll(force) {
    if (!_refreshingAll || force === 2) {
      ScrollTrigger$2.isUpdating = true;
      _primary && _primary.update(0);

      var l = _triggers.length,
          time = _getTime$2(),
          recordVelocity = time - _time1 >= 50,
          scroll = l && _triggers[0].scroll();

      _direction = _lastScroll > scroll ? -1 : 1;
      _refreshingAll || (_lastScroll = scroll);

      if (recordVelocity) {
        if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
          _lastScrollTime = 0;

          _dispatch$1("scrollEnd");
        }

        _time2 = _time1;
        _time1 = time;
      }

      if (_direction < 0) {
        _i = l;

        while (_i-- > 0) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }

        _direction = 1;
      } else {
        for (_i = 0; _i < l; _i++) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
      }

      ScrollTrigger$2.isUpdating = false;
    }

    _rafID = 0;
  },
      _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
      _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]),
      _swapPinOut = function _swapPinOut(pin, spacer, state) {
    _setState(state);

    var cache = pin._gsap;

    if (cache.spacerIsNative) {
      _setState(cache.spacerState);
    } else if (pin._gsap.swappedIn) {
      var parent = spacer.parentNode;

      if (parent) {
        parent.insertBefore(pin, spacer);
        parent.removeChild(spacer);
      }
    }

    pin._gsap.swappedIn = false;
  },
      _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
    if (!pin._gsap.swappedIn) {
      var i = _propNamesToCopy.length,
          spacerStyle = spacer.style,
          pinStyle = pin.style,
          p;

      while (i--) {
        p = _propNamesToCopy[i];
        spacerStyle[p] = cs[p];
      }

      spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
      cs.display === "inline" && (spacerStyle.display = "inline-block");
      pinStyle[_bottom] = pinStyle[_right] = "auto";
      spacerStyle.flexBasis = cs.flexBasis || "auto";
      spacerStyle.overflow = "visible";
      spacerStyle.boxSizing = "border-box";
      spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
      spacerStyle[_height] = _getSize(pin, _vertical) + _px;
      spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";

      _setState(spacerState);

      pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
      pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
      pinStyle[_padding] = cs[_padding];

      if (pin.parentNode !== spacer) {
        pin.parentNode.insertBefore(spacer, pin);
        spacer.appendChild(pin);
      }

      pin._gsap.swappedIn = true;
    }
  },
      _capsExp$1 = /([A-Z])/g,
      _setState = function _setState(state) {
    if (state) {
      var style = state.t.style,
          l = state.length,
          i = 0,
          p,
          value;
      (state.t._gsap || gsap$b.core.getCache(state.t)).uncache = 1;

      for (; i < l; i += 2) {
        value = state[i + 1];
        p = state[i];

        if (value) {
          style[p] = value;
        } else if (style[p]) {
          style.removeProperty(p.replace(_capsExp$1, "-$1").toLowerCase());
        }
      }
    }
  },
      _getState = function _getState(element) {
    var l = _stateProps.length,
        style = element.style,
        state = [],
        i = 0;

    for (; i < l; i++) {
      state.push(_stateProps[i], style[_stateProps[i]]);
    }

    state.t = element;
    return state;
  },
      _copyState = function _copyState(state, override, omitOffsets) {
    var result = [],
        l = state.length,
        i = omitOffsets ? 8 : 0,
        p;

    for (; i < l; i += 2) {
      p = state[i];
      result.push(p, p in override ? override[p] : state[i + 1]);
    }

    result.t = state.t;
    return result;
  },
      _winOffsets = {
    left: 0,
    top: 0
  },
      _parsePosition$1 = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
    _isFunction$4(value) && (value = value(self));

    if (_isString$4(value) && value.substr(0, 3) === "max") {
      value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
    }

    var time = containerAnimation ? containerAnimation.time() : 0,
        p1,
        p2,
        element;
    containerAnimation && containerAnimation.seek(0);
    isNaN(value) || (value = +value);

    if (!_isNumber$2(value)) {
      _isFunction$4(trigger) && (trigger = trigger(self));
      var offsets = (value || "0").split(" "),
          bounds,
          localOffset,
          globalOffset,
          display;
      element = _getTarget(trigger, self) || _body$5;
      bounds = _getBounds$1(element) || {};

      if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle$1(element).display === "none") {
        display = element.style.display;
        element.style.display = "block";
        bounds = _getBounds$1(element);
        display ? element.style.display = display : element.style.removeProperty("display");
      }

      localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
      globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
      value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
      markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
      scrollerSize -= scrollerSize - globalOffset;
    } else {
      containerAnimation && (value = gsap$b.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
      markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
    }

    if (clampZeroProp) {
      self[clampZeroProp] = value || -0.001;
      value < 0 && (value = 0);
    }

    if (marker) {
      var position = value + scrollerSize,
          isStart = marker._isStart;
      p1 = "scroll" + direction.d2;

      _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body$5[p1], _docEl$2[p1]) : marker.parentNode[p1]) <= position + 1);

      if (useFixedPosition) {
        scrollerBounds = _getBounds$1(markerScroller);
        useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
      }
    }

    if (containerAnimation && element) {
      p1 = _getBounds$1(element);
      containerAnimation.seek(scrollerMax);
      p2 = _getBounds$1(element);
      containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
      value = value / containerAnimation._caScrollDist * scrollerMax;
    }

    containerAnimation && containerAnimation.seek(time);
    return containerAnimation ? value : Math.round(value);
  },
      _prefixExp = /(webkit|moz|length|cssText|inset)/i,
      _reparent = function _reparent(element, parent, top, left) {
    if (element.parentNode !== parent) {
      var style = element.style,
          p,
          cs;

      if (parent === _body$5) {
        element._stOrig = style.cssText;
        cs = _getComputedStyle$1(element);

        for (p in cs) {
          if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
            style[p] = cs[p];
          }
        }

        style.top = top;
        style.left = left;
      } else {
        style.cssText = element._stOrig;
      }

      gsap$b.core.getCache(element).uncache = 1;
      parent.appendChild(element);
    }
  },
      _interruptionTracker = function _interruptionTracker(getValueFunc, initialValue, onInterrupt) {
    var last1 = initialValue,
        last2 = last1;
    return function (value) {
      var current = Math.round(getValueFunc());

      if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
        value = current;
        onInterrupt && onInterrupt();
      }

      last2 = last1;
      last1 = value;
      return value;
    };
  },
      _shiftMarker = function _shiftMarker(marker, direction, value) {
    var vars = {};
    vars[direction.p] = "+=" + value;
    gsap$b.set(marker, vars);
  },
      _getTweenCreator = function _getTweenCreator(scroller, direction) {
    var getScroll = _getScrollFunc(scroller, direction),
        prop = "_scroll" + direction.p2,
        getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
      var tween = getTween.tween,
          onComplete = vars.onComplete,
          modifiers = {};
      initialValue = initialValue || getScroll();

      var checkForInterruption = _interruptionTracker(getScroll, initialValue, function () {
        tween.kill();
        getTween.tween = 0;
      });

      change2 = change1 && change2 || 0;
      change1 = change1 || scrollTo - initialValue;
      tween && tween.kill();
      vars[prop] = scrollTo;
      vars.modifiers = modifiers;

      modifiers[prop] = function () {
        return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
      };

      vars.onUpdate = function () {
        exports._scrollers.cache++;

        _updateAll();
      };

      vars.onComplete = function () {
        getTween.tween = 0;
        onComplete && onComplete.call(tween);
      };

      tween = getTween.tween = gsap$b.to(scroller, vars);
      return tween;
    };

    scroller[prop] = getScroll;

    getScroll.wheelHandler = function () {
      return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
    };

    _addListener$2(scroller, "wheel", getScroll.wheelHandler);

    ScrollTrigger$2.isTouch && _addListener$2(scroller, "touchmove", getScroll.wheelHandler);
    return getTween;
  };

  var ScrollTrigger$2 = function () {
    function ScrollTrigger(vars, animation) {
      _coreInitted$8 || ScrollTrigger.register(gsap$b) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");

      _context$3(this);

      this.init(vars, animation);
    }

    var _proto = ScrollTrigger.prototype;

    _proto.init = function init(vars, animation) {
      this.progress = this.start = 0;
      this.vars && this.kill(true, true);

      if (!_enabled) {
        this.update = this.refresh = this.kill = _passThrough$1;
        return;
      }

      vars = _setDefaults$2(_isString$4(vars) || _isNumber$2(vars) || vars.nodeType ? {
        trigger: vars
      } : vars, _defaults$1);

      var _vars = vars,
          onUpdate = _vars.onUpdate,
          toggleClass = _vars.toggleClass,
          id = _vars.id,
          onToggle = _vars.onToggle,
          onRefresh = _vars.onRefresh,
          scrub = _vars.scrub,
          trigger = _vars.trigger,
          pin = _vars.pin,
          pinSpacing = _vars.pinSpacing,
          invalidateOnRefresh = _vars.invalidateOnRefresh,
          anticipatePin = _vars.anticipatePin,
          onScrubComplete = _vars.onScrubComplete,
          onSnapComplete = _vars.onSnapComplete,
          once = _vars.once,
          snap = _vars.snap,
          pinReparent = _vars.pinReparent,
          pinSpacer = _vars.pinSpacer,
          containerAnimation = _vars.containerAnimation,
          fastScrollEnd = _vars.fastScrollEnd,
          preventOverlaps = _vars.preventOverlaps,
          direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical,
          isToggle = !scrub && scrub !== 0,
          scroller = _getTarget(vars.scroller || _win$7),
          scrollerCache = gsap$b.core.getCache(scroller),
          isViewport = _isViewport$1(scroller),
          useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed",
          callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack],
          toggleActions = isToggle && vars.toggleActions.split(" "),
          markers = "markers" in vars ? vars.markers : _defaults$1.markers,
          borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle$1(scroller)["border" + direction.p2 + _Width]) || 0,
          self = this,
          onRefreshInit = vars.onRefreshInit && function () {
        return vars.onRefreshInit(self);
      },
          getScrollerSize = _getSizeFunc(scroller, isViewport, direction),
          getScrollerOffsets = _getOffsetsFunc(scroller, isViewport),
          lastSnap = 0,
          lastRefresh = 0,
          prevProgress = 0,
          scrollFunc = _getScrollFunc(scroller, direction),
          tweenTo,
          pinCache,
          snapFunc,
          scroll1,
          scroll2,
          start,
          end,
          markerStart,
          markerEnd,
          markerStartTrigger,
          markerEndTrigger,
          markerVars,
          executingOnRefresh,
          change,
          pinOriginalState,
          pinActiveState,
          pinState,
          spacer,
          offset,
          pinGetter,
          pinSetter,
          pinStart,
          pinChange,
          spacingStart,
          spacerState,
          markerStartSetter,
          pinMoves,
          markerEndSetter,
          cs,
          snap1,
          snap2,
          scrubTween,
          scrubSmooth,
          snapDurClamp,
          snapDelayedCall,
          prevScroll,
          prevAnimProgress,
          caMarkerSetter,
          customRevertReturn;

      self._startClamp = self._endClamp = false;
      self._dir = direction;
      anticipatePin *= 45;
      self.scroller = scroller;
      self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
      scroll1 = scrollFunc();
      self.vars = vars;
      animation = animation || vars.animation;

      if ("refreshPriority" in vars) {
        _sort = 1;
        vars.refreshPriority === -9999 && (_primary = self);
      }

      scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
        top: _getTweenCreator(scroller, _vertical),
        left: _getTweenCreator(scroller, _horizontal)
      };
      self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];

      self.scrubDuration = function (value) {
        scrubSmooth = _isNumber$2(value) && value;

        if (!scrubSmooth) {
          scrubTween && scrubTween.progress(1).kill();
          scrubTween = 0;
        } else {
          scrubTween ? scrubTween.duration(value) : scrubTween = gsap$b.to(animation, {
            ease: "expo",
            totalProgress: "+=0",
            duration: scrubSmooth,
            paused: true,
            onComplete: function onComplete() {
              return onScrubComplete && onScrubComplete(self);
            }
          });
        }
      };

      if (animation) {
        animation.vars.lazy = false;
        animation._initted && !self.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true);
        self.animation = animation.pause();
        animation.scrollTrigger = self;
        self.scrubDuration(scrub);
        snap1 = 0;
        id || (id = animation.vars.id);
      }

      if (snap) {
        if (!_isObject$2(snap) || snap.push) {
          snap = {
            snapTo: snap
          };
        }

        "scrollBehavior" in _body$5.style && gsap$b.set(isViewport ? [_body$5, _docEl$2] : scroller, {
          scrollBehavior: "auto"
        });

        exports._scrollers.forEach(function (o) {
          return _isFunction$4(o) && o.target === (isViewport ? _doc$6.scrollingElement || _docEl$2 : scroller) && (o.smooth = false);
        });

        snapFunc = _isFunction$4(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap.directional !== false ? function (value, st) {
          return _snapDirectional(snap.snapTo)(value, _getTime$2() - lastRefresh < 500 ? 0 : st.direction);
        } : gsap$b.utils.snap(snap.snapTo);
        snapDurClamp = snap.duration || {
          min: 0.1,
          max: 2
        };
        snapDurClamp = _isObject$2(snapDurClamp) ? _clamp$2(snapDurClamp.min, snapDurClamp.max) : _clamp$2(snapDurClamp, snapDurClamp);
        snapDelayedCall = gsap$b.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function () {
          var scroll = scrollFunc(),
              refreshedRecently = _getTime$2() - lastRefresh < 500,
              tween = tweenTo.tween;

          if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
            var progress = (scroll - start) / change,
                totalProgress = animation && !isToggle ? animation.totalProgress() : progress,
                velocity = refreshedRecently ? 0 : (totalProgress - snap2) / (_getTime$2() - _time2) * 1000 || 0,
                change1 = gsap$b.utils.clamp(-progress, 1 - progress, _abs$1(velocity / 2) * velocity / 0.185),
                naturalEnd = progress + (snap.inertia === false ? 0 : change1),
                endValue = _clamp$2(0, 1, snapFunc(naturalEnd, self)),
                endScroll = Math.round(start + endValue * change),
                _snap = snap,
                onStart = _snap.onStart,
                _onInterrupt = _snap.onInterrupt,
                _onComplete = _snap.onComplete;

            if (scroll <= end && scroll >= start && endScroll !== scroll) {
              if (tween && !tween._initted && tween.data <= _abs$1(endScroll - scroll)) {
                return;
              }

              if (snap.inertia === false) {
                change1 = endValue - progress;
              }

              tweenTo(endScroll, {
                duration: snapDurClamp(_abs$1(Math.max(_abs$1(naturalEnd - totalProgress), _abs$1(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                ease: snap.ease || "power3",
                data: _abs$1(endScroll - scroll),
                onInterrupt: function onInterrupt() {
                  return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
                },
                onComplete: function onComplete() {
                  self.update();
                  lastSnap = scrollFunc();
                  snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                  onSnapComplete && onSnapComplete(self);
                  _onComplete && _onComplete(self);
                }
              }, scroll, change1 * change, endScroll - scroll - change1 * change);
              onStart && onStart(self, tweenTo.tween);
            }
          } else if (self.isActive && lastSnap !== scroll) {
            snapDelayedCall.restart(true);
          }
        }).pause();
      }

      id && (_ids[id] = self);
      trigger = self.trigger = _getTarget(trigger || pin !== true && pin);
      customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
      customRevertReturn && (customRevertReturn = customRevertReturn(self));
      pin = pin === true ? trigger : _getTarget(pin);
      _isString$4(toggleClass) && (toggleClass = {
        targets: trigger,
        className: toggleClass
      });

      if (pin) {
        pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle$1(pin.parentNode).display === "flex" ? false : _padding);
        self.pin = pin;
        pinCache = gsap$b.core.getCache(pin);

        if (!pinCache.spacer) {
          if (pinSpacer) {
            pinSpacer = _getTarget(pinSpacer);
            pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
            pinCache.spacerIsNative = !!pinSpacer;
            pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
          }

          pinCache.spacer = spacer = pinSpacer || _doc$6.createElement("div");
          spacer.classList.add("pin-spacer");
          id && spacer.classList.add("pin-spacer-" + id);
          pinCache.pinState = pinOriginalState = _getState(pin);
        } else {
          pinOriginalState = pinCache.pinState;
        }

        vars.force3D !== false && gsap$b.set(pin, {
          force3D: true
        });
        self.spacer = spacer = pinCache.spacer;
        cs = _getComputedStyle$1(pin);
        spacingStart = cs[pinSpacing + direction.os2];
        pinGetter = gsap$b.getProperty(pin);
        pinSetter = gsap$b.quickSetter(pin, direction.a, _px);

        _swapPinIn(pin, spacer, cs);

        pinState = _getState(pin);
      }

      if (markers) {
        markerVars = _isObject$2(markers) ? _setDefaults$2(markers, _markerDefaults) : _markerDefaults;
        markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
        markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
        offset = markerStartTrigger["offset" + direction.op.d2];

        var content = _getTarget(_getProxyProp(scroller, "content") || scroller);

        markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
        markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
        containerAnimation && (caMarkerSetter = gsap$b.quickSetter([markerStart, markerEnd], direction.a, _px));

        if (!useFixedPosition && !(exports._proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
          _makePositionable(isViewport ? _body$5 : scroller);

          gsap$b.set([markerStartTrigger, markerEndTrigger], {
            force3D: true
          });
          markerStartSetter = gsap$b.quickSetter(markerStartTrigger, direction.a, _px);
          markerEndSetter = gsap$b.quickSetter(markerEndTrigger, direction.a, _px);
        }
      }

      if (containerAnimation) {
        var oldOnUpdate = containerAnimation.vars.onUpdate,
            oldParams = containerAnimation.vars.onUpdateParams;
        containerAnimation.eventCallback("onUpdate", function () {
          self.update(0, 0, 1);
          oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
        });
      }

      self.previous = function () {
        return _triggers[_triggers.indexOf(self) - 1];
      };

      self.next = function () {
        return _triggers[_triggers.indexOf(self) + 1];
      };

      self.revert = function (revert, temp) {
        if (!temp) {
          return self.kill(true);
        }

        var r = revert !== false || !self.enabled,
            prevRefreshing = _refreshing;

        if (r !== self.isReverted) {
          if (r) {
            prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0);
            prevProgress = self.progress;
            prevAnimProgress = animation && animation.progress();
          }

          markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
            return m.style.display = r ? "none" : "block";
          });

          if (r) {
            _refreshing = self;
            self.update(r);
          }

          if (pin && (!pinReparent || !self.isActive)) {
            if (r) {
              _swapPinOut(pin, spacer, pinOriginalState);
            } else {
              _swapPinIn(pin, spacer, _getComputedStyle$1(pin), spacerState);
            }
          }

          r || self.update(r);
          _refreshing = prevRefreshing;
          self.isReverted = r;
        }
      };

      self.refresh = function (soft, force, position, pinOffset) {
        if ((_refreshing || !self.enabled) && !force) {
          return;
        }

        if (pin && soft && _lastScrollTime) {
          _addListener$2(ScrollTrigger, "scrollEnd", _softRefresh);

          return;
        }

        !_refreshingAll && onRefreshInit && onRefreshInit(self);
        _refreshing = self;

        if (tweenTo.tween) {
          tweenTo.tween.kill();
          tweenTo.tween = 0;
        }

        scrubTween && scrubTween.pause();
        invalidateOnRefresh && animation && animation.revert({
          kill: false
        }).invalidate();
        self.isReverted || self.revert(true, true);
        self._subPinOffset = false;

        var size = getScrollerSize(),
            scrollerBounds = getScrollerOffsets(),
            max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction),
            isFirstRefresh = change <= 0.01,
            offset = 0,
            otherPinOffset = pinOffset || 0,
            parsedEnd = _isObject$2(position) ? position.end : vars.end,
            parsedEndTrigger = vars.endTrigger || trigger,
            parsedStart = _isObject$2(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"),
            pinnedContainer = self.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer, self),
            triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0,
            i = triggerIndex,
            cs,
            bounds,
            scroll,
            isVertical,
            override,
            curTrigger,
            curPin,
            oppositeScroll,
            initted,
            revertedPins,
            forcedOverflow,
            markerStartOffset,
            markerEndOffset;

        if (markers && _isObject$2(position)) {
          markerStartOffset = gsap$b.getProperty(markerStartTrigger, direction.p);
          markerEndOffset = gsap$b.getProperty(markerEndTrigger, direction.p);
        }

        while (i--) {
          curTrigger = _triggers[i];
          curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self);
          curPin = curTrigger.pin;

          if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
            revertedPins || (revertedPins = []);
            revertedPins.unshift(curTrigger);
            curTrigger.revert(true, true);
          }

          if (curTrigger !== _triggers[i]) {
            triggerIndex--;
            i--;
          }
        }

        _isFunction$4(parsedStart) && (parsedStart = parsedStart(self));
        parsedStart = _parseClamp(parsedStart, "start", self);
        start = _parsePosition$1(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._startClamp && "_startClamp") || (pin ? -0.001 : 0);
        _isFunction$4(parsedEnd) && (parsedEnd = parsedEnd(self));

        if (_isString$4(parsedEnd) && !parsedEnd.indexOf("+=")) {
          if (~parsedEnd.indexOf(" ")) {
            parsedEnd = (_isString$4(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
          } else {
            offset = _offsetToPx(parsedEnd.substr(2), size);
            parsedEnd = _isString$4(parsedStart) ? parsedStart : (containerAnimation ? gsap$b.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset;
            parsedEndTrigger = trigger;
          }
        }

        parsedEnd = _parseClamp(parsedEnd, "end", self);
        end = Math.max(start, _parsePosition$1(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._endClamp && "_endClamp")) || -0.001;
        offset = 0;
        i = triggerIndex;

        while (i--) {
          curTrigger = _triggers[i];
          curPin = curTrigger.pin;

          if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
            cs = curTrigger.end - (self._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);

            if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) {
              offset += cs * (1 - curTrigger.progress);
            }

            curPin === pin && (otherPinOffset += cs);
          }
        }

        start += offset;
        end += offset;
        self._startClamp && (self._startClamp += offset);

        if (self._endClamp && !_refreshingAll) {
          self._endClamp = end || -0.001;
          end = Math.min(end, _maxScroll(scroller, direction));
        }

        change = end - start || (start -= 0.01) && 0.001;

        if (isFirstRefresh) {
          prevProgress = gsap$b.utils.clamp(0, 1, gsap$b.utils.normalize(start, end, prevScroll));
        }

        self._pinPush = otherPinOffset;

        if (markerStart && offset) {
          cs = {};
          cs[direction.a] = "+=" + offset;
          pinnedContainer && (cs[direction.p] = "-=" + scrollFunc());
          gsap$b.set([markerStart, markerEnd], cs);
        }

        if (pin) {
          cs = _getComputedStyle$1(pin);
          isVertical = direction === _vertical;
          scroll = scrollFunc();
          pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;

          if (!max && end > 1) {
            forcedOverflow = (isViewport ? _doc$6.scrollingElement || _docEl$2 : scroller).style;
            forcedOverflow = {
              style: forcedOverflow,
              value: forcedOverflow["overflow" + direction.a.toUpperCase()]
            };

            if (isViewport && _getComputedStyle$1(_body$5)["overflow" + direction.a.toUpperCase()] !== "scroll") {
              forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
            }
          }

          _swapPinIn(pin, spacer, cs);

          pinState = _getState(pin);
          bounds = _getBounds$1(pin, true);
          oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();

          if (pinSpacing) {
            spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
            spacerState.t = spacer;
            i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
            i && spacerState.push(direction.d, i + _px);

            _setState(spacerState);

            if (pinnedContainer) {
              _triggers.forEach(function (t) {
                if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) {
                  t._subPinOffset = true;
                }
              });
            }

            useFixedPosition && scrollFunc(prevScroll);
          }

          if (useFixedPosition) {
            override = {
              top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
              left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
              boxSizing: "border-box",
              position: "fixed"
            };
            override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
            override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
            override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
            override[_padding] = cs[_padding];
            override[_padding + _Top] = cs[_padding + _Top];
            override[_padding + _Right] = cs[_padding + _Right];
            override[_padding + _Bottom] = cs[_padding + _Bottom];
            override[_padding + _Left] = cs[_padding + _Left];
            pinActiveState = _copyState(pinOriginalState, override, pinReparent);
            _refreshingAll && scrollFunc(0);
          }

          if (animation) {
            initted = animation._initted;

            _suppressOverwrites$1(1);

            animation.render(animation.duration(), true, true);
            pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
            pinMoves = Math.abs(change - pinChange) > 1;
            useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2);
            animation.render(0, true, true);
            initted || animation.invalidate(true);
            animation.parent || animation.totalTime(animation.totalTime());

            _suppressOverwrites$1(0);
          } else {
            pinChange = change;
          }

          forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
        } else if (trigger && scrollFunc() && !containerAnimation) {
          bounds = trigger.parentNode;

          while (bounds && bounds !== _body$5) {
            if (bounds._pinOffset) {
              start -= bounds._pinOffset;
              end -= bounds._pinOffset;
            }

            bounds = bounds.parentNode;
          }
        }

        revertedPins && revertedPins.forEach(function (t) {
          return t.revert(false, true);
        });
        self.start = start;
        self.end = end;
        scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc();

        if (!containerAnimation && !_refreshingAll) {
          scroll1 < prevScroll && scrollFunc(prevScroll);
          self.scroll.rec = 0;
        }

        self.revert(false, true);
        lastRefresh = _getTime$2();

        if (snapDelayedCall) {
          lastSnap = -1;
          self.isActive && scrollFunc(start + change * prevProgress);
          snapDelayedCall.restart(true);
        }

        _refreshing = 0;
        animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true);

        if (isFirstRefresh || prevProgress !== self.progress || containerAnimation) {
          animation && !isToggle && animation.totalProgress(containerAnimation && start < -0.001 && !prevProgress ? gsap$b.utils.normalize(start, end, 0) : prevProgress, true);
          self.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
        }

        pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
        scrubTween && scrubTween.invalidate();

        if (!isNaN(markerStartOffset)) {
          markerStartOffset -= gsap$b.getProperty(markerStartTrigger, direction.p);
          markerEndOffset -= gsap$b.getProperty(markerEndTrigger, direction.p);

          _shiftMarker(markerStartTrigger, direction, markerStartOffset);

          _shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));

          _shiftMarker(markerEndTrigger, direction, markerEndOffset);

          _shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
        }

        isFirstRefresh && !_refreshingAll && self.update();

        if (onRefresh && !_refreshingAll && !executingOnRefresh) {
          executingOnRefresh = true;
          onRefresh(self);
          executingOnRefresh = false;
        }
      };

      self.getVelocity = function () {
        return (scrollFunc() - scroll2) / (_getTime$2() - _time2) * 1000 || 0;
      };

      self.endAnimation = function () {
        _endAnimation(self.callbackAnimation);

        if (animation) {
          scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
        }
      };

      self.labelToScroll = function (label) {
        return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
      };

      self.getTrailing = function (name) {
        var i = _triggers.indexOf(self),
            a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);

        return (_isString$4(name) ? a.filter(function (t) {
          return t.vars.preventOverlaps === name;
        }) : a).filter(function (t) {
          return self.direction > 0 ? t.end <= start : t.start >= end;
        });
      };

      self.update = function (reset, recordVelocity, forceFake) {
        if (containerAnimation && !forceFake && !reset) {
          return;
        }

        var scroll = _refreshingAll === true ? prevScroll : self.scroll(),
            p = reset ? 0 : (scroll - start) / change,
            clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0,
            prevProgress = self.progress,
            isActive,
            wasActive,
            toggleState,
            action,
            stateChanged,
            toggled,
            isAtMax,
            isTakingAction;

        if (recordVelocity) {
          scroll2 = scroll1;
          scroll1 = containerAnimation ? scrollFunc() : scroll;

          if (snap) {
            snap2 = snap1;
            snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
          }
        }

        anticipatePin && !clipped && pin && !_refreshing && !_startup$1 && _lastScrollTime && start < scroll + (scroll - scroll2) / (_getTime$2() - _time2) * anticipatePin && (clipped = 0.0001);

        if (clipped !== prevProgress && self.enabled) {
          isActive = self.isActive = !!clipped && clipped < 1;
          wasActive = !!prevProgress && prevProgress < 1;
          toggled = isActive !== wasActive;
          stateChanged = toggled || !!clipped !== !!prevProgress;
          self.direction = clipped > prevProgress ? 1 : -1;
          self.progress = clipped;

          if (stateChanged && !_refreshing) {
            toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3;

            if (isToggle) {
              action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
              isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
            }
          }

          preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction$4(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function (t) {
            return t.endAnimation();
          }));

          if (!isToggle) {
            if (scrubTween && !_refreshing && !_startup$1) {
              scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start);

              if (scrubTween.resetTo) {
                scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
              } else {
                scrubTween.vars.totalProgress = clipped;
                scrubTween.invalidate().restart();
              }
            } else if (animation) {
              animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)));
            }
          }

          if (pin) {
            reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);

            if (!useFixedPosition) {
              pinSetter(_round$5(pinStart + pinChange * clipped));
            } else if (stateChanged) {
              isAtMax = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);

              if (pinReparent) {
                if (!reset && (isActive || isAtMax)) {
                  var bounds = _getBounds$1(pin, true),
                      _offset = scroll - start;

                  _reparent(pin, _body$5, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
                } else {
                  _reparent(pin, spacer);
                }
              }

              _setState(isActive || isAtMax ? pinActiveState : pinState);

              pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
            }
          }

          snap && !tweenTo.tween && !_refreshing && !_startup$1 && snapDelayedCall.restart(true);
          toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray$4(toggleClass.targets).forEach(function (el) {
            return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
          });
          onUpdate && !isToggle && !reset && onUpdate(self);

          if (stateChanged && !_refreshing) {
            if (isToggle) {
              if (isTakingAction) {
                if (action === "complete") {
                  animation.pause().totalProgress(1);
                } else if (action === "reset") {
                  animation.restart(true).pause();
                } else if (action === "restart") {
                  animation.restart(true);
                } else {
                  animation[action]();
                }
              }

              onUpdate && onUpdate(self);
            }

            if (toggled || !_limitCallbacks) {
              onToggle && toggled && _callback$1(self, onToggle);
              callbacks[toggleState] && _callback$1(self, callbacks[toggleState]);
              once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0);

              if (!toggled) {
                toggleState = clipped === 1 ? 1 : 3;
                callbacks[toggleState] && _callback$1(self, callbacks[toggleState]);
              }
            }

            if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber$2(fastScrollEnd) ? fastScrollEnd : 2500)) {
              _endAnimation(self.callbackAnimation);

              scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
            }
          } else if (isToggle && onUpdate && !_refreshing) {
            onUpdate(self);
          }
        }

        if (markerEndSetter) {
          var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
          markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
          markerEndSetter(n);
        }

        caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
      };

      self.enable = function (reset, refresh) {
        if (!self.enabled) {
          self.enabled = true;

          _addListener$2(scroller, "resize", _onResize);

          _addListener$2(isViewport ? _doc$6 : scroller, "scroll", _onScroll$1);

          onRefreshInit && _addListener$2(ScrollTrigger, "refreshInit", onRefreshInit);

          if (reset !== false) {
            self.progress = prevProgress = 0;
            scroll1 = scroll2 = lastSnap = scrollFunc();
          }

          refresh !== false && self.refresh();
        }
      };

      self.getTween = function (snap) {
        return snap && tweenTo ? tweenTo.tween : scrubTween;
      };

      self.setPositions = function (newStart, newEnd, keepClamp, pinOffset) {
        if (containerAnimation) {
          var st = containerAnimation.scrollTrigger,
              duration = containerAnimation.duration(),
              _change = st.end - st.start;

          newStart = st.start + _change * newStart / duration;
          newEnd = st.start + _change * newEnd / duration;
        }

        self.refresh(false, false, {
          start: _keepClamp(newStart, keepClamp && !!self._startClamp),
          end: _keepClamp(newEnd, keepClamp && !!self._endClamp)
        }, pinOffset);
        self.update();
      };

      self.adjustPinSpacing = function (amount) {
        if (spacerState && amount) {
          var i = spacerState.indexOf(direction.d) + 1;
          spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
          spacerState[1] = parseFloat(spacerState[1]) + amount + _px;

          _setState(spacerState);
        }
      };

      self.disable = function (reset, allowAnimation) {
        if (self.enabled) {
          reset !== false && self.revert(true, true);
          self.enabled = self.isActive = false;
          allowAnimation || scrubTween && scrubTween.pause();
          prevScroll = 0;
          pinCache && (pinCache.uncache = 1);
          onRefreshInit && _removeListener$2(ScrollTrigger, "refreshInit", onRefreshInit);

          if (snapDelayedCall) {
            snapDelayedCall.pause();
            tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
          }

          if (!isViewport) {
            var i = _triggers.length;

            while (i--) {
              if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
                return;
              }
            }

            _removeListener$2(scroller, "resize", _onResize);

            _removeListener$2(scroller, "scroll", _onScroll$1);
          }
        }
      };

      self.kill = function (revert, allowAnimation) {
        self.disable(revert, allowAnimation);
        scrubTween && !allowAnimation && scrubTween.kill();
        id && delete _ids[id];

        var i = _triggers.indexOf(self);

        i >= 0 && _triggers.splice(i, 1);
        i === _i && _direction > 0 && _i--;
        i = 0;

        _triggers.forEach(function (t) {
          return t.scroller === self.scroller && (i = 1);
        });

        i || _refreshingAll || (self.scroll.rec = 0);

        if (animation) {
          animation.scrollTrigger = null;
          revert && animation.revert({
            kill: false
          });
          allowAnimation || animation.kill();
        }

        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
          return m.parentNode && m.parentNode.removeChild(m);
        });
        _primary === self && (_primary = 0);

        if (pin) {
          pinCache && (pinCache.uncache = 1);
          i = 0;

          _triggers.forEach(function (t) {
            return t.pin === pin && i++;
          });

          i || (pinCache.spacer = 0);
        }

        vars.onKill && vars.onKill(self);
      };

      _triggers.push(self);

      self.enable(false, false);
      customRevertReturn && customRevertReturn(self);

      if (animation && animation.add && !change) {
        var updateFunc = self.update;

        self.update = function () {
          self.update = updateFunc;
          start || end || self.refresh();
        };

        gsap$b.delayedCall(0.01, self.update);
        change = 0.01;
        start = end = 0;
      } else {
        self.refresh();
      }

      pin && _queueRefreshAll();
    };

    ScrollTrigger.register = function register(core) {
      if (!_coreInitted$8) {
        gsap$b = core || _getGSAP$9();
        _windowExists$7() && window.document && ScrollTrigger.enable();
        _coreInitted$8 = _enabled;
      }

      return _coreInitted$8;
    };

    ScrollTrigger.defaults = function defaults(config) {
      if (config) {
        for (var p in config) {
          _defaults$1[p] = config[p];
        }
      }

      return _defaults$1;
    };

    ScrollTrigger.disable = function disable(reset, kill) {
      _enabled = 0;

      _triggers.forEach(function (trigger) {
        return trigger[kill ? "kill" : "disable"](reset);
      });

      _removeListener$2(_win$7, "wheel", _onScroll$1);

      _removeListener$2(_doc$6, "scroll", _onScroll$1);

      clearInterval(_syncInterval);

      _removeListener$2(_doc$6, "touchcancel", _passThrough$1);

      _removeListener$2(_body$5, "touchstart", _passThrough$1);

      _multiListener(_removeListener$2, _doc$6, "pointerdown,touchstart,mousedown", _pointerDownHandler);

      _multiListener(_removeListener$2, _doc$6, "pointerup,touchend,mouseup", _pointerUpHandler);

      _resizeDelay.kill();

      _iterateAutoRefresh(_removeListener$2);

      for (var i = 0; i < exports._scrollers.length; i += 3) {
        _wheelListener(_removeListener$2, exports._scrollers[i], exports._scrollers[i + 1]);

        _wheelListener(_removeListener$2, exports._scrollers[i], exports._scrollers[i + 2]);
      }
    };

    ScrollTrigger.enable = function enable() {
      _win$7 = window;
      _doc$6 = document;
      _docEl$2 = _doc$6.documentElement;
      _body$5 = _doc$6.body;

      if (gsap$b) {
        _toArray$4 = gsap$b.utils.toArray;
        _clamp$2 = gsap$b.utils.clamp;
        _context$3 = gsap$b.core.context || _passThrough$1;
        _suppressOverwrites$1 = gsap$b.core.suppressOverwrites || _passThrough$1;
        _scrollRestoration = _win$7.history.scrollRestoration || "auto";
        _lastScroll = _win$7.pageYOffset;
        gsap$b.core.globals("ScrollTrigger", ScrollTrigger);

        if (_body$5) {
          _enabled = 1;

          _rafBugFix();

          Observer.register(gsap$b);
          ScrollTrigger.isTouch = Observer.isTouch;
          _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);

          _addListener$2(_win$7, "wheel", _onScroll$1);

          _root$1 = [_win$7, _doc$6, _docEl$2, _body$5];

          if (gsap$b.matchMedia) {
            ScrollTrigger.matchMedia = function (vars) {
              var mm = gsap$b.matchMedia(),
                  p;

              for (p in vars) {
                mm.add(p, vars[p]);
              }

              return mm;
            };

            gsap$b.addEventListener("matchMediaInit", function () {
              return _revertAll();
            });
            gsap$b.addEventListener("matchMediaRevert", function () {
              return _revertRecorded();
            });
            gsap$b.addEventListener("matchMedia", function () {
              _refreshAll(0, 1);

              _dispatch$1("matchMedia");
            });
            gsap$b.matchMedia("(orientation: portrait)", function () {
              _setBaseDimensions();

              return _setBaseDimensions;
            });
          } else {
            console.warn("Requires GSAP 3.11.0 or later");
          }

          _setBaseDimensions();

          _addListener$2(_doc$6, "scroll", _onScroll$1);

          var bodyStyle = _body$5.style,
              border = bodyStyle.borderTopStyle,
              AnimationProto = gsap$b.core.Animation.prototype,
              bounds,
              i;
          AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
            value: function value() {
              return this.time(-0.01, true);
            }
          });
          bodyStyle.borderTopStyle = "solid";
          bounds = _getBounds$1(_body$5);
          _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
          _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
          border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
          _syncInterval = setInterval(_sync, 250);
          gsap$b.delayedCall(0.5, function () {
            return _startup$1 = 0;
          });

          _addListener$2(_doc$6, "touchcancel", _passThrough$1);

          _addListener$2(_body$5, "touchstart", _passThrough$1);

          _multiListener(_addListener$2, _doc$6, "pointerdown,touchstart,mousedown", _pointerDownHandler);

          _multiListener(_addListener$2, _doc$6, "pointerup,touchend,mouseup", _pointerUpHandler);

          _transformProp$3 = gsap$b.utils.checkPrefix("transform");

          _stateProps.push(_transformProp$3);

          _coreInitted$8 = _getTime$2();
          _resizeDelay = gsap$b.delayedCall(0.2, _refreshAll).pause();
          _autoRefresh = [_doc$6, "visibilitychange", function () {
            var w = _win$7.innerWidth,
                h = _win$7.innerHeight;

            if (_doc$6.hidden) {
              _prevWidth = w;
              _prevHeight = h;
            } else if (_prevWidth !== w || _prevHeight !== h) {
              _onResize();
            }
          }, _doc$6, "DOMContentLoaded", _refreshAll, _win$7, "load", _refreshAll, _win$7, "resize", _onResize];

          _iterateAutoRefresh(_addListener$2);

          _triggers.forEach(function (trigger) {
            return trigger.enable(0, 1);
          });

          for (i = 0; i < exports._scrollers.length; i += 3) {
            _wheelListener(_removeListener$2, exports._scrollers[i], exports._scrollers[i + 1]);

            _wheelListener(_removeListener$2, exports._scrollers[i], exports._scrollers[i + 2]);
          }
        }
      }
    };

    ScrollTrigger.config = function config(vars) {
      "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
      var ms = vars.syncInterval;
      ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
      "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger.isTouch === 1 && vars.ignoreMobileResize);

      if ("autoRefreshEvents" in vars) {
        _iterateAutoRefresh(_removeListener$2) || _iterateAutoRefresh(_addListener$2, vars.autoRefreshEvents || "none");
        _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
      }
    };

    ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
      var t = _getTarget(target),
          i = exports._scrollers.indexOf(t),
          isViewport = _isViewport$1(t);

      if (~i) {
        exports._scrollers.splice(i, isViewport ? 6 : 2);
      }

      if (vars) {
        isViewport ? exports._proxies.unshift(_win$7, vars, _body$5, vars, _docEl$2, vars) : exports._proxies.unshift(t, vars);
      }
    };

    ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
      _triggers.forEach(function (t) {
        return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
      });
    };

    ScrollTrigger.isInViewport = function isInViewport(element, ratio, horizontal) {
      var bounds = (_isString$4(element) ? _getTarget(element) : element).getBoundingClientRect(),
          offset = bounds[horizontal ? _width : _height] * ratio || 0;
      return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win$7.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win$7.innerHeight;
    };

    ScrollTrigger.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
      _isString$4(element) && (element = _getTarget(element));
      var bounds = element.getBoundingClientRect(),
          size = bounds[horizontal ? _width : _height],
          offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
      return horizontal ? (bounds.left + offset) / _win$7.innerWidth : (bounds.top + offset) / _win$7.innerHeight;
    };

    ScrollTrigger.killAll = function killAll(allowListeners) {
      _triggers.slice(0).forEach(function (t) {
        return t.vars.id !== "ScrollSmoother" && t.kill();
      });

      if (allowListeners !== true) {
        var listeners = _listeners$1.killAll || [];
        _listeners$1 = {};
        listeners.forEach(function (f) {
          return f();
        });
      }
    };

    return ScrollTrigger;
  }();
  ScrollTrigger$2.version = "3.12.1";

  ScrollTrigger$2.saveStyles = function (targets) {
    return targets ? _toArray$4(targets).forEach(function (target) {
      if (target && target.style) {
        var i = _savedStyles.indexOf(target);

        i >= 0 && _savedStyles.splice(i, 5);

        _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap$b.core.getCache(target), _context$3());
      }
    }) : _savedStyles;
  };

  ScrollTrigger$2.revert = function (soft, media) {
    return _revertAll(!soft, media);
  };

  ScrollTrigger$2.create = function (vars, animation) {
    return new ScrollTrigger$2(vars, animation);
  };

  ScrollTrigger$2.refresh = function (safe) {
    return safe ? _onResize() : (_coreInitted$8 || ScrollTrigger$2.register()) && _refreshAll(true);
  };

  ScrollTrigger$2.update = function (force) {
    return ++exports._scrollers.cache && _updateAll(force === true ? 2 : 0);
  };

  ScrollTrigger$2.clearScrollMemory = _clearScrollMemory;

  ScrollTrigger$2.maxScroll = function (element, horizontal) {
    return _maxScroll(element, horizontal ? _horizontal : _vertical);
  };

  ScrollTrigger$2.getScrollFunc = function (element, horizontal) {
    return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
  };

  ScrollTrigger$2.getById = function (id) {
    return _ids[id];
  };

  ScrollTrigger$2.getAll = function () {
    return _triggers.filter(function (t) {
      return t.vars.id !== "ScrollSmoother";
    });
  };

  ScrollTrigger$2.isScrolling = function () {
    return !!_lastScrollTime;
  };

  ScrollTrigger$2.snapDirectional = _snapDirectional;

  ScrollTrigger$2.addEventListener = function (type, callback) {
    var a = _listeners$1[type] || (_listeners$1[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  };

  ScrollTrigger$2.removeEventListener = function (type, callback) {
    var a = _listeners$1[type],
        i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
  };

  ScrollTrigger$2.batch = function (targets, vars) {
    var result = [],
        varsCopy = {},
        interval = vars.interval || 0.016,
        batchMax = vars.batchMax || 1e9,
        proxyCallback = function proxyCallback(type, callback) {
      var elements = [],
          triggers = [],
          delay = gsap$b.delayedCall(interval, function () {
        callback(elements, triggers);
        elements = [];
        triggers = [];
      }).pause();
      return function (self) {
        elements.length || delay.restart(true);
        elements.push(self.trigger);
        triggers.push(self);
        batchMax <= elements.length && delay.progress(1);
      };
    },
        p;

    for (p in vars) {
      varsCopy[p] = p.substr(0, 2) === "on" && _isFunction$4(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
    }

    if (_isFunction$4(batchMax)) {
      batchMax = batchMax();

      _addListener$2(ScrollTrigger$2, "refresh", function () {
        return batchMax = vars.batchMax();
      });
    }

    _toArray$4(targets).forEach(function (target) {
      var config = {};

      for (p in varsCopy) {
        config[p] = varsCopy[p];
      }

      config.trigger = target;
      result.push(ScrollTrigger$2.create(config));
    });

    return result;
  };

  var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier(scrollFunc, current, end, max) {
    current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
    return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
  },
      _allowNativePanning = function _allowNativePanning(target, direction) {
    if (direction === true) {
      target.style.removeProperty("touch-action");
    } else {
      target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none";
    }

    target === _docEl$2 && _allowNativePanning(_body$5, direction);
  },
      _overflow = {
    auto: 1,
    scroll: 1
  },
      _nestedScroll = function _nestedScroll(_ref5) {
    var event = _ref5.event,
        target = _ref5.target,
        axis = _ref5.axis;

    var node = (event.changedTouches ? event.changedTouches[0] : event).target,
        cache = node._gsap || gsap$b.core.getCache(node),
        time = _getTime$2(),
        cs;

    if (!cache._isScrollT || time - cache._isScrollT > 2000) {
      while (node && node !== _body$5 && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle$1(node)).overflowY] || _overflow[cs.overflowX]))) {
        node = node.parentNode;
      }

      cache._isScroll = node && node !== target && !_isViewport$1(node) && (_overflow[(cs = _getComputedStyle$1(node)).overflowY] || _overflow[cs.overflowX]);
      cache._isScrollT = time;
    }

    if (cache._isScroll || axis === "x") {
      event.stopPropagation();
      event._gsapAllow = true;
    }
  },
      _inputObserver = function _inputObserver(target, type, inputs, nested) {
    return Observer.create({
      target: target,
      capture: true,
      debounce: false,
      lockAxis: true,
      type: type,
      onWheel: nested = nested && _nestedScroll,
      onPress: nested,
      onDrag: nested,
      onScroll: nested,
      onEnable: function onEnable() {
        return inputs && _addListener$2(_doc$6, Observer.eventTypes[0], _captureInputs, false, true);
      },
      onDisable: function onDisable() {
        return _removeListener$2(_doc$6, Observer.eventTypes[0], _captureInputs, true);
      }
    });
  },
      _inputExp = /(input|label|select|textarea)/i,
      _inputIsFocused,
      _captureInputs = function _captureInputs(e) {
    var isInput = _inputExp.test(e.target.tagName);

    if (isInput || _inputIsFocused) {
      e._gsapAllow = true;
      _inputIsFocused = isInput;
    }
  },
      _getScrollNormalizer = function _getScrollNormalizer(vars) {
    _isObject$2(vars) || (vars = {});
    vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
    vars.type || (vars.type = "wheel,touch");
    vars.debounce = !!vars.debounce;
    vars.id = vars.id || "normalizer";

    var _vars2 = vars,
        normalizeScrollX = _vars2.normalizeScrollX,
        momentum = _vars2.momentum,
        allowNestedScroll = _vars2.allowNestedScroll,
        onRelease = _vars2.onRelease,
        self,
        maxY,
        target = _getTarget(vars.target) || _docEl$2,
        smoother = gsap$b.core.globals().ScrollSmoother,
        smootherInstance = smoother && smoother.get(),
        content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()),
        scrollFuncY = _getScrollFunc(target, _vertical),
        scrollFuncX = _getScrollFunc(target, _horizontal),
        scale = 1,
        initialScale = (Observer.isTouch && _win$7.visualViewport ? _win$7.visualViewport.scale * _win$7.visualViewport.width : _win$7.outerWidth) / _win$7.innerWidth,
        wheelRefresh = 0,
        resolveMomentumDuration = _isFunction$4(momentum) ? function () {
      return momentum(self);
    } : function () {
      return momentum || 2.8;
    },
        lastRefreshID,
        skipTouchMove,
        inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll),
        resumeTouchMove = function resumeTouchMove() {
      return skipTouchMove = false;
    },
        scrollClampX = _passThrough$1,
        scrollClampY = _passThrough$1,
        updateClamps = function updateClamps() {
      maxY = _maxScroll(target, _vertical);
      scrollClampY = _clamp$2(_fixIOSBug ? 1 : 0, maxY);
      normalizeScrollX && (scrollClampX = _clamp$2(0, _maxScroll(target, _horizontal)));
      lastRefreshID = _refreshID;
    },
        removeContentOffset = function removeContentOffset() {
      content._gsap.y = _round$5(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
      content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
      scrollFuncY.offset = scrollFuncY.cacheID = 0;
    },
        ignoreDrag = function ignoreDrag() {
      if (skipTouchMove) {
        requestAnimationFrame(resumeTouchMove);

        var offset = _round$5(self.deltaY / 2),
            scroll = scrollClampY(scrollFuncY.v - offset);

        if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
          scrollFuncY.offset = scroll - scrollFuncY.v;

          var y = _round$5((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);

          content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
          content._gsap.y = y + "px";
          scrollFuncY.cacheID = exports._scrollers.cache;

          _updateAll();
        }

        return true;
      }

      scrollFuncY.offset && removeContentOffset();
      skipTouchMove = true;
    },
        tween,
        startScrollX,
        startScrollY,
        onStopDelayedCall,
        onResize = function onResize() {
      updateClamps();

      if (tween.isActive() && tween.vars.scrollY > maxY) {
        scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
      }
    };

    content && gsap$b.set(content, {
      y: "+=0"
    });

    vars.ignoreCheck = function (e) {
      return _fixIOSBug && e.type === "touchmove" && ignoreDrag() || scale > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
    };

    vars.onPress = function () {
      skipTouchMove = false;
      var prevScale = scale;
      scale = _round$5((_win$7.visualViewport && _win$7.visualViewport.scale || 1) / initialScale);
      tween.pause();
      prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
      startScrollX = scrollFuncX();
      startScrollY = scrollFuncY();
      updateClamps();
      lastRefreshID = _refreshID;
    };

    vars.onRelease = vars.onGestureStart = function (self, wasDragging) {
      scrollFuncY.offset && removeContentOffset();

      if (!wasDragging) {
        onStopDelayedCall.restart(true);
      } else {
        exports._scrollers.cache++;
        var dur = resolveMomentumDuration(),
            currentScroll,
            endScroll;

        if (normalizeScrollX) {
          currentScroll = scrollFuncX();
          endScroll = currentScroll + dur * 0.05 * -self.velocityX / 0.227;
          dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
          tween.vars.scrollX = scrollClampX(endScroll);
        }

        currentScroll = scrollFuncY();
        endScroll = currentScroll + dur * 0.05 * -self.velocityY / 0.227;
        dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
        tween.vars.scrollY = scrollClampY(endScroll);
        tween.invalidate().duration(dur).play(0.01);

        if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
          gsap$b.to({}, {
            onUpdate: onResize,
            duration: dur
          });
        }
      }

      onRelease && onRelease(self);
    };

    vars.onWheel = function () {
      tween._ts && tween.pause();

      if (_getTime$2() - wheelRefresh > 1000) {
        lastRefreshID = 0;
        wheelRefresh = _getTime$2();
      }
    };

    vars.onChange = function (self, dx, dy, xArray, yArray) {
      _refreshID !== lastRefreshID && updateClamps();
      dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self.startX - self.x) : scrollFuncX() + dx - xArray[1]));

      if (dy) {
        scrollFuncY.offset && removeContentOffset();
        var isTouch = yArray[2] === dy,
            y = isTouch ? startScrollY + self.startY - self.y : scrollFuncY() + dy - yArray[1],
            yClamped = scrollClampY(y);
        isTouch && y !== yClamped && (startScrollY += yClamped - y);
        scrollFuncY(yClamped);
      }

      (dy || dx) && _updateAll();
    };

    vars.onEnable = function () {
      _allowNativePanning(target, normalizeScrollX ? false : "x");

      ScrollTrigger$2.addEventListener("refresh", onResize);

      _addListener$2(_win$7, "resize", onResize);

      if (scrollFuncY.smooth) {
        scrollFuncY.target.style.scrollBehavior = "auto";
        scrollFuncY.smooth = scrollFuncX.smooth = false;
      }

      inputObserver.enable();
    };

    vars.onDisable = function () {
      _allowNativePanning(target, true);

      _removeListener$2(_win$7, "resize", onResize);

      ScrollTrigger$2.removeEventListener("refresh", onResize);
      inputObserver.kill();
    };

    vars.lockAxis = vars.lockAxis !== false;
    self = new Observer(vars);
    self.iOS = _fixIOSBug;
    _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
    _fixIOSBug && gsap$b.ticker.add(_passThrough$1);
    onStopDelayedCall = self._dc;
    tween = gsap$b.to(self, {
      ease: "power4",
      paused: true,
      scrollX: normalizeScrollX ? "+=0.1" : "+=0",
      scrollY: "+=0.1",
      modifiers: {
        scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function () {
          return tween.pause();
        })
      },
      onUpdate: _updateAll,
      onComplete: onStopDelayedCall.vars.onComplete
    });
    return self;
  };

  ScrollTrigger$2.sort = function (func) {
    return _triggers.sort(func || function (a, b) {
      return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
    });
  };

  ScrollTrigger$2.observe = function (vars) {
    return new Observer(vars);
  };

  ScrollTrigger$2.normalizeScroll = function (vars) {
    if (typeof vars === "undefined") {
      return _normalizer$1;
    }

    if (vars === true && _normalizer$1) {
      return _normalizer$1.enable();
    }

    if (vars === false) {
      return _normalizer$1 && _normalizer$1.kill();
    }

    var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
    _normalizer$1 && _normalizer$1.target === normalizer.target && _normalizer$1.kill();
    _isViewport$1(normalizer.target) && (_normalizer$1 = normalizer);
    return normalizer;
  };

  ScrollTrigger$2.core = {
    _getVelocityProp: _getVelocityProp,
    _inputObserver: _inputObserver,
    _scrollers: exports._scrollers,
    _proxies: exports._proxies,
    bridge: {
      ss: function ss() {
        _lastScrollTime || _dispatch$1("scrollStart");
        _lastScrollTime = _getTime$2();
      },
      ref: function ref() {
        return _refreshing;
      }
    }
  };
  _getGSAP$9() && gsap$b.registerPlugin(ScrollTrigger$2);

  var _trimExp = /(?:^\s+|\s+$)/g;
  var emojiExp = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
  function getText(e) {
    var type = e.nodeType,
        result = "";

    if (type === 1 || type === 9 || type === 11) {
      if (typeof e.textContent === "string") {
        return e.textContent;
      } else {
        for (e = e.firstChild; e; e = e.nextSibling) {
          result += getText(e);
        }
      }
    } else if (type === 3 || type === 4) {
      return e.nodeValue;
    }

    return result;
  }
  function splitInnerHTML(element, delimiter, trim, preserveSpaces) {
    var node = element.firstChild,
        result = [],
        s;

    while (node) {
      if (node.nodeType === 3) {
        s = (node.nodeValue + "").replace(/^\n+/g, "");

        if (!preserveSpaces) {
          s = s.replace(/\s+/g, " ");
        }

        result.push.apply(result, emojiSafeSplit(s, delimiter, trim, preserveSpaces));
      } else if ((node.nodeName + "").toLowerCase() === "br") {
        result[result.length - 1] += "<br>";
      } else {
        result.push(node.outerHTML);
      }

      node = node.nextSibling;
    }

    s = result.length;

    while (s--) {
      result[s] === "&" && result.splice(s, 1, "&amp;");
    }

    return result;
  }
  function emojiSafeSplit(text, delimiter, trim, preserveSpaces) {
    text += "";
    trim && (text = text.trim ? text.trim() : text.replace(_trimExp, ""));

    if (delimiter && delimiter !== "") {
      return text.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(delimiter);
    }

    var result = [],
        l = text.length,
        i = 0,
        j,
        character;

    for (; i < l; i++) {
      character = text.charAt(i);

      if (character.charCodeAt(0) >= 0xD800 && character.charCodeAt(0) <= 0xDBFF || text.charCodeAt(i + 1) >= 0xFE00 && text.charCodeAt(i + 1) <= 0xFE0F) {
        j = ((text.substr(i, 12).split(emojiExp) || [])[1] || "").length || 2;
        character = text.substr(i, j);
        result.emoji = 1;
        i += j - 1;
      }

      result.push(character === ">" ? "&gt;" : character === "<" ? "&lt;" : preserveSpaces && character === " " && (text.charAt(i - 1) === " " || text.charAt(i + 1) === " ") ? "&nbsp;" : character);
    }

    return result;
  }

  /*!
   * TextPlugin 3.12.1
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */

  var gsap$c,
      _tempDiv$2,
      _getGSAP$a = function _getGSAP() {
    return gsap$c || typeof window !== "undefined" && (gsap$c = window.gsap) && gsap$c.registerPlugin && gsap$c;
  };

  var TextPlugin = {
    version: "3.12.1",
    name: "text",
    init: function init(target, value, tween) {
      typeof value !== "object" && (value = {
        value: value
      });

      var i = target.nodeName.toUpperCase(),
          data = this,
          _value = value,
          newClass = _value.newClass,
          oldClass = _value.oldClass,
          preserveSpaces = _value.preserveSpaces,
          rtl = _value.rtl,
          delimiter = data.delimiter = value.delimiter || "",
          fillChar = data.fillChar = value.fillChar || (value.padSpace ? "&nbsp;" : ""),
          _short,
          text,
          original,
          j,
          condensedText,
          condensedOriginal,
          aggregate,
          s;

      data.svg = target.getBBox && (i === "TEXT" || i === "TSPAN");

      if (!("innerHTML" in target) && !data.svg) {
        return false;
      }

      data.target = target;

      if (!("value" in value)) {
        data.text = data.original = [""];
        return;
      }

      original = splitInnerHTML(target, delimiter, false, preserveSpaces);
      _tempDiv$2 || (_tempDiv$2 = document.createElement("div"));
      _tempDiv$2.innerHTML = value.value;
      text = splitInnerHTML(_tempDiv$2, delimiter, false, preserveSpaces);
      data.from = tween._from;

      if ((data.from || rtl) && !(rtl && data.from)) {
        i = original;
        original = text;
        text = i;
      }

      data.hasClass = !!(newClass || oldClass);
      data.newClass = rtl ? oldClass : newClass;
      data.oldClass = rtl ? newClass : oldClass;
      i = original.length - text.length;
      _short = i < 0 ? original : text;

      if (i < 0) {
        i = -i;
      }

      while (--i > -1) {
        _short.push(fillChar);
      }

      if (value.type === "diff") {
        j = 0;
        condensedText = [];
        condensedOriginal = [];
        aggregate = "";

        for (i = 0; i < text.length; i++) {
          s = text[i];

          if (s === original[i]) {
            aggregate += s;
          } else {
            condensedText[j] = aggregate + s;
            condensedOriginal[j++] = aggregate + original[i];
            aggregate = "";
          }
        }

        text = condensedText;
        original = condensedOriginal;

        if (aggregate) {
          text.push(aggregate);
          original.push(aggregate);
        }
      }

      value.speed && tween.duration(Math.min(0.05 / value.speed * _short.length, value.maxDuration || 9999));
      data.rtl = rtl;
      data.original = original;
      data.text = text;

      data._props.push("text");
    },
    render: function render(ratio, data) {
      if (ratio > 1) {
        ratio = 1;
      } else if (ratio < 0) {
        ratio = 0;
      }

      if (data.from) {
        ratio = 1 - ratio;
      }

      var text = data.text,
          hasClass = data.hasClass,
          newClass = data.newClass,
          oldClass = data.oldClass,
          delimiter = data.delimiter,
          target = data.target,
          fillChar = data.fillChar,
          original = data.original,
          rtl = data.rtl,
          l = text.length,
          i = (rtl ? 1 - ratio : ratio) * l + 0.5 | 0,
          applyNew,
          applyOld,
          str;

      if (hasClass && ratio) {
        applyNew = newClass && i;
        applyOld = oldClass && i !== l;
        str = (applyNew ? "<span class='" + newClass + "'>" : "") + text.slice(0, i).join(delimiter) + (applyNew ? "</span>" : "") + (applyOld ? "<span class='" + oldClass + "'>" : "") + delimiter + original.slice(i).join(delimiter) + (applyOld ? "</span>" : "");
      } else {
        str = text.slice(0, i).join(delimiter) + delimiter + original.slice(i).join(delimiter);
      }

      if (data.svg) {
        target.textContent = str;
      } else {
        target.innerHTML = fillChar === "&nbsp;" && ~str.indexOf("  ") ? str.split("  ").join("&nbsp;&nbsp;") : str;
      }
    }
  };
  TextPlugin.splitInnerHTML = splitInnerHTML;
  TextPlugin.emojiSafeSplit = emojiSafeSplit;
  TextPlugin.getText = getText;
  _getGSAP$a() && gsap$c.registerPlugin(TextPlugin);

  var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap,
      TweenMaxWithCSS = gsapWithCSS.core.Tween;

  exports.Back = Back;
  exports.Bounce = Bounce;
  exports.CSSPlugin = CSSPlugin;
  exports.CSSRulePlugin = CSSRulePlugin;
  exports.Circ = Circ;
  exports.Cubic = Cubic;
  exports.CustomEase = CustomEase;
  exports.Draggable = Draggable;
  exports.EasePack = EasePack;
  exports.EaselPlugin = EaselPlugin;
  exports.Elastic = Elastic;
  exports.Expo = Expo;
  exports.ExpoScaleEase = ExpoScaleEase;
  exports.Flip = Flip;
  exports.Linear = Linear;
  exports.MotionPathPlugin = MotionPathPlugin;
  exports.Observer = Observer;
  exports.PixiPlugin = PixiPlugin;
  exports.Power0 = Power0;
  exports.Power1 = Power1;
  exports.Power2 = Power2;
  exports.Power3 = Power3;
  exports.Power4 = Power4;
  exports.Quad = Quad;
  exports.Quart = Quart;
  exports.Quint = Quint;
  exports.RoughEase = RoughEase;
  exports.ScrollToPlugin = ScrollToPlugin;
  exports.ScrollTrigger = ScrollTrigger$2;
  exports.Sine = Sine;
  exports.SlowMo = SlowMo;
  exports.SteppedEase = SteppedEase;
  exports.Strong = Strong;
  exports.TextPlugin = TextPlugin;
  exports.TimelineLite = Timeline;
  exports.TimelineMax = Timeline;
  exports.TweenLite = Tween;
  exports.TweenMax = TweenMaxWithCSS;
  exports._getProxyProp = _getProxyProp;
  exports._getScrollFunc = _getScrollFunc;
  exports._getTarget = _getTarget;
  exports._getVelocityProp = _getVelocityProp;
  exports._horizontal = _horizontal;
  exports._isViewport = _isViewport;
  exports._vertical = _vertical;
  exports.clamp = clamp;
  exports.default = gsapWithCSS;
  exports.distribute = distribute;
  exports.getUnit = getUnit;
  exports.gsap = gsapWithCSS;
  exports.interpolate = interpolate;
  exports.mapRange = mapRange;
  exports.normalize = normalize;
  exports.pipe = pipe;
  exports.random = random;
  exports.selector = selector;
  exports.shuffle = shuffle;
  exports.snap = snap;
  exports.splitColor = splitColor;
  exports.toArray = toArray;
  exports.unitize = unitize;
  exports.wrap = wrap;
  exports.wrapYoyo = wrapYoyo;

  Object.defineProperty(exports, '__esModule', { value: true });

})));

// Custom scripts

// Инициализация плавного скрола по якорям
var scroll = new SmoothScroll('a[href*="#"]', {durationMax: 2000, header: '#header'});

// Инициализация слайдеров
const swiperMenuHeader = new Swiper('#header-menu', {
	slidesPerView: "auto",
	spaceBetween: 0,
});

const swiperRepair = new Swiper('#repair-list', {
	slidesPerView: "auto",
	spaceBetween: 30,
	// navigation: {
	// 	nextEl: '.shadow-next',
	// 	prevEl: '.shadow-prev',
	// 	disabledClass: 'disabled',
	// },
});

const swiperPortfolio = new Swiper('#portfolio-gallery', {
	slidesPerView: 1,
	spaceBetween: 30,
	parallax: true,
	autoplay: {
		delay: 10000,
	},
	loop: true,
	pagination: {
		el: '.gallery-pagination',
		clickable: true,
		bulletClass: 'dot',
		bulletActiveClass: 'dot-active',
	},

	navigation: {
		nextEl: '.gallery-next',
		prevEl: '.gallery-prev',
	},
});

const swiperReviews = new Swiper('#reviews-list', {
	slidesPerView: 1,
	spaceBetween: 30,
	autoplay: {
		delay: 10000,
	},
	loop: true,
	pagination: {
		el: '.review-pagination',
		clickable: true,
		bulletClass: 'dot',
		bulletActiveClass: 'dot-active',
	},

	navigation: {
		nextEl: '.review-next',
		prevEl: '.review-prev',
	},
});

// Аккордеон
function accordion() {
	// const items = [...document.querySelectorAll('[accordion-toggle]')];

	// items.forEach(item => {
	// 	let tl = gsap.timeline();
	// 	item.addEventListener('click', () => {
	// 		const content = item.closest('[accordion-item]').querySelector('.accordion_content');
			

	// 		if (!content.classList.contains('active')) {
	// 			item.classList.add('active');
	// 			content.classList.add('active');
	// 			tl.to(content, {
	// 				duration: 0.3,
	// 				height: content.scrollHeight,
	// 				ease: "power1.inOut",
	// 			});

	// 			console.log(tl);
	// 			tl.play();
	// 		} else {
	// 			// items.forEach(child => child.closest('[accordion-item]').classList.remove('active'));   
	// 			content.classList.remove('active');
	// 			item.classList.remove('active');
	// 			tl.reverse();
	// 		}
	// 	})
	// })

	let groups = gsap.utils.toArray(".accordion-group");
	let menus = gsap.utils.toArray(".accordion-menu");
	let menuToggles = groups.map(createAnimation);

	menus.forEach((menu) => {
		menu.addEventListener("click", () => toggleMenu(menu));
	});

	function toggleMenu(clickedMenu) {
		menuToggles.forEach((toggleFn) => toggleFn(clickedMenu));
	}

	function createAnimation(element) {
		let menu = element.querySelector(".accordion-menu");
		let box = element.querySelector(".accordion-content");
		const icon = element.querySelector(".toggle_icon");

		gsap.set(box, { height: "auto" });

		let animation = gsap
			.timeline()
			.from(box, {
				height: 0,
				duration: 0.4,
				ease: "power1.inOut"
			})
			.from(icon, { rotationX: 0, ease: "power1.inOut" }, 0)
			.to(icon, { rotationX: 180, ease: "none" }, 0)
			.reverse();

		return function (clickedMenu) {
			if (clickedMenu === menu) {
				animation.reversed(!animation.reversed());
			} else {
				animation.reverse();
			}
		};
	}
}

accordion() 

// Masks
function  masks() {
	const elements = document.querySelectorAll('[data-mask="phone"]');
  if (!elements) return;
	
  const phoneOptions = { 
    mask: '+{38(0}00)000-00-00' 
  }

  elements.forEach(el => { 
    IMask(el, phoneOptions) 
  })
}

masks();

//Slider(range) in input
function range() {
	const elements = document.querySelectorAll('[type="range"]');
	if (!elements) return;

	elements.forEach(el => { 
    let target = document.querySelector(el.dataset.targetInput);

		if(target) {
			el.addEventListener('input', (event) => {
				target.value = event.target.value;
			})
		}
  })
}

range();

// Modals
function bindModal(triggerSelector) {
	let triggers = document.querySelectorAll(triggerSelector);
	let closes = document.querySelectorAll('.modal_close');
  const body = document.body;

	triggers.forEach(trigger => {
		let modal = document.querySelector(trigger.dataset.targetModal);

		trigger.addEventListener('click', e => {
			e.preventDefault()
			modal.style.display = 'flex'
			body.classList.add('locked')
		});

		modal.addEventListener('click', e => {
			if (e.target === modal) {
				modal.style.display = 'none'
				body.classList.remove('locked')
			}
		})
	})

	closes.forEach(close => {
		close.addEventListener('click', () => {
			let modal = close.closest('.modal_overlay');
			modal.style.display = 'none'
			body.classList.remove('locked')
		});
	})
}

bindModal('[data-target-modal]')

// gsap.fromTo('.section_title', {
// 	x: -500,
// 	opacity: 0,
// }, {
// 	x: 0,
// 	opacity: 1,
// 	duration: 1,
// 	ease: "power2.inOut",
// })
let transition = 0.7;
let startAnimation = gsap.timeline();
startAnimation.from('body', {opacity: 0, duration: transition})
							.from('#header', {opacity: 0, duration: transition})
							.from('#main-title', {opacity: 0, y: 100, duration: transition}, `-=${transition}`)
							.from('#main-descr', {opacity: 0, y: 50, duration: transition}, `-=${transition}`)
							.from('#main-actions', {opacity: 0, duration: transition}, `-=${transition}`);

