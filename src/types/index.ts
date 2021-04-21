export type Method = 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'patch' | 'PATCH'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}