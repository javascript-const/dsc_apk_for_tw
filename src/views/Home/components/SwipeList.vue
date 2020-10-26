<!-- 水平滚动 -->
<template>
  <div>
    <div class="swipe-list-wrap">
      <div class="swipe-wrap2" :style="styleobj2">
        <div class="swipe-item" v-for="swipelist in swipeListDatas" :key="swipelist.id">
          <img :src="swipelist.imgsrc" alt />
          <span>{{swipelist.title}}</span>
        </div>
      </div>
    </div>
    <div class="progress">
      <div class="progress-bar" :style="styleobj"></div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  props: {
    swipeListDatas: Array,
  },
  components: {},
  data() {
    //这里存放数据
    return {
      screenW:
        document.documentElement.clientWidth || document.body.clientWidth,
      scrollContentW: 1100,
      bgBarW: 100,
      barW: 20,
      startX: 0,
      endX: 0,
      barMoveW: 0,
      contentMoveW: 0,
      contentMove: 0,
    };
  },
  methods: {
    //开始触摸
    touchstartFn(e) {
      //获取第一个触摸点
      let touch = e.touches[0];
      this.startX = Number(touch.pageX);
    },
    //触摸开始移动
    touchmoveFn(e) {
      let touch = e.touches[0];
      let moveWidth = Number(touch.pageX) - this.startX;
      this.contentMove = moveWidth + this.contentMoveW;
      this.barMoveW = -(
        (this.bgBarW / this.scrollContentW) * moveWidth -
        this.endX
      );

      //判断边界
      if (this.barMoveW <= 0) {
        this.barMoveW = 0;
      } else if (this.barMoveW > this.bgBarW - this.barW) {
        this.barMoveW = this.bgBarW - this.barW;
      }

      if (this.contentMove >= 0) {
        this.contentMove = 0;
      } else if (this.contentMove <= this.screenW - this.scrollContentW) {
        this.contentMove = this.screenW - this.scrollContentW;
      }
    },
    touchendFn() {
      this.endX = this.barMoveW;
      this.contentMoveW = this.contentMove;
    },
    //动态设置进度条的长度
    getBarWidth() {
      this.barW = (this.bgBarW * this.screenW) / this.scrollContentW;
    },
    //绑定事件方法
    bindEvent() {
      this.$el.addEventListener("touchstart", this.touchstartFn, false);
      this.$el.addEventListener("touchmove", this.touchmoveFn, false);
      this.$el.addEventListener("touchend", this.touchendFn, false);
    },
  },
  computed: {
    styleobj() {
      return {
        width: `${this.barW}px`,
        left: `${this.barMoveW}px`,
      };
    },
    styleobj2() {
      return {
        left: `${this.contentMove}px`,
      };
    },
  },
  mounted() {
    this.getBarWidth();
    this.bindEvent();
  },
};
</script>
<style lang="less">
.swipe-list-wrap {
  width: 100%;
  height: 19rem;
  background-color: #ccc;
  position: relative;
  left: 0;
  top: 0;
  overflow-x: hidden;
  .swipe-wrap2 {
    width: 110rem;
    height: 19rem;
    position: absolute;
    left: 0;
    top: 0;
    .swipe-item {
      width: 11rem;
      height: 19rem;
      background-color: #fff;
      border-radius: 0;
      float: left;
      display: flex;
      flex-direction: column;
      text-align: center;
      img {
        width: 10rem;
      }
    }
  }
}

//隐藏滚动条
.swipe-list-wrap::-webkit-scrollbar {
  display: none;
}

// 进度条样式
.progress {
  width: 100px;
  height: 5px;
  background: #ccc;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  .progress-bar {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 20px;
    background: #f00;
  }
}
</style>