var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = {value, children: []};

  if (this.value === null){
    this.value = value;
  } else {
    return this.children.push(node);
  }

};

treeMethods.contains = function(target) {
  console.log(this);
  if(this.value.value === target){
    return true;
  } else {
    return false;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
