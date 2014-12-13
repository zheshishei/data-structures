var BinarySearchTree = function(value){
  this.value = value;
  this.left;
  this.right;
  this.parent;
  this.height = 1;
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
  this.height = Math.max(this.left ? this.left.height : 0, this.right ? this.right.height : 0) + 1;
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
  var queue = [];
  queue.push(this);
  var enqueuer = function (node) {
    //execute cb on the node.value
    cb(node.value);
    //push node.children to queue
    if (node.left !== undefined) {
      queue.push(node.left);
    }
    if (node.right !== undefined) {
      queue.push(node.right);
    }
  };
  while (queue.length > 0) {
    enqueuer(queue.shift());
  }
};

BinarySearchTree.prototype.balance = function () {
  var LH = this.left ? this.left.height : 0;
  var RH = this.right ? this.right.height : 0;
  var balanceFactor = LH - RH;
  if (balanceFactor < -1) {
    console.log('left Rotate');
    //Left Rotate
    var temp = this.value;
    this.value = this.right.value;
    this.right.value = temp;
    var rootLeft = this.left;
    this.left = this.right;
    this.right = this.left.right;
    if (this.right !== undefined) {
      this.right.parent = this;
    }
    this.left.right = this.left.left;
    this.left.left = rootLeft;
    if (rootLeft !== undefined) {
      rootLeft.parent = this.left;
    }
  }
  if (balanceFactor > 1) {
    //Right Rotate
    var temp = this.value;
    this.value = this.left.value;
    this.left.value = temp;
    var rootRight = this.right;
    this.right = this.left;
    this.left = this.right.left;
    if (this.left !== undefined) {
      this.left.parent = this;
    }
    this.right.left = this.right.right;
    this.right.right = rootRight;
    if (rootRight !== undefined) {
      rootRight.parent = this.right;
    }
  }
  console.dir(this);
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
