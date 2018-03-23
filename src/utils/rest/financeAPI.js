import Vue from 'vue';
import { resolve } from 'url';
import { _changeJson } from '@/utils';
const vm = new Vue();

const API_FINANCE = vm.$api.financeapi;
const API_RENT = vm.$api.rentapi;
const maxPageSize = 200000;

// 获取收款账户列表
export async function queryCollectList(param) {
  const res = await API_FINANCE.listUsingGET_7(param);
  const data = res.data;
  if (data.code === 200) {
    return data.data;
  } else {
    return data.message;
  }
}

// 获取结算组别全部列表
export async function queryAccountGroup() {
  const param = {
    pageSize: maxPageSize
  };
  const res = await API_FINANCE.listUsingGET_11(param);
  const data = res.data;
  if (data.code === 200) {
    const json = _changeJson(data.data.list, 'id');
    return {
      data: data.data,
      json: json
    };
  } else {
    return data.message;
  }
}

// 获取项目费用全部列表
export async function queryCost() {
  const param = {
    pageSize: maxPageSize
  };
  const res = await API_FINANCE.listUsingGET_4(param);
  const data = res.data;
  if (data.code === 200) {
    const json = _changeJson(data.data.list, 'id');
    return {
      data: data.data,
      json: json
    };
  } else {
    return data.message;
  }
}

// 获取税率全部列表
export async function queryTaxRate() {
  const param = {
    pageSize: maxPageSize
  };
  const res = await API_FINANCE.listUsingGET_6(param);
  const data = res.data;
  if (data.code === 200) {
    const json = _changeJson(data.data.list, 'id');
    return {
      data: data.data,
      json: json
    };
  } else {
    return data.message;
  }
}

// 获取商户全部列表（租务）
export async function queryMerchant() {
  // const param = {
  //   pageSize: maxPageSize
  // };
  const res = await API_RENT.listUsingGET_7();
  const data = res.data;
  if (data.code === 200) {
    const json = _changeJson(data.data.list, 'id');
    return {
      data: data.data,
      json: json
    };
  } else {
    return data.message;
  }
}