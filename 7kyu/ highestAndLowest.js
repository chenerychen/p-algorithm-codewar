function highAndLow(numbers) {
  const sorted = numbers.split(" ").sort((a, b) => a - b);
  return `${sorted[sorted.length - 1]} ${sorted[0]}`;
}


// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
//   });
// });
