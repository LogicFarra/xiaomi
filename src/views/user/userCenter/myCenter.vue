<template>
  <div class="main">
    <div class="info">
      <div class="left">
        <img src="https://cdn.cnbj1.fds.api.mi-img.com/user-avatar/50286c91-034d-4ada-9ecb-a845b9415794.jpg" alt="">
        <div>
          <strong>Logic</strong>
          <p>晚上好~</p>
          <p><a href="javascript:;">修改个人信息></a></p>
        </div>
      </div>
      <div class="right">
        <p>账户安全:<span class="s">普通</span></p>
        <p>绑定手机:<span>152******57</span></p>
        <p>绑定邮箱:<span>未绑定</span></p>
      </div>
    </div>
    <div class="data">
      <div class="item" v-for="(item,key) in orders" :key="key">
        <img :src="item.icon">
        <div>
          <p>{{item.title}}:<span>{{item.num}}</span></p>
          <p><a href="javascript:;" @click="jump(item.name,item.index)">{{item.message}}</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name:"cenCenter",
 data(){
   return{
     orders:[
       {
         icon:"https://s01.mifile.cn/i/user/portal-icon-1.png",
         title:"待支付的订单",
         num:0,
         message:"查看待支付订单>",
         name:'order',
         index:2
       },
       {
         icon:"https://s01.mifile.cn/i/user/portal-icon-2.png",
         title:"待收货的订单",
         num:0,
         message:"查看待收货订单>",
         name:"order",
         index:3
       },
       {
         icon:"https://s01.mifile.cn/i/user/portal-icon-3.png",
         title:"查看待收货订单",
         num:0,
         message:"查看待评价商品>",
         name:"comment"
       },
       {
         icon:"https://s01.mifile.cn/i/user/portal-icon-4.png",
         title:"喜欢的商品",
         num:0,
         message:"查看喜欢的商品>",
         name:"like"
       }
     ]
   }
 },
 methods:{
   jump(name,index = 1){
     this.$route.params.index = index
     this.$router.push({
       name,
       params:{
         index
       }
     })
   }
 }
}
</script>

<style scoped lang="less">
  .main{
    .info{
      display: flex;
      justify-content: space-between;
      padding:30px 0 50px;
      border-bottom: 1px solid silver;
      .left,.right{
        height:150px;
        width:45%;
      }
      .left{
        display: flex;
        align-items: center;
        img{
        width:150px;
        height:150px;
        border-radius: 100%;
        border:1px solid silver;
        padding:5px;
        margin-right:40px;
      }
      div{
        strong{
          font-size:24px;
        }
        p{
          line-height: 1.5em;
          color:silver;
          font-size:14px;
        }
        a{
          font-size:12px;
          color:#ff6700;
        }
      }
      }
      .right{
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size:14px;
        color:gray;
        p{
          line-height:2em;
          .s{
            color:#ff6700;
          }
        }
      }
    }
    .data{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .item{
        display: flex;
        align-items: center;
        width:45%;
        height:150px;
        img{
          margin-right:40px;
        }
        p{
          font-size:20px;
          color:gray;
          a{
            font-size:16px;
            color:gray;
            transition: 0.3s;
            &:hover{
              color:#ff6700;
            }
          }
          span{
            color:#ff6700;
          }
        }
      }
    }
  }
</style>