var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function (k, v) {
  // if (this._size >= this._limit - 1) {
  //   this._limit *= 2;
  //   var newStorage = LimitedArray(this._limit);
  //   this._storage.each(function (arr, position) {
  //     for (var i = 0; i < arr.length; i++) {
  //       HashTable.prototype.innerInsert.call(newStorage, this._limit, arr[i][0], arr[i][1]);
  //     }
  //   });
  //   this._storage = newStorage;
  // }
  this.innerInsert.call(this._storage, this._limit, k, v);
  this._size++;
  console.dir(this)
};

HashTable.prototype.retrieve = function (k) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(i);
  for (var j = 0; j < arr.length; j++) {
    if (arr[j][0] === k) { //if the element matches at this pos matches
      return arr[j][1]; //return the element at this position with key
    }
  }
  return null; //else set to null
};

HashTable.prototype.remove = function (k) {
  var i = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(i);
  var element;
  for (var j = 0; j < arr.length; j++) {
    element = arr.pop(); //pop off each element
    if(element[0] === k) { //if we find a match
      this._size--;
      break; //break out of loop
    } else {
      arr.shift(element); //else, add the element back to the array
    }
  }
  /*
  if (this._size <= Math.round(this._limit/4)) {
    this._limit /= 4;
    var newStorage = LimitedArray(this._limit);
    this._storage.each(function (arr, position) {
      for (var i = 0; i < arr.length; i++) {
        HashTable.prototype.innerInsert.call(newStorage, this._limit, arr[i][0], arr[i][1]);
      }
    });
    this._storage = newStorage;
  }*/
};

HashTable.prototype.innerInsert = function (limit, k, v) {
    var obj = [k,v];
    var i = getIndexBelowMaxForKey(k, limit);
    var position = this.get(i);
    if (position === undefined) { //if this position is open
      var arr = [obj]; //create an array the k, v object
      this.set(i, arr); //push this to the storage array
    } else {
      this.get(i).push(obj); //if an element currently exists
      //push it to the array at the position
    }
  };



/*
 * Complexity: What is the time complexity of the above functions?
 */
