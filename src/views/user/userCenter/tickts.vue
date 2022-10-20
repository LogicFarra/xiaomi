<template>
  <div class="main">
    <UserItem title="现金券" :nav="nav" :index.sync="index"></UserItem>
    <div v-if="index == 1">
      <UserNoneMsg message="暂无记录"></UserNoneMsg>
    </div>
    <div v-else>
      <div class="message s_message">
        <div class="message_item">
          <strong>Q：现金券怎么使用？</strong>
          <p>
            您在提交订单时，选择使用现金券，即可看到您可使用的现金券。在不超过订单金额的情况下，同类现金券可以不限数量叠加使用。
          </p>
        </div>
        <div class="message_item">
          <strong>Q：现金券的适用范围是什么？</strong>
          <p>
            商品范围：现金券可用于购买小米商城自营实物商品，暂不支持抵扣物流费，暂不支持购买小米移动电话卡、保险等虚拟商品/服务、合约机、小米有品商品及其他第三方发货的商品。
          </p>
          <p>
            渠道范围：小米商城（商城配送）及部分线下小米之家门店可以进行支付使用，暂不支持门店闪送和到店自取。
            注：具体是否可用请以订单支付页面显示或门店店员告知为准。
          </p>
        </div>
        <div class="message_item">
          <strong>Q：现金券的使用有效期？</strong>
          <p>您可以在现金券的有效期及余额内，不限次数重复使用。</p>
        </div>
        <div class="message_item">
          <strong>Q：使用现金券购物，产生退款怎么办？</strong>
          <p>使用现金券购物后发生退款的，退款金额将原路返还，系统优先返还现金券支付金额，即现金券支付的部分金额退还至原有现金券，其余部分原路返还，但优惠券、红包抵扣部分将不再返还。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserItem from "@/components/userItem/index.vue";
import UserNoneMsg from "@/components/userNoneMsg/index.vue";
export default {
  name: "cenTickts",
  components: { UserItem, UserNoneMsg },
  data() {
    return {
      nav: [
        {
          title: "我的现金券",
          index: 1,
        },
        {
          title: "常见问题",
          index: 2,
        },
      ],
      index: 1,
    };
  }
};
</script>

<style scoped lang="less">
.main {
  .message {
    padding: 20px 0;
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
  .s_message {
    p {
      padding-left: 30px;
    }
  }
}
</style>