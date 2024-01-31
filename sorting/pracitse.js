// hashtable collision
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
//     let bucket = this.table[index];
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
//     let bucket = this.table[index];
//     if (bucket) {
//       let sameKeyItem = bucket.find((item) => item[0] == key);
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

// const table = new hashtable(10);
// table.set("name", "ahmed");
// table.set("mane", "thousif");
// table.set("age", 30);
// console.log(table.get("mane"));
// // table.remove("age");
// // console.log(table.get("age"));
// table.display();

// string count using hash
// let s = "geeksforgeeks";

// let arr = Array(26).fill(0);
// for (let i = 0; i < s.length; i++) {
//   arr[s.charCodeAt(i) - "a".charCodeAt(0)]++;
// }
// let char = "g";
// let count = arr[char.charCodeAt(0) - "a".charCodeAt(0)];
// console.log(count);

// que ll
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class Stack {
//   constructor() {
//     this.front = null;
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

//     node.next = this.front;
//     this.front = node;
//     this.size++;
//   }

//   pop() {
//     let popped = this.front;
//     this.front = this.front.next;
//     this.size--;
//     return popped.value;
//   }

//   peek() {
//     if (this.isEmpty()) {
//       return null;
//     } else {
//       return this.front.value;
//     }
//   }
//   print() {
//     if (this.isEmpty()) {
//       console.log("list is empty");
//     } else {
//       let curr = this.front;
//       let listValues = "";
//       while (curr) {
//         listValues += `${curr.value} `;
//         curr = curr.next;
//       }
//       console.log(listValues);
//     }
//   }
// }

// const que = new Stack();
// que.push(10);
// que.push(20);
// que.push(30);
// que.pop();
// console.log(que.peek());
// que.print();

// que array
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
//     this.item.pop();
//   }

//   peek() {
//     return this.item[this.item.length - 1];
//   }

//   print() {
//     if (this.isEmpty()) {
//       return null;
//     } else {
//       console.log(this.item);
//     }
//   }
// }

// const que = new Stack();
// que.push(10);
// que.push(20);
// que.push(30);
// que.pop();
// console.log(que.peek());
// que.print();

// que linkedlist
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Que {
//   constructor() {
//     this.front = null;
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
//     if (this.isEmpty()) {
//       this.front = node;
//       this.end = node;
//     } else {
//       this.end.next = node;
//       this.end = node;
//     }
//     this.size++;
//   }

//   deque() {
//     if (this.isEmpty()) {
//       return null;
//     } else {
//       let removed = this.front;
//       this.front = this.front.next;
//       this.size--;
//       return removed.value;
//     }
//   }

//   peek() {
//     return this.isEmpty() ? null : this.front.value;
//   }

//   print() {
//     if (this.isEmpty()) {
//       console.log("list is empty");
//     } else {
//       let curr = this.front;
//       let listValues = "";

//       while (curr) {
//         listValues += `${curr.value} `;
//         curr = curr.next;
//       }
//       console.log(listValues);
//     }
//   }
// }

// const que = new Que();
// que.enque(10);
// que.enque(20);
// que.enque(30);
// // que.deque();
// console.log(que.peek());
// que.print();

// que in que
// class stackQue {
//   constructor() {
//     this.que1 = [];
//     this.que2 = [];
//   }
//   push(element) {
//     while (this.que1.length > 0) {
//       this.que2.push(this.que1.shift());
//     }
//     this.que1.push(element);

//     while (this.que2.length > 0) {
//       this.que1.push(this.que2.shift());
//     }
//   }

//   pop() {
//     if (this.isEmpty()) {
//       return null;
//     } else {
//       return this.que1.shift();
//     }
//   }

//   peek() {
//     return this.isEmpty() ? null : this.que1[0];
//   }

//   isEmpty() {
//     return this.que1.length === 0;
//   }

//   // Get the size of the que
//   size() {
//     return this.que1.length;
//   }
// }

// const que = new stackQue();
// que.push(10);
// que.push(20);
// que.push(30);

// console.log(que.pop()); // Output: 30
// console.log(que.pop()); // Output: 20
// console.log(que.pop()); // Output: 10
// console.log(que.pop());


class QueueUsingStack {
    constructor() {
      this.stack1 = []; // For push operation
      this.stack2 = []; // For pop operation
    }
  
    // push operation
    push(element) {
      // Move all elements from stack2 to stack1
      while (this.stack2.length > 0) {
        this.stack1.push(this.stack2.pop());
      }
  
      // Push the new element onto stack1
      this.stack1.push(element);
    }
  
    // pop operation
    pop() {
      // Move all elements from stack1 to stack2
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
  
      // Pop the front element from stack2 (simulating pop)
      return this.stack2.pop();
    }
  
    // Peek at the front element without removing it
    peek() {
      if (this.isEmpty()) {
        return null;
      }
  
      // If stack2 is not empty, peek from stack2; otherwise, peek from stack1
      return this.stack2.length > 0 ? this.stack2[this.stack2.length - 1] : this.stack1[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.stack1.length === 0 && this.stack2.length === 0;
    }
  
    // Get the size of the queue
    size() {
      return this.stack1.length + this.stack2.length;
    }
  }
  
  // Example usage:
  const queue = new QueueUsingStack();
  queue.push(10);
  queue.push(20);
  queue.push(30);
  
  console.log("Front element is:", queue.peek())    ; // Output: 10
  console.log("Queue size is:", queue.size()); // Output: 3
  
  console.log(queue.pop()); // Output: 10
  console.log(queue.pop()); // Output: 20
  console.log(queue.pop()); // Output: 30
  console.log(queue.pop()); // Output: null (Underflow)
  
