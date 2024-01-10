// fibonacci recursion
// function fibRec(n){
//     if(n<2){
//         return n
//     }
//     return fibRec(n-1)+fibRec(n-2)
// }
// console.log(fibRec(7));

//factorial
// function factRec(n) {
//   if(n === 0) {
//     return 1;
//   }
//   return n * factRec(n - 1);
// }
// console.log(factRec(5));

//adding a node in beginning
// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }
// class linkedList{
//     constructor(){
//         this.head = null
//         this.size= 0
//     }
//     isEmpty(){
//         return this.size ===0
//     }
//     getSize(){
//         return this.size
//     }
//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log('empty');
//         }else{
//             let curr = this.head
//             let listValues = ''
//             while(curr){
//                 listValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listValues);
//         }

//     }
// }
// const list = new linkedList()
// console.log("list is empty", list.isEmpty());
// console.log("get size ", list.getSize());
// list.print();

// list.append(10);
// list.print();

// list.append(20);
// list.append(30);
// list.print();

//day 3
// class Node {
//     constructor(values){
//         this.value = values
//         this.next = null
//     }
// }
// class linkedList{
//     constructor(){
//         this.head = null
//         this.size= 0
//     }
//     isEmpty(){
//         return this.size===0
//     }
//     getSize(){
//         return this.size
//     }
//     append(values){
//         const node = new Node(values)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }
//     append(values){
//         const node = new Node(values)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             let prev = this.head
//             while(prev.next){
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log('list is empty');
//         }else{
//             let curr = this.head
//             let listValues=''
//             while(curr){
//                 listValues += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listValues);
//         }
//     }
// }

// const list = new linkedList()
// console.log('list is empty',list.isEmpty());
// console.log('get size',list.getSize());

// list.print()

// list.append(10)
// list.print()

// list.append(20)
// list.append(30)
// list.print()

//day 4
// fibonacci

// function fibonacci(n){
//     let fib = [0,1]
//     for(let i=2;i<n;i++){
//       fib[i]=fib[i-1]+fib[i-2]
//     }
//     return fib
// }
// console.log(fibonacci(5));

// factorial
// function factorial(n){
//     let result =1
//     for(let i=2 ;i<=n ;i++){
//         result = result*i
//     }
//     return result
// }

// console.log(factorial(5));

// prime
// function prime(n){
//     if(n<2){
//         return false
//     }
//     for(let i=2;i<n;i++){
//         if(n%i==0){
//             return false
//         }else{
//             return true
//         }
//     }
// }
// console.log(prime(5));

// power of n
// function power(n){
//     if(n<2){
//         return false
//     }
//     while(n>1){
//         if(n%2!==0){
//             return false
//         }
//         n=n/2
//     }
//     return true
// }

// console.log(power(5));

// recursion fibonacci
// function recFib(n){
//     if(n<2){
//         return n
//     }
//     return recFib(n-1) + recFib(n-2)
// }
// console.log(recFib(5));

// prepend
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
//       let prev = this.head;
//       while (prev.next) {
//         prev = prev.next;
//       }
//       prev.next = node;
//       this.size++;
//     }
//   }
//   insert(value, index) {
//     if (index < 0 || index > this.size) {
//       return;
//     }
//     if (index === 0) {
//       this.prepend(value);
//     } else {
//       const node = new Node(value);
//       let prev = this.head;
//       for (let i = 0; i < index - 1; i++) {
//         prev = prev.next;
//       }
//       node.next = prev.next;
//       prev.next = node;
//       this.size++;
//     }
//   }

//   remove(index) {
//     if (index < 0 || index > this.size) {
//       return null;
//     }
//     let removedNode;
//     if (index === 0) {

//       removedNode = this.head;
//       this.head = this.head.next;
//     } else {
//       let prev = this.head;
//       for (let i = 0; i < index - 1; i++) {
//         prev = prev.next;
//       }
//        removedNode = prev.next;
//       prev.next = removedNode.next;
//     }
//     this.size--;
//     return removedNode.value;
//   }
//   removeValue(value){
//     if(this.isEmpty()){
//         return null
//     }
//     if(this.head.value ===value){
//         this.head = this.head.next
//         this.size--
//         return value
//     }
//     else{
//         let prev = this.head
//         while(prev.next && prev.next.value != value){
//             prev = prev.next
//         }
//         if(prev.next){
//             let removedNode = prev.next
//             prev.next = removedNode.next
//             this.size--
//             return value
//         }
//         return null
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
// console.log("list is empty", list.isEmpty());
// console.log("get size", list.getSize());
// list.print();

// list.prepend(10);
// list.print();

// list.prepend(20);
// list.print();

// list.append(30);
// list.print();

// list.insert(15, 2);
// list.print();

// list.remove(2)
// list.print()

// list.removeValue(30)
// list.print()

// console.log(list.removeValue(45));
// list.print()

//day 4

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
//   //   O(1)
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
//   //   O(n)
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
//       this.size++;
//     }
//   }
//   //   insert at beginning O(1) & rest O(n)
//   insert(value, index) {
//     if (index < 0 || index > this.size) {
//       return;
//     }
//     if (index === 0) {
//       this.prepend(value);
//     } else {
//       const node = new Node(value);
//       let prev = this.head;
//       for (let i = 0; i < index - 1; i++) {
//         prev = prev.next;
//       }
//       node.next = prev.next;
//       prev.next = node;
//       this.size++;
//     }
//   }
//   //   time complexity of removing 1st node is O(1) & rest is O(n)
//   remove(index) {
//     if (index < 0 || index > this.size) {
//       return null;
//     }
//     let removedNode;
//     if (index === 0) {
//       this.head = removedNode;
//       this.head = this.head.next;
//     } else {
//       let prev = this.head;
//       for (let i = 0; i < index - 1; i++) {
//         prev = prev.next;
//       }
//       removedNode = prev.next;
//       prev.next = removedNode.next;
//       this.size--;
//     }
//   }
//   removeValue(value) {
//     if (this.isEmpty()) {
//       return null;
//     }
//     if (this.head.value === value) {
//       removedNode = this.head;
//       this.size--;
//       return value;
//     } else {
//       let prev = this.head;
//       while (prev.next && prev.next.value !== value) {
//         prev = prev.next;
//       }
//       if (prev.next) {
//         let removedNode = prev.next;
//         prev.next = removedNode.next;
//         this.size--;
//         return value;
//       }
//     }
//     return null;
//   }
//   //time complexity O(n)
//   search(value) {
//     if (this.isEmpty()) {
//       return -1;
//     } else {
//       let i = 0;
//       let curr = this.head;
//       while (curr) {
//         if (curr.value === value) {
//           return i;
//         }
//         curr = curr.next;
//         i++;
//       }
//       return -1;
//     }
//   }
//   reverse() {
//     let prev = null;
//     let curr = this.head;
//     while (curr) {
//       let next = curr.next;
//       curr.next = prev;
//       prev = curr;
//       curr = next;
//     }
//     this.head = prev;
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
// console.log("list is empty", list.isEmpty());
// console.log("get size", list.getSize());
// list.print();

// list.prepend(10);
// list.print();

// list.append(20);
// list.append(30);
// list.print();

// list.insert(40, 3);
// list.print();

// list.reverse();
// list.print();

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
//   append(value){
//     const node = new Node(value)
//     if(this.isEmpty()){
//         this.head = node
//         this.tail= node
//     }else{
//         this.tail.next = node
//         this.tail = node
//     }
//     this.size++
//   }
//   removeFromFront(value){
//     if(this.isEmpty()){
//         return null
//     }
//     if(this.size ==1){
//         this.head = null
//         this.tail = null
//     }else{
//         value= this.head.value
//         this.head = this.head.next
//         this.size--
//         return value
//     }
//   }
//   removeFromEnd(value){
//     if(this.isEmpty()){
//         return null
//     }if(this.size==1){
//         this.head = null
//         this.tail = null

//     }else{
//         let prev = this.head
//         while(prev.next && prev.next!==tail){
//             prev = prev.next
//         }
//         prev.next = null
//         this.tail = prev
//     }
//     this.size--
//     return value

//   }
// }
// const list = new linkedList()

// list.append(10)
// list.append(20)
// list.append(30)
// list.prepend(5)
// list.print()
// list.removeFromFront()
// list.print()

// doubly linked list
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
  }
  removeFromFront(value) {
    if (this.isEmpty()) {
      return null;
    } else {
      const value = this.head.value;
      this.head = this.head.next;
      this.size--;
      return value;
    }
  }
  removeFromEnd(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.size == 1) {
      this.head = null;
      this.tail = null;
    } else {
      value = this.tail.value;
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.size--
      return value
    }

  }
  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}
const list = new doublyLinkedList();
console.log("list is empty", list.isEmpty());
console.log("get size", list.getSize());
list.print();

list.prepend(10);
list.append(20);
list.removeFromEnd();
list.print();
