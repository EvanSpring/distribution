/**
 * 解析url参数
 * @example ?id=12345&a=b
 * @return Object {id:12345,a:b}
 */
export function urlParse() {
  // 假如浏览器地址http://localhost:8081/?id=123456&a=b#/seller
  let url = window.location.search; // url== ?id=123456&a=b
  let obj = {};
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);
  // ['?id=12345', '&a=b']
  if (arr) {
    arr.forEach((item) => {
      let tempArr = item.substring(1).split('=');
      // key== id,val== 123456
      let key = decodeURIComponent(tempArr[0]);
      let val = decodeURIComponent(tempArr[1]);
      obj[key] = val; // Object { id: "123456" }
      // obj.key = val;这种给对象赋值的方式并不会解析key，实际上key就是属性名
    });
  }
  return obj;
};
