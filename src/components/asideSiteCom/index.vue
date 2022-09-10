<template>
  <nav class="site_aside">
    <!-- 轮播图图片 -->
    <div class="shuffling">
      <transition-group name="shuffling">
        <img :src="shufllingImgs[0]" key="1" alt="" v-if="curImg === 0" />
        <img :src="shufllingImgs[1]" key="2" alt="" v-else-if="curImg === 1" />
        <img :src="shufllingImgs[2]" key="3" alt="" v-else-if="curImg === 2" />
        <img :src="shufllingImgs[3]" key="4" alt="" v-else-if="curImg === 3" />
        <img :src="shufllingImgs[4]" key="5" alt="" v-else-if="curImg === 4" />
      </transition-group>
    </div>
    <!-- 左侧导航栏 -->
    <ul class="site_left">
      <li
        v-for="item in products"
        :key='item.id'
        @mouseenter="siteListHover(item.id)"
        @mouseleave="showProductList = false"
      >
        {{item.title}}<i class="fa fa-chevron-right" aria-hidden="true"></i>
      </li>
      
    </ul>
    <!-- 右侧轮播图 -->
    <div
      class="site_right"
      @mouseenter="stopPlay(true)"
      @mouseleave="stopPlay(false)"
    >
      <!-- 控制轮播图的左侧按钮 -->
      <div
        class="switch_btn"
        style="left: 0"
        @click="throttling(switchImg, '1000', 'left')"
      >
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </div>
      <!-- 控制轮播图的右侧按钮 -->
      <div
        class="switch_btn"
        style="right: 0"
        @click="throttling(switchImg, '1000', 'right')"
      >
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </div>
      <!-- 控制轮播图的小圆点 -->
      <ul class="switch_point">
        <li 
          v-for="item in switchPoint" 
          :key="item.index" 
          :class="item.class"
          @click="switchPointClick(item.index)"
          ></li>
      </ul>
    </div>

    <!-- 商品展示栏 -->
    <div
      class="product_list"
      v-show="showProductList"
      @mouseenter="showProductList = true"
      @mouseleave="showProductList = false"
    >
      <ul class="box">
        <li class="col" v-for="item in curProducts" :key="item.index">
          <ul class="col_list">
            <li v-for="item2 in item" :key="item2.id">
              <img
                :src="item2.img"
                alt=""
                width="40px"
                height="40px"
              />
              <span>{{item2.product}}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { getShufflingImgAPI , getProductAsideNavAPI } from "@/api";
export default {
  name: "AsideSite",
  data() {
    return {
      showProductList: false,  //控制横拉菜单的显示隐藏
      shufllingImgs: [], //轮播图图片 【url,url,......】
      curImg: 0,            //当前播放的图片
      aotuPalyTimer: null,  //自动播放轮播图的定时器
      switchPoint:[         //控制轮播图图片的小圆点
        {index:0,class:'cur'},
        {index:1,class:''},
        {index:2,class:''},
        {index:3,class:''},
        {index:4,class:''}
      ],
      products:[],    //导航栏所有信息  
      curProducts:[[],[],[],[]],  //当前展示的导航栏子信息  
    };
  },
  methods: {
    // 获取轮播图图片
    async getShufflingImg() {
      const { data } = await getShufflingImgAPI();
      data.map((v) => {
        this.shufllingImgs.push(v.url);
      });
    },
    // 获取导航栏所有数据
    async getProductAsideNav(){
      const {data} = await getProductAsideNavAPI()
      this.products = data
    },
    // 轮播图按钮点击事件
    switchImg(value) {
      switch (value) {
        case "right":
          if (this.curImg < 4) {
            this.curImg++;
          } else {
            this.curImg = 0;
          }
          break;
        case "left":
          if (this.curImg > 0) {
            this.curImg--;
          } else {
            this.curImg = 4;
          }
      }
    },
    // 自动播放轮播图
    autoPlay() {
      this.autoPlayTimer = setInterval(() => {
        this.switchImg("right");
      }, 5000);
    },
    // 鼠标覆盖轮播图事件
    stopPlay(status) {
      if (status) {
        clearInterval(this.autoPlayTimer);
        this.aotuPalyTimer = null;
      } else {
        this.autoPlay();
      }
    },
    //轮播图小圆点点击事件
    switchPointClick(index){
      this.curImg = index
      this.clearSwitchPoint(index)
    },
    // 清除其他圆点样式,给当前圆点设置样式
    clearSwitchPoint(index){
      this.switchPoint.map((item)=>{
        item.class = ''
      })
      this.switchPoint[index].class = 'cur'
    },
    //节流函数
    throttling(fn, wait, status) {
      if (fn.timer !== true) {
        fn(status);
        fn.timer = true;
        setTimeout(() => {
          fn.timer = null;
        }, wait);
      }
    },
    // 导航栏一级菜单被覆盖时
    siteListHover(index){
      this.showProductList = true
      let {products:cur} = this.products[index]
      this.curProducts[0] = cur.slice(0,6)
      this.curProducts[1] = cur.slice(6,12)
      this.curProducts[2] = cur.slice(12,18)
      this.curProducts[3] = cur.slice(18)
    }
  },
  created() {
    // 挂载前获取轮播图图片信息
    this.getShufflingImg();
    // 获取导航栏所有数据
    this.getProductAsideNav()
  },
  mounted() {
    // 挂载后自动播放轮播图
    this.autoPlay();
  },
  watch:{
    // 同步小圆点和当前图片
    curImg(newvalue){
      this.clearSwitchPoint(this.curImg)
    }
  }
};
</script>

<style scoped lang="less">
.site_aside {
  position: relative;
  width: 1226px;
  height: 460px;
  background-size: cover;
  margin: 0 auto;
  display: flex;
  z-index: 10;
  // 侧边导航栏
  .site_left {
    width: 234px;
    height: 100%;
    background-color: rgba(105, 101, 101, 0.6);
    padding: 20px 0;
    z-index: 10;
    li {
      width: 100%;
      height: 42px;
      padding-left: 30px;
      font-size: 14px;
      line-height: 42px;
      color: white;
      position: relative;
      cursor: pointer;
      &:hover {
        background-color: #ff6700;
      }
      i {
        position: absolute;
        right: 30px;
        color: rgba(255, 255, 255, 0.473);
        line-height: 42px;
      }
    }
  }
  // 轮播图
  .site_right {
    width: 992px;
    height: 100%;
    position: relative;
    // 切换图片按钮
    .switch_btn {
      width: 41px;
      height: 69px;
      font-size: 30px;
      text-align: center;
      padding-top: 14px;
      position: absolute;
      color: #616161;
      top: 195px;
      cursor: pointer;
      &:hover {
        background-color: #42424284;
      }
    }
    // 切换图片小圆点
    .switch_point {
      display: flex;
      position: absolute;
      right: 30px;
      bottom: 30px;
      li {
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.4);
        border: 2px solid rgba(255, 255, 255, 0.3);
        margin: 0 4px;
        cursor: pointer;
        &:hover {
          border: 2px solid rgba(0, 0, 0, 0.4);
          background-color: rgba(255, 255, 255, 0.4);
        }
      }
      .cur {
        border: 2px solid rgba(0, 0, 0, 0.4);
        background-color: rgba(255, 255, 255, 0.4);
      }
    }
  }
  .shuffling {
    position: absolute;
    width: 100%;
    height: 100%;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
  // 商品展示
  .product_list {
    position: absolute;
    left: 234px;
    height: 460px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 8px 16px rgb(0 0 0 / 18%);
    outline: 1px solid #e0e0e0;
    cursor: pointer;
    // 大盒子
    .box {
      display: flex;
      // 每一列
      .col {
        ul {
          padding-top: 4px;
          // 每个商品元素
          li {
            padding: 16px 4px 16px 20px;
            &:hover span {
              color: #ff6700;
            }
            display: flex;
            img {
              margin-right: 12px;
            }
            span {
              font-size:14px;
              line-height: 40px;
              color: black;
              width: 172px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
          }
        }
      }
    }
  }
  .shuffling-enter-active {
    animation: shuffling 1s;
  }
  .shuffling-leave-active {
    animation: shuffling 1s reverse;
  }
  @keyframes shuffling {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>