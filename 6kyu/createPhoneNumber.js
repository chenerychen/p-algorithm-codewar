function createPhoneNumber(numbers) {
  const start = numbers.slice(0, 3);
  const middle = numbers.slice(3, 6);
  const end = numbers.slice(6);

  return `(${start}) ${middle}-${end}`.replace(/,/g, "");
}


// describe("Basic tests", () => {
//   Test.assertEquals(
//     createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
//     "(123) 456-7890"
//   );
//   Test.assertEquals(
//     createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
//     "(111) 111-1111"
//   );
//   Test.assertEquals(
//     createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
//     "(123) 456-7890"
//   );
// });