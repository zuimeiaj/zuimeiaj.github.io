(self["webpackChunkaj_antd_components_test"]=self["webpackChunkaj_antd_components_test"]||[]).push([[6918,4015,8280,9924],{66837:function(){(function(t,e){"use strict";var n="hljs-ln",r="hljs-ln-line",i="hljs-ln-code",s="hljs-ln-numbers",a="hljs-ln-n",o="data-line-number",l=/\r\n|\r|\n/g;function c(t){var e=t;while(e){if(e.className&&-1!==e.className.indexOf("hljs-ln-code"))return!0;e=e.parentNode}return!1}function u(t){var e=t;while("TABLE"!==e.nodeName)e=e.parentNode;return e}function d(t){var e=t.toString(),n=t.anchorNode;while("TD"!==n.nodeName)n=n.parentNode;var r=t.focusNode;while("TD"!==r.nodeName)r=r.parentNode;var s=parseInt(n.dataset.lineNumber),a=parseInt(r.dataset.lineNumber);if(s!=a){var l=n.textContent,c=r.textContent;if(s>a){var d=s;s=a,a=d,d=l,l=c,c=d}while(0!==e.indexOf(l))l=l.slice(1);while(-1===e.lastIndexOf(c))c=c.slice(0,-1);for(var h=l,f=u(n),p=s+1;p<a;++p){var g=C('.{0}[{1}="{2}"]',[i,o,p]),v=f.querySelector(g);h+="\n"+v.textContent}return h+="\n"+c,h}return e}function h(){var t=e.createElement("style");t.type="text/css",t.innerHTML=C(".{0}{border-collapse:collapse}.{0} td{padding:0}.{1}:before{content:attr({2})}",[n,a,o]),e.getElementsByTagName("head")[0].appendChild(t)}function f(n){"interactive"===e.readyState||"complete"===e.readyState?p(n):t.addEventListener("DOMContentLoaded",(function(){p(n)}))}function p(n){try{var r=e.querySelectorAll("code.hljs,code.nohighlight");for(var i in r)r.hasOwnProperty(i)&&(g(r[i])||v(r[i],n))}catch(s){t.console.error("LineNumbers error: ",s)}}function g(t){return t.classList.contains("nohljsln")}function v(t,e){"object"===typeof t&&k((function(){t.innerHTML=w(t,e)}))}function m(t,e){if("string"===typeof t){var n=document.createElement("code");return n.innerHTML=t,w(n,e)}}function w(t,e){var n=N(t,e);return y(t),b(t.innerHTML,n)}function b(t,e){var l=T(t);if(""===l[l.length-1].trim()&&l.pop(),l.length>1||e.singleLine){for(var c="",u=0,d=l.length;u<d;u++)c+=C('<tr><td class="{0} {1}" {3}="{5}"><div class="{2}" {3}="{5}"></div></td><td class="{0} {4}" {3}="{5}">{6}</td></tr>',[r,s,a,o,i,u+e.startFrom,l[u].length>0?l[u]:" "]);return C('<table class="{0}">{1}</table>',[n,c])}return t}function N(t,e){return e=e||{},{singleLine:L(e),startFrom:j(t,e)}}function L(t){var e=!1;return t.singleLine?t.singleLine:e}function j(t,e){var n=1,r=n;isFinite(e.startFrom)&&(r=e.startFrom);var i=O(t,"data-ln-start-from");return null!==i&&(r=Z(i,n)),r}function y(t){var e=t.childNodes;for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];S(r.textContent)>0&&(r.childNodes.length>0?y(r):x(r.parentNode))}}function x(t){var e=t.className;if(/hljs-/.test(e)){for(var n=T(t.innerHTML),r=0,i="";r<n.length;r++){var s=n[r].length>0?n[r]:" ";i+=C('<span class="{0}">{1}</span>\n',[e,s])}t.innerHTML=i.trim()}}function T(t){return 0===t.length?[]:t.split(l)}function S(t){return(t.trim().match(l)||[]).length}function k(e){t.setTimeout(e,0)}function C(t,e){return t.replace(/\{(\d+)\}/g,(function(t,n){return void 0!==e[n]?e[n]:t}))}function O(t,e){return t.hasAttribute(e)?t.getAttribute(e):null}function Z(t,e){if(!t)return e;var n=Number(t);return isFinite(n)?n:e}t.hljs?(t.hljs.initLineNumbersOnLoad=f,t.hljs.lineNumbersBlock=v,t.hljs.lineNumbersValue=m,h()):t.console.error("highlight.js not detected!"),document.addEventListener("copy",(function(t){var e,n=window.getSelection();c(n.anchorNode)&&(e=-1!==window.navigator.userAgent.indexOf("Edge")?d(n):n.toString(),t.clipboardData.setData("text/plain",e),t.preventDefault())}))})(window,document)},4015:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});n(49282);var r,i,s=n(97152),a=(n(54287),n(62746)),o=(n(66837),n(63453)),l={props:{path:String,value:String,title:{type:String,default:"示例代码"}},data(){return{code:"",loading:!0,show:!1}},watch:{value(t){this.code=t}},methods:{copy(){let t=o.CommonUtils.copyToClipboard(this.code);t&&this.$message.success("复制成功")}},async created(){let t=this.path;if(this.path){const e=await fetch("/biz/docs/"+t).then((t=>t.text()));this.code=e}else this.code=this.value;this.loading=!1,this.$nextTick((()=>{window.hljs.initLineNumbersOnLoad()}))},render(){const t=arguments[0];return console.log(this.code),t(s.Z,{attrs:{spinning:this.loading},class:"preview-code"},[t("div",{class:["wrapper",{show:this.show}]},[t("h4",{class:"preview-code-title"},[this.title]),this.code&&t("pre",{directives:[{name:"highlightjs",value:this.code}]},[t("code",{class:"tsx"})])]),t("div",{on:{click:()=>this.show=!this.show},class:"trigger"},[t(a.Z,{attrs:{type:"arrow-"+(this.show?"up":"down")}}),t("span",[this.show?"收起":"展开"])])])}},c=l,u=n(43736),d=(0,u.Z)(c,r,i,!1,null,null,null),h=d.exports},78280:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return c}});var r,i,s={props:["title","description"],render(){const t=arguments[0];return t("div",{class:"app-page gutter common-page"},[t("h3",{class:"app-page-title"},[this.title]),t("div",{class:"page-description"},[this.description]),t("div",{class:"page-content"},[this.$slots.default])])}},a=s,o=n(43736),l=(0,o.Z)(a,r,i,!1,null,null,null),c=l.exports},36918:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var r,i,s=n(4015),a=n(78280),o=n(49924),l={data(){return{}},render(){const t=arguments[0];return t(a["default"],{attrs:{title:"NumberRange",description:"数字范围输入"},class:"app-page gutter"},[t(o["default"]),t(s["default"],{attrs:{path:"numberrangepicker.demo.vue"}}),t(s["default"],{attrs:{title:"Props",path:"number-range-picker.d.ts"}})])}},c=l,u=n(43736),d=(0,u.Z)(c,r,i,!1,null,null,null),h=d.exports},49924:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});n(50460);var r,i,s=n(57288),a=n(63453),o=n(4015),l={data(){return{value:"",form:s.ZP.createForm(this)}},render(){const t=arguments[0];let e=this.form.getFieldsValue();return console.log(e),t(s.ZP,{attrs:{form:this.form}},[t(o["default"],{attrs:{value:JSON.stringify(e,null,2)}}),t(s.ZP.Item,{attrs:{label:"number-range",extra:"数组格式为数组 [start,end]"}},[t(a.NumberRangePicker,{directives:[{name:"decorator",value:["value1"]}]})])])}},c=l,u=n(43736),d=(0,u.Z)(c,r,i,!1,null,null,null),h=d.exports},49282:function(t,e,n){"use strict";n(54287)}}]);
//# sourceMappingURL=6918.43dc44e6.js.map