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
function _getSignStr(params = [[]]) {
  const noKeys = [],
    strArray = [];
  params.forEach(([key, val]) => {
    if (val !== 0 && !val) {
      throw new Error(`param.${key} have not value! pls check!!`);
    }
    if (key !== 0 && !key) {
      noKeys.push(val);
    } else {
      strArray.push(`${key}=${val}`);
    }
  });
  return `${strArray.join('&')}${noKeys.join('')}`;
}

module.exports = _getSignStr;