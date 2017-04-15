//設定畫布環境
 var bgImg = document.createElement("img");
 bgImg.src="images/1.png"
 
var enemyImg = document.createElement("img");
 enemyImg.src="images/jason.gif"
 
var button = document.createElement("img");
 button.src="images/tower-btn.png"





var canvas =document.getElementById("game-canvas");
var ctx =canvas.getContext("2d");

//迪迪
var enemy ={
  x:96,
  y:448,
};
function draw(){
   ctx.drawImage(bgImg,0,0) 
  ctx.drawImage(enemyImg,enemy.x,enemy.y)
ctx.drawImage(button,560,432)
}




setInterval(draw,16);
