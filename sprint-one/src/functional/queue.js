var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function(){
    var value = storage[0];
    delete storage[0];
    counter--;
    storage[0] = storage[1];
    return value;
  };

  someInstance.size = function(){
    if (counter > 0) {
      return counter;
    } else {
      return 0;
    }
  };

  return someInstance;
};
