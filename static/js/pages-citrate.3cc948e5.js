(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-citrate"],{"405b":function(t,a,i){"use strict";i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return n}));var n={crrtHead:i("54b3").default,uniIcons:i("9a15").default,footQrCode:i("db92").default},e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"viewHome",style:{width:t.numWidth}},[i("v-uni-view",{staticClass:"viewNext"},[i("crrtHead",{attrs:{title:"枸橼酸钠计算"}}),i("v-uni-view",{staticClass:"showTitle"},[i("uni-icons",{staticStyle:{"margin-left":"10px","margin-right":"2px",color:"white"},attrs:{type:"chat",size:"20"}}),t._v("数据输入")],1),i("v-uni-view",{staticClass:"showReturn"},[i("table",{staticClass:"myTable"},[i("tr",[i("td",{staticClass:"tdLab  -txtRight-"},[i("v-uni-label",[t._v("血液泵流量"),i("v-uni-label",{staticClass:"labSmall"},[t._v("(ml/min)")]),t._v(":")],1)],1),i("td",{staticClass:"tdIpu"},[i("v-uni-input",{staticClass:"weui-input",attrs:{id:"BloodVelocity",type:"digit",placeholder:"血液泵流量(ml/min)"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.inputBloodVelocity.apply(void 0,arguments)}},model:{value:t.strBloodVelocity,callback:function(a){t.strBloodVelocity=a},expression:"strBloodVelocity"}})],1)]),i("tr",[i("td",{staticClass:"tdLab -txtRight-",staticStyle:{width:"60%"}},[i("v-uni-label",[t._v("枸橼酸钠浓度"),i("v-uni-label",{staticClass:"labSmall"},[t._v("(%)")]),t._v(":")],1)],1),i("td",{staticClass:"tdIpu",staticStyle:{width:"35%"}},[i("v-uni-input",{staticClass:"weui-input",attrs:{id:"Na3Ci",type:"digit",placeholder:"枸橼酸钠浓度(%)"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.inputNa3Ci.apply(void 0,arguments)}},model:{value:t.strNa3Ci,callback:function(a){t.strNa3Ci=a},expression:"strNa3Ci"}})],1)]),i("tr",[i("td",{staticClass:"tdLab -txtRight-",staticStyle:{width:"60%"}},[i("v-uni-label",[t._v("枸橼酸钠剂量"),i("v-uni-label",{staticClass:"labSmall"},[t._v("(mmol/L)")]),t._v(":")],1)],1),i("td",{staticClass:"tdIpu",staticStyle:{width:"35%"}},[i("v-uni-input",{staticClass:"weui-input",attrs:{id:"Na3CiDose",type:"digit",placeholder:"枸橼酸钠剂量(mmol/L)"},on:{input:function(a){arguments[0]=a=t.$handleEvent(a),t.inputNa3CiDose.apply(void 0,arguments)}},model:{value:t.strNa3CiDose,callback:function(a){t.strNa3CiDose=a},expression:"strNa3CiDose"}})],1)])]),i("v-uni-view",{staticClass:"viewButton"},[i("v-uni-button",{staticClass:"mini-btn",staticStyle:{width:"30%"},attrs:{size:"mini",type:"primary"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.btnJS.apply(void 0,arguments)}}},[t._v("计 算")]),i("v-uni-button",{staticClass:"mini-btn",staticStyle:{width:"30%"},attrs:{size:"mini",type:"default"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.btnSave.apply(void 0,arguments)}}},[t._v("保\n\t\t\t\t\t存")]),i("v-uni-button",{staticClass:"mini-btn",staticStyle:{width:"30%"},attrs:{size:"mini",type:"warn"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.btnClear.apply(void 0,arguments)}}},[t._v("重 置")])],1)],1),i("v-uni-view",{staticClass:"showTitle"},[i("uni-icons",{staticStyle:{"margin-left":"10px","margin-right":"2px",color:"white"},attrs:{type:"compose",size:"20"}}),t._v("计算结果")],1),i("v-uni-view",{staticClass:"showReturn"},[i("table",{staticClass:"myTable"},[i("tr",[i("td",{staticClass:"tdLab -txtRight-",staticStyle:{width:"60%"}},[i("v-uni-label",[t._v("枸橼酸钠输注速度"),i("v-uni-label",{staticClass:"labSmall"},[t._v("(ml/h)")]),t._v(":")],1)],1),i("td",{staticClass:"tdIpu",staticStyle:{width:"35%"}},[i("v-uni-input",{staticClass:"weui-input -bgColorMoccasin-",model:{value:t.strNa3CiVelocity,callback:function(a){t.strNa3CiVelocity=a},expression:"strNa3CiVelocity"}})],1)])])]),i("v-uni-view",{staticClass:"showTitle"},[i("uni-icons",{staticStyle:{"margin-left":"10px","margin-right":"2px",color:"white"},attrs:{type:"info-filled",size:"20"}}),t._v("提示")],1),i("v-uni-view",{staticClass:"showReturn"},[i("v-uni-view",{staticClass:"ckViewButton"},[t._v("1.一般情况下每升血液中加入3mmol枸橼酸钠可使钙离子水平降到0.4mmol/L以下."),i("br"),t._v("2.枸橼酸钠分子量为294,所4%枸橼酸钠溶液的浓度为136mmol/L."),i("br"),t._v("3.代谢后1mmol枸橼酸可产生3mmol碳酸氢根."),i("br")])],1),i("v-uni-view",{staticClass:"showTitle"},[i("uni-icons",{staticStyle:{"margin-left":"10px","margin-right":"2px",color:"white"},attrs:{type:"wallet-filled",size:"20"}}),t._v("参考")],1),i("v-uni-view",{staticClass:"showReturn"},[i("v-uni-view",{staticClass:"ckViewButton"},[t._v("[1]重症血液净化[M].北京:人民卫生出版社,2017"),i("br"),t._v("[2]ICU主治医师手册(第2版)[M].江苏:科学技术出版社,2013"),i("br"),t._v("[3]血液净化疗法手册(第2版)[M].北京:科学技术出版社,2013"),i("br")])],1),i("footQrCode")],1)],1)},o=[]},"66f3":function(t,a,i){t.exports=i.p+"static/img/QRCode.14c798b0.gif"},"6d7f":function(t,a,i){"use strict";i("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,i("a9e3");var n={data:function(){return{strBloodVelocity:200,strNa3Ci:4,strNa3CiDose:3.2,strNa3CiVelocity:"-",numWidth:"100%"}},onLoad:function(t){this.subReadData("crrt-citrate-mr","crrt-citrate")},methods:{inputBloodVelocity:function(t){this.strBloodVelocity=t.detail.value,this.gotoCalc()},inputNa3Ci:function(t){this.strNa3Ci=t.detail.value,this.gotoCalc()},inputNa3CiDose:function(t){this.strNa3CiDose=t.detail.value,this.gotoCalc()},btnClear:function(t){this.subReadData("crrt-citrate-mr","crrt-citrate")},subReadData:function(t,a){var i="";isNaN(uni.getStorageSync(t))?i=uni.getStorageSync(t):isNaN(uni.getStorageSync(a))&&(i=uni.getStorageSync(a)),isNaN(i)?(this.strBloodVelocity=Number(i.strBloodVelocity),this.strNa3Ci=Number(i.strNa3Ci),this.strNa3CiDose=Number(i.strNa3CiDose),this.strNa3CiVelocity="-"):(this.strBloodVelocity=200,this.strNa3Ci=4,this.strNa3CiDose=3.2,this.strNa3CiVelocity="-")},btnJS:function(t){this.gotoCalc(),uni.showToast({title:"已计算出结果",icon:"success",duration:1e3})},gotoCalc:function(){var t=0;t=Number(this.strNa3CiDose)*Number(this.strBloodVelocity)*60/1e3/(.034*Number(this.strNa3Ci)),this.strNa3CiVelocity=t.toFixed(1),uni.setStorageSync("crrt-citrate",this.$data)},btnSave:function(t){var a=this;uni.showModal({title:"询问",content:"您确定要将参数保存为默认吗?",success:function(t){t.confirm?(uni.setStorageSync("crrt-citrate-mr",a.$data),uni.showToast({title:"已保存为默认",icon:"success",duration:1e3})):t.cancel}})}}};a.default=n},"843b":function(t,a,i){var n=i("24fb");a=n(!1),a.push([t.i,".myTable[data-v-fafa6372]{\n\t/* display: flex; */color:#00f;margin:8px;\n\t/* margin-right: 8px; */\n\t/* justify-content:flex-end; */\n\t/* text-align: center; */\n\t/* margin-top: 8px; */line-height:2em;border-radius:3px;border:transparent}.viewIpu[data-v-fafa6372]{display:flex;justify-content:flex-start}.showLab[data-v-fafa6372]{width:145px;text-align:left}.showIpu[data-v-fafa6372]{width:calc(100% - 145px);text-align:left}.viewHome[data-v-fafa6372]{\t\n    /* position: relative;\n\tfloat: left;\n\tleft: 50%;\t */max-width:500px;margin:0 auto;width:500px}.viewNext[data-v-fafa6372]{\n\t/* float: left; */\n\t/* position: relative;\t\n\tleft: -50%; */bottom:var(--window-bottom);margin-bottom:10px}.weui-input[data-v-fafa6372]{border:1px solid #66cdaa;width:100%;margin-left:2px;margin-right:2px;border-radius:3px}\n\n\n/*单位显示内容 */.labSmall[data-v-fafa6372]{font-size:xx-small;color:green;margin-left:.2rem}\n\n\n/* 参考内容 */.ckViewButton[data-v-fafa6372]{font-size:xx-small;line-height:1.2rem;color:#000;margin:%?20?%;margin-bottom:%?20?%}\n\n\n/* 线条样式 */.line[data-v-fafa6372]{width:100%;height:%?2?%;background:#8a2be2;margin-top:%?10?%}\n\n\n/* 标题栏样式 */.showTitle[data-v-fafa6372]{margin-top:42px;margin-bottom:0;background:green;color:#fff;border-radius:5px 5px 0 0!important;margin-left:10px;margin-right:10px}\n\n\n/* 署名内容 */.textShowName[data-v-fafa6372]{color:#00f;font-size:xx-small;text-align:right;margin:10px;vertical-align:text-bottom}.viewget[data-v-fafa6372]{margin-left:%?10?%;margin-right:%?10?%;margin-top:%?10?%;color:#00f;text-align:left}\n\n\n/* 文本的上标与下标 */sup[data-v-fafa6372]{font-size:%?20?%;vertical-align:text-top}sub[data-v-fafa6372]{font-size:%?20?%;vertical-align:text-bottom}.viewButton[data-v-fafa6372]{\n\t/* display: flex;\t\t\t\n\t\tjustify-content:space-around;\t\t\n\t\twidth: 90%; \n\t\tmargin-bottom: 0rpx;\n\t\tmargin-top: 10rpx; */display:flex;flex-direction:row;justify-content:center;\n\t/* margin-top: 10px;\n\tmargin-left: 10px;\n\tmargin-right: 10px; */margin:10px}.viewBackground[data-v-fafa6372]{background-color:#e6e6fa;border-radius:3px}.mybutton[data-v-fafa6372]{margin-left:1px;margin-right:1px;height:22.39px;font-size:xx-small\n\t/* width:70px; */}\n\n\n/* 显示结果区样式 */.showReturn[data-v-fafa6372]{margin-left:0;margin-right:0;border:solid 1px green;border-radius:0 0 5px 5px;margin-left:10px;margin-right:10px}.-txtCenter-[data-v-fafa6372]{text-align:center}\n\n\n/* 图标样式 */.-bgColorMoccasin-[data-v-fafa6372]{background:#ffe4b5}.-bgColorYellow-[data-v-fafa6372]{background:#ff0}.-bgPrimary-[data-v-fafa6372]{background:#007aff}.-bgWarning-[data-v-fafa6372]{background:#f0ad4e}.-bgSuccess-[data-v-fafa6372]{background:#4cd964}.-bgColorOlive-[data-v-fafa6372]{background:#8dc63f}.-bgColorTips-[data-v-fafa6372]{background:#8cde9b}.-bgColorGrey-[data-v-fafa6372]{background:#8799a3}\n\n\n/* 显示表格中的单元格样式 */.tdLab[data-v-fafa6372]{width:140px;text-align:left}\n\n\n/* 输入表格中的单元格样式 */.tdIpu[data-v-fafa6372]{width:calc(100% - 140px);text-align:left}.-txtLeft-[data-v-fafa6372]{text-align:left}.-txtRight-[data-v-fafa6372]{text-align:right}\n\n\n/* 自制button样式 */.viewToBut[data-v-fafa6372]{color:#fff;font-size:small;height:20px;text-align:center;line-height:20px;border-radius:5px;width:100%;margin:0 5px 0 5px\n\t/*上右下左边界*/}\n\n\n/* 上面标题栏样式 */.topTitle[data-v-fafa6372]{font-size:medium;min-width:%?80?%;text-align:center;margin:0;color:#fff;background-color:green}.viewCell[data-v-fafa6372]{display:grid;grid-template-columns:auto auto auto auto auto auto}.oneItme[data-v-fafa6372]{margin:2px 5px 2px 5px;border-radius:5px;line-height:1.8em}.-bgSelect-[data-v-fafa6372]{background-color:#3cb371}\n\n\n/* 上面标题栏样式 */",""]),t.exports=a},"8bc9":function(t,a,i){"use strict";i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return e})),i.d(a,"a",(function(){}));var n=function(){var t=this.$createElement,a=this._self._c||t;return a("v-uni-view",{staticClass:"logoView",staticStyle:{"text-align":"center","margin-top":"28px","margin-bottom":"10px"}},[a("img",{staticStyle:{width:"70%"},attrs:{src:i("66f3")}})])},e=[]},"93a0":function(t,a,i){"use strict";i("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;a.default={name:"footQrCode",data:function(){return{}}}},"979e":function(t,a,i){"use strict";i.r(a);var n=i("93a0"),e=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(o);a["default"]=e.a},d558:function(t,a,i){"use strict";i.r(a);var n=i("405b"),e=i("e5aa");for(var o in e)["default"].indexOf(o)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(o);i("fd23");var r=i("f0c5"),s=Object(r["a"])(e["default"],n["b"],n["c"],!1,null,"fafa6372",null,!1,n["a"],void 0);a["default"]=s.exports},db92:function(t,a,i){"use strict";i.r(a);var n=i("8bc9"),e=i("979e");for(var o in e)["default"].indexOf(o)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(o);var r=i("f0c5"),s=Object(r["a"])(e["default"],n["b"],n["c"],!1,null,"6c78170e",null,!1,n["a"],void 0);a["default"]=s.exports},e5aa:function(t,a,i){"use strict";i.r(a);var n=i("6d7f"),e=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(a,t,(function(){return n[t]}))}(o);a["default"]=e.a},f18c:function(t,a,i){var n=i("843b");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var e=i("4f06").default;e("103520ee",n,!0,{sourceMap:!1,shadowMode:!1})},fd23:function(t,a,i){"use strict";var n=i("f18c"),e=i.n(n);e.a}}]);