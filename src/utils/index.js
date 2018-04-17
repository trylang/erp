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
  let formatTree = [];
  for (let key in tree) {
    formatTree.push({
      id: _uuid(),
      label: key,
      children: tree[key].length > 0 ? tree[key] : null,
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
  console.log('tree', tree);
  let treeAry = [];
  let treeData = isArray(tree) ? tree : [];
  const func = (tree, name) => {
    treeData.forEach(first => {
      if (first.children && first.children.length > 0) {
        first.children.forEach(second => {
          if (second.label.indexOf(name) >= 0) {
            treeAry.push(second);
          } else {
            // func(second.children, name);
            if (second.children && second.children.length > 0) {
              second.children.forEach(third => {
                if (third.label.indexOf(name) >= 0) {
                  treeAry.push(third)
                } 
              })
            }
          }
        });
      }
    });
  };
  func(tree, name);
  return treeAry;
}

export function throttle(fn,context,delay,text,mustApplyTime){
  clearTimeout(fn.timer);
  fn._cur=Date.now();  //记录当前时间

  if(!fn._start){      //若该函数是第一次调用，则直接设置_start,即开始时间，为_cur，即此刻的时间
    fn._start=fn._cur;
  }
  if(fn._cur-fn._start>mustApplyTime){ 
  //当前时间与上一次函数被执行的时间作差，与mustApplyTime比较，若大于，则必须执行一次函数，若小于，则重新设置计时器
     fn.call(context,text);
     fn._start=fn._cur;
  }else{
    fn.timer=setTimeout(function(){
    fn.call(context,text);
    },delay);
  }
}

export function changImg(dom, cb){  
  const file = dom.files[0];
  if (!(/^image\/.*$/i.test(file.type))) {  
    return; 
  }
  var freader = new FileReader();  
  freader.readAsDataURL(file);  
  freader.onload = function(e) {
    if(cb) cb(file, e.target.result);    
  };
}

