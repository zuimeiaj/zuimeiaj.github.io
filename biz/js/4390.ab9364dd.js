(self["webpackChunkaj_antd_components_test"]=self["webpackChunkaj_antd_components_test"]||[]).push([[4390,4015,8280,4276],{66837:function(){(function(t,e){"use strict";var n="hljs-ln",r="hljs-ln-line",i="hljs-ln-code",s="hljs-ln-numbers",a="hljs-ln-n",o="data-line-number",l=/\r\n|\r|\n/g;function c(t){var e=t;while(e){if(e.className&&-1!==e.className.indexOf("hljs-ln-code"))return!0;e=e.parentNode}return!1}function u(t){var e=t;while("TABLE"!==e.nodeName)e=e.parentNode;return e}function d(t){var e=t.toString(),n=t.anchorNode;while("TD"!==n.nodeName)n=n.parentNode;var r=t.focusNode;while("TD"!==r.nodeName)r=r.parentNode;var s=parseInt(n.dataset.lineNumber),a=parseInt(r.dataset.lineNumber);if(s!=a){var l=n.textContent,c=r.textContent;if(s>a){var d=s;s=a,a=d,d=l,l=c,c=d}while(0!==e.indexOf(l))l=l.slice(1);while(-1===e.lastIndexOf(c))c=c.slice(0,-1);for(var h=l,p=u(n),f=s+1;f<a;++f){var m=Z('.{0}[{1}="{2}"]',[i,o,f]),v=p.querySelector(m);h+="\n"+v.textContent}return h+="\n"+c,h}return e}function h(){var t=e.createElement("style");t.type="text/css",t.innerHTML=Z(".{0}{border-collapse:collapse}.{0} td{padding:0}.{1}:before{content:attr({2})}",[n,a,o]),e.getElementsByTagName("head")[0].appendChild(t)}function p(n){"interactive"===e.readyState||"complete"===e.readyState?f(n):t.addEventListener("DOMContentLoaded",(function(){f(n)}))}function f(n){try{var r=e.querySelectorAll("code.hljs,code.nohighlight");for(var i in r)r.hasOwnProperty(i)&&(m(r[i])||v(r[i],n))}catch(s){t.console.error("LineNumbers error: ",s)}}function m(t){return t.classList.contains("nohljsln")}function v(t,e){"object"===typeof t&&S((function(){t.innerHTML=b(t,e)}))}function g(t,e){if("string"===typeof t){var n=document.createElement("code");return n.innerHTML=t,b(n,e)}}function b(t,e){var n=x(t,e);return y(t),w(t.innerHTML,n)}function w(t,e){var l=T(t);if(""===l[l.length-1].trim()&&l.pop(),l.length>1||e.singleLine){for(var c="",u=0,d=l.length;u<d;u++)c+=Z('<tr><td class="{0} {1}" {3}="{5}"><div class="{2}" {3}="{5}"></div></td><td class="{0} {4}" {3}="{5}">{6}</td></tr>',[r,s,a,o,i,u+e.startFrom,l[u].length>0?l[u]:" "]);return Z('<table class="{0}">{1}</table>',[n,c])}return t}function x(t,e){return e=e||{},{singleLine:N(e),startFrom:L(t,e)}}function N(t){var e=!1;return t.singleLine?t.singleLine:e}function L(t,e){var n=1,r=n;isFinite(e.startFrom)&&(r=e.startFrom);var i=C(t,"data-ln-start-from");return null!==i&&(r=D(i,n)),r}function y(t){var e=t.childNodes;for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];k(r.textContent)>0&&(r.childNodes.length>0?y(r):j(r.parentNode))}}function j(t){var e=t.className;if(/hljs-/.test(e)){for(var n=T(t.innerHTML),r=0,i="";r<n.length;r++){var s=n[r].length>0?n[r]:" ";i+=Z('<span class="{0}">{1}</span>\n',[e,s])}t.innerHTML=i.trim()}}function T(t){return 0===t.length?[]:t.split(l)}function k(t){return(t.trim().match(l)||[]).length}function S(e){t.setTimeout(e,0)}function Z(t,e){return t.replace(/\{(\d+)\}/g,(function(t,n){return void 0!==e[n]?e[n]:t}))}function C(t,e){return t.hasAttribute(e)?t.getAttribute(e):null}function D(t,e){if(!t)return e;var n=Number(t);return isFinite(n)?n:e}t.hljs?(t.hljs.initLineNumbersOnLoad=p,t.hljs.lineNumbersBlock=v,t.hljs.lineNumbersValue=g,h()):t.console.error("highlight.js not detected!"),document.addEventListener("copy",(function(t){var e,n=window.getSelection();c(n.anchorNode)&&(e=-1!==window.navigator.userAgent.indexOf("Edge")?d(n):n.toString(),t.clipboardData.setData("text/plain",e),t.preventDefault())}))})(window,document)},4015:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});n(49282);var r,i,s=n(97152),a=(n(54287),n(62746)),o=(n(66837),n(63453)),l={props:{path:String,value:String,title:{type:String,default:"示例代码"}},data(){return{code:"",loading:!0,show:!1}},watch:{value(t){this.code=t}},methods:{copy(){let t=o.CommonUtils.copyToClipboard(this.code);t&&this.$message.success("复制成功")}},async created(){let t=this.path;if(this.path){const e=await fetch("/biz/docs/"+t).then((t=>t.text()));this.code=e}else this.code=this.value;this.loading=!1,this.$nextTick((()=>{window.hljs.initLineNumbersOnLoad()}))},render(){const t=arguments[0];return console.log(this.code),t(s.Z,{attrs:{spinning:this.loading},class:"preview-code"},[t("div",{class:["wrapper",{show:this.show}]},[t("h4",{class:"preview-code-title"},[this.title]),this.code&&t("pre",{directives:[{name:"highlightjs",value:this.code}]},[t("code",{class:"tsx"})])]),t("div",{on:{click:()=>this.show=!this.show},class:"trigger"},[t(a.Z,{attrs:{type:"arrow-"+(this.show?"up":"down")}}),t("span",[this.show?"收起":"展开"])])])}},c=l,u=n(43736),d=(0,u.Z)(c,r,i,!1,null,null,null),h=d.exports},78280:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return c}});var r,i,s={props:["title","description"],render(){const t=arguments[0];return t("div",{class:"app-page gutter common-page"},[t("h3",{class:"app-page-title"},[this.title]),t("div",{class:"page-description"},[this.description]),t("div",{class:"page-content"},[this.$slots.default])])}},a=s,o=n(43736),l=(0,o.Z)(a,r,i,!1,null,null,null),c=l.exports},74390:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var r,i,s=n(4015),a=n(78280),o=n(74276),l={data(){return{}},render(){const t=arguments[0];return t(a["default"],{attrs:{title:"包含多个格式的输入框",description:"支持数字，百分比，金额，字符输入"},class:"app-page gutter"},[t(o["default"]),t(s["default"],{attrs:{path:"debounceinput.demo.vue"}}),t(s["default"],{attrs:{title:"Props",path:"debounce-input.d.ts"}})])}},c=l,u=n(43736),d=(0,u.Z)(c,r,i,!1,null,null,null),h=d.exports},74276:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});n(50397);var r,i,s=n(95878),a=n(63453),o={data(){return{number:1,amount:100,percent:.76,text:"123"}},render(){const t=arguments[0];return t("div",[t(s.Z,{attrs:{title:"Number"}},[t(a.DebounceInput,{attrs:{trimStartZero:!0,type:"number",min:0,decimal:4,maxlength:11,showLimit:!0},model:{value:this.number,callback:t=>{this.number=t}}})]),t(s.Z,{attrs:{title:"Percentage"}},[t(a.DebounceInput,{attrs:{suffix:"%",type:"percentage",max:100,min:0},model:{value:this.percent,callback:t=>{this.percent=t}}})]),t(s.Z,{attrs:{title:"Amount"}},[t(a.DebounceInput,{attrs:{suffix:"元",type:"amount",max:1e3,min:0},model:{value:this.amount,callback:t=>{this.amount=t}}})]),t(s.Z,{attrs:{title:"Text"}},[t(a.DebounceInput,{attrs:{trimOnPaste:!0,trim:!1,maxlength:20,showLimit:!0,min:0},model:{value:this.text,callback:t=>{this.text=t}}})])])}},l=o,c=n(43736),u=(0,c.Z)(l,r,i,!1,null,null,null),d=u.exports},50397:function(t,e,n){"use strict";n(54287),n(51998),n(88124)},88124:function(t,e,n){"use strict";n(54287),n(36391)},51998:function(t,e,n){"use strict";n(54287),n(36391)},49282:function(t,e,n){"use strict";n(54287)}}]);
//# sourceMappingURL=4390.ab9364dd.js.map