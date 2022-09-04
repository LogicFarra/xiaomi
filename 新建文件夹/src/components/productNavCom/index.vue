<template>
  <nav class="site_header">
    <div class="site_container">
      <img
        src="./imgs/logo-mi2.png"
        alt=""
        class="logo"
        width="56px"
        title="小米官网"
        style="cursor: pointer"
      />
      <ul class="site_list">
        <li>
          <a href="javascript:;" 
          @mouseenter="throttling(drop,500)" 
          @mouseleave="throttling(pull,500)">Xiaomi手机</a>
        </li>
        <li>
          <a href="javascript:;">Redmi手机</a>
        </li>
        <li>
          <a href="javascript:;">电视</a>
        </li>
        <li>
          <a href="javascript:;">笔记本</a>
        </li>
        <li>
          <a href="javascript:;">平板</a>
        </li>
        <li>
          <a href="javascript:;">家电</a>
        </li>
        <li>
          <a href="javascript:;">路由器</a>
        </li>
        <li>
          <a href="javascript:;">服务中心</a>
        </li>
        <li>
          <a href="javascript:;">社区</a>
        </li>
      </ul>
      <div class="search_box">
        <input type="text" placeholder="电视" />
        <div class="search_btn">
          <i class="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <!-- 下拉框 -->
    <div class="product_list" :style="{ height: productNavHeight + 'px' }">
      <ul class="product_list_container">
        <li>
          <img
            src="./imgs/581f3a690e6803add02e4c9fde98cb78.webp"
            alt=""
            width="160px"
            height="110px"
          />
          <div class="title">Xiaomi MIX Fold 2</div>
          <p class="price">8999元起</p>
        </li>
        <li>
          <img
            src="./imgs/581f3a690e6803add02e4c9fde98cb78.webp"
            alt=""
            width="160px"
            height="110px"
          />
          <div class="title">Xiaomi MIX Fold 2</div>
          <p class="price">8999元起</p>
        </li>
        <li>
          <img
            src="./imgs/581f3a690e6803add02e4c9fde98cb78.webp"
            alt=""
            width="160px"
            height="110px"
          />
          <div class="title">Xiaomi MIX Fold 2</div>
          <p class="price">8999元起</p>
        </li>
        <li>
          <img
            src="./imgs/581f3a690e6803add02e4c9fde98cb78.webp"
            alt=""
            width="160px"
            height="110px"
          />
          <div class="title">Xiaomi MIX Fold 2</div>
          <p class="price">8999元起</p>
        </li>
        <li>
          <img
            src="./imgs/581f3a690e6803add02e4c9fde98cb78.webp"
            alt=""
            width="160px"
            height="110px"
          />
          <div class="title">Xiaomi MIX Fold 2</div>
          <p class="price">8999元起</p>
        </li>
        <li>
          <img
            src="./imgs/581f3a690e6803add02e4c9fde98cb78.webp"
            alt=""
            width="160px"
            height="110px"
          />
          <div class="title">Xiaomi MIX Fold 2</div>
          <p class="price">8999元起</p>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "ProductNavCom",
    data() {
      return {
        productNavHeight: 0,
        dropTimer:null,
        pullTimer:null
      };
    },
    methods: {
      // 节流函数
      throttling(fn, time = 1000) {
          return (function () {
          if (fn.timer) return;
          fn.timer = setTimeout(() => {
            fn();
            fn.timer = null;
          }, time);
        })();
      },
      // 下拉
      drop(){
        clearInterval(this.pullTimer)
         this.dropTimer = setInterval(()=>{
          // 高度一直拉到230像素
          if(this.productNavHeight < 230){
            this.productNavHeight += 3
        }else{
          // 完全下拉之后停止计时器
          clearInterval(this.dropTimer)
        }
        },1)
      },
      // 收回
      pull(){
        clearInterval(this.dropTimer)
        this.pullTimer = setInterval(()=>{
          // 高度一直减到0像素
          if(this.productNavHeight > 1){
            this.productNavHeight -= 3
        }else{
          // 完全收回之后停止计时器
          clearInterval(this.pullTimer)
        }
        },1)
      },
    },
  };
  </script>
<style scoped lang="less">
.site_header {
  position: relative;
  .site_container {
    width: 1226px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    position: relative;
    // 导航
    .site_list {
      display: flex;
      margin-left: 170px;
      a {
        color: black;
        display: block;
        padding: 38px 10px 38px 10px;
        &:hover {
          color: #ff6700;
        }
      }
    }
    // 搜索
    .search_box {
      position: absolute;
      right: 0;
      height: 50px;
      display: flex;
      input {
        width: 245px;
        height: 100%;
        outline: none;
        border: 1px solid #e0e0e0;
        padding: 0 10px;
      }
      div {
        width: 52px;
        border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        border-right: 1px solid #e0e0e0;
        i {
          display: block;
          font-size: 20px;
          padding: 13px 16px;
          color: #616161;
        }
      }
    }
  }
  .product_list {
    position: absolute;
    background-color: rgb(255, 255, 255);
    border-top: 1px solid #e0e0e0;
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
    }
  }
}
</style>