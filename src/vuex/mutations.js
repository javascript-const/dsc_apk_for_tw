//mutations里面定义的方法是用来修改state
import { MessageBox } from "mint-ui";
const mutations = {
    addNum(state) {
        console.log(state);
        ++state.num
    },
    addNumX(state, data) {
        console.log(state);
        state.num = state.num + data
    },
    getCategoryDatas(state, data) {
        state.catetoryDatas = data
    },
    getSwipeDatas(state, data) {
        state.swipeDatas = data
    },
    getGoodsList(state, data) {
        state.goodsLists = data
    },
    getGoodsDetails(state, data) {
        state.goodsDetails = data
    },
    searchkeywords(state, data) {
        state.searchList = data
        console.log(data);
    },
    // 购物车数据
    setCartDatas(state, data) {
        if (data) {
            state.carts.push(data)
        }
        console.log(1111);
        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    // 加按钮
    addCart(state, index) {
        state.carts[index].value++
            localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    // 减按钮
    reduceCart(state, index) {
        if (state.carts[index].value == 1) {
            state.carts[index].value == 1
            MessageBox({
                title: "提示",
                message: "他娘的、至少也得买一个"
            })
        } else {
            state.carts[index].value--
                localStorage.setItem("carts", JSON.stringify(state.carts))
        }

    },
    // 删除按钮
    delet(state, index) {
        MessageBox.confirm("你他娘的确定要删？？嗯??").then(() => {
            state.carts.splice(index, 1)
            localStorage.setItem("carts", JSON.stringify(state.carts))
        }, () => {
            console.log("点击了取消");
        })
    },
    // 输入数值
    changeValue(state, data) {
        console.log(data.val);
        console.log(data.index);
        if (data.val <= 1) {
            data.val = 1
            MessageBox({
                title: "提示",
                message: "他娘的、至少也得买一个"
            });
        }
        state.carts[data.index].value = data.val
        localStorage.setItem("carts", JSON.stringify(state.carts))

    },
    changeSelect(state, isSelect) {
        // console.log(state);
        // console.log(isSelect);
        // console.log(isSelect.cart);
        state.carts[isSelect.index] = isSelect.cart

        let isCheck = state.carts.every((item) => {
            return item.isSelect == true
        })

        state.checkAll = isCheck
            // console.log(isCheck);
        localStorage.setItem("checkAll", state.checkAll)

        localStorage.setItem("carts", JSON.stringify(state.carts)) //重新设置本地存储数据

    },
    selectAllFn(state) {
        console.log(state);
        state.checkAll = !state.checkAll
        state.carts.forEach(item => {
            item.isSelect = state.checkAll
        })
        localStorage.setItem("checkAll", state.checkAll)
        localStorage.setItem("carts", JSON.stringify(state.carts))

    },
    getuserInfo(state, data) {
        state.getuserInfo = data
        console.log(data);
    }
}

export default mutations