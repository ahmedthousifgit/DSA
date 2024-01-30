class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class queueLinkedList {
  constructor() {
    this.front = null;
    this.end = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }

  enque(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.front = node;
      this.end = node;
    } else {
      this.end.next = node;
      this.end = node;
    }
    this.size++;
  }

  deque() {
    if (this.isEmpty()) {
      return null;
    } else {
      let removed = this.front;
      this.front = this.front.next;
      this.size--;
      return removed.value;
    }
  }
  peek() {
    return this.isEmpty() ? null : this.front.value;
  }
  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let curr = this.front;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const que = new queueLinkedList();
que.enque(10);
que.enque(20);
que.enque(30);
que.deque();
console.log(que.peek());
que.print();
