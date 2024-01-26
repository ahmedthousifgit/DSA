// insertion sort

function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    let NTI = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > NTI) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = NTI;
  }
  return arr;
}
console.log(insertion([22, 3, 44, 1, 2]));
