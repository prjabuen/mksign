/**
 * 字符串拼接
 */

/**
 *
 * @param params
 * @type Array
 * @example  [ ['val1', 2 ], [ 'val2', 5 ] ]
 * @return  String
 */
import isObject from 'lodash/isObject';
import isArray from 'lodash/isArray';

function getSignStr(params = [[]]) {
  const noKeys = [],
    strArray = [];
  params.forEach(([key, val]) => {
    if (val !== 0 && !val) {
      throw new Error(`param.${key} have not value! pls check!!`);
    }
    if (key !== 0 && !key) {
      noKeys.push(val);
    } else {
      strArray.push((isObject(val) || isArray(val)) ? `${key}=${JSON.stringify(val)}` : `${key}=${val}`);
    }
  });
  return `${strArray.join('&')}${noKeys.join('')}`;
}

export default getSignStr;