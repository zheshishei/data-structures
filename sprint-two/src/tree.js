var Tree = function(value){
  this.value = value;
  this.children = [];  // fix me
};

Tree.prototype.addChild = function(value){
  this.children.push(new Tree(value));
};

Tree.prototype.contains = function(target){
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
