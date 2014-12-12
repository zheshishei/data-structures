

var Graph = function(){
  this.nodes = {};
};

Graph.prototype.addNode = function(node){
  var makeNode = function() {
    this.value = node;
    this.edges = {};
  };

  this.nodes[node] = new makeNode();

};

Graph.prototype.contains = function(node){
  return this.nodes[node] !== undefined;
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return this.nodes[fromNode].edges[toNode] !== undefined;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode].edges[toNode] = toNode;
  this.nodes[toNode].edges[fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[fromNode].edges[toNode];
  delete this.nodes[toNode].edges[fromNode];
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes,function(node) {
    cb(node.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


