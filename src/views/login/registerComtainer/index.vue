<template>
    <div class="login_box">
      <div class="header">
        <font @click="loginClick">登录</font>
        <font class="cur">注册</font>
        <div class="bottom_line"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "registerBox",
    methods:{
      loginClick(){
        this.$router.push('/login/signin')
      }
    }
  };
  </script>
  
  <style scoped lang="less">
  .login_box {
    width: 360px;
    box-sizing: content-box;
    padding: 40px 45px;
    background-color: #3333338e;
    margin: 0 auto 80px;
    border-radius: 5px;
    .header {
      position: relative;
      font {
        font-size: 20px;
        color: #333;
        margin-right: 20px;
        cursor: pointer;
      }
      .cur {
        color: #bbb;
        font-weight: 600;
      }
      .bottom_line {
        width: 40px;
        height: 3px;
        background-color: #ff6700;
        position: absolute;
        border-radius: 3px;
        top: 32px;
        left: 60px;
      }
    }
  }
  </style>