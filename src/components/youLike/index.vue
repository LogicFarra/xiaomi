<template>
  <div class="main">
    <div class="main_container">
      <h1>{{title}}</h1>
    <ul :style="a">
      <li v-for="item in allData" :key="item.index">
        <transition>
          <div class="drop" v-show="addSuccess && index == item.index">
            成功添加购物车
          </div>
        </transition>
        <img :src="item.img" />
        <p class="product">{{ item.name }}</p>
        <p class="price">{{ item.price }}</p>
        <p class="recommend">{{ item.good }}人好评</p>
        <div class="add" @click="add(item.index, item.name)">加入购物车</div>
      </li>
    </ul>
    <div class="points">
      <span :class="{'cur': curIndex === 1}" @click="switchImg('left')"></span>
      <span :class="{'cur': curIndex === 2}" @click="switchImg('right')"></span>
    </div>
    </div>
  </div>
</template>

<script>
import { getLikeAPI, addProductAPI, getProductInfoAPI } from "@/api";
export default {
  name: "youLike",
  data() {
    return {
      allData: [],
      addSuccess: false,
      index: 0,
      a:"",
      curIndex:1
    };
  },
  props:{
    title:{
      default : "猜你喜欢"
    }
  },
  methods: {
    // 获取初始数据
    async getinitdata() {
      const { data } = await getLikeAPI();
      this.allData = data.slice(0, 10);
      let i = 0;
      this.allData.forEach((v) => {
        v.index = i++;
      });
    },
    // 成功添加购物车提示动画
    animation(index) {
      this.index = index;
      this.addSuccess = true;
      setTimeout(() => {
        this.addSuccess = false;
      }, 1000);
    },
    // 添加到购物车方法
    async add(index, name) {
      // 通过商品名字在数据库中查询到该商品的详细数据
      const { data } = await getProductInfoAPI(name);
      // 默认选择商品的第一种配置,提取出有用信息
      let { color, version, product } = data[0];
      let configs = {
        color: color[0].color,
        img: color[0].img,
        version: version[0].text,
        price: version[0].price,
        product: product,
      };
      // 将该信息添加到购物车的数据库当中
      await addProductAPI(configs);
      // 成功添加的动画
      this.animation(index);
    },
    // 切换商品方法
    switchImg(status){
      if(status === 'right'){
        if(this.curIndex === 2) return
        this.a = "transform: translateX(-1245px);"
        this.curIndex = 2
      }else{
        if(this.curIndex === 1) return
        this.a = "transform: translateX(0);"
        this.curIndex = 1
      }
    }
  },
  created() {
    this.getinitdata();
  },
};
</script>

<style scoped lang="less">
.main {
  .main_container{
  padding: 50px 0;
  margin:0 auto;
  width: 1226px;
  overflow: hidden;
  h1 {
    overflow: hidden;
    font-weight: 500;
    color: rgb(117, 117, 117);
    text-align: center;
    position: relative;
    &::before {
      content: "";
      width: 370px;
      height: 1px;
      background-color: rgba(176, 176, 176, 0.998);
      position: absolute;
      top: 50%;
      left: 0px;
    }
    &::after {
      content: "";
      width: 370px;
      height: 1px;
      background-color: rgba(176, 176, 176, 0.998);
      position: absolute;
      top: 50%;
      right: 0px;
    }
  }
  ul {
    width: 3000px;
    transition: 1s;
    li {
      display: inline-block;
      text-align: center;
      width: 234px;
      height: 300px;
      background-color: white;
      position: relative;
      overflow: hidden;
      margin: 15px 15px 0 0;
      .drop {
        width: 100%;
        height: 40px;
        background-color: green;
        position: absolute;
        top: 0px;
        left: 0;
        text-align: center;
        font-size: 13px;
        color: white;
        line-height: 40px;
      }
      .v-enter-active {
        animation: drop 0.3s;
      }
      .v-leave-active {
        animation: drop 0.3s reverse;
      }
      @keyframes drop {
        0% {
          top: -40px;
        }
        100% {
          top: 0;
        }
      }
      img {
        width: 140px;
        margin: 40px 47px 20px;
      }
      p {
        font-size: 14px;
        line-height: 25px;
      }
      .price {
        color: #ff6700;
      }
      .recommend {
        color: #838383;
      }
      .add {
        width: 120px;
        height: 30px;
        text-align: center;
        line-height: 28px;
        font-size: 12px;
        color: #ff6700;
        border: 1px solid #ff6700;
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        top: 305px;
        transition: 0.3s;
        background-color: white;
        cursor: pointer;
        &:hover {
          background-color: #ff6700;
          color: white;
        }
      }
      &:hover {
        .add {
          top: 255px;
        }
      }
    }
  }
  .points {
    text-align: center;
    padding-top: 10px;
    span {
      display: inline-block;
      width: 6px;
      height: 6px;
      cursor: pointer;
      box-sizing: border-box;
      background-color: #717171;
      margin: 0 10px;
      border-radius: 100px;
      box-sizing: content-box;
      border: 2px solid #f5f5f5;
      transition: 0.5s;
    }
    .cur {
      border: 2px solid #ff6700;
      background: white;
    }
  }
  }
}
</style>