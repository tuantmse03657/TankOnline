/**
 * Created by Manh Tuan on 5/16/2016.
 */
window.onload= function(){
    var canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    var context = canvas.getContext("2d");
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    context.beginPath();
    context.fillStyle="black";
    context.rect(10,10,canvas.width, canvas.height);
    context.fill();
    gameStart();
    createmap();
    savebrick();
    setInterval(()=>{
        tank.update();
        tank.draw(context);
        drawmap(context);
        tank.bullet.draw(context);
    }, 17)
};
function gameStart(){
    tank = new Tank(16,16);
    tank.direction = "down";
}

 window.onkeydown = function(e){
   switch (e.keyCode){
       case 65://a
           tank.sprite.src= "images/tank_armor_left_c0_t1_f.png";
           tank.direction = "left";
           tank.MoveLeft();
           break;
       case 68://d
           tank.sprite.src= "images/tank_armor_right_c0_t1_f.png";
           tank.direction = "right";
           tank.MoveRight();
           break;
       case 83://s
           tank.sprite.src= "images/tank_armor_down_c0_t1_f.png";
           tank.direction = "down";
           tank.MoveDown();
           break;
       case 87://w
           tank.sprite.src= "images/tank_armor_up_c0_t1_f.png";
           tank.direction = "up";
           tank.MoveUp();
           break;
       case 90:
           tank.shoot();
           break;
   }
 };
window.onkeyup = function(e){
    switch (e.keyCode){
        case 65://a
            if(tank.speedX < 0) {
                tank.speedX = 0;
            }
            break;
        case 68://d
            if(tank.speedX > 0) {
                tank.speedX = 0;
            }
            break;
        case 83://s
            if(tank.speedY > 0) {
                tank.speedY = 0;
            }
            break;
        case 87://w
            if(tank.speedY < 0) {
                tank.speedY = 0;
            }
            break;
    }
};