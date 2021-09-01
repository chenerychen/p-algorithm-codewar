function findShort(s) {
  let min = Infinity;
  s.split(" ").map((word) => {
    if (min > word.length) {
      min = word.length;
    }
  });
  return min;
}

function findShort(s) {
  return s
    .split(" ")
    .reduce((min, word) => Math.min(min, word.length), Infinity);
}

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(
//       findShort("bitcoin take over the world maybe who knows perhaps"),
//       3
//     );
//     assert.strictEqual(
//       findShort(
//         "turns out random test cases are easier than writing out basic ones"
//       ),
//       3
//     );
//     assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
//   });
// });
