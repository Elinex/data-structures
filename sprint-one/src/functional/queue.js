var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  var count = 0;

  someInstance.enqueue = function(value) {
    // creates a new key-value
    // add this new property at the end of the queue (storage)
    storage[count] = value;
    console.log('storage after enqueue: ', storage);

    // add 1 to count
    count ++;

    // returns storage
    return storage;
  };

  someInstance.dequeue = function() {

    // first key
    var firstkey = Object.keys(storage)[0];

    // removes the first property of storage
    delete storage[firstkey];
    console.log('storage after dequeue: ', storage);

    return storage;
  };

  someInstance.size = function() {
    // get the number of keys in the storage
    var keysNumber = Object.keys(storage).length;
    console.log('storage size: ', keysNumber);

    // return number of keys of storage
    return keysNumber;
  };

  return someInstance;
};
