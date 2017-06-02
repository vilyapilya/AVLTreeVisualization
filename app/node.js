import Point from './point';

class Node{
  constructor(value, parent){
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
    this.oldP = new Point(50, 50);
    this.newP = new Point(50, 50);
    this.stepX = 0;
    this.stepY = 0;
    this.h = 1; // default hight is 1 since added to the bottom
  }
}

export default Node;
