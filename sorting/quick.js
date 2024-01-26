// quick sort

// function quick(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   let pivot = arr[arr.length - 1];
//   let left = [];
//   let right = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [...quick(left), pivot, ...quick(right)];
// }

// const arr = [8, 20, -2, 4, -6];
// console.log(quick(arr));

//
function fault(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "i") {
      newStr= newStr.split("").reverse().join("");
    }
    newStr+=str[i]
  }
  return newStr;
}
console.log(fault("string"));
