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
          <li><a href="javascript:;" @click="registerClick">注册</a></li>
          <li><span></span></li>
          <li><a href="javascript:;">消息通知</a></li>
          <li
            class="shoping_car"
            @click="goCart"
            @mouseenter="shopcarHover"
            :style="{ background: bgcolor}"
          >
            <!-- 购物车图标 -->
            <i
              class="fa fa-shopping-cart"
              aria-hidden="true"
            ></i>
            <font
              >购物车<font style="margin-left: 5px"
                >({{ totleProduct }})</font
              ></font
            >
            <!-- the dropdown menu of the shopping car -->
            <div class="shopcarDropdown">
              <p v-show="showwitch === 'notis'" style="color: black;">
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
    };
  },
  computed: {
    totleProduct() {
      return this.$store.state.cartProductcount;
    },
    totleMoney() {
      let sum = 0;
      this.shopcarData.map((v) => {
        let a = v.price.split("");
        a.pop();
        let b = parseInt(a.join(""));
        sum += b * v.count;
      });
      return sum;
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
      const { data } = await getShopCarAPI();
      data.length === 0
        ? (this.showwitch = "notis")
        : (this.showwitch = "lists");
      this.shopcarData = this.filterData(data);
      let num = 0;
      this.shopcarData.forEach((v) => {
        num += v.count;
      });
      this.$store.commit("updateCartProductcount", num);
    },
    // 过滤数据
    filterData(data) {
      for (let i = 0; i < data.length; i++) {
        data[i].count = 1;
        data[i].index = i;
        for (let j = i + 1; j < data.length; j++) {
          let a = data[i];
          let b = data[j];
          if (
            a.product === b.product &&
            a.version === b.version &&
            a.disposition === b.disposition &&
            a.color === b.color
          ) {
            data[i].count++;
            data.splice(j, 1);
            j--;
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
        &:hover {
          .shopcarDropdown {
            display: block;
          }
          color: #ffffff;
          background-color: white;
        }
        i {
          font-size: 18px;
          margin-right: 10px;
        }
        .shopcarDropdown {
          display: none;
          overflow: hidden;
          width: 300px;
          min-height: 80px;
          position: absolute;
          top: 40px;
          right: 0;
          z-index: 1000;
          background-color: white;
          box-shadow: 0px 5px 5px rgba(128, 128, 128, 0.363);
          padding: 20px 10px 0;
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
              color:#ff6700;
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
</style>