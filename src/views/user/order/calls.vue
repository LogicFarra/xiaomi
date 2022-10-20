<template>
  <div class="main">
    <UserItem :title="title"></UserItem>
    <UserNoneMsg :message="noMsg"></UserNoneMsg>
  </div>
</template>

<script>
import UserItem from '@/components/userItem/index.vue';
import UserNoneMsg from '@/components/userNoneMsg/index.vue';
export default {
    name: "myCalls",
    components: { UserItem, UserNoneMsg },
    data(){
      return{
        title:"话费充值订单",
        noMsg:"暂时没有充值记录"
      }
    }
}
</script>

<style>

</style>