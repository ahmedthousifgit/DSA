// bubble sorting
// O(n)  O(n^2) O(n^2)
// function bubble(arr) {
//   let swap;
//   do {
//     swap = false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         swap = true;
//       }
//     }
//   } while (swap);
//   return arr;
// }

// console.log(bubble([2, 3, 4, 1, 6]));

// insertion sort
// O(n) O(n^2) O(N^2)
// function insetion(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let NTI = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > NTI) {
//       arr[j + 1] = arr[j];
//       j = j - 1;
//     }
//     arr[j + 1] = NTI;
//   }
//   return arr;
// }
// console.log(insetion([2, 3, 4, 1, 5]));

// quick sort
// O(nlogn)  O(n^2)  O(nlogn)

// function quick(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   let pivot = arr[arr.length - 1];
//   let left = [];
//   let right = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [...quick(left), pivot, ...quick(right)];
// }

// console.log(quick([3, 2, 5, 4, 1]));

// merge sort
// best , worst, average - O(nlogn)

// function mergeSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   let mid = Math.floor(arr.length / 2);
//   let leftArr = arr.slice(0, mid);
//   let rightArr = arr.slice(mid);
//   return merge(mergeSort(leftArr), mergeSort(rightArr));
// }

// function merge(leftArr, rightArr) {
//   let sortedArr = [];
//   while (leftArr.length && rightArr.length) {
//     if (leftArr[0] <= rightArr[0]) {
//       sortedArr.push(leftArr.shift());
//     } else {
//       sortedArr.push(rightArr.shift());
//     }
//   }
//   return [...sortedArr, ...leftArr, ...rightArr];
// }

// console.log(mergeSort([4, 3, 2, 1, 5]));

// selection sort
// O(n^2)
// function selection(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length - 1; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex != i) {
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
//   }
//   return arr;
// }

// console.log(selection([3, 2, 1, 45]));

// hash table
// class hashtable {
//   constructor(size) {
//     this.table = new Array(size);
//     this.size = size;
//   }

//   hash(key) {
//     let total = 0;
//     for (let i = 0; i < key.length; i++) {
//       total += key.charCodeAt(i);
//     }
//     return total % this.size;
//   }

//   set(key, value) {
//     const index = this.hash(key);
//     // this.table[index] = value;
//     const bucket = this.table[index];
//     if (!bucket) {
//       this.table[index] = [[key, value]];
//     } else {
//       let sameKeyItem = bucket.find((item) => item[0] === key);
//       if (sameKeyItem) {
//         sameKeyItem[1] == value;
//       } else {
//         bucket.push([key, value]);
//       }
//     }
//   }

//   get(key) {
//     const index = this.hash(key);
//     // return this.table[index];
//     const bucket = this.table[index];
//     if (bucket) {
//       let sameKeyItem = bucket.find((item) => item[0] === key);
//       if (sameKeyItem) {
//         return sameKeyItem[1];
//       }
//     }
//     return undefined;
//   }

//   remove(key) {
//     const index = this.hash(key);
//     // this.table[index] = undefined;
//     const bucket = this.table[index];

//     if (bucket) {
//       let sameKeyItem = bucket.find((item) => item[0] === key);
//       if (sameKeyItem) {
//         bucket.splice(bucket.indexOf(sameKeyItem), 1);
//       }
//     }
//   }

//   display() {
//     for (let i = 0; i < this.table.length; i++) {
//       if (this.table[i]) {
//         console.log(i, this.table[i]);
//       }
//     }
//   }
// }
// const hash = new hashtable(10);
// hash.set("name", "thousif");
// hash.set("mane", "ahmed");
// hash.set("age", 23);
// hash.get("age");
// hash.display();

// count of string
// const s = "geeksforgeeks";
// const arr = Array(26).fill(0);

// for (let i = 0; i < s.length; i++) {
//   arr[s.charCodeAt(i) - "a".charCodeAt(0)]++;
// }

// const ch = "z";
// const count = arr[ch.charCodeAt(0) - "a".charCodeAt(0)];
// console.log(count);

// separate chaining

// const s = "geeksforgeeks";
// const arr = Array(26).fill(0);

// for (let i = 0; i < s.length; i++) {
//   arr[s.charCodeAt(i) - "a".charCodeAt(0)]++;
// }

// const ch = "e";
// const count = arr[ch.charCodeAt(0) - "a".charCodeAt(0)];
// console.log(count);

// que in arr
// class queue {
//   constructor() {
//     this.item = [];
//   }

//   isEmpty() {
//     return this.item.length == 0;
//   }
//   getSize() {
//     return this.item.length;
//   }

//   enqueue(value) {
//     this.item.push(value);
//   }

//   deque() {
//     if (this.isEmpty()) {
//       return null;
//     } else {
//       return this.item.shift();
//     }
//   }

//   peek() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     return this.item[0];
//   }

//   display() {
//     console.log(this.item);
//   }
// }

// const que = new queue();
// que.enqueue(10);
// que.enqueue(20);
// que.enqueue(30);
// que.deque();
// console.log(que.peek());
// que.display();

// que in linked list
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class que {
//   constructor() {
//     this.head = null;
//     this.end = null;
//     this.size = 0;
//   }

//   isEmpty() {
//     return this.size === 0;
//   }
//   getSize() {
//     return this.size;
//   }
//   enque(value) {
//     const node = new Node(value);
//     node.next = this.head;
//     this.head = node;
//     this.size++;
//   }

//   deque() {
//     if (this.isEmpty()) {
//      return null
//     } else {
//       let removed = this.head;
//       this.head = this.head.next;
//       this.size--;
//       return removed.value;
//     }
//   }

//   peek() {
//     if (this.isEmpty()) {
//       return null;
//     } else {
//       return this.head.value;
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

// const ques = new que();
// ques.enque(10);
// ques.enque(20);
// ques.enque(30);
// ques.deque()
// ques.print();

// dups in array
// function dups(arr) {
//   let newNums = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!newNums.includes(arr[i])) {
//       newNums.push(arr[i]);
//     }
//   }
//   return newNums;
// }

// console.log(dups([1, 1, 2, 2, 3, 3, 4, 5]));

// stack in linkedlist
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
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
//   push(value) {
//     const node = new Node(value);
//     node.next = this.head;
//     this.head = node;
//     this.size++;
//   }

//   pop() {
//     if (this.isEmpty()) {
//       return null;
//     } else {
//       let removed = this.head;
//       this.head = this.head.next;
//       this.size--;
//       return removed.value;
//     }
//   }

//   peek() {
//     return this.isEmpty() ? null : this.head.value;
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

// const stack = new Stack();

// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.pop();
// console.log(stack.peek());
// stack.print();

// stack arr
// class Stack {
//   constructor() {
//     this.item = [];
//   }
//   isEmpty() {
//     return this.item.length === 0;
//   }
//   getSize() {
//     return this.item.length;
//   }
//   push(value) {
//     this.item.push(value);
//   }
//   pop() {
//     if (this.isEmpty()) {
//       return null;
//     } else {
//       return this.item.pop();
//     }
//   }

//   middle() {
//     let slow = 0;
//     let fast = 0;
//     while (fast < this.item.length && fast + 1 < this.item.length) {
//       slow++;
//       fast += 2;
//     }
//     return this.item[slow];
//   }

//   removeMid() {
//     let stack = [];
//     let mid = Math.floor(this.getSize() / 2);
//     while (this.getSize() > mid + 1) {
//       stack.push(this.item.pop());
//     }
//     this.item.pop();
//     while (stack.length) {
//       this.item.push(stack.pop());
//     }
//   }
//   secondlast() {
//     let last = this.item.pop();
//     let secondLast = this.item.pop();

//     this.item.push(secondLast);
//     this.item.push(last);
//     return secondLast;
//   }
//   reverse() {
//     let auxStack = new Stack();
//     while (!this.isEmpty()) {
//       auxStack.push(this.pop());
//     }
//     console.log("Reversed Stack:", auxStack.item);
//     while (!auxStack.isEmpty()) {
//       this.push(auxStack.pop());
//     }
//   }
//   peek() {
//     return this.isEmpty() ? null : this.item[0];
//   }

//   print() {
//     console.log(this.item);
//   }
// }

// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(39);
// stack.push(40);
// stack.print();
// // console.log(stack.middle());
// // stack.removeMid();
// // console.log(stack.secondlast());
// // stack.pop();
// // console.log(stack.peek());
// stack.reverse();
// stack.print();


