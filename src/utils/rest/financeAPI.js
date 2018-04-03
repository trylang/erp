import Vue from 'vue';
import { resolve } from 'url';
import { _changeJson } from '@/utils';
const vm = new Vue();

const API_FINANCE = vm.$api.financeapi;
const API_RENT = vm.$api.rentapi;
const API_SYST = vm.$api.systemapi;
const maxPageSize = 200000;

// 获取收款账户列表
export async function queryCollectList(param={}) {
  const res = await API_FINANCE.listUsingGET_7(param);
  const data = res.data;
  if (data.status === 200) {
    return data.data;
  } else {
    return data.message;
  }
}

// 获取结算组别列表
export async function queryAccountGroup(param={}) {
  const res = await API_FINANCE.listUsingGET_11(param);
  const data = res.data;
  if (data.status === 200) {
    const json = _changeJson(data.data.list, 'id');
    return {
      data: data.data,
      json: json
    };
  } else {
    return data.message;
  }
}

// 获取合同项目费用列表
export async function queryCost() {
  const param = {
    pageSize: maxPageSize
  };
  const res = await API_FINANCE.listUsingGET_7(param);
  const data = res.data;
  if (data.status === 200) {
    const json = _changeJson(data.data.list, 'id');
    return {
      data: data.data,
      json: json
    };
  } else {
    return data.message;
  }
}

// 获取税率列表
export async function queryTaxRate() {
  const param = {
    pageSize: maxPageSize
  };
  const res = await API_FINANCE.listUsingGET_9(param);
  const data = res.data;
  if (data.status === 200) {
    const json = _changeJson(data.data.list, 'id');
    return {
      data: data.data,
      json: json
    };
  } else {
    return data.message;
  }
}

// 获取商户列表（租务）
export async function queryMerchant() {
  // const param = {
  //   pageSize: maxPageSize
  // };
  const res = await API_RENT.listpgUsingGET_4();
  const data = res.data;
  if (data.status === 200) {
    const json = _changeJson(data.data.list, 'id');
    return {
      data: data.data,
      json: json
    };
  } else {
    return data.message;
  }
}

// 获取合同列表（租务）
export async function queryContract(param={}) {
  const res = await API_RENT.getListForPageUsingGET(param);
  const data = res.data;
  if (data.status === 200) {
    const json = _changeJson(data.data.list, 'id');
    return {
      data: data.data,
      json: json
    };
  } else {
    return data.message;
  }
}

// 获取字典数据（code）
export async function queryDicsByCode(code) {
  const res = await API_SYST.itemListUsingGET({code});
  const data = res.data;
  if (data.status === 200) {
    const json = _changeJson(data.data, 'value');
    return {
      data: data.data,
      json: json
    };
  } else {
    return data.message;
  }
}