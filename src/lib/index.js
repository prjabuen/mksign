/**
 * 签名
 */
import sha256 from 'hash.js/lib/hash/sha/256';
import sort from './utils/sort';
import filterNull from './utils/filterNull';
import _getSignStr from './utils/_getSignStr';
import defaultGetSignData from './defaultGetSignData';

function defaultSign(params = {}, lastParams = []) {
  const signStr = defaultGetSignData(params, lastParams);
  return sha256().update(signStr).digest('hex');
}

function getFilterData(params = {}) {
  return sort(filterNull(params));
}

export {
  defaultGetSignData,
  defaultSign,
  getFilterData,
  sort,
  filterNull,
  _getSignStr as getSignStr,
};
