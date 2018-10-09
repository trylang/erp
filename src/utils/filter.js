// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// Eg: yyyy-M-d h:m:s.S || "yyyy-MM-dd hh:mm:ss.S"
export let formatDate =  (time, fmt) => { //author: meizz
  let date = new Date(time);
  var o = {
    "M+": date.getMonth() + 1, //月份 
    "d+": date.getDate(), //日 
    "h+": date.getHours(), //小时 
    "m+": date.getMinutes(), //分 
    "s+": date.getSeconds(), //秒 
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
    "S": date.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  }
  return fmt;
}

/**
 * @description 科学计数法过滤金额
 * @export
 * @param {any} s 金额
 * @param {any} n 小数点保留位数
 * @returns 
 */
export function fmoney(s, n=2) { 
  if (s === '' || s === undefined || s === null) return;
  n = n > 0 && n <= 20 ? n : 2;
  let tag = ''; 
  s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
  if (s.indexOf('-') == 0) {
    s = s.slice(1);
    tag = '-';
  }
  var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1], t = "", i = 0;
  for (i = 0; i < l.length; i++) { 
  t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : ""); 
  } 
  return tag + t.split("").reverse().join("") + "." + r; 
}
