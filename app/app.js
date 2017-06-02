import {drawTree, animateLeftRotate} from './display';
import Tree from './tree';
import Node from './node';

document.addEventListener("DOMContentLoaded", function(){
  var input = document.getElementsByTagName("input")[0];
  var usersInput = "";
  const tree = new Tree();
  var animationDisable = false;

  input.onchange = function(){
    usersInput = parseInt(input.value, 10);
    if(isNaN(usersInput)){
      alert("you have to type a number!");
      input.value = "";
      usersInput= "";
    }else {
      animationDisable = true;
      tree.insert(usersInput);
      animationDisable = false;
      input.value = "";
      input.style.display = "none";
      console.log(tree);
    }
  }
  
  var gcount = 0;
  setInterval(function(){
    if(!animationDisable) {
      var animationInProcess = drawTree(tree);
      if(!animationInProcess){
        input.style.display = "block";
        input.focus();
      }
    }
  }, 20)
});
