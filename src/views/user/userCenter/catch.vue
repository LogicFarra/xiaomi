<template>
  <div class="main">
    <UserItem :title="title"></UserItem>
    <UserNoneMsg :message="noMsg"></UserNoneMsg>
    <div class="message">
      <div v-for="(item,key) in messages" :key="key">
        <i :class="item.icon"></i>
        <p>{{item.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import UserItem from '@/components/userItem/index.vue';
import UserNoneMsg from '@/components/userNoneMsg/index.vue';
export default {
    name: "CenCatch",
    components: { UserItem, UserNoneMsg },
    data(){
      return {
        title:"我的现金账户",
        noMsg:"您尚未开通小米现金账户",
        messages:[
          {
            icon:"fa fa-shield",
            text:"采用顶级数据加密方案，保障现金账户、出入账记录的绝对安全，您可放心使用。"
          },
          {
            icon:"fa fa-jpy",
            text:"退款、快递补偿等服务可在通过审核后立即到账您的现金账户，免去等待。（目前仅支持快递补偿的入账服务）"
          },
          {
            icon:"fa fa-book",
            text:"现金账户中记录您每一笔入账和支出，方便查找和管理日常交易。"
          },
        ]
      }
    }
}
</script>

<style scoped lang="less">
.main{
  .message{
    padding:80px 20px 20px;
    display: flex;
    justify-content: space-around;
    div{
      color:gray;
      padding:20px;
      text-align: center;
      width:250px;
      i{
        font-size:40px;
      }
      p{
        text-indent: 2em;
        font-size:14px;
      }
    }
  }
}
</style>