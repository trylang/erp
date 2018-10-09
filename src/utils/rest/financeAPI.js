import Vue from 'vue';
import { resolve } from 'url';
import { _changeJson } from '@/utils';
const vm = new Vue();

const API_FINANCE = vm.$api.financeapi;
const API_RENT = vm.$api.rentapi;
const API_SYST = vm.$api.systemapi;
const maxPageSize = 5000;

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
export async function queryAccountGroup() {
  const res = await API_FINANCE.listAllUsingGET();
  const data = res.data;
  if (data.status === 200) {
    const json = _changeJson(data.data, 'id');
    return {
      data: data.data,
      json: json
    };
  } else {
    return data.message;
  }
}

//获取下拉选项
export async function queryCostType() {
    const res = await API_RENT.baseDataOptionsUsingGET();
    const data = res.data;
    if (data.status === 200) {
        const json = _changeJson(data.data.cost_type, 'id');
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
  const res = await API_FINANCE.listAllUsingGET1();
  const data = res.data;
  if (data.status === 200) {
    const json = _changeJson(data.data, 'id');
    return {
      data: data.data,
      json: json
    };
  } else {
    return data.message;
  }
}

// 获取商户列表（租务）
export async function queryMerchant(type = 4) {
  const res = await API_RENT.listForFormalUsingGET({type});
  const data = res.data;
  if (data.status === 200) {
    const json = _changeJson(data.data, 'id');
    return {
      data: data.data,
      json: json
    };
  } else {
    return data.message;
  }
}

// 获取店铺列表（租务）
export async function queryShop() {
  // const param = {
  //   pageSize: maxPageSize
  // };
  const res = await API_RENT.listUsingGET_13();
  const data = res.data;
  if (data.status === 200) {
    const json = _changeJson(data.data, 'id');
    data.data.map(item => {
      return item.shopName = `${item.shopCode}（${item.shopName}）`;
    })
    return {
      data: data.data,
      json: json
    };
  } else {
    return data.message;
  }
}

// 获取店铺列表 （销售统计里用的）（接口在租务里）
export async function saleQueryShop() {
  // const param = {
  //   pageSize: maxPageSize
  // };
  const res = await API_RENT.doweListUsingGETShop({request:{statusList: [3, 4, 5]}});//0新增1空置2取消空置3预定4使用中5.失效
  const data = res.data;
  if (data.status === 200) {
    const json = _changeJson(data.data, 'id');
    return {
      data: data.data,
      json: json
    };
  } else {
    return data.message;
  }
}
// 获取店铺列表 （对账报表用的）（接口在租务里）
export async function saleTQueryShop() {
  // const param = {
  //   pageSize: maxPageSize
  // };
  const res = await API_RENT.getByStatusUsingPOST({status: [3, 4, 5]});//0新增1空置2取消空置3预定4使用中5.失效
  const data = res.data;
  if (data.status === 200) {
    const json = _changeJson(data.data, 'id');
    return {
      data: data.data,
      json: json
    };
  } else {
    return data.message;
  }
}

// 获取商场楼层列表（租务）
export async function queryFloor() {
  let buildId = '';
  await API_RENT.listUsingGET_4().then(res=>{
    res.data.data.forEach(item => {
        if (item.buildName == '商场') {
          buildId = item.id;
        }
    })
  });
  const res = await API_RENT.selectByBuildIdUsingGET({buildId});
  const data = res.data;
  if (data.status === 200) {
    const json = _changeJson(data.data, 'id');
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
  const res = await API_RENT.listFormalContractUsingGET(param);
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
// 获取商户下的合同列表（租务）
export async function queryMerchantContract(merchantId) {
    const res = await API_RENT.listFormalContractUsingGET({merchantId});
    const data = res.data;
    let json = {};
    if (data.status === 200) {
        if (data.data && data.data.length > 0) {
          json = _changeJson(data.data, 'id');
        }        
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
    const idJson = _changeJson(data.data, 'id');
    return {
      data: data.data,
      json: json,
      idJson: idJson
    };
  } else {
    return data.message;
  }
}

// 获取字典可用选项数据（code）
export async function queryAvailByCode(code) {
  const res = await API_SYST.availItemListUsingGET({code});
  const data = res.data;
  if (data.status === 200) {
    const json = _changeJson(data.data, 'value');
    const idJson = _changeJson(data.data, 'id');
    return {
      data: data.data,
      json: json,
      idJson: idJson
    };
  } else {
    return data.message;
  }
}


