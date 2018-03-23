import request from '@/utils/request';

export function addIrregularCostItem(path, param) {
  console.log(param);
  return request({
    url: '/irregular/cost/item/save',
    method: 'post',
    data: param
  })
}