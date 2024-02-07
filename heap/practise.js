class MinHeap {
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
      [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
  
    heapifyUp(index) {
      const parentIndex = this.getParentIndex(index);
      if (parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]) {
        this.swap(index, parentIndex);
        this.heapifyUp(parentIndex);
      }
    }
  
    heapifyDown(index) {
      const leftChildIndex = this.getLeftChild(index);
      const rightChildIndex = this.getRightChild(index);
      let minIndex = index;
      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] < this.heap[minIndex]
      ) {
        minIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[minIndex]
      ) {
        minIndex = rightChildIndex;
      }
      if (minIndex !== index) {
        this.swap(index, minIndex);
        this.heapifyDown(minIndex);
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
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown(0);
      return min;
    }
  
    heapSort() {
      let sortedArray = [];
      while (this.heap.length > 0) {
        sortedArray.unshift(this.remove());
      }
      return sortedArray;
    }
  
    buildHeapFromArray(array) {
      this.heap = array;
      const firstNonLeafIndex = Math.floor((array.length - 2) / 2);
      for (let i = firstNonLeafIndex; i >= 0; i--) {
        this.heapifyDown(i);
      }
    }
  }
  
  const minHeapInstance = new MinHeap();
  minHeapInstance.buildHeapFromArray([3, 7, 2, 1, 9, 8]);
  minHeapInstance.insert(25);
  console.log(minHeapInstance.remove());
  console.log(minHeapInstance.heap);
  console.log(minHeapInstance.heapSort());
  