<template>
  <ul class="main">
    <li v-for="item in imgData" :key="item">
      <img v-lazy="item" alt="">
    </li>
  </ul>
</template>

<script>
import {changeNewsImgAPI} from "@/api"
export default {  
 name:"changeNew",
 data(){
   return{
     imgData:[]
   }
 },
 methods:{
  async getImgs(){
    const {data} = await changeNewsImgAPI()
    this.imgData = data
  }
 },
 async created(){
  this.getImgs()
 }
}
</script>

<style scoped lang="less">
  .main{
    width:100%;
    overflow: hidden;
    li{
      img{
        width:100%;
        vertical-align:bottom;
      }
    }
  }
</style>