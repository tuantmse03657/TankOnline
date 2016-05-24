/**
 * Created by Manh Tuan on 5/16/2016.
 */
var socket;
var enemyTanks = [];
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
        update();
        draw(context);
    }, 17);
    initSocketClient();
};
function initSocketClient()
{
    socket = io.connect();
    socket.emit('player_created',{x:tank.x,y:tank.y});
    socket.on("info_player",function(data){
        console.log("My ID " + data.id);
        tank.id = data.id;
        for (var i = 0; i < data.tanks.length; i++){
            var newTank = new Tank(data.tanks[i].x,data.tanks[i].y);
            newTank.id=data.tanks[i].id;
            enemyTanks.push(newTank);
        }
    });
    socket.on('new_player_connected',function(data){
        var newTank = new Tank(data.x,data.y);
        newTank.id = data.id;
        enemyTanks.push(newTank);
    });
}
function gameStart(){
    var x=Math.floor((Math.random() * 200) + 1);
    tank = new Tank(x,0);
}
function update(){
    tank.update();
    for(var i = 0;i<arrWater.length;i++){
        arrWater[i].update();
    }
    if(tank.speedX !=0 || tank.speedY !=0)
    {
        socket.emit('tank_update',{id:tank.id,x:tank.x,y:tank.y});
    }
}
function draw(context)
{
    socket.on('update',function(data){
        for(var i =0;i<enemyTanks.length;i++)
        {
            if(enemyTanks[i].id == data.id)
            {
                enemyTanks[i].x = data.x;
                enemyTanks[i].y = data.y;
            }
        }
    });
    context.fillRect(0, 0, window.innerWidth,window.innerHeight);
    tank.draw(context);
    drawmap(context);
    for(var i = 0;i<enemyTanks.length;i++)
    {
        enemyTanks[i].sprite = new tankAnimation(enemyTanks[i].x,enemyTanks[i].y,"tank_player1_",2,8,"");
        enemyTanks[i].draw(context);
    }
    tank.bullet.draw(context);
}
 window.onkeydown = function(e){
   switch (e.keyCode){
       case 65://a
           tank.MoveLeft();
           break;
       case 68://d
           tank.MoveRight();
           break;
       case 83://s
           tank.MoveDown();
           break;
       case 87://w
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