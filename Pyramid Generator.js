const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 0; i < count; i++) {
  rows.push(padRow(i + 1, count));
}
console.log(rows);
// let result = ""

// for (const row of rows) {
//   result = result + row + "\n";
// }

// console.log(result);
// console.log(result.length);

// const character = "#";
// const count = 8;
// const rows = [];

// function padRow(rowNumber, rowCount) {
//   return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1);
// }

// // Pyramid up
// for (let i = 1; i <= count; i++) {
//   rows.push(padRow(i, count));
// }

// // Pyramid down
// for (let i = count - 1; i >= 1; i--) {
//   rows.push(padRow(i, count));
// }

// // Combine rows
// let result = rows.join("\n");

// console.log(result);