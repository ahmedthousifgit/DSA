// remove dups froms sorted DLL
// remove dups in singly linkedlist (sorted)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class linkedList {
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
  insert(value, index) {
    const node = new Node(value);
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
    }
    this.size++;
    return value;
  }
  removeDups() {
    if (this.isEmpty()) {
      return null;
    }
    let curr = this.head;
    while (curr && curr.next) {
      if (curr.value === curr.next.value) {
        curr.next = curr.next.next;
        if (curr.next) {
          curr.next.prev = curr;
        }
      } else {
        curr = curr.next;
      }
    }
  }
  print() {
    if (this.isEmpty()) {
      console.log("lsit is empty");
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

list.prepend(10);
list.append(20);
list.append(30);
list.insert(40, 3);
list.append(40);
list.append(50);
list.append(50);
list.removeDups();
list.print();
