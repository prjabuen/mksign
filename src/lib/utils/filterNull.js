/**
 * 去除空值
 */
import isObject from 'lodash/isObject';
import isEmpty from 'lodash/isEmpty';

function filterNull(params = {}) {
  if (!isObject(params) || isEmpty(params)) {
    throw new Error('params is not Object or no value in filterNull function!');
  }

  const tmp = {};
  Object.keys(params).forEach((key) => {
    const val = params[key];
    if (val === 0 || val) {
      tmp[key] = val;
    }
  });
  return tmp;
}

export default filterNull;
