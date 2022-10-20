import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)
// 重写路由push和replace
//#region 
// 重写push和replace
// 先把VueRouter原型中的push方法保持一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

// 重写push | replace
// location:告诉原来的push方法往哪里跳转，传递什么参数
// resolve:成功的回调
// reject:失败的回调
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else { // 不管你点多少次，每次就覆盖之前的，相当于传了一次一模一样的路径
    originPush.call(this, location, () => { }, () => { })
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(this, location, () => { }, () => { })
  }
}
//#endregion

const routes = [
  {
    // 主页
    path: "/",
    component: () => import('@/views/layout'),
    redirect: "/shop",
    children: [
      {
        // 主页商城
        path: 'shop',
        component: () => import('@/views/shop')
      },
      {
        // 商品详情页面
        path: "shop/buy",
        component: () => import('@/views/buy')
      },
      {
        // 添加购物车成功页面
        path:"shop/succeed",
        component:() => import('@/views/buy/succeed'),
        name:"succeed",
        meta:{
          needToken:true
        }
      },
      {
        path:'shop/search',
        component:()=>import('@/views/search')
      },
      {
        path:"shop/user",
        component:()=> import('@/views/user'),
        redirect:"/shop/user/order",
        meta:{
          needToken:true
        },
        children:[
          {
            path:"/shop/user/order",
            name:'order',
            meta:{
              needToken:true
            },
            component:()=>import('@/views/user/order/order.vue'),
            beforeEnter:(to,from,next)=>{
              if(from.path=="/shop/user/myCenter"){
                to.params.index = from.params.index
              }
              next()
            }
          },
          {
            path:"/shop/user/comment",
            name:"comment",
            component:()=>import('@/views/user/order/comment.vue'),
            meta:{
              needToken:true
            }
          },
          {
            path:"/shop/user/calls",
            component:()=>import('@/views/user/order/calls.vue'),
            meta:{
              needToken:true
            }
          },
          {
            path:"/shop/user/catch",
            component:()=>import('@/views/user/userCenter/catch.vue'),
            meta:{
              needToken:true
            }
          },
          {
            path:"/shop/user/coupons",
            component:()=>import('@/views/user/userCenter/coupons.vue'),
            meta:{
              needToken:true
            }
          },
          {
            path:"/shop/user/gifts",
            component:()=>import('@/views/user/userCenter/gifts.vue'),
            meta:{
              needToken:true
            }
          },
          {
            path:"/shop/user/like",
            name:"like",
            component:()=>import('@/views/user/userCenter/like.vue'),
            meta:{
              needToken:true
            }
          },
          {
            path:"/shop/user/location",
            component:()=>import('@/views/user/userCenter/location.vue'),
            meta:{
              needToken:true
            }
          },
          {
            path:"/shop/user/message",
            component:()=>import('@/views/user/userCenter/message.vue'),
            meta:{
              needToken:true
            }
          },
          {
            path:"/shop/user/myCenter",
            component:()=>import('@/views/user/userCenter/myCenter.vue'),
            meta:{
              needToken:true
            }
          },
          {
            path:"/shop/user/purchase",
            component:()=>import('@/views/user/userCenter/purchase.vue'),
            meta:{
              needToken:true
            }
          },
          {
            path:"/shop/user/red",
            component:()=>import('@/views/user/userCenter/red.vue'),
            meta:{
              needToken:true
            }
          },
          {
            path:"/shop/user/tickts",
            component:()=>import('@/views/user/userCenter/tickts.vue'),
            meta:{
              needToken:true
            }
          },
          {
            path:"/shop/user/servers",
            component:()=>import('@/views/user/afterSale/servers.vue'),
            meta:{
              needToken:true
            }
          },
          {
            path:"/shop/user/application",
            component:()=>import('@/views/user/afterSale/application.vue'),
            meta:{
              needToken:true
            }
          },{
            path:"/shop/user/delivery",
            component:()=>import('@/views/user/afterSale/delivery.vue'),
            meta:{
              needToken:true
            }
          },{
            path:"/shop/user/infomation",
            component:()=>import('@/views/user/account/infomation.vue'),
            meta:{
              needToken:true
            }
          },{
            path:"/shop/user/pass",
            component:()=>import('@/views/user/account/pass.vue'),
            meta:{
              needToken:true
            }
          },{
            path:"/shop/user/logout",
            component:()=>import('@/views/user/account/logout.vue'),
            meta:{
              needToken:true
            }
          }
        ]
      },
      {
        path:"/shop/change",
        component:()=>import('@/views/user/order/change.vue')
      },
    ]
  },
  {
    // 登录和注册
    path: '/login',
    component: () => import('@/views/login'),
    redirect:'/login/signin',
    children:[
      {
        // 登录页面
        path:'/login/signin',
        name:'signin',
        component:()=>import('@/views/login/loginComtainer')
      },
      {
        // 注册页面
        path:'/login/register',
        name:'register',
        component:()=>import('@/views/login/registerComtainer')
      }
    ]
  },
  // 购物车页面
  {
    path:'/cart',
    component:()=>import('@/views/cart'),
    meta:{
      needToken:true
    }
  },
  // 提交购买页面
  {
    path:"/shop/checkout",
    name:"checkout",
    component:()=>import('@/views/checkout'),
    meta:{
      needToken:true
    }
  },
  // 支付页面
  {
    path:"/shop/confirm",
    name:"confirm",
    component:()=>import('@/views/confirm'),
    meta:{
      needToken:true
    }
  }
]
const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next)=>{
  // 排查需要登录才能进入的页面
  if(to.meta.needToken === true){
    let token = store.state.token
    token ? next() : next('/login')
  }else{
    next()
  }
})
export default router
// to.path == '/shop/confirm' || from.path == '/shop/checkout' ||
//   from.path == '/cart' || from.path == 'shop/succeed' || from.path == 'shop/user'