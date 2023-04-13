const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arrTest = [];
  let str = "";
  if (typeof members !== typeof arrTest && !null && !"") return false;

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === typeof "") {
      //console.log(members[i]);
      str += members[i].replaceAll(" ", "")[0];
    }
    //console.log(members[i].replaceAll(" ", "")[0]);
    //str += members[i].replaceAll(" ", "")[0];
    //console.log(str.replaceAll(" ", ""));
  }
  let result = str.toUpperCase().split("").sort().join("");
  return result;
}

module.exports = {
  createDreamTeam,
};
