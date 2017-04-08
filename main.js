//設定畫布環境
 var bgImg = document.createElement("img");
 bgImg.src="images/map.png"
 var canvas =document.getElementByID("game-canvas");
var ctx =canvas.getContext("2d");


function draw(){
   ctx.drawImage(bgimg,0,0)
}
draw();
