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