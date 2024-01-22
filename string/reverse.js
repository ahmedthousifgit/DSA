// let str = "hello world";
// let reverse = str.split("").reverse().join("");
// console.log(reverse);

var maximumNumberOfStringPairs = function (words) {
  const reversedSet = new Set();
  let n = 0;
  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    let reversedWord = currentWord.split("").reverse().join("");
    if (reversedSet.has(reversedWord)) {
      n = n + 1;
    } else {
      reversedSet.add(currentWord);
    }
  }
  return n;
};

console.log(maximumNumberOfStringPairs(["cd", "ac", "dc", "ca", "zz"]));
