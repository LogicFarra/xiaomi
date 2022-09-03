import axios from '../utils/request.js'

// 获取头部导航栏分类信息
export const getHeaderNavAPI = () =>{
    return axios.request({
        url:'/header_nav'
    })
}