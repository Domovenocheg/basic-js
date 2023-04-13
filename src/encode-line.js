const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let r = ''
  let sum = 0
  for (let i = 0; i < str.length; i++) {
    if (str === "") {
      return "";
    } else if (str[i] === str[i+1]){
      sum = sum + 1
      r = sum + str[i]
    } else if (str[i] !== str[i+1]) {
      r = str[i]
    }
  }
  return r
}

module.exports = {
  encodeLine,
};
