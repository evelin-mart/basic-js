const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.depth = 1;
  }
  calculateDepth(arr, count = 1) {
    arr = arr.filter((el) => Array.isArray(el));
    for (let i of arr) {
      if (Array.isArray(i)) {
        count++;
        this.calculateDepth(i, count);
      }
      this.depth = this.depth < count ? count : this.depth;
      count = 1;
    }
    return this.depth;
  }
}

module.exports = {
  DepthCalculator,
};
