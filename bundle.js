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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
  tree.animateAllNodes();
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
  if (node.parent) {
    ctx.strokeStyle = "#c19cd3";
    ctx.lineWidth = "3";
    //ctx.moveTo(node.newP.x, node.newP.y);
    //ctx.lineTo(node.parent.newP.x, node.parent.newP.y);
    ctx.moveTo(node.oldP.x, node.oldP.y);
    ctx.lineTo(node.parent.oldP.x, node.parent.oldP.y + 6);
  }
  ctx.stroke();

  ctx.beginPath();

  ctx.lineWidth = "2";
  // ctx.strokeStyle = "#c19cd3";
  ctx.strokeStyle = "white";
  ctx.arc(node.oldP.x, node.oldP.y, 20, 0, 2 * Math.PI);
  //ctx.arc(node.newP.x, node.newP.y, 20, 0, 2*Math.PI);

  ctx.fillStyle = "#c19cd3";

  ctx.fill();

  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.textAlign = "center";
  ctx.fillText(node.value, node.oldP.x, node.oldP.y + 4);
  //ctx.fillText(node.value, node.newP.x, node.newP.y);

  //ctx.font="18px Arial";
  //ctx.fillText(node.h , node.oldP.x, node.oldP.y+15);
  //ctx.fillText(node.h , node.newP.x, node.newP.y+15);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__point__ = __webpack_require__(3);


class Node {
  constructor(value, parent) {
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
    this.oldP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* default */](50, 50);
    this.newP = new __WEBPACK_IMPORTED_MODULE_0__point__["a" /* default */](50, 50);
    this.stepX = 0;
    this.stepY = 0;
    this.h = 1; // default hight is 1 since added to the bottom
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Node);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__display__ = __webpack_require__(0);




class Tree {
  constructor() {
    this.root = null;
    //this.helperInsert = this.helperInsert.bind(this);
    this.insertWithBalancing = this.insertWithBalancing.bind(this);
    this.insert = this.insert.bind(this);
    this.animateAllNodes = this.animateAllNodes.bind(this);
    this.animateNode = this.animateNode.bind(this);
    this.array = [];
    this.startX = 700;
    this.startY = 60;
    this.deltaX = 30;
    this.deltaY = 60;
    this.numSteps = 100;
    this.stepCount = 0;
  }

  getHeight(node) {
    if (!node) {
      return 0;
    }
    return node.h;
  }

  calculateHeight(node) {
    if (!node) {
      return 0;
    }
    var b = this.balanceFactor(node);
    var h = 0;
    if (b >= 0) {
      // left subtree is higher ot the same as right one.
      h = this.getHeight(node.left) + 1;
    } else {
      h = this.getHeight(node.right) + 1;
    }
    return h;
  }

  balanceFactor(node) {
    if (!node) {
      return 0;
    }
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  insert(value) {
    this.root = this.insertWithBalancing(this.root, null, value);
    this.updateNewPoints(this.root);
    this.stepCount = 0;
  }

  insertWithBalancing(node, parent, value) {
    if (!node) {
      var newnode = new __WEBPACK_IMPORTED_MODULE_0__node__["a" /* default */](value, null);
      newnode.parent = parent;
      return newnode;
    }

    if (value === node.value) {
      // duplicates are not allowed.
      dupWarning.style.display = "block";
      return node;
    } else if (value < node.value) {
      dupWarning.style.display = "none";
      node.left = this.insertWithBalancing(node.left, node, value);
      node.left.parent = node;
      node.h = this.calculateHeight(node);
    } else {
      // value > node.value
      dupWarning.style.display = "none";
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
    if (!node) {
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
    if (n2) {
      n2.parent = node;
    }

    node.h = this.calculateHeight(node);
    n1.h = this.calculateHeight(n1);
    return n1;
  }

  rotateRight(node) {
    if (!node) {
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
    if (n2) {
      n2.parent = node;
    }

    node.h = this.calculateHeight(node);
    n1.h = this.calculateHeight(n1);
    return n1;
  }

  updateNewPoints(node) {
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

    node.stepX = (node.newP.x - node.oldP.x) / this.numSteps;
    node.stepY = (node.newP.y - node.oldP.y) / this.numSteps;

    this.updateNewPoints(node.left);
    this.updateNewPoints(node.right);
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
    this.animateNode(node.right);
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
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Point);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__display__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tree__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node__ = __webpack_require__(1);




document.addEventListener("DOMContentLoaded", function () {
  var input = document.getElementsByTagName("input")[0];
  numbersWarning.style.display = "none";
  dupWarning.style.display = "none";
  var usersInput = "";
  const tree = new __WEBPACK_IMPORTED_MODULE_1__tree__["a" /* default */]();
  var animationDisable = false;

  input.onchange = function () {
    usersInput = parseInt(input.value, 10);
    if (isNaN(usersInput)) {
      numbersWarning.style.display = "block";
      input.value = "";
      usersInput = "";
    } else {
      numbersWarning.style.display = "none";
      animationDisable = true;
      tree.insert(usersInput);
      animationDisable = false;
      input.value = "";
      input.style.display = "none";
    }
  };

  var gcount = 0;
  setInterval(function () {
    if (!animationDisable) {
      var animationInProcess = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__display__["a" /* drawTree */])(tree);
      if (!animationInProcess) {
        input.style.display = "block";
        input.focus();
      }
    }
  }, 20);
});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map