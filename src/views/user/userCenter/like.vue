<template>
  <div class="main">
    <UserItem title="喜欢的商品"></UserItem>
    <UserNoneMsg message="您暂未收藏任何商品"></UserNoneMsg>
  </div>
</template>

<script>
import UserItem from '@/components/userItem/index.vue';
import UserNoneMsg from '@/components/userNoneMsg/index.vue';
export default {
    name: "cenLike",
    components: { UserItem, UserNoneMsg }
}
</script>

<style scoped lang="less">

</style>