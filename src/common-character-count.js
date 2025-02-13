const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s10, s20) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let s1 = s10.split("").sort();
  let s2 = s20.split("").sort();
  console.log(s1, s2);
  let r = 0;
  for (let i = 0; i < s1.length || i < s2.length; i++) {
    //console.log(`str 1 letter = ${s1[i]}`);
    //console.log(`str 2 letter = ${s2[i]}`);
    if (s2.includes(s1[i]) && s1.includes(s2[i])) {
      console.log(`str 1 letter ${[i + 1]} = ${s1[i]}`);
      console.log(`str 2 letter ${[i + 1]} = ${s2[i]}`);
      r += 1;
    }
    //console.log(r);
  }
  return r;
}

module.exports = {
  getCommonCharacterCount,
};
