var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //Data
  var StackInstance = {};
  StackInstance.storage = {};
  StackInstance.length = 0;

  // //Methods
  // StackInstance.push = stackMethods.push;
  // StackInstance.pop = stackMethods.pop;
  // StackInstance.size = stackMethods.size;

  // StackInstance.methods = Object.create(stackMethods);
  _.extend(StackInstance, stackMethods);
  return StackInstance;
};

var stackMethods = {
  push : function (value) {
    this.length++;
    this.storage[this.length] = value;
  },
  pop : function() {
    if (this.length > 0) {
      var value = this.storage[this.length];
      this.length--;
      return value;
    }
  },
  size : function() {
    return this.length;
  }
};

