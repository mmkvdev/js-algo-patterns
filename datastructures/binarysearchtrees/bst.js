// lookup, insertion and deletion of items in a BST will take O(logn) time complexity almost cancelling half of the tree traversal

// better than the linear time required to find the items by key in an unsorted array

// slower than the corresponding operations on a hash table

class Node {
    constructor (data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor () {
        this.root = null;
    }

    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function (currNode) {
                if (data < currNode.data) {
                    if (!currNode.left) {
                        currNode.left = new Node(data);
                        return;
                    } else if (!!currNode.left) {
                        return searchTree(currNode.left);
                    }
                } else if (data > currNode.data) {
                    if (!currNode.right) {
                        currNode.right = new Node(data);
                        return;
                    } else if (!!currNode.right) {
                        return searchTree(currNode.right);
                    }
                } else {
                    return null;
                }
            }

            return searchTree(node);
        }
    }

    findMin() {
        let current = this.root;
        while(!!current.left) {
            current = current.left;
        }

        return current.data;
    }

    findMax () {
        let current = this.root;
        while(!!current.right) {
            current = current.right;
        }

        return current.data;
    }

    find(data) {
      let current = this.root;
      while (current) {
        if (data === current.data) {
          return current;
        } else if (data < current.data) {
          current = current.left;
        } else {
          current = current.right;
        }
      }
      return false;
    }

    isPresent (data) {
        let current = this.root;
        while(current) {
            if (current.data === data) {
                return true;
            } else if(current.data < data) {
                current = current.right;
            } else {
                current = current.left;
            }
        }

        return false;
    }
}

const bst = new BST();

const a = [7,1,4,8];
bst.add(a[0]);
bst.add(a[1]);
bst.add(a[3]);
bst.add(17);

console.log(bst.findMin());
console.log(bst.findMax());

console.log(bst.find(17));
console.log(bst.isPresent(18));
