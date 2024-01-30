// bubble sort
// O(n2)
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
// console.log(bubble([-2, -3, 45, 2, 3]));

// insertion sort
// O(n2)
// function insertion(arr) {
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
// console.log(insertion([-2, -3, 45, 2, 3]));

// quick
// O(nlogn)
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
// console.log(quick([-2, -3, 45, 2, 3]));

// merge Sort
// O(nlogn)
// function mergeSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   let minIndex = Math.floor(arr.length / 2);
//   let leftArr = arr.slice(0, minIndex);
//   let rightArr = arr.slice(minIndex);
//   return merge(mergeSort(leftArr), mergeSort(rightArr));
// }

// function merge(leftArr, rightArr) {
//   let sortedArr = [];
//   while (leftArr.length && rightArr.length) {
//     if (leftArr[0] < rightArr[0]) {
//       sortedArr.push(leftArr.shift());
//     } else {
//       sortedArr.push(rightArr.shift());
//     }
//   }
//   return [...sortedArr, ...leftArr, ...rightArr];
// }
// console.log(mergeSort([-2, -3, 45, 2, 3]));

// selection
// function selection(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length - 1; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
//   }
//   return arr;
// }
// console.log(selection([-2, -3, 45, 2, 3]));

// hashtable
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
//     const bucket = this.table[index];
//     if (!bucket) {
//       this.table[index] = [[key, value]];
//     } else {
//       const sameKeyItem = bucket.find((item) => item[0] === key);
//       if (sameKeyItem) {
//         sameKeyItem[1] === value;
//       } else {
//         bucket.push([key, value]);
//       }
//     }
//   }
//   get(key) {
//     const index = this.hash(key);
//     const bucket = this.table[index];
//     if (bucket) {
//       const sameKeyItem = bucket.find((item) => item[0] === key);
//       if (sameKeyItem) {
//         return sameKeyItem[1];
//       }
//     }
//     return undefined;
//   }

//   remove(key) {
//     const index = this.hash(key);
//     const bucket = this.table[index];
//     if (bucket) {
//       const sameKeyItem = bucket.find((item) => item[0] === key);
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

// const table = new hashtable(20);
// table.set("name", "ahmed");
// table.set("age", 23);
// table.get("name");
// // table.remove("age");
// table.set("gae", 25);
// table.display();


// que in linkedlist
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class QueueLinkedList {
    constructor() {
      this.front = null;
      this.end = null;
      this.size = 0;
    }
  
    // Enqueue: Add value to the end of the queue
    enqueue(value) {
      let node = new Node(value);
      if (this.isEmpty()) {
        this.front = node;
        this.end = node;
      } else {
        this.end.next = node;
        this.end = node;
      }
      this.size++;
    }
  
    // Dequeue: Remove and return value from the front of the queue
    dequeue() {
      if (this.isEmpty()) {
        return null; // Underflow
      }
      let removed = this.front;
      this.front = this.front.next;
      if (!this.front) {
        this.end = null; // If the queue becomes empty after dequeue
      }
      this.size--;
      return removed.value;
    }
  
    // Peek: Return the front value without removing it
    peek() {
      return this.isEmpty() ? null : this.front.value;
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.size === 0;
    }
  
    // Get the size of the queue
    size() {
      return this.size;
    }
  }
  
  // Example Usage:
  let queueLinkedList = new QueueLinkedList();
  queueLinkedList.enqueue(10);
  queueLinkedList.enqueue(20);
  queueLinkedList.enqueue(30);
  
  console.log("Front value is:", queueLinkedList.peek()); // Output: 10
  console.log("Queue size is:", queueLinkedList.size()); // Output: 3
  
  console.log(queueLinkedList.dequeue()); // Output: 10
  console.log(queueLinkedList.dequeue()); // Output: 20
  console.log(queueLinkedList.dequeue()); // Output: 30
  console.log(queueLinkedList.dequeue()); // Output: null (Underflow)
  