import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/cboard/homepage/mine',
    method: 'get',
    params
  })
}
