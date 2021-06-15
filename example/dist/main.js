(()=>{var t={553:t=>{!function(){"use strict";var e={class:"className",contenteditable:"contentEditable",for:"htmlFor",readonly:"readOnly",maxlength:"maxLength",tabindex:"tabIndex",colspan:"colSpan",rowspan:"rowSpan",usemap:"useMap"};function n(t,e){try{return t(e)}catch(t){return e}}var i=document,r=window,o=i.documentElement,s=i.createElement.bind(i),a=s("div"),u=s("table"),l=s("tbody"),c=s("tr"),h=Array.isArray,f=Array.prototype,d=f.concat,p=f.filter,v=f.indexOf,g=f.map,m=f.push,y=f.slice,b=f.some,C=f.splice,w=/^#(?:[\w-]|\\.|[^\x00-\xa0])*$/,S=/^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/,_=/<.+>/,E=/^\w+$/;function x(t,e){return t&&(I(e)||R(e))?S.test(t)?e.getElementsByClassName(t.slice(1)):E.test(t)?e.getElementsByTagName(t):e.querySelectorAll(t):[]}var T=function(){function t(t,e){if(t){if(N(t))return t;var n=t;if(M(t)){var o=(N(e)?e[0]:e)||i;if(!(n=w.test(t)?o.getElementById(t.slice(1)):_.test(t)?kt(t):x(t,o)))return}else if(H(t))return this.ready(t);(n.nodeType||n===r)&&(n=[n]),this.length=n.length;for(var s=0,a=this.length;s<a;s++)this[s]=n[s]}}return t.prototype.init=function(e,n){return new t(e,n)},t}(),P=T.prototype,A=P.init;A.fn=A.prototype=P,P.length=0,P.splice=C,"function"==typeof Symbol&&(P[Symbol.iterator]=f[Symbol.iterator]),P.map=function(t){return A(d.apply([],g.call(this,(function(e,n){return t.call(e,n,e)}))))},P.slice=function(t,e){return A(y.call(this,t,e))};var L=/-([a-z])/g;function k(t){return t.replace(L,(function(t,e){return e.toUpperCase()}))}function O(t,e){var n=t&&(t.matches||t.webkitMatchesSelector||t.msMatchesSelector);return!!n&&!!e&&n.call(t,e)}function N(t){return t instanceof T}function B(t){return!!t&&t===t.window}function I(t){return!!t&&9===t.nodeType}function R(t){return!!t&&1===t.nodeType}function j(t){return"boolean"==typeof t}function H(t){return"function"==typeof t}function M(t){return"string"==typeof t}function z(t){return void 0===t}function W(t){return null===t}function $(t){return!isNaN(parseFloat(t))&&isFinite(t)}function D(t){if("object"!=typeof t||null===t)return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function U(t,e,n){if(n){for(var i=t.length;i--;)if(!1===e.call(t[i],i,t[i]))return t}else if(D(t))for(var r=Object.keys(t),o=(i=0,r.length);i<o;i++){var s=r[i];if(!1===e.call(t[s],s,t[s]))return t}else for(i=0,o=t.length;i<o;i++)if(!1===e.call(t[i],i,t[i]))return t;return t}function q(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=!!j(t[0])&&t.shift(),i=t.shift(),r=t.length;if(!i)return{};if(!r)return q(n,A,i);for(var o=0;o<r;o++){var s=t[o];for(var a in s)n&&(h(s[a])||D(s[a]))?(i[a]&&i[a].constructor===s[a].constructor||(i[a]=new s[a].constructor),q(n,i[a],s[a])):i[a]=s[a]}return i}function F(t){return M(t)?function(e,n){return O(n,t)}:H(t)?t:N(t)?function(e,n){return t.is(n)}:t?function(e,n){return n===t}:function(){return!1}}function Y(t,e){return e?t.filter(e):t}A.guid=1,A.isWindow=B,A.isFunction=H,A.isArray=h,A.isNumeric=$,A.isPlainObject=D,P.get=function(t){return z(t)?y.call(this):this[(t=Number(t))<0?t+this.length:t]},P.eq=function(t){return A(this.get(t))},P.first=function(){return this.eq(0)},P.last=function(){return this.eq(-1)},A.each=U,P.each=function(t){return U(this,t)},P.prop=function(t,n){if(t){if(M(t))return t=e[t]||t,arguments.length<2?this[0]&&this[0][t]:this.each((function(e,i){i[t]=n}));for(var i in t)this.prop(i,t[i]);return this}},P.removeProp=function(t){return this.each((function(n,i){delete i[e[t]||t]}))},A.extend=q,P.extend=function(t){return q(P,t)},P.filter=function(t){var e=F(t);return A(p.call(this,(function(t,n){return e.call(t,n,t)})))};var J=/\S+/g;function G(t){return M(t)&&t.match(J)||[]}function V(t,e,n,i){for(var r=[],o=H(e),s=i&&F(i),a=0,u=t.length;a<u;a++)if(o){var l=e(t[a]);l.length&&m.apply(r,l)}else for(var c=t[a][e];!(null==c||i&&s(-1,c));)r.push(c),c=n?c[e]:null;return r}function X(t){return t.length>1?p.call(t,(function(t,e,n){return v.call(n,t)===e})):t}function K(t,e,n){if(R(t)){var i=r.getComputedStyle(t,null);return n?i.getPropertyValue(e)||void 0:i[e]||t.style[e]}}function Q(t,e){return parseInt(K(t,e),10)||0}P.hasClass=function(t){return!!t&&b.call(this,(function(e){return R(e)&&e.classList.contains(t)}))},P.removeAttr=function(t){var e=G(t);return this.each((function(t,n){R(n)&&U(e,(function(t,e){n.removeAttribute(e)}))}))},P.attr=function(t,e){if(t){if(M(t)){if(arguments.length<2){if(!this[0]||!R(this[0]))return;var n=this[0].getAttribute(t);return W(n)?void 0:n}return z(e)?this:W(e)?this.removeAttr(t):this.each((function(n,i){R(i)&&i.setAttribute(t,e)}))}for(var i in t)this.attr(i,t[i]);return this}},P.toggleClass=function(t,e){var n=G(t),i=!z(e);return this.each((function(t,r){R(r)&&U(n,(function(t,n){i?e?r.classList.add(n):r.classList.remove(n):r.classList.toggle(n)}))}))},P.addClass=function(t){return this.toggleClass(t,!0)},P.removeClass=function(t){return arguments.length?this.toggleClass(t,!1):this.attr("class","")},A.unique=X,P.add=function(t,e){return A(X(this.get().concat(A(t,e).get())))};var Z=/^--/;function tt(t){return Z.test(t)}var et={},nt=a.style,it=["webkit","moz","ms"];function rt(t,e){if(void 0===e&&(e=tt(t)),e)return t;if(!et[t]){var n=k(t),i=""+n[0].toUpperCase()+n.slice(1);U((n+" "+it.join(i+" ")+i).split(" "),(function(e,n){if(n in nt)return et[t]=n,!1}))}return et[t]}var ot={animationIterationCount:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0};function st(t,e,n){return void 0===n&&(n=tt(t)),n||ot[t]||!$(e)?e:e+"px"}P.css=function(t,e){if(M(t)){var n=tt(t);return t=rt(t,n),arguments.length<2?this[0]&&K(this[0],t,n):t?(e=st(t,e,n),this.each((function(i,r){R(r)&&(n?r.style.setProperty(t,e):r.style[t]=e)}))):this}for(var i in t)this.css(i,t[i]);return this};var at=/^\s+|\s+$/;function ut(t,e){var i=t.dataset[e]||t.dataset[k(e)];return at.test(i)?i:n(JSON.parse,i)}function lt(t,e,i){i=n(JSON.stringify,i),t.dataset[k(e)]=i}function ct(t,e){var n=t.documentElement;return Math.max(t.body["scroll"+e],n["scroll"+e],t.body["offset"+e],n["offset"+e],n["client"+e])}function ht(t,e){return Q(t,"border"+(e?"Left":"Top")+"Width")+Q(t,"padding"+(e?"Left":"Top"))+Q(t,"padding"+(e?"Right":"Bottom"))+Q(t,"border"+(e?"Right":"Bottom")+"Width")}P.data=function(t,e){if(!t){if(!this[0])return;var n={};for(var i in this[0].dataset)n[i]=ut(this[0],i);return n}if(M(t))return arguments.length<2?this[0]&&ut(this[0],t):z(e)?this:this.each((function(n,i){lt(i,t,e)}));for(var i in t)this.data(i,t[i]);return this},U([!0,!1],(function(t,e){U(["Width","Height"],(function(t,n){P[(e?"outer":"inner")+n]=function(i){if(this[0])return B(this[0])?e?this[0]["inner"+n]:this[0].document.documentElement["client"+n]:I(this[0])?ct(this[0],n):this[0][(e?"offset":"client")+n]+(i&&e?Q(this[0],"margin"+(t?"Top":"Left"))+Q(this[0],"margin"+(t?"Bottom":"Right")):0)}}))})),U(["Width","Height"],(function(t,e){var n=e.toLowerCase();P[n]=function(i){if(!this[0])return z(i)?void 0:this;if(!arguments.length)return B(this[0])?this[0].document.documentElement["client"+e]:I(this[0])?ct(this[0],e):this[0].getBoundingClientRect()[n]-ht(this[0],!t);var r=parseInt(i,10);return this.each((function(e,i){if(R(i)){var o=K(i,"boxSizing");i.style[n]=st(n,r+("border-box"===o?ht(i,!t):0))}}))}}));var ft={};function dt(t){return"none"===K(t,"display")}function pt(t,e){return!e||!b.call(e,(function(e){return t.indexOf(e)<0}))}P.toggle=function(t){return this.each((function(e,n){R(n)&&((z(t)?dt(n):t)?(n.style.display=n.___cd||"",dt(n)&&(n.style.display=function(t){if(ft[t])return ft[t];var e=s(t);i.body.insertBefore(e,null);var n=K(e,"display");return i.body.removeChild(e),ft[t]="none"!==n?n:"block"}(n.tagName))):(n.___cd=K(n,"display"),n.style.display="none"))}))},P.hide=function(){return this.toggle(!1)},P.show=function(){return this.toggle(!0)};var vt={focus:"focusin",blur:"focusout"},gt={mouseenter:"mouseover",mouseleave:"mouseout"},mt=/^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;function yt(t){return gt[t]||vt[t]||t}function bt(t){return t.___ce=t.___ce||{}}function Ct(t){var e=t.split(".");return[e[0],e.slice(1).sort()]}function wt(t,e,n,i,r){var o=bt(t);if(e)o[e]&&(o[e]=o[e].filter((function(o){var s=o[0],a=o[1],u=o[2];if(r&&u.guid!==r.guid||!pt(s,n)||i&&i!==a)return!0;t.removeEventListener(e,u)})));else for(e in o)wt(t,e,n,i,r)}function St(t){return t.multiple&&t.options?V(p.call(t.options,(function(t){return t.selected&&!t.disabled&&!t.parentNode.disabled})),"value"):t.value||""}P.off=function(t,e,n){var i=this;if(z(t))this.each((function(t,e){(R(e)||I(e)||B(e))&&wt(e)}));else if(M(t))H(e)&&(n=e,e=""),U(G(t),(function(t,r){var o=Ct(r),s=o[0],a=o[1],u=yt(s);i.each((function(t,i){(R(i)||I(i)||B(i))&&wt(i,u,a,e,n)}))}));else for(var r in t)this.off(r,t[r]);return this},P.on=function(t,e,n,i,r){var o=this;if(!M(t)){for(var s in t)this.on(s,e,n,t[s],r);return this}return M(e)||(z(e)||W(e)?e="":z(n)?(n=e,e=""):(i=n,n=e,e="")),H(i)||(i=n,n=void 0),i?(U(G(t),(function(t,s){var a=Ct(s),u=a[0],l=a[1],c=yt(u),h=u in gt,f=u in vt;c&&o.each((function(t,o){if(R(o)||I(o)||B(o)){var s=function t(s){if(s.target["___i"+s.type])return s.stopImmediatePropagation();if((!s.namespace||pt(l,s.namespace.split(".")))&&(e||!(f&&(s.target!==o||s.___ot===c)||h&&s.relatedTarget&&o.contains(s.relatedTarget)))){var a=o;if(e){for(var u=s.target;!O(u,e);){if(u===o)return;if(!(u=u.parentNode))return}a=u,s.___cd=!0}s.___cd&&Object.defineProperty(s,"currentTarget",{configurable:!0,get:function(){return a}}),Object.defineProperty(s,"data",{configurable:!0,get:function(){return n}});var d=i.call(a,s,s.___td);r&&wt(o,c,l,e,t),!1===d&&(s.preventDefault(),s.stopPropagation())}};s.guid=i.guid=i.guid||A.guid++,function(t,e,n,i,r){var o=bt(t);o[e]=o[e]||[],o[e].push([n,i,r]),t.addEventListener(e,r)}(o,c,l,e,s)}}))})),this):this},P.one=function(t,e,n,i){return this.on(t,e,n,i,!0)},P.ready=function(t){var e=function(){return setTimeout(t,0,A)};return"loading"!==i.readyState?e():i.addEventListener("DOMContentLoaded",e),this},P.trigger=function(t,e){if(M(t)){var n=Ct(t),r=n[0],o=n[1],s=yt(r);if(!s)return this;var a=mt.test(s)?"MouseEvents":"HTMLEvents";(t=i.createEvent(a)).initEvent(s,!0,!0),t.namespace=o.join("."),t.___ot=r}t.___td=e;var u=t.___ot in vt;return this.each((function(e,n){u&&H(n[t.___ot])&&(n["___i"+t.type]=!0,n[t.___ot](),n["___i"+t.type]=!1),n.dispatchEvent(t)}))};var _t=/%20/g,Et=/\r?\n/g,xt=/file|reset|submit|button|image/i,Tt=/radio|checkbox/i;P.serialize=function(){var t="";return this.each((function(e,n){U(n.elements||[n],(function(e,n){if(!(n.disabled||!n.name||"FIELDSET"===n.tagName||xt.test(n.type)||Tt.test(n.type)&&!n.checked)){var i=St(n);z(i)||U(h(i)?i:[i],(function(e,i){t+=function(t,e){return"&"+encodeURIComponent(t)+"="+encodeURIComponent(e.replace(Et,"\r\n")).replace(_t,"+")}(n.name,i)}))}}))})),t.slice(1)},P.val=function(t){return arguments.length?this.each((function(e,n){var i=n.multiple&&n.options;if(i||Tt.test(n.type)){var r=h(t)?g.call(t,String):W(t)?[]:[String(t)];i?U(n.options,(function(t,e){e.selected=r.indexOf(e.value)>=0}),!0):n.checked=r.indexOf(n.value)>=0}else n.value=z(t)||W(t)?"":t})):this[0]&&St(this[0])},P.clone=function(){return this.map((function(t,e){return e.cloneNode(!0)}))},P.detach=function(t){return Y(this,t).each((function(t,e){e.parentNode&&e.parentNode.removeChild(e)})),this};var Pt=/^\s*<(\w+)[^>]*>/,At=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,Lt={"*":a,tr:l,td:c,th:c,thead:u,tbody:u,tfoot:u};function kt(t){if(!M(t))return[];if(At.test(t))return[s(RegExp.$1)];var e=Pt.test(t)&&RegExp.$1,n=Lt[e]||Lt["*"];return n.innerHTML=t,A(n.childNodes).detach().get()}A.parseHTML=kt,P.empty=function(){return this.each((function(t,e){for(;e.firstChild;)e.removeChild(e.firstChild)}))},P.html=function(t){return arguments.length?z(t)?this:this.each((function(e,n){R(n)&&(n.innerHTML=t)})):this[0]&&this[0].innerHTML},P.remove=function(t){return Y(this,t).detach().off(),this},P.text=function(t){return z(t)?this[0]?this[0].textContent:"":this.each((function(e,n){R(n)&&(n.textContent=t)}))},P.unwrap=function(){return this.parent().each((function(t,e){if("BODY"!==e.tagName){var n=A(e);n.replaceWith(n.children())}})),this},P.offset=function(){var t=this[0];if(t){var e=t.getBoundingClientRect();return{top:e.top+r.pageYOffset,left:e.left+r.pageXOffset}}},P.offsetParent=function(){return this.map((function(t,e){for(var n=e.offsetParent;n&&"static"===K(n,"position");)n=n.offsetParent;return n||o}))},P.position=function(){var t=this[0];if(t){var e="fixed"===K(t,"position"),n=e?t.getBoundingClientRect():this.offset();if(!e){for(var i=t.ownerDocument,r=t.offsetParent||i.documentElement;(r===i.body||r===i.documentElement)&&"static"===K(r,"position");)r=r.parentNode;if(r!==t&&R(r)){var o=A(r).offset();n.top-=o.top+Q(r,"borderTopWidth"),n.left-=o.left+Q(r,"borderLeftWidth")}}return{top:n.top-Q(t,"marginTop"),left:n.left-Q(t,"marginLeft")}}},P.children=function(t){return Y(A(X(V(this,(function(t){return t.children})))),t)},P.contents=function(){return A(X(V(this,(function(t){return"IFRAME"===t.tagName?[t.contentDocument]:"TEMPLATE"===t.tagName?t.content.childNodes:t.childNodes}))))},P.find=function(t){return A(X(V(this,(function(e){return x(t,e)}))))};var Ot=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Nt=/^$|^module$|\/(java|ecma)script/i,Bt=["type","src","nonce","noModule"];function It(t,e,n,i,r,a,u,l){return U(t,(function(t,a){U(A(a),(function(t,a){U(A(e),(function(e,u){var l=n?u:a,c=n?t:e;!function(t,e,n,i,r){i?t.insertBefore(e,n?t.firstChild:null):t.parentNode.insertBefore(e,n?t:t.nextSibling),r&&function(t,e){var n=A(t);n.filter("script").add(n.find("script")).each((function(t,n){if(Nt.test(n.type)&&o.contains(n)){var i=s("script");i.text=n.textContent.replace(Ot,""),U(Bt,(function(t,e){n[e]&&(i[e]=n[e])})),e.head.insertBefore(i,null),e.head.removeChild(i)}}))}(e,t.ownerDocument)}(n?a:u,c?l.cloneNode(!0):l,i,r,!c)}),l)}),u)}),a),e}P.after=function(){return It(arguments,this,!1,!1,!1,!0,!0)},P.append=function(){return It(arguments,this,!1,!1,!0)},P.appendTo=function(t){return It(arguments,this,!0,!1,!0)},P.before=function(){return It(arguments,this,!1,!0)},P.insertAfter=function(t){return It(arguments,this,!0,!1,!1,!1,!1,!0)},P.insertBefore=function(t){return It(arguments,this,!0,!0)},P.prepend=function(){return It(arguments,this,!1,!0,!0,!0,!0)},P.prependTo=function(t){return It(arguments,this,!0,!0,!0,!1,!1,!0)},P.replaceWith=function(t){return this.before(t).remove()},P.replaceAll=function(t){return A(t).replaceWith(this),this},P.wrapAll=function(t){for(var e=A(t),n=e[0];n.children.length;)n=n.firstElementChild;return this.first().before(e),this.appendTo(n)},P.wrap=function(t){return this.each((function(e,n){var i=A(t)[0];A(n).wrapAll(e?i.cloneNode(!0):i)}))},P.wrapInner=function(t){return this.each((function(e,n){var i=A(n),r=i.contents();r.length?r.wrapAll(t):i.append(t)}))},P.has=function(t){var e=M(t)?function(e,n){return x(t,n).length}:function(e,n){return n.contains(t)};return this.filter(e)},P.is=function(t){var e=F(t);return b.call(this,(function(t,n){return e.call(t,n,t)}))},P.next=function(t,e,n){return Y(A(X(V(this,"nextElementSibling",e,n))),t)},P.nextAll=function(t){return this.next(t,!0)},P.nextUntil=function(t,e){return this.next(e,!0,t)},P.not=function(t){var e=F(t);return this.filter((function(n,i){return(!M(t)||R(i))&&!e.call(i,n,i)}))},P.parent=function(t){return Y(A(X(V(this,"parentNode"))),t)},P.index=function(t){var e=t?A(t)[0]:this[0],n=t?this:A(e).parent().children();return v.call(n,e)},P.closest=function(t){var e=this.filter(t);if(e.length)return e;var n=this.parent();return n.length?n.closest(t):e},P.parents=function(t,e){return Y(A(X(V(this,"parentElement",!0,e))),t)},P.parentsUntil=function(t,e){return this.parents(e,t)},P.prev=function(t,e,n){return Y(A(X(V(this,"previousElementSibling",e,n))),t)},P.prevAll=function(t){return this.prev(t,!0)},P.prevUntil=function(t,e){return this.prev(e,!0,t)},P.siblings=function(t){return Y(A(X(V(this,(function(t){return A(t).parent().children().not(t)})))),t)},t.exports=A}()}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(553),e=n.n(t);const i=function(t,e){let n,i=0;return r=>{const o=(new Date).getTime();o-i>=t?(i=o,e(r)):(clearTimeout(n),n=setTimeout((t=>e.bind(this,t))(r),t))}},r={isPageScrolled:!1,s:0,w:0,h:0,sizeCheck:function(){r.h=window.innerHeight,r.w=window.innerWidth,document.documentElement.style.setProperty("--vh",r.h/100+"px"),window.dispatchEvent(new CustomEvent("layoutChange")),r.scrollCheck(),window.dispatchEvent(new CustomEvent("afterLayoutChange"))},scrollCheck:function(){r.s=window.scrollY,r.s>10?r.isPageScrolled||(document.body.classList.add("scrolled"),r.isPageScrolled=!0):r.isPageScrolled&&(document.body.classList.remove("scrolled"),r.isPageScrolled=!1)}};window.addEventListener("resize",i(100,r.sizeCheck)),window.addEventListener("load",r.sizeCheck),window.addEventListener("scroll",r.scrollCheck),document.addEventListener("ready",r.sizeCheck);const o=r;class s{constructor(t,n){this.el=e()(t),this.offset=0,this.height=0,this.addClasses=n.addClasses,this.isAboveScreen=!1,this.isCrossingScreenTop=!1,this.isCrossingScreenBottom=!1,this.isBelowScreen=!1,this.isOnScreen=!1,this.options=n,this.onStateChange=this.options.onStateChange,this.onScroll=this.options.onScroll}_onResize(){this.offset=this.el.offset().top,this.height=this.el.outerHeight(),this._onScroll()}_onScroll(){this.checkScreenRelation(),void 0!==this.onScroll&&this.onScroll.call(this,this)}checkScreenRelation(){return this.offset+this.height<o.s?(this.setPropClass("AboveScreen",!0),this.setPropClass("CrossingScreenTop",!1),this.setPropClass("CrossingScreenBottom",!1),this.setPropClass("BelowScreen",!1),void this.setPropClass("OnScreen",!1)):this.offset>o.s+o.h?(this.setPropClass("AboveScreen",!1),this.setPropClass("CrossingScreenTop",!1),this.setPropClass("CrossingScreenBottom",!1),this.setPropClass("BelowScreen",!0),void this.setPropClass("OnScreen",!1)):(this.setPropClass("AboveScreen",!1),this.setPropClass("BelowScreen",!1),this.setPropClass("OnScreen",!0),this.setPropClass("CrossingScreenTop",this.offset<o.s&&this.offset+this.height>o.s),void this.setPropClass("CrossingScreenBottom",this.offset<o.s+o.h&&this.offset+this.height>o.s+o.h))}setPropClass(t,e){this["is"+t]!==e&&(this["is"+t]=e,this.addClasses&&(e?this.el.addClass(t):this.el.removeClass(t)),void 0!==this.onStateChange&&this.onStateChange.call(this,t,e,this))}screenPos(t){return void 0===t&&(t=0),(this.offset+this.height*t-o.s)/o.h}}const a=[];window.addEventListener("afterLayoutChange",(function(){a.map((function(t){t._onResize()}))})),window.addEventListener("scroll",i(100,(function(){a.map((function(t){t._onScroll()}))})));function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var c,h;const f=(c=[],h=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.applyCss(e),this.options={adjustHeight:!1},Object.assign(this.options,n),void 0!==this.options.interval&&(this.intervalHandle=setInterval(this.next.bind(this),this.options.interval)),this.h=0,this.c=0,this.id=this.element.attr("id"),this.scrollItem=function(t,e){void 0===e&&(e={});const n=new s(t,e);return a.push(n),n}(this.element),this.refresh(),this.slides.eq(0).addClass("current-slide"),this.prepareArrows(),this.prepareBullets()}var n,i;return n=t,(i=[{key:"applyCss",value:function(t){this.element=e()(t),this.bar=e()(document.createElement("div")).addClass("slider-bar").css({position:"relative"}).appendTo(this.element),this.slides=this.element.find(".slider-single").css({position:"absolute",width:"100%"}).appendTo(this.bar)}},{key:"prepareArrows",value:function(){var t=this;this.arrows=this.element.data("arrows"),void 0===this.arrows?this.arrows=this.element.find(".slider-arrows"):this.arrows=e()(this.arrows),this.arrows.length>0&&(this.left=this.arrows.find(".slider-left"),this.right=this.arrows.find(".slider-right"),this.left.click((function(){t.options.interval&&clearInterval(t.intervalHandle),t.prev()})),this.right.click((function(){t.options.interval&&clearInterval(t.intervalHandle),t.next()})))}},{key:"prepareBullets",value:function(){var t=this;this.bullets=[],void 0===this.options.bulletContainer?(this.options.bulletContainer=e()(document.createElement("div")).addClass("slider-bullets").appendTo(this.element),this.bullets=[],this.slides.map((function(n,i){t.bullets.push(e()(document.createElement("div")).addClass("slider-bullet").appendTo(t.options.bulletContainer))}))):(this.options.bulletContainer=e()(this.options.bulletContainer),void 0===this.options.bulletSelector?this.slides.map((function(n,i){t.bullets.push(e()(document.createElement("div")).addClass("slider-bullet").appendTo(t.options.bulletContainer))})):this.options.bulletContainer.find(this.options.bulletSelector).each((function(n,i){t.bullets.push(e()(i))}))),this.bullets.length>0&&this.bullets.map((function(e,n){e.on("click",(function(){t.goTo(n),t.options.interval&&clearInterval(t.intervalHandle)}))})),this.bullets.length<=1?this.options.bulletContainer.hide(0):this.bullets[0].addClass("active")}},{key:"refresh",value:function(){if(this.options.adjustHeight){this.bar.css({height:0});var t=0;this.slides.each((function(n,i){t=Math.max(e()(i).height(),t)})),this.h=t,this.setHeight()}this.scrollItem._onResize()}},{key:"setHeight",value:function(){this.bar.css({height:this.h})}},{key:"goTo",value:function(t){if(this.c!==t){var e=this.c;this.slides.filter(".current-slide").removeClass("current-slide"),this.slides.eq(t).addClass("current-slide"),this.bullets[e].removeClass("active"),this.bullets[t].addClass("active"),void 0!==this.options.onChange&&this.options.onChange.call(this,t),this.c=t,window.dispatchEvent(new CustomEvent("fadeSliderChange",{detail:{slider:this,prev:e}}))}}},{key:"onLoad",value:function(){window.dispatchEvent(new CustomEvent("fadeSliderChange",{detail:{slider:this,prev:-1}}))}},{key:"next",value:function(){this.goTo((this.c+1)%this.slides.length)}},{key:"prev",value:function(){var t=this.c-1;t<0&&(t=this.slides.length-1),this.goTo(t)}}])&&l(n.prototype,i),t}(),e()(window).on("load",(function(){for(var t in c)c[t].onLoad()})),window.addEventListener("layoutChange",(function(){for(var t in c)c[t].refresh()})),window.addEventListener("keyup",(function(t){if(("ArrowRight"===t.code||"ArrowLeft"===t.code)&&0!==c.length){var e,n,i=1/0,r=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){a=!0,o=t},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}(c);try{for(r.s();!(n=r.n()).done;){var o=n.value,s=Math.abs(o.scrollItem.screenPos(.5)-.5);if(!(s<i))break;i=s,e=o}}catch(t){r.e(t)}finally{r.f()}"ArrowRight"===t.code?e.next():"ArrowLeft"===t.code&&e.prev()}})),function(t,n){void 0===n&&(n={});var i=[];return e()(t).each((function(t,e){var r=new h(e,n);void 0!==r.id&&void 0===i[r.id]||(r.id=t),i[r.id]=r})),i});window.slider=f("#slider",{interval:1e3})})()})();