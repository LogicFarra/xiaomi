import Vue from 'vue'
import VueRouter from 'vue-router'

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
        name:"succeed"
      }
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
    component:()=>import('@/views/cart')
  }
]

const router = new VueRouter({
  routes
})

export default router