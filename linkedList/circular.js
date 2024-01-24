// circular linkedlist

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class circularLinkedList {
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
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      node.next = this.head;
    } else {
      let curr = this.head;
      while (curr.next !== this.head) {
        curr = curr.next;
      }
      curr.next = node;
      node.next = this.head;
    }
    this.size++;
  }
  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    }
    let curr = this.head;
    let listValues = "";
    do {
      listValues += `${curr.value} `;
      curr = curr.next;
    } while (curr !== this.head);
    {
      console.log(listValues);
    }
  }
}
const list = new circularLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.print();
