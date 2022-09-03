<template>
  <header>
    <nav>
      <!-- 左侧网站导航 -->
      <ul class="site_nav">
          <li v-for="t in headerNav" :key="t.id">
            <a href="javascript:;" @click="resetHref(t)">{{t.title}}</a>
            <span></span>
          </li>
      </ul>
      <!-- 右侧 -->
      <aside>
        <ul>
          <li><a href="javascript:;">登录</a></li>
          <li><span></span></li>
          <li><a href="javascript:;">注册</a></li>
          <li><span></span></li>
          <li><a href="javascript:;">消息通知</a></li>
          <li class="shoping_car">
            <!-- 购物车图标 -->
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            <font>购物车<font style="margin-left: 5px">(0)</font></font>
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
      headerNav: [],
    };
  },
  methods: {
    // 获取头部导航栏信息
    async getHeaderNavAPI() {
      let { data } = await getHeaderNavAPI();
      this.headerNav = data;
    },
    // 导航栏a标签点击事件
    resetHref({target}){
      if(target){
        window.open(target)
      }else{
        console.log('yo')
      }
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
    .site_nav{
      li{
        &:last-of-type{
          span{
            border-color:transparent;
          }
        }
      }
    }
    ul {
      display: flex;
      height: 100%;
      line-height: 40px;
      li{
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
        &:hover {
          background-color: white;
          color: #ff6700;
        }
        i {
          font-size: 18px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>