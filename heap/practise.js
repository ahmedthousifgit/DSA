// // adjacency list in graph

// class Graph {
//   constructor() {
//     this.adjacencyList = {};
//   }
//   addVertex(vertex) {
//     if (!this.adjacencyList[vertex]) {
//       this.adjacencyList[vertex] = new Set();
//     }
//   }
//   addEdge(vertex1, vertex2) {
//     if (!this.adjacencyList[vertex1]) {
//       this.addVertex(vertex1);
//     }
//     if (!this.adjacencyList[vertex2]) {
//       this.addVertex(vertex2);
//     }
//     this.adjacencyList[vertex1].add(vertex2) &&
//       this.adjacencyList[vertex2].add(vertex1);
//   }
//   hasEdge(vertex1, vertex2) {
//     return (
//       this.adjacencyList[vertex1].has(vertex2) &&
//       this.adjacencyList[vertex2].has(vertex1)
//     );
//   }
//   removeEdge(vertex1, vertex2) {
//     this.adjacencyList[vertex1].delete(vertex2) &&
//       this.adjacencyList[vertex2].delete(vertex1);
//   }
//   removeVertex(vertex) {
//     if (!this.adjacencyList[vertex]) {
//       return;
//     }
//     for (let adjacentVertex of this.adjacencyList[vertex]) {
//       this.removeEdge(vertex, adjacentVertex);
//     }
//     delete this.adjacencyList[vertex];
//   }
//   bfs(startVertex) {
//     const queue = [startVertex];
//     const visited = { [startVertex]: true };
//     while (queue.length > 0) {
//       let currentVertex = queue.shift();
//       console.log(currentVertex);
//       for (let neighbor of this.adjacencyList[currentVertex]) {
//         if (!visited[neighbor]) {
//           visited[neighbor] = true;
//           queue.push(neighbor);
//         }
//       }
//     }
//   }

//   dfs(startVertex, visited = {}) {
//     console.log(startVertex);
//     visited[startVertex] = true;
//     for (const neighbor of this.adjacencyList[startVertex]) {
//       if (!visited[neighbor]) {
//         this.dfs(neighbor, visited);
//       }
//     }
//   }
//   display() {
//     for (let vertex in this.adjacencyList) {
//       console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
//     }
//   }
// }

// const graph = new Graph();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addEdge("A", "B");
// graph.addEdge("B", "C");
// // graph.removeEdge("A","B")
// // graph.removeVertex("A");
// graph.display();
// console.log("BFS");
// graph.bfs("A");

// console.log("DFS");
// graph.dfs("A");
// // console.log(graph.hasEdge("A","B"));

// heap
class maxHeap{
    constructor(){
        this.heap =[]
    }
    getParentIndex(index){
        return Math.floor((index-1)/2)
    }
    getLeftChild(index){
        return 2*index+1
    }
    getRightChild(index){
        return 2*index+2
    }
    swap(index1,index2){
        [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
    }
    heapifyUp(index){
        const parentIndex = this.getParentIndex(index)
        if(parentIndex>=0 && this.heap[parentIndex]>this.heap[index]){
            this.swap(index,parentIndex)
            this.heapifyUp(parentIndex)
        }
    }
    heapifyDown(index){
        const leftChildIndex = this.getLeftChild(index)
        const rightChildIndex = this.getRightChild(index)
        let maxIndex = index
        if(leftChildIndex <this.heap.length && this.heap[leftChildIndex] > this.heap[maxIndex]){
            maxIndex = leftChildIndex
        }
        if(rightChildIndex <this.heap.length && this.heap[rightChildIndex]> this.heap[maxIndex]){
            maxIndex = rightChildIndex
        }
        if(maxIndex!==index){
            this.swap(index,maxIndex)
            this.heapifyDown(maxIndex)
        }
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }

    remove(){
        if(this.heap.length===0){
            return null
        }
        if(this.heap.length===1){
            return this.heap.pop()
        }
        const max = this.heap[0]
        this.heap[0]= this.heap.pop()
        this.heapifyDown(0)
        return max
    }

    heapSort(){
        let sortedArray=[]
        while(this.heap.length>0){
            sortedArray.unshift(this.remove())
        }
        return sortedArray
    }
    buildHeapFromArray(array){
        this.heap = array
        let firstNonLeafIndex = Math.floor((array.length-2)/2)
        for(let i=firstNonLeafIndex;i>=0;i--){
            this.heapifyDown(i)
        }
    }
}
// const heaps = new maxHeap()

// heaps.buildHeapFromArray([3, 7, 2, 1, 9, 8]);

// heaps.insert(84);

// console.log(heaps.heap);

// console.log(heaps.heapSort());

//Binary search tree
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// class binarySearchTree {
//   constructor() {
//     this.root = null;
//   }
//   isEmpty() {
//     return this.root === null;
//   }

//   insert(value) {
//     const newNode = new Node(value);
//     if (this.isEmpty()) {
//       this.root = newNode;
//     } else {
//       this.insertNode(this.root, newNode);
//     }
//   }
//   insertNode(root, newNode) {
//     if (newNode.value < root.value) {
//       if (root.left === null) {
//         root.left = newNode;
//       } else {
//         this.insertNode(root.left, newNode);
//       }
//     } else {
//       if (root.right === null) {
//         root.right = newNode;
//       } else {
//         this.insertNode(root.right, newNode);
//       }
//     }
//   }

//   search(root, value) {
//     if (!root) {
//       return false;
//     }
//     if (root.value === value) {
//       return true;
//     } else if (value < root.value) {
//       return this.search(root.left, value);
//     } else {
//       return this.search(root.right, value);
//     }
//   }

//   height(node) {
//     if (!node) {
//       return 0;
//     } else {
//       const leftHeight = this.height(node.left);
//       const rightHeight = this.height(node.right);
//       return Math.max(leftHeight, rightHeight) + 1;
//     }
//   }

//   levelOrder() {
//     let que = [];
//     que.push(this.root);
//     while (que.length) {
//       let curr = que.shift();
//       console.log(curr.value);
//       if (curr.left) {
//         que.push(curr.left);
//       }
//       if (curr.right) {
//         que.push(curr.right);
//       }
//     }
//   }

//   preOrder(root) {
//     if (root) {
//       console.log(root.value);
//       this.preOrder(root.left);
//       this.preOrder(root.right);
//     }
//   }
//   min(root) {
//     if (!root.left) {
//       return root.value;
//     } else {
//       return this.min(root.left);
//     }
//   }

//   delete(value) {
//     this.root = this.deleteNode(this.root, value);
//   }
//   deleteNode(root, value) {
//     if (root === null) {
//       return root;
//     }
//     if (value < root.value) {
//       return this.deleteNode(root.left, value);
//     } else if (value > root.value) {
//       return this.deleteNode(root.right, value);
//     } else {
//       if (!root.left && !root.right) {
//         return null;
//       } else if (!root.left) {
//         return root.right;
//       } else if (!root.right) {
//         return root.left;
//       }
//       root.value = this.min(root.right);
//       root.right = this.deleteNode(root.right, root.value);
//     }
//     return root;
//   }

//   bstValidation() {
//     return this.isValid(this.root, -Infinity, Infinity);
//   }
//   isValid(node, min, max) {
//     if (!node) {
//       return true;
//     }
//     if (node.valeu < min || node.value > max) {
//       return false;
//     }
//     return (
//       this.isValid(node.left, min, node.value) &&
//       this.isValid(node.right, node.right, max)
//     );
//   }
// }

// const tree = new binarySearchTree();
// tree.insert(10);
// tree.insert(5);
// tree.insert(15);
// tree.insert(1);
// tree.insert(7);
// // tree.delete(31);

// // console.log(tree.height(tree.root));
// console.log(tree.search(tree.root, 31));
// // console.log("bsfs");
// // tree.levelOrder();
// // console.log("dfs");
// // tree.preOrder(tree.root);
// console.log(tree.bstValidation());

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
// class binarySearchTree {
//   constructor() {
//     this.root = null;
//   }
//   isEmpty() {
//     return this.root === null;
//   }
//   insert(value) {
//     const newNode = new Node(value);
//     if (this.isEmpty()) {
//       this.root = newNode;
//     } else {
//       this.insertNode(this.root, newNode);
//     }
//   }
//   insertNode(root, newNode) {
//     if (newNode.value < root.value) {
//       if (root.left === null) {
//         root.left = newNode;
//       } else {
//         this.insertNode(root.left, newNode);
//       }
//     } else {
//       if (root.right === null) {
//         root.right = newNode;
//       } else {
//         this.insertNode(root.right, newNode);
//       }
//     }
//   }

//   min(root) {
//     if (!root.left) {
//       return root.value;
//     } else {
//       return this.min(root.left);
//     }
//   }
//   search(root, value) {
//     if (!root) {
//       return false;
//     } else {
//       if (root.value === value) {
//         return true;
//       } else if (value < root.value) {
//         return this.search(root.left, value);
//       } else {
//         return this.search(root.right, value);
//       }
//     }
//   }

//   delete(value) {
//     this.root = this.deleteNode(this.root, value);
//   }
//   deleteNode(root, value) {
//     if (this.root === null) {
//       return root;
//     } else if (value < root.value) {
//       root.left = this.deleteNode(root.left, value);
//     } else if (value > root.value) {
//       root.right = this.deleteNode(root.right, value);
//     } else {
//       if (!root.left && !root.right) {
//         return null;
//       } else if (!root.left) {
//         return root.right;
//       } else if (!root.right) {
//         return root.left;
//       }
//       root.value = this.min(root.right);
//       root.right = this.deleteNode(root.right, root.value);
//     }
//     return root;
//   }

//   bstValidation() {
//     return this.isValid(this.root, -Infinity, Infinity);
//   }
//   isValid(node, min, max) {
//     if (!node) {
//       return true;
//     }
//     if (node.valu < min || node.value > max) {
//       return false;
//     }
//     return (
//       this.isValid(node.left, min, node.value) &&
//       this.isValid(node.right, node.value, max)
//     );
//   }
// }

// const tree = new binarySearchTree()
// tree.insert(10);
// tree.insert(5);
// tree.insert(15);
// tree.insert(1);
// tree.insert(4);
// tree.delete(4)
// console.log(tree.bstValidation());
// console.log(tree.search(tree.root,4));
