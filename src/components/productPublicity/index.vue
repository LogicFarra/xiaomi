<template>
  <div class="product_component">
    <!-- 标题 -->
    <div class="title">
      <span style="font-size: 22px">{{ title }}</span>
      <!-- 有多个二级菜单时显示 -->
      <div>
        <p
          class="normal"
          :class="[item.id === curType ? 'cur' : '']"
          v-for="item in rightProducts"
          :key="item.id"
          @mouseenter="titleHover(item.id)"
          v-show="!titleNum"
        >
          <font>{{ item.type }}</font>
        </p>
      </div>
      <!-- 只有一个菜单时显示 -->
      <p class="normal" v-show="titleNum">
        <font>查看更多</font>
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </p>
    </div>
    <!-- 内容 -->
    <div class="product_container">
      <ul class="product_container_left">
        <!-- 左侧有两张图片时 -->
        <ul class="two_picture" v-show="leftSize === 2">
          <li v-for="item in leftProducts" :key="item.id">
            <img :src="item.img" />
          </li>
        </ul>
        <!-- 左侧只有一张图片时 -->
        <li v-show="leftSize === 1" v-for="item in leftProducts" :key="item.id">
          <img :src="item.img" alt="" />
        </li>
      </ul>
      <ul class="product_container_right">
        <!-- 大展示框 -->
        <li v-for="item in curProducts" :key="item.id">
          <img :src="item.img" width="160px" height="160px" />
          <h3>{{ item.name }}</h3>
          <p class="desc">{{ item.explain }}</p>
          <p class="price">
            <span class="num">{{ item.price }}</span
            ><del>{{ item.delPrice }}</del>
          </p>
        </li>
        <div class="more">
          <!-- 小宣传图 -->
          <li class="small_part" v-show="smallProduct.show">
            <img :src="smallProduct.data.img" width="80px" height="80px" />
            <h3>{{ smallProduct.data.name }}</h3>
            <p class="price">
              <span class="num">{{ smallProduct.data.price }}</span>
            </p>
          </li>
          <!-- 浏览更多 -->
          <li class="see_more" v-show="showMore.show">
            <p>浏览更多</p>
            <small>{{ showMore.data }}</small>
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "productPublicityCom",
  data() {
    return {
      title: "", //组件标题
      leftProducts: [], //组件左侧数据
      rightProducts: [], //组件右侧数据
      curType: "0", //当前展示的商品类型
      smallProduct: {
        //小展示栏
        data: {},
        show: false,
      },
      showMore: {
        data: "",
        show: false,
      },
      curProducts: [],
    };
  },
  computed: {
    //   组件左侧图片数量
    leftSize() {
      if (this.leftProducts.length === 1) {
        return 1;
      } else {
        return 2;
      }
    },
    // 二级菜单的数量
    titleNum() {
      if (this.rightProducts.length > 1) return false;
      return true;
    },
  },
  methods: {
    // 初始化数据
    initData() {
      this.title = this.data.title;
      this.leftProducts = this.data.firMenu;
      this.rightProducts = this.data.secMenu;
      this.sliceData();
    },
    // 筛查数据
    sliceData() {
      // 拿到类型
      let title = this.rightProducts[this.curType].type;
      // 拿到当前类型所有数据
      let message = this.rightProducts[this.curType].products;
      // 拿到数据的长度
      let length = message.length;
      // 如果长度刚好等于8,就全部用大展示框展示,"查看更多"和"小展示框"保持隐藏
      if (length === 8) {
        this.curProducts = message;
        this.clearsmallProduct();
        this.clearshowMore();
      }
      // 如果长度小于8,也全部用大展示框展示,获取到当前类型的字符串,赋值给"查看更多",并显示"查看更多"
      else if (length < 8) {
        this.curProducts = message;
        this.showMore = {
          data: title,
          show: true,
        };
        this.clearsmallProduct();
      }
      // 如果长度大于8,返回前七条数据用于大展示框,截取第八条赋值给小展示框展示,并获取类型赋值给"查看更多"显示
      else if (length > 8) {
        let last = message[7];
        this.curProducts = message.slice(0, 7);
        this.smallProduct = {
          data: last,
          show: true,
        };
        this.showMore = {
          data: title,
          show: true,
        };
      }
    },
    // 分类标签被覆盖回调
    titleHover(index) {
      this.curType = index;
    },
    // 清空小展示栏
    clearsmallProduct() {
      this.smallProduct = {
        data: "",
        show: false,
      };
    },
    // 清空"查看更多"
    clearshowMore() {
      this.showMore = {
        data: "",
        show: false,
      };
    },
  },
  watch: {
    curType(newvalue) {
      this.sliceData();
    },
    data(newvalue, oldvalue) {
      this.initData();
    },
  },
  // 接收原始数据
  props: ["data"],
};
</script>

<style scoped lang="less">
.product_component {
  margin-top: 20px;
  margin-bottom: 20px;
  // 标题
  .title {
    width: 100%;
    height: 58px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .normal {
      cursor: pointer;
      display: flex;
      color: #424242;
      transition: 0.3s;
      &:hover {
        color: #ff6700;
      }
      &:hover > i {
        background-color: #ff6700;
      }
      i {
        transition: 0.3s;
        font-size: 10px;
        width: 20px;
        height: 20px;
        padding: 4.5px 5px 5px 7px;
        border-radius: 100px;
        background-color: #b0b0b0;
        margin-left: 5px;
        color: white;
      }
    }
    .cur {
      color: #ff6700;
      &::before {
        content: "";
        width: 100%;
        height: 2px;
        background-color: #ff6700;
        position: absolute;
        bottom: -5px;
        left: 0;
      }
    }
    div {
      display: flex;
      p {
        margin-left: 20px;
        position: relative;
        &:hover {
          &::before {
            content: "";
            width: 100%;
            height: 2px;
            background-color: #ff6700;
            position: absolute;
            bottom: -5px;
            left: 0;
          }
        }
      }
    }
  }
  // 内容
  .product_container {
    width: 100%;
    height: 614px;
    display: flex;
    // 左侧
    .product_container_left {
      width: 234px;
      height: 100%;
      // 有两张图片时
      .two_picture {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        li {
          height: 300px;
        }
      }
      li {
        transition: 0.5s;
        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 3px 20px silver;
        }
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    // 右侧
    .product_container_right {
      width: 992px;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
      li {
        cursor: pointer;
        padding: 20px 0;
        width: 234px;
        height: 300px;
        margin-left: 14px;
        background-color: white;
        transition: 0.5s;
        margin-bottom: 14px;
        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 3px 20px silver;
        }
        img {
          margin: 0 37px 18px 37px;
        }
        h3 {
          text-align: center;
          font-size: 14px;
          font-weight: 400;
          margin: 0 10px 2px 10px;
        }
        .desc {
          text-align: center;
          font-size: 12px;
          color: #b0b0b0;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          padding: 0 10px 10px 10px;
        }
        .price {
          text-align: center;
          font-size: 14px;
          padding: 0 10px 14px 10px;
          color: #ff6700;
          del {
            margin-left: 10px;
            color: #b0b0b0;
            position: relative;
            &::after {
              content: "";
              width: 100%;
              height: 2px;
              background-color: #b0b0b0;
              position: absolute;
              top: 9px;
              left: 0;
            }
          }
        }
      }
      .more {
        width: 248px;
        height: 300px;
        // 浏览更多
        .see_more {
          height: 143px;
          padding-top: 50px;
          position: relative;
          p {
            font-size: 18px;
            margin-left: 30px;
          }
          small {
            color: #616161;
            margin-left: 30px;
          }
          i {
            display: block;
            position: absolute;
            right: 30px;
            top: 45px;
            width: 48px;
            height: 48px;
            border: 3px solid #ff6700;
            text-align: center;
            font-size: 25px;
            padding-top: 7px;
            border-radius: 100px;
            color: #ff6700;
          }
        }
        // 小宣传图
        .small_part {
          height: 143px;
          margin-bottom: 15px;
          padding-top: 40px;
          padding-left: 15px;
          position: relative;
          img {
            position: absolute;
            right: -20px;
            top: 30px;
          }
          h3 {
            width: 94px;
            margin-bottom: 5px;
            text-align: left;
          }
          .price {
            text-align: left;
            padding-left: 15px;
          }
        }
      }
    }
  }
}
</style>