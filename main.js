//設定畫布環境
 var bgImg = document.createElement("img");
 bgImg.src="images/map.png"
 var canvas =document.getElementById("game-canvas");
var ctx =canvas.getContext("2d");

//迪迪
var enemy ={
  x:96,
  y:448,
}
function draw(){
   ctx.drawImage(bgImg,0,0)
}
setTimeout(draw,1000);
