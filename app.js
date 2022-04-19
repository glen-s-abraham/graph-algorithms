const {GraphBuilder, DijkstraStrategy} = require('js-shortest-path');
const {Graph} = require('graph')

//Creates a graph
let graph = GraphBuilder()

graph = graph.edge("S", "A", 2)
graph = graph.edge("S", "B", 4)
graph = graph.edge("A", "B", 1)
graph = graph.edge("A", "C", 2)
graph = graph.edge("B", "C", 3)
graph = graph.build()
console.log(graph)

let g = new Graph()
g.set("S","A",2)
g.set("S", "B", 4)
g.set("A", "B", 1)
g.set("A", "C", 2)
g.set("B", "C", 3)




const dijkstra = DijkstraStrategy(graph);
const path=dijkstra.shortest('S','C').path()
console.log(path)
