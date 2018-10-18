/* 封装分页方法:
*  current:当前页码
*  pageSize:一页中展示的数据条数
*  dataSource:数据源
* */
export function mockTableData(current, pageSize, dataSource) {
  let data = [];
  let dataTest = dataSource;
  if (typeof current === 'undefined') {
    for (let i = 0; i < pageSize; i++) {
      data.push(dataTest[i]);
    }
  } else {
    if (dataTest.length < (current * pageSize)) {
      for (let i = ((current - 1) * pageSize); i < dataTest.length; i++) {
        data.push(dataTest[i]);
      }
    } else {
      for (let i = ((current - 1) * pageSize); i < (current * pageSize); i++) {
        data.push(dataTest[i]);
      }
    }
  }
  return data;
};
