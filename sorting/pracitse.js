//bubble sort
// function bubble(arr) {
//   let swap;
//   do {
//     swap = false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         swap = true;
//       }
//     }
//   } while (swap);
//   return arr;
// }

// console.log(bubble([2, 3, 1, 5, 4]));

// insertion sort
// function insertion(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let NTI = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > NTI) {
//       arr[j + 1] = arr[j];
//       j = j - 1;
//     }
//     arr[j + 1] = NTI;
//   }
//   return arr;
// }

// console.log(insertion([1, 4, 7, 5, 4]));

// quick sort
// function quic(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   let pivot = arr[arr.length - 1];
//   let left = [];
//   let right = [];
//   for (let i = 0; i < arr.length-1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [...quic(left), pivot, ...quic(right)];
// }
// const arr = [5, 4, 3, 2, 1];
// console.log(quic(arr));

// nums = [51, 71, 17, 24, 42]
// function sumOfDigit(nums){
//     return nums.toString().split('').map(Number).reduce((sum,digit)=> sum+digit, 0)

// }
// const sumArray = nums.map(sumOfDigit)
// console.log(sumArray);

// merge sort
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(leftArr, rightArr) {
  let sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...rightArr, ...leftArr];
}
console.log(mergeSort([2, 3, -2, -1, 5]));
