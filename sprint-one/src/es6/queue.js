class Queue {
  constructor(){
    this;
    this.storage={};
  }

  enqueue(value) {
    var keys = Object.keys(this.storage);
    var maxKey = Math.max(Number(...keys));
    var newKey = maxKey + 1;
    this.storage[newKey] = value;
  }

  dequeue() {
    var keys = Object.keys(this.storage);
    var minKey = Math.min(Number(...keys));
    var value = this.storage[minKey];
    delete this.storage[minKey];
    return value;
  }

  size() {
    var keysNumber = Object.keys(this.storage).length;
    return keysNumber;
  }
}

var someInstance = new Queue();
