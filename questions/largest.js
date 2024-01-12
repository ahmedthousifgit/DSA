// function largest(arr) {
//   let max = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(largest([1, 2, 3, 5, 44]));

// second max
function secondlargest(arr) {
  let max = -Infinity;
  let secMax = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secMax = max;
      max = arr[i];
    }
    if (arr[i] < max && arr[i] > secMax) {
      secMax = arr[i];
    }
  }
  return secMax;
}
console.log(secondlargest([22, 3, 44, 5, 6]));

// second largest with sorting

// function second(arr) {
//   arr.sort((a, b) => b - a);
//   return arr[1];
// }
// console.log(second([1, 2, 3, 4, 5]));
