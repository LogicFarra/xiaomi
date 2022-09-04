<template>
  <div class="main_sub">
    <!-- 频道 -->
    <ul class="main_channel_list">
      <li>
        <i class="fa fa-clock-o" aria-hidden="true"></i><br /><font
          >保障服务</font
        >
      </li>
      <li>
        <i class="fa fa-clock-o" aria-hidden="true"></i><br /><font
          >保障服务</font
        >
      </li>
      <li>
        <i class="fa fa-clock-o" aria-hidden="true"></i><br /><font
          >保障服务</font
        >
      </li>
      <li>
        <i class="fa fa-clock-o" aria-hidden="true"></i><br /><font
          >保障服务</font
        >
      </li>
      <li>
        <i class="fa fa-clock-o" aria-hidden="true"></i><br /><font
          >保障服务</font
        >
      </li>
      <li>
        <i class="fa fa-clock-o" aria-hidden="true"></i><br /><font
          >保障服务</font
        >
      </li>
    </ul>
    <!-- 宣传图片 -->
    <ul class="main_publicity_picture">
      <li><img src="./imgs/publicity_picture.jpg" alt="" /></li>
      <li><img src="./imgs/publicity_picture.jpg" alt="" /></li>
      <li><img src="./imgs/publicity_picture.jpg" alt="" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ChannelCom",
};
</script>

<style scoped lang="less">
.main_sub {
  width: 1226px;
  height: 170px;
  margin: 14px auto;
  display: flex;
  justify-content: space-between;
  // 频道
  .main_channel_list {
    width: 234px;
    height: 170px;
    background-color: rgb(95, 87, 80);
    padding: 3px;
    display: flex;
    flex-wrap: wrap;
    li {
      padding: 0 3px;
      width: 76px;
      height: 82px;
      text-align: center;
      position: relative;
      cursor: pointer;
      &:hover > i {
        color: white;
      }
      &:hover > font {
        color: white;
      }
      &::after {
        content: "";
        width: 64px;
        height: 1px;
        background-color: #665e57;
        position: absolute;
        top: 0;
        left: 6px;
      }
      &::before {
        content: "";
        width: 1px;
        height: 70px;
        background-color: #665e57;
        position: absolute;
        top: 6px;
        left: 0;
      }
      i {
        font-size: 25px;
        color: #9e9e9e;
        margin-top: 15px;
      }
      font {
        font-size: 12px;
        color: #acacac;
      }
    }
  }
  // 宣传图片栏
  .main_publicity_picture {
    width: 978px;
    display: flex;
    justify-content: space-between;
    img {
      width: 316px;
      height: 170px;
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        box-shadow: 0 0 20px silver;
      }
    }
  }
}
</style>