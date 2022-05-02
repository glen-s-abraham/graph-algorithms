const jsnx = require('jsnetworkx')

const graph = new jsnx.Graph()

graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addNode('D')
graph.addNode('E')
graph.addNode('F')
graph.addNode('G')
graph.addNode('H')
graph.addNode('I')
graph.addNode('J')
graph.addNode('K')
graph.addNode('L')

graph.addEdge('A','B')
graph.addEdge('B','C')
graph.addEdge('C','D')
graph.addEdge('D','E')
graph.addEdge('E','F')
graph.addEdge('F','G')
graph.addEdge('G','H')
graph.addEdge('D','I')
graph.addEdge('I','J')
graph.addEdge('D','K')
graph.addEdge('K','L')

const unvisitedMatrix = {}
const visitedMatrix={}
graph.nodes().forEach(node=>{visitedMatrix[node]=false})

const path = []

checkIfAllNodesAreVisited=()=>{
    let isComplete=true
    Object.values(visitedMatrix).forEach(val=>{if(!val){isComplete=false};})
    return isComplete
}

// graph.nodes().forEach(node=>{
//     if((graph.degree(node)-1)>1){
//         let neighbors = graph.neighbors(node)
//         neighbors = neighbors.filter(node=>visitedMatrix[node]==false)
//         console.log(neighbors)
//         unvisitedMatrix[node]=neighbors
//     }
//     console.log(checkIfAllNodesAreVisited())
//     visitedMatrix[node]=true
    
// })

const startNode = 'A'
visitedMatrix[startNode] = true
while(checkIfAllNodesAreVisited()){
    
}

console.log(unvisitedMatrix)

