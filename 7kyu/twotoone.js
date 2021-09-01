function longest(s1, s2) {
  const s = s1 + s2;
  const set = new Set([...s]);
  return [...set].sort().join("");
}



// describe("longest", function () {
//   it("Basic tests", function () {
//     Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty");
//     Test.assertEquals(
//       longest("loopingisfunbutdangerous", "lessdangerousthancoding"),
//       "abcdefghilnoprstu"
//     );
//     Test.assertEquals(
//       longest("inmanylanguages", "theresapairoffunctions"),
//       "acefghilmnoprstuy"
//     );
//   });
// });