<template>
  <div class="succeed">
    <header>
      <div class="left">
        <i class="fa fa-check-circle" aria-hidden="true"></i>
        <div>
          <p>已成功加入购物车</p>
          <small>{{data.product}} {{data.version}} {{data.disposition}} {{data.color}}</small>
        </div>
      </div>
      <div class="right">
        <button @click="next(false)">返回上一级</button>
        <button @click="next(true)">去购物车结算</button>
      </div>
    </header>
    <div class="cutline"></div>
    <YouLike title="购买该商品的人还购买了"></YouLike>
  </div>
</template>

<script>
import YouLike from "@/components/youLike/index.vue";
export default {
    name: "shopSucceed",
    data() {
        return {};
    },
    computed: {
        data() {
            return this.$route.params.data || JSON.parse(sessionStorage.getItem("curitem"));
        }
    },
    methods:{
        next(status){
            status ? this.$router.push('/cart') : this.$router.back()
        }
    },
    mounted(){
        document.documentElement.scrollTop = 0
    },
    components: { YouLike }
};
</script>

<style scoped lang="less">
.succeed {
  background-color: #f5f5f5;
  header{
      padding: 30px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      .left{
          i{
              font-size:80px;
              color:rgb(129, 198, 26);
          }
          div{
              float: right;
              margin-left:20px;
              padding:13px 0;
              p{
                  font-size:22px;
              }
              small{
                  color:#838383;
              }
          }
      }
      .right{
          button{
              width:180px;
              height:40px;
              text-align: center;
              line-height:40px;
              border:1px solid #ff6700;
              background-color: #ff6700;
              color:white;
              cursor: pointer;
              transition: 0.3s;
              &:hover{
                  border-color:#c85000;
                  background-color: #c85000;
              }
              &:first-of-type{
                  border: 1px solid rgb(176,176,176);
                  color:rgb(176,176,176);
                  background-color: transparent;
                  margin-right:20px;
                  &:hover{
                      border-color:#838383;
                      color:#838383;
                      background-color: white;
                  }
              }
          }
      }
  }
  .cutline{
      width:1226px;
      height:1px;
      background-color: rgba(176, 176, 176, 0.292);
      margin:0 auto;
  }
 
}
</style>