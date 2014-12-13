var BinarySearchTree = function(value){
  this.value = value;
  this.left;
  this.right;
  this.parent;

};

BinarySearchTree.prototype.insert = function (value) {
  if (this.value > value) {
    if (this.left === undefined) {
      this.left = new BinarySearchTree(value);
      this.left.parent = this;
    } else {
      this.left.insert(value);
    }
  } else {
    if (this.right === undefined) {
      this.right = new BinarySearchTree(value);
      this.right.parent = this;
    } else {
      this.right.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function (target) {
  if (this.value === target) {
    return true;
  }

  if (target < this.value) {
    if (this.left !== undefined) {
      return this.left.contains(target);
    }
  }
  if (this.right !== undefined) {
    return this.right.contains(target);
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function (cb) {
  cb(this.value);
  if (this.left !== undefined) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== undefined) {
    this.right.depthFirstLog(cb);
  }
};

BinarySearchTree.prototype.breadthFirstLog = function (cb) {
  cb(this.value);

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
