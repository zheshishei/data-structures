var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    length++;
    storage[length] = value;
  };

  someInstance.dequeue = function(){
    if (length > 0) {
      for (var i = 0; i < length; i++) {
        storage[i] = storage[i+1];
      }
      var value = storage[0];
      delete storage[0];
      delete storage[length];
      length--;
      return value;
    }
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
