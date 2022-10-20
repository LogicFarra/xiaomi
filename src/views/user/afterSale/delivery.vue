<template>
  <div class="main">
    <UserItem title="快递报销" :nav="nav" :index.sync="index"></UserItem>
    <div class="container" v-if="index == 1">
      <form>
        <div class="form_item">
          <label for="id"> 服务工单号 </label>
          <br />
          <input type="text" placeholder="必填" />
        </div>
        <div class="form_item">
          <label for="id"> 快递报销码 </label>
          <br />
          <input type="text" placeholder="必填" />
        </div>
        <div class="form_item">
          <label for="id"> 验证码 </label>
          <br />
          <input type="text" placeholder="请输入验证码" />
          <img
            src="https://captcha.hd.mi.com/captcha?style=chinese&service=https:api2.service.order.mi.com&sessionId=0&_0.6786854309539618"
            alt=""
          />
          <span>换一张</span>
        </div>
        <div class="form_item">
          <button>立即领取</button>
        </div>
      </form>
    </div>
    <div class="container" v-else>
        <UserNoneMsg message="您目前还没有领取过快递报销。"></UserNoneMsg>
    </div>
  </div>
</template>
  
  <script>
import UserItem from "@/components/userItem/index.vue";
import UserNoneMsg from "@/components/userNoneMsg/index.vue";
export default {
  name: "serversDelivery",
  components: { UserItem, UserNoneMsg },
  data() {
    return {
      nav: [
        {
          title: "领取快递报销",
          index: 1,
        },
        {
          title: "报销进度查询",
          index: 2,
        },
      ],
      index: 1,
    };
  }
};
</script>
  
<style scoped lang="less">
.main {
  .container {
    padding: 30px 0;
    form {
      .form_item {
          padding:10px 0;
        input {
          border: 1px solid silver;
          outline: none;
          padding: 10px;
          width:250px;
          margin-top:10px;
          color:silver;
          &::placeholder{
              color:silver;
          }
        }
        img{
            vertical-align: bottom;
        }
        span{
            font-size:14px;
            color:silver;
            cursor: pointer;
            &:hover{
                color:black;
            }
        }
        button{
            padding:10px 50px;
            border:1px solid #ff6700;
            background-color: #ff6700;
            color:white;
            cursor: pointer;
            transition: 0.3s;
            &:hover{
                background-color: #cf5300;
            }
        }
      }
    }
  }
}
</style>