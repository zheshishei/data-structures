var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;

  someInstance.storage = {};
  someInstance.counter = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
	this.storage[0] = value;
	this.counter++;
};

queueMethods.dequeue = function () {
	var value = this.storage[0];
	delete this.storage[0];
	this.counter--;
	this.storage[0] = this.storage[1];
	return value;
};

queueMethods.size = function () {
	if (this.counter > 0) {
		return this.counter;
	} else {
		return 0;
	}
};	
