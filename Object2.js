"user strict";
//Array Task 1
// let dhoni = {
//   nam: "MSD",
//   age: 42,
//   "is he captain cool?": true,
//   "Teams he has played": ["india", "csk"],
//   statiStic: {
//     matches: 538,
//     Runs: 17266,
//     Centuries: 16,
//   },
//   retire: function () {
//     debugger;
//     return `${dhoni.nam} retired from international cricket in 2020`;
//   },
// };

// let result = dhoni.retire();
// console.log(dhoni.nam);
// console.log(dhoni.statiStic.Runs);
// console.log(dhoni["Teams he has played"][0]);
// console.log(result);

// // Array task 2
// let num1;
// let num2;
// let calc = {
//   add: function (num1, num2) {
//     return num1 + num2;
//   },
//   subtract: function (num1, num2) {
//     return num1 - num2;
//   },
//   multiply: function (num1, num2) {
//     return num1 * num2;
//   },
// };
// console.log(calc.add(5, 3));
// console.log(calc.subtract(10, 4));
// console.log(calc.multiply(3, 7));

//Array Task 3
let ftotalBooks;
let book;
let library = {
  name: "Venkatesh",
  book: [],
  totalBooks: 0,
  addBook: function (title) {
    this.book.push(title);
    ftotalBooks = this.totalBooks;
    return this.book;
  },
};
console.log(library.addBook("JAVA"));
console.log(library.addBook("HTML"));
console.log(library.addBook("JAVAScript"));
console.log(library.addBook("Python"));
console.log((library.totalBooks = library.book.length));
console.log(Object.keys(library));
console.log(Object.values(library));
console.log(Object.entries(library));
console.log(Object.getOwnPropertyDescriptors(library));
