// adjacecnyl list implementation
// undirected graph
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
  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }

  countEdge() {
    let edgeCount = 0;
    for (let vertex in this.adjacencyList) {
      edgeCount += this.adjacencyList[vertex].size;
    }
    return edgeCount / 2;
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }
    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  dfs(startVertex, visited = {}) {
    if (!this.adjacencyList[startVertex]) return;

    console.log(startVertex);
    visited[startVertex] = true;

    for (const neighbor of this.adjacencyList[startVertex]) {
      if (!visited[neighbor]) {
        this.dfs(neighbor, visited);
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
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");
// graph.removeEdge("A", "B");
// graph.removeVertex("B");

graph.display();
console.log(graph.countEdge());
console.log(graph.hasEdge("C", "A"));
