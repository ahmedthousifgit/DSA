// inbuilt method

function rotate(arr, k) {
  let size = arr.length;
  if (k > size) {
    k = k % size;
  }
  let rotatedArr = arr.splice(size - k, size);
  console.log(rotatedArr);
  arr.unshift(...rotatedArr);
  return arr;
}
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
