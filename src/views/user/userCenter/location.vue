<template>
  <div class="main">
    <UserItem title="收货地址"></UserItem>
    <Location></Location>
  </div>
</template>

<script>
import UserItem from '@/components/userItem/index.vue';
import Location from '@/components/location/index.vue';
export default {
    name: "cenlocation",
    components: { UserItem, Location },
    data(){
      return {
        showDrop : false
      }
    }
}
</script>

<style scoped lang="less">
</style>