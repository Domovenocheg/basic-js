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
  let count = 1;
  let res = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      //console.log(i);
      count += 1;
    } else if (str[i + 1] !== str[i]) {
      res += count + str[i];
      count = 1;
      console.log(res);
    }
  }
  return res.replaceAll("1", "");
}

module.exports = {
  encodeLine,
};
