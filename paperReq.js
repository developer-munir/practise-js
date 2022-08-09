// paperRequirements
// firstBook = 100pg
// secondBook = 200pg
// thirdBook = 300pg

function paperRequirements(firstBook, secondBook, thirdBook) {
  let firstBookPage = 100;
  firstBookPage *= firstBook;

  let secondBookPage = 200;
  secondBookPage *= secondBook;

  let thirdBookPage = 300;
  thirdBookPage *= thirdBook;

  let sum = firstBookPage + secondBookPage + thirdBookPage;
  return sum;
}
const totalPage = paperRequirements(3, 0, 1);
console.log('You need total :',totalPage,'pages.');
