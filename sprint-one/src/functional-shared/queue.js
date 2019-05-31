var Queue = function(){
  var someInstance = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};
var storage = {};

queueMethods.enqueue = function(value){
  var keys = Object.keys(storage);
  var maxKey = Math.max(Number(...keys));
  var newKey = maxKey + 1;
  storage[newKey] = value;
};

queueMethods.dequeue = function() {
  var keys = Object.keys(storage);
  var minKey = Math.min(Number(...keys));
  var value = storage[minKey];
  delete storage[minKey];
  return value;
};

queueMethods.size = function() {
  var keysNumber = Object.keys(storage).length;
  return keysNumber;
};
