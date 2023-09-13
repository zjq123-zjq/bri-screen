import axios from 'axios'
import { getToken } from './cookie'
import type { Data } from '@/types/request'
import type { InternalAxiosRequestConfig, AxiosResponse, Method } from 'axios'
const service = axios.create({
  baseURL: 'https://api-hmzs.itheima.net/v1',
  timeout: 5000
})

//请求拦截
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    //请求头发送token
    const token = getToken()
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

//响应拦截
service.interceptors.response.use(
  (Response: AxiosResponse) => {
    return Response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

const request = <T>(url: string, method: Method, submitData?: object) => {
  return service.request<T, Data<T>>({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}

export default request
