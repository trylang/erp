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


