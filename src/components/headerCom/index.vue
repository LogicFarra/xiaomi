<template>
  <div class="main">
    <header>
      <nav>
        <!-- 左侧网站导航 -->
        <ul class="site_nav">
          <li v-for="t in headerNav" :key="t.id" :class="t.class">
            <a href="javascript:;" @click="resetHref(t)">{{ t.title }}</a>
            <span></span>
          </li>
          <li @click="showDrop = true">
            <a href="javascript:;">Select Location</a>
          </li>
        </ul>
        <!-- 右侧 -->
        <div class="user" v-if="token">
          <span>Logic</span>
          <i class="fa fa-chevron-down" aria-hidden="true"></i>
          <ul @click="jump">
            <li v-for="item in userData" :key="item.text" :path="item.path" :href="item.href">{{item.text}}</li>
          </ul>
        </div>
        <aside>
          <ul>
            <li><a href="javascript:;" @click="loginClick" v-if="!token">登录</a></li>
            <li v-if="!token"><span></span></li>
            <li><a href="javascript:;" @click="registerClick" v-if="!token">注册</a></li>
            <li v-if="!token"><span></span></li>
            <li><a href="javascript:;" @click="$router.push('/shop/user/message')">消息通知</a></li>
            <li
              class="shoping_car"
              @click="goCart"
              @mouseenter="shopcarHover"
            >
              <!-- 购物车图标 -->
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              <font
                >购物车<font style="margin-left: 5px"
                  >({{ totleProduct }})</font
                ></font
              >
              <!-- the dropdown menu of the shopping car -->
              <div class="shopcarDropdown">
                <p v-show="showwitch === 'notis'" style="color: black">
                  购物车中还没有商品,赶紧选购吧!
                </p>
                <p
                  v-show="showwitch === 'lists'"
                  class="productItem"
                  v-for="item in shopcarData"
                  :key="item.id"
                >
                  <img :src="item.img" />
                  <font class="config">
                    <font>{{ item.product }}</font>
                    <br />
                    <font
                      >{{ item.version }} {{ item.disposition }}
                      {{ item.color }}</font
                    >
                  </font>
                  <font class="price">{{ item.price }}×{{ item.count }}</font>
                  <i
                    class="fa fa-times"
                    aria-hidden="true"
                    @click.stop="deleteProduct(item)"
                  ></i>
                </p>
                <div class="summary" v-show="showwitch === 'lists'">
                  <div>
                    <p class="totle">共{{ totleProduct }}件商品</p>
                    <p class="price">{{ totleMoney }}<small>元</small></p>
                  </div>
                  <p class="buy">去购物车结算</p>
                </div>
              </div>
            </li>
          </ul>
        </aside>
      </nav>
    </header>
    <transition>
      <div class="dropdown" v-if="showDrop">
      <div class="dropdownContainer">
        <div class="header">
          Select location or language
          <i class="fa fa-times" aria-hidden="true" @click="showDrop = false"></i>
        </div>
        <div class="container">
          <h1>Welcome to Mi.com</h1>
          <p>Please select location or language</p>
          <ul>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
            <li>Global Home</li>
          </ul>
        </div>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
import {
  getHeaderNavAPI,
  getShopCarAPI,
  deleteShopCarAPI,
  searchShopCarAPI,
} from "@/api";
export default {
  name: "HeaderCom",
  data() {
    return {
      headerNav: [], //导航栏的信息
      shoppingCarDrop: false, //购物车下拉框的显示隐藏
      leave: null, //判断鼠标位置
      // 购物车数据
      shopcarData: [
        {
          product: "",
          version: "",
          disposition: "",
          color: "",
          price: "",
          img: "",
          id: 0,
          count: 0,
        },
      ],
      showwitch: "notis",
      showDrop:false,
      userData:[
        {
          text:"个人中心",
          path:"/shop/user/myCenter"
        },{
          text:"评价晒单",
          path:"/shop/user/comment",
        },{
          text:"我的喜欢",
          path:"/shop/user/like"
        },{
          text:"小米账户",
          href:"https://account.xiaomi.com/fe/service/account?cUserId=MobeBh9nndWIs4wnOk_qB4giGIo&userId=2718372159&_locale=zh_CN"
        },{
          text:"退出登录",
          path:"/login"
        }
      ],
      token : this.$store.state.token,
      totleMoney:0
    };
  },
  computed: {
    totleProduct() {
      if(this.token){
        return this.$store.state.cartProductcount;
      }else{
        return 0
      }
    },
    bgcolor() {
      if (this.totleProduct === 0) return "#424242";
      return "#ff6700";
    },
    color() {
      if (this.totleProduct === 0) return "#b0b0b0";
      return "#ffffff";
    },
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
    // 登录按钮点击事件
    loginClick() {
      this.$router.push("/login");
    },
    // 注册按钮点击事件
    registerClick() {
      this.$router.push("/login/register");
    },
    // 购物车图标点击事件
    goCart() {
      this.$router.push("/cart");
    },
    // 购物车模块被鼠标覆盖事件
    async shopcarHover() {
      if(!this.token){
        return
      }
      const { data } = await getShopCarAPI();
      data.length === 0
        ? (this.showwitch = "notis")
        : (this.showwitch = "lists");
      this.shopcarData = this.filterData(data);
      let num = 0;
      this.totleMoney = 0
      this.shopcarData.forEach((v) => {
        num += v.count;
        this.totleMoney += v.price * v.count
      });

      this.$store.commit("updateCartProductcount", num);
    },
    // 过滤数据
    filterData(data) {
      // 遍历数据,添加一些基本属性
      for (let i = 0; i < data.length; i++) {
        data[i].count = 1;    // 用于计算该产品的数量
        data[i].index = i;    // 添加index,用来标记
        data[i].chose = false;    // chose属性,表示当前商品是否被选中
        data[i].price = parseInt(data[i].price);  // 转换价格的数据类型
      }
      // 再次遍历数组
      for(let i=0;i<data.length;i++){
        for(let j=i+1;j<data.length;j++){
          // 查询相同的商品,给第一个商品的数量加一,删掉后面的商品
          if(data[i].product === data[j].product && data[i].version === data[j].version && data[i].color === data[j].color){
            data[i].count++
            data.splice(j,1)
            j--
          }
        }
      }
      return data;
    },
    // 删除购物车数据
    async deleteProduct(item) {
      let { data } = await searchShopCarAPI(item);
      let newData = data.map((v) => {
        return v.id;
      });
      for (let i = 0; i < newData.length; i++) {
        deleteShopCarAPI(newData[i]);
      }
      this.shopcarHover();
    },
    // 用户组件跳转页面
    jump(e){
      let path = e.target.getAttribute("path")
      let href = e.target.getAttribute("href")
      if(path){
        if(path==='/login'){
          this.$store.commit('updateToken','')
        }
        this.$router.push(path)
      }else{
        window.location.href = href
      }
    }
  },
  created() {
    this.getHeaderNavAPI();
  }
};
</script>

<style scoped lang="less">
.main {
  position: relative;
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
        .downloadApp {
          position: relative;
          &:hover {
            &::before,
            &::after {
              display: block;
            }
          }
          &::before {
            content: "小米商城APP";
            background: url(./imgs/download.png);
            background-size: 90px;
            background-repeat: no-repeat;
            background-position: 15px 10px;
            position: absolute;
            top: 40px;
            left: -43px;
            width: 105px;
            overflow: hidden;
            background-color: white;
            box-shadow: 0 2px 8px rgba(137, 137, 137, 0.804);
            z-index: 10000;
            font-size: 14px;
            padding-top: 100px;
            padding-left: 15px;
            display: none;
            cursor: pointer;
          }
          &::after {
            content: "";
            width: 20px;
            height: 20px;
            display: none;
            background-color: rgb(255, 255, 255);
            transform: rotate(45deg);
            position: absolute;
            top: 35px;
            left: 9px;
            cursor: pointer;
          }
        }
      }
      .user{
        text-align: center;
        line-height:40px;
        width:110px;
        height:100%;
        color: #b0b0b0;
        cursor: pointer;
        position: relative;
        i{
          margin-left:10px;
        }
        &:hover{
          background-color: white;
          i,span{color:#ff6700;}
          ul{
            height:200px;
          }
        }
        ul{
          height: 0;
          position: absolute;
          overflow: hidden;
          width:100%;
          display: block;
          background-color: white;
          z-index: 999;
          li{
            width:100%;
            text-indent: 30px;
            height:40px;
            line-height:40px;
            background-color: white;
            &:hover{
              background-color: #b1b1b1;
              color:#ff6700;
            }
          }
        }
      }
      // ul公共样式
      ul {
        display: flex;
        // overflow: hidden;
        height: 100%;
        line-height: 40px;
        transition: 0.4s;
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
          &:hover {
            color: #ff6700;
            background-color: white;
            .shopcarDropdown{
              display: block;
              opacity: 1;
            }
          }
          i {
            font-size: 18px;
            margin-right: 10px;
          }
          .shopcarDropdown {
            display: none;
            opacity: 0;
            overflow: hidden;
            width: 300px;
            min-height: 80px;
            position: absolute;
            top: 40px;
            right: 0;
            transition: 0.4s;
            line-height: 40px;
            z-index: 99999;
            box-shadow: 0px 5px 5px rgba(128, 128, 128, 0.363);
            padding: 20px 10px 0;
            background-color: white;
            .productItem {
              color: black;
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 276px;
              height: 80px;
              padding: 10px 0;
              border-bottom: 1px solid #424242;
              &:last-of-type {
                border: none;
              }
              &:hover {
                i {
                  opacity: 1;
                }
              }
              img {
                width: 60px;
                height: 60px;
              }
              .config {
                font-size: 12px;
                line-height: 20px;
                max-width: 100px;
                text-overflow: ellipsis;
                  overflow: hidden;
                  white-space: nowrap;
                &:hover {
                  color: #ff6700;
                }
              }
              .price {
                font-size: 12px;
                line-height: 60px;
              }
              i {
                opacity: 0;
                color: #7e7e7e;
                &:hover {
                  color: black;
                }
              }
            }
            .summary {
              width: 100%;
              // height:80px;
              padding: 15px 20px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .totle {
                line-height: 10px;
                color: #424242;
              }
              .price {
                font-size: 25px;
                color: #ff6700;
                small {
                  font-size: 12px;
                }
              }
              .buy {
                width: 130px;
                height: 40px;
                background-color: #ff6700;
                color: white;
              }
            }
          }
        }
      }
    }
  }
  .dropdown {
    position:fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.29);
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dropdownContainer {
    width:840px;
    height:625px;
    background-color: white;
    box-sizing: border-box;
    .header{
      width:100%;
      height:60px;
      padding:14px 20px;
      line-height:32px;
      font-size:18px;
      background-color: #c2c2c2;
      i{
        float:right;
        padding:10px 12px;
        border-radius: 100px;
        transition: 0.3s;
        cursor: pointer;
        &:hover{
          background-color: red;
          color:white;
        }
      }
    }
    .container{
      padding:20px;
      text-align: center;
      color:#424242;
      p{
        font-size:18px;
        color:#333;
      }
      ul{
        margin-top:40px;
        li{
          width:140px;
          height:40px;
          background-color: #eaeaea;
          margin:0 10px 20px;
          text-align: center;
          line-height:40px;
          display: inline-block;
          font-size:14px;
          cursor: pointer;
          &:hover{
            background-color: #ff6700;
            color:white;
          }
        }
      }
    }
  }
  .v-enter-active{
    animation: drop 1s;
  }
  .v-leave-active{
    animation: drop 1s reverse;
  }
  @keyframes drop {
    0%{
      opacity: 0;
      transform: translateY(-20px);
    }
    100%{
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>