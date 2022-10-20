<template>
  <header>
    <div class="header_container">
      <div class="left">
        <img src="@/assets/logo-mi2.png" alt="" />
        <h2>{{title}}</h2>
      </div>
      <div class="right">
        <div class="user">
          <span>Logic</span>
          <i class="fa fa-chevron-down" aria-hidden="true"></i>
          <ul>
            <li>个人中心</li>
            <li>评价晒单</li>
            <li>我的喜欢</li>
            <li>小米账户</li>
            <li>退出登录</li>
          </ul>
        </div>
        <div class="line"></div>
        <router-link class="a" to="/shop/user/order">我的订单</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "headerCom2",
  props: ["title"],
};
</script>

<style scoped lang="less">
header {
  background-color: #f5f5f5;
  background-color: rgb(255, 255, 255);
  border-bottom: 2px solid #ff6700;
  height: 100px;
  box-sizing: content-box;
  .header_container {
    width: 1226px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      img {
        width: 48px;
        margin: 26px 50px 0 0;
        float: left;
      }
      h2 {
        display: inline-block;
        font-weight: 500;
        margin-right: 10px;
        line-height: 100px;
        color: #424242;
        float: left;
      }
    }
    .right {
      display: flex;
      align-items: center;
      .user {
        text-align: center;
        line-height: 40px;
        width: 110px;
        height: 100%;
        color: #b0b0b0;
        cursor: pointer;
        position: relative;
        font-size: 14px;
        i {
          margin-left: 10px;
        }
        &:hover {
          background-color: white;
          i,
          span {
            color: #ff6700;
          }
          ul {
            height: 200px;
          }
        }
        ul {
          height: 0;
          position: absolute;
          width: 100%;
          display: block;
          background-color: white;
          z-index: 999;
          overflow: hidden;
          transition: 0.4s;
          li {
            width: 100%;
            height: 40px;
            line-height: 40px;
            background-color: white;
            &:hover {
              background-color: #b1b1b1;
              color: #ff6700;
            }
          }
        }
      }
      .line {
        width: 1px;
        height: 16px;
        background-color: #b0b0b0;
        margin-right: 20px;
      }
      .a {
        font-size: 13px;
        color: #b0b0b0;
        &:hover {
          color: #ff6700;
        }
      }
    }
  }
}
</style>