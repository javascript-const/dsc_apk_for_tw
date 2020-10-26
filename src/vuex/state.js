//state是vuex中储存数据的
const state = {
    num: 1,
    catetoryDatas: [], //分类--类别数据
    swipeDatas: [],
    goodsLists: [],
    goodsDetails: [],
    carts: localStorage["carts"] ? JSON.parse(localStorage["carts"]) : [],
    checkAll: localStorage["checkAll"] ? JSON.parse(localStorage["checkAll"]) : false,
    searchList: [],
    getuserInfo: []
}

export default state