<template>
  <main>
    <div class="main_container">
      <h1>买购物车中商品的人还买了</h1>
      <ul>
        <li>
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a1f177c4c5467ceb00c40c91222e40c.jpg?thumb=1&w=270&h=270&f=webp&q=90"
            alt=""
          />
          <p class="product">米家负离子便携吹风机H100</p>
          <p class="price">99元</p>
          <p class="recommend">29.2万人好评</p>
          <div>加入购物车</div>
        </li>
        <li>
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a1f177c4c5467ceb00c40c91222e40c.jpg?thumb=1&w=270&h=270&f=webp&q=90"
            alt=""
          />
          <p class="product">米家负离子便携吹风机H100</p>
          <p class="price">99元</p>
          <p class="recommend">29.2万人好评</p>
          <div>加入购物车</div>
        </li>
        <li>
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a1f177c4c5467ceb00c40c91222e40c.jpg?thumb=1&w=270&h=270&f=webp&q=90"
            alt=""
          />
          <p class="product">米家负离子便携吹风机H100</p>
          <p class="price">99元</p>
          <p class="recommend">29.2万人好评</p>
          <div>加入购物车</div>
        </li>
        <li>
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a1f177c4c5467ceb00c40c91222e40c.jpg?thumb=1&w=270&h=270&f=webp&q=90"
            alt=""
          />
          <p class="product">米家负离子便携吹风机H100</p>
          <p class="price">99元</p>
          <p class="recommend">29.2万人好评</p>
          <div>加入购物车</div>
        </li>
        <li>
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a1f177c4c5467ceb00c40c91222e40c.jpg?thumb=1&w=270&h=270&f=webp&q=90"
            alt=""
          />
          <p class="product">米家负离子便携吹风机H100</p>
          <p class="price">99元</p>
          <p class="recommend">29.2万人好评</p>
          <div>加入购物车</div>
        </li>
        <li>
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a1f177c4c5467ceb00c40c91222e40c.jpg?thumb=1&w=270&h=270&f=webp&q=90"
            alt=""
          />
          <p class="product">米家负离子便携吹风机H100</p>
          <p class="price">99元</p>
          <p class="recommend">29.2万人好评</p>
          <div>加入购物车</div>
        </li>
        <li>
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a1f177c4c5467ceb00c40c91222e40c.jpg?thumb=1&w=270&h=270&f=webp&q=90"
            alt=""
          />
          <p class="product">米家负离子便携吹风机H100</p>
          <p class="price">99元</p>
          <p class="recommend">29.2万人好评</p>
          <div>加入购物车</div>
        </li>
        <li>
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a1f177c4c5467ceb00c40c91222e40c.jpg?thumb=1&w=270&h=270&f=webp&q=90"
            alt=""
          />
          <p class="product">米家负离子便携吹风机H100</p>
          <p class="price">99元</p>
          <p class="recommend">29.2万人好评</p>
          <div>加入购物车</div>
        </li>
        <li>
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a1f177c4c5467ceb00c40c91222e40c.jpg?thumb=1&w=270&h=270&f=webp&q=90"
            alt=""
          />
          <p class="product">米家负离子便携吹风机H100</p>
          <p class="price">99元</p>
          <p class="recommend">29.2万人好评</p>
          <div>加入购物车</div>
        </li>
        <li>
          <img
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a1f177c4c5467ceb00c40c91222e40c.jpg?thumb=1&w=270&h=270&f=webp&q=90"
            alt=""
          />
          <p class="product">米家负离子便携吹风机H100</p>
          <p class="price">99元</p>
          <p class="recommend">29.2万人好评</p>
          <div>加入购物车</div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  name: "recommendCom",
};
</script>

<style scoped lang="less">
main {
  padding: 30px 0;
  .main_container {
    width: 1226px;
    margin: 0 auto;
    h1 {
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
      margin-top: 30px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        text-align: center;
        width: 234px;
        height: 300px;
        background-color: white;
        position: relative;
        overflow: hidden;
        margin-top: 15px;
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
        div {
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
          div {
            top: 255px;
          }
        }
      }
    }
  }
}
</style>