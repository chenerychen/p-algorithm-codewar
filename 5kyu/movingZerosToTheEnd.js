var moveZeros = function (arr) {
  const zeros = arr.filter((el) => el === 0);
  const rest = arr.filter((el) => el !== 0);
  return rest.concat(zeros);
};


var moveZeros = function (arr) {
  return [...arr.filter((n) => n !== 0), ...arr.filter((n) => n === 0)];
};

// describe("Tests", () => {
//   it("test", () => {
//     Test.assertEquals(
//       JSON.stringify(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])),
//       JSON.stringify([1, 2, 1, 1, 3, 1, 0, 0, 0, 0])
//     );
//   });
// });
