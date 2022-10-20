<template>
  <div class="main">
    <header>
      <h1>{{ title }}</h1>
    </header>
    <main>
      <ul>
        <li
          v-for="item in nav"
          :key="item.title"
          :class="{'cur' : item.index == curIndex}"
          @click="changeNav(item.index)"
        >
          {{ item.title }}
        </li>
      </ul>
      <slot name="search"></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: "userItem",
  props: {
    title:{
      type : String,
      required:true
    },
    nav:{
      type:Array,
      default:()=>{return []}
    },
    index:{
      default:()=>{return 1}
    }
  },
  data() {
    return {
      curIndex: this.index || 1,
    };
  },
  
  methods:{
      changeNav(index){
          this.curIndex = index
          this.$emit('update:index',index)
          this.$emit('sendIndex',index)
      }
  }
};
</script>

<style scoped lang="less">
.main {
  header {
    display: flex;
    
    h1 {
      color: rgb(88, 88, 88);
      font-weight: 500;
    }
    p {
      padding: 20px 0 0 20px;
      font-size: 12px;
    }
  }
  main {
    padding: 20px 0 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul {
      display: flex;
      li {
        color: rgb(93, 93, 93);
        padding: 0 40px 0 0;
        cursor: pointer;
      }
      .cur {
        color: orange;
      }
    }
    .search {
      width: 250px;
      height: 35px;
      border: 1px solid black;
      input {
        height: 100%;
        width: 86%;
        padding: 0 10px;
        border: none;
        outline: none;
        border-right: 1px solid black;
      }
      i {
        padding: 0 0 0 10px;
        cursor: pointer;
      }
    }
  }
  .container {
    padding-top: 20px;
    h3 {
      width: 100%;
      color: gray;
      text-align: center;
    }
  }
}
</style>