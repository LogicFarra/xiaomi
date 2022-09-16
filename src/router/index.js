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
    path: "/",
    component: () => import('@/views/layout'),
    redirect: "/shop",
    children: [
      {
        path: 'shop',
        component: () => import('@/views/shop')
      },
      {
        path: "shop/buy",
        component: () => import('@/views/buy')
      },
      {
        path:"shop/succeed",
        component:() => import('@/views/buy/succeed'),
        name:"succeed"
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login'),
    redirect:'/login/signin',
    children:[
      {
        path:'/login/signin',
        name:'signin',
        component:()=>import('@/views/login/loginComtainer')
      },
      {
        path:'/login/register',
        name:'register',
        component:()=>import('@/views/login/registerComtainer')
      }
    ]
  },
  {
    path:'/cart',
    component:()=>import('@/views/cart')
  }
]

const router = new VueRouter({
  routes
})

export default router