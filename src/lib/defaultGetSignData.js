/**
 * 获取默认签名字符串
 */
import isObject from 'lodash/isObject';
import isArray from 'lodash/isArray';
import isEmpty from 'lodash/isEmpty';
import sort from './utils/sort';
import filterNull from './utils/filterNull';
import _getSignStr from './utils/_getSignStr';

function defaultGetSignData(params = {}, lastParams = []) {
  const filterData = sort(filterNull(params));

  if (!isArray(lastParams)) {
    throw new Error('The second argument is not Array or no value in defaultGetSignData function!');
  }
  lastParams.forEach(param => {
    if (isObject(param)) {
      if (!isObject(param) || isEmpty(param)) {
        throw new Error(`The second argument's is not object or no value in defaultGetSignData function!`);
      }

      Object.entries(param).forEach(([key, val]) => {
        filterData.push([key, val]);
      });
    } else {
      if (param !== 0 && !param) {
        throw new Error(`The second argument's no value in defaultGetSignData function!`);
      }
      filterData.push(['', param]);
    }
  });
  return _getSignStr(filterData);
}

export default defaultGetSignData;
