//設定畫布環境
 var bgImg = document.createElement("img")
var enemyImg = document.createElement("img")
var towerbtnImg= document.createElement("img")
var towerImg= document.createElement("img") 
var tower={}
var FPS = 60
var clock=0; 


bgImg.src="images/map.png";
enemyImg.src="images/jason.gif"
towerbtnImg.src="images/tower-btn.png"
towerImg.src="images/tower.png"

var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");

//update
var isBuild = false;
 
//設定敵人
function Enemy(){
 this.x=96;
 this.y=480-32;
 this.speedx=0;
 this.speedy=-64;
 this.pathDes =0;
 this.move = function(){ 
  if(isCollided(enemypath[this.pathDes].x,enemypath[this.pathDes].y,this.x,this.y,64/FPS,64/FPS)){
   this.x =enemypath[ this.pathDes].x;
   this.y =enemypath[this.pathDes].y;
   this.pathDes=this.pathDes+1;
   if(enemypath[this.pathDes].x>this.x){
     this.speedX=64;
     this.speedY=0;
      };
   if(enemypath[this.pathDes].x<this.x){
        this.speedX=-64;
        this.speedY=0;
      };
  if(enemypath[this.pathDes].y>this.y){
      this.speedX=0;
        this.speedY=64;
      };
   if(enemypath[this.pathDes].y<this.y){
      this.speedX=0;
        this.speedY=-64;
      };
  } 
  else{
     this.x=this.x+this.speedX/FPS;
     this.y=this.y+this.speedY/FPS;
 
};
 
 
}
}

var enemies =[]


var cursor = {
   x:0,
   y:0
}



var enemypath=[
 {x:96,y:64},
 {x:384,y:64},
 {x:384,y:192},
 {x:224,y:192},
 {x:224,y:320},
 {x:544,y:320},
 {x:544,y:96}
 
]
$("#game-canvas").on("mousemove",function(event){
      cursor.x = event.offsetX
      cursor.y = event.offsetY
})

//update
$("#game-canvas").on("click",function(event){
      if(isCollided(cursor.x,cursor.y,560,432,48,48)){
         isBuild=true;
      }
 else if(isBuild&&!isCollided(cursor.x,cursor.y,560,432,48,48)){
  
  tower.x=cursor.x - cursor.x%32;
  tower.y=cursor.y - cursor.y%32;
 }
 
 else{
         isBuild = false;
      }
})

function draw(){
   
 ctx.drawImage(bgImg,0,0);
 if(clock%80==0){  
 var newEnemy=new Enemy();
  enemies.push(newEnemy);
}
for(var i = 0; i<enemies.length;i++){
 enemies[i].move();
ctx.drawImage(enemyImg,enemies[i].x,enemies[i].y)
}
   
 ctx.drawImage(towerbtnImg,560,432,48,48)
   if(isBuild){
      ctx.drawImage(towerImg,cursor.x,cursor.y)
    
   }
    clock+1;

}


setInterval(draw,1000/FPS);

function isCollided(pointX, pointY, targetX, targetY, targetWidth, targetHeight) {
    if(     pointX >= targetX
        &&  pointX <= targetX + targetWidth
        &&  pointY >= targetY
        &&  pointY <= targetY + targetHeight
    ){
        return true;
    } else {
        return false;
    }
}

