<template>
  <div class="main">
    <UserItem :title="title" :nav="nav" :index.sync="index"></UserItem>
    <div class="container_box" v-if="index == 1">
      <UserNoneMsg :message="noMsg[0]" :message2="noMsg[1]"></UserNoneMsg>
      <div class="as">
        <a v-for="item in a" :key="item.path" :href="item.path"
          >{{ item.text }}
        </a>
      </div>
    </div>
    <div class="container_box" v-else-if="index == 2">
      <UserNoneMsg :message="noMsg[0]" :message2="noMsg[1]"></UserNoneMsg>
      <div class="as">
        <a v-for="item in a" :key="item.path" :href="item.path"
          >{{ item.text }}
        </a>
      </div>
    </div>
    <div class="container_box" v-else-if="index == 3">
      <UserNoneMsg :message="noMsg[0]" :message2="noMsg[1]"></UserNoneMsg>
      <div class="as">
        <a v-for="item in a" :key="item.path" :href="item.path"
          >{{ item.text }}
        </a>
      </div>
    </div>
    <div class="container_box" v-else>
      <div class="input_button">
        <input type="text" :placeholder="placeholder" />
        <button>{{ buttonText }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import UserItem from "@/components/userItem/index.vue";
import UserNoneMsg from "@/components/userNoneMsg/index.vue";
export default {
  name: "cenCoupons",
  components: { UserItem, UserNoneMsg },
  data() {
    return {
      nav: [
        {
          title: "未使用",
          index: 1,
        },
        {
          title: "已使用",
          index: 2,
        },
        {
          title: "已失效",
          index: 3,
        },
        {
          title: "兑换优惠券",
          index: 4,
        },
      ],
      index: 1,
      title: "优惠券",
      noMsg: [
        "未找到相应优惠券",
        "参加小米社区活动，微博、微信活动即有机会赢优惠券哦~",
      ],
      a: [
        {
          path: "https://www.xiaomi.cn/",
          text: "小米社区",
        },
        {
          path: "https://weibo.com/sorry?usernotexists",
          text: "官方微博",
        },
      ],
      placeholder: "请输入优惠券兑换码",
      buttonText: "确认兑换",
    };
  },
};
</script>

<style scoped lang="less">
.main {
  .container_box {
    .as {
      text-align: center;
      font-size: 14px;
      a {
        padding: 0 10px;
        &:first-of-type {
          border-right: 1px solid black;
        }
        &:hover {
          color: #ff6700;
        }
      }
    }
    .input_button {
      padding: 40px 0;
      input {
        border: 1px solid silver;
        outline: silver;
        color: silver;
        &::placeholder {
          color: silver;
        }
        padding: 10px;
        width: 250px;
      }
      button {
        padding: 10px 30px;
        background-color: #ff6700;
        border: none;
        color: white;
        margin-left: 20px;
      }
    }
  }
}
</style>