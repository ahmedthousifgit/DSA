// binary search

function binarySearch(arr, target) {
  arr.sort((a, b) => a - b);
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[midIndex] == target) {
      return midIndex;
    }
    if (target < arr[midIndex]) {
      rightIndex = midIndex - 1;
    } else {
      leftIndex = midIndex + 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 22, 3, 43, 5], 43));
