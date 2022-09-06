<template>
  <div class="tool_bar" :style="{top:marginTop+'px'}">
    <ul>
      <li class="first">
        <div>
          <img src="./imgs/phone.png" alt="" />
          <img src="./imgs/phone2.png" alt="" class="hoverImg"/>
          <span>
            <img src="./imgs/app.png" alt="" />
            <p>扫码领取新人百元红包</p>
          </span>
        </div>
      </li>
      <li>
        <div>
          <img src="./imgs/user.png" alt="" />
          <img src="./imgs/user2.png" alt="" class="hoverImg"/>
          <span> 个人中心 </span>
        </div>
      </li>
      <li>
        <div>
          <img src="./imgs/tool.png" alt="" />
          <img src="./imgs/tool2.png" alt="" class="hoverImg"/>
          <span> 售后服务 </span>
        </div>
      </li>
      <li>
        <div>
          <img src="./imgs/service.png" alt="" />
          <img src="./imgs/service2.png" alt="" class="hoverImg"/>
          <span> 人工客服 </span>
        </div>
      </li>
      <li>
        <div>
          <img src="./imgs/car.png" alt="" />
          <img src="./imgs/car2.png" alt="" class="hoverImg"/>
          <span> 购物车 </span>
        </div>
      </li>
    </ul>
    <ul class="totop" v-show="totop">
      <li @click="gotop">
        <div>
          <img src="./imgs/totop.png" alt="" />
          <img src="./imgs/totop2.png" alt="" class="hoverImg"/>
          <span> 回顶部 </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "toolBarCom",
  data(){
      return{
        totop:false,
        marginTop:350
      }
  },
  computed:{
    
  },
  methods:{
    watchPageY(){
        let pageY = window.pageYOffset
        if(pageY > 500){
            this.totop = true
            this.marginTop = 300
        }else{
            this.totop = false
            this.marginTop = 350
        }
    },
    gotop(){
        document.documentElement.scrollTop = 0
    }
  },
  watch:{

  },
  mounted(){
      window.addEventListener('scroll',this.throttling(this.watchPageY,500))
  }
};
</script>

<style scoped lang="less">
.tool_bar {
  position: fixed;
  right: 0;
  top: 300px;
  z-index: 1000;
  ul {
    border: 1px solid #f5f5f5;
    background-color: rgb(255, 255, 255);
    li {
      padding: 10px 4px 8px 4px;
      border-top: 1px solid #f5f5f5;
      position: relative;
      &:first-of-type {
        border: none;
      }
      &:hover {
        span {
          display: block;
        }
        .hoverImg{
            display: block;
        }
      }
      div {
        img {
          width: 18px;
        }
        .hoverImg{
            position: absolute;
            top:10px;
            left:4px;
            display: none;
        }
        span {
          display: none;
          width: max-content;
          font-size: 12px;
          padding: 5px 10px;
          background: rgb(255, 255, 255);
          position: absolute;
          right: 40px;
          top: 7px;
          border: 1px solid #f5f5f5;
          &::before {
            content: "";
            width: 10px;
            height: 10px;
            background-color: rgb(255, 255, 255);
            position: absolute;
            right: -5px;
            top: 8px;
            transform: rotate(45deg);
          }
        }
      }
    }
    .first {
      div {
        span {
          top: 0;
          width: 130px;
          padding: 15px 15px;
          text-align: center;
          &::before {
            top: 12px;
          }
          img {
            width: 100px;
          }
          p {
            margin-top: 10px;
            width: 100px;
            padding: 0 9px;
            text-align: center;
            font-size: 14px;
            color: #757575;
          }
        }
      }
    }
  }
  .totop {
    margin-top: 15px;
    li {
      padding: 10px 5px 6px 5px;
    }
  }
}
</style>