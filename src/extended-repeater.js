const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options.separator) options.separator = "+";
  if (!options.additionSeparator) options.additionSeparator = "|";
  let result = Array(options.repeatTimes).fill(str + "");
  let add = "";
  if (options.hasOwnProperty("addition")) {
    add = Array(options.additionRepeatTimes)
      .fill(options.addition + "")
      .join(options.additionSeparator);
    result = result.map((item) => item.concat(add));
  }
  return result.join(options.separator);
}

module.exports = {
  repeater,
};
