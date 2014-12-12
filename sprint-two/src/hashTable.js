var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v){
  if (this._size >= this._limit * 0.75) {
    console.log('increasing because ' + k);
    this.resize(this._limit * 2);
    console.dir(this);
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
  // console.log("Table is: ");
  // console.log(this);
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
  var bucket = this._storage.get(i);

  if (Array.isArray(bucket)) {
    for (var index = 0; index < bucket.length; index++) {
      if (bucket[index][0] === k) {
        this._size--;
        bucket.splice(index, 1);
      }
    }
  }

  if (this._size < this._limit / 4) {
    this.resize(Math.round(this._limit / 2));
  }
};

HashTable.prototype.resize = function(newLimit) {
  var ourHT = this;
  var oldLimitedArray = ourHT._storage;
  ourHT._storage = LimitedArray(newLimit);
  ourHT._limit = newLimit;
  ourHT._size = 0;
  oldLimitedArray.each(function (arr) {
    if(arr !== undefined) {
      for (var i = 0; i < arr.length; i++) {
       ourHT.insert(arr[i][0], arr[i][1]);
      }
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
