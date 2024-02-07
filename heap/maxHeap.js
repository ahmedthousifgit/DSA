class maxHeap {
  constructor() {
    this.heap = [];
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  getLeftChild(index) {
    return 2 * index + 1;
  }

  getRightChild(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  heapifyUp(index) {
    const parentIndex = this.getParentIndex(index);
    if (parentIndex >= 0 && this.heap[parentIndex] < this.heap[index]) {
      this.swap(index, parentIndex);
      this.heapifyUp(parentIndex);
    }
  }

  heapifyDown(index) {
    const leftChildIndex = this.getLeftChild(index);
    const rightChildIndex = this.getRightChild(index);
    let maxIndex = index;
    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] > this.heap[maxIndex]
    ) {
      maxIndex = leftChildIndex;
    }
    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] > this.heap[maxIndex]
    ) {
      maxIndex = rightChildIndex;
    }
    if (maxIndex !== index) {
      this.swap(index, maxIndex);
      this.heapifyDown(maxIndex);
    }
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  remove() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return max;
  }

  buildHeapFromArray(array) {
    this.heap = array;
    let firstNonLeafIndex = Math.floor((array.length - 2) / 2);
    for (let i = firstNonLeafIndex; i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  heapSort() {
    const sortedArray = [];
    while (this.heap.length > 0) {
      sortedArray.push(this.remove());
    }
    return sortedArray;
  }
}

const heaps = new maxHeap();

heaps.buildHeapFromArray([3, 7, 2, 1, 9, 8]);

heaps.insert(84);

console.log(heaps.heap);

console.log(heaps.heapSort());
