let arr = [1, 2, 3, 2, 5];

function pallindrome(arr) {
  let start = 0;
  let end = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[start] === arr[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(pallindrome(arr));


// using while
// function pallindrome(arr) {
//   str = 0;
//   end = arr.length - 1;

//   while (str < end) {
//     if (arr[str] !== arr[end]) {
//       return false;
//     }
//     str++;
//     end--;
//   }
//   return true;
// }
// console.log(pallindrome([1, 2, 3, 2, 2]));
