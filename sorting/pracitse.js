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
