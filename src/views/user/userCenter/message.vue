<template>
  <div class="main">
    <UserItem title="消息通知" :nav="nav" :index.sync="index">
  </UserItem>
  <div class="box" v-if="index == 1">
    <UserNoneMsg message="暂无数据"></UserNoneMsg>
  </div>
  <div class="box" v-else-if="index == 2">
    <UserNoneMsg message="暂无数据"></UserNoneMsg>
  </div>
  <div class="box" v-else>
    <UserNoneMsg message="暂无数据"></UserNoneMsg>
  </div>
  </div>
</template>

<script>
import UserItem from "@/components/userItem/index.vue";
import UserNoneMsg from "@/components/userNoneMsg/index.vue";
export default {
  name: "cenMessage",
  components: { UserItem, UserNoneMsg },
  data() {
    return {
      nav: [
        {
          title: "全部消息",
          index: "1",
        },
        {
          title: "物流动态",
          index: "2",
        },
        {
          title: "特惠活动",
          index: "3",
        },
      ],
      index: 1,
    };
  }
};
</script>

<style scoped lang="less">
</style>