(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-webview"],{"081e":function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return r}));var r={myHead:e("94b4").default},i=function(){var n=this.$createElement,t=this._self._c||n;return t("v-uni-view",[t("myHead",{attrs:{msg:this.pageIndex}}),t("v-uni-web-view",{staticStyle:{top:"32px"},attrs:{src:this.url}})],1)},a=[]},"680e":function(n,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{url:"",pageIndex:0}},onLoad:function(n){console.log(n),this.url=n.url,this.pageIndex=n.pageIndex}};t.default=r},7369:function(n,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={props:["msg"],data:function(){return{activeIndex:1}},onLoad:function(n){this.activeIndex=n.num},beforeMount:function(n){},methods:{gotoPageClick:function(n,t){this.divActiveClass=n,"index"==t?uni.switchTab({url:"../pages/"+t+"?num="+n}):uni.navigateTo({url:"../pages/"+t})},gotoNewPageUrl:function(n,t){window.open("https://jzcrlx.github.io/ppt")},gotoWebView:function(n,t){uni.navigateTo({url:"/pages/webview?url="+t+"&pageIndex="+n})}}};t.default=r},"74bf":function(n,t,e){"use strict";var r=e("7b6a"),i=e.n(r);i.a},"7b6a":function(n,t,e){var r=e("a954");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);var i=e("4f06").default;i("5094704e",r,!0,{sourceMap:!1,shadowMode:!1})},"94b4":function(n,t,e){"use strict";e.r(t);var r=e("be01"),i=e("bfae");for(var a in i)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(a);e("74bf");var o=e("f0c5"),u=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"35867bae",null,!1,r["a"],void 0);t["default"]=u.exports},a954:function(n,t,e){var r=e("24fb");t=r(!1),t.push([n.i,"\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* 上面标题栏样式 */.topTitle[data-v-35867bae]{width:100%;font-size:medium;min-width:%?80?%;text-align:center;margin:0;color:#fff;background-color:green}.divCell[data-v-35867bae]{display:grid;grid-template-columns:auto auto auto auto auto auto}.oneItme[data-v-35867bae]{margin:2px 5px 2px 5px;border-radius:5px;line-height:1.8em;cursor:pointer}.activebg[data-v-35867bae]{background-color:#3cb371}",""]),n.exports=t},be01:function(n,t,e){"use strict";e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){}));var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"topTitle"},[e("v-uni-view",{staticClass:"divCell"},[e("v-uni-view",{staticClass:"oneItme",class:1==n.msg?"activebg":"",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.gotoPageClick(1,"index")}}},[n._v("首页")]),e("v-uni-view",{staticClass:"oneItme",class:2==n.msg?"activebg":"",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.gotoPageClick(2,"blood")}}},[n._v("血气")]),e("v-uni-view",{staticClass:"oneItme",class:3==n.msg?"activebg":"",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.gotoPageClick(3,"crrt")}}},[n._v("血滤")]),e("v-uni-view",{staticClass:"oneItme",class:4==n.msg?"activebg":"",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.gotoWebView(4,"https://jzcrlx.github.io/calc")}}},[n._v("工具")]),e("v-uni-view",{staticClass:"oneItme",class:5==n.msg?"activebg":"",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.gotoPageClick(5,"qubank")}}},[n._v("题库")]),e("v-uni-view",{staticClass:"oneItme",class:6==n.msg?"activebg":"",on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.gotoPageClick(6,"ppt")}}},[n._v("PPT")])],1)],1)},i=[]},bfae:function(n,t,e){"use strict";e.r(t);var r=e("7369"),i=e.n(r);for(var a in r)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return r[n]}))}(a);t["default"]=i.a},d357:function(n,t,e){"use strict";e.r(t);var r=e("680e"),i=e.n(r);for(var a in r)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return r[n]}))}(a);t["default"]=i.a},ebad:function(n,t,e){"use strict";e.r(t);var r=e("081e"),i=e("d357");for(var a in i)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(a);var o=e("f0c5"),u=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"d3efd4a8",null,!1,r["a"],void 0);t["default"]=u.exports}}]);