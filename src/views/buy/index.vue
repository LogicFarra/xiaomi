<template>
  <div class="buy">
    <!-- 导航栏 -->
    <nav class="nav_bar">
      <div class="nav_bar_container pabulic_width">
        <h2>Xiaomi Watch S1</h2>
        <ul>
          <li><a href="javascript:;">参数页</a></li>
          <li><a href="javascript:;">F码通道</a></li>
          <li><a href="javascript:;">咨询客服</a></li>
          <li><a href="javascript:;">用户评价</a></li>
        </ul>
      </div>
    </nav>
    <!-- 登录提醒 -->
    <div class="login_notis">
      <div class="login_notis_container pabulic_width">
        <p>
          为方便您购买,请提前登录&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="javascript:;">立即登录</a>&nbsp;
          <i class="fa fa-times" aria-hidden="true"></i>
        </p>
      </div>
    </div>
    <!-- 商品 -->
    <div class="product">
      <div class="product_container pabulic_width">
        <!-- 左侧轮播图 -->
        <div class="img_left">
          <img
            src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1660632574.59773469.png"
            width="560px"
          />
          <!-- 控制轮播图的左侧按钮 -->
          <div class="switch_btn" style="left: 0">
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </div>
          <!-- 控制轮播图的右侧按钮 -->
          <div class="switch_btn" style="right: 50px">
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </div>
          <!-- 切换图片的方块 -->
          <div class="switch_squear">
            <ul>
              <li class="cur"></li>
              <li></li>
            </ul>
          </div>
        </div>
        <!-- 右侧商品盒子 -->
        <div class="message_right">
          <!-- 简介 -->
          <div class="title">
            <h2 class="title_name">Redmi Note 11 Pro</h2>
            <p class="title_explain">
              天玑8100｜144Hz高配LCD屏幕｜6400万像素｜VC液冷散热
            </p>
            <p class="title_sale">小米自营</p>
            <p class="title_price">
              <font class="cur_price">1899元</font>
              <del>1999元</del>
            </p>
          </div>
          <!-- 赠品 -->
          <div class="gifts">
            <span>赠品</span>
            <font>价值99元Xiaomi 胶囊耳机x1，赠完即止</font>
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
          <div class="version">
            <p>选择版本</p>
            <ul>
              <li class="cur">8GB+128GB</li>
              <li>8GB+128GB</li>
              <li>8GB+128GB</li>
            </ul>
          </div>
          <!-- 颜色 -->
          <div class="color">
            <p>选择颜色</p>
            <ul>
              <li class="cur">奶盐白</li>
              <li>奶盐白</li>
              <li>奶盐白</li>
              <li>奶盐白</li>
            </ul>
          </div>
          <!-- 结算 -->
          <div class="all">
            <p>
              <font>Redmi Note 11 Pro</font>
              <font>1899元</font>
            </p>
            <h2>总计: 99元</h2>
          </div>
          <!-- 操作 -->
          <div class="opration">
            <div class="o1">加入购物车</div>
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
export default {
  name: "buy",
  data() {
    return {
      a: this.$route.query.id,
    };
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
    box-shadow: 0 5px 5px rgba(154, 154, 154, 0.511);
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
          span {
            padding: 3px 25px;
            background-color: #ff6700;
            font-size: 14px;
            color: white;
          }
          font {
            font-size: 14px;
            margin-left: 10px;
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
    .footer_container{
      width: 1226px;
      margin:0 auto;
      h2 {
      font-weight: 400;
      padding: 20px 0;
    }
    }
  }
}
</style>