class Graph{
    constructor(){
        this.adjList  = {};
    }
    add(vertex){
        this.adjList[vertex] = (new Set()); 
    }
    addEdge(vertex1,vertex2){
        if(this.adjList[vertex1] && this.adjList[vertex2]){
            this.adjList[vertex1].add(vertex2);
            this.adjList[vertex2].add(vertex1);
        }
    }
    bfsTravel(vertex){
        let visited = new Set();
        visited.add(vertex);
        let queue = [vertex]
        while(queue.length > 0){
            let vertex = queue.shift();
            let adjs = this.adjList[vertex];
            console.log(vertex);
            for(let adj of adjs){
                if(!visited.has(adj)){
                    queue.push(adj);
                    visited.add(adj);
                }
                
            }
        }
    }
    dfsTravel(vertex){
        let visited = new Set();
        this._dfsTravel(vertex,visited);
    }
    _dfsTravel(vertex,visited){
        console.log(vertex);
        visited.add(vertex);
        let adjs = this.adjList[vertex];
        for(let adj of adjs){
            if(!visited.has(adj)){
                this._dfsTravel(adj,visited);
            }
        }
    }
}
const graph = new Graph();
graph.add('A')
graph.add('B')
graph.add('C')
graph.add('D')
graph.add('E')
graph.addEdge('A','B')
graph.addEdge('A','C')
graph.addEdge('B','C')
graph.addEdge('D','E')
graph.addEdge('C','D')
graph.dfsTravel('A')