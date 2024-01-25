const array = [
  [1, 2, 3],
  [1, 2, 3, 4, 5],
  [4, 5],
];
const flatten = array.reduce((acc, curr) => {
  return acc.concat(curr);
}, []);

console.log(flatten);
