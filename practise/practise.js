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
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class linkedList {
  constructor() {
    this.head = null;
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
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
      this.size++;
    }
  }
  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  remove(index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
       removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }
  removeValue(value){
    if(this.isEmpty()){
        return null
    }
    if(this.head.value ===value){
        this.head = this.head.next
        this.size--
        return value
    }
    else{
        let prev = this.head
        while(prev.next && prev.next.value != value){
            prev = prev.next
        }
        if(prev.next){
            let removedNode = prev.next
            prev.next = removedNode.next
            this.size--
            return value
        }
        return null
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
const list = new linkedList();
console.log("list is empty", list.isEmpty());
console.log("get size", list.getSize());
list.print();

list.prepend(10);
list.print();

list.prepend(20);
list.print();

list.append(30);
list.print();

list.insert(15, 2);
list.print();

list.remove(2)
list.print()

list.removeValue(30)
list.print()

console.log(list.removeValue(45));
list.print()