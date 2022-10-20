"use strict";(self["webpackChunkxiaomi"]=self["webpackChunkxiaomi"]||[]).push([[520],{6970:function(t,i,s){s.d(i,{Z:function(){return h}});var a=function(){var t=this,i=t._self._c;return i("div",{staticClass:"main"},[i("div",{staticClass:"main_container"},[i("h1",[t._v(t._s(t.title))]),i("ul",{style:t.a},t._l(t.allData,(function(s){return i("li",{key:s.index},[i("transition",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.addSuccess&&t.index==s.index,expression:"addSuccess && index == item.index"}],staticClass:"drop"},[t._v(" 成功添加购物车 ")])]),i("img",{attrs:{src:s.img}}),i("p",{staticClass:"product"},[t._v(t._s(s.name))]),i("p",{staticClass:"price"},[t._v(t._s(s.price))]),i("p",{staticClass:"recommend"},[t._v(t._s(s.good)+"人好评")]),i("div",{staticClass:"add",on:{click:function(i){return t.add(s.index,s.name)}}},[t._v("加入购物车")])],1)})),0),i("div",{staticClass:"points"},[i("span",{class:{cur:1===t.curIndex},on:{click:function(i){return t.switchImg("left")}}}),i("span",{class:{cur:2===t.curIndex},on:{click:function(i){return t.switchImg("right")}}})])])])},e=[],n=s(586),o={name:"youLike",data(){return{allData:[],addSuccess:!1,index:0,a:"",curIndex:1}},props:{title:{default:"猜你喜欢"}},methods:{async getinitdata(){const{data:t}=await(0,n.Zj)();this.allData=t.slice(0,10);let i=0;this.allData.forEach((t=>{t.index=i++}))},animation(t){this.index=t,this.addSuccess=!0,setTimeout((()=>{this.addSuccess=!1}),1e3)},async add(t,i){const{data:s}=await(0,n.hJ)(i);let{color:a,version:e,product:o}=s[0],c={color:a[0].color,img:a[0].img,version:e[0].text,price:e[0].price,product:o};await(0,n.s2)(c),this.animation(t)},switchImg(t){if("right"===t){if(2===this.curIndex)return;this.a="transform: translateX(-1245px);",this.curIndex=2}else{if(1===this.curIndex)return;this.a="transform: translateX(0);",this.curIndex=1}}},created(){this.getinitdata()}},c=o,r=s(1001),l=(0,r.Z)(c,a,e,!1,null,"8e434f3a",null),h=l.exports},1961:function(t,i,s){s.r(i),s.d(i,{default:function(){return d}});var a=function(){var t=this,i=t._self._c;return i("div",{staticClass:"cart"},[t._m(0),i("main",[i("div",{staticClass:"main_container"},[i("div",{staticClass:"product_list"},[i("ul",{staticClass:"list_header"},[i("li",{staticClass:"row1"},[i("div",{staticClass:"col1"},[i("input",{attrs:{type:"checkbox"},domProps:{checked:t.all},on:{change:t.allChange}}),i("span",[t._v("全选")])]),i("div",{staticClass:"img"}),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5)]),t._l(t.initData,(function(s){return i("li",{key:s.index,staticClass:"row2 row1"},[i("div",{staticClass:"col1"},[i("input",{attrs:{type:"checkbox"},domProps:{checked:s.chose},on:{change:function(i){return t.itemChange(s.index)}}})]),i("div",{staticClass:"img"},[i("img",{attrs:{src:s.img,alt:"",width:"80px"}})]),i("div",{staticClass:"col2"},[t._v(" "+t._s(s.product)+" "+t._s(s.version)+" "+t._s(s.disposition)+" "+t._s(s.color)+" ")]),i("div",{staticClass:"col3"},[t._v(t._s(s.price)+"元")]),i("div",{staticClass:"col4"},[i("div",{staticClass:"counter"},[i("button",{on:{click:function(i){return t.operat(!0,s.index)}}},[t._v("-")]),i("input",{attrs:{type:"text"},domProps:{value:s.count}}),i("button",{on:{click:function(i){return t.operat(!1,s.index)}}},[t._v("+")])])]),i("div",{staticClass:"col5"},[t._v(t._s(s.price*s.count)+"元")]),i("div",{staticClass:"col6",on:{click:function(i){return t.deleteFn(s)}}},[i("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])])}))],2)]),i("div",{staticClass:"settlement"},[i("ul",[i("li",{staticClass:"continue_shopping",on:{click:t.continueShopping}},[t._v(" 继续购物 ")]),i("li",[t._v("|")]),i("li",[t._v(" 已选择"),i("span",[t._v(t._s(t.productNum))]),t._v("件 ")])]),i("div",{staticClass:"purchase",style:{background:t.bgColor}},[i("span",{style:{color:t.color},on:{click:t.tobuy}},[t._v("去结算")]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.notis,expression:"notis"}]},[t._v("请勾选需要结算的商品")])]),i("span",[t._v("合计:"),i("span",[t._v(t._s(t.totle)+"元")])])])])]),i("YouLike",{attrs:{title:"购买这件商品的人还购买了"}}),i("FooterCom")],1)},e=[function(){var t=this,i=t._self._c;return i("header",[i("div",{staticClass:"header_container"},[i("img",{attrs:{src:s(9067),alt:""}}),i("h2",[t._v("我的购物车")]),i("small",[t._v("温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算")])])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"col2"},[i("span",[t._v("商品名称")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"col3"},[i("span",[t._v("单价")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"col4"},[i("span",[t._v("数量")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"col5"},[i("span",[t._v("小计")])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"col6"},[i("span",[t._v("操作")])])}],n=s(5180),o=s(6970),c=s(586),r={name:"cart",components:{FooterCom:n.Z,YouLike:o.Z},data(){return{initData:[{produce:"",disposition:"",version:"",color:"",price:"",img:"",chose:""}],totle:0,all:!1,bgColor:"#bababa",color:"#838383",notis:!0,dis:!1}},computed:{productNum(){let t=this.initData.filter((t=>!0===t.chose)),i=0;return t.forEach((t=>{i+=t.count})),i}},methods:{async getShopCarData(){const{data:t}=await(0,c.sn)();this.initData=this.filterData(t)},filterData(t){for(let i=0;i<t.length;i++)t[i].count=1;for(let i=0;i<t.length;i++)for(let s=i+1;s<t.length;s++)t[i].product===t[s].product&&t[i].version===t[s].version&&t[i].color===t[s].color&&(t[i].count++,t.splice(s,1),s--);for(let i=0;i<t.length;i++)t[i].index=i,t[i].chose=!1,t[i].price=parseInt(t[i].price);return t},async operat(t,i){let s=this.initData[i],a={};if(s.count>=1){if(t){if(s.count--,s.count>=1){let t=s.chose;await(0,c.rk)(s.id),await this.getShopCarData(),this.initData[i].chose=t}}else s.count++,a={id:Math.random(),product:s.product,disposition:s.disposition,version:s.version,color:s.color,price:s.price,img:s.img},await(0,c.s2)(a);s.chose&&(t?this.totle-=s.price:this.totle+=s.price),0===s.count&&(s.count=1,s.chose&&(this.totle+=s.price))}},itemChange(t){console.log(t);let i=this.initData[t];i.chose=!i.chose;let s=i.count*i.price;if(i.chose?this.totle+=s:this.totle-=s,i.chose){let t=this.initData.filter((t=>!0===t.chose));t.length===this.initData.length&&(this.all=!0)}else this.all=!1},allChange(){this.all=!this.all,!1===this.all?this.initData.map((t=>{t.chose=!1,this.totle=0})):this.initData.map((t=>{!1===t.chose&&(t.chose=!0,this.totle+=t.count*t.price)}))},async deleteFn(t){let{data:i}=await(0,c.xx)(t),s=i.map((t=>t.id));for(let a=0;a<s.length;a++)(0,c.rk)(s[a]);this.getShopCarData()},jumpPage(t){!0===t?this.$router.push("/login/signin"):this.$router.push("/login/register")},continueShopping(){this.$router.push("/")},tobuy(){if(!0===this.dis){let t=this.initData.filter((t=>!0===t.chose));sessionStorage.setItem("products",JSON.stringify(t)),this.$router.push("/shop/checkout")}}},watch:{totle(t){0!==t?(this.bgColor="#ff6700",this.color="white",this.notis=!1,this.dis=!0):(this.bgColor="#bababa",this.color="#838383",this.notis=!0,this.dis=!1)}},created(){this.getShopCarData()}},l=r,h=s(1001),u=(0,h.Z)(l,a,e,!1,null,"7627cd60",null),d=u.exports},9067:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAAAA3NCSVQICAjb4U/gAAABiVBMVEX/////agD/agD/agD/agD/agD/agD/agD/agD/agD/agD/agD/agD/agD/agD//////fz//Pn/+/f/+fX/9/L/9e3/9e//8un/8+v/8OX/69//5tf/5dX/5NP/48//4c7/4M3/4Mn/3sn/3cf/28T/173/1bz/1br/1bf/07X/0rj/0bH/0bT/z7P/zq//zaz/zKn/y6n/yqb/yaf/yKX/xZ3/xJv/w5n/wZf/v5X/vpH/vZH/u4//t4r/tIX/s4P/sX//sH3/rXv/rHb/qHH/p3D/o2n/omf/oWT/n2L/nmD/nl//nV3/nFv/m1j/mlf/llD/kkz/k0j/kk7/kUr/kUb/j0f/jUT/jUP/iz3/iUL/iTn/iDf/hzr/hTT/hTb/gzH/gzj/gC3/gS//gCr/fij/fCj/eyP/eiT/eST/eCH/dxz/diD/dRz/cxX/cxn/cBH/bxn/bxD/bAz/bQn/agD/aQf/aQn/ZgD/ZgT/ZQX/ZQb/YgD/YgP/YAD/XgD/XAD/WgD/UwDc4NsiAAAAg3RSTlMAESIzRFVmd4iZqrvM3e7//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////z6LJ9sAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAXdEVYdENyZWF0aW9uIFRpbWUAMjAyMS4zLjMx1VlJWAAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAdoSURBVHic7Z35e9REGMeb+5xsQbFKBZWCihcC2haoini1eN+3olIVvKpYDRqT1b/cpOnuJpkk+2YyuzPv8/T7W5807fvJvO/MO/fCAi8pqqbrhmnZjuv5PgmCYHes9Afi+57r2JZp6LqmKtz+bV8pmm7kNhNSNrpJGQwhOY2Rsoiz3LAcjwAsnsJDPMcytLkWiaKZjt/b8gqH75jzodAsl/C1fSLiWtpMjVcMZ2bGjyEcY0YFoRguZ7dpUuDOgEGzZ/7tiyI2X1/SvXla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"}}]);
//# sourceMappingURL=520.059a99ca.js.map