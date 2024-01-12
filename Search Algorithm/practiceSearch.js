// function linear(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(linear([1, 2, 3, 5, 6], 7));

// binary search

function binary(arr, target) {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let midIndex = Math.floor((left + right) / 2);
    if (arr[midIndex] == target) {
      return midIndex;
    }
    if (arr[midIndex] < target) {
      right = midIndex - 1;
    } else {
      left = midIndex + 1;
    }
  }
  return -1;
}

console.log(binary([1, 2, 33, 4, 5], 33));
