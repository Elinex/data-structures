var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  //  Add a string to the top of the stack
  someInstance.push = function(value) {
    // create a numeric key
    var keys = Object.keys(storage);
    var maxKey = Math.max(Number(...keys));
    var newKey = maxKey + 1;

    // creates a new key-value
    // add new property at the top of the stack
    storage[newKey] = value;

  };

  // Remove and return the string on the top of the stack
  someInstance.pop = function() {

    // get the last key in the storage
    var keys = Object.keys(storage);
    var stringToNumber = function(){
      var toNumber = [];
      for (var i =0 ; i < keys.length; i ++){
        toNumber.push(Number(keys[i]));
      }
      return toNumber;
    }();
    var maxKey = Math.max(...stringToNumber);

    // "value" is just to keep the value reference, to be returned after
    // delete storage[maxKey] happen
    var value = storage[maxKey];

    delete storage[maxKey];

    return value;

  };

  // Return the number of items on the stack
  someInstance.size = function() {
    // get the number of keys in the storage
    var keysNumber = Object.keys(storage).length;

    return keysNumber;
  };

  return someInstance;
};
