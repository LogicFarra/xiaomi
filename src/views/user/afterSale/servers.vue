<template>
  <div class="main">
  <UserItem title="我的服务单"></UserItem>
  <UserNoneMsg message="当前没有服务单哦~"></UserNoneMsg>
  </div>
</template>

<script>
import UserItem from '@/components/userItem/index.vue';
import UserNoneMsg from '@/components/userNoneMsg/index.vue';
export default {
    name: "serversHistory",
    components: { UserItem, UserNoneMsg }
}
</script>

<style scoped lang="less">

</style>