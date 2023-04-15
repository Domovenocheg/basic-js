const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  //throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  let arr = n.split("-");
  console.log(arr);
  if (
    !n.includes("G") &&
    !n.includes("H") &&
    !n.includes("I") &&
    !n.includes("J") &&
    !n.includes("K") &&
    !n.includes("L") &&
    !n.includes("M") &&
    !n.includes("N") &&
    !n.includes("O") &&
    !n.includes("P") &&
    !n.includes("Q") &&
    !n.includes("R") &&
    !n.includes("S") &&
    !n.includes("T") &&
    !n.includes("U") &&
    !n.includes("V") &&
    !n.includes("W") &&
    !n.includes("X") &&
    !n.includes("Y") &&
    !n.includes("Z")
  ) {
    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i].includes(0) ||
        arr[i].includes(1) ||
        arr[i].includes(2) ||
        arr[i].includes(3) ||
        arr[i].includes(4) ||
        arr[i].includes(5) ||
        arr[i].includes(6) ||
        arr[i].includes(7) ||
        arr[i].includes(8) ||
        arr[i].includes(9) ||
        arr[i].includes("A") ||
        arr[i].includes("B") ||
        arr[i].includes("C") ||
        arr[i].includes("D") ||
        arr[i].includes("E") ||
        arr[i].includes("F")
      ) {
      }
    }
    return true;
  }
  return false;
}
module.exports = {
  isMAC48Address,
};
