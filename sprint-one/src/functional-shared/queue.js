var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //Data
  var QueueInstance = {};
  QueueInstance.storage = {};
  QueueInstance.length = 0;

  //Methods
  QueueInstance.enqueue = queueMethods.enqueue;
  QueueInstance.dequeue = queueMethods.dequeue;
  QueueInstance.size    = queueMethods.size;

  return QueueInstance;
};

var queueMethods = {

  enqueue : function (value) {
    this.length++;
    this.storage[this.length] = value;
  },
  dequeue : function () {
    if (this.length > 0) {
      for (var i = 0; i < this.length; i++) {
        this.storage[i] = this.storage[i+1];
      }
      var result = this.storage[0];
      delete this.storage[0];
      delete this.storage[this.length];
      this.length--;
      return result;
    }
  },
  size : function () {
    return this.length;
  }
};
