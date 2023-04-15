const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let str = String(n); //console.log(n);
  let r = [];
  for (let i = 0; i < str.length; i++) {
    let newN = +str.replace(str[i], "");
    r.push(newN);
    r.sort((a, b) => a - b);
    //console.log(newN);
    //console.log(r)
    //console.log(str[i]);
    //console.log(str[i]);
  }
  return r.pop();
}

module.exports = {
  deleteDigit,
};
