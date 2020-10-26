<!--  -->
<template>
  <div class="mine-header">
    <form class="login-form">
      <div class="login-title">
        <i class="iconfont icon-back" onclick="window.history.back()"></i>
        <h1>用户登录</h1>
      </div>
      <div class="login-item">
        <div class="login-user">
          <div class="login-input">
            <div class="label">
              <i class="iconfont icon-user"></i>
            </div>
            <div class="label-right">
              <input type="text" placeholder="请输入账号" />
            </div>
          </div>
        </div>
        <div class="login-user">
          <div class="login-input">
            <div class="label">
              <i class="iconfont icon-pwd"></i>
            </div>
            <div class="label-right">
              <input type="text" placeholder="请输入账号" />
            </div>
            <i class="iconfont icon-liulan1 disabled"></i>
          </div>
        </div>
        <a href="" class="new-register">新用户注册</a>
        <a href="" class="list-password">忘记密码?</a>
      </div>
      <button class="btn">登录</button>
    </form>
    <div class="messige">
      <a href="">短信验证码登录
        <i class="iconfont icon-more"></i>
      </a>
      
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
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
.mine-header {
  padding: 1.1rem;
  width: 37.5rem;
  height: 37.4rem;
  box-sizing: border-box;
  .login-form {
    width: 100%;
    height: 28.7rem;
    .login-title {
      width: 100%;
      height: 8.5rem;
      // margin-top: 1rem;
      h1 {
        font-size: 3rem;
        margin-top: 3rem;
      }
    }
    .login-item {
      margin-top: 2.5rem;
      overflow: hidden;
      width: 100%;
      height: 11.5rem;
      .login-user {
        line-height: 40px;
        position: relative;
        font-size: 14px;
        width: 100%;
        height: 4.1rem;
        .login-input {
          border-bottom: 1px solid #ddd;
          overflow: hidden;
          padding: 0.8rem 0;
          position: relative;
          font-size: 1.5rem;
          width: 100%;
          height: 4.1rem;
          box-sizing: border-box;
          display: flex;
          .label {
            width: 2rem;
            height: 2.4rem;
            line-height: 2.4rem;
          }
          .label-right {
            width: 33.2rem;
            height: 2.4rem;
            line-height: 2.4rem;
            input {
              border: 0;
              height: 2.4rem;
              line-height: 2.4rem;
              box-sizing: border-box;
              width: 100%;
              color: #666;
              font-size: 1.5rem;
              // padding: 0 1rem 0 0;
              background: none;
            }
          }
        }
      }
    }
    .new-register {
      font-size: 1.4rem;
      line-height: 2;
      margin: 0.5rem 0 0;
      color: #4b89dc;
      float: left;
    }
    .list-password {
      font-size: 1.4rem;
      line-height: 2;
      margin: 0.5rem 0 0;
      color: #4b89dc;
      float: right;
    }
    .btn {
      font-size: 1.4rem;
      color: #fff;
      border: 0;
      text-align: center;
      padding: 1.1rem 0;
      width: 100%;
      display: block;
      background: #f92028;
      margin-top: 2rem;
    }
  }
  .messige {
    width: 100%;
    height: 2rem;
    margin-top: 3.5rem;
    a{
      width: 100%;
    display: block;
    text-align: center;
    font-size: 1.5rem;
    color: #f92028;
    font-weight: 500;
    }
  }
}
</style>