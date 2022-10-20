<template>
  <div class="login_box">
    <div class="header">
      <font @click="loginClick">登录</font>
      <font class="cur">注册</font>
      <div class="bottom_line"></div>
    </div>
    <main>
      <div class="container">
        <!-- 登录信息 -->
        <div class="info">
          <input
            type="text"
            placeholder="账户"
            @blur="check('account')"
            maxlength="10"
            v-model="user.account"
          />
          <transition>
            <p class="notis" v-show="notis.acc">*只能为0-10位的英文或数字</p>
          </transition>
          <br />
          <input
            type="password"
            placeholder="密码"
            @blur="check('password')"
            maxlength="6"
            v-model="user.password"
          />
          <transition>
            <p class="notis" v-show="notis.pass">*只能为0-6位的英文或数字</p>
          </transition>
          <br />
          <input
            type="password"
            placeholder="确认密码"
            @blur="check('repeat')"
            maxlength="6"
            v-model="user.repeat"
          />
          <transition>
            <p class="notis" v-show="notis.rep">*两次密码输入不一致</p>
          </transition>
        </div>
        <!-- 勾选权限 -->
        <div class="message">
          <input type="checkbox" v-model="agree"/>
          <p>
            已阅读并同意小米账号 <a href="javascript:;">用户协议</a> 和
            <a href="javascript:;"> 隐私政策 </a>
          </p>
          <div class="warning" v-show="warning">
            <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
            <span>请您同意用户条款</span>
          </div>
        </div>
        <!-- 登录按钮 -->
        <button :style="{ background: bgcolor, color: color }" @click="registerClick">注册</button>
        <p class="other">其他方式登录</p>
        <ul class="other_login">
          <li><i class="fa fa-apple" aria-hidden="true"></i></li>
          <li><i class="fa fa-weixin" aria-hidden="true"></i></li>
          <li><i class="fa fa-qq" aria-hidden="true"></i></li>
          <li><i class="fa fa-weibo" aria-hidden="true"></i></li>
        </ul>
      </div>
    </main>
    <div class="s" v-show="showS">
      注册成功
      <p>
        <button @click="goLogin">前往登录</button>
        <button @click="showS = false">取消</button>
      </p>
    </div>
    <div class="s a" v-show="error">
      服务器维护中,暂时无法注册
    </div>
  </div>
</template>
  
  <script>
import {addPersonAPI} from '@/api'
export default {
  name: "registerBox",
  data() {
    return {
      // 注册信息
      user: {
        account: "",
        password: "",
        repeat: "",
      },
      // 提示信息
      notis: {
        acc: false,
        pass: false,
        rep: false,
      },
      agree:false,
      warning:false,
      showS:false,
      error:false
    };
  },
  computed: {
    bgcolor() {
      if (this.user.account !== "" && this.user.password !== "" && this.user.repeat !== '') {
        return "#ff6700";
      } else {
        return "#ff6600a8";
      }
    },
    color() {
      if (this.bgcolor === "#ff6700") {
        return "white";
      } else {
        return "rgba(255, 255, 255, 0.525)";
      }
    },
  },
  methods: {
    // 跳转至登录界面
    loginClick() {
      this.$router.push("/login/signin");
    },
    // 校验输入框
    check(a) {
      switch (a) {
        case "account":
          let good1 = this.user.account.replace(/[\W]/g, "");
          good1 === this.user.account
            ? (this.notis.acc = false)
            : (this.notis.acc = true);
          break;
        case "password":
          let good2 = this.user.password.replace(/[\W]/g, "");
          good2 === this.user.password
            ? (this.notis.pass = false)
            : (this.notis.pass = true);
          break;
        case "repeat":
          this.user.password === this.user.repeat
            ? (this.notis.rep = false)
            : (this.notis.rep = true);
      }
    },
    // 注册按钮点击事件
    registerClick(){
      if(this.bgcolor === "#ff6700"){
        if(this.agree === false){
          this.warning = true
          setTimeout(()=>{
          this.warning = false
        },3000)
        }else{
          this.error = true
          setTimeout(()=>{
            this.error = false
          },2000)
          // let id = Math.random()
          // let data = {
          //   id:id,
          //   ...this.user
          // }
          // this.addPerson(data)
        }
        
      }else{
        return false
      }
    },
    // 向数据库添加账户
    async addPerson(user){
      const data = await addPersonAPI(user)
      if(data.status > 200){
        this.showS = true

      }
    },
    // 确认登录按钮点击事件
    goLogin(){
      this.$router.push('/login/signin')
    }
  },
};
</script>
  
  <style scoped lang="less">
.login_box {
  position: relative;
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
      animation: show 0.5s forwards;
      @keyframes show {
        0% {
          color: #333;
          font-weight: 400;
        }
        100% {
          color: #bbb;
          font-weight: 600;
        }
      }
    }
    .bottom_line {
      width: 40px;
      height: 3px;
      background-color: #ff6700;
      position: absolute;
      border-radius: 3px;
      top: 32px;
      animation: move 0.5s forwards;
      @keyframes move {
        0% {
          left: 0;
        }
        100% {
          left: 60px;
        }
      }
    }
  }
  main {
    overflow: hidden;
    .container {
      animation: showUp 0.5s;
      @keyframes showUp {
        0% {
          position: relative;
          right: -360px;
        }
        100% {
          position: relative;
          right: 0;
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
          border: 1px solid transparent;
          &:focus {
            border: 1px solid #ff6700;
            outline: 1px solid #ff7d27;
          }
        }
        .notis {
          color: red;
        }
        .v-enter-active {
          animation: warning 0.3s;
        }
        .v-leave-active {
          animation: warning 0.3s reverse;
        }
        @keyframes warning {
          0% {
            height: 0;
          }
          100% {
            height: 20.67px;
          }
        }
      }
      .message {
        position: relative;
        display: flex;
        margin-top: 10px;
        input {
          margin-right: 10px;
          width: 20px;
        }
        p {
          font-size: 14px;
          color: #333;
          a {
            color: #838383;
          }
        }
        .warning {
          position: absolute;
          left: 50%;
          top: -20px;
          transform: translate(-50%);
          background-color: black;
          i {
            color: #ff6700;
            margin-right: 10px;
          }
          color: white;
          padding: 8px 13px;
          border-radius: 5px;
          box-shadow: 0 0 15px rgba(192, 192, 192, 0.24);
        }
      }
      button {
        width: 360px;
        height: 60px;
        margin: 20px 0 10px;
        border-radius: 5px;
        background-color: #ff6600a8;
        border: none;
        font-size: 18px;
        color: rgba(255, 255, 255, 0.525);
        cursor: pointer;
        &:hover {
          background-color: #ff944d;
        }
      }
      .forget {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        a {
          color: #ff6700;
        }
      }
      .other {
        color: #838383;
        text-align: center;
        margin-top: 10px;
      }
      .other_login {
        display: flex;
        margin-top: 20px;
        justify-content: center;
        li {
          i {
            font-size: 35px;
            color: white;
            margin: 0 15px;
            cursor: pointer;
          }
        }
      }
    }
  }
  .s{
    padding: 30px 10px 10px 100px;
    background-color: black;
    color: white;
    font-size: 18px;
    border-radius: 5px;
    box-shadow: 0 0 15px rgba(192, 192, 192, 0.242);
    position: absolute;
    top: -50px;
    left: -100px;
    letter-spacing: 5px;
    p{
      margin-top:20px;
      margin-left: 50px;
      button{
        margin-right:10px;
        padding:10px;
        color: white;
        background-color: #838383;
        border-radius: 5px;
        cursor: pointer;
        &:first-of-type{
          background-color: #ff6700;
        }
      }
    }
  }
  .a{
    padding:30px 50px;
  }
}
</style>