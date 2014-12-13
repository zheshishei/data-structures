var Tree = function(value, parent){
  this.value = value;
  this.children = [];  // fix me
  this.parent = parent;
};

Tree.prototype.addChild = function(value){
  this.children.push(new Tree(value, this));
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

Tree.prototype.removeParent = function () {
  for (var i = 0; i < this.parent.children.length; i++) {
    if (this.parent.children[i] === this) {
      this.parent.children.splice(i, 1);
    }
  }
  this.parent = undefined;
  return this;
};

Tree.prototype.traverse = function (cb) {
  if(this.value !== undefined) {
    cb.call(this, this.value);
  }
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].traverse(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
