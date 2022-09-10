<template>
  <div>
    <AsideSiteCom />
    <ChannelCom />
    <ProductsCom />
  </div>
</template>

<script>
import AsideSiteCom from "@/components/asideSiteCom";
import ChannelCom from "@/components/channelCom/index.vue";
import ProductsCom from "@/components/ProductsCom/index.vue";
export default {
  name: "shop",
  components: {
    AsideSiteCom,
    ChannelCom,
    ProductsCom,
  },
};
</script>

<style>
</style>