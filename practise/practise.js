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


