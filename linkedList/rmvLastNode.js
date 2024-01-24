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

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }
  removeEnd() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.size==1) {
      this.head = null;
      return;
    }
    let curr = this.head;
    let prev = null;
    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = null;
    this.size--;
  }
  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    }
    let curr = this.head;
    let listValues = "";
    while (curr) {
      listValues += `${curr.value} `;
      curr = curr.next;
    }
    console.log(listValues);
  }
}

const list = new linkedList();
list.append(10);
// list.append(20);
// list.append(30);
// list.append(40);
// list.removeEnd();
list.print();
