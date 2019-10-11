
//  A tree is a data staracture that consist
// of nodes in parent/child relationship


//  linear linked list - is listed - a special tree
//  tree - non linear


class Node{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}
class BST {
    constructor(){
        this.root= null
    }

    // insertion 
    /* 
        accept a value from 
        - creat a node with the given value
        - if this.roor it null set root to be the newNode
        - else   loop through the node 
          create a new variable and assign the root to the new varialbe
          if valeu of the new varaible is lesss than the value of the new node or is null
          set the new variable to be the left node
          else set new varaible is to be the right nodele

     */
    insert(value){
        var node = new Node(value);
        if(!this.root){
            this.root = node;
        }
        else{
            var current = this.root;
            while(true){
                if(current.value === node.value){
                    break;
                }
                else if(node.value< current.value){
                    if(current.left!==null){
                        current = current.left;
                    }else{
                        current.left=node;
                        break;
                    }
                }
                else{
                    if(current.right!==null){
                        current = current.right;
                    }else{
                        current.right=node;
                        break;
                    }
                }
            }
        }

        return this
    }
// find
/* 
    - accept the value
    - if the root is empty, return null
    - if there is a root compare the value of the root with the give value
    - if equal retrun true
    - if greater 
        *check to see if there is a right node
            #if there is a right node 
               . compare the value the right node with the value
               . make this your current node and repreat the process
    - if lessthan
            * check if there is a left node
             # if there is assign the node as a current node and repeat the process
             # if there is return false

*/
    find(value){
        if(!this.root.value === value){return true}
        var current = this.root;
        while(true){
            if(value === current.value){
                return true
            }
           else if(value < current.value){
                if(current.left!== null){
                    current = current.left
                }
                else{
                    return false;
                }
            }
            else{
                if(current.right!== null){
                    current = current.right
                }
                else{
                    return false;
                }
            }
        }
   
    }



/*        15
        /    \
       9     19
    /   \   /   \
   7    10 16    21
*/

// Breadth -First Search
/* 
    - create a queue and an array to hold the visited nodes
    - place the root to the queue
    -- loop until there is nothing in the queue
    - dequeu the root and check if there is a left node
            * if there is a left node push to the queue
    - check if there is a right node
            * if there is a right node push to the queue
        push the root to the visitedNodes array
*/
    bfs(){
        var queue = [];
        var visitedNodes = []
     queue.push(this.root);
     while(queue.length){
        var visited = queue.shift();
        if(visited.left) queue.push(visited.left);
        if(visited.right) queue.push(visited.right);
        visitedNodes.push(visited.value);
     }
return visitedNodes;
    }

// Depth first Search
/* 
1. preOrder
 - create an array to store the node values
 - Start from the root and store the root of BST in a variable called current
 - create a helper function that accepts the node
    * push current to the value array
    * if left proprety is not null call the helper function by passing leftnode as a node
    * If right property is not null call the helper function by passing rightnode a a node
- Invoke the helper function
- return the array 
 - 
 - push element to th e
 */
  preOrder(){
      var current = this.root;
      var arr = [];
      function helper(node){
        arr.push(node.value);
        if(node.left)helper(node.left);
        if(node.right)helper(node.right);
      }
      helper(current);
      return arr ;
  }
 
 /* 
2. postOrder
     - create an array to store the visited nodes
     - start from the root and store the root on a variable current
     - create a helper function to transvere the BST that accepts a node
        * if node has a left node call the helper function and pass the left node
        * if node has a right node call the helper function and pass the right node
        * push the node to array
     - invoke the helper function 
     - return array
*/
post(){
    var current = this.root;
    var arr = []
    function helper(node){
        if(node.left)helper(node.left);
        if(node.right)helper(node.right);
        arr.push(node.value)
    }
    helper(current)
    return arr;
}

/*
3. InOrder

    - start from the root
    - create a variable to hold the visited nodes
    - create a helper function that accepts the node
     

    - invoke the helper function
    - return the array
*/
inOrder(){
    var current = this.root;
    var arr = [];
    function helper(node){
        if(node.left)helper(node.left);
        arr.push(node.value);
        if(node.right)helper(node.right);
    }
    helper(current)
    return arr;

}


}

var bn = new BST()
bn.insert(15)
bn.insert(9)
bn.insert(19)
bn.insert(7)
bn.insert(10)
bn.insert(16)




// BFS vs DFS

/* 
    Time complexity is O(1) we visit each node only once

    Space though depends on the stractrure of the tree: for a wide tree 
    BFS tree holds a  lot of space and if its a deep long tree DFS end up taking 
    a lot of space


*/