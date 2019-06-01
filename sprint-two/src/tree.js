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

  return this.children.push(node);

};

treeMethods.contains = function(target) {
  var result;

  var checkByNode = function(node){
    if(node.value === target){
      result = true;
    } else {
      if (node.children.length === 0){
        result = false;
      } else {
        for (var i = 0; i < node.children.length; i++){
          checkByNode(node.children[i]);
        }
      }
    }
  };

  checkByNode(this);

  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
