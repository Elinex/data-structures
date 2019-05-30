var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  var count = 0;

  someInstance.push = function(value) {
    // creates a new key-value
    // add this new property at the end of the queue (storage)
    storage[count] = value;


    // add 1 to count
    count ++;

    // returns storage
    return storage;

  };

  someInstance.pop = function() {
    // last key
    var keys = Object.keys(storage);
    var lastkey = keys[keys.length-1];

    // removes the last property of storage
    delete storage[lastkey];


    return storage;

  };

  someInstance.size = function() {
    // get the number of keys in the storage
    var keysLength = Object.keys(storage).length;


    // return number of keys of storage
    return keysLength;
  };

  return someInstance;
};
