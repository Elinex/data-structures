var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // adds a node that will be the last node of the list

    var newNode = Node(value);

    if (list.head === null && list.tail === null){
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail = newNode;
      list.head.next = list.tail;
    }

  };

  list.removeHead = function() {
    // removes the first node of a list (list.head)
    // and point its value to list.head.next
    if (list.head.next === null){
      return list.head.value;
    } else {
      list.head = list.head.next;
    }
  };

  list.contains = function(target) {
    var result;

    var checkByNode = function (node){
      if(node.value === target){
        result = true;
      } else{
        if(node.next === null){
          result = false;
        } else{
          checkByNode(node.next);
        }
      }
    };

    checkByNode(list.head);

    return result;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
