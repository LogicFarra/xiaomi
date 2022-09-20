<template>
  <div class="cart">
    <header>
      <div class="header_container">
        <img src="@/assets/logo-mi2.png" alt="" />
        <h2>我的购物车</h2>
        <small>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</small>
        <ul>
          <li @click="jumpPage(true)" class="login">登录</li>
          <li>|</li>
          <li @click="jumpPage(false)" class="login">注册</li>
        </ul>
      </div>
    </header>
    <main>
      <div class="main_container">
        <div class="product_list">
          <ul class="list_header">
            <li class="row1">
              <div class="col1">
                <input type="checkbox" :checked="all" @change="allChange" />
                <font>全选</font>
              </div>
              <div class="img"></div>
              <div class="col2"><font>商品名称</font></div>
              <div class="col3"><font>单价</font></div>
              <div class="col4"><font>数量</font></div>
              <div class="col5"><font>小计</font></div>
              <div class="col6"><font>操作</font></div>
            </li>
            <li class="row2 row1" v-for="item in initData" :key="item.index">
              <div class="col1">
                <input
                  type="checkbox"
                  :checked="item.chose"
                  @change="itemChange(item.index)"
                />
              </div>
              <div class="img">
                <img :src="item.img" alt="" width="80px" />
              </div>
              <div class="col2">
                {{ item.product }} {{ item.version }} {{ item.disposition }}
                {{ item.color }}
              </div>
              <div class="col3">{{ item.price }}元</div>
              <div class="col4">
                <div class="counter">
                  <button @click="operat(true, item.index)">-</button>
                  <input type="text" :value="item.count" />
                  <button @click="operat(false, item.index)">+</button>
                </div>
              </div>
              <div class="col5">{{ item.price * item.count }}元</div>
              <div class="col6" @click="deleteFn(item)">
                <i class="fa fa-times" aria-hidden="true"></i>
              </div>
            </li>
          </ul>
        </div>
        <div class="settlement">
          <ul>
            <li @click="continueShopping" class="continue_shopping">
              继续购物
            </li>
            <li>|</li>
            <li>
              已选择<font>{{ productNum }}</font
              >件
            </li>
          </ul>
          <div class="purchase" :style="{ background: bgColor, color: color }">
            <font>去结算</font>
            <div v-show="notis">请勾选需要结算的商品</div>
          </div>
          <span
            >合计:<font>{{ totle }}</font
            >元</span
          >
        </div>
      </div>
    </main>
    <RecommendCom></RecommendCom>
    <FooterCom></FooterCom>
  </div>
</template>

<script>
import RecommendCom from "@/components/recommendCom/index.vue";
import FooterCom from "@/components/footerCom/index.vue";
import {
  getShopCarAPI,
  deleteShopCarAPI,
  searchShopCarAPI,
  addProductAPI,
} from "@/api";
export default {
  name: "cart",
  components: { RecommendCom, FooterCom },
  data() {
    return {
      initData: [
        {
          produce: "",
          disposition: "",
          version: "",
          color: "",
          price: "",
          img: "",
          chose: "",
        },
      ],
      totle: 0,
      all: false,
      bgColor: "#bababa",
      color: "#838383",
      notis: true,
    };
  },
  computed: {
    productNum() {
      let newData = this.initData.filter((v) => {
        return v.chose === true;
      });
      let a = 0;
      newData.forEach((element) => {
        a += element.count;
      });
      return a;
    },
  },
  methods: {
    // 向服务器获取初始数据
    async getShopCarData() {
      const { data } = await getShopCarAPI();
      this.initData = this.filterData(data);
    },
    // 初始化初始数据
    filterData(data) {
      for (let i = 0; i < data.length; i++) {
        let { product, disposition, version, color } = data[i];
        data[i].count = 1;
        data[i].index = i;
        data[i].chose = false;
        data[i].price = parseInt(data[i].price);
        for (let j = i + 1; j < data.length; j++) {
          let {
            product: p2,
            disposition: d2,
            version: v2,
            color: c2,
          } = data[j];
          if (
            product === p2 &&
            disposition === d2 &&
            version === v2 &&
            color === c2
          ) {
            data[i].count++;
            data.splice(j, 1);
            j--;
          }
        }
      }
      return data;
    },
    // 商品数量的加减
    async operat(status, index) {
      let a = this.initData[index]
      let addData = {}
      if (a.count >= 1) {
        if (status) {
          a.count--
          if(a.count >= 1){
            let choseStatus = a.chose
            await deleteShopCarAPI(a.id)
            await this.getShopCarData()
            this.initData[index].chose = choseStatus

          }
        }else{
          a.count++
          addData = {
            id:Math.random(),
            product:a.product,
            disposition:a.disposition,
            version:a.version,
            color:a.color,
            price:a.price,
            img:a.img
          }
          await addProductAPI(addData)
        }
        if (a.chose) {
          status ? (this.totle -= a.price) : (this.totle += a.price);
        }
        if (a.count === 0) {
          a.count = 1;
          a.chose ? (this.totle += a.price) : false;
        }
      }
    },
    // 商品选择框点击事件
    itemChange(index) {
      let a = this.initData[index];
      a.chose = !a.chose;
      let money = a.count * a.price;
      a.chose ? (this.totle += money) : (this.totle -= money);
      if (!a.chose) {
        this.all = false;
      } else {
        let a = this.initData.filter((v) => {
          return v.chose === true;
        });
        a.length === this.initData.length ? (this.all = true) : false;
      }
    },
    // 全选框点击事件
    allChange() {
      this.all = !this.all;
      if (this.all === false) {
        this.initData.map((v) => {
          v.chose = false;
          this.totle = 0;
        });
      } else {
        this.initData.map((v) => {
          if (v.chose === false) {
            v.chose = true;
            this.totle += v.count * v.price;
          }
        });
      }
    },
    // 删除按钮点击事件
    async deleteFn(item) {
      let { data } = await searchShopCarAPI(item)
      let newData = data.map((v) => {
        return v.id;
      })
      for (let i = 0; i < newData.length; i++) {
        deleteShopCarAPI(newData[i]);
      }
      this.getShopCarData();
    },
    // 登录和注册按钮点击事件
    jumpPage(status) {
      status === true
        ? this.$router.push("/login/signin")
        : this.$router.push("/login/register");
    },
    // 继续购物按钮点击事件
    continueShopping() {
      this.$router.push("/");
    },
  },
  watch: {
    totle(newval) {
      if (newval !== 0) {
        this.bgColor = "#ff6700";
        this.color = "white";
        this.notis = false;
      } else {
        this.bgColor = "#bababa";
        this.color = "#838383";
        this.notis = true;
      }
    },
  },
  created() {
    this.getShopCarData();
  },
};
</script>

<style scoped lang="less">
.cart {
  header {
    background-color: #f5f5f5;
    background-color: rgb(255, 255, 255);
    border-bottom: 2px solid #ff6700;
    height: 100px;
    box-sizing: content-box;
    .header_container {
      width: 1226px;
      margin: 0 auto;
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
      small {
        color: #838383;
        line-height: 110px;
      }
      ul {
        float: right;
        line-height: 100px;
        li {
          float: left;
          font-size: 14px;
          color: #757575;
          padding: 0 5px;
          cursor: pointer;
        }
        .login {
          &:hover {
            color: #ff6700;
          }
        }
      }
    }
  }
  main {
    background-color: #f5f5f5;
    padding: 30px 0;
    .main_container {
      width: 1226px;
      margin: 0 auto;
      .product_list {
        background-color: white;
        .list_header {
          .row1 {
            display: flex;
            align-items: center;
            padding-right: 26px;
            height: 70px;
            font-size: 14px;
            border-bottom: 1px solid #bfbfbf;
            .col {
              height: 100%;
              line-height: 70px;
            }
            .col1 {
              width: 110px;
              height: 100%;
              padding: 22px 20px;
              font {
                margin-right: 5px;
                margin-top: 2px;
                float: right;
              }
              input {
                width: 20px;
                height: 20px;
                background-color: #ff6700;
              }
            }
            .img {
              width: 120px;
              height: 100%;
            }
            .col2 {
              width: 380px;
              height: 100%;
              line-height: 70px;
            }
            .col3 {
              width: 158px;
              text-align: center;
              height: 100%;
              line-height: 70px;
            }
            .col4 {
              width: 200px;
              height: 100%;
              text-align: center;
              line-height: 70px;
            }
            .col5 {
              width: 150px;
              text-align: center;
              height: 100%;
              line-height: 70px;
            }
            .col6 {
              width: 100px;
              text-align: center;
              height: 100%;
              line-height: 70px;
            }
          }
          .row2 {
            padding: 15px 26px 15px 0;
            box-sizing: content-box;
            .col2 {
              font-size: 18px;
            }
            .col3 {
              font-size: 15px;
            }
            .col4 {
              .counter {
                margin: 10px auto;
                width: 150px;
                height: 40px;
                border: 1px solid #757575;
                display: flex;
                button {
                  width: 40px;
                  height: 40px;
                  border: none;
                  cursor: pointer;
                  background-color: transparent;
                  transition: 0.3s;
                  &:hover {
                    background-color: #8383835b;
                  }
                }
                input {
                  width: 70px;
                  height: 38px;
                  text-align: center;
                  border: none;
                  outline: none;
                }
              }
            }
            .col5 {
              color: #ff6700;
              font-size: 15px;
            }
            .col6 {
              i {
                padding: 5px 6px;
                border-radius: 100%;
                color: #757575;
                transition: 0.3s;
                cursor: pointer;
                &:hover {
                  background-color: red;
                  color: white;
                }
              }
            }
          }
        }
      }
      .settlement {
        height: 50px;
        width: 1226px;
        background-color: white;
        margin-top: 20px;
        ul {
          margin-left: 30px;
          height: 50px;
          float: left;
          li {
            float: left;
            line-height: 50px;
            margin-right: 10px;
            font-size: 14px;
            color: #757575;
            font {
              color: #ff6700;
            }
          }
          .continue_shopping {
            cursor: pointer;
            &:hover {
              color: #ff6700;
            }
          }
        }
        span {
          height: 50px;
          line-height: 50px;
          float: right;
          color: #ff6700;
          font {
            font-size: 24px;
          }
        }
        .purchase {
          height: 100%;
          width: 200px;
          float: right;
          text-align: center;
          line-height: 50px;
          background-color: #bababa;
          color: #838383;
          font-size: 18px;
          margin-left: 40px;
          position: relative;
          cursor: pointer;
          div {
            width: 200px;
            height: 50px;
            background-color: white;
            border: 1px solid #ff6700;
            font-size: 14px;
            color: #ff6700;
            position: absolute;
            top: -60px;
            &::before {
              content: "";
              width: 10px;
              height: 10px;
              background-color: white;
              border-right: 1px solid #ff6700;
              border-bottom: 1px solid #ff6700;
              position: absolute;
              left: 50%;
              bottom: -10px;
              transform: rotate(45deg) translate(-50%);
            }
          }
        }
      }
    }
  }
}
</style>