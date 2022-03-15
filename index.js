/*
 * Binary Search Tree Implementation
*/

class Node {
  constructor (data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor () {
    this.root = null;
  }

  add (data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return this;
    } 
    let current = this.root;
    while (true) {
      if (data === current.data) {
        return undefined;
      }
      if (data < current.data) {
        if (current.left === null) {
          current.left = new Node(data);
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = new Node(data);
          return this;
        }
        current = current.right;
      }
    }
  }

  find (data) {
    if (this.root === null) {
      return false;
    }

    let current = this.root, found = false;
    while (current && !found) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) {
      return false;
    }
    return current;
  }

  findMin () {
    if (this.root === null) {
      return 'No Min';
    }

    let current = this.root;
    while (!!current.left) {
      current = current.left;
    }

    return current.data;
  }

  findMax () {
    if (this.root === null) {
      return 'No Max';
    }

    let current = this.root;
    while (!!current.right) {
      current = current.right;
    }

    return current.data;
  }

  preOrder () {
    let data = [];
    function traverse (node) {
      data.push(node.data);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return data;
  }

  postOrder () {
    let data = [];
    function traverse (node) {
       if (node.left) {
         traverse(node.left);
       }

      if (node.right) {
        traverse (node.right);
      }
      data.push(node.data);
    }
    traverse(this.root);
    return data;
  }

  inOrder () {
    let data = [];
    function traverse (node) {
       if (node.left) {
         traverse(node.left);
       }
      data.push(node.data);
      if (node.right) {
        traverse (node.right);
      }
    }
    traverse(this.root);
    return data;
  }
}

const newNode = new BST();
newNode.add(10);
newNode.add(6);
newNode.add(15);
newNode.add(3);
newNode.add(8);
newNode.add(20);

console.log(newNode.inOrder());
console.log(newNode.preOrder());
console.log(newNode.postOrder());