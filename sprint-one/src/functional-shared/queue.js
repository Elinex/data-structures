var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;

  return someInstance;

};

var queueMethods = {};
var storage = {};

queueMethods.enqueue = function(value){
  // create a numeric key
  var keys = Object.keys(storage);
  var maxKey = Math.max(Number(...keys));
  var newKey = maxKey + 1;

  // creates a new key-value
  // add new property at the end of the queue (storage)
  storage[newKey] = value;
};

queueMethods.dequeue = function(){
  // get the first key in the storage
  var keys = Object.keys(storage);
  var minKey = Math.min(Number(...keys));

  // "value" is just to keep the value reference, to be returned after
  // delete storage[minkey] happen
  var value = storage[minKey];

  delete storage[minKey];

  return value;
};

queueMethods.size = function(){
  // get the number of keys in the storage
  var keysNumber = Object.keys(storage).length;

  return keysNumber;
};
