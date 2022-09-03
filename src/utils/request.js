import axios from "axios"
const baseURL = 'http://localhost:3000'
const myAxios = axios.create({
    baseURL : baseURL
})
export default myAxios