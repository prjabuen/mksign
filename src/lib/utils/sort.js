/**
 * 参数字典排序
 */
import isObject from 'lodash/isObject';
import isEmpty from 'lodash/isEmpty';
import toPairs from 'lodash.topairs';

/**
 *
 * @param params  Object
 * @returns {[string , value][]}
 */
function sort(params = {}) {
  if (!isObject(params) || isEmpty(params)) {
    throw new Error('params is not Object or no value in sort function!');
  }

  return toPairs(params).sort((pre, after) => {
    if ((`${pre}`) > (`${after}`)) {
      return 1;
    }
    return -1;
  });
}

export default sort;
