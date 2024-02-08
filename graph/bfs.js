// BFS in adjacency list
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2) &&
      this.adjacencyList[vertex2].add(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2) &&
      this.adjacencyList[vertex2].delete(vertex1);
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return null;
    }
    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  bfs(startVertex) {
    const queue = [startVertex];
    const visited = { [startVertex]: true };

    while (queue.length > 0) {
      const currentVertex = queue.shift();
      console.log(currentVertex);

      for (const neighbor of this.adjacencyList[currentVertex]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
  }
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + "-> " + [...this.adjacencyList[vertex]]);
    }
  }
}
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("D", "E");
graph.addEdge("D", "F");

graph.display();
// console.log(graph.hasEdge("C", "A"));
console.log("BFS");
graph.bfs("A");
// graph.display();
// console.log(graph.hasEdge("C", "A"));
