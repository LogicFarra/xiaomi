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
// 获取 广告图片 组件数据
export const getPublicImgsAPI = ()=>{
    return axios.request({
        url:"/public_imgs"
    })
}
// 获取 视频封面 数据
export const getVideoCoverAPI = ()=>{
    return axios.request({
        url:"/video_cover"
    })
}
// 获取 售后 数据
export const getAfterSaleAPI = ()=>{
    return axios.request({
        url:"/after_sale"
    })
}
// 获取 详细服务 数据
export const getServiceAPI = ()=>{
    return axios.request({
        url:"/service"
    })
}
// 获取 客服信息 数据
export const getCallUsAPI = ()=>{
    return axios.request({
        url:"/call_us"
    })
}
// 获取 尾部导航 数据
export const getFooterNavAPI = ()=>{
    return axios.request({
        url:"/footer_nav"
    })
}
// 获取 尾部证书 数据
export const getFooterSitesAPI = ()=>{
    return axios.request({
        url:"/footer_sites"
    })
}
// 获取 尾部动态图
export const getFooterGifsAPI = ()=>{
    return axios.request({
        url:"/footer_gifs"
    })
}
// 查询商品信息
export const getProductInfoAPI = (product)=>{
    return axios.request({
        url:"/all_products?product=" + product
    })
}
// 查询某个人的账户信息
export const getAccountInfoAPI = (account)=>{
    return axios.request({
        url:"/user_database",
        params:{account : account}
    })
}
// 添加账户信息
export const addPersonAPI = ({id,account,password})=>{
    return axios.request({
        method:"POST",
        url:'/user_database',
        data:{
            id:id,
            account:account,
            password:password
        }
    })
}
// 获取购物车中商品
export const getShopCarAPI = ()=>{
    return axios.request({
        url:"shop_car"
    })
}
// 删除购物车中某件商品
export const deleteShopCarAPI = (id)=>{
    return axios.request({
        method:"DELETE",
        url:"shop_car/"+id,
    })
}
// 搜索购物车中特定的商品信息
export const searchShopCarAPI = ({product,disposition,version,color})=>{
    return axios.request({
        url:"shop_car",
        params:{
            product,
            disposition,
            version,
            color
        }
    })
}
// 添加商品到购物车
export const addProductAPI = (data)=>{
    return axios.request({
        url:"shop_car",
        method:"POST",
        data:data
    })
}
// 查询指定类型所有商品
export const searchProductAPI = (keyword)=>{
    return axios.request({
        url:"search_database?type="+keyword
    })
}
//获取个人中心导航栏数据
export const userCenterNavAPI = ()=>{
    return axios.request({
        url:"userNav"
    })
}
// 获取以旧换新页面图片
export const changeNewsImgAPI = ()=>{
    return axios.request({
        url:"changeNewImg"
    })
}
// 获取收货地址数据
export const getLocationAPI = ()=>{
    return axios.request({
        url:"citys"
    })
}
// 添加收货地址到数据库
export const addLocationAPI = (data)=>{
    return axios.request({
        url:"citys",
        method:"POST",
        data:data
    })
}
//修改收货地址到数据库
export const editLocationAPI = (id,data)=>{
    return axios.request({
        url:'citys/'+id,
        method:"PUT",
        data:data
    })
}
// 获取猜你喜欢组件数据
export const getLikeAPI = ()=>{
    return axios.request({
        url:"youLike"
    })
}