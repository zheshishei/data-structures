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

  this.balance();

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
  console.log(this);
  //debugger;
  var BF =  getBF.call(this);
  if (BF < -1) {
    if(getBF(this.right) > 0) {
      rightRotate(this.right);
    }
    leftRotate(this);
  }
  if (BF > 1) {
    if(getBF(this.left) < 0) {
      leftRotate(this.left);
    }
    rightRotate(this);
  }


  var getBF = function() {
    var LH = this.left ? this.left.height : 0;
    var RH = this.right ? this.right.height : 0;
    return LH - RH;
  };

  var leftRotate = function(root) {
    //Left Rotate

    //swap root and right child
    var temp = root.value;
    root.value = root.right.value;
    root.right.value = temp;

    //keep access to left child
    var rootLeft = root.left;

    //move root's right child to root's left child
    root.left = root.right;

    //move old right right subtree to root's right subtree
    root.right = root.left.right;
    //set parent if exists
    if (root.right !== undefined) {
      root.right.parent = root;
    }

    //move root left's left subtree to its right subtree
    root.left.right = root.left.left;

    //reattach old root's left subtree as new root's left left subtree
    root.left.left = rootLeft;
    //set parent if exists
    if (rootLeft !== undefined) {
      rootLeft.parent = root.left;
    }

    //reset the height of new root left
    root.left.height = Math.max(root.left.left ? root.left.left.height : 0, root.left.right ? root.left.right.height : 0) + 1;
    //reset the height of new root right
    root.left.height = Math.max(root.right.left ? root.right.left.height : 0, root.right.right ? root.right.right.height : 0) + 1;
  };

  var rightRotate = function(root) {
    //Left Rotate

    //swap root and left child
    var temp = root.value;
    root.value = root.left.value;
    root.left.value = temp;

    //keep access to right child
    var rootRight = root.right;

    //move root's left child to root's right child
    root.right = root.left;

    //move old left left subtree to root's left subtree
    root.left = root.right.left;
    //set parent if exists
    if (root.left !== undefined) {
      root.left.parent = root;
    }

    //move root right's right subtree to its left subtree
    root.right.left = root.right.right;

    //reattach old root's right subtree as new root's right right subtree
    root.right.right = rootright;
    //set parent if exists
    if (rootRight !== undefined) {
      rootRight.parent = root.right;
    }

        //reset the height of new root left
    root.left.height = Math.max(root.left.left ? root.left.left.height : 0, root.left.right ? root.left.right.height : 0) + 1;
    //reset the height of new root right
    root.left.height = Math.max(root.right.left ? root.right.left.height : 0, root.right.right ? root.right.right.height : 0) + 1;
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
