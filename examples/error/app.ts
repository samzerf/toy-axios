import axios, { AxiosError } from '../../src'

axios({
  method: 'get',
  url: '/error/get1'
}).then((res) => {
  console.log('res', res)
}).catch((e: AxiosError) => {
  console.log(e.message)
  console.log(e.code)
  console.log(e.config)
  console.log(e.response)
  console.log(e.request)
})

axios({
  method: 'get',
  url: '/error/get'
}).then((res) => {
  console.log('res', res)
}).catch((e) => {
  console.log('error', e)
})

setTimeout(() => {
  axios({
    method: 'get',
    url: '/error/get'
  }).then((res) => {
    console.log('res', res)
  }).catch((e) => {
    console.log('error', e)
  })
}, 5000)

axios({
  method: 'get',
  url: '/error/timeout',
  timeout: 2000
}).then((res) => {
  console.log('res', res)
}).catch((e) => {
  console.log(e)
})