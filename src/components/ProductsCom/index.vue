<template>
  <div class="product_main">
    <div class="product_main_container">
      <!-- 中间宣传广告 -->
      <img :src="publicImgs[0].img" alt="" class="product1" @click="toBuy(publicImgs[0].name)" />
      <!-- 手机 -->
      <productPublicityCom :data="mobile_phone_data" p="Xiaomi MIX Fold 2" type="手机"></productPublicityCom>
      <!-- 智能穿戴 -->
      <productPublicityCom :data="technology_wear_data" p="Redmi K50 至尊版" type="手机"></productPublicityCom>
      <!-- 笔记本 平板 -->
      <productPublicityCom :data="computer_ipad_data" p="Xiaomi Book Pro 14 锐龙版" type="电脑"></productPublicityCom>
      <!-- 家电 -->
      <productPublicityCom :data="home_appliances_data" p="Redmi 智能电视X55 2022" type="电视"></productPublicityCom>
      <!-- 中间宣传广告 -->
      <img :src="publicImgs[1].img" alt="" class="product1" @click="toBuy(publicImgs[1].name)"/>
      <!-- 生活电器 -->
      <productPublicityCom
        :data="domestic_appliance_data"
        p="米家扫地机器人1T"
        type="洗衣机"
      ></productPublicityCom>
      <!-- 中间宣传广告 -->
      <img :src="publicImgs[2].img" alt="" class="product1" @click="toBuy(publicImgs[2].name)"/>
      <!-- 厨房电器 -->
      <productPublicityCom :data="kitchen_appliances_data" p="米家扫地机器人1T" type="冰箱"></productPublicityCom>
      <!-- 智能家居 -->
      <productPublicityCom :data="technology_home_data" p="米家扫地机器人1T" type="洗衣机"></productPublicityCom>
      <!-- 运动出行 -->
      <productPublicityCom :data="sport_data" p="米家扫地机器人1T" type="洗衣机"></productPublicityCom>
      <!-- 中间宣传广告 -->
      <img :src="publicImgs[3].img" alt="" class="product1" @click="toBuy(publicImgs[3].name)"/>
      <!-- 日用百货 -->
      <productPublicityCom :data="daily_necessities_data" p="米家扫地机器人1T" type="冰箱"></productPublicityCom>
      <!-- 视频 -->
      <VideoCom></VideoCom>
    </div>
  </div>
</template>

<script>
import productPublicityCom from "@/components/productPublicity";
import {
  getDomesticApplianceAPI,
  getMobilePhoneAPI,
  getTechnologyWearAPI,
  getComputerIpadAPI,
  getHomeAppliancesAPI,
  getKitchenAppliancesAPI,
  getTechnologyHomeAPI,
  getSportAPI,
  getDailyNecessitiesAPI,
  getPublicImgsAPI,
} from "@/api";
import VideoCom from "../videoCom/index.vue";
export default {
  name: "ProductsCom",
  data() {
    return {
      domestic_appliance_data: null, //生活电器
      mobile_phone_data: null, //手机
      technology_wear_data: null, //智能穿戴
      computer_ipad_data: null, //笔记本|平板
      home_appliances_data: null, //家电
      kitchen_appliances_data: null, //厨房电器
      technology_home_data: null, //智能家居
      sport_data: null, //运动出行
      daily_necessities_data: null, //日用百货
      publicImgs: [{}, {}, {}, {}], //广告图片
    };
  },
  components: {
    productPublicityCom,
    VideoCom
},
  methods: {
    async getData(API) {
      const { data } = await API();
      return data;
    },
    toBuy(name){
      this.$router.push({
        path:"/shop/buy",
        query:{
          product:name
        }
      })
    }
  },
  created() {
    // 获取商品原始数据
    //#region
    // 生活电器
    this.getData(getDomesticApplianceAPI).then((res) => {
      this.domestic_appliance_data = res;
    });
    // 手机
    this.getData(getMobilePhoneAPI).then((res) => {
      this.mobile_phone_data = res;
    });
    // 智能穿戴
    this.getData(getTechnologyWearAPI).then((res) => {
      this.technology_wear_data = res;
    });
    // 笔记本|平板
    this.getData(getComputerIpadAPI).then((res) => {
      this.computer_ipad_data = res;
    });
    // 家电
    this.getData(getHomeAppliancesAPI).then((res) => {
      this.home_appliances_data = res;
    });
    // 厨房电器
    this.getData(getKitchenAppliancesAPI).then((res) => {
      this.kitchen_appliances_data = res;
    });
    // 智能家居
    this.getData(getTechnologyHomeAPI).then((res) => {
      this.technology_home_data = res;
    });
    // 运动出行
    this.getData(getSportAPI).then((res) => {
      this.sport_data = res;
    });
    // 日用百货
    this.getData(getDailyNecessitiesAPI).then((res) => {
      this.daily_necessities_data = res;
    });
    //#endregion
    // 获取广告图片
    this.getData(getPublicImgsAPI).then((res) => {
      this.publicImgs = res;
    });
  },
};
</script>

<style scoped lang="less">
.product_main {
  width: 100%;
  background-color: #f5f5f5;
  .product_main_container {
    width: 1226px;
    margin: 0 auto;
    padding: 4px 0 12px 0;
    // 广告图片
    .product1 {
      cursor: pointer;
      width: 100%;
      height: 120px;
      margin-top: 20px;
    }
    // 商品宣传组件
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
}
</style>