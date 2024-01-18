class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Other methods...
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

  insertAfter(targetValue, newData) {
    const node = new Node(newData);
    let curr = this.head;

    while (curr !== null) {
      if (curr.value === targetValue) {
        node.next = curr.next;
        curr.next = node;
        this.size++;
        return;
      }
      curr = curr.next;
    }

    console.log(`Node with value ${targetValue} not found.`);
  }

  insertBefore(targetValue, newData) {
    const node = new Node(newData);

    if (this.head === null) {
      console.log("List is empty.");
      return;
    }

    if (this.head.value === targetValue) {
      node.next = this.head;
      this.head = node;
      this.size++;
      return;
    }

    let curr = this.head;
    let prev = null;

    while (curr !== null) {
      if (curr.value === targetValue) {
        prev.next = node;
        node.next = curr;
        this.size++;
        return;
      }
      prev = curr;
      curr = curr.next;
    }

    console.log(`Node with value ${targetValue} not found.`);
  }

  // Other methods...

  print() {
    let curr = this.head;
    let listValues = "";
    while (curr) {
      listValues += `${curr.value} `;
      curr = curr.next;
    }
    console.log(listValues);
  }
}

// Example usage:

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);

list.print(); // Output: 10 20 30

list.insertAfter(20, 25);
list.print(); // Output: 10 20 25 30

list.insertBefore(25, 22);
list.print(); // Output: 10 20 22 25 30
