<template>
  <div id="app">
    <HeaderCom/>
    <ProductNavCom/>
    <AsideSiteCom/>
    <ChannelCom/>
    <ProductsCom/>
    <FooterCom/>
    <ToolBarCom/>
  </div>
</template>

<script>
import HeaderCom from './components/headerCom'
import ProductNavCom from './components/productNavCom'
import AsideSiteCom from './components/asideSiteCom'
import ChannelCom from './components/channelCom/index.vue'
import ProductsCom from './components/ProductsCom/index.vue'
import FooterCom from './components/footerCom/index.vue'
import ToolBarCom from './components/toolBarCom/index.vue'
export default {
  name: 'App',
  components:{
    HeaderCom,
    ProductNavCom,
    AsideSiteCom,
    ChannelCom,
    ProductsCom,
    FooterCom,
    ToolBarCom
},
}
</script>

<style >
*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
}
</style>
