// linear search

// function linearSearch(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(linearSearch([1, 2, 3, 4, 5], 4));

// binary search
// function binarySearch(arr, target) {
//   arr.sort((a, b) => a - b);
//   let leftIndex = 0;
//   let rightIndex = arr.length - 1;
//   while (leftIndex <= rightIndex) {
//     let midIndex = Math.floor((leftIndex + rightIndex) / 2);
//     if (arr[midIndex] === target) {
//       return midIndex;
//     }
//     if (arr[midIndex] < target) {
//       leftIndex = midIndex + 1;
//     } else {
//       rightIndex = midIndex - 1;
//     }
//   }
//   return -1;
// }

// console.log(binarySearch([6, 17, 8, 2], 6));

// recursive binary search
// function recursiveBinarySearch(arr, target) {
//   arr.sort((a, b) => a - b);
//   return search(arr, target, 0, arr.length - 1);
// }
// function search(arr, target, leftIndex, rightIndex) {
//   if (leftIndex > rightIndex) {
//     return -1;
//   }
//   let midIndex = Math.floor((leftIndex + rightIndex) / 2);
//   if (target === arr[midIndex]) {
//     return midIndex;
//   }
//   if (target < arr[midIndex]) {
//     return search(arr, target, leftIndex, midIndex - 1);
//   } else {
//     return search(arr, target, midIndex + 1, rightIndex);
//   }
// }
// console.log(recursiveBinarySearch([1, 2, 33, 4, 5], 5));

// remove vowels
// function vowels(str) {
//   return str.replace(/[aeiouAEIOU]/g, "");
// }

// let removedVowels = vowels("helloo");
// console.log(removedVowels);

//rotate array
// function rotating(arr, k) {
//   let size = arr.length;
//   if (k > size) {
//     k = k % size;
//   }
//   let rotatedArr = arr.splice(size - k, size);
//   arr.unshift(...rotatedArr);
//   return arr;
// }

// console.log(rotating([1, 2, 3, 44, 5], 2));

// swap letter

// function swap(str) {
//   let char = str.split("");
//   [char[0], char[str.length - 1]] = [char[str.length - 1], char[0]];
//   let swapArr = char.join("");
//   return swapArr;
// }
// const swappedString = swap("hello");
// console.log(swappedString);

// broto
function replace(str, n) {
  if (typeof str !== "string" || typeof n !== "number" || n < 1 || n > 26) {
    return "invalid input";
  }
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let transformedStr = str.toLowerCase();
  let result = "";

  for (let i = 0; i < transformedStr.length; i++) {
    let char = transformedStr[i];
    if (alphabet.includes(char)) {
      orginalIndex = alphabet.indexOf(char);
      newIndex = (orginalIndex + n) % 26;

      let newChar = alphabet[newIndex];
      result += str[i] == char ? newChar : newChar.toUpperCase();
    } else {
      result += char;
    }
  }
  return result;
}

const secret = replace("hello", 2);
console.log(secret);
