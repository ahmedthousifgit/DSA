// swap first and last letter

function swap(str) {
  if (str.length < 2) {
    return str;
  }
  const swapArr = str.split(""); //O(n)
  [swapArr[0], swapArr[str.length - 1]] = [swapArr[str.length - 1], swapArr[0]];
  const swappedStr = swapArr.join(""); //O(n)
  return swappedStr;
}
let swappedstring = swap("hello");
console.log(swappedstring);
