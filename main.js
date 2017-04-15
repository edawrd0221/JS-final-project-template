//設定畫布環境
 var bgImg = document.createElement("img");
 bgImg.src="images/1.png"
 
var enemyImg = document.createElement("img");
 enemyImg.src="images/jason.gif"
 
var button = document.createElement("img");
 button.src="images/tower-btn.png"
var lol= document.createElement("img");
 button.src="images/tower.png"


var cursur ={
  x:0,
 y:0
}

$("#game-canvas").on("mousemove",function(event){
                    cursur.y=event.offsetY
                    cursur.x=event.offsetX
})


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
ctx.drawImage(button,560,432,48,48)
ctx.drawImage(lol,cursur.x,cursur.y)

}




setInterval(draw,16);
