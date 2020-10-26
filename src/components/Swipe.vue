<!-- 公共的轮播图组件 -->
<template>
  <div class="swipe">

    <mt-swipe
      :auto="2000"
      :show-indicators="true"
      :default-index="1"
      :continuous="true"
    >
      <mt-swipe-item v-for="swipe in swipeDatas" :key="swipe.swipe_id">
        <img
          :src="swipe.swipe_img"
          alt
        />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>


export default {
  data(){
    return{
    }
  },
  methods: {

  },
  computed: {
    swipeDatas(){
      return this.$store.state.swipeDatas
    }
  },
  mounted() {
    this.$store.dispatch("actgetSwipeDatas",)
  },
};
</script>
<style lang="less">
.swipe {
  width: 100%;
  height: 12rem;
  img {
    width: 100%;
    height: 12rem;
  }
}
</style>