<template>
  <div class="main">
    <HeaderCom2 title="支付订单"></HeaderCom2>
    <main>
        <div class="order">
            <i class="fa fa-check-circle-o" aria-hidden="true"></i>
            <div>
                <strong>订单提交成功！去付款咯～</strong>
                <p>请在<span>0 小时 15 分</span>内完成支付, 超时后将取消订单</p>
                <p>收货信息：{{info.name}} {{info.phone}} {{info.location}} {{info.detailLocation}}</p>
            </div>
            <div>
                <p>应付总额:<span>{{price}}</span>元</p>
            </div>
        </div>
        <div class="pay">
            <p class="h">选择以下支付方式付款</p>
            <div class="payWay">
                <p class="title">支付工具</p>
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/031f3af10e3856352b847fe480b2b2e5.png" alt="">
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/031f3af10e3856352b847fe480b2b2e5.png" alt="">
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/031f3af10e3856352b847fe480b2b2e5.png" alt="">
            </div>
            <div class="payWay">
                <p class="title">银行借记卡及信用卡</p>
                <img src="https://s01.mifile.cn/i/banklogo/payOnline_zsyh.png" alt="">
                <img src="https://s01.mifile.cn/i/banklogo/payOnline_zsyh.png" alt="">
                <img src="https://s01.mifile.cn/i/banklogo/payOnline_zsyh.png" alt="">
                <img src="https://s01.mifile.cn/i/banklogo/payOnline_zsyh.png" alt="">
                <img src="https://s01.mifile.cn/i/banklogo/payOnline_zsyh.png" alt="">
                <img src="https://s01.mifile.cn/i/banklogo/payOnline_zsyh.png" alt="">
                <img src="https://s01.mifile.cn/i/banklogo/payOnline_zsyh.png" alt="">
                <img src="https://s01.mifile.cn/i/banklogo/payOnline_zsyh.png" alt="">
                <img src="https://s01.mifile.cn/i/banklogo/payOnline_zsyh.png" alt="">
                <img src="https://s01.mifile.cn/i/banklogo/payOnline_zsyh.png" alt="">
                <img src="https://s01.mifile.cn/i/banklogo/payOnline_zsyh.png" alt="">
                <img src="https://s01.mifile.cn/i/banklogo/payOnline_zsyh.png" alt="">
            </div>
            <div class="payWay">
                <p class="title">快捷支付</p>
                <img src="https://s01.mifile.cn/i/banklogo/payOnline_jiangsshuyh.png" alt="">
                <img src="https://s01.mifile.cn/i/banklogo/payOnline_jiangsshuyh.png" alt="">
                <img src="https://s01.mifile.cn/i/banklogo/payOnline_jiangsshuyh.png" alt="">
                <img src="https://s01.mifile.cn/i/banklogo/payOnline_jiangsshuyh.png" alt="">
                <img src="https://s01.mifile.cn/i/banklogo/payOnline_jiangsshuyh.png" alt="">
                <img src="https://s01.mifile.cn/i/banklogo/payOnline_jiangsshuyh.png" alt="">
                <img src="https://s01.mifile.cn/i/banklogo/payOnline_jiangsshuyh.png" alt="">
                <img src="https://s01.mifile.cn/i/banklogo/payOnline_jiangsshuyh.png" alt="">
                <img src="https://s01.mifile.cn/i/banklogo/payOnline_jiangsshuyh.png" alt="">
                <img src="https://s01.mifile.cn/i/banklogo/payOnline_jiangsshuyh.png" alt="">
                <img src="https://s01.mifile.cn/i/banklogo/payOnline_jiangsshuyh.png" alt="">
                <img src="https://s01.mifile.cn/i/banklogo/payOnline_jiangsshuyh.png" alt="">
                <img src="https://s01.mifile.cn/i/banklogo/payOnline_jiangsshuyh.png" alt="">
                <img src="https://s01.mifile.cn/i/banklogo/payOnline_jiangsshuyh.png" alt="">
                <img src="https://s01.mifile.cn/i/banklogo/payOnline_jiangsshuyh.png" alt="">
                <img src="https://s01.mifile.cn/i/banklogo/payOnline_jiangsshuyh.png" alt="">
            </div>
        </div>
        <div class="pay">
            <div class="payWay">
                <p class="title">信贷产品</p>
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d451f2e8e98bdf5583e3da23817f50c4.jpg" alt="">
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d451f2e8e98bdf5583e3da23817f50c4.jpg" alt="">
                <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d451f2e8e98bdf5583e3da23817f50c4.jpg" alt="">
            </div>
        </div>
    </main>
    <FooterCom></FooterCom>
  </div>
</template>

<script>
import HeaderCom2 from "@/components/headerCom2/index.vue";
import FooterCom from "@/components/footerCom/index.vue";
export default {
  name: "confirm",
  components: { HeaderCom2, FooterCom },
  data(){
      return {
          info:this.$route.params.location || JSON.parse(sessionStorage.getItem('order')),
          price:this.$route.params.price || JSON.parse(sessionStorage.getItem("price"))
      }
  }
};
</script>

<style scoped lang="less">
    .main{
        main{
            background-color: #f5f5f5;
            padding:38px 20px;
            .order{
                display: flex;
                justify-content: space-between;
                background-color: white;
                padding:30px 48px;
                i{
                    font-size:100px;
                    color:greenyellow;
                }
                div{
                    p{
                        font-size:14px;
                        line-height:2em;
                        color:gray;
                    }
                    strong{
                        font-size:23px;
                        line-height:2em;
                        font-weight: 400;
                    }
                    span{
                        color:#ff6700;
                    }
                    &:first-of-type{
                        width:70%;
                    }
                    &:last-of-type{
                        span{
                            font-size:25px;
                            margin-left:5px;
                        }
                    }
                }
            }
            .pay{
                background-color: white;
                margin-top:20px;
                padding:30px 48px;
                .h{
                    border-bottom: 1px solid silver;
                    padding:0 0 20px 0 ;
                }
                .payWay{
                    .title{
                        font-weight: 700;
                        color:gray;
                        padding:20px 0;
                    }
                    img{
                        border:1px solid silver;
                        margin-right:15px;
                        margin-bottom:15px;
                        width:172px;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>