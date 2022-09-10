<template>
  <div class="layout">
    <HeaderCom />
    <ProductNavCom />
    <!-- 二级挂载点 -->
    <router-view></router-view>
    <FooterCom />
    <ToolBarCom />
  </div>
</template>

<script>
import HeaderCom from "@/components/headerCom";
import ProductNavCom from "@/components/productNavCom";
import FooterCom from "@/components/footerCom/index.vue";
import ToolBarCom from "@/components/toolBarCom/index.vue";
export default {
  name: "layout",
  components: {
    HeaderCom,
    ProductNavCom,
    FooterCom,
    ToolBarCom,
  },
};
</script>

<style>
</style>