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