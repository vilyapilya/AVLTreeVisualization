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
    this.helperInsert = this.helperInsert.bind(this);
    this.array = []
    this.startX = 700;
    this.startY = 60;
    this.deltaX = 30;
    this.deltaY = 60;
    this.numSteps = 10;
    this.stepCount = 0;
  }

  insert(value){
    if(this.root === null){
      this.root = new Node(value, null, null, null, this.startX, this.startY, 0);
      this.array.push(this.root);
    }else{
      var result = this.helperInsert(value, this.root);
      var node = result[0];
      var enteredNode = result[1];
      if(node === 0){
        return 0;
      }
      var unBalancedNode = this.findUnbalanced(node);
    }
    if(unBalancedNode){
      debugger
      this.rotate(unBalancedNode, enteredNode.value);
    }
    this.height(this.root);
    // this.updateNewP(this.root);
    this.stepCount = 0;
  }

  findUnbalanced(node){
    var currentPar = node.parent;
    while(currentPar){
      debugger
      if(Math.abs(this.isBalanced(currentPar)) > 1){
        return currentPar;
      }
      currentPar = currentPar.parent;
    }
  }

  rotate(node, value){
    //left-left case
    if(node.parent && this.isBalanced(this.root) > 1 && value < node.value){
      this.rightRotate(node.parent);
      // leftLeftCase(this.array);
    }//right-right case
    else if(node.parent && this.isBalanced(this.root) < -1 && value > node.value){
      this.leftRotate(node.parent);
      // rightRightCase(this.array);
    }//left-right case
    else if(node.parent && this.isBalanced(this.root) > 1 && value > node.value){
      this.leftRotate(node);
      this.rightRotate(node.parent.parent);
      // leftRightCase(this.array);
    }//right-left case
    else if(node.parent && this.isBalanced(this.root) < -1 && value < node.value){
      this.rightRotate(node);
      this.leftRotate(node.parent.parent);
      // leftLeftCase(this.array);
    }
  }

  height(node){
    if(!node){
      return 0;
    }else{
      var lHeight = this.height(node.left);
      var rHeight = this.height(node.right);

      if(lHeight > rHeight){
        node.h = lHeight + 1;
        return (lHeight + 1);
      }else {
        node.h = rHeight + 1;
        return (rHeight + 1);
      }
    }
  }

  helperInsert(value, node){
    if(node === null){
      return 0;
    }
    if(value === node.value){
      console.log("node esidkj");
      return 0;
    }else if(value > node.value){
      if(node.right === null){
        node.right = new Node(value, node, null, null, node.newP.x + this.deltaX, node.newP.y + this.deltaY, null);
        return [node, node.right];
      }else {
        return this.helperInsert(value, node.right);
      }
    }
    else {
      if(node.left === null){
        node.left = new Node(value, node, null, null, node.newP.x - this.deltaX, node.newP.y + this.deltaY, null);
        return [node, node.left];
      }else {
        return this.helperInsert(value, node.left);
      }
    }

  }

  updateNewP(node){
    if(!node){
      return 0;
    }
    if(!node.parent){
      node.newP.x = this.startX;
      node.newP.y = this.startY;
    }else {
      var offset = this.deltaX + (node.h - 1) *(node.h - 1)* (this.deltaX+1);
      if(node.parent.right === node){
        node.newP.x = node.parent.newP.x + offset;
      }else {
        node.newP.x = node.parent.newP.x - offset;
      }
      node.newP.y = node.parent.newP.y + this.deltaY;
    }
    // if(node.newP.x !== node.oldP.x){
    //   node.stepX = 20;
    // }
    // node.stepY = 0;
    // node.stepX = (node.newP.x - node.oldP.x) / this.numSteps;
    // node.stepY = (node.newP.y - node.oldP.y) / this.numSteps;
    this.updateNewP(node.left);
    this.updateNewP(node.right);
  }

  isBalanced(node){
    var leftLen = 0;
    var rightLen = 0;
    if(node.left){
      leftLen = this.height(node.left);
    }
    if(node.right){
      rightLen = this.height(node.right);
    }
    return (leftLen - rightLen);
  }

  rightRotate(node){
    var formerLeft = node.left;
    if(node.parent && node.parent.left && node.parent.left === node){
      node.parent.left = formerLeft;
    }else if(node.parent){
      node.parent.right = formerLeft;
    }
    formerLeft.parent = node.parent;
    node.parent = node.left;
    node.left = null;
    formerLeft.right = node;
    if(node === this.root){
      this.root = formerLeft;
    }
    return formerLeft;
  }

  leftRotate(node){
    var formerRight = node.right;
    formerRight.parent = node.parent;
    if(node.parent && node.parent.left && node.parent.left === node){
      node.parent.left = formerRight;
    }else if(node.parent){
      node.parent.right = formerRight;
    }
    node.parent = node.right;
    node.right = null;
    formerRight.left = node;
    if(node === this.root){
      this.root = formerRight;
    }
    return formerRight;
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
    this.animateNode(node.righ);
  }

  animateAllNodes() {
    this.animateNode(this.root);
    if(this.stepCount < this.numSteps+2){
      this.stepCount += 1;
    }

  }

}

export default Tree;
