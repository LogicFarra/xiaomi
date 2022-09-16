<template>
  <div class="buy">
    <!-- 导航栏 -->
    <nav class="nav_bar">
      <div class="nav_bar_container pabulic_width">
        <h2>{{ initData.product }}</h2>
        <ul>
          <li><a href="javascript:;">参数页</a></li>
          <li><a href="javascript:;">F码通道</a></li>
          <li><a href="javascript:;">咨询客服</a></li>
          <li><a href="javascript:;">用户评价</a></li>
        </ul>
      </div>
    </nav>
    <!-- 登录提醒 -->
    <div class="login_notis" v-if="login">
      <div class="login_notis_container pabulic_width">
        <p>
          为方便您购买,请提前登录&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="javascript:;" @click="goLogin">立即登录</a>&nbsp;
          <i class="fa fa-times" aria-hidden="true" @click="login = false"></i>
        </p>
      </div>
    </div>
    <!-- 商品 -->
    <div class="product">
      <div class="product_container pabulic_width">
        <!-- 左侧轮播图 -->
        <div
          class="img_left"
          @mouseenter="imgHover(true)"
          @mouseleave="imgHover(false)"
        >
          <div class="img_box">
            <transition-group>
              <img :src="imgs[0].url" v-show="showImg === 0" key="0" />
              <img :src="imgs[1].url" v-show="showImg === 1" key="1" />
              <img :src="imgs[2].url" v-show="showImg === 2" key="2" />
              <img :src="imgs[3].url" v-show="showImg === 3" key="3" />
              <img :src="imgs[4].url" v-show="showImg === 4" key="4" />
            </transition-group>
          </div>
          <!-- 控制轮播图的左侧按钮 -->
          <div
            class="switch_btn"
            style="left: 0"
            @click="throttling(switchImg, 1000, 'left')"
          >
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </div>
          <!-- 控制轮播图的右侧按钮 -->
          <div
            class="switch_btn"
            style="right: 50px"
            @click="throttling(switchImg, 1000, 'right')"
          >
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </div>
          <!-- 切换图片的方块 -->
          <div class="switch_squear">
            <ul>
              <li
                v-for="item in imgs"
                :key="item.index"
                :class="[showImg === item.index ? 'cur' : '']"
                @click="squearClick(item.index)"
              ></li>
            </ul>
          </div>
        </div>
        <!-- 右侧商品盒子 -->
        <div class="message_right">
          <!-- 简介 -->
          <div class="title">
            <h2 class="title_name">{{ initData.product }}</h2>
            <p class="title_explain">
              {{ initData.introduction }}
            </p>
            <p class="title_sale">小米自营</p>
            <p class="title_price">
              <font class="cur_price">{{ initData.price }}</font>
              <del>{{ initData.oldPrice }}</del>
            </p>
          </div>
          <!-- 赠品 -->
          <div class="gifts">
            <span>赠品</span>
            <ul>
              <li v-for="item in initData.gifts" :key="item.index">
                {{ item }}
              </li>
            </ul>
          </div>
          <!-- 位置 -->
          <div class="location">
            <p>
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <font
                >&nbsp;&nbsp;北京&nbsp;&nbsp;北京市&nbsp;&nbsp;海淀区&nbsp;&nbsp;清河街道</font
              >
              &nbsp;&nbsp;
              <a href="javascript:;">修改</a>
              <br />
              <span>&nbsp;&nbsp;&nbsp;&nbsp;有现货</span>
            </p>
          </div>
          <!-- 版本 -->
          <div class="version" v-if="disposition.version !== 0">
            <p>选择版本</p>
            <ul>
              <li
                :class="[item.index === curClass[0].ver ? 'cur' : '']"
                v-for="item in initData.version"
                :key="item.text"
                @click="configClick(item,'ver')"
              >
                {{ item.text }}
              </li>
            </ul>
          </div>
          <!-- 配置 -->
          <div class="version" v-if="disposition.disposition !== 0">
            <p>选择配置</p>
            <ul>
              <li
                :class="[item.index === curClass[2].col ? 'cur' : '']"
                v-for="item in initData.disposition"
                :key="item.text"
                @click="configClick(item,'dis')"
              >
                {{ item.text }}
              </li>
            </ul>
          </div>
          <!-- 颜色 -->
          <div class="color" v-if="disposition.color !== 0">
            <p>选择颜色</p>
            <ul>
              <li
                :class="[item.index === curClass[2].col ? 'cur' : '']"
                v-for="item in initData.color"
                :key="item.index"
                @click="configClick(item,'col')"
              >
                {{ item.color }}
              </li>
            </ul>
          </div>
          <!-- 结算 -->
          <div class="all">
            <p>
              <font>{{configs.product}}&nbsp;{{configs.version}}&nbsp;{{configs.disposition}}&nbsp;{{configs.color}}</font>
              <font>{{configs.price}}</font>
            </p>
            <h2>总计: {{configs.price}}</h2>
          </div>
          <!-- 操作 -->
          <div class="opration">
            <div class="o1" @click="addShopCar">加入购物车</div>
            <div class="o2">喜欢</div>
          </div>
          <!-- 承诺 -->
          <div class="promise">
            <ul>
              <li>
                <i class="fa fa-check-square-o" aria-hidden="true"></i>
                <font>小米自营</font>
              </li>
              <li>
                <i class="fa fa-check-square-o" aria-hidden="true"></i>
                <font>小米发货</font>
              </li>
              <li>
                <i class="fa fa-check-square-o" aria-hidden="true"></i>
                <font>7天无理由退货</font>
              </li>
              <li>
                <i class="fa fa-check-square-o" aria-hidden="true"></i>
                <font>运费说明</font>
              </li>
              <li>
                <i class="fa fa-check-square-o" aria-hidden="true"></i>
                <font>企业信息</font>
              </li>
              <li>
                <i class="fa fa-check-square-o" aria-hidden="true"></i>
                <font>7天价格保护</font>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 尾部 -->
    <div class="footer">
      <div class="footer_container">
        <h2>价格说明</h2>
        <img
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43e2954feb6d1b108438481f1d5b0bd3.png"
          alt=""
          width="1226px"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getProductInfoAPI } from "@/api";
export default {
  name: "buy",
  data() {
    return {
      product: this.$route.query.product,
      login: true, //登录提示框的显示和隐藏
      showImg: 0, //当前显示哪张图片
      timer: null,
      initData: [], //商品的所有数据
      disposition: {}, //版本,配置,颜色
      imgs: [
        { index: 0, url: "" },
        { index: 1, url: "" },
        { index: 2, url: "" },
        { index: 3, url: "" },
        { index: 4, url: "" },
      ],
      curClass: [{ ver: 0 }, { dis: 0 }, { col: 0 }],
      configs:{
        product:'',
        version:'',
        disposition:'',
        color:'',
        price:''
      },
    };
  },
  methods: {
    // 轮播图自动播放方法
    starTimer() {
      this.timer = setInterval(() => {
        this.showImg++;
      }, 5000);
    },
    // 节流函数
    throttling(fn, wait, status) {
      if (fn.timer !== true) {
        fn(status);
        fn.timer = true;
        setTimeout(() => {
          fn.timer = null;
        }, wait);
      }
    },
    // 切换图片按钮点击事件
    switchImg(status) {
      if (status === "left") {
        this.showImg--;
      } else {
        this.showImg++;
      }
    },
    // 图片被覆盖事件
    imgHover(status) {
      if (status) {
        clearInterval(this.timer);
      } else {
        this.starTimer();
      }
    },
    //切图方块被点击事件
    squearClick(num) {
      this.showImg = num;
      console.log(num);
    },
    // 获取原始数据,并筛选
    async getInitData() {
      const { data } = await getProductInfoAPI(this.product);
      this.initData = data[0];
      // 控制规格,配置,颜色模块的显示和隐藏
      this.disposition = {
        version: this.initData.version.length,
        disposition: this.initData.disposition.length,
        color: this.initData.color.length,
      }
      // 筛选出图片
      for (let i = 0; i < 5; i++) {
        this.imgs[i] = {
          index: i,
          url: this.initData.img[i],
        };
      }
      // 初始化已选配置
      this.configs={
        product : this.initData.product,
        version : this.initData.version.length !== 0 ? this.initData.version[0].text : '',
        disposition : this.initData.disposition.length !== 0 ? this.initData.disposition[0].text : '',
        color : this.initData.color.length !== 0 ? this.initData.color[0].color : '',
        price : this.initData.version.length !== 0 ? this.initData.version[0].price : this.initData.disposition[0].price
      }
    },
    // 商品配置点击事件
    configClick(config,key){
      switch (key){
        case 'ver' :
          this.curClass[0].ver = config.index
          this.configs.version = config.text
          this.configs.price = config.price
          break;
        case 'dis' :
          this.curClass[1].dis = config.index
          this.configs.disposition = config.text
          this.configs.price = config.price
          break;
        case 'col' :
          this.curClass[2].col = config.index
          this.configs.color = config.color
          break;
      }
    },
    // 跳转至登录界面
    goLogin(){
      this.$router.push('/login/signin')
    },
    // 加入购物车
    addShopCar(){
      sessionStorage.setItem('curitem',JSON.stringify(this.configs))
      this.$router.push({
        name:'succeed',
        params:{
          data:this.configs
        }
      })
    }
  },
  watch: {
    showImg(newvalue) {
      if (newvalue > this.imgs.length - 1) {
        this.showImg = 0;
      } else if (newvalue < 0) {
        this.showImg = this.imgs.length - 1;
      }
    },
  },
  created() {
    this.getInitData()
    let a = sessionStorage.getItem('logeed')
    this.login = !a
  },
  mounted() {
    this.starTimer();
  },
};
</script>

<style scoped lang="less">
.buy {
  // 公共宽度
  .pabulic_width {
    width: 1226px;
    margin: 0 auto;
  }
  // 导航栏
  .nav_bar {
    border-top: 1px solid rgb(224, 224, 224);
    border-bottom: 1px solid rgb(224, 224, 224);
    box-shadow: 0 5px 5px rgba(188, 188, 188, 0.511);
    .nav_bar_container {
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h2 {
        font-weight: 400;
      }
      ul {
        display: flex;
        li {
          padding: 0 20px;
          border-right: 1px solid #a4a4a45d;
          &:last-of-type {
            border-color: transparent;
          }
          a {
            color: #616161;
            font-size: 14px;
            line-height: 14px;
            &:hover {
              color: #ff6700;
            }
          }
        }
      }
    }
  }
  //登录提醒
  .login_notis {
    background-color: #e5e5e58a;
    .login_notis_container {
      height: 50px;
      text-align: center;
      line-height: 50px;
      font-size: 14px;
      a {
        color: #ff6700;
      }
      i {
        color: #616161;
        cursor: pointer;
      }
    }
  }
  // 商品
  .product {
    padding: 32px 0 12px 0;
    .product_container {
      display: flex;
      // 左侧轮播图
      .img_left {
        width: 606px;
        position: relative;
        .img_box {
          position: relative;
          img {
            position: absolute;
            width: 560px;
          }
        }
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
        // 切换图片的方块
        .switch_squear {
          width: 100%;
          position: absolute;
          top: 560px;
          display: flex;
          justify-content: center;
          ul {
            display: flex;
            li {
              width: 50px;
              height: 3px;
              margin: 0 4px;
              background-color: rgb(204, 204, 204);
              cursor: pointer;
              &:hover {
                background-color: rgb(163, 163, 163);
              }
            }
            .cur {
              background-color: rgb(163, 163, 163);
            }
          }
        }
      }
      // 右侧商品信息
      .message_right {
        width: 600px;
        margin-left: 20px;
        // 简介
        .title {
          border-bottom: 1px solid #e0e0e0;
          padding-bottom: 10px;
          h2 {
            font-weight: 400;
          }
          .title_explain {
            color: #b0b0b0;
            font-size: 14px;
            padding-top: 8px;
          }
          .title_sale {
            color: #ff6700;
            font-size: 14px;
            margin-top: 14px;
          }
          .title_price {
            padding: 12px 0 10px 0;
            .cur_price {
              color: #ff6700;
              font-size: 18px;
            }
            del {
              color: rgb(176, 176, 176);
              font-size: 14px;
              position: relative;
              margin-left: 5px;
              &::before {
                content: "";
                width: 100%;
                height: 2px;
                background: rgb(176, 176, 176);
                position: absolute;
                left: 0;
                top: 50%;
              }
            }
          }
        }
        // 赠品
        .gifts {
          padding: 30px 0;
          border-bottom: 1px solid #e0e0e0;
          display: flex;
          align-items: baseline;
          span {
            padding: 3px 25px;
            background-color: #ff6700;
            font-size: 14px;
            color: white;
          }
          ul {
            li {
              font-size: 14px;
              margin-left: 10px;
              &:first-of-type {
                margin-bottom: 10px;
              }
            }
          }
        }
        // 位置
        .location {
          padding: 30px 20px;
          margin-top: 20px;
          border: 1px solid #e0e0e0;
          background-color: rgb(250, 250, 250);
          p {
            font-size: 14px;
            span {
              color: #ff6700;
            }
            a {
              color: #ff6700;
            }
            i {
              color: #b0b0b0;
            }
          }
        }
        // 版本颜色
        .version,
        .color {
          margin-top: 25px;
          p {
            font-size: 18px;
          }
          ul {
            padding-top: 15px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            li {
              width: 292px;
              border: 1px solid #e0e0e0;
              height: 42px;
              margin-bottom: 10px;
              text-align: center;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              line-height: 40px;
              color: #b0b0b0;
              box-sizing: border-box;
              cursor: pointer;
              transition: 0.3s;
              &:hover {
                border-color: #ff6700;
                color: #ff6700;
              }
            }
            .cur {
              border-color: #ff6700;
              color: #ff6700;
            }
          }
        }
        // 结算
        .all {
          margin-top: 20px;
          padding: 40px 30px;
          background-color: rgb(250, 250, 250);
          p {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            color: #616161;
          }
          h2 {
            color: #ff6700;
            margin-top: 20px;
            font-weight: 400;
          }
        }
        // 操作
        .opration {
          display: flex;
          margin-top: 25px;
          div {
            height: 52px;
            transition: 0.6s;
            text-align: center;
            line-height: 50px;
            color: white;
            cursor: pointer;
          }
          .o1 {
            width: 300px;
            background-color: #ff6700;
            &:hover {
              background-color: #dd5800;
            }
          }
          .o2 {
            margin-left: 10px;
            background-color: #b0b0b0;
            width: 140px;
            &:hover {
              background-color: #8d8d8d;
            }
          }
        }
        // 承诺
        .promise {
          margin-top: 25px;
          ul {
            display: flex;
            flex-wrap: wrap;
            li {
              color: #b0b0b0;
              margin-left: 10px;
              margin-bottom: 20px;
              font-size: 14px;
              cursor: default;
              i {
                font-size: 22px;
                margin-right: 5px;
              }
            }
          }
        }
      }
    }
  }
  // 尾部
  .footer {
    background-color: #f7f7f7;
    padding-bottom: 50px;
    .footer_container {
      width: 1226px;
      margin: 0 auto;
      h2 {
        font-weight: 400;
        padding: 20px 0;
      }
    }
  }
  .v-enter-active {
    animation: changeImg 2s;
  }
  .v-leave-active {
    animation: changeImg 2s reverse;
  }
  @keyframes changeImg {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>