/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = drawTree;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tree__ = __webpack_require__(2);


function drawTree(tree) {
  if (!tree) {
    return 0;
  }
  const canvasEl = document.getElementsByTagName("canvas")[0];
  const ctx = canvasEl.getContext("2d");
  canvasEl.width = 1400;
  canvasEl.height = 800;
  ctx.fillStyle = "#80a1ad";

  ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);
  ctx.stroke();
  drawNode(tree.root, tree);
  tree.animateAllNodes(tree);
  if (tree.stepCount > tree.numSteps) {
    return 0;
  } else {
    return 1;
  }
}

function drawNode(node, tree) {
  if (!node) {
    return 0;
  }
  const canvasEl = document.getElementsByTagName("canvas")[0];
  const ctx = canvasEl.getContext("2d");

  ctx.beginPath();
  //ctx.arc(node.oldP.x, node.oldP.y, 20, 0, 2*Math.PI);
  ctx.arc(node.newP.x, node.newP.y, 20, 0, 2 * Math.PI);
  ctx.fillStyle = "#c19cd3";
  ctx.fill();
  ctx.fillStyle = "white";
  ctx.font = "25px Arial";
  ctx.textAlign = "center";
  //ctx.fillText(node.value, node.oldP.x, node.oldP.y);
  ctx.fillText(node.value, node.newP.x, node.newP.y);
  //ctx.fillText(tree.stepCount , node.oldP.x, node.oldP.y+20);


  if (node.parent) {
    ctx.moveTo(node.newP.x, node.newP.y);
    ctx.lineTo(node.parent.newP.x, node.parent.newP.y);
    ctx.strokeStyle = "#c19cd3";
  }

  ctx.stroke();
  drawNode(node.left, tree);
  drawNode(node.right, tree);

  //tree.animateNode(node);
}

// export function drawNode(array){
//   const canvasEl = document.getElementsByTagName("canvas")[0];
//   const ctx = canvasEl.getContext("2d");
//   canvasEl.width = 1400;
//   canvasEl.height = 800;
//   ctx.fillStyle = "#80a1ad";
//   ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);
//
//   for (var i = 0; i < array.length; i++) {
//     var x = array[i].x;
//     var y = array[i].y;
//     var h = array[i].h
// //stroke to the right
//     ctx.moveTo(x, y);
//     ctx.lineTo(x + 100, y + 60);
//     ctx.strokeStyle = 'white';
//     ctx.stroke();
// //stroke to the left
//     ctx.moveTo(x, y);
//     ctx.lineTo(x - 100, y + 60);
//     ctx.strokeStyle = 'white';
//     ctx.stroke();
//
//     ctx.beginPath();
//     ctx.arc(x, y, 40, 0, 2*Math.PI);
//     ctx.fillStyle = "#c19cd3";
//     ctx.fill();
//     ctx.fillStyle="white";
//     ctx.font="40px Arial";
//     ctx.textAlign = "center";
//     ctx.fillText(array[i].value, x, y);
//   }
// }
//
// export function leftLeftCase(array){
//   setInterval(function(){
//     const canvasEl = document.getElementsByTagName("canvas")[0];
//     const ctx = canvasEl.getContext("2d");
//       drawNode(array);
//   }, 1000)
//   moveDownRight(array[array.length-3], 80);
//   moveUpRight(array[array.length-2], 80);
//   moveUpRight(array[array.length-1], 80);
// }
//
// export function rightRightCase(array){
//   setInterval(function(){
//     const canvasEl = document.getElementsByTagName("canvas")[0];
//     const ctx = canvasEl.getContext("2d");
//       drawNode(array);
//   }, 1000)
//   moveDownLeft(array[array.length-3]);
//   moveUpLeft(array[array.length-2]);
//   moveUpLeft(array[array.length-1]);
// }
// //
// export function leftRightCase(array){
//   setInterval(function(){
//     const canvasEl = document.getElementsByTagName("canvas")[0];
//     const ctx = canvasEl.getContext("2d");
//       drawNode(array);
//   }, 1000)
//   moveUpLeft(array[array.length-1]);
//   moveDownLeft(array[array.length-2]);
//   leftLeftCase(array);
// }
//
// export function rightLeftCase(array){
//   setInterval(function(){
//     const canvasEl = document.getElementsByTagName("canvas")[0];
//     const ctx = canvasEl.getContext("2d");
//
//   }, 1000)
//   moveUpRight(array[array.length-1]);
//   moveDownRight(array[array.length-2]);
//   rightRightCase(array);
// }

// function moveDownRight(element, aggr){
//   element.x += 150;
//   element.y += 60;
// }
//
// function moveDownLeft(element, aggr){
//   element.x -= 150;
//   element.y += 60;
// }
//
// function moveUpRight(element, aggr){
//   element.x += 150;
//   element.y -= 60;
// }
// function moveUpLeft(element, aggr){
//   element.x -= 150;
//   element.y -= 60;
// }

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__display__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tree__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node__ = __webpack_require__(3);




document.addEventListener("DOMContentLoaded", function () {
  var input = document.getElementsByTagName("input")[0];
  var usersInput = "";
  const tree = new __WEBPACK_IMPORTED_MODULE_1__tree__["a" /* default */]();
  input.onchange = function () {
    usersInput = parseInt(input.value, 10);
    if (isNaN(usersInput)) {
      alert("you have to type a number!");
      input.value = "";
      usersInput = "";
    } else {
      tree.insert(usersInput);
      input.value = "";
      input.style.display = "none";
      console.log(tree);
    }
    // console.log(tree.isBalanced(tree.root));
    // drawNode(tree);
    // if(tree.height(tree.root) >= 3){
    //   animateLeftRotate(tree.array[0], tree.array[1], tree.array[2]);
    // }
  };
  var gcount = 0;
  setInterval(function () {
    //console.log("drawing");
    //console.log(gcount+=1);
    var animationRunning = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__display__["a" /* drawTree */])(tree);
    if (animationRunning === 0) {
      input.style.display = "block";
      input.focus();
    }
  }, 30);

  // ctx.fillStyle = "black";
  // canvasEl.width = 1400;
  // canvasEl.height = 800;
  // ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);
  //
  // var x = 600;
  // var y = 200;
  //
  // setInterval(function(){
  //   x -= 1;
  //   y += 1;
  //   //repaints canvas
  //   ctx.fillStyle = "black";
  //   ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);
  //
  //   ctx.beginPath();
  //   ctx.moveTo(700,50);
  //   ctx.lineTo(600, 200);
  //   ctx.stroke();
  //   ctx.lineWidth = 3;
  //   ctx.strokeStyle = 'red';
  //   ctx.stroke();
  //
  //   ctx.beginPath();
  //   ctx.moveTo(700, 50);
  //   ctx.lineTo(800, 200);
  //   ctx.stroke();
  //   ctx.lineWidth = 3;
  //   ctx.strokeStyle = 'red';
  //   ctx.stroke();
  //
  //   ctx.beginPath();
  //   ctx.arc(700,50,40,0,2*Math.PI);
  //   ctx.fillStyle = "red";
  //   ctx.fill();
  //
  //   ctx.beginPath();
  //   ctx.arc(800,200,40,0,2*Math.PI);
  //   ctx.fillStyle = "red";
  //   ctx.fill();
  //
  //   ctx.font = "30px Arial";
  //   ctx.fillText("Hello World",10, 20);
  //
  //   //moves the left child down
  //   ctx.beginPath();
  //   ctx.arc(x,y,40,0,2*Math.PI);
  //   ctx.fillStyle = "green";
  //   ctx.fill();
  //
  //
  // }, 30)
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__display__ = __webpack_require__(0);




class Tree {
  constructor() {
    this.root = null;
    this.helperInsert = this.helperInsert.bind(this);
    this.array = [];
    this.startX = 700;
    this.startY = 60;
    this.deltaX = 30;
    this.deltaY = 60;
    this.numSteps = 10;
    this.stepCount = 0;
  }

  insert(value) {
    if (this.root === null) {
      this.root = new __WEBPACK_IMPORTED_MODULE_0__node__["a" /* default */](value, null, null, null, this.startX, this.startY, 0);
      this.array.push(this.root);
    } else {
      var result = this.helperInsert(value, this.root);
      var node = result[0];
      var enteredNode = result[1];
      if (node === 0) {
        return 0;
      }
      var unBalancedNode = this.findUnbalanced(node);
    }
    if (unBalancedNode) {
      debugger;
      this.rotate(unBalancedNode, enteredNode.value);
    }
    this.height(this.root);
    // this.updateNewP(this.root);
    this.stepCount = 0;
  }

  findUnbalanced(node) {
    var currentPar = node.parent;
    while (currentPar) {
      debugger;
      if (Math.abs(this.isBalanced(currentPar)) > 1) {
        return currentPar;
      }
      currentPar = currentPar.parent;
    }
  }

  rotate(node, value) {
    //left-left case
    if (node.parent && this.isBalanced(this.root) > 1 && value < node.value) {
      this.rightRotate(node.parent);
      // leftLeftCase(this.array);
    } //right-right case
    else if (node.parent && this.isBalanced(this.root) < -1 && value > node.value) {
        this.leftRotate(node.parent);
        // rightRightCase(this.array);
      } //left-right case
      else if (node.parent && this.isBalanced(this.root) > 1 && value > node.value) {
          this.leftRotate(node);
          this.rightRotate(node.parent.parent);
          // leftRightCase(this.array);
        } //right-left case
        else if (node.parent && this.isBalanced(this.root) < -1 && value < node.value) {
            this.rightRotate(node);
            this.leftRotate(node.parent.parent);
            // leftLeftCase(this.array);
          }
  }

  height(node) {
    if (!node) {
      return 0;
    } else {
      var lHeight = this.height(node.left);
      var rHeight = this.height(node.right);

      if (lHeight > rHeight) {
        node.h = lHeight + 1;
        return lHeight + 1;
      } else {
        node.h = rHeight + 1;
        return rHeight + 1;
      }
    }
  }

  helperInsert(value, node) {
    if (node === null) {
      return 0;
    }
    if (value === node.value) {
      console.log("node esidkj");
      return 0;
    } else if (value > node.value) {
      if (node.right === null) {
        node.right = new __WEBPACK_IMPORTED_MODULE_0__node__["a" /* default */](value, node, null, null, node.newP.x + this.deltaX, node.newP.y + this.deltaY, null);
        return [node, node.right];
      } else {
        return this.helperInsert(value, node.right);
      }
    } else {
      if (node.left === null) {
        node.left = new __WEBPACK_IMPORTED_MODULE_0__node__["a" /* default */](value, node, null, null, node.newP.x - this.deltaX, node.newP.y + this.deltaY, null);
        return [node, node.left];
      } else {
        return this.helperInsert(value, node.left);
      }
    }
  }

  updateNewP(node) {
    if (!node) {
      return 0;
    }
    if (!node.parent) {
      node.newP.x = this.startX;
      node.newP.y = this.startY;
    } else {
      var offset = this.deltaX + (node.h - 1) * (node.h - 1) * (this.deltaX + 1);
      if (node.parent.right === node) {
        node.newP.x = node.parent.newP.x + offset;
      } else {
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

  isBalanced(node) {
    var leftLen = 0;
    var rightLen = 0;
    if (node.left) {
      leftLen = this.height(node.left);
    }
    if (node.right) {
      rightLen = this.height(node.right);
    }
    return leftLen - rightLen;
  }

  rightRotate(node) {
    var formerLeft = node.left;
    if (node.parent && node.parent.left && node.parent.left === node) {
      node.parent.left = formerLeft;
    } else if (node.parent) {
      node.parent.right = formerLeft;
    }
    formerLeft.parent = node.parent;
    node.parent = node.left;
    node.left = null;
    formerLeft.right = node;
    if (node === this.root) {
      this.root = formerLeft;
    }
    return formerLeft;
  }

  leftRotate(node) {
    var formerRight = node.right;
    formerRight.parent = node.parent;
    if (node.parent && node.parent.left && node.parent.left === node) {
      node.parent.left = formerRight;
    } else if (node.parent) {
      node.parent.right = formerRight;
    }
    node.parent = node.right;
    node.right = null;
    formerRight.left = node;
    if (node === this.root) {
      this.root = formerRight;
    }
    return formerRight;
  }

  animateNode(node) {
    if (!node) {
      return 0;
    }

    if (this.stepCount < this.numSteps) {
      node.oldP.x += node.stepX;
      node.oldP.y += node.stepY;
    } else if (this.stepCount === this.numSteps) {
      node.oldP.x = node.newP.x;
      node.oldP.y = node.newP.y;
    }

    this.animateNode(node.left);
    this.animateNode(node.righ);
  }

  animateAllNodes() {
    this.animateNode(this.root);
    if (this.stepCount < this.numSteps + 2) {
      this.stepCount += 1;
    }
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Tree);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point__ = __webpack_require__(4);

class Node {
  constructor(value, parent, left, right, x, y, h) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.parent = parent;
    this.oldP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* default */](x, y);
    this.newP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* default */](x, y);
    this.stepX = 0;
    this.stepY = 0;
    this.h = h;
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Node);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Point);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map