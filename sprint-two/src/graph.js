

var Graph = function () {
  this.nodes = {};
};

Graph.prototype.makeNode = function (name) {
    this.value = name;
    this.edges = [];
};

Graph.prototype.addNode = function (node) {
  this.nodes[node] = new this.makeNode(node);
};

Graph.prototype.contains = function (node) {
  return this.nodes[node] !== undefined;
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return this.nodes[fromNode].edges.indexOf(toNode) >= 0;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode].edges.push(toNode);
  this.nodes[toNode].edges.push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[fromNode].edges[toNode];
  delete this.nodes[toNode].edges[fromNode];
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, function(node) {
    cb(node.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



