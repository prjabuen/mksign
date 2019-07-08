/**
 * 签名
 */
import sha256 from 'js-sha256';
import sort from './utils/sort';
import filterNull from './utils/filterNull';
import _getSignStr from './utils/_getSignStr';
import defaultGetSignData from './defaultGetSignData';

export default {
  defaultGetSignData,
  defaultSign(params = {}, lastParams = []) {
    const signStr = defaultGetSignData(params, lastParams);
    return sha256(signStr);
  },
  getFilterData(params = {}) {
    return sort(filterNull(params));
  },
  sort,
  filterNull,
  getSignStr: _getSignStr
};

