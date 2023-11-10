class Graph{
    constructor(vertices){
        this.vertices = vertices;
        this.adjMatrix = [];
        for(let i=0; i<this.vertices; i++){
            this.adjMatrix.push(Array(vertices).fill(0))
        }
    }
    addEdge(vertex1, vertex2){
        if(vertex1 < 0 || vertex1 >= this.vertices || vertex2 < 0 || vertex2 >= this.vertices) return;
        this.adjMatrix[vertex1][vertex2] = 1;
        this.adjMatrix[vertex2][vertex1] = 1;
    }
    deleteEdge(vertex1, vertex2){
        if(vertex1 < 0 || vertex1 >= this.vertices || vertex2 < 0 || vertex2 >= this.vertices) return;
        this.adjMatrix[vertex1][vertex2] = 0;
        this.adjMatrix[vertex2][vertex1] = 0;
    }
}
const graph = new Graph(3);
graph.addEdge(0,1);
console.log(graph.adjMatrix);
