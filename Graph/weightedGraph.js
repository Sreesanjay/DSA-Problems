class Graph{
    constructor(){
        this.adjList = new Map()
    }
    addVertex(vertex){
        if(!this.adjList.has(vertex)) this.adjList.set(vertex , []) ;
    }
    addEdge(v1,v2,weight){
        if(!this.adjList.has(v1) && !this.adjList.has(v2)){
            this.adjList.get(v1).push({vertex:v1,weight})
            this.adjList.get(v2).push({vertex:v2,weight})
        }
    }
    printGraph() {
        for (const [vertex, edges] of this.adjList) {
          console.log(vertex,edges)
        }
      }
}
const graph = new Graph();
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addEdge('A', 'B',6)
graph.addEdge('A', 'C',5)
graph.addEdge('B', 'D',3)
graph.addEdge('C', 'D',2)
graph.printGraph()