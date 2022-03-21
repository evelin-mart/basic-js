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
  let m = [];
  n = n.toString().split("");
  for (let i = 0; i < n.length; i++) {
    let temp = [...n];
    temp.splice(i, 1);
    m.push(temp.join(""));
  }
  return Math.max(...m);
}

module.exports = {
  deleteDigit,
};
