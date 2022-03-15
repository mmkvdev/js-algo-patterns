/*
 * Graphs Implementation
*/

class Graph {
  constructor () {
    this.adjacencyList = {};
  }

  addVertex (vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []; 
    }
  }

  addEdge (vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge (vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => {
      v !== vertex2
    });
  
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => {
      v !== vertex2
    });
  }

  removeVertex (vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }

  depthFirstTraversal (vertex) {
    let result = [], visited = {};
    let adjacentMemo = this.adjacencyList;

    (function dfs (start) {
      if (!start) {
        return null;
      }
      visited[start] = true;
      result.push(start);
      adjacentMemo[start].forEach((neighbour) => {
        if (!visited[neighbour]) {
          return dfs(neighbour);
        }
      })
    })(vertex);

    return result;
  }

  breadthFirstTraversal (start) {
    let queue = [start];
    let result = [], visited = {};
    let currentVertex;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      })
    }

    return result;
  }
}

const graphExample = new Graph();
graphExample.addVertex('A');
graphExample.addVertex('B');
graphExample.addVertex('C');
graphExample.addVertex('D');
graphExample.addVertex('E');
graphExample.addVertex('F');
// console.log(graphExample);

graphExample.addEdge('A', 'B');
graphExample.addEdge('A', 'C');
graphExample.addEdge('B', 'D');
graphExample.addEdge('C', 'E');
graphExample.addEdge('D', 'E');
graphExample.addEdge('D', 'F');
graphExample.addEdge('F', 'E');
/* graphExample.removeEdge('MMK', 'Hyderabad');
console.log(graphExample);

graphExample.removeVertex('US');
console.log(graphExample); */

// console.log(graphExample);
console.log(graphExample.depthFirstTraversal('A'));
console.log(graphExample.breadthFirstTraversal('A'));