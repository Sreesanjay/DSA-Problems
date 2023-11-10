class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        this.adjacencyList[vertex] = new Set();
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]) this.adjacencyList[vertex1] = new Set();
        if(!this.adjacencyList[vertex2]) this.adjacencyList[vertex2] = new Set();
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }
    removeEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1] || this.adjacencyList[vertex2]) return;
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]) return
        for(let adjVertex in this.adjacencyList){
           this.removeEdge(vertex,adjVertex)
        }
        delete this.adjacencyList[vertex]
    }
}