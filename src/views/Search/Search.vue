<!--  -->
<template>
  <div class="search">
   <div class="category-header">
     <header>
       <a href="javascript:;" class="iconfont icon-jiantou3" onclick="window.history.back()"></a>
      <form action>
        <input type="search" placeholder="请输入关键字" v-model="keywords">
        <i class="iconfont icon-sousuo2"></i>
      </form>
      <a href="javascript:;" style="font-size:1.4rem" @click="searchkeywords">搜索</a>
     </header>
   </div>

   <div class="search-wrap">
     <div class="search-wrap-title">
       <div class="search-title">最近搜索</div>
       <div class="iconfont icon-shanchu"></div>
     </div>
     <ul class="search-list">
       <li>手机</li>
       <li>手机</li>
       <li>手机</li>
       <li>手机</li>
       <li>手机</li>
     </ul>
   </div>

   <div class="search-wrap" style="margin-top:1rem">
     <div class="search-wrap-title">
       <div class="search-title">热搜</div>
     </div>
     <ul class="search-list">
       <li>手机</li>
       <li>手机</li>
       <li>手机</li>
       <li>手机</li>
       <li>手机</li>
     </ul>
   </div>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Footer from "@/components/Footer.vue"; //@ 默认执行vue项目的src目录  ../../components/Footer.vue

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
  },
  data() {
    //这里存放数据
    return {
      keywords:""
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    searchkeywords(){
      if(this.keywords){
        this.$store.dispatch("searchkeywords",{
          keywords:this.keywords
        })
        this.$router.push("/searchlist")
      }
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.category-header {
  width: 100%;
  height: 4.4rem;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  background: #fff;
  border-bottom: 1px solid #ccc;
  header {
    display: flex;
    form {
      width: 70%;
      position: relative;
      input {
        height: 3rem;
        border: 1px solid #efefef;
        width: 100%;
        border-radius: 1.5rem;
        margin-top: 0.7rem;
        text-indent: 10px;
      }
      i {
        position: absolute;
        right: 0;
        width: 4.4rem;
        height: 4.4rem;
        line-height: 4.4rem;
        text-align: center;
        color: #ccc;
      }
    }
    a {
      display: block;
      width: 15%;
      height: 4.4rem;
      line-height: 4.4rem;
      text-align: center;
    }
  }
}
.search-wrap {
  margin-top: 6rem;
  .search-wrap-title {
    display: flex;
    height: 4.4rem;
    line-height: 4.4rem;
    justify-content: space-between;
    margin: 0 10px;
    .search-title {
      font-size: 1.4rem;
    }
  }
  .search-list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    li {
      width: 20%;
      height: 3rem;
      border: 1px solid #ccc;
      background: #efefef;
      box-sizing: border-box;
      text-align: center;
      line-height: 3rem;
      margin: 1% 2.5%;
    }
  }
}
</style>