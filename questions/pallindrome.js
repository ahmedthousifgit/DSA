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
