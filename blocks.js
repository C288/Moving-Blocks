var brush = document.getElementById("c1").getContext("2d");
var size = 20;
var speed = 2;
var X = [0, 180, 360];
var Y = [90, 120, 230];
var r = Math.ceil(Math.random() * (280-10) + 10);

drawBackground();
drawRects();
drawGrass();

setInterval(drawFrame, 20);

function drawFrame(){
  // update the data of squares
  for (var i = 0; i < X.length; ++i) {
    X[i] -= speed;
    if(X[i] <= 0 - r){
      X[i] = 400;
    }
  }
  drawBackground();
  drawRects();
  drawGrass();
}

function drawGrass(){
  brush.fillStyle = "#00FF00";
  brush.fillRect(0, 300, 400, 100);
}

function drawRects(){// three squares
  for(var i = 0; i < X.length; ++i){
    drawRect(X[i], Y[i]);
  }
}

function drawRect(x, y){// a single square
  brush.fillStyle = "#FF0000";
  brush.fillRect(x, y, size, 700);
}

function drawBackground(){
  brush.fillStyle = "#33ECFF";
  brush.fillRect(0, 0, 400, 400);
}