import Vue from 'vue';
import { resolve } from 'url';
import { _changeJson } from '@/utils';
const vm = new Vue();

const API = vm.$api.financeapi;
const maxPageSize = 200000;

// 获取收款账户列表
export async function queryCollectList(param) {
  const res = await API.listUsingGET_7(param);
  const data = res.data;
    if(data.code === 200) {
      return data.data;
    } else {
      return data.message;
    }    
}

// 获取结算组别全部列表
export async function queryAccountGroup() {
  const param = {
    pageSize : maxPageSize
  };
  const res = await API.listUsingGET_8(param);
  const data = res.data;
    if(data.code === 200) {
      const json = _changeJson(data.data.list, 'id');
      return {
        data: data.data,
        json: json
      };
    } else {
      return data.message;
    }    
}