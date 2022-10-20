<template>
  <div class="main">
    <UserItem title="红包" :nav="nav" :index.sync="index"></UserItem>
    <div class="container_box" v-if="index == 1">
      <UserNoneMsg message="一个红包也没有，快去app端参与活动抢红包吧~"></UserNoneMsg>
    </div>
    <div class="container_box" v-else>
      <UserNoneMsg message="还没有已使用/已失效的红包哦~"></UserNoneMsg>
    </div>
  </div >
</template>

<script>
import UserItem from "@/components/userItem/index.vue";
import UserNoneMsg from "@/components/userNoneMsg/index.vue";
export default {
  name: "cenRed",
  components: { UserItem, UserNoneMsg },
  data() {
    return {
      nav: [
        {
          title: "未使用",
          index: 1,
        },
        {
          title: "已使用/已失效",
          index: 2,
        },
      ],
      index: 1,
    };
  }
};
</script>

<style scoped lang="less">
</style>