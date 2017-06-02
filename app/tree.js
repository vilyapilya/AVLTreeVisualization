import Node from './node';
import Point from './point';
import {drawNode,
  leftLeftCase,
  leftRightCase,
  rightRightCase,
  rightLeftCase
} from './display';

class Tree{
  constructor(){
    this.root = null;
    //this.helperInsert = this.helperInsert.bind(this);
    this.insertWithBalancing = this.insertWithBalancing.bind(this);
    this.insert = this.insert.bind(this);
    this.animateAllNodes = this.animateAllNodes.bind(this);
    this.animateNode = this.animateNode.bind(this);
    this.array = []
    this.startX = 700;
    this.startY = 60;
    this.deltaX = 30;
    this.deltaY = 60;
    this.numSteps = 100;
    this.stepCount = 0;
  }

  getHeight(node) {
    if(!node){
      return 0;
    }
    return node.h;
  }

  calculateHeight(node) {
    if(!node){
      return 0;
    }
    var b = this.balanceFactor(node);
    var h = 0;
    if(b >= 0) {  // left subtree is higher ot the same as right one.
      h = this.getHeight(node.left) + 1;
    } else {
      h = this.getHeight(node.right) + 1;
    }
    return h;
  }

  balanceFactor(node) {
    if(!node){
      return 0;
    }
    return (this.getHeight(node.left) - this.getHeight(node.right));
  }

  insert(value) {
    this.root = this.insertWithBalancing(this.root, null, value);
    this.updateNewPoints(this.root);
    this.stepCount = 0;
  }

  insertWithBalancing(node, parent, value) {
    if(!node) {
      var newnode = new Node(value, null);
      newnode.parent = parent;
      return newnode;
    }

    if(value === node.value) {
      // duplicates are not allowed.
      return node;
    } else if(value < node.value) {
      node.left = this.insertWithBalancing(node.left, node, value);
      node.left.parent = node;
      node.h = this.calculateHeight(node);
    } else {  // value > node.value
      node.right = this.insertWithBalancing(node.right, node, value);
      node.right.parent = node;
      node.h = this.calculateHeight(node);
    }

    return this.rotateIfUnbalanced(node, value);
    //return node;
  }

  rotateIfUnbalanced(node, inserted_val) {
    var b = this.balanceFactor(node);

    // Left Left
    if (b > 1 && inserted_val < node.left.value) {
      return this.rotateRight(node);
    }
    // Left Right
    if (b > 1 && inserted_val > node.left.value) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }
    // Right Right
    if (b < -1 && inserted_val > node.right.value) {
      return this.rotateLeft(node);
    }
    // Right Left
    if (b < -1 && inserted_val < node.right.value) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }


  rotateLeft(node) {
    if(!node) {
      return node;
    }
    var n1 = node.right;
    var n2 = n1.left;
/*
    // Update of the rotated subtree parent is done in insertWithBalancing()
    if(node.parent ) {
    	if(node === node.parent.left) {
    		node.parent.left = n1;
      } else {
        node.parent.right = n1;
      }
    }
*/
    n1.left = node;

    n1.parent = node.parent;
    node.parent = n1;

    node.right = n2;
    if(n2) {
      n2.parent = node;
    }

    node.h = this.calculateHeight(node);
    n1.h = this.calculateHeight(n1);
    return n1;
  }

  rotateRight(node) {
    if(!node) {
      return node;
    }
    var n1 = node.left;
    var n2 = n1.right;
/*
    // Update of the rotated subtree parent is done in insertWithBalancing()
    if(node.parent ) {
    	if(node === node.parent.left) {
    		node.parent.left = n1;
      } else {
        node.parent.right = n1;
      }
    }
*/
    n1.right = node;

    n1.parent = node.parent;
    node.parent = n1;

    node.left = n2;
    if(n2) {
      n2.parent = node;
    }

    node.h = this.calculateHeight(node);
    n1.h = this.calculateHeight(n1);
    return n1;
  }


  updateNewPoints(node){
    if(!node){
      return 0;
    }

    if(!node.parent) {
      node.newP.x = this.startX;
      node.newP.y = this.startY;
    } else {
      var offset = this.deltaX + (node.h - 1) *(node.h - 1)* (this.deltaX+1);
      if(node.parent.right === node){
        node.newP.x = node.parent.newP.x + offset;
      }else {
        node.newP.x = node.parent.newP.x - offset;
      }
      node.newP.y = node.parent.newP.y + this.deltaY;
    }

    node.stepX = (node.newP.x - node.oldP.x) / this.numSteps;
    node.stepY = (node.newP.y - node.oldP.y) / this.numSteps;

    this.updateNewPoints(node.left);
    this.updateNewPoints(node.right);
  }


  animateNode(node){
    if(!node) {
      return 0;
    }

    if(this.stepCount < this.numSteps){
      node.oldP.x += node.stepX;
      node.oldP.y += node.stepY;
    }else if(this.stepCount === this.numSteps){
      node.oldP.x = node.newP.x;
      node.oldP.y = node.newP.y;
    }

    this.animateNode(node.left);
    this.animateNode(node.right);
  }

  animateAllNodes() {
    this.animateNode(this.root);
    if(this.stepCount < this.numSteps+2){
      this.stepCount += 1;
    }
  }

}

export default Tree;
