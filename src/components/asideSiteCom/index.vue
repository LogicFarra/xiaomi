<template>
  <nav class="site_aside">
    <ul class="site_left">
      <li>手机<i class="fa fa-chevron-right" aria-hidden="true"></i></li>
      <li>手机<i class="fa fa-chevron-right" aria-hidden="true"></i></li>
      <li>手机<i class="fa fa-chevron-right" aria-hidden="true"></i></li>
      <li>手机<i class="fa fa-chevron-right" aria-hidden="true"></i></li>
      <li>手机<i class="fa fa-chevron-right" aria-hidden="true"></i></li>
      <li>手机<i class="fa fa-chevron-right" aria-hidden="true"></i></li>
      <li>手机<i class="fa fa-chevron-right" aria-hidden="true"></i></li>
      <li>手机<i class="fa fa-chevron-right" aria-hidden="true"></i></li>
      <li>手机<i class="fa fa-chevron-right" aria-hidden="true"></i></li>
      <li>手机<i class="fa fa-chevron-right" aria-hidden="true"></i></li>
    </ul>
    <div class="site_right">
      <div class="switch_btn" style="left: 0">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </div>
      <div class="switch_btn" style="right: 0">
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </div>
      <ul class="switch_point">
        <li class="cur"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AsideSite",
};
</script>

<style scoped lang="less">
.site_aside {
  width: 1226px;
  height: 460px;
  background-image: url(./imgs/d5bcaeb5b2c0d8853a1f26036951364c.webp);
  background-size: cover;
  margin: 0 auto;
  display: flex;
  z-index: 10;
  // 侧边导航栏
  .site_left {
    width: 234px;
    height: 100%;
    background-color: rgba(105, 101, 101, 0.6);
    padding: 20px 0;
    li {
      width: 100%;
      height: 42px;
      padding-left: 30px;
      font-size: 14px;
      line-height: 42px;
      color: white;
      position: relative;
      cursor: pointer;
      &:hover {
        background-color: #ff6700;
      }
      i {
        position: absolute;
        right: 30px;
        color: rgba(255, 255, 255, 0.473);
        line-height: 42px;
      }
    }
  }
  // 轮播图
  .site_right {
    width: 992px;
    height: 100%;
    position: relative;
    // 切换图片按钮
    .switch_btn {
      width: 41px;
      height: 69px;
      font-size: 30px;
      text-align: center;
      padding-top: 14px;
      position: absolute;
      color: #616161;
      top: 195px;
      cursor: pointer;
      &:hover {
        background-color: #42424284;
      }
    }
    // 切换图片小圆点
    .switch_point {
      display: flex;
      position: absolute;
      right: 30px;
      bottom: 30px;
      li {
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.4);
        border: 2px solid rgba(255, 255, 255, 0.3);
        margin: 0 4px;
        cursor: pointer;
        &:hover {
          border: 2px solid rgba(0, 0, 0, 0.4);
          background-color: rgba(255, 255, 255, 0.4);
        }
      }
      .cur {
        border: 2px solid rgba(0, 0, 0, 0.4);
        background-color: rgba(255, 255, 255, 0.4);
      }
    }
  }
}
</style>