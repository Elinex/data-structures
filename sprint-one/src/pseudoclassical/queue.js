var Queue = function(){
  this;
};

var storage = {};

Queue.prototype.enqueue = function(value){
  var keys = Object.keys(storage);
  var maxKey = Math.max(Number(...keys));
  var newKey = maxKey + 1;
  storage[newKey] = value;
};

Queue.prototype.dequeue = function() {
  var keys = Object.keys(storage);
  var minKey = Math.min(Number(...keys));
  var value = storage[minKey];
  delete storage[minKey];
  return value;
};

Queue.prototype.size = function() {
  var keysNumber = Object.keys(storage).length;
  return keysNumber;
};

var someInstance = new Queue();
