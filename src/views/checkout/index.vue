<template>
  <div class="main">
    <header>
      <div class="header_container">
        <div class="left">
          <img src="@/assets/logo-mi2.png" alt="" />
          <h2>确认订单</h2>
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
    <main>
      <div class="container">
        <p class="title">收货地址</p>
        <Location ref="loc"></Location>
        <p class="title">商品及优惠券</p>
        <ul>
          <li v-for="item in products" :key="item.id">
            <img :src="item.img" />
            <p class="product">
              <span>{{ item.product }}</span>
              <span>{{ item.version }}</span>
              <span>{{ item.disposition }}</span>
              <span>{{ item.color }}</span>
            </p>
            <p class="num">{{ item.price }}元 X {{ item.count }}</p>
            <p class="totle">{{ item.price * item.count }}元</p>
          </li>
        </ul>
        <p class="delivery">
          配送方式
          <span style="font-size: 14px; color: #ff6700; margin-left: 20px"
            >包邮</span
          >
        </p>
        <div class="selttlement">
          <div class="inner">
            <p>
              商品件数:<span>{{ count }}件</span>
            </p>
            <p>
              商品总价:<span>{{ totlePrice }}元</span>
            </p>
            <p>
              运费:<span>{{ deliveryPrice }}元</span>
            </p>
            <p class="money">
              应付总额:<span
                ><strong>{{ totlePrice }}</strong
                >元</span
              >
            </p>
          </div>
        </div>
        <div class="buttons">
          <div class="loc">
            <p>
              <span>{{ loc.name }}</span
              ><span>{{ loc.phone }}</span>
            </p>
            <p>
              <span>{{ loc.location }}</span
              ><span>{{ loc.detailLocation }}</span>
            </p>
          </div>
          <div><button @click="$router.back()">返回购物车</button><button @click="sub">立即下单</button> </div>
        </div>
      </div>
    </main>
    <FooterCom></FooterCom>
  </div>
</template>

<script>
import Location from "@/components/location/index.vue";
import FooterCom from "@/components/footerCom/index.vue";
export default {
  name: "checkout",
  components: { Location, FooterCom },
  data() {
    return {
      products: [],
      count: 0,
      totlePrice: 0,
      deliveryPrice: 0,
      loc: {},
    };
  },
  methods:{
    sub(){
     if(this.loc.name){
      this.$router.push({
        name:"confirm",
        params:{
          location:this.loc,
          price:this.totlePrice
        }
      })
      sessionStorage.setItem("order",JSON.stringify(this.loc))
      sessionStorage.setItem("price",JSON.stringify(this.totlePrice))
     }else{
       return
     }
    }
  },
  created() {
    // 获取保存在浏览器中的需要购买的商品数据
    this.products = JSON.parse(sessionStorage.getItem("products"));
    // 计算商品数量以及总价并赋值
    this.products.forEach((v) => {
      this.count += v.count;
      this.totlePrice += v.count * v.price;
    });
  },
  mounted() {
    // 给地址组件绑定自定义事件,获取当前选择的地址
    this.$refs.loc.$on("sendLoc", (data) => (this.loc = data));
  },
};
</script>

<style scoped lang="less">
.main {
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
  main {
    background-color: #f5f5f5;
    padding: 30px 20px;
    .container {
      padding: 0 20px 30px 20px;
      background-color: white;
      .title {
        padding: 30px 0 15px;
        font-size: 20px;
      }
      ul {
        border-bottom: 1px solid silver;
        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px 10px;
          img {
            width: 30px;
            height: 30px;
            margin-right: 30px;
          }
          .product {
            width: 50%;
          }
          .num {
            width: 20%;
          }
          .totle {
            width: 20%;
            text-align: right;
            color: #ff6700;
          }
        }
      }
      .delivery {
        padding: 40px 10px;
        border-bottom: 1px solid silver;
      }
      .selttlement {
        border-bottom: 1px solid silver;
        padding: 30px 10px;
        overflow: hidden;
        zoom: 1;
        .inner {
          float: right;
          p {
            width: 200px;
            line-height: 2em;
            font-size: 14px;
            span {
              float: right;
              color: #ff6700;
            }
          }
          .money {
            span {
              strong {
                font-size: 30px;
                margin-left: 5px;
              }
            }
          }
        }
      }
      .buttons {
        padding: 30px 0 0 0;
        overflow: hidden;
        zoom: 1;
        margin-bottom: 0px;
        display: flex;
        justify-content: space-between;
        .loc {
          p{
            font-size:14px;
            span{
              margin-left:10px;
            }
          }
        }
        button {
          width: 160px;
          height: 40px;
          cursor: pointer;
          &:first-of-type {
            border: 1px solid silver;
            background: transparent;
            color: silver;
            margin-right:20px;
          }
          &:last-of-type {
            border: 1px solid #ff6700;
            background-color: #ff6700;
            color: white;
            transition: 0.3s;
            &:hover {
              background-color: #d65500;
            }
          }
        }
      }
    }
  }
}
</style>