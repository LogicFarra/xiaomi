<template>
  <div class="main">
    <UserItem
      :title="title"
      :nav="nav"
      :index.sync = 'index'
    >
      <template slot="search">
        <div class="search">
          <input type="text" placeholder="请输入商品名称,订单号" />
          <i class="fa fa-search" aria-hidden="true"></i>
        </div>
      </template>
    </UserItem>
    <div class="box" v-if="index == 1">
      <UserNoneMsg message="当前没有交易订单"></UserNoneMsg>
    </div>
    <div class="box" v-else-if="index == 2">
      <UserNoneMsg message="当前没有待支付订单"></UserNoneMsg>
    </div>
    <div class="box" v-else-if="index == 3">
      <UserNoneMsg message="当前没有待收货订单"></UserNoneMsg>
    </div>
    <div class="box" v-else>
      <UserNoneMsg message="当前没有回收站订单"></UserNoneMsg>
    </div>
  </div>
</template>

<script>
import UserItem from "@/components/userItem/index.vue";
import UserNoneMsg from "@/components/userNoneMsg/index.vue";
export default {
  name: "myOrder",
  components: { UserItem, UserNoneMsg },
  data() {
    return {
      nav: [
        {
          title: "全部有效订单",
          index: 1,
        },
        {
          title: "待支付",
          index: 2,
        },
        {
          title: "待收货",
          index: 3,
        },
        {
          title: "订单回收站",
          index: 4,
        },
      ],
      title:"我的订单",
      index: this.$route.params.index || 1
    };
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