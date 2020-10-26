<!--  -->
<template>
<div class='list-detail'>
    <CategoryHeader />
    <List :lists="goodsLists"/>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import CategoryHeader from "./CategoryHeader"
import List from "@/components/List.vue"
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    CategoryHeader,
    List
},
data() {
//这里存放数据
return {
    lists:[],
};
},
//监听属性 类似于data概念
computed: {
    goodsLists(){
    return this.$store.state.goodsLists; 
    }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
mounted() {
    console.log(this.$store.state);
this.$store.dispatch("getGoodsList", { cat_id: this.$route.query.cat_id });
},
}
</script>
<style>

</style>