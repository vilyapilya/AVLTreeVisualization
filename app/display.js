import Tree from './tree';

export function drawTree(tree){
  if(!tree){
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
  if(tree.stepCount > tree.numSteps){
    return 0;
  }else{
    return 1;
  }
}

function drawNode(node, tree){
  if(!node){
    return 0;
  }

  const canvasEl = document.getElementsByTagName("canvas")[0];
  const ctx = canvasEl.getContext("2d");

  ctx.beginPath();
  if(node.parent){
    ctx.strokeStyle = "#c19cd3";
    ctx.lineWidth="3";
    //ctx.moveTo(node.newP.x, node.newP.y);
    //ctx.lineTo(node.parent.newP.x, node.parent.newP.y);
    ctx.moveTo(node.oldP.x, node.oldP.y);
    ctx.lineTo(node.parent.oldP.x, node.parent.oldP.y+6);
  }
  ctx.stroke();

  ctx.beginPath();

  ctx.lineWidth="2";
  // ctx.strokeStyle = "#c19cd3";
  ctx.strokeStyle = "white";
  ctx.arc(node.oldP.x, node.oldP.y, 20, 0, 2*Math.PI);
  //ctx.arc(node.newP.x, node.newP.y, 20, 0, 2*Math.PI);
  ctx.fillStyle = "#c19cd3";

  ctx.fill();

  ctx.fillStyle="white";
  ctx.font="20px Arial";
  ctx.textAlign = "center";
  ctx.fillText(node.value, node.oldP.x, node.oldP.y+4);
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
