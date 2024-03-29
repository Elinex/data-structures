var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  // Add a string to the back of the queue
  someInstance.enqueue = function(value) {

    // create a numeric key
    var keys = Object.keys(storage);
    var maxKey = Math.max(Number(...keys));
    var newKey = maxKey + 1;

    // creates a new key-value
    // add new property at the end of the queue (storage)
    storage[newKey] = value;

  };

  // Remove and return the string at the front of the queue
  someInstance.dequeue = function() {

    // get the first key in the storage
    var keys = Object.keys(storage);
    var minKey = Math.min(Number(...keys));

    // "value" is just to keep the value reference, to be returned after
    // delete storage[minkey] happen
    var value = storage[minKey];

    delete storage[minKey];

    return value;
  };

  // Return the number of items in the queue
  someInstance.size = function() {
    // get the number of keys in the storage
    var keysNumber = Object.keys(storage).length;

    return keysNumber;
  };

  return someInstance;
};
