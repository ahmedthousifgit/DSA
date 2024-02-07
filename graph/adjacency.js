// adjacency matrix

// const matrix = [
//   [0, 1, 0],
//   [1, 0, 1],
//   [0, 1, 0],
// ];
// console.log(matrix[1][2]);

// adjacency list
const list = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};
console.log(list["B"]);
