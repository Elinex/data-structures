var Stack = function(){
  this;
};

var storage = {};

Stack.prototype.push = function(value){
  var keys = Object.keys(storage);
  var maxKey = Math.max(Number(...keys));
  var newKey = maxKey + 1;
  storage[newKey] = value;
};

Stack.prototype.pop = function(){
  var keys = Object.keys(storage);
  var stringToNumber = function(){
    var toNumber = [];
    for (var i =0 ; i < keys.length; i ++){
      toNumber.push(Number(keys[i]));
    }
    return toNumber;
  }();
  var maxKey = Math.max(...stringToNumber);
  var value = storage[maxKey];
  delete storage[maxKey];
  return value;
};

Stack.prototype.size = function(){
  var keysNumber = Object.keys(storage).length;
  return keysNumber;
};

var someInstance = new Stack();
