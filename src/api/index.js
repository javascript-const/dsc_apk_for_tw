import ajax from "./ajax"

const Base_URL = "/api"


export const getHomeSwipe = () => ajax(Base_URL + "/v1/index/swipe")