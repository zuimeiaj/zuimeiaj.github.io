(function(t){function e(e){for(var a,o,s=e[0],l=e[1],h=e[2],u=0,d=[];u<s.length;u++)o=s[u],r[o]&&d.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(d.length)d.shift()();return i.push.apply(i,h||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/ddr/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var h=0;h<s.length;h++)e(s[h]);var c=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"1b67":function(t,e,n){"use strict";var a=n("4141"),r=n.n(a);r.a},4141:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"columns"},[n("h1",{staticClass:"header"},[t._v("yoyoo - ddr\n        Mobile & PC")]),n("div",{staticClass:"content"},[n("DDR",{attrs:{draggable:t.controlled.draggable,rotatable:t.controlled.rotatable,resizable:t.controlled.resizable,"accept-ratio":t.controlled.acceptRatio,"resize-handler":["tl","tm","tr","r","br","bm","l","bl"],"min-width":+t.controlled.minWidth,"min-height":+t.controlled.minHeight,active:t.controlled.active,value:t.transform},on:{"drag-start":t.handleDragStart,drag:t.handleDrag,"drag-end":t.handleDragEnd,"resize-start":t.handleResizeStart,resize:t.handleResize,"resize-end":t.handleResizeEnd,"rotate-start":t.handleRotateStart,rotate:t.handleRotate,"rotate-end":t.handleRotateEnd}},[n("div",{staticClass:"cell"})])],1),t._m(0)]),n("div",{staticClass:"inspector"},[t._l(t.inputs,function(e){return n("div",{key:e.name,staticClass:"input-item"},[n("label",{staticClass:"input-label"},[t._v(t._s(e.name))]),"checkbox"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.controlled[e.name],expression:"controlled[item.name]"}],staticClass:"input-value",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.controlled[e.name])?t._i(t.controlled[e.name],null)>-1:t.controlled[e.name]},on:{change:function(n){var a=t.controlled[e.name],r=n.target,i=!!r.checked;if(Array.isArray(a)){var o=null,s=t._i(a,o);r.checked?s<0&&t.$set(t.controlled,e.name,a.concat([o])):s>-1&&t.$set(t.controlled,e.name,a.slice(0,s).concat(a.slice(s+1)))}else t.$set(t.controlled,e.name,i)}}}):"radio"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.controlled[e.name],expression:"controlled[item.name]"}],staticClass:"input-value",attrs:{type:"radio"},domProps:{checked:t._q(t.controlled[e.name],null)},on:{change:function(n){return t.$set(t.controlled,e.name,null)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.controlled[e.name],expression:"controlled[item.name]"}],staticClass:"input-value",attrs:{type:e.type},domProps:{value:t.controlled[e.name]},on:{input:function(n){n.target.composing||t.$set(t.controlled,e.name,n.target.value)}}})])}),n("div",{staticClass:"input-item"},[n("label",{staticClass:"input-label"},[t._v("events")]),n("span",{staticClass:"input-value"},[t._v(t._s(t.events))])])],2)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("a",{attrs:{target:"_blank",href:"https://app.yoyoo.ink"}},[t._v("YOYOO原型设计 - 一个在线高保真原型设计工具 ")]),n("a",{attrs:{target:"_blank",href:"https://www.fechat.ink"}},[t._v("FE社区 - 一个基于JavaScript的垂直化前端技术社区")]),n("a",{attrs:{target:"_blank",href:"https://github.com/zuimeiaj/yoyoo-ddr"}},[t._v("Github")])])}],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"wrapper",staticClass:"yoyoo-ddr",class:{active:t.active},style:t.style,on:{touchstart:t.handleMouseDown,mousedown:t.handleMouseDown}},[t._t("default"),t.resizable?n("div",t._l(t.resizeHandler,function(e){return n("span",{key:e,staticClass:"resize-handler",class:e,style:{cursor:t.getNewHandler(e)},attrs:{"data-resizetype":e}})}),0):t._e(),t.rotatable?n("span",{staticClass:"rotate-handler",attrs:{"data-type":"rotate"}}):t._e()],2)},s=[],l=(n("c7c6"),n("c5f6"),n("7618")),h=(n("ac6a"),n("6c7b"),n("d225")),c=n("b0b4"),u=function(){function t(e){Object(h["a"])(this,t),this._values=e}return Object(c["a"])(t,[{key:"toString",value:function(){return"Vector(".concat(this._values.join(", "),")")}},{key:"dot",value:function(e){if(e instanceof t&&this.length===e.length)return this._values.map(function(t,n){return t*e._values[n]}).reduce(function(t,e){return t+e});throw Error("The param `vector` must instance of Vector")}},{key:"get",value:function(t){return this._values[t]}},{key:"length",get:function(){return this._values.length}}]),t}(),d=u,f=function(){function t(e){Object(h["a"])(this,t),this._values=e}return Object(c["a"])(t,[{key:"valueOf",value:function(){return JSON.parse(JSON.stringify(this._values))}},{key:"toString",value:function(){return"Matrix ( "+this._values.map(function(t){return t.join(" ")}).join(", ")+" )"}},{key:"rows",value:function(){return this._values.length}},{key:"cols",value:function(){return this._values[0].length}},{key:"rowVector",value:function(t){return new d(this._values[t].slice(0))}},{key:"colVector",value:function(t){var e=new Array(this.rows()).fill(0);return this._values.forEach(function(n,a){e[a]=n[t]}),new d(e)}},{key:"dot",value:function(e){var n=this;if(e instanceof d&&this.cols()===e.length)return new d(new Array(e.length).fill(null).map(function(t,a){return n.rowVector(a).dot(e)}));if(e instanceof t&&this.cols()===e.rows()){for(var a,r=e.cols(),i=e.rows(),o=t.zeros([i,r]),s=0;s<r;s++){a=this.dot(e.colVector(s));for(var h=0;h<i;h++)o._values[h][s]=a.get(h)}return o}throw Error("expected a Vector or Matrix but got "+Object(l["a"])(e))}},{key:"get",value:function(t,e){return this._values[t][e]}},{key:"T",value:function(){var e=this;return new t(new Array(this.cols()).fill(null).map(function(t,n){return new Array(e.rows()).fill(0).map(function(t,a){return e.get(a,n)})}))}}],[{key:"zeros",value:function(e){return new t(new Array(e[0]).fill(null).map(function(){return new Array(e[1]).fill(0)}))}}]),t}(),p=f,m={br:0,tr:3,tl:2,bl:1,tm:2,bm:0,l:1,r:3},v={l:1,r:1},g={tm:1,bm:1},y={tr:1,bl:1,r:1,l:1};function b(t){return t*Math.PI/180}function _(t){return 180*t/Math.PI}function w(t){var e=t.x,n=t.y,a=t.width,r=t.height,i=t.rotation,o=i*Math.PI/180,s=a/2,l=r/2,h=new p([[Math.cos(o),Math.sin(o)],[-Math.sin(o),Math.cos(o)]]),c=new p([[-s,l],[s,l],[s,-l],[-s,-l]]);return h.dot(c.T()).T().valueOf().map(function(t){return{x:t[0]+s+e,y:-(t[1]-l)+n}})}function M(t){var e,n,a=t.type,r=t.x,i=t.y,o=t.dis,s=t.ratio,l=t.pressAngle,h=t.startAngle,c=t.currentRatio,u=_(Math.atan2(i,r)),d=b(l+u-h);return y[a]?(n=Math.cos(d)*o,e=Math.sin(d)*o):(n=Math.sin(d)*o,e=Math.cos(d)*o),s&&(v[a]?n=e/c:g&&(e=n*c)),{w:e,h:n}}var x=["nw","n","ne","e","se","s","sw","w"],z={tl:0,tm:1,tr:2,r:3,br:4,bm:5,bl:6,l:7};function R(t,e){var n=z[t],a=(n+Math.floor(e/45))%8;return x[a]}var k={name:"ddr",props:{value:{default:function(){return{x:0,y:0,width:100,height:100,rotation:88}},type:Object},active:{default:!0,type:Boolean},resizeHandler:{default:function(){return["tl","tm","tr","r","br","bm","bl","l"]},type:Array},resizable:{default:!0,type:Boolean},rotatable:{default:!0,type:Boolean},draggable:{default:!0,type:Boolean},acceptRatio:{default:!1,type:Boolean},minWidth:{type:Number,default:1},minHeight:{type:Number,default:1}},data:function(){return{transform:Object.assign({},this.value)}},watch:{value:function(t){this.transform=t}},computed:{style:function(){var t=this.transform;return{left:t.x+"px",top:t.y+"px",width:t.width+"px",height:t.height+"px",transform:"rotate(".concat(t.rotation,"deg)")}}},methods:{getNewHandler:function(t){var e=R(t,this.transform.rotation);return e+"-resize"},handleMouseDown:function(t){if(this.active){var e=t.touches?t.touches[0]:t,n=e.clientX,a=e.clientY;this._lastX=n,this._lastY=a,this._activeTarget=t.target,document.addEventListener("mousemove",this.handleMouseMove,!1),document.addEventListener("touchmove",this.handleMouseMove,!1),document.addEventListener("touchend",this.handleMouseUp,!1),document.addEventListener("mouseup",this.handleMouseUp,!1),"rotate"===t.target.dataset.type?(this._handlerType="rotate",this.handleRotateStart(t),this.$emit("rotate-start",t,this.transform)):this._activeTarget.dataset.resizetype?(this._handlerType="resize",this._parentRect=this.$refs.wrapper.parentNode.getBoundingClientRect(),this.handleResizeStart(t),this.$emit("resize-start",t,this.transform)):(this._handlerType="drag",this.draggable&&this.$emit("drag-start",t,this.transform))}},handleMouseMove:function(t){if("resize"===this._handlerType)this.handleResizeMove(t),this.$emit("resize",t,this.transform);else if("drag"===this._handlerType&&this.draggable){var e=t.touches?t.touches[0]:t,n=e.clientX,a=e.clientY,r=n-this._lastX,i=a-this._lastY;this._lastX=n,this._lastY=a,this.transform.x=Math.round(this.transform.x+r),this.transform.y=Math.round(this.transform.y+i),this.$emit("drag",t,this.transform)}else"rotate"===this._handlerType&&(this.handleRotateMove(t),this.$emit("rotate",t,this.transform))},handleMouseUp:function(t){document.removeEventListener("mousemove",this.handleMouseMove,!1),document.removeEventListener("mouseup",this.handleMouseUp,!1),document.removeEventListener("touchmove",this.handleMouseMove,!1),document.removeEventListener("touchend",this.handleMouseUp,!1);var e={drag:"draggable",resize:"resizable",rotate:"rotatable"};this[e[this._handlerType]]&&this.$emit(this._handlerType+"-end",t,this.transform)},handleResizeStart:function(t){var e,n=t.target.dataset.resizetype,a=this.transform,r=w(a),i=r[m[n]],o=t.touches?t.touches[0]:t,s=o.clientX,l=o.clientY,h=s-this._parentRect.left-i.x,c=l-this._parentRect.top-i.y,u=a.width,d=a.height,f=u/d;y[n]?(v[n]&&(d/=2),e=_(Math.atan2(u,d))):(g[n]&&(u/=2),e=_(Math.atan2(d,u)));var p=_(Math.atan2(c,h));this._resizeOpt={matrix:r,rect:a,type:n,opposite:i,currentRatio:f,pressAngle:e,startAngle:p}},handleResizeMove:function(t){var e=t.touches?t.touches[0]:t,n=e.clientX,a=e.clientY,r=this._resizeOpt,i=r.opposite,o=r.currentRatio,s=r.type,l=r.pressAngle,h=r.startAngle,c=n-this._parentRect.left-i.x,u=a-this._parentRect.top-i.y,d=Math.hypot(u,c),f=t.shiftKey||this.acceptRatio,p=M({type:s,dis:d,x:c,y:u,ratio:f,startAngle:h,pressAngle:l,currentRatio:o}),y=p.w,b=p.h,_=Object.assign({},this.transform);v[s]&&!f?_.width=y:g[s]&&!f?_.height=b:(_.width=y,_.height=b),_.width<this.minWidth&&(_.width=this.minWidth),_.height<this.minHeight&&(_.height=this.minHeight),_.width=Math.round(_.width),_.height=Math.round(_.height),o=_.width/_.height;var x=w(_),z=x[m[s]],R=-(z.x-i.x),k=-(z.y-i.y);_.x=Math.round(_.x+R),_.y=Math.round(_.y+k),this._resizeOpt.currentRatio=o,this.transform=_},handleRotateStart:function(t){var e=t.touches?t.touches[0]:t,n=e.clientX,a=e.clientY,r=this.$refs.wrapper.getBoundingClientRect(),i=r.left+r.width/2,o=r.top+r.height/2,s=180/Math.PI*Math.atan2(a-o,n-i),l=this.transform.rotation;this._rotateOpt={cx:i,cy:o,startAngle:s,rotation:l}},handleRotateMove:function(t){var e=this._rotateOpt,n=e.cx,a=e.cy,r=e.startAngle,i=e.rotation,o=t.touches?t.touches[0]:t,s=o.clientX,l=o.clientY,h=s-n,c=l-a,u=180/Math.PI*Math.atan2(c,h),d=u-r,f=i+d;f%=360,f=f<0?f+360:f,this.transform.rotation=Math.floor(f)}}},O=k,j=(n("1b67"),n("2877")),A=Object(j["a"])(O,o,s,!1,null,"42f89040",null),E=A.exports,C={name:"app",components:{DDR:E},data:function(){return{events:"",inputs:[{type:"number",name:"x"},{type:"number",name:"y"},{type:"number",name:"width"},{type:"number",name:"height"},{type:"number",name:"rotation"},{type:"number",name:"minWidth"},{type:"number",name:"minHeight"},{type:"checkbox",name:"acceptRatio"},{type:"checkbox",name:"draggable"},{type:"checkbox",name:"resizable"},{type:"checkbox",name:"rotatable"},{type:"checkbox",name:"active"}],controlled:{x:30,y:30,width:100,height:100,rotation:0,minHeight:10,minWidth:10,rotatable:!0,resizable:!0,draggable:!0,acceptRatio:!1,active:!0}}},computed:{transform:function(){var t=this.controlled,e=t.x,n=t.y,a=t.height,r=t.width,i=t.rotation;return{x:+e,y:+n,width:+r,height:+a,rotation:+i}}},methods:{handler:function(t,e){this.controlled=Object.assign({},this.controlled,e)},handleDragStart:function(t,e){this.events="drag-start",this.handler(t,e)},handleDrag:function(t,e){this.events="drag",this.handler(t,e)},handleDragEnd:function(t,e){this.events="drag-end",this.handler(t,e)},handleResizeStart:function(t,e){this.events="resize-start",this.handler(t,e)},handleResize:function(t,e){this.events="resize",this.handler(t,e)},handleResizeEnd:function(t,e){this.events="resize-end",this.handler(t,e)},handleRotateStart:function(t,e){this.events="rotate-start",this.handler(t,e)},handleRotate:function(t,e){this.events="rotate",this.handler(t,e)},handleRotateEnd:function(t,e){this.events="rotate-end",this.handler(t,e)}}},S=C,$=(n("034f"),Object(j["a"])(S,r,i,!1,null,null,null)),T=$.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(T)}}).$mount("#app")},"64a9":function(t,e,n){}});
//# sourceMappingURL=app.9ea1b227.js.map