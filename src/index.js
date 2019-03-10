/**
 * 签名
 */
const sha256 = require('js-sha256'),
  sort = require('./utils/sort'),
  filterNull = require('./utils/filterNull'),
  _getSignStr = require('./utils/_getSignStr'),
  defaultGetSignData = require('./defaultGetSignData');

module.exports = {
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

