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
  let str = params.map(([key, val]) => {
    if (val !== 0 && !val) {
      throw new Error(`param.${key} have not value! pls check!!`);
    }
    return `${key}=${val}`;
  });
  return str.join('&');
}

module.exports = _getSignStr;