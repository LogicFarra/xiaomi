<template>
  <div class="main">
    <h3>{{ message }}</h3>
    <h3>{{message2}}</h3>
  </div>
</template>

<script>
export default {
  name: "noneMessage",
  props: {
    message: {
      type: String,
      required: true,
    },
    message2:{
      type:String
    }
  },
};
</script>

<style scoped lang="less">
.main{
  padding: 60px 0 40px;
  h3 {
  font-weight: 500;
  text-align: center;
  color: gray;
  
}
}
</style>