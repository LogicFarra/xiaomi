<template>
  <div class="login_box">
    <!-- 头部 -->
    <div class="header">
      <font class="cur">登录</font>
      <font @click="registerClick">注册</font>
      <div class="bottom_line"></div>
    </div>
    <main>
      <div class="container">
        <!-- 登录信息 -->
        <div class="info">
          <input
            v-model="userInfo.account"
            type="text"
            placeholder="邮箱/手机号码/小米ID"
            @blur="accountCheck"
            maxlength="10"
          />
          <transition>
            <p class="notis" v-show="accountNotis">
              * 账号应为0-10位的英文或数字
            </p>
          </transition>
          <br />
          <input
            v-model="userInfo.password"
            type="password"
            placeholder="密码"
            maxlength="6"
            @blur="passCheck"
          />
          <transition>
            <p class="notis" v-show="passNotis">* 密码应为0-6位的英文或数字</p>
          </transition>
          <transition>
            <p class="notis" v-show="errorNotis">用户名或密码不正确</p>
          </transition>
        </div>
        <!-- 勾选权限 -->
        <div class="message">
          <input type="checkbox" v-model="agree" />
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
        <button
          @click="btnClick"
          :style="{ background: bgcolor, color: color }"
        >
          登录
        </button>
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
    </main>
      <div class="succeed" v-show="showSucceed">登录成功</div>
  </div>
</template>

<script>
import { getAccountInfoAPI } from "@/api";
export default {
  name: "loginBox",
  data() {
    return {
      accountNotis: false,
      passNotis: false,
      agree: false,
      warning: false,
      errorNotis: false,
      showSucceed: false,
      userInfo: {
        account: "",
        password: "",
      },
    };
  },
  methods: {
    registerClick() {
      this.$router.push("/login/register");
    },
    // 账号输入框校验
    accountCheck(e) {
      let a = e.target.value.replace(/[\W]/g, "");
      a === e.target.value
        ? (this.accountNotis = false)
        : (this.accountNotis = true);
    },
    // 密码校验
    passCheck(e) {
      let a = e.target.value.replace(/[\W]/g, "");
      a === e.target.value ? (this.passNotis = false) : (this.passNotis = true);
    },
    // 登录按钮点击事件
    btnClick() {
      if (this.bgcolor === "#ff6700") {
        if (this.agree === false) {
          this.warning = true;
          setTimeout(() => {
            this.warning = false;
          }, 2000);
        } else {
          this.searchInfo(this.userInfo.account);
        }
      } else {
        return false;
      }
    },
    // 查询账户信息
    async searchInfo(name) {
      let { data } = await getAccountInfoAPI(name);
      // 没有数据 或 有数据 密码不对
      if (data.length === 0 || data[0].password !== this.userInfo.password) {
        this.errorNotis = true;
        setTimeout(() => {
          this.errorNotis = false;
        }, 3000);
      }
      // 有数据,密码正确
      else if (data[0].password === this.userInfo.password) {
        this.showSucceed = true
        // 调用vuex设置token并保存
        this.$store.dispatch('setToken')
        setTimeout(()=>{
          sessionStorage.setItem('logeed',true)
          this.showSucceed = false
          this.$router.push('/shop')
        },2000)
      }
    },
  },
  computed: {
    bgcolor() {
      if (this.userInfo.account !== "" && this.userInfo.password !== "") {
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
          left: 60px;
        }
        100% {
          left: 0;
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
          left: -360px;
        }
        100% {
          position: relative;
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
          animation: acc_notis 0.3s;
        }
        .v-leave-active {
          animation: acc_notis 0.3s reverse;
        }
        @keyframes acc_notis {
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
        margin-bottom: 10px;
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
        border: none;
        font-size: 18px;
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
  .succeed {
    padding: 30px 100px;
    background-color: black;
    color: white;
    font-size: 18px;
    border-radius: 5px;
    box-shadow: 0 0 15px rgba(192, 192, 192, 0.242);
    position: absolute;
    top: -50px;
    left: -100px;
    letter-spacing: 5px;
  }
}
</style>