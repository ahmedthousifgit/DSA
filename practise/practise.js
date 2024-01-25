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
// function replace(str, n) {
//   if (typeof str !== "string" || typeof n !== "number" || n < 1 || n > 26) {
//     return "invalid input";
//   }
//   let alphabet = "abcdefghijklmnopqrstuvwxyz";
//   let transformedStr = str.toLowerCase();
//   let result = "";

//   for (let i = 0; i < transformedStr.length; i++) {
//     let char = transformedStr[i];
//     if (alphabet.includes(char)) {
//       orginalIndex = alphabet.indexOf(char);
//       newIndex = (orginalIndex + n) % 26;

//       let newChar = alphabet[newIndex];
//       result += str[i] == char ? newChar : newChar.toUpperCase();
//     } else {
//       result += char;
//     }
//   }
//   return result;
// }

// const secret = replace("hello", 2);
// console.log(secret);

// pallindrome
// function pallindrome(arr) {
//   let str = 0;
//   let end = arr.length - 1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[str] === arr[end]) {
//       str++;
//       end--;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(pallindrome([1, 2, 3, 2, 1]));

// second largest
// function second(arr) {
//   let secLar = -Infinity;
//   let lar = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > lar) {
//       secLar = lar;
//       lar = arr[i];
//     }
//     if (arr[i] < lar && arr[i] > secLar) {
//       secLar = arr[i];
//     }
//   }
//   return secLar;
// }
// console.log(second([1, 2, 3, 444, 5]));

//replace previous node in singly linkedlist
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class linkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }
//   isEmpty() {
//     return this.size === 0;
//   }
//   getSize() {
//     return this.size;
//   }
//   prepend(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//     this.size++;
//   }
//   append(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       let curr = this.head;
//       while (curr.next) {
//         curr = curr.next;
//       }
//       curr.next = node;
//     }
//     this.size++;
//   }
//   insert(value, index) {
//     const node = new Node(value);
//     if (index < 0 || index > this.size) {
//       return;
//     }
//     if (index === 0) {
//       this.prepend(value);
//     } else {
//       let curr = this.head;
//       for (let i = 0; i < index - 1; i++) {
//         curr = curr.next;
//       }
//       node.next = curr.next;
//       curr.next = node;
//     }
//     this.size++;
//   }
//   removeVal(value) {
//     if (this.isEmpty()) {
//       return null;
//     }
//     let removedNode;
//     if (this.head.value === value) {
//       this.head.next = this.head;
//       this.size--;
//       return value;
//     } else {
//       let curr = this.head;
//       while (curr.next && curr.next.value !== value) {
//         curr = curr.next;
//       }
//       if (curr.next) {
//         removedNode = curr.next;
//         curr.next = removedNode.next;
//         this.size--;
//         return value;
//       }
//       return null;
//     }
//   }
//   reverse() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     let curr = this.head;
//     let prev = null;
//     while (curr) {
//       let next = curr.next;
//       curr.next = prev;
//       prev = curr;
//       curr = next;
//     }
//     this.head = prev;
//   }

//   search(value) {
//     if (this.isEmpty()) {
//       return -1;
//     } else {
//       let i = 0;
//       let curr = this.head;
//       while (curr) {
//         if (curr.value == value) {
//           return i;
//         }
//         curr = curr.next;
//         i++;
//       }
//       return -1;
//     }
//   }
//   print() {
//     if (this.isEmpty()) {
//       console.log("list is empty");
//     } else {
//       let curr = this.head;
//       let listValues = "";
//       while (curr) {
//         listValues += `${curr.value} `;
//         curr = curr.next;
//       }
//       console.log(listValues);
//     }
//   }
// }

// const list = new linkedList();
// list.prepend(10);
// list.append(20);
// list.insert(30, 2);
// list.append(40);
// // list.removeVal(40);
// list.print();
// // list.reverse();
// console.log(list.search(40));
// list.print();

// middle node
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class linkedlist {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }
//   isEmpty() {
//     return this.size === 0;
//   }
//   getSize() {
//     return this.size;
//   }
//   prepend(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//     this.size++;
//   }
//   append(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       let prev = this.head;
//       while (prev.next) {
//         prev = prev.next;
//       }
//       node.next = prev.next;
//       prev.next = node;
//     }
//     this.size++;
//   }
//   middle() {
//     if (this.isEmpty()) {
//       return null;
//     } else {
//       let slow = this.head;
//       let fast = this.head;
//       while (fast && fast.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//       }
//       return slow;
//     }
//   }
//   print() {
//     if (this.isEmpty()) {
//       console.log("list is empty");
//     } else {
//       let curr = this.head;
//       let listValues = "";
//       while (curr) {
//         listValues += `${curr.value} `;
//         curr = curr.next;
//       }
//       console.log(listValues);
//     }
//   }
// }

// const list = new linkedlist();

// list.prepend(20);
// list.prepend(10);
// list.append(30);
// list.print();

// const middlnode = list.middle();
// console.log(middlnode.value);

// delete mid node
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class linkedlist {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }
//   isEmpty() {
//     return this.size === 0;
//   }
//   getSize() {
//     return this.size;
//   }
//   prepend(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//     this.size++;
//   }
//   append(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       let prev = this.head;
//       while (prev.next) {
//         prev = prev.next;
//       }
//       prev.next = node;
//     }
//     this.size++;
//   }
//   middle() {
//     if (this.isEmpty()) {
//       return null;
//     } else {
//       let prev = null;
//       let slow = this.head;
//       let fast = this.head;
//       while (fast && fast.next) {
//         prev = slow;
//         slow = slow.next;
//         fast = fast.next.next;
//       }
//       if (prev === null) {
//         this.head = slow.next;
//       } else {
//         prev.next = slow.next;
//       }
//       this.size--;
//       return slow.value;
//     }
//   }
//   print() {
//     if (this.isEmpty()) {
//       console.log("list is empty");
//     } else {
//       let curr = this.head;
//       let listValues = "";
//       while (curr) {
//         listValues += `${curr.value} `;
//         curr = curr.next;
//       }
//       console.log(listValues);
//     }
//   }
// }

// const list = new linkedlist();

// list.prepend(20);
// list.prepend(10);
// list.append(30);

// list.print();
// console.log(list.middle());
// list.print();

// array to list
// function arrToList(arr) {
//   const list = new linkedList();
//   for (let i = 0; i < arr.length; i++) {
//     list.append(arr[i]);
//   }
//   return list;
// }
// const array = arrToList([1, 2, 3, 4]);
// console.log(array);


// circular 