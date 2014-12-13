describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = new BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a("function");
    expect(binarySearchTree.contains).to.be.a("function");
    expect(binarySearchTree.depthFirstLog).to.be.a("function");
  });

  it('should insert values at the correct location in the tree', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5,2,3]);
  });

  it('should execute a callback on every value in a tree using "breadthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(3);
    binarySearchTree.insert(9);
    binarySearchTree.insert(1);
    binarySearchTree.insert(4);
    binarySearchTree.insert(7);
    binarySearchTree.insert(12);
    binarySearchTree.insert(2);
    binarySearchTree.insert(8);
    binarySearchTree.insert(11);
    binarySearchTree.insert(13);
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([5,3,9,1,4,7,12,2,8,11,13]);
  });

  it('should left Rotate (manual)', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(3);
    binarySearchTree.insert(9);
    binarySearchTree.insert(1);
    binarySearchTree.insert(7);
    binarySearchTree.insert(12);
    binarySearchTree.insert(8);
    binarySearchTree.insert(11);
    binarySearchTree.balance();
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([9,5,12,3,7,11,1,8]);
  });

  it('should right Rotate (manual)', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(1);
    binarySearchTree.insert(4);
    binarySearchTree.insert(2);
    binarySearchTree.balance();
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([3,1,5,2,4,7]);
  });
});
