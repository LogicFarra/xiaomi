"use strict";(self["webpackChunkxiaomi"]=self["webpackChunkxiaomi"]||[]).push([[889],{9889:function(t,i,s){s.r(i),s.d(i,{default:function(){return l}});var r=function(){var t=this,i=t._self._c;return i("div",{staticClass:"buy"},[i("nav",{staticClass:"nav_bar"},[i("div",{staticClass:"nav_bar_container pabulic_width"},[i("h2",[t._v(t._s(t.initData.product))]),t._m(0)])]),t.login?i("div",{staticClass:"login_notis"},[i("div",{staticClass:"login_notis_container pabulic_width"},[i("p",[t._v(" 为方便您购买,请提前登录     "),i("a",{attrs:{href:"javascript:;"},on:{click:t.goLogin}},[t._v("立即登录")]),t._v("  "),i("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"},on:{click:function(i){t.login=!1}}})])])]):t._e(),i("div",{staticClass:"product"},[i("div",{staticClass:"product_container pabulic_width"},[i("div",{staticClass:"img_left",on:{mouseenter:function(i){return t.imgHover(!0)},mouseleave:function(i){return t.imgHover(!1)}}},[i("div",{staticClass:"img_box"},[i("transition-group",[i("img",{directives:[{name:"show",rawName:"v-show",value:0===t.showImg,expression:"showImg === 0"}],key:"0",attrs:{src:t.imgs[0].url}}),i("img",{directives:[{name:"show",rawName:"v-show",value:1===t.showImg,expression:"showImg === 1"}],key:"1",attrs:{src:t.imgs[1].url}}),i("img",{directives:[{name:"show",rawName:"v-show",value:2===t.showImg,expression:"showImg === 2"}],key:"2",attrs:{src:t.imgs[2].url}}),i("img",{directives:[{name:"show",rawName:"v-show",value:3===t.showImg,expression:"showImg === 3"}],key:"3",attrs:{src:t.imgs[3].url}}),i("img",{directives:[{name:"show",rawName:"v-show",value:4===t.showImg,expression:"showImg === 4"}],key:"4",attrs:{src:t.imgs[4].url}})])],1),i("div",{staticClass:"switch_btn",staticStyle:{left:"0"},on:{click:function(i){return t.throttling(t.switchImg,1e3,"left")}}},[i("i",{staticClass:"fa fa-chevron-left",attrs:{"aria-hidden":"true"}})]),i("div",{staticClass:"switch_btn",staticStyle:{right:"50px"},on:{click:function(i){return t.throttling(t.switchImg,1e3,"right")}}},[i("i",{staticClass:"fa fa-chevron-right",attrs:{"aria-hidden":"true"}})]),i("div",{staticClass:"switch_squear"},[i("ul",t._l(t.imgs,(function(s){return i("li",{key:s.index,class:[t.showImg===s.index?"cur":""],on:{click:function(i){return t.squearClick(s.index)}}})})),0)])]),i("div",{staticClass:"message_right"},[i("div",{staticClass:"title"},[i("h2",{staticClass:"title_name"},[t._v(t._s(t.initData.product))]),i("p",{staticClass:"title_explain"},[t._v(" "+t._s(t.initData.introduction)+" ")]),i("p",{staticClass:"title_sale"},[t._v("小米自营")]),i("p",{staticClass:"title_price"},[i("font",{staticClass:"cur_price"},[t._v(t._s(t.configs.price))]),i("del",[t._v(t._s(t.configs.oldPrice))])],1)]),i("div",{staticClass:"location"},[i("p",[i("i",{staticClass:"fa fa-map-marker",attrs:{"aria-hidden":"true"}}),i("font",[t._v("  北京  北京市  海淀区  清河街道")]),t._v("    "),i("a",{attrs:{href:"javascript:;"}},[t._v("修改")]),i("br"),i("span",[t._v("    有现货")])],1)]),0!==t.disposition.version?i("div",{staticClass:"version"},[i("p",[t._v("选择版本")]),i("ul",t._l(t.initData.version,(function(s){return i("li",{key:s.text,class:[s.index==t.curClass[0].ver?"cur":""],on:{click:function(i){return t.configClick(s,"ver")}}},[t._v(" "+t._s(s.text)+" ")])})),0)]):t._e(),0!==t.disposition.disposition?i("div",{staticClass:"version"},[i("p",[t._v("选择配置")]),i("ul",t._l(t.initData.disposition,(function(s){return i("li",{key:s.text,class:[s.index==t.curClass[2].col?"cur":""],on:{click:function(i){return t.configClick(s,"dis")}}},[t._v(" "+t._s(s.text)+" ")])})),0)]):t._e(),0!==t.disposition.color?i("div",{staticClass:"color"},[i("p",[t._v("选择颜色")]),i("ul",t._l(t.initData.color,(function(s){return i("li",{key:s.index,class:[s.index==t.curClass[2].col?"cur":""],on:{click:function(i){return t.configClick(s,"col")}}},[t._v(" "+t._s(s.color)+" ")])})),0)]):t._e(),i("div",{staticClass:"all"},[i("p",[i("font",[t._v(t._s(t.configs.product)+" "+t._s(t.configs.version)+" "+t._s(t.configs.disposition)+" "+t._s(t.configs.color))]),i("font",[t._v(t._s(t.configs.price))])],1),i("h2",[t._v("总计: "+t._s(t.configs.price))])]),i("div",{staticClass:"opration"},[i("div",{staticClass:"o1",on:{click:t.addShopCar}},[t._v("加入购物车")]),i("div",{staticClass:"o2"},[t._v("喜欢")])]),i("div",{staticClass:"promise"},[i("ul",[i("li",[i("i",{staticClass:"fa fa-check-square-o",attrs:{"aria-hidden":"true"}}),i("font",[t._v("小米自营")])],1),i("li",[i("i",{staticClass:"fa fa-check-square-o",attrs:{"aria-hidden":"true"}}),i("font",[t._v("小米发货")])],1),i("li",[i("i",{staticClass:"fa fa-check-square-o",attrs:{"aria-hidden":"true"}}),i("font",[t._v("7天无理由退货")])],1),i("li",[i("i",{staticClass:"fa fa-check-square-o",attrs:{"aria-hidden":"true"}}),i("font",[t._v("运费说明")])],1),i("li",[i("i",{staticClass:"fa fa-check-square-o",attrs:{"aria-hidden":"true"}}),i("font",[t._v("企业信息")])],1),i("li",[i("i",{staticClass:"fa fa-check-square-o",attrs:{"aria-hidden":"true"}}),i("font",[t._v("7天价格保护")])],1)])])])])]),t._m(1)])},e=[function(){var t=this,i=t._self._c;return i("ul",[i("li",[i("a",{attrs:{href:"javascript:;"}},[t._v("参数页")])]),i("li",[i("a",{attrs:{href:"javascript:;"}},[t._v("F码通道")])]),i("li",[i("a",{attrs:{href:"javascript:;"}},[t._v("咨询客服")])]),i("li",[i("a",{attrs:{href:"javascript:;"}},[t._v("用户评价")])])])},function(){var t=this,i=t._self._c;return i("div",{staticClass:"footer"},[i("div",{staticClass:"footer_container"},[i("h2",[t._v("价格说明")]),i("img",{attrs:{src:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43e2954feb6d1b108438481f1d5b0bd3.png",alt:"",width:"1226px"}})])])}],n=s(586),a={name:"buy",data(){return{login:!0,showImg:0,timer:null,initData:[],disposition:{},imgs:[{index:0,url:""},{index:1,url:""},{index:2,url:""},{index:3,url:""},{index:4,url:""}],curClass:[{ver:0},{dis:0},{col:0}],configs:{product:"",version:"",disposition:"",color:"",price:"",img:"",oldPrice:""}}},computed:{product(){return this.$route.query.product}},methods:{starTimer(){this.timer=setInterval((()=>{this.showImg++}),5e3)},throttling(t,i,s){!0!==t.timer&&(t(s),t.timer=!0,setTimeout((()=>{t.timer=null}),i))},switchImg(t){"left"===t?this.showImg--:this.showImg++},imgHover(t){t?clearInterval(this.timer):this.starTimer()},squearClick(t){this.showImg=t},async getInitData(){const{data:t}=await(0,n.hJ)(this.product);this.initData=t[0],this.disposition={version:this.initData.version.length,disposition:this.initData.disposition.length,color:this.initData.color.length};for(let i=0;i<5;i++)this.imgs[i]={index:i,url:this.initData.img[i]};this.configs={product:this.initData.product,version:0!==this.initData.version.length?this.initData.version[0].text:"",disposition:0!==this.initData.disposition.length?this.initData.disposition[0].text:"",color:0!==this.initData.color.length?this.initData.color[0].color:"",price:0!==this.initData.version.length?this.initData.version[0].price:this.initData.disposition[0].price,oldPrice:0!==this.initData.version.length?this.initData.version[0].oldPrice:this.initData.disposition[0].oldPrice,img:this.initData.color[0].img}},configClick(t,i){switch(i){case"ver":this.curClass[0].ver=t.index,this.configs.version=t.text,this.configs.price=t.price,this.configs.oldPrice=t.oldPrice;break;case"dis":this.curClass[1].dis=t.index,this.configs.disposition=t.text,this.configs.price=t.price,this.configs.oldPrice=t.oldPrice;break;case"col":this.curClass[2].col=t.index,this.configs.color=t.color,this.configs.img=t.img,this.configs.oldPrice=t.oldPrice;break}},goLogin(){this.$router.push("/login/signin")},async addShopCar(){let t=Math.random();this.configs.id=t,await(0,n.s2)(this.configs),sessionStorage.setItem("curitem",JSON.stringify(this.configs)),this.$router.push({name:"succeed",params:{data:this.configs}})}},watch:{showImg(t){t>this.imgs.length-1?this.showImg=0:t<0&&(this.showImg=this.imgs.length-1)},product(t){this.getInitData()}},created(){this.getInitData();let t=this.$store.state.token;t&&(this.login=!1)},mounted(){document.documentElement.scrollTop=0,this.starTimer()}},o=a,c=s(1001),u=(0,c.Z)(o,r,e,!1,null,"9a7f0ac4",null),l=u.exports},586:function(t,i,s){s.d(i,{os:function(){return X},CC:function(){return H},s2:function(){return J},Ke:function(){return R},rk:function(){return $},WS:function(){return F},DX:function(){return E},Dx:function(){return I},pf:function(){return P},cV:function(){return m},W3:function(){return x},pG:function(){return g},HD:function(){return N},q$:function(){return S},Ru:function(){return T},yI:function(){return c},ys:function(){return C},_k:function(){return w},Zj:function(){return G},T8:function(){return W},k9:function(){return _},SH:function(){return h},hJ:function(){return j},Ee:function(){return l},Xs:function(){return D},eT:function(){return d},UE:function(){return y},sn:function(){return L},CN:function(){return u},hd:function(){return k},hj:function(){return q},fS:function(){return p},Z7:function(){return b},Sm:function(){return f},Nd:function(){return v},S6:function(){return U},xx:function(){return O},iD:function(){return Z}});var r=s(7467),e=s.n(r);const n="http://localhost:3000",a=e().create({baseURL:n});var o=a;const c=()=>o.request({url:"/header_nav"}),u=()=>o.request({url:"/shuffling_figure"}),l=()=>o.request({url:"/product_nav"}),h=()=>o.request({url:"/product_aside_nav"}),d=()=>o.request({url:"/search_keywords"}),f=()=>o.request({url:"/web_channel"}),v=()=>o.request({url:"/web_channel_publicity_imgs"}),g=()=>o.request({url:"/domestic_appliance"}),_=()=>o.request({url:"/mobile_phone"}),p=()=>o.request({url:"/technology_wear"}),m=()=>o.request({url:"/computer_ipad"}),C=()=>o.request({url:"/home_appliances"}),w=()=>o.request({url:"/kitchen_appliances"}),q=()=>o.request({url:"/technology_home"}),k=()=>o.request({url:"/sport"}),x=()=>o.request({url:"/daily_necessities"}),D=()=>o.request({url:"/public_imgs"}),b=()=>o.request({url:"/video_cover"}),I=()=>o.request({url:"/after_sale"}),y=()=>o.request({url:"/service"}),P=()=>o.request({url:"/call_us"}),S=()=>o.request({url:"/footer_nav"}),T=()=>o.request({url:"/footer_sites"}),N=()=>o.request({url:"/footer_gifs"}),j=t=>o.request({url:"/all_products?product="+t}),E=t=>o.request({url:"/user_database",params:{account:t}}),H=({id:t,account:i,password:s})=>o.request({method:"POST",url:"/user_database",data:{id:t,account:i,password:s}}),L=()=>o.request({url:"shop_car"}),$=t=>o.request({method:"DELETE",url:"shop_car/"+t}),O=({product:t,disposition:i,version:s,color:r})=>o.request({url:"shop_car",params:{product:t,disposition:i,version:s,color:r}}),J=t=>o.request({url:"shop_car",method:"POST",data:t}),U=t=>o.request({url:"search_database?type="+t}),Z=()=>o.request({url:"userNav"}),R=()=>o.request({url:"changeNewImg"}),W=()=>o.request({url:"citys"}),X=t=>o.request({url:"citys",method:"POST",data:t}),F=(t,i)=>o.request({url:"citys/"+t,method:"PUT",data:i}),G=()=>o.request({url:"youLike"})}}]);
//# sourceMappingURL=889.79bb228e.js.map