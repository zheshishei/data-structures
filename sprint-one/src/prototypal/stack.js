var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //Data
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.length = 0;

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.length++;
  this.storage[this.length] = value;
};

stackMethods.pop = function() {
  if(this.length > 0) {
    var result = this.storage[this.length];
    delete this.storage[this.length];
    this.length--;

    return result;
  }
};

stackMethods.size = function() {
  return this.length;
};

