import {drawTree, animateLeftRotate} from './display';
import Tree from './tree';
import Node from './node';

document.addEventListener("DOMContentLoaded", function(){
  var input = document.getElementsByTagName("input")[0];
  var usersInput = "";
  const tree = new Tree();
  input.onchange = function(){
    usersInput = parseInt(input.value, 10);
    if(isNaN(usersInput)){
      alert("you have to type a number!");
      input.value = "";
      usersInput= "";
    }else {
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
  }
  var gcount = 0;
  setInterval(function(){
    //console.log("drawing");
    //console.log(gcount+=1);
    var animationRunning = drawTree(tree);
    if(animationRunning === 0){
      input.style.display = "block";
      input.focus();
    }
  }, 30)

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
