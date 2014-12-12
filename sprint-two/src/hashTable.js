var HashTable = function(limit){
  this._limit = limit || 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v){
  if (this._size >= this._limit * 3 / 4) {
    HashTable.prototype.resize(this, this._limit * 2);
  }
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k,v];
  var arr = this._storage.get(i);
  if (Array.isArray(arr)) {
    for (var index = 0; index < arr.length; index++) {
      if (arr[index][0] === k) {
        arr[index][1] = v;
        return;
      }
    }
    arr.push(tuple);
  } else {
    this._storage.set(i, [tuple]);
  }
  this._size++;
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(i);
  if (Array.isArray(arr)) {
    for (var index = 0; index < arr.length; index++) {
      if (arr[index][0] === k) {
        return arr[index][1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(i);
  if (Array.isArray(arr)) {
    for (var index = 0; index < arr.length; index++) {
      var tuple = arr.pop();
      if (tuple[0] === k) {
        this._size--;
        return;
      }
      arr.shift(tuple);
    }
  }
};

HashTable.prototype.resize = function(ourHash, newLimit) {
  console.log('resizing');
  console.log("Func args: " + arguments);
  var newHashTable = new HashTable(newLimit);
  newHashTable._size = ourHash._size;
  ourHash._storage.each(function (arr) {
    if(arr !== undefined) {
      for (var i = 0; i < arr.length; i++) {
       newHashTable.insert(arr[i][0], arr[i][1]);
      }
    }
  });
  ourHash = newHashTable;
  console.log("this hashTable");
  console.dir(ourHash);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
