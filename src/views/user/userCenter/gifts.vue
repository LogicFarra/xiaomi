<template>
  <div class="main">
    <UserItem :title="title" :nav="nav" :index.sync="index"></UserItem>
    <div class="main_container" v-if="index == 1">
      <div class="container">
        <div class="input_item">
          <label for="pass">密码:</label>
          <input type="text" placeholder="请填写礼品卡密码" />
        </div>
        <div class="input_item">
          <label for="check">验证码:</label>
          <input type="text" placeholder="请输入验证码" />
          <img
            src="https://captcha.hd.mi.com/captcha?style=chinese&service=order.mi.com&sessionId=0&_0.2214977490171639"
            alt=""
          />
          <span>换一张</span>
        </div>
        <div class="input_item">
          <button>绑定礼品卡</button>
        </div>
      </div>
      <div class="message">
        <div class="message_item" v-for="(item,key) in messages1" :key="key">
          <strong>{{item.title}}</strong>
          <p v-for="item2 in item.p" :key="item2">{{item2}}</p>
        </div>
      </div>
    </div>
    <div class="main_container" v-else-if="index == 2">
      <div class="none">
        <UserNoneMsg message="暂无记录"></UserNoneMsg>
      </div>
      <div class="message">
        <div class="message_item">
          <strong>有效期内重复使用，可查询消费记录</strong>
          <p>您可以在礼品卡的有效期内，不限次数重复使用。如果您对余额有疑问，可以在我的礼品卡里查询到当前礼品卡的消费记录。</p>
        </div>
        <div class="message_item">
          <strong>礼品卡只能绑定一次，不可解绑</strong>
          <p>考虑到礼品卡余额的安全问题，礼品卡只能绑定一次，绑定以后不可解绑。</p>
        </div>
      </div>
    </div>
    <div class="main_container" v-else>
      <div class="message s_message">
        <div class="message_item">
          <strong>Q：为什么提示礼品卡未激活或已绑定？</strong>
          <p>为了保证在运输过程中的安全，礼品卡在客户收到以后，需点击“确认收货”以激活，激活以后便可以使用。每个礼品卡密码只能被绑定一次，其他账户将不能再绑定该密码。如果您遇上上述问题，可联系赠予您礼品卡的朋友，是否已确认收货，或者是否已将该卡同时赠予了他人。</p>
        </div>
        <div class="message_item">
          <strong>Q:为什么我礼品卡里有100元，买50元的东西还需要另外支付10元物流费？</strong>
          <p>如果您的订单不包邮，物流费需通过在线支付的方式支付，礼品卡暂不支持抵扣物流费。</p>
        </div>
        <div class="message_item">
          <strong>Q：用礼品卡购物，产生退货怎么办？</strong>
          <p>使用礼品卡购物后发生退款的，退款金额将原路返还，系统优先返还礼品卡支付金额，即礼品卡支付的部分金额退还至原有礼品卡，其余部分原路返还，另有规定的除外。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserItem from "@/components/userItem/index.vue";
import UserNoneMsg from "@/components/userNoneMsg/index.vue";
export default {
  name: "cengifts",
  components: { UserItem, UserNoneMsg },
  data() {
    return {
      nav: [
        {
          title: "绑定礼品卡",
          index: 1,
        },
        {
          title: "我的礼品卡",
          index: 2,
        },
        {
          title: "常见问题",
          index: 3,
        },
      ],
      index: 1,
      title:"我的礼品卡",
      messages1:[
        {
          title:"礼品卡使用前需先绑定，确认已设置安全手机",
          p:[
            "无论是电子礼品卡还是实物礼品卡，在绑定时只需要输入礼品卡密码，点击确认即可绑定。",
            "礼品卡在使用之前,需要与小米ID绑定,每个礼品卡密码只可绑定一次，绑定后不可解绑，礼品卡内金额无需一次用完，您可以在有效期内不限次数重复使用。",
            "礼品卡在绑定之前，请确认您的小米ID已经设置了安全手机，为保证您的资金安全，在使用礼品卡消费时，需要向您的安全手机发送验证码，验证通过以后才可以使用。"
          ]
        },
        {
          title:"下单时选择礼品卡即可抵扣，暂不支持抵扣物流费",
          p:[
            "您可以像以前一样在小米网选购商品，在订单结算时，填写完地址、电话等信息后，在页面的下方点击使用礼品卡，勾选您希望用来支付的礼品卡，提交订单并支付余款就可完成交易。",
            "在小米网购买商品，满69元免运费（大家电及其他特殊说明情况除外），礼品卡暂不支持抵扣物流费，如果订单未满69元，需要支付10元运费，并通过在线支付的方式支付。"
          ]
        },
        {
          title:"礼品卡的使用范围是什么？",
          p:[
            " 礼品卡可用于购买小米商城自营实物商品（有品商品除外），暂不支持抵扣物流费，暂不支持购买小米移动电话卡、保险等虚拟商品/服务、合约机及其他第三方发货的商品。",
            "小米商城（商城配送）及部分线下小米之家门店可以在购买上述商品时选择礼品卡支付使用，暂不支持门店闪送和到店自取。",
            "*注意：具体是否可用请以订单支付页面显示或门店店员告知为准。"
          ]
        }
      ]
    };
  },
  mounted() {
    this.$refs.item.$on("sendIndex", index => this.index = index);
  },
  beforeDestroy() {
    this.$refs.item.$off("sendIndex");
  },
};
</script>

<style scoped lang="less">
.main {
  .container {
    padding: 40px 0;
    .input_item {
      label {
        display: inline-block;
        width: 100px;
      }
      input {
        padding: 10px 30px;
        border: 1px solid gray;
        outline: none;
      }
      img {
        vertical-align: bottom;
      }
      span {
        font-size: 14px;
        color: gray;
        &:hover {
          color: #ff6700;
        }
        cursor: pointer;
      }
      button {
        padding: 15px 50px;
        color: white;
        border: none;
        background-color: #ff6700;
        margin: 20px 0 0 100px;
        cursor: pointer;
      }
    }
  }
  .message {
    padding:20px 0;
    .message_item {
      margin-top: 20px;
      strong {
        font-size: 18px;
        font-weight: 500;
      }
      p {
        line-height: 2em;
        font-size: 12px;
        color: gray;
        &:first-of-type {
          margin-top: 10px;
        }
      }
    }
  }
  .s_message{
    p{
      padding-left:30px;
    }
  }
  .none{
    text-align: center;
    color:gray;
    padding:40px 0;
  }
}
</style>