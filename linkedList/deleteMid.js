// finding middle node in singly linkedlist

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class linkedlist {
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
    }
    this.size++;
  }
  middle() {
    let slow = null;
    if (this.isEmpty()) {
      return null;
    } else {
      slow = this.head;
      let fast = this.head;
      let prev = null;
      while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
      }
      if (prev === null) {
        this.head = slow.next;
      } else {
        prev.next = slow.next;
      }
    }
    this.size--;
    return slow.value;
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

const list = new linkedlist();

list.prepend(20);
list.prepend(10);
list.append(30);

list.print();

console.log(list.middle());
// list.print();
