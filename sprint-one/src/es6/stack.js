class Stack {
  constructor(){
    this;
    this.storage={};
  }

  push(value) {
    var keys = Object.keys(this.storage);
    var maxKey = Math.max(Number(...keys));
    var newKey = maxKey + 1;
    this.storage[newKey] = value;
  }

  pop() {
    var keys = Object.keys(this.storage);
    var stringToNumber = function(){
      var toNumber = [];
      for (var i =0 ; i < keys.length; i ++){
        toNumber.push(Number(keys[i]));
      }
      return toNumber;
    }();
    var maxKey = Math.max(...stringToNumber);
    var value = this.storage[maxKey];
    delete this.storage[maxKey];
    return value;
  }

  size() {
    var keysNumber = Object.keys(this.storage).length;
    return keysNumber;
  }
}

var someInstance = new Stack();
