/* class Node {
  constructor (data, next) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor () {
    this.head = null;
    this.size = 0;
  }

  // insert at the start
  insertAtStart (data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // insert at the last
  insertAtEnd (data) {
    let node = new Node(data);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
       current = this.head;
       while(current.next) {
        current = current.next;
       }
       current.next = node;
    }
    this.size++;
  }

  // insert at an index
  insertAtIndex(data, pos) {
    if (pos < 1 || pos >  this.size) {
      throw Error('Index out of bounds exception');
      return;
    }

    if (pos === 0) {
      this.head = new Node(data, this.head);
      return ;
    }

    const node = new Node(data);
    let current = this.head;
    let previous, count = 0;

    while (count < pos) {
      previous = current;
      count++;
      current = current.next;
    }
  }
}*/












// O(1) O(n)
/* const countWords = (strSource, charFind) => {
   if (!strSource) {
       return null;
   }
   
   let i = 0, j = 1, res = 0;
   
   while (i < j && j < strSource.length) {
 
       if (strSource[j] === ' ' || j === strSource.length - 1) {
           if (strSource[i].toLowerCase() === strSource[j-1].toLowerCase()) {
               res++;
           } else {
               i = j + 1;
               j++;
           }
       }
       j++;
   }
   
   return res;
}

console.log(countWords('Strings are the things that sing'));
console.log(countWords('Strings are the things that sings'));*/