<template>
    <div class="main">
        <UserItem title="选择申请方式"></UserItem>
        <div class="container">
            <div class="container_item">
                <i class="fa fa-paper-plane" aria-hidden="true"></i>
                <h2>快速申请</h2>
                <p>小米网 / 小米商城App购买的订单</p>
                <p>根据产品唯一识别码和购买凭证申请售后</p>
                <button>前往订单</button>
            </div>
            <div class="container_item">
                <i class="fa fa-pencil" aria-hidden="true"></i>
                <h2>填写申请单</h2>
                <p>其他渠道购买的产品</p>
                <p>根据产品唯一识别码和购买凭证申请售后</p>
                <button>前往订单</button>
            </div>
        </div>
    </div>
</template>
  
  <script>
import UserItem from '@/components/userItem/index.vue';
  export default {
    name: "applicationServers",
    components: { UserItem }
}
  </script>
  
  <style scoped lang="less">
  .main{
      .container{
          display: flex;
          justify-content: center;
          .container_item{
            padding:50px 70px;
            text-align: center;
            i{
                font-size:40px;
                color:green;
            }
            h2{
                font-weight: 500;
                padding:10px 0;
            }
            p{
                font-size:14px;
                color:gray;
            }
            button{
                padding:10px 50px;
                background-color: transparent;
                border:1px solid green;
                color:green;
                margin-top:20px;
                cursor: pointer;
                transition: 0.4s;
                &:hover{
                    background-color: green;
                    color:white;
                }
            }
          }
      }
  }
  </style>