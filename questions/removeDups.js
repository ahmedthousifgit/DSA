// remove duplicates from sorted array (J U D G E)
function dups(arr) {
  let newNums = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newNums.includes(arr[i])) {
      newNums.push(arr[i]);
    }
  }
  return newNums;
}

console.log(dups([1, 1, 2, 2, 3, 4, 5]));

// function dups(arr) {
//   return [...new Set(arr)];
// }
