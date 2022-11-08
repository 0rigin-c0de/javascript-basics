class Graph{
    vertices = new Set();
    adjacentList = new Map();

    get vertices(){
        return Array.from(this.vertices)
    }
    get adjacentList(){
        const list = {};
        this.adjacentList.forEach((val, key) => {
            list[key] = Array.from(val);
        });

        return list;
    }

    addVertex(vertex = null){
        if(vertex !== null && vertex !== undefined){
            this.vertices.add(vertex);
            this.adjacentList.add(vertex, new Set());
        }
    }
    addEdge(vertex1 = null, vertex2 = null , directed = true){
        if(vertex1 !== null &&  vertex2 &&  vertex1 !== vertex2){
            if(!this.adjacentList.has(vertex1)){
                this.addVertex(vertex1);
            }
            if(!this.adjacentList.has(vertex2)){
                this.addVertex(vertex2);
            }

            this.adjacentList.get(vertex1).add(vertex2);
            
            if(directed){
                this.adjacentList.get(vertex2).add(vertex1);
            }
        } 
    }
    tostring(){
        let str = '';

        this.adjacentList.forEach((val, key) => {
            str += `${key} -> ${Array.from(val).join}`
        });

        return str;
    }
}

//Now instantiate the graph 
const graph = new Graph();

const  alphabet = Array.from({length: 26}, (_, i) => String.fromCharCode(i + 65)); 

const randomIndex = (max, min = 0)

const vertices= ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
graph.addEdge('A', 'B'); 
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(
    graph.tostring());
    
