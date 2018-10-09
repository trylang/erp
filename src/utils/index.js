export function _replace(name, data, replaceData) {
  let index = data.findIndex(item => {
    return item[name] === replaceData[name];
  });
  data.splice(index, 1, replaceData);
}

export function _remove(name, param, data) {
  let index = data.findIndex(item => {
    return item[name] === param;
  });
  data.splice(index, 1);
}

export function _returnPromise(api, url, callback) {
  return new Promise((resolve, reject) => {
    api(url.path, url.param).then(returnObj => {
      callback(returnObj);
      resolve();
    }).catch((error) => {
      reject(error);
    });
  })
}

export function _changeJson(data, string) {
  const json = {};
  data.forEach(item => {
    json[item[string]] = item;
  });
  return json;
}

export function _uuid() {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return uuid;
}

export function formatTree(tree, param = {}) {
  if (Object.keys(tree).length === 0) return [];
  let formatTree = [];
  const obj = {
    '商铺': 0,
    '场地':2,
    '广告位': 3,
    '写字楼': 1
  };
  for (let key in tree) {
    formatTree.push({
      id: _uuid(),
      label: key,
      children: tree[key] && tree[key].length > 0 ? tree[key] : null,
      disabled: param.onlyChild
    });
  };
  formatTree.forEach(first => {
    if (first.children) {
      first.children.forEach(second => {
        second.id = second.merchantId;
        second.label = second.merchantInfo;
        if (second.contract) {
          second.disabled = param.onlyChild;
          second.contract.forEach(third => {
            third.id = third.contractId;
            third.label = third.contractInfo;
            if (third.clearing) {
              third.disabled = param.onlyChild;
              third.clearing.forEach(forth => {
                forth.id = forth.clearingId;
                forth.label = forth.clearingInfo;
                forth.contractId = third.contractId;
                forth.shopId = third.shopId;
                forth.merchantName = second.merchantInfo;
                forth.merchantId = second.merchantId;
              });
              third.children = third.clearing;
            }
          });
          second.children = second.contract;
        }
      });
    }

  });
  return formatTree;
}

export function isArray(o) {
  return Object.prototype.toString.call(o) == '[object Array]';
}

export function filterTree(tree, name) {
  if (!tree) return; 
  if (!name) return tree;

  let treeAry = [];
  const func = (tree, name) => {
    if (!tree) return;
    if (!tree.children && isArray(tree)) {
      tree.forEach(item => {
        if (item.label.indexOf(name) >= 0) {
          treeAry.push(item);
        } else {
          func(item.children, name);
        }     
      }); 
    }    
  };
  
  func(tree, name.trim());
  return treeAry;
}

export function onlyNumWord(value) {
  let val = value.replace(/^\s+|\s+$/g, '');
  const reg = /^[0-9a-zA-Z]+$/;
  return reg.test(val);
}

export function numberNotE(value) {
  const val = value + '';
  if(!val || val.indexOf('e') >= 0) return false;
  else return true;
}

export function numMax10(value) {
  const val = parseFloat(value);
  if(val < 0 || val > 999999999) return false;
  else return true;
}

export function numPartmax2(value) {
  const val = value + '';
  if (val.indexOf('.') >= 0 && val.split('.')[1].length > 2) return false;
  else return true;
}

export function reExport(content, string, value, time=120) {
  content[string] = value;
  var timer = setInterval(function () {
      time--;
      if (time === 0) {
          content[string] = !value;
          clearInterval(timer)
      }
  }, 1000)
}
