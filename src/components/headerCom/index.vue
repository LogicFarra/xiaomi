<template>
  <header>
    <nav>
      <!-- 左侧网站导航 -->
      <ul class="site_nav">
        <li v-for="t in headerNav" :key="t.id" :class="t.class">
          <a href="javascript:;" @click="resetHref(t)">{{ t.title }}</a>
          <span></span>
        </li>
      </ul>
      <!-- 右侧 -->
      <aside>
        <ul>
          <li><a href="javascript:;" @click="loginClick">登录</a></li>
          <li><span></span></li>
          <li><a href="javascript:;">注册</a></li>
          <li><span></span></li>
          <li><a href="javascript:;">消息通知</a></li>
          <li class="shoping_car"
          :style="{'background-color':bgColor}"
          @mouseenter= "throttling(showDropdown,300,true)"
          @mouseleave="throttling(showDropdown,300,false)">
            <!-- 购物车图标 -->
            <i class="fa fa-shopping-cart" aria-hidden="true" :style="{color:fontColor}"></i>
            <font :style="{color:fontColor}">购物车<font style="margin-left: 5px">(0)</font></font>
            <!-- the dropdown menu of the shopping car -->
            <transition name="shopDrop">
              <div class="shopcarDropdown" v-show="shoppingCarDrop">
                <p>购物车中还没有商品,赶紧选购吧!</p>
              </div>
            </transition>
          </li>
        </ul>
      </aside>
    </nav>
  </header>
</template>

<script>
import { getHeaderNavAPI } from "@/api";
export default {
  name: "HeaderCom",
  data() {
    return {
      headerNav: [],          //导航栏的信息
      shoppingCarDrop: false, //购物车下拉框的显示隐藏
      leave : null,           //判断鼠标位置
      bgColor:'',             //购物车的背景颜色
      fontColor:''            //购物车文字颜色
    };
  },
  methods: {
    // 获取头部导航栏信息
    async getHeaderNavAPI() {
      let { data } = await getHeaderNavAPI();
      this.headerNav = data;
    },
    // 导航栏a标签点击事件
    resetHref({ target }) {
      if (target) {
        window.open(target);
      } else {
        console.log("yo");
      }
    },
    // 购物车模块鼠标覆盖事件的节流函数 
    throttling(fn, time = 1000, status) {
      this.leave = status
        return (function () {
          if (fn.timer) return;
          fn.timer = setTimeout(() => {
            fn()
            fn.timer = null;
          }, time);
        })();
    },
    // 购物车事件回调
    showDropdown() {
      this.shoppingCarDrop = this.leave;
      if(this.shoppingCarDrop === true){
        this.bgColor = 'white'
        this.fontColor = '#ff6700'
      }else{
        setTimeout(()=>{
          this.bgColor = '#424242'
          this.fontColor = '#b0b0b0'
        },400)
      }
    },
    // 登录按钮点击事件
    loginClick(){
      this.$router.push('/login')
    }
  },
  created() {
    this.getHeaderNavAPI();
  },
};
</script>

<style scoped lang="less">
header {
  background-color: #333;
  height: 40px;
  font-size: 12px;
  nav {
    width: 1226px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    // 导航栏模块
    .site_nav {
      li {
        &:last-of-type {
          span {
            border-color: transparent;
          }
        }
      }
      .downloadApp{
        position: relative;
        &:hover{
          &::before,&::after{
            display: block;
          }
        }
        &::before{
          content: '小米商城APP';
          background: url(./imgs/download.png);
          background-size:90px;
          background-repeat: no-repeat;
          background-position: 15px 10px;
          position: absolute;
          top:40px;
          left: -43px;
          width: 105px;
          overflow: hidden;
          background-color: white;
          box-shadow: 0 2px 8px rgba(137, 137, 137, 0.804);
          z-index: 10000;
          font-size: 14px;
          padding-top:100px;
          padding-left: 15px;
          display: none;
          cursor: pointer;
        }
        &::after{
          content: '';
          width: 20px;
          height: 20px;
          display: none;
          background-color: rgb(255, 255, 255);
          transform:rotate(45deg);
          position: absolute;
          top:35px;
          left:9px;
          cursor: pointer;
        }
      }
    }
    // ul公共样式
    ul {
      display: flex;
      height: 100%;
      line-height: 40px;
      li {
        display: flex;
        a {
          color: #b0b0b0;
          height: 100%;
          display: block;
          &:hover {
            color: white;
          }
        }
        span {
          width: 1px;
          border-left: 1px solid #424242;
          margin: 12px 7px;
          height: 16px;
        }
      }
      // 购物车模块
      .shoping_car {
        margin-left: 20px;
        cursor: pointer;
        width: 120px;
        height: 100%;
        background-color: #424242;
        text-align: center;
        display: flex;
        justify-content: center;
        color: #b0b0b0;
        align-items: center;
        position: relative;
        i {
          font-size: 18px;
          margin-right: 10px;
        }
        .shopcarDropdown {
          overflow: hidden;
          width: 300px;
          height: 100px;
          position: absolute;
          top: 40px;
          right: 0;
          z-index: 1000;
          background-color: white;
          box-shadow: 0px 5px 5px rgba(128, 128, 128, 0.363);
          p {
            color:black;
            height: 100%;
            line-height: 100px;
          }
        }
      }
    }
  }
  // animate the dropdown of the shopping car module
  .shopDrop-enter-active {
    animation: shopDropdown 0.3s;
  }
  .shopDrop-leave-active {
    animation: shopDropdown 0.3s reverse;
  }
  @keyframes shopDropdown {
    0% {
      height: 0;
    }
    100% {
      height: 100px;
    }
  }
}
</style>