"use strict";(self["webpackChunkxiaomi"]=self["webpackChunkxiaomi"]||[]).push([[285],{7939:function(t,e,s){s.d(e,{Z:function(){return d}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main"},[e("header",[e("h1",[t._v(t._s(t.title))])]),e("main",[e("ul",t._l(t.nav,(function(s){return e("li",{key:s.title,class:{cur:s.index==t.curIndex},on:{click:function(e){return t.changeNav(s.index)}}},[t._v(" "+t._s(s.title)+" ")])})),0),t._t("search")],2)])},n=[],a={name:"userItem",props:{title:{type:String,required:!0},nav:{type:Array,default:()=>[]},index:{default:()=>1}},data(){return{curIndex:this.index||1}},methods:{changeNav(t){this.curIndex=t,this.$emit("update:index",t),this.$emit("sendIndex",t)}}},r=a,c=s(1001),l=(0,c.Z)(r,i,n,!1,null,"7b60edc0",null),d=l.exports},7051:function(t,e,s){s.d(e,{Z:function(){return d}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main"},[e("h3",[t._v(t._s(t.message))]),e("h3",[t._v(t._s(t.message2))])])},n=[],a={name:"noneMessage",props:{message:{type:String,required:!0},message2:{type:String}}},r=a,c=s(1001),l=(0,c.Z)(r,i,n,!1,null,"1e3efdb8",null),d=l.exports},2285:function(t,e,s){s.r(e),s.d(e,{default:function(){return _}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main"},[e("UserItem",{attrs:{title:t.title,nav:t.nav,index:t.index},on:{"update:index":function(e){t.index=e}}}),1==t.index?e("div",{staticClass:"main_container"},[t._m(0),e("div",{staticClass:"message"},t._l(t.messages1,(function(s,i){return e("div",{key:i,staticClass:"message_item"},[e("strong",[t._v(t._s(s.title))]),t._l(s.p,(function(s){return e("p",{key:s},[t._v(t._s(s))])}))],2)})),0)]):2==t.index?e("div",{staticClass:"main_container"},[e("div",{staticClass:"none"},[e("UserNoneMsg",{attrs:{message:"暂无记录"}})],1),t._m(1)]):e("div",{staticClass:"main_container"},[t._m(2)])],1)},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"input_item"},[e("label",{attrs:{for:"pass"}},[t._v("密码:")]),e("input",{attrs:{type:"text",placeholder:"请填写礼品卡密码"}})]),e("div",{staticClass:"input_item"},[e("label",{attrs:{for:"check"}},[t._v("验证码:")]),e("input",{attrs:{type:"text",placeholder:"请输入验证码"}}),e("img",{attrs:{src:"https://captcha.hd.mi.com/captcha?style=chinese&service=order.mi.com&sessionId=0&_0.2214977490171639",alt:""}}),e("span",[t._v("换一张")])]),e("div",{staticClass:"input_item"},[e("button",[t._v("绑定礼品卡")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"message"},[e("div",{staticClass:"message_item"},[e("strong",[t._v("有效期内重复使用，可查询消费记录")]),e("p",[t._v("您可以在礼品卡的有效期内，不限次数重复使用。如果您对余额有疑问，可以在我的礼品卡里查询到当前礼品卡的消费记录。")])]),e("div",{staticClass:"message_item"},[e("strong",[t._v("礼品卡只能绑定一次，不可解绑")]),e("p",[t._v("考虑到礼品卡余额的安全问题，礼品卡只能绑定一次，绑定以后不可解绑。")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"message s_message"},[e("div",{staticClass:"message_item"},[e("strong",[t._v("Q：为什么提示礼品卡未激活或已绑定？")]),e("p",[t._v("为了保证在运输过程中的安全，礼品卡在客户收到以后，需点击“确认收货”以激活，激活以后便可以使用。每个礼品卡密码只能被绑定一次，其他账户将不能再绑定该密码。如果您遇上上述问题，可联系赠予您礼品卡的朋友，是否已确认收货，或者是否已将该卡同时赠予了他人。")])]),e("div",{staticClass:"message_item"},[e("strong",[t._v("Q:为什么我礼品卡里有100元，买50元的东西还需要另外支付10元物流费？")]),e("p",[t._v("如果您的订单不包邮，物流费需通过在线支付的方式支付，礼品卡暂不支持抵扣物流费。")])]),e("div",{staticClass:"message_item"},[e("strong",[t._v("Q：用礼品卡购物，产生退货怎么办？")]),e("p",[t._v("使用礼品卡购物后发生退款的，退款金额将原路返还，系统优先返还礼品卡支付金额，即礼品卡支付的部分金额退还至原有礼品卡，其余部分原路返还，另有规定的除外。")])])])}],a=s(7939),r=s(7051),c={name:"cengifts",components:{UserItem:a.Z,UserNoneMsg:r.Z},data(){return{nav:[{title:"绑定礼品卡",index:1},{title:"我的礼品卡",index:2},{title:"常见问题",index:3}],index:1,title:"我的礼品卡",messages1:[{title:"礼品卡使用前需先绑定，确认已设置安全手机",p:["无论是电子礼品卡还是实物礼品卡，在绑定时只需要输入礼品卡密码，点击确认即可绑定。","礼品卡在使用之前,需要与小米ID绑定,每个礼品卡密码只可绑定一次，绑定后不可解绑，礼品卡内金额无需一次用完，您可以在有效期内不限次数重复使用。","礼品卡在绑定之前，请确认您的小米ID已经设置了安全手机，为保证您的资金安全，在使用礼品卡消费时，需要向您的安全手机发送验证码，验证通过以后才可以使用。"]},{title:"下单时选择礼品卡即可抵扣，暂不支持抵扣物流费",p:["您可以像以前一样在小米网选购商品，在订单结算时，填写完地址、电话等信息后，在页面的下方点击使用礼品卡，勾选您希望用来支付的礼品卡，提交订单并支付余款就可完成交易。","在小米网购买商品，满69元免运费（大家电及其他特殊说明情况除外），礼品卡暂不支持抵扣物流费，如果订单未满69元，需要支付10元运费，并通过在线支付的方式支付。"]},{title:"礼品卡的使用范围是什么？",p:[" 礼品卡可用于购买小米商城自营实物商品（有品商品除外），暂不支持抵扣物流费，暂不支持购买小米移动电话卡、保险等虚拟商品/服务、合约机及其他第三方发货的商品。","小米商城（商城配送）及部分线下小米之家门店可以在购买上述商品时选择礼品卡支付使用，暂不支持门店闪送和到店自取。","*注意：具体是否可用请以订单支付页面显示或门店店员告知为准。"]}]}},mounted(){this.$refs.item.$on("sendIndex",(t=>this.index=t))},beforeDestroy(){this.$refs.item.$off("sendIndex")}},l=c,d=s(1001),u=(0,d.Z)(l,i,n,!1,null,"cb94ce28",null),_=u.exports}}]);
//# sourceMappingURL=285.fee67370.js.map