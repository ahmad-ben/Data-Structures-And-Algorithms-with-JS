// QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(data) {
    var node = new Node(data);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
};

class Stack {
  constructor() {
    this.firstQueue = new Queue();
    this.secondQueue = new Queue(); 
  };

  push(val) {
    if(this.firstQueue.size === 0){
      this.firstQueue.enqueue(val);
      this.secondQueue.enqueue(val);
      return this;
    }
    this.firstQueue.enqueue(val);

    let currentNode = this.firstQueue.first;
    let arrOfNodes = [];
    while(currentNode){
      arrOfNodes.push(currentNode.value);
      currentNode = currentNode.next;
    };

    this.secondQueue = new Queue;
    for (let i = arrOfNodes.length - 1; i >= 0 ; i--) 
      this.secondQueue.enqueue(arrOfNodes[i])

   return this;
  };

  pop() {
    if(this.firstQueue.size === 0) return null;
    const removedNode = this.secondQueue.first;

    if(this.firstQueue.size === 1) 
      this.firstQueue = this.secondQueue = new Queue();
    else{
      this.secondQueue.dequeue();

      let currentNode = this.secondQueue.first;
      let arrOfNodes = [];
      while(currentNode){
        arrOfNodes.push(currentNode.value);
        currentNode = currentNode.next;
      };

      this.firstQueue = new Queue;
      for (let i = arrOfNodes.length - 1; i >= 0 ; i--) 
        this.firstQueue.enqueue(arrOfNodes[i]);
    };

    return removedNode.value;
  }
}

const stack = new Stack();

stack.push(10).push(20).push(30);
console.log(stack.pop()); // 30
console.log(stack.pop()); // 20
console.log(stack.pop()); // 10
console.log(stack.pop()); // null
stack.push(30).push(40).push(50)
console.log(stack.pop()); // 50
stack.push(60)
console.log(stack.pop()); // 60




































