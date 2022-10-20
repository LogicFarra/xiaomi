<template>
  <main>
    <div class="mainContainer">
      <div class="left">
        <ul v-for="item in nav" :key="item.title">
          <li class="title">{{ item.title }}</li>
          <li v-for="itemList in item.children"
              :key="itemList.name"
              @click="goPage(itemList.path,itemList.href)"
              :class="[path === itemList.path ? 'cur' : '']"
              >
            {{ itemList.name }}
          </li>
        </ul>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>

<script>
import { userCenterNavAPI } from "@/api";
export default {
  name: "userPage",
  data() {
    return {
      nav: []
    };
  },
  computed:{
    path:{
      get(){
        return this.$route.path
      },
      set(){}
    }
  },
  methods: {
    async getNavdata() {
      const { data } = await userCenterNavAPI();
      this.nav = data;
    },
    goPage(path,href){
      if(href){
        window.location.href = href
      }else{
        this.$router.push(path)
        this.path = path
      }
    }
  },
  created() {
    this.getNavdata()
  },
};
</script>

<style scoped lang="less">
main {
  width: 100%;
  background-color: #f5f5f5;
  padding: 20px 0;
  .mainContainer {
    width: 1226px;
    margin: 0 auto;
    &::after {
      content: "";
      display: table;
      clear: both;
      height: 0;
    }
    .left {
      float: left;
      width: 234px;
      padding: 34px;
      background-color: white;
      ul {
        li {
          font-size: 14px;
          color: rgb(73, 73, 73);
          line-height: 2.5em;
          cursor: pointer;
          &:hover {
            color: black;
          }
        }
        .cur{
            color:#ff6700;
            &:hover{
              color: #ff6700;
            }
          }
        .title {
          cursor: default;
          font-size: 18px;
          color: black;
        }
      }
    }
    .right {
      float: right;
      width: 978px;
      padding: 34px;
      background-color: white;
    }
  }
}
</style>