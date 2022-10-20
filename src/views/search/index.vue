<template>
  <div class="search">
    <div class="search_container">
      <main>
        <ul class="main_container">
          <li
            class="main_container_item"
            v-for="(item, key) in fullData[curIndex - 1]"
            product="item.product"
            :key="key"
            @click="toBuy(item.product)"
          >
            <img :src="item.img" alt="" width="200px" />
            <p class="info">
              <font>{{ item.product }}</font>
              &nbsp;
              <font>{{ item.color }}</font>
            </p>
            <p class="price">
              <font class="cur_price">{{ item.price }}元</font>
              <font class="old_price" v-if="item.oldPrice"
                >{{ item.oldPrice }}元</font
              >
            </p>
            <ul class="activity">
              <li class="red" v-if="item.ticket">券</li>
              <li class="red" v-if="item.increase">加价购</li>
              <li class="blue" v-if="item.stages">分期</li>
              <li class="red" v-if="item.gifts">赠</li>
              <li class="green" v-if="item.new">新品</li>
            </ul>
          </li>
        </ul>
        <ul class="pages">
          <li @click="switchPage(true)">
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </li>
          <li
            v-for="index in pages"
            :key="index"
            :class="{ cur: curIndex === index }"
            @click="changePage(index)"
          >
            {{ index }}
          </li>
          <li @click="switchPage(false)">
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </li>
        </ul>
      </main>
      <footer>
        <YouLike></YouLike>
      </footer>
    </div>
  </div>
</template>

<script>
import { searchProductAPI } from "@/api";
import YouLike from "@/components/youLike/index.vue";
export default {
  name: "search",
  components: { YouLike },
  computed: {
    // 搜索的关键字,用来向服务器查询指定类型的商品
    keyWord() {
      return this.$route.query.product;
    },
  },
  data() {
    return {
      fullData: [], // 分页加工完后的数据
      pages: [], // 分页栏
      curIndex: 1, // 当前展示哪一页
    };
  },
  methods: {
    // 通过关键字发起请求,查询服务器所有类型的商品
    async getinitData() {
      const { data } = await searchProductAPI(this.keyWord);
      let [allData] = data[0].products;
      this.filterData(allData); //获取完初始数据后,加工数据
      this.setPages(); // 加工完商品数据后,设置分页栏
    },
    // 加工初始数据方法
    filterData(data) {
      let count = Math.ceil(data.length / 8); // 一页八条数据,计算可以分几页
      for (let i = 0; i < count; i++) {
        this.fullData.push(data.slice(i * 8, (i + 1) * 8)); //一次截取八条数据组成一个数组,推入fullData中
      }
    },
    // 准备分页栏方法
    setPages() {
      for (let i = 1; i <= this.fullData.length; i++) {
        this.pages.push(i);
      }
    },
    // 点击具体页数分页方法
    changePage(index) {
      this.curIndex = index; //切换分页
      document.documentElement.scrollTop = 0; // 切换完后返回到顶部
    },
    // 点击加减分页方法
    switchPage(status) {
      if (status === true) {
        // 上一页 
        if (this.curIndex === 1) return;
        this.curIndex--;
      } else {
        // 下一页
        if(this.curIndex === this.pages.length) return
        this.curIndex++;
      }
      document.documentElement.scrollTop = 0; // 切换完后返回到顶部
    },
    // 商品点击事件
    toBuy(product){
      this.$router.push({
        path:"/shop/buy",
        query:{
          product:product
        }
      })
    }
  },
  created() {
    document.documentElement.scrollTop = 0
    // 创建时获取所有数据
    this.getinitData();
  },
  watch:{
    // 监测关键字变化
    keyWord(newvalue){
      // 清空上个关键字的所有数据
      this.fullData = []
      this.pages = []
      this.curIndex = 1
      // 清空数据后重新获取当前关键字数据
      this.getinitData()
    }
  }
};
</script>

<style scoped lang="less">
.search {
  background-color: #f5f5f5;
  .search_container {
    width: 1226px;
    margin: 0 auto;
    main {
      padding:20px 0 0 0;
      .main_container {
        display: flex;
        flex-wrap: wrap;
        .main_container_item {
          margin: 0 6px 6px 4px;
          background-color: white;
          width: 296px;
          height: 383px;
          box-sizing: content-box;
          padding-top: 47px;
          text-align: center;
          font-size: 14px;
          transition: 0.8s;
          cursor: pointer;
          &:hover {
            box-shadow: 0 0 15px rgba(64, 64, 64, 0.402);
            .info {
              color: #ff6700;
            }
          }
          img {
            margin-bottom: 16px;
          }
          .info {
            width: 230px;
            margin: 0 auto;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          .price {
            margin-top: 15px;
            .cur_price {
              color: #ff6700;
              margin-right: 3px;
            }
            .old_price {
              color: #d8d8d8;
              position: relative;
              &::before {
                content: "";
                position: absolute;
                top: 48%;
                width: 100%;
                height: 2px;
                background: #d8d8d8;
              }
            }
          }
          .activity {
            display: flex;
            justify-content: center;
            margin-top: 20px;
            li {
              color: white;
              padding: 0 8px;
              border-radius: 3px;
              margin: 0 2px;
            }
            .red {
              background-color: rgb(255, 53, 53);
            }
            .blue {
              background-color: rgb(108, 108, 255);
            }
            .green {
              background-color: rgb(89, 255, 89);
            }
          }
        }
      }
      .pages {
        padding: 30px 0;
        display: flex;
        justify-content: center;
        li {
          margin: 0 5px;
          padding: 6px 20px;
          cursor: pointer;
          color: #c1c1c1;
          transition: 0.2s;
          &:hover {
            background-color: #d8d8d8;
            color: white;
          }
        }
        .cur {
          background-color: #717171;
          color: white;
        }
      }
    }
  }
}
</style>