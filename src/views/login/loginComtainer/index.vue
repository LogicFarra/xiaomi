<template>
  <div class="login_box">
    <!-- 头部 -->
    <div class="header">
      <font class="cur">登录</font>
      <font @click="registerClick">注册</font>
      <div class="bottom_line"></div>
    </div>
    <!-- 登录信息 -->
    <div class="info">
      <input type="text" placeholder="邮箱/手机号码/小米ID"/>
      <br />
      <input type="password" placeholder="密码" />
    </div>
    <!-- 勾选权限 -->
    <div class="message">
      <input type="checkbox" name="" id="" />
      <p>
        已阅读并同意小米账号 <a href="javascript:;">用户协议</a> 和 <a
          href="javascript:;"
        >
          隐私政策
        </a>
      </p>
    </div>
    <!-- 登录按钮 -->
    <button>登录</button>
    <!-- 忘记密码 -->
    <p class="forget">
      <a href="javascript:;">忘记密码?</a>
      <a href="javascript:;">手机号登录</a>
    </p>
    <p class="other">其他方式登录</p>
    <ul class="other_login">
      <li><i class="fa fa-apple" aria-hidden="true"></i></li>
      <li><i class="fa fa-weixin" aria-hidden="true"></i></li>
      <li><i class="fa fa-qq" aria-hidden="true"></i></li>
      <li><i class="fa fa-weibo" aria-hidden="true"></i></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "loginBox",
  methods: {
    registerClick() {
      this.$router.push("/login/register");
    },
  },
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
      left: 0;
    }
  }
  .info {
    margin-top: 30px;
    input {
      padding: 20px;
      background-color: #333;
      border: none;
      outline: none;
      margin-bottom: 20px;
      width: 360px;
      font-size: 18px;
      border-radius: 3px;
      color: white;
      border:1px solid transparent;
      &:focus{
        border:1px solid #ff6700;
        outline: 1px solid #ff7d27;
      }
    }
  }
  .message{
    display: flex;
    input{
      margin-right:10px;
      width:20px;
    }
    p{
      font-size:14px;
      color:#333;
      a{
        color:#838383;
      }
    }
  }
  button{
    width:360px;
    height:60px;
    margin:20px 0 10px;
    border-radius: 5px;
    background-color: #ff6600a8;
    border: none;
    font-size:18px;
    color:rgba(255, 255, 255, 0.525);
    cursor: pointer;
    &:hover{
      background-color: #ff944d;
    }
  }
  .forget{
    display: flex;
    justify-content: space-between;
    margin-top:10px;
    a{
      color:#ff6700;
    }
  }
  .other{
    color:#838383;
    text-align: center;
    margin-top:10px;
  }
  .other_login{
    display: flex;
    margin-top:20px;
    justify-content: center;
    li{
      i{
        font-size:35px;
        color: white;
        margin:0 15px;
        cursor: pointer;
      }
    }
  }
}
</style>