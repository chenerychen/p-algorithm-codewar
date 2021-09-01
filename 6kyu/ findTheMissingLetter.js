function findMissingLetter(array) {
  for (let i = 0; i < array.length - 1; i++) {
    const letter = array[i];

    if (array[i + 1].charCodeAt() - letter.charCodeAt() === 2) {
      return String.fromCharCode(letter.charCodeAt() + 1);
    }
  }
}


// describe("KataTests", function () {
//   it("exampleTests", function () {
//     Test.assertEquals(findMissingLetter(["a", "b", "c", "d", "f"]), "e");
//     Test.assertEquals(findMissingLetter(["O", "Q", "R", "S"]), "P");
//   });
// });