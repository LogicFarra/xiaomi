<template>
  <div class="loginRegister">
    <div class="left"></div>
    <div class="right">
        <header>
            <div class="logo">
                <img src="@/assets/xiaomiLogo.png" alt="" width="40px">
                <font>小米账号</font>
            </div>
            <div class="help">
                <ul>
                    <li><a href="javascript:;">用户协议</a></li>
                    <li><a href="javascript:;">隐私政策</a></li>
                    <li><a href="javascript:;">帮助中心</a></li>
                </ul>
                <div class="cutline"></div>
                <div class="language">
                    <font>中文</font>
                    <i class="fa fa-sort-desc" aria-hidden="true"></i>
                    <div class="english">
                        English
                    </div>
                </div>
            </div>
        </header>
        <main>
            <router-view></router-view>
        </main>
        <footer>
            <p>小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号</p>
        </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginRegister",
};
</script>

<style scoped lang="less">
.loginRegister {
    display: flex;
    background-color: black;
    overflow: hidden;
  .left {
      width: 500px;
      background-color: aquamarine;
      background-image: url('https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/banner.5b1efcd8.jpg');
      background-size: cover;
  }
  .right{
      width:100vw;
      min-width: 500px;
      padding-bottom: 20px;
      header{
          padding: 20px;
          display: flex;  
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;   
          .logo{
              height: 40px;
              display: flex;
              align-items: center;
            font{
              margin-left:10px;
              font-size:24px;
              font-weight: 500;
              color: rgba(255, 255, 255, 0.804);
          }
          }
          .help{
              display: flex;
              align-items: center;
              ul{
                  display: flex;
                  align-items: center;
                  li{
                      padding: 0 10px;
                      a{
                          font-size:14px;
                          color:#838383;
                          transition: 0.4s;
                          &:hover{
                              color:#ff6700;
                          }
                      }
                  }
              }
              .cutline{
                  width:1px;
                  height: 14px;
                  background-color: #838383;
                  margin:3px 10px 0;
              }
              .language{
                  height: 40px;
                  padding-top:12px;
                  position: relative;
                  cursor: pointer;
                  color:#838383;
                  font-size:14px;
                  &:hover{
                      font{
                          color:#ff6700;
                      }
                      i{
                          color:#ff6700;
                          transform: rotate(180deg);
                      }
                      .english{
                          transform: scaleY(1);
                      }
                  }
                  font{
                      margin:0 10px;
                  }
                  i{
                      position: relative;
                      top:-2px;
                      margin-right:10px;
                      transition: 0.2s;
                      transform-origin: 50% 60%;
                  }
                  .english{
                      position: absolute;
                      top:40px;
                      left:-5px;
                      padding: 5px 10px;
                      background-color: black;
                      box-shadow: 0 0 25px -3px rgba(255, 255, 255, 0.509);
                      transform: scaleY(0);
                      transition: 0.3s;
                      &:hover{
                          color: white;
                      }
                  }
              }
          }
      }
      main{
          padding-top:20px;
      }
      footer{
          padding:0 20px;
          height: 20px;
          p{
              color:#838383;
              text-align: center;
              font-size:12px;
          }
      }
  }
}
</style>