import request from '@/utils/request'

export function getList(params) {
  return request({
    // url: '/table/list',
    url: '/homepage/mine',
    method: 'get',
    params
  })
}
