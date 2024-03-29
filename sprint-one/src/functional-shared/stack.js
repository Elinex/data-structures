var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};

  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.size;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value){
  // create a numeric key
  var keys = Object.keys(this.storage);
  var maxKey = Math.max(Number(...keys));
  var newKey = maxKey + 1;

  // creates a new key-value
  // add new property at the top of the stack
  this.storage[newKey] = value;
};

stackMethods.pop = function(){
  // get the last key in the storage
  var keys = Object.keys(this.storage);
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
  var value = this.storage[maxKey];

  delete this.storage[maxKey];

  return value;
};

stackMethods.size = function(){
  // get the number of keys in the storage
  var keysNumber = Object.keys(this.storage).length;

  return keysNumber;
};
