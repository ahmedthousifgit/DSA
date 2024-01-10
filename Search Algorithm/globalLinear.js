// when number occurs more than one time in array then take that index

function globalSearch(arr, target) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
      result.push(i);
    }
    if (result.length === 0) {
      return -1;
    }
  }
  return result;
}
console.log(globalSearch([1, 1, 2, 1, 4], 1));
