var Queue = function(){
  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  var keys = Object.keys(this.storage);
  var maxKey = Math.max(Number(...keys));
  var newKey = maxKey + 1;
  this.storage[newKey] = value;
};

queueMethods.dequeue = function() {
  var keys = Object.keys(this.storage);
  var minKey = Math.min(Number(...keys));
  var value = this.storage[minKey];
  delete this.storage[minKey];
  return value;
};

queueMethods.size = function() {
  var keysNumber = Object.keys(this.storage).length;
  return keysNumber;
};
