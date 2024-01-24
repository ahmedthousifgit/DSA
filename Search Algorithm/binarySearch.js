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
    if (arr[midIndex] < target) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }
  return -1;
}

console.log(binarySearch([4,3,2,1,0,6,55], 55));
