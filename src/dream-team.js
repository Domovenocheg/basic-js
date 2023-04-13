const { NotImplementedError } = require('../extensions/index.js');

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
  let str = "";
  for (let i = 0; i < members.length; i++) {
    //console.log(members[i][0]);
    str += members[i][0];
    console.log(str);
  }
  let result = str.split("").sort().join("");
  console.log(result);
}

createDreamTeam(["Matt", "Ann", "Dmitry", "Max"]);

module.exports = {
  createDreamTeam
};
