<template>
  <div class="video">
    <!-- 标题 -->
    <div class="title">
      <span style="font-size: 22px">视频</span>
      <p class="normal">
        <font>查看更多</font>
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </p>
    </div>
    <!-- 内容 -->
    <div class="videos">
      <ul>
        <li v-for="item in covers" :key="item.id" @click="play(item.title,item.src)">
          <img :src="item.cover" alt="" width="296px" height="180px" />
          <p>{{item.title}}</p>
          <p class="small_text">{{item.text}}</p>
          <i class="fa fa-play" aria-hidden="true"></i>
        </li>
      </ul>
    </div>
    <!-- 下拉框 -->
    <transition>
        <div class="dropdown" v-if="showDrop">
          <div class="dropdownContainer">
            <div class="header">
              {{title}}
              <i
                class="fa fa-times"
                aria-hidden="true"
                @click="showDrop = false"
              ></i>
            </div>
            <div class="container">
              <video controls autoplay :src="videoSrc"></video>
            </div>
          </div>
        </div>
      </transition>
  </div>
</template>

<script>
import { getVideoCoverAPI } from '@/api'
export default {
  name: "videoCom",
  data(){
      return{
          covers:[],
          showDrop:false,
          title:"",
          videoSrc:""
      }
  },
  methods:{
    async getCoverData(){
        const { data } = await getVideoCoverAPI()
        this.covers = data.slice(0,4)
    },
    play(title,src){
      this.title = title
      this.videoSrc = src
      this.showDrop = true
    }
  },
  created(){
    this.getCoverData()
  }
};
</script>

<style scoped lang="less">
.video {
  margin-top: 20px;
  margin-bottom: 20px;
  // 标题
  .title {
    width: 100%;
    height: 58px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .normal {
      cursor: pointer;
      display: flex;
      color: #424242;
      transition: 0.3s;
      &:hover {
        color: #ff6700;
      }
      &:hover > i {
        background-color: #ff6700;
      }
      i {
        transition: 0.3s;
        font-size: 10px;
        width: 20px;
        height: 20px;
        padding: 4.5px 5px 5px 7px;
        border-radius: 100px;
        background-color: #b0b0b0;
        margin-left: 5px;
        color: white;
      }
    }
  }
  // 视频组件
  .videos {
    width: 100%;
    height: 285px;
    ul {
      display: flex;
      justify-content: space-between;
      li {
        width: 296px;
        height: 285px;
        cursor: pointer;
        background-color: white;
        position: relative;
        transition: 0.4s;
        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 3px 20px silver;
          i {
            background-color: #ff6700;
            border-color: #ff6700;
          }
        }
        p {
          width: 264px;
          text-align: center;
          margin: 30px auto 0 auto;
          font-size: 14px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .small_text {
          margin: 5px auto;
          font-size: 12px;
          color: #b0b0b0;
        }
        i {
          transition: 0.4s;
          display: block;
          position: absolute;
          top: 145px;
          left: 20px;
          width: 40px;
          height: 25px;
          text-align: center;
          padding-top: 4px;
          padding-left: 2px;
          border: 2px solid rgb(255, 255, 255);
          border-radius: 15px;
          font-size: 12px;
          color: white;
          background-color: #2a2a2ac4;
        }
      }
    }
  }
  // 下拉框

    .dropdown {
      position: fixed;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.29);
      z-index: 9999;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .dropdownContainer {
      width: 800px;
      background-color: white;
      box-sizing: border-box;
      .header {
        width: 100%;
        height: 60px;
        padding: 14px 20px;
        line-height: 32px;
        font-size: 18px;
        background-color: silver;
        i {
          float: right;
          padding: 10px 12px;
          border-radius: 100px;
          transition: 0.3s;
          cursor: pointer;
          &:hover {
            background-color: red;
            color: white;
          }
        }
      }
      .container {
        video{
          width:800px;
        }
      }
    }
    .v-enter-active {
      animation: drop 1s;
    }
    .v-leave-active {
      animation: drop 1s reverse;
    }
    @keyframes drop {
      0% {
        opacity: 0;
        transform: translateY(-20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
}
</style>
      
