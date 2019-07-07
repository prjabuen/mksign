/**
 * 去除空值
 */
'use strict';

const isObject = require('lodash/isObject'),
  isEmpty = require('lodash/isEmpty');

function filterNull(params = {}) {
  if (!isObject(params) || isEmpty(params)) {
    throw new Error('params is not Object or no value in filterNull function!');
  }

  let tmp = {};
  Object.keys(params).forEach((key) => {
    const val = params[key];
    if (val === 0 || val) {
      tmp[key] = val;
    }
  });
  return tmp;
}

export default filterNull;
