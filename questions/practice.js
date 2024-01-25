// remove dups
// function duplicates(arr) {
//   let newNums = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!newNums.includes(arr[i])) {
//       newNums.push(arr[i]);
//     }
//   }
//   return newNums;
// }

// console.log(duplicates([1, 1, 2, 2, 3, 4, 4]));

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
// console.log(pallindrome([1, 2, 3, 2, 4]));

// factorial recursion
// function factorial(n) {
//   if (n === 1) {
//     return n;
//   }
//   return n * factorial(n - 1);
// }
// console.log(factorial(5));

// fibonacii
// function fib(n) {
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }
// console.log(fib(5));

// reverse a string
// function reverse(str) {
//   if ((str === "")) {
//     return "";
//   }
//   return reverse(str.substr(1)) + str.charAt(0);
// }
// console.log(reverse("hello"));

// linear search
// function linear(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (target === arr[i]) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(linear([1, 2, 3, 4, 5], 6));

// binary search
// function binary(arr, target) {
//   arr.sort((a, b) => a - b);
//   let leftIndex = 0;
//   let rightIndex = arr.length - 1;
//   for (let i = 0; i < arr.length; i++) {
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
//   return null;
// }

// console.log(binary([1, 2, 3, 4, 5, 22, 12], 12));

// recursive binary search  O(logn)
// function recursive(arr, target) {
//   arr.sort((a, b) => a - b);
//   return search(arr, target, 0, arr.length - 1);
// }
// function search(arr, target, leftIndex, rightIndex) {
//   if (leftIndex > rightIndex) {
//     return -1;
//   }
//   let midIndex = Math.floor((leftIndex + rightIndex) / 2);
//   if (arr[midIndex] === target) {
//     return midIndex;
//   }
//   if (target < arr[midIndex]) {
//     return search(arr, target, leftIndex, midIndex - 1);
//   } else {
//     return search(arr, target, midIndex + 1, rightIndex);
//   }
// }
// const array = recursive([1, 2, 33, 4, 5], 33);
// console.log(array);

// brototype string
// function replace(str, n) {
//   if (typeof str !== "string" || typeof n !== "number" || n < 1 || n > 26) {
//     return "invalid input";
//   }
//   let alphabet = "abcdefghijklmnopqrstuvwxyz";
//   let transformedStr = str.toLowerCase();
//   result = "";

//   for (let i = 0; i < transformedStr.length; i++) {
//     let char = transformedStr[i];
//     if (alphabet.includes(char)) {
//       orginalIndex = alphabet.indexOf(char);
//       newIndex = (orginalIndex + n) % 26;

//       let newChar = alphabet[newIndex];
//       result += str[i] === char ? newChar : newChar.toUpperCase();
//     } else {
//       result += char;
//     }

//   }
//   return result;
// }
// console.log(replace("hello", 3));

//swap first and last
// function  swap(str){
//     let char = str.split('');
//     [char[0],char[str.length-1]] = [char[str.length-1],char[0]]
//     let swapped = char.join('')

//     return swapped
// }
// console.log(swap('ahmed'));

// to Uppercase without imbuilt
// function upper(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (char >= "a" && char <= "z") {
//       upperChar = String.fromCharCode(char.charCodeAt(0) - 32);
//       result += upperChar;
//     } else {
//       result += char;
//     }
//   }

//   return result;
// }
// console.log(upper("ahmEd"));

// remove vowels O(n)
// function vowels(str) {
//   return str.replace(/[aeiouAEIOU]/g, "");
// }
// const removed = vowels("hello");
// console.log(removed);

// circular linkedlist
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class circularLinkedList {
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
//   append(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//       node.next = this.head;
//     } else {
//       let curr = this.head;
//       while (curr.next !== this.head) {
//         curr = curr.next;
//       }
//       curr.next = node;
//       node.next = this.head;
//     }
//     this.size++;
//   }
//   print() {
//     if (this.isEmpty()) {
//       console.log("list is empty");
//     } else {
//       let curr = this.head;
//       let listValues = "";
//       do {
//         listValues += `${curr.value} `;
//         curr = curr.next;
//       } while (curr !== this.head);

//       console.log(listValues);
//     }
//   }
// }

// const list = new circularLinkedList();
// list.append(10);
// list.append(20);
// list.append(30);
// list.print();

// find mid

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
// list.middle();

// list.print()

// insert before and after
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
//   insertBefore(targetValue, data) {
//     const node = new Node(data);
//     if (this.head.value === targetValue) {
//       node.next = this.head;
//       this.head = node;
//       this.size++;
//       return;
//     } else {
//       let curr = this.head;
//       let prev = null;
//       while (curr) {
//         if (curr.value === targetValue) {
//           prev.next = node;
//           node.next = curr;
//           this.size++;
//           return;
//         }
//         prev = curr;
//         curr = curr.next;
//       }
//     }
//   }

//   insertAfter(targetValue, data) {
//     const node = new Node(data);
//     if (this.isEmpty()) {
//       return null;
//     }
//     let curr = this.head;
//     while (curr) {
//       if (curr.value === targetValue) {
//         node.next = curr.next;
//         curr.next = node;
//         this.size++;
//         return;
//       }
//       curr = curr.next;
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
// list.append(30);

// list.print();

// list.insertBefore(30, 25);
// list.insertAfter(20, 21);
// list.print();

// remove dups
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
//       node.next = curr.next;
//       curr.next = node;
//     }
//     this.size++;
//   }
//   removedups() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     let curr = this.head;
//     while (curr && curr.next) {
//       if (curr.value === curr.next.value) {
//         curr.next = curr.next.next;
//       } else {
//         curr = curr.next;
//       }
//     }
//   }
//   sum() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     let curr = this.head;
//     let sum = 0;
//     while (curr) {
//       sum += curr.value;
//       curr = curr.next;
//     }
//     return sum;
//   }
//   print() {
//     if (this.isEmpty()) {
//       console.log("lsit is empty");
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
// list.append(30);
// list.append(40);
// list.append(40);
// list.print();
// // list.removedups();
// console.log(list.sum());
// list.print();

// replace char

// replace(oldChar,newChar){
//     let curr = this.head
//     while(curr){
//         if(curr.value = oldChar){
//             curr.value = newChar
//             return
//         }
//         curr = curr.next

//     }
//  }

// reverse
// reverse(){
//     let curr = this.head
//     let prev = null
//     while(curr){
//         let next = curr.next
//         curr.next = prev
//         prev = curr
//         curr = next
//     }
//     this.head = prev
// }

// remove last node
//    removeLastNode(){
//     if(this.size===1){
//         this.head =null
//         this.size--
//         return
//     }
//     let curr = this.head
//     let prev = null
//     while(curr.next){
//         prev = curr
//         curr = curr.next
//     }
//     prev.next = null
//     this.size--

//    }

// recursive of sum

// function sum(a, b) {
//   if (b === 0) {
//     return a;
//   } else {
//     return sum(a + 1, b - 1);
//   }
// }
// console.log(sum(1, 2));

// tail
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class linkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
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
//       this.tail = node;
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
//       this.tail = node;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//     }
//     this.size++;
//   }
//   removeFromFront(){
//     if(this.isEmpty()){
//         return null
//     }
//     value = this.head.value
//     this.head = this.head.next
//     this.size--
//     return value
//   }
//   removeFromEnd(){
//     if(this.isEmpty()){
//         return null
//     }
//     value = this.head.value
//     this.head = this.head.next
//     this.size--
//     return value
//   }
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
// list.append(30);
// list.print();

// doubly linkedlist

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class doublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
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
//       this.tail = node;
//     } else {
//       node.next = this.head;
//       this.head.prev = node;
//       this.head = node;
//     }
//     this.size++;
//   }
//   append(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next = node;
//       node.prev = this.tail;
//       this.tail = node;
//     }
//     this.size++;
//   }
//   removeFromFront(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       return null;
//     }
//     value = this.head.value;
//     this.head = this.head.next;
//     this.size--;
//     return value;
//   }
//   removeFromEnd(value) {
//     if (this.isEmpty()) {
//       return null;
//     }
//     value = this.tail.value;
//     if (this.size == 1) {
//       this.tail = null;
//       this.head = null;
//     } else {
//       this.tail = this.tail.prev;
//       this.tail.next = null;
//     }
//     this.size--;
//     return value;
//   }
//   reverse() {
//     if (this.isEmpty()) {
//       return null;
//     } else {
//       let curr = this.tail;
//       let listValues = "";
//       while (curr) {
//         listValues += `${curr.value} `;
//         curr = curr.prev;
//       }
//       console.log(listValues);
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

// const list = new doublyLinkedList();

// list.prepend(10);
// list.append(20);
// list.append(30);
// list.print();
// // list.removeFromFront();
// // list.removeFromEnd();
// // list.print();

// list.reverse();
// // list.print();
