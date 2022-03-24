const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and !
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  const seasons = {
    summer: [5, 6, 7],
    fall: [8, 9, 10],
    winter: [11, 0, 1],
    spring: [2, 3, 4],
  };
  if (!date) {
    return "Unable to determine the time of year!";
  }
  try {
    date.getTime();
    let month = date.getMonth();
    for (let key in seasons) {
      if (seasons[key].includes(month)) return key;
    }
  } catch {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason,
};
