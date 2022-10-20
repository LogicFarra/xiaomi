<template>
  <div class="main">
    <div class="container">
      <div class="row">
        <div
          class="citys add"
          v-for="item in citys"
          :key="item.id"
          :class="{ cur: item.index == index }"
          @click="chose(item.index)"
        >
          <p>
            {{ item.name }}<span>{{ item.label }}</span>
          </p>
          <p>{{ item.phone }}</p>
          <p>{{ item.location }}</p>
          <p>{{ item.detailLocation }}</p>
          <p @click="edit(item)">修改</p>
        </div>
        <div
          class="add"
          @click="showDrop = true"
          v-show="showMore === '' || showMore === 'up'"
        >
          <i class="fa fa-plus-circle" aria-hidden="true"></i>
          <p>添加新地址</p>
        </div>
      </div>
      <div
        class="showMore"
        v-show="showMore === 'down'"
        @click="showMoreLocation('down')"
      >
        显示更多地址
        <i class="fa fa-chevron-down" aria-hidden="true"></i>
      </div>
      <div
        class="showMore"
        v-show="showMore === 'up'"
        @click="showMoreLocation('up')"
      >
        收起更多地址
        <i class="fa fa-chevron-up" aria-hidden="true"></i>
      </div>
    </div>
    <transition>
      <div class="dropdown" v-if="showDrop">
        <div class="dropdownContainer">
          <div class="header">
            添加收货地址
            <i
              class="fa fa-times"
              aria-hidden="true"
              @click="showDrop = false"
            ></i>
          </div>
          <div class="container">
            <input
              class="small"
              type="text"
              placeholder="姓名"
              v-model="info.name"
            />
            <input
              class="small"
              type="text"
              placeholder="手机号"
              v-model="info.phone"
            />
            <input
              type="text"
              placeholder="省/市/区/街道"
              v-model="info.location"
            />
            <textarea
              cols="30"
              rows="3"
              placeholder="详细地址"
              v-model="info.detailLocation"
            ></textarea>
            <input type="text" placeholder="地址标签" v-model="info.label" />
          </div>
          <div class="footer">
            <button @click="add">确定</button>
            <button @click="closeDrop">取消</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { getLocationAPI, addLocationAPI, editLocationAPI } from "@/api";
export default {
  name: "locationCom",
  data() {
    return {
      showDrop: false,
      showMore: "up",
      info: {
        name: "",
        phone: "",
        location: "",
        detailLocation: "",
        label: "",
      },
      citys: [],
      citysData: [],
      index: Number,
      editStatus:false
    };
  },
  methods: {
    // 添加地址事件,修改地址事件
    async add() {
      // 判断是否有没有填写的信息
      for (let k in this.info) {
        if (!this.info[k]) {
          return;
        }
      }
      // 添加到数据库
      if (this.editStatus === false) {
        await addLocationAPI(this.info);
      } else {
        // 修改到数据库
        await editLocationAPI(this.info.id, this.info);
        this.editStatus = false
      }
      this.showDrop = false;
      this.getLocations();
      // 清空info的值
      for (let k in this.info) {
        this.info[k] = "";
      }
    },
    // 获取地址事件
    async getLocations() {
      // 获取已保存收货地址数据
      const { data } = await getLocationAPI();
      for (let i = 0; i < data.length; i++) {
        data[i].index = i;
      }
      this.citysData = data.reverse();
      if (data.length > 3) {
        this.citys = data.slice(0, 4);
        this.showMore = "down";
      } else {
        this.citys = data.reverse();
        this.showMore = "";
      }
    },
    // 展示更多地址或收起更多地址
    showMoreLocation(status) {
      if (status === "down") {
        this.citys = this.citysData;
        this.showMore = "up";
      } else {
        this.citys = this.citysData.slice(0, 4);
        this.showMore = "down";
      }
    },
    // 选择地址事件
    chose(index) {
      this.index = index;
      let info = this.citysData.find( v => v.index === index)
      this.$emit('sendLoc',info)
    },
    // 修改地址信息
    edit(data) {
      this.info = data;
      this.showDrop = true;
      this.editStatus = true
    },
    // 取消按钮点击事件
    closeDrop(){
      this.showDrop = false
      this.info = {
        name: "",
        phone: "",
        location: "",
        detailLocation: "",
        label: "",
      }
    }
  },
  created() {
    this.getLocations();
  },
};
</script>

<style scoped lang="less">
.main {
  .container {
    .row {
      display: flex;
      flex-wrap: wrap;
      .add {
        cursor: pointer;
        margin: 0 10px 20px;
        color: silver;
        width: 270px;
        height: 180px;
        border: 1px solid silver;
        text-align: center;
        box-sizing: border-box;
        padding-top: 55px;
        i {
          font-size: 30px;
          margin-bottom: 10px;
          transition: 0.3s;
        }
        &:hover {
          i {
            color: gray;
          }
        }
      }
      .citys {
        text-align: left;
        padding: 20px;
        position: relative;
        p {
          font-size: 14px;
          color: gray;
          line-height: 1.5em;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          &:first-of-type {
            font-size: 20px;
            color: black;
            font-weight: 500;
            padding-bottom: 15px;
            span {
              display: inline-block;
              font-size: 16px;
              float: right;
              color: gray;
            }
          }
          &:last-of-type {
            color: #ff6700;
            position: absolute;
            right: 20px;
            bottom: 10px;
            cursor: pointer;
          }
        }
      }
      .cur {
        border-color: #ff6700;
      }
    }
    .showMore {
      background-color: silver;
      text-align: center;
      padding: 10px;
      font-size: 14px;
      cursor: pointer;
      color: gray;
    }
  }
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
    width: 660px;
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
      padding: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      input,
      textarea {
        margin: 10px 0;
        width: 100%;
        padding: 10px;
        border: 1px solid silver;
        outline: none;
        color: black;
        transition: 0.4s;
        &::placeholder {
          color: silver;
        }
        &:hover {
          border: 1px solid gray;
        }
      }
      .small {
        width: 49%;
      }
    }
    .footer {
      background-color: silver;
      padding: 10px 0;
      text-align: center;
      button {
        color: white;
        background-color: gray;
        cursor: pointer;
        padding: 10px 50px;
        border: none;
        margin: 0 10px;
        transition: 0.3s;
        &:hover {
          background-color: rgb(84, 84, 84);
        }
        &:first-of-type {
          background-color: #ff6700;
          &:hover {
            background-color: #e15a00;
          }
        }
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