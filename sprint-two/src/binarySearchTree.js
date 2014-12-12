var BinarySearchTree = function (value) {
  var BSTree = Object.create(BinarySearchTree.prototype);
  BSTree.value = value !== undefined ? value : null; //set value to the first element
  BSTree.left;
  BSTree.right;
  return BSTree;
};

BinarySearchTree.prototype.insert = function (value) {
  if (value < this.value) { //if smaller than the root
    if (this.left === undefined) { //and not undefined
      this.left = BinarySearchTree(value); //create a new node at the left child of the root
    } else {
      this.left.insert(value); //if the left is occupied, recursively insert in next open slot
    }
  } else {
    if (this.right === undefined) { //if undefined
      this.right = BinarySearchTree(value); //create new node
    } else {
      this.right.insert(value); //if the right is occupied, recursively insert
    }
  }
};

BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) {
    return true; //if equal to the root
  }
  if (this.left !== undefined && value < this.value) {
    return this.left.contains(value); //if smaller, run on left tree recursively to find
  }
  if (this.right !== undefined) {
    return this.right.contains(value); //if larger, run on right tree recursively to find
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function (cb) {
  cb(this.value); //run the callback function with the root as the argument
  if (this.left !== undefined) {
    this.left.depthFirstLog(cb); //run func recursively on LHS
  }
  if (this.right !== undefined) {
    this.right.depthFirstLog(cb); //run func recursively on RHS
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
