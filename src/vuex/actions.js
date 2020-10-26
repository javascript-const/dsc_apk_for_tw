//actions  定义方法来提交mutations中定义的方法

import { getHomeSwipe } from "@/api/index.js"
import { getGoodsList, getGoodsDetail, searchFn } from "@/api/list.js"
const actions = {
    actAddNum(context) {
        context.commit("addNum")
    },
    actAddNumX(context, data) {
        context.commit("addNumX", data)
    },
    actgetCategoryDatas(context, data) {
        context.commit("getCategoryDatas", data)
    },
    async searchkeywords(context, params) {
        const result = await searchFn(params)
        console.log(result);
        context.commit("searchkeywords", result.data)
    },
    async actgetSwipeDatas(context) {
        const result = await getHomeSwipe()
        context.commit("getSwipeDatas", result.data)
    },
    async getGoodsList(context, data) {
        const result = await getGoodsList(data)
        console.log(result);
        context.commit("getGoodsList", result.data)
    },
    async getGoodsDetails(context, data) {
        const result = await getGoodsDetail(data)
        context.commit("getGoodsDetails", result.data[0])
    },
    getuserInfo(context, data) {
        console.log(data);
        context.commit("getuserInfo", data)
    }
}

export default actions