var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function(){
    counter--;
    var value = storage[counter];
    delete storage[counter];
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
