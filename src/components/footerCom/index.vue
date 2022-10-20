<template>
  <footer>
    <!-- 上半部分 -->
    <div class="footer_top">
      <div class="footer_top_container">
        <!-- 售后 -->
        <nav class="after_sale">
          <ul>
            <li v-for="item in afterSaleData" :key="item.id">
              <i :class="item.icon" aria-hidden="true"></i>
              <span>{{ item.title }}</span>
            </li>
          </ul>
        </nav>
        <!-- 其他服务 -->
        <div class="footer_links">
          <ul class="footer_links_navigation">
            <li v-for="item in serviceData" :key="item.id">
              <ul>
                <li class="title">{{ item.title }}</li>
                <li v-for="item2 in item.services" :key="item2.id">
                  <a href="javascript:;">{{ item2.text }}</a>
                </li>
              </ul>
            </li>
          </ul>
          <div class="contact">
            <p class="phonenumber">{{ callusData.number }}</p>
            <p class="time">
              {{ callusData.from }}-{{ callusData.to }}&nbsp;({{
                callusData.text
              }})
            </p>
            <p class="person">
              <i class="fa fa-commenting" aria-hidden="true"></i>
              <font>人工客服</font>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 下半部分 -->
    <div class="footer_bottom">
      <div class="footer_bottom_container">
        <img src="./imgs/logo-mi2.png" alt="" width="56px" height="56px" />
        <div class="info">
          <ul class="navigation">
            <li v-for="item in NavRow1" :key="item.id">
              <a :href="item.path">{{ item.title }}</a>
            </li>
          </ul>
          <ul class="navigation">
            <li v-for="item in NavRow2" :key="item.id">
              <a :href="item.path">{{ item.title }}</a>
            </li>
          </ul>
          <ul class="detail">
            <li><font>@</font></li>
            <li><a href="javascript:;">mi.com</a></li>
            <li v-for="item in Sites" :key="item.id">
              <a :href="item.path" v-if="item.path">{{ item.text }}</a>
              <span v-else>{{ item.text }}</span>
            </li>
          </ul>
          <ul class="detail">
            <li v-for="item in imgs" :key="item.id">
              <a :href="item.path">
                <img :src="item.img" height="28px" />
              </a>
            </li>
            <li>
              <a :href="gifs[0].path">
                <img :src="gifs[num].img" height="28px" />
                <!-- <img :src="gifs[1].img" height="28px"> -->
              </a>
            </li>
          </ul>
        </div>
      </div>
      <img src="./imgs/slogen.png" height="19px" alt="" class="slogan" />
    </div>
  </footer>
</template>

<script>
import {
  getAfterSaleAPI, //售后接口
  getServiceAPI, //服务接口
  getCallUsAPI, //人工客服接口
  getFooterNavAPI, //尾部导肮
  getFooterSitesAPI, //尾部证书
  getFooterGifsAPI, //尾部图片
} from "@/api";
export default {
  name: "FooterCom",
  data() {
    return {
      afterSaleData: [],
      serviceData: [],
      callusData: {},
      NavRow1: [],
      NavRow2: [],
      Sites: [],
      imgs: [],
      gifs: [{}, {}],
      num: 0,
      timer: null,
    };
  },
  methods: {
    async getAfterSaleData() {
      const { data } = await getAfterSaleAPI();
      this.afterSaleData = data;
    },
    async getServiceData() {
      const { data } = await getServiceAPI();
      this.serviceData = data;
    },
    async getCallUsData() {
      const { data } = await getCallUsAPI();
      this.callusData = data;
    },
    async getNavData() {
      const { data } = await getFooterNavAPI();
      this.NavRow1 = data.slice(0, -3);
      this.NavRow2 = data.slice(-3);
    },
    async getSitesData() {
      const { data } = await getFooterSitesAPI();
      this.Sites = data;
    },
    async getFooterGifsAPI() {
      const { data } = await getFooterGifsAPI();
      this.imgs = data.slice(0, -2);
      this.gifs = data.slice(-2);
    },
  },
  created() {
    this.getAfterSaleData();
    this.getServiceData();
    this.getCallUsData();
    this.getNavData();
    this.getSitesData();
    this.getFooterGifsAPI();
  },
  mounted() {
    this.timer = setInterval(() => {
      if (this.num === 0) {
        this.num = 1;
      } else {
        this.num = 0;
      }
    }, 3000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style scoped lang="less">
footer {
  // 上半部分
  .footer_top {
    background-color: white;
    .footer_top_container {
      width: 1226px;
      margin: 0 auto;
      // 售后
      .after_sale {
        ul {
          display: flex;
          width: 100%;
          padding: 27px 0;
          border-bottom: 1px solid #e0e0e0;
          li {
            width: 245px;
            text-align: center;
            font-size: 16px;
            color: #616161;
            border-right: 1px solid #e0e0e0;
            cursor: pointer;
            transition: 0.3s;
            &:hover {
              color: #ff6700;
            }
            &:last-of-type {
              border: none;
            }
            i {
              font-size: 25px;
              margin-right: 5px;
            }
          }
        }
      }
      // 其他服务
      .footer_links {
        padding: 40px 0;
        width: 1226px;
        margin: 0 auto;
        display: flex;
        .footer_links_navigation {
          padding-left: 160px;
          display: flex;
          li {
            ul {
              width: 160px;
              .title {
                font-size: 14px;
                margin-bottom: 26px;
                color: #424242;
              }
              li {
                margin-top: 10px;
                font-size: 12px;
                a {
                  transition: 0.4s;
                  color: #616161;
                  &:hover {
                    color: #ff6700;
                  }
                }
              }
            }
          }
        }
        .contact {
          width: 251px;
          height: 90px;
          margin-top: 15px;
          text-align: center;
          border-left: 1px solid #e0e0e0;
          p {
            text-align: center;
            margin-bottom: 5px;
          }
          .phonenumber {
            color: #ff6700;
            font-size: 22px;
          }
          .time {
            font-size: 12px;
            color: #616161;
          }
          .person {
            text-align: center;
            width: 118px;
            height: 28px;
            border: 1px solid #ff6700;
            font-size: 12px;
            color: #ff6700;
            line-height: 25px;
            margin-left: 70px;
            margin-top: 10px;
            cursor: pointer;
            transition: 0.6s;
            &:hover {
              color: white;
              background-color: #ff6700;
            }
          }
        }
      }
    }
  }
  // 下半部分
  .footer_bottom {
    width: 100%;
    background-color: #fafafa;
    font-size: 12px;
    .footer_bottom_container {
      width: 1226px;
      height: 200px;
      padding: 30px 0;
      margin: 0 auto;
      display: flex;
      .info {
        margin-left: 20px;
        .navigation {
          display: flex;
          margin-bottom: 5px;
          flex-wrap: wrap;
          li {
            padding: 0 5px;
            border-right: 1px solid #9e9e9e;
            &:last-of-type {
              border: none;
            }
            a {
              color: #757575;
              &:hover {
                color: #ff6700;
              }
            }
          }
        }
      }
      .detail {
        display: flex;
        flex-wrap: wrap;
        width: 650px;
        margin-bottom: 5px;
        li {
          margin-right: 3px;
          font {
            color: #b0b0b0;
          }
          span {
            color: #b0b0b0;
          }
          a {
            color: #b0b0b0;
            &:hover {
              color: #ff6700;
            }
          }
        }
      }
    }
    .slogan {
      margin-left: 50%;
      transform: translateX(-50%);
      margin-top: 10px;
      margin-bottom: 30px;
    }
  }
}
</style>