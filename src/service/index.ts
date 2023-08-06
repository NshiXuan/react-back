import { message } from 'antd'
import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export const BASE_URL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : ''
export const TIME_OUT = 5000

class Request {
  // 1.定义实例属性
  instance: AxiosInstance

  // 2.在构造函数中创建实例instance
  constructor(config: AxiosRequestConfig) {
    // 创建实例
    this.instance = axios.create(config)

    // 5.封装拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        return res
      },
      (err) => {
        const { response } = err

        if (response && response.status) {
          switch (response.status) {
            case 400:
              message.error('请求错误')
              break
            case 401:
              message.error('未授权，请登录')
              break
            case 403:
              message.error('拒绝访问')
              break
            case 404:
              message.error(`请求地址出错: ${response.config.url}`)
              break
            case 408:
              message.error('请求超时')
              break
            case 500:
              message.error('服务器内部错误')
              break
            case 501:
              message.error('服务未实现')
              break
            case 502:
              message.error('网关错误')
              break
            case 503:
              message.error('服务不可用')
              break
            case 504:
              message.error('服务超时')
              break
            case 505:
              message.error('HTTP版本不受支持')
              break
            default:
              message.error('网络错误')
          }
        } else {
          message.error('网络错误')
        }
        return err
      }
    )
  }

  // 3.封装公共的request函数
  request<T>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<T, AxiosResponse<T>>(config)
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  // 4.封装get post patch delete请求
  get<T = any>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'POST' })
  }

  put<T = any>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'PUT' })
  }

  delete<T = any>(config: AxiosRequestConfig) {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
}

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default request
