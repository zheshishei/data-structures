var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v){
  if (this._size >= this._limit * 0.75) { //check size for doubling
    this.resize(this._limit * 2); //double hash table
  }
  var i = getIndexBelowMaxForKey(k, this._limit); //hash key
  var tuple = [k,v]; //create a tuple
  var bucket = this._storage.get(i); //grab the bucket at the key
  if (Array.isArray(bucket)) { //if the bucket is an array
    for (var index = 0; index < bucket.length; index++) { //iterate thru bucket
      if (bucket[index][0] === k) { //if element 0 in the tuple is the key
        bucket[index][1] = v; //overwrite the value
        return; //return
      }
    }
    bucket.push(tuple); //if bucket, avoid collision
  } else {
    this._storage.set(i, [tuple]); //if no bucket, add the tuple
  }
  this._size++; //increment size
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (Array.isArray(bucket)) {
    for (var index = 0; index < bucket.length; index++) {
      if (bucket[index][0] === k) { //if a match
        return bucket[index][1]; //return the value
      }
    }
  }
  return null; //if nothing, return null
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (Array.isArray(bucket)) {
    for (var index = 0; index < bucket.length; index++) {
      if (bucket[index][0] === k) { //if we find k
        this._size--; //decrement the size
        bucket.splice(index, 1); //remove and repair bucket
      }
    }
  }

  if (this._size < this._limit / 4) { //if small # of entries
    this.resize(Math.round(this._limit / 2)); //cut HT in half
  }
};

HashTable.prototype.resize = function(newLimit) {
  var ourHT = this; //set to our current HT object
  var oldLimitedArray = ourHT._storage; //copy our table prop to var
  ourHT._storage = LimitedArray(newLimit); //increase table size
  ourHT._limit = newLimit; //increase the limit
  ourHT._size = 0; //reset the size
  oldLimitedArray.each(function (bucket) { //iterate thorugh table
    if(bucket !== undefined) { //if the bucket exists
      for (var i = 0; i < bucket.length; i++) { //iterate over each tuple
       ourHT.insert(bucket[i][0], bucket[i][1]); //reinsert the tuple
      }
    }
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
