class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
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
  removeFront(value) {
    if (this.isEmpty()) {
      return null;
    } else {
      value = this.head.value;
      this.head = this.head.next;
      this.size--;
      return value;
    }
  }
  removeEnd(value){
    if(this.isEmpty()){
        return null
    }
    value = this.tail.value
    if(this.size==1){
        this.head=null
        this.tail=null
    }
    else{
      
        this.tail = this.tail.prev
        this.tail.next= null
    }
    this.size--
    return value
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
list.removeEnd();
list.print();
