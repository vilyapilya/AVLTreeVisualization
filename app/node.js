import Point from './point';
class Node{
  constructor(value, parent, left, right, x, y, h){
    this.value = value;
    this.left = left;
    this.right = right;
    this.parent = parent;
    this.oldP = new Point(x, y);
    this.newP = new Point(x, y);
    this.stepX = 0;
    this.stepY = 0;
    this.h = h;
  }

}

export default Node;
