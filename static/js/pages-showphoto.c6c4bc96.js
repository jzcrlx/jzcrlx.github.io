(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-showphoto"],{"00c0":function(t,n,e){"use strict";(function(t){e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("ac1f"),e("466d");var a={data:function(){return{url:"",blIsWeiXin:!1,strName:""}},onLoad:function(t){this.url=t.url,this.name=t.name},methods:{backpages:function(){uni.navigateBack({delta:1})},downloadImage:function(n){t("log",1," at pages/showphoto.vue:49");var e=new Image;e.src=n,e.onload=function(){t("log",2," at pages/showphoto.vue:53");var n=document.createElement("canvas"),a=n.getContext("2d");n.width=e.width,n.height=e.height,a.drawImage(e,0,0);var i=document.createElement("a");i.href=n.toDataURL("image/png"),i.download="image.png",i.click(),t("log",3," at pages/showphoto.vue:64")}},copyUrl:function(){uni.setClipboardData({data:this.url,success:function(t){uni.showToast({title:"成功复制",icon:"success",duration:2e3})}})},fileDownload:function(){uni.downloadFile({url:this.url,success:function(n){200===n.statusCode&&t("log","下载成功"," at pages/showphoto.vue:86")},fail:function(n){t("log",n.errMsg," at pages/showphoto.vue:90")},complete:function(n){t("log",n.statusCode," at pages/showphoto.vue:93")},progress:function(n){t("log","下载进度"+n.progress," at pages/showphoto.vue:96")}})},is_weixin:function(){var n=window.navigator.userAgent.toLowerCase();"micromessenger"==n.match(/MicroMessenger/i)?(t("log","微信浏览器"," at pages/showphoto.vue:105"),this.blIsWeiXin=!0):(t("log","不是微信浏览器"," at pages/showphoto.vue:108"),this.blIsWeiXin=!1)}}};n.default=a}).call(this,e("0de9")["log"])},"268f":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,".urllab[data-v-7e85164b]{display:flex;font-size:small;color:#00f;width:100%;text-align:center;line-height:1.5em}.urllab uni-input[data-v-7e85164b]{border:%?1?% solid grey;border-radius:5px;font-size:xx-small;width:100%;height:1.5rem}.urllab uni-label[data-v-7e85164b]{border:%?1?% solid grey;border-radius:5px;margin:0 6px 0 6px;width:%?80?%}.tipslab[data-v-7e85164b]{font-size:small;color:#00f;width:98%;text-align:left;line-height:2rem}.myview[data-v-7e85164b]{text-align:center;width:80%;height:auto;margin-left:calc(20% /2)}img[data-v-7e85164b]{width:100%;height:auto}.-textBold-[data-v-7e85164b]{font-weight:700}",""]),t.exports=n},2951:function(t,n,e){"use strict";e.r(n);var a=e("00c0"),i=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},5656:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"topTitle"},[e("v-uni-view",{staticClass:"divCell"},[e("v-uni-view",{staticClass:"oneItme",class:1==t.msg?"activebg":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.gotoPageClick(1,"index")}}},[t._v("首页")]),e("v-uni-view",{staticClass:"oneItme",class:2==t.msg?"activebg":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.gotoPageClick(2,"blood")}}},[t._v("血气")]),e("v-uni-view",{staticClass:"oneItme",class:3==t.msg?"activebg":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.gotoPageClick(3,"crrt")}}},[t._v("血滤")]),e("v-uni-view",{staticClass:"oneItme",class:4==t.msg?"activebg":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.gotoWebView(4,"https://jzcrlx.github.io/calc")}}},[t._v("工具")]),e("v-uni-view",{staticClass:"oneItme",class:5==t.msg?"activebg":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.gotoPageClick(5,"qubank")}}},[t._v("题库")]),e("v-uni-view",{staticClass:"oneItme",class:6==t.msg?"activebg":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.gotoPageClick(6,"ppt")}}},[t._v("PPT")])],1)],1)},i=[]},5901:function(t,n,e){"use strict";var a=e("a056"),i=e.n(a);i.a},"5de0":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 上面标题栏样式 */.topTitle[data-v-35867bae]{width:100%;font-size:medium;min-width:%?80?%;text-align:center;margin:0;color:#fff;background-color:green}.divCell[data-v-35867bae]{display:grid;grid-template-columns:auto auto auto auto auto auto}.oneItme[data-v-35867bae]{margin:2px 5px 2px 5px;border-radius:5px;line-height:1.8em;cursor:pointer}.activebg[data-v-35867bae]{background-color:#3cb371}",""]),t.exports=n},7261:function(t,n,e){"use strict";e.r(n);var a=e("ccb7"),i=e("2951");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("fb2a");var s=e("f0c5"),u=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"7e85164b",null,!1,a["a"],void 0);n["default"]=u.exports},"8a95":function(t,n,e){var a=e("268f");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("42c6ae0e",a,!0,{sourceMap:!1,shadowMode:!1})},a056:function(t,n,e){var a=e("5de0");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("232d668d",a,!0,{sourceMap:!1,shadowMode:!1})},a927:function(t,n,e){"use strict";e.r(n);var a=e("f9d7"),i=e.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(o);n["default"]=i.a},ccb7:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return a}));var a={myHead:e("ccfa").default,uniIcons:e("9a15").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"viewHome"},[e("myHead",{attrs:{msg:"7"}}),e("v-uni-view",{staticStyle:{"font-size":"medium",margin:"10rpx"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.backpages.apply(void 0,arguments)}}},[e("uni-icons",{attrs:{type:"undo-filled",size:"30"}}),t._v("返回")],1),e("v-uni-view",{staticClass:"myview"},[e("v-uni-view",{staticStyle:{width:"100%"}},[e("img",{attrs:{src:t.url}})]),e("v-uni-view",{staticClass:"urllab"},[e("v-uni-input",{attrs:{type:"text",value:t.url}}),e("v-uni-label",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.copyUrl.apply(void 0,arguments)}}},[t._v("复制")])],1),e("v-uni-view",{staticClass:"tipslab -textBold-"},[t._v("保存原图方法:")]),e("v-uni-view",{staticClass:"tipslab"},[t._v("建议: 请点击右上角，在浏览器打开页面下载...")]),e("v-uni-view",{staticClass:"tipslab"},[t._v("2.手机微信操作: 长按图片 >> 保存到手机...")]),e("v-uni-view",{staticClass:"tipslab"},[t._v("2.电脑操作: 右键 >> 图片另存为...")]),e("v-uni-view",{staticClass:"tipslab"},[t._v("(如有疑问请询问谢锐威)")])],1)],1)},o=[]},ccfa:function(t,n,e){"use strict";e.r(n);var a=e("5656"),i=e("a927");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("5901");var s=e("f0c5"),u=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"35867bae",null,!1,a["a"],void 0);n["default"]=u.exports},f9d7:function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={props:["msg"],data:function(){return{activeIndex:1}},onLoad:function(t){this.activeIndex=t.num},beforeMount:function(t){},methods:{gotoPageClick:function(t,n){this.divActiveClass=t,"index"==n?uni.switchTab({url:"../pages/"+n+"?num="+t}):uni.navigateTo({url:"../pages/"+n})},gotoNewPageUrl:function(t,n){window.open("https://jzcrlx.github.io/ppt")},gotoWebView:function(t,n){uni.navigateTo({url:"/pages/webview?url="+n+"&pageIndex="+t})}}};n.default=a},fb2a:function(t,n,e){"use strict";var a=e("8a95"),i=e.n(a);i.a}}]);