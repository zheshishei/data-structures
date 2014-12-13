var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    if(list.head === null) {
      list.head = list.tail = node;
    } else {
      list.tail.next = node;
      node.prev = list.tail;
      list.tail = node;
    }
  };

  list.addToHead = function(value) {
    var node = Node(value);
    if(list.head === null) {
      list.head = list.tail = node;
    } else {
      list.head.prev = node;
      node.next = list.head;
      list.head = node;
    }
  }

  list.removeHead = function(){
    var head = list.head;
    list.head = list.head.next;
    return head.value;
  };

  list.removeTail = function() {
    var tail = list.tail;
    list.tail.prev.next = null;
    list.tail = list.tail.prev;
    return tail.value;
  };

  list.contains = function(target){
    var current = list.head;
    while (current !== null) {
      if(current.value === target) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
