"use strict";(self["webpackChunkxiaomi"]=self["webpackChunkxiaomi"]||[]).push([[603],{7939:function(t,e,n){n.d(e,{Z:function(){return o}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main"},[e("header",[e("h1",[t._v(t._s(t.title))])]),e("main",[e("ul",t._l(t.nav,(function(n){return e("li",{key:n.title,class:{cur:n.index==t.curIndex},on:{click:function(e){return t.changeNav(n.index)}}},[t._v(" "+t._s(n.title)+" ")])})),0),t._t("search")],2)])},i=[],a={name:"userItem",props:{title:{type:String,required:!0},nav:{type:Array,default:()=>[]},index:{default:()=>1}},data(){return{curIndex:this.index||1}},methods:{changeNav(t){this.curIndex=t,this.$emit("update:index",t),this.$emit("sendIndex",t)}}},r=a,u=n(1001),l=(0,u.Z)(r,s,i,!1,null,"7b60edc0",null),o=l.exports},7051:function(t,e,n){n.d(e,{Z:function(){return o}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main"},[e("h3",[t._v(t._s(t.message))]),e("h3",[t._v(t._s(t.message2))])])},i=[],a={name:"noneMessage",props:{message:{type:String,required:!0},message2:{type:String}}},r=a,u=n(1001),l=(0,u.Z)(r,s,i,!1,null,"1e3efdb8",null),o=l.exports},9603:function(t,e,n){n.r(e),n.d(e,{default:function(){return c}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main"},[e("UserItem",{attrs:{title:t.title,nav:t.nav,index:t.index},on:{"update:index":function(e){t.index=e}}}),1==t.index||2==t.index||3==t.index?e("div",{staticClass:"container_box"},[e("UserNoneMsg",{attrs:{message:t.noMsg[0],message2:t.noMsg[1]}}),e("div",{staticClass:"as"},t._l(t.a,(function(n){return e("a",{key:n.path,attrs:{href:n.path}},[t._v(t._s(n.text)+" ")])})),0)],1):e("div",{staticClass:"container_box"},[e("div",{staticClass:"input_button"},[e("input",{attrs:{type:"text",placeholder:t.placeholder}}),e("button",[t._v(t._s(t.buttonText))])])])],1)},i=[],a=n(7939),r=n(7051),u={name:"cenCoupons",components:{UserItem:a.Z,UserNoneMsg:r.Z},data(){return{nav:[{title:"未使用",index:1},{title:"已使用",index:2},{title:"已失效",index:3},{title:"兑换优惠券",index:4}],index:1,title:"优惠券",noMsg:["未找到相应优惠券","参加小米社区活动，微博、微信活动即有机会赢优惠券哦~"],a:[{path:"https://www.xiaomi.cn/",text:"小米社区"},{path:"https://weibo.com/sorry?usernotexists",text:"官方微博"}],placeholder:"请输入优惠券兑换码",buttonText:"确认兑换"}}},l=u,o=n(1001),d=(0,o.Z)(l,s,i,!1,null,"1f33ab39",null),c=d.exports}}]);
//# sourceMappingURL=603.b3366598.js.map