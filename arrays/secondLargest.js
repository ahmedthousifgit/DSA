// naive method

function second(arr) {
  const unique = Array.from(new Set(arr)); //O(n)

  unique.sort((a, b) => b - a); //O(nlogn)
  if (unique.length >= 2) {
    return unique[1];
  } else {
    return -1;
  }
}
console.log(second([1, 2, 3, 4, 5, 5]));

function secondLar(arr) {
  let secLar = -Infinity;
  let lar = -Infinity;
  for (let i = 0; i < arr.length; i++) {    //O(n)
    if (arr[i] > lar) {
      secLar = lar;
      lar = arr[i];
    }
    if (arr[i] != lar && arr[i] > secLar) {
      secLar = arr[i];
    }
  }
  return secLar;
}
console.log(secondLar([2, 3, 4, 5, 6]));
