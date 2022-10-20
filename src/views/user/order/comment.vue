<template>
  <div class="main">
    <UserItem :title="title"></UserItem>
    <UserNoneMsg :message="noMsg"></UserNoneMsg>
  </div>
</template>

<script>
import UserItem from "@/components/userItem/index.vue";
import UserNoneMsg from "@/components/userNoneMsg/index.vue";
export default {
  name: "myComment",
  components: { UserItem, UserNoneMsg },
  data(){
    return {
      title:"订单评价",
      noMsg:"暂时没有符合条件的商品"
    }
  }
};
</script>

<style scoped lang="less">
.main {
  header {
    display: flex;
    h1 {
      color: rgb(88, 88, 88);
      font-weight: 500;
    }
    p {
      padding: 20px 0 0 20px;
      font-size: 12px;
    }
  }
  main {
    padding: 20px 0 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul {
      display: flex;
      li {
        color: rgb(93, 93, 93);
        padding: 0 40px 0 0;
        cursor: pointer;
      }
    }
    .search {
      width: 250px;
      height: 35px;
      border: 1px solid black;
      input {
        height: 100%;
        width: 86%;
        padding: 0 10px;
        border: none;
        outline: none;
        border-right: 1px solid black;
      }
      i {
        padding: 0 0 0 10px;
        cursor: pointer;
      }
    }
  }
  .container {
    padding-top: 20px;
    h3 {
      width: 100%;
      color: gray;
      text-align: center;
    }
  }
}
</style>