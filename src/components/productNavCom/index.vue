<template>
  <!-- 商品导航栏 -->
  <nav class="site_header">
    <!-- 导航栏内容区 -->
    <div class="site_container">
      <!-- logo -->
      <img
        src="./imgs/logo-mi2.png"
        alt=""
        class="logo"
        width="56px"
        title="小米官网"
        style="cursor: pointer"
      />
      <!-- 导航列表 -->
      <ul class="site_list">
        <!-- 导航列表的单个标签 -->
        <li
          v-for="item in products"
          :key="item.id"
          @mouseenter="throttling(showDropdown, 300, true, item.id)"
          @mouseleave="throttling(showDropdown, 300, false, item.id)"
        >
          <a href="javascript:;" @mouseenter="aHover(item.id)">{{
            item.title
          }}</a>
        </li>
        <li>
          <a href="javascript:;" @mouseenter="b(true)" @mouseleave="b(false)"
            >服务中心</a
          >
        </li>
        <li>
          <a href="javascript:;" @mouseenter="b(true)" @mouseleave="b(false)"
            >社区</a
          >
        </li>
        <transition>
          <!-- 下拉框 -->
          <div
            class="product_list"
            v-show="showProductDropdown"
            @mouseenter="throttling(showDropdown, 300, true)"
            @mouseleave="throttling(showDropdown, 300, false)"
          >
            <!-- 下拉框_内容区 -->
            <ul class="product_list_container">
              <!-- 内容区_单个内容 -->
              <li
                v-for="item in curProducts"
                :key="item.id"
                :class="item.class"
                @click="productClick(item.product)"
              >
                <img :src="item.img" alt="" width="160px" height="110px" />
                <div class="title">{{ item.product }}</div>
                <p class="price">{{ item.price }}</p>
              </li>
            </ul>
          </div>
        </transition>
      </ul>
      <!-- 搜索框 -->
      <div class="search_box">
        <!-- 搜索框_输入栏 -->
        <input
          type="text"
          placeholder="电视"
          @focus="showSearhDropdown = true"
          @blur="showSearhDropdown = false"
        />
        <!-- 搜索框_按钮 -->
        <div class="search_btn">
          <i class="fa fa-search" aria-hidden="true"></i>
        </div>
        <!-- the dropdown of the search bar -->
        <ul class="search_box_dropdown" v-show="showSearhDropdown">
          <li v-for="item in searchKeywords" :key="item.id">
          {{item.keywords}}
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { getProductNavAPI , getSearchKeywordsAPI } from "@/api";
export default {
  name: "ProductNavCom",
  data() {
    return {
      showSearhDropdown: false, //控制搜索框的下拉菜单
      showProductDropdown: false, //控制商品导航的下拉菜单
      leave: null, //判断鼠标位置
      products: [], //商品导航下拉菜单的所有数据
      curProducts: [], //商品导航下拉菜单当前展示的数据
      searchKeywords:[], //搜索框的关键词
    };
  },
  methods: {
    b(status) {
      if (status === true) {
        this.leave = false;
        this.showDropdown();
      } else {
        this.leave = null;
      }
    },
    // 节流函数，控制鼠标滑出下拉菜单数频率
    throttling(fn, time = 1000, status) {
      this.leave = status;
      return (function () {
        if (fn.timer) return;
        fn.timer = setTimeout(() => {
          fn();
          fn.timer = null;
        }, time);
      })();
    },
    // 展示下拉菜单
    showDropdown() {
      this.showProductDropdown = this.leave;
    },
    // 获取商品下拉菜单的商品数据
    async getProducts() {
      const { data } = await getProductNavAPI();
      this.products = data;
    },
    // 导航栏单个链接被鼠标覆盖时的回调
    aHover(index) {
      this.curProducts = this.products[index - 1].products;
    },
    // 获取搜索框关键词函数
    async getSearchKeywords(){
      const {data} = await getSearchKeywordsAPI()
      this.searchKeywords = data
    },
    // 商品点击事件
    productClick(product){
      //携带商品名称跳转到buy页面
      this.$router.push({
        path:"shop/buy",
        query:{
          product
        }
      })
    }
  },
  created() {
    this.getProducts();
    this.getSearchKeywords()
  },
};
</script>
<style scoped lang="less">
// 商品导航
.site_header {
  position: relative;
  // 商品导航_内容
  .site_container {
    width: 1226px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    // position: relative;
    // 导航
    .site_list {
      display: flex;
      margin-left: 170px;
      height: 100%;
      li {
        a {
          cursor: pointer;
          color: black;
          display: block;
          padding: 38px 10px 38px 10px;
          &:hover {
            color: #ff6700;
          }
          &:hover + .product_list {
            height: 230px;
          }
        }
      }
      // 下拉框
      .product_list {
        height: 230px;
        position: absolute;
        left: 0;
        top: 100px;
        background-color: rgb(255, 255, 255);
        box-shadow: 0 5px 10px silver;
        overflow: hidden;
        width: 100%;
        z-index: 1000;
        .product_list_container {
          width: 1226px;
          margin: 0 auto;
          display: flex;
          li {
            box-sizing: content-box;
            position: relative;
            width: 180px;
            padding: 35px 12px 0 12px;
            cursor: pointer;
            &:last-of-type {
              &::before {
                background-color: transparent;
              }
            }
            &::before {
              content: "";
              width: 1px;
              height: 100px;
              background-color: #e0e0e0;
              position: absolute;
              top: 35px;
              right: 0;
            }
            img {
              margin: 0 10px 16px;
            }
            .title {
              width: 100%;
              font-size: 12px;
              line-height: 18px;
              text-align: center;
            }
            .price {
              font-size: 12px;
              color: #ff6700;
              width: 100%;
              text-align: center;
              line-height: 22px;
            }
          }
          .more {
            .price {
              font-size: 12px;
              color: black;
              width: 100%;
              text-align: center;
              line-height: 22px;
            }
          }
        }
      }
    }
    // 搜索
    .search_box {
      position: relative;
      left: 70px;
      height: 50px;
      display: flex;
      &:hover input {
        border-color: #b0b0b0;
      }
      &:hover div {
        border-color: #b0b0b0;
      }
      // the input of the search bar
      input {
        width: 245px;
        height: 100%;
        outline: none;
        border: 1px solid #e0e0e0;
        padding: 0 10px;
        transition: 0.3s;
        &:focus {
          border-color: #ff6700;
        }
        &:focus + div {
          border-color: #ff6700;
        }
      }
      // the button of the search bar
      div {
        width: 52px;
        border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        border-right: 1px solid #e0e0e0;
        transition: 0.3s;
        i {
          display: block;
          font-size: 20px;
          padding: 13px 16px;
          color: #616161;
        }
      }
      // the dropdown of the search bar
      .search_box_dropdown {
        position: absolute;
        top: 50px;
        z-index: 1000;
        border-left: 1px solid #ff6700;
        border-right: 1px solid #ff6700;
        border-bottom: 1px solid #ff6700;
        width: 245px;
        background-color: white;
        li {
          width: 100%;
          height: 30px;
          line-height: 30px;
          font-size: 12px;
          padding-left: 15px;
          cursor: pointer;
          &:hover {
            background-color: #f6f6f689;
          }
        }
      }
    }
  }

  .v-enter-active {
    animation: drop 0.2s;
  }
  .v-leave-active {
    animation: drop 0.2s reverse;
  }

  @keyframes drop {
    0% {
      height: 0%;
    }
    100% {
      height: 230px;
    }
  }
}
</style>