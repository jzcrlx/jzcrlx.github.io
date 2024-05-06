(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-plasma"],{"03cd":function(t,i,a){"use strict";a.d(i,"b",(function(){return n})),a.d(i,"c",(function(){return s})),a.d(i,"a",(function(){return e}));var e={crrtHead:a("54b3").default,uniIcons:a("9a15").default,footQrCode:a("db92").default},n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"viewHome",style:{width:t.numWidth}},[a("v-uni-view",{staticClass:"viewNext"},[a("crrtHead",{attrs:{title:"血浆总量计算"}}),a("v-uni-view",{staticClass:"showTitle"},[a("uni-icons",{staticStyle:{"margin-left":"10px","margin-right":"2px",color:"white"},attrs:{type:"chat",size:"20"}}),t._v("数据输入")],1),a("v-uni-view",{staticClass:"showReturn"},[a("table",{staticClass:"myTable"},[a("tr",[a("td",{staticClass:"tdLab  -txtRight-"},[a("v-uni-label",[t._v("患者身高"),a("v-uni-label",{staticClass:"labSmall"},[t._v("(cm)")]),t._v(":")],1)],1),a("td",{staticClass:"tdIpu"},[a("v-uni-input",{staticClass:"weui-input",attrs:{id:"H",type:"digit",placeholder:"患者身高(cm)"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.inputH.apply(void 0,arguments)}},model:{value:t.strH,callback:function(i){t.strH=i},expression:"strH"}})],1)]),a("tr",[a("td",{staticClass:"tdLab -txtRight-"},[a("v-uni-label",[t._v("HCT"),a("v-uni-label",{staticClass:"labSmall"},[t._v("(%)")]),t._v(":")],1)],1),a("td",{staticClass:"tdIpu"},[a("v-uni-input",{staticClass:"weui-input",attrs:{id:"HCT",type:"digit",placeholder:"HCT(%)"},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.inputHCT.apply(void 0,arguments)}},model:{value:t.strHCT,callback:function(i){t.strHCT=i},expression:"strHCT"}})],1)])]),a("v-uni-view",{staticClass:"viewButton"},[a("v-uni-button",{staticClass:"mini-btn",staticStyle:{width:"30%"},attrs:{size:"mini",type:"primary"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.btnJS.apply(void 0,arguments)}}},[t._v("计 算")]),a("v-uni-button",{staticClass:"mini-btn",staticStyle:{width:"30%"},attrs:{size:"mini",type:"default"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.btnSave.apply(void 0,arguments)}}},[t._v("保\n\t\t\t\t\t存")]),a("v-uni-button",{staticClass:"mini-btn",staticStyle:{width:"30%"},attrs:{size:"mini",type:"warn"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.btnClear.apply(void 0,arguments)}}},[t._v("重 置")])],1)],1),a("v-uni-view",{staticClass:"showTitle"},[a("uni-icons",{staticStyle:{"margin-left":"10px","margin-right":"2px",color:"white"},attrs:{type:"compose",size:"20"}}),t._v("计算结果")],1),a("v-uni-view",{staticClass:"showReturn"},[a("table",{staticClass:"myTable"},[a("tr",[a("td",{staticClass:"tdLab -txtRight-"},[a("v-uni-label",[t._v("男性去脂体重"),a("v-uni-label",{staticClass:"labSmall"},[t._v("(kg)")]),t._v(":")],1)],1),a("td",{staticClass:"tdIpu"},[a("v-uni-input",{staticClass:"weui-input -bgColorMoccasin-",model:{value:t.strLbwToMen,callback:function(i){t.strLbwToMen=i},expression:"strLbwToMen"}})],1)]),a("tr",[a("td",{staticClass:"tdLab -txtRight-"},[a("v-uni-label",[t._v("女性去脂体重"),a("v-uni-label",{staticClass:"labSmall"},[t._v("(kg)")]),t._v(":")],1)],1),a("td",{staticClass:"tdIpu"},[a("v-uni-input",{staticClass:"weui-input -bgColorMoccasin-",model:{value:t.strLbwToLed,callback:function(i){t.strLbwToLed=i},expression:"strLbwToLed"}})],1)]),a("tr",[a("td",{staticClass:"tdLab -txtRight-"},[a("v-uni-label",[t._v("男性血浆量"),a("v-uni-label",{staticClass:"labSmall"},[t._v("(ml)")]),t._v(":")],1)],1),a("td",{staticClass:"tdIpu"},[a("v-uni-input",{staticClass:"weui-input -bgColorMoccasin-",model:{value:t.strHctToMen,callback:function(i){t.strHctToMen=i},expression:"strHctToMen"}})],1)]),a("tr",[a("td",{staticClass:"tdLab -txtRight-"},[a("v-uni-label",[t._v("女性血浆量"),a("v-uni-label",{staticClass:"labSmall"},[t._v("(ml)")]),t._v(":")],1)],1),a("td",{staticClass:"tdIpu"},[a("v-uni-input",{staticClass:"weui-input -bgColorMoccasin-",model:{value:t.strHctToLed,callback:function(i){t.strHctToLed=i},expression:"strHctToLed"}})],1)])]),a("v-uni-view",{staticClass:"textShowName"},[t._v("深圳市中西医结合医院－谢锐威"),a("br"),t._v("E-mail:27165718@qq.com")])],1),a("v-uni-view",{staticClass:"showTitle"},[a("uni-icons",{staticStyle:{"margin-left":"10px","margin-right":"2px",color:"white"},attrs:{type:"info-filled",size:"20"}}),t._v("引用公式")],1),a("v-uni-view",{staticClass:"showReturn"},[a("v-uni-view",{staticClass:"ckViewButton"},[t._v("血浆量 = (1 - HCT) × (intB + intC × LBW)"),a("br"),t._v("HCT：红细胞压积(%)"),a("br"),t._v("intB(常数1)：男1350, 女864"),a("br"),t._v("intC(常数2)：男41, 女47.2"),a("br"),t._v("Wt：体重(kg)"),a("br"),t._v("Ht：身高(cm)"),a("br"),t._v("LBW：lean body weight(去脂体重)"),a("br"),t._v("LBW(男) = 0.407 × Wt + 0.267 × Ht - 19.2"),a("br"),t._v("LBW(女) = 0.252 × Wt + 0.473 × Ht - 48.3"),a("br")])],1),a("v-uni-view",{staticClass:"showTitle"},[a("uni-icons",{staticStyle:{"margin-left":"10px","margin-right":"2px",color:"white"},attrs:{type:"wallet-filled",size:"20"}}),t._v("参考文献")],1),a("v-uni-view",{staticClass:"showReturn"},[a("v-uni-view",{staticClass:"ckViewButton"},[t._v("[1]Estimated lean body mass as an index for normalization of body fluid volumes in humans.\n\t\t\t\tPMID:6496691."),a("br"),t._v("[2]Therapeutic plasma exchange:A prospective randomized trial to evaluate 2 strategies in patients\n\t\t\t\twith liver failure. PMID:29571962."),a("br"),t._v("[3]Continuous haematocrit monitoring during intradialytic hypotension:precipitous decline in plasma\n\t\t\t\trefill rates. PMID:14767022."),a("br")])],1),a("footQrCode")],1)],1)},s=[]},"66f3":function(t,i,a){t.exports=a.p+"static/img/QRCode.14c798b0.gif"},"8bc9":function(t,i,a){"use strict";a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){}));var e=function(){var t=this.$createElement,i=this._self._c||t;return i("v-uni-view",{staticClass:"logoView",staticStyle:{"text-align":"center","margin-top":"28px","margin-bottom":"10px"}},[i("img",{staticStyle:{width:"70%"},attrs:{src:a("66f3")}})])},n=[]},"8c13":function(t,i,a){"use strict";a.r(i);var e=a("bc24"),n=a.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(s);i["default"]=n.a},"8e04":function(t,i,a){"use strict";a.r(i);var e=a("03cd"),n=a("8c13");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(i,t,(function(){return n[t]}))}(s);a("b4d3");var r=a("f0c5"),o=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"39d938eb",null,!1,e["a"],void 0);i["default"]=o.exports},"93a0":function(t,i,a){"use strict";a("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;i.default={name:"footQrCode",data:function(){return{}}}},"979e":function(t,i,a){"use strict";a.r(i);var e=a("93a0"),n=a.n(e);for(var s in e)["default"].indexOf(s)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(s);i["default"]=n.a},"9dae":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,".myTable[data-v-39d938eb]{\n\t/* display: flex; */color:#00f;margin:8px;\n\t/* margin-right: 8px; */\n\t/* justify-content:flex-end; */\n\t/* text-align: center; */\n\t/* margin-top: 8px; */line-height:2em;border-radius:3px;border:transparent}.viewIpu[data-v-39d938eb]{display:flex;justify-content:flex-start}.showLab[data-v-39d938eb]{width:145px;text-align:left}.showIpu[data-v-39d938eb]{width:calc(100% - 145px);text-align:left}.viewHome[data-v-39d938eb]{\t\n    /* position: relative;\n\tfloat: left;\n\tleft: 50%;\t */max-width:500px;margin:0 auto;width:500px}.viewNext[data-v-39d938eb]{\n\t/* float: left; */\n\t/* position: relative;\t\n\tleft: -50%; */bottom:var(--window-bottom);margin-bottom:10px}.weui-input[data-v-39d938eb]{border:1px solid #66cdaa;width:100%;margin-left:2px;margin-right:2px;border-radius:3px}\n\n\n/*单位显示内容 */.labSmall[data-v-39d938eb]{font-size:xx-small;color:green;margin-left:.2rem}\n\n\n/* 参考内容 */.ckViewButton[data-v-39d938eb]{font-size:xx-small;line-height:1.2rem;color:#000;margin:%?20?%;margin-bottom:%?20?%}\n\n\n/* 线条样式 */.line[data-v-39d938eb]{width:100%;height:%?2?%;background:#8a2be2;margin-top:%?10?%}\n\n\n/* 标题栏样式 */.showTitle[data-v-39d938eb]{margin-top:42px;margin-bottom:0;background:green;color:#fff;border-radius:5px 5px 0 0!important;margin-left:10px;margin-right:10px}\n\n\n/* 署名内容 */.textShowName[data-v-39d938eb]{color:#00f;font-size:xx-small;text-align:right;margin:10px;vertical-align:text-bottom}.viewget[data-v-39d938eb]{margin-left:%?10?%;margin-right:%?10?%;margin-top:%?10?%;color:#00f;text-align:left}\n\n\n/* 文本的上标与下标 */sup[data-v-39d938eb]{font-size:%?20?%;vertical-align:text-top}sub[data-v-39d938eb]{font-size:%?20?%;vertical-align:text-bottom}.viewButton[data-v-39d938eb]{\n\t/* display: flex;\t\t\t\n\t\tjustify-content:space-around;\t\t\n\t\twidth: 90%; \n\t\tmargin-bottom: 0rpx;\n\t\tmargin-top: 10rpx; */display:flex;flex-direction:row;justify-content:center;\n\t/* margin-top: 10px;\n\tmargin-left: 10px;\n\tmargin-right: 10px; */margin:10px}.viewBackground[data-v-39d938eb]{background-color:#e6e6fa;border-radius:3px}.mybutton[data-v-39d938eb]{margin-left:1px;margin-right:1px;height:22.39px;font-size:xx-small\n\t/* width:70px; */}\n\n\n/* 显示结果区样式 */.showReturn[data-v-39d938eb]{margin-left:0;margin-right:0;border:solid 1px green;border-radius:0 0 5px 5px;margin-left:10px;margin-right:10px}.-txtCenter-[data-v-39d938eb]{text-align:center}\n\n\n/* 图标样式 */.-bgColorMoccasin-[data-v-39d938eb]{background:#ffe4b5}.-bgColorYellow-[data-v-39d938eb]{background:#ff0}.-bgPrimary-[data-v-39d938eb]{background:#007aff}.-bgWarning-[data-v-39d938eb]{background:#f0ad4e}.-bgSuccess-[data-v-39d938eb]{background:#4cd964}.-bgColorOlive-[data-v-39d938eb]{background:#8dc63f}.-bgColorTips-[data-v-39d938eb]{background:#8cde9b}.-bgColorGrey-[data-v-39d938eb]{background:#8799a3}\n\n\n/* 显示表格中的单元格样式 */.tdLab[data-v-39d938eb]{width:140px;text-align:left}\n\n\n/* 输入表格中的单元格样式 */.tdIpu[data-v-39d938eb]{width:calc(100% - 140px);text-align:left}.-txtLeft-[data-v-39d938eb]{text-align:left}.-txtRight-[data-v-39d938eb]{text-align:right}\n\n\n/* 自制button样式 */.viewToBut[data-v-39d938eb]{color:#fff;font-size:small;height:20px;text-align:center;line-height:20px;border-radius:5px;width:100%;margin:0 5px 0 5px\n\t/*上右下左边界*/}\n\n\n/* 上面标题栏样式 */.topTitle[data-v-39d938eb]{font-size:medium;min-width:%?80?%;text-align:center;margin:0;color:#fff;background-color:green}.viewCell[data-v-39d938eb]{display:grid;grid-template-columns:auto auto auto auto auto auto}.oneItme[data-v-39d938eb]{margin:2px 5px 2px 5px;border-radius:5px;line-height:1.8em}.-bgSelect-[data-v-39d938eb]{background-color:#3cb371}\n\n\n/* 上面标题栏样式 */",""]),t.exports=i},b4d3:function(t,i,a){"use strict";var e=a("cf26"),n=a.n(e);n.a},bc24:function(t,i,a){"use strict";a("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,a("a9e3");var e={data:function(){return{strH:170,strW:60,strHCT:30,strLbwToMen:"-",strLbwToLed:"-",strHctToMen:"-",strHctToLed:"-",numWidth:"100%"}},onLoad:function(t){this.subReadData("crrt-plasma-mr","crrt-plasma")},methods:{inputH:function(t){this.strH=t.detail.value,this.gtoCalc()},inputWT:function(t){this.strW=t.detail.value,this.gtoCalc()},inputHCT:function(t){this.strHCT=t.detail.value,this.gtoCalc()},btnClear:function(t){this.subReadData("crrt-plasma-mr","crrt-plasma")},subReadData:function(t,i){var a="";isNaN(uni.getStorageSync(t))?a=uni.getStorageSync(t):isNaN(uni.getStorageSync(i))&&(a=uni.getStorageSync(i)),isNaN(a)?(this.strH=Number(a.strH),this.strW=Number(a.strW),this.strHCT=Number(a.strHCT),this.strLbwToMen="-",this.strLbwToLed="-",this.strHctToMen="-",this.strHctToLed="-"):(this.strH=170,this.strW=60,this.strHCT=30,this.strLbwToMen="-",this.strLbwToLed="-",this.strHctToMen="-",this.strHctToLed="-")},btnJS:function(t){this.gtoCalc(),uni.showToast({title:"已计算出结果",icon:"success",duration:2e3})},btnSave:function(t){var i=this;uni.showModal({title:"询问",content:"您确定要将参数保存为默认吗?",success:function(t){t.confirm?(uni.setStorageSync("crrt-plasma-mr",i.$data),uni.showToast({title:"已保存为默认",icon:"success",duration:1e3})):t.cancel}})},gtoCalc:function(){var t=0;t=.407*Number(this.strW)+.267*Number(this.strH)-19.2;var i=0;i=.252*Number(this.strW)+.473*Number(this.strH)-48.3;var a=0,e=0;a=(1-Number(this.strHCT)/100)*(1350+41*t),e=(1-Number(this.strHCT)/100)*(864+47.2*i),this.strLbwToMen=t.toFixed(2),this.strLbwToLed=i.toFixed(2),this.strHctToMen=a.toFixed(2),this.strHctToLed=e.toFixed(2),uni.setStorageSync("crrt-plasma",this.$data)}}};i.default=e},cf26:function(t,i,a){var e=a("9dae");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("5a7c4a6c",e,!0,{sourceMap:!1,shadowMode:!1})},db92:function(t,i,a){"use strict";a.r(i);var e=a("8bc9"),n=a("979e");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(i,t,(function(){return n[t]}))}(s);var r=a("f0c5"),o=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"6c78170e",null,!1,e["a"],void 0);i["default"]=o.exports}}]);