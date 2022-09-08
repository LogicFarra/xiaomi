import axios from '../utils/request.js'

// 获取头部导航栏分类信息
export const getHeaderNavAPI = () =>{
    return axios.request({
        url:'/header_nav'
    })
}
// 获取轮播图图片
export const getShufflingImgAPI = () =>{
    return axios.request({
        url:'/shuffling_figure'
    })
}
// 获取横向商品导航栏商品数据
export const getProductNavAPI = ()=>{
    return axios.request({
        url:'/product_nav'
    })
}
// 获取竖向导航栏商品数据
export const getProductAsideNavAPI = ()=>{
    return axios.request({
        url:'/product_aside_nav'
    })
}
// 获取搜索框关键词
export const getSearchKeywordsAPI = ()=>{
    return axios.request({
        url:"/search_keywords"
    })
}
// 获取网站频道导航数据
export const getWebChannelAPI = ()=>{
    return axios.request({
        url:"/web_channel"
    })
}
// 获取网站频道右侧商品宣传图片信息
export const getWebChannelPublicityAPI = ()=>{
    return axios.request({
        url:"/web_channel_publicity_imgs"
    })
}
// 获取 生活电器 组件数据
export const getDomesticApplianceAPI = ()=>{
    return axios.request({
        url:"/domestic_appliance"
    })
}
// 获取 手机 组件数据
export const getMobilePhoneAPI = ()=>{
    return axios.request({
        url:"/mobile_phone"
    })
}
// 获取 智能穿戴 组件数据
export const getTechnologyWearAPI = ()=>{
    return axios.request({
        url:"/technology_wear"
    })
}
// 获取 笔记本平板 组件数据
export const getComputerIpadAPI = ()=>{
    return axios.request({
        url:"/computer_ipad"
    })
}
// 获取 家电 组件数据
export const getHomeAppliancesAPI = ()=>{
    return axios.request({
        url:"/home_appliances"
    })
}
// 获取 厨房电器 组件数据
export const getKitchenAppliancesAPI = ()=>{
    return axios.request({
        url:"/kitchen_appliances"
    })
}
// 获取 智能家居 组件数据
export const getTechnologyHomeAPI = ()=>{
    return axios.request({
        url:"/technology_home"
    })
}
// 获取 运动出行 组件数据
export const getSportAPI = ()=>{
    return axios.request({
        url:"/sport"
    })
}
// 获取 日用百货 组件数据
export const getDailyNecessitiesAPI = ()=>{
    return axios.request({
        url:"/daily_necessities"
    })
}