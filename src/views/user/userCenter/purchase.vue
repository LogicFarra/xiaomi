<template>
  <div class="main">
    <UserItem title="购买资格" :nav="nav" :index.sync="index"></UserItem>
    <div class="box" v-if="index == 1">
      <UserNoneMsg message="您没有可以显示的购买资格"></UserNoneMsg>
    </div>
    <div class="box" v-else>
      <UserNoneMsg message="您没有可以显示的购买资格"></UserNoneMsg>
    </div>
    <div class="message">
      <strong>什么是购买资格?</strong>
      <p>购买资格是优先购买新品的特权。</p>
      <p>拥有新品的购买资格可以无需预约或抢购，直接下单购买。</p>
      <p>每个购买资格只可使用一次，商品加入购物车后购买资格即刻失效，请勿将其从购物车中删除。</p>
    </div>
  </div>
</template>

<script>
import UserItem from "@/components/userItem/index.vue";
import UserNoneMsg from "@/components/userNoneMsg/index.vue";
export default {
  name: "cenPurchase",
  components: { UserItem, UserNoneMsg },
  data() {
    return {
      index : 1,
      nav: [
        {
          title: "未使用",
          index: 1,
        },
        {
          title: "已使用/已过期",
          index: 2,
        },
      ],
    };
  }
};
</script>

<style scoped lang="less">
.main{
  .message{
    padding:20px 0;
    strong{
      font-size:20px;
    }
    p{
      padding:5px 0;
      color:gray;
      &:first-of-type{
        margin-top:10px;
      }
    }
  }
}
</style>