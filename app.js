/**
 * Created by Manh Tuan on 5/23/2016.
 */
var express = require("express");
var app = express();
app.use(express.static(__dirname));
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/', function(req, res){
    res.sendfile('index.html');
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
tanks = [];
var id =0;
io.on('connection', function(socket){
    socket.on('player_created',function(data){
        id++;
        console.log("new player: ",data.x + "-" + data.y);
        socket.emit("info_player",{id:id,tanks:tanks});
        socket.broadcast.emit('new_player_connected',{id:id,x:data.x,y:data.y,tanks:tanks});
        tanks.push({id:id,x:data.x,y:data.y});
    });
    socket.on('tank_update',function(update){
        tanks[update.id-1].x = update.x;
        tanks[update.id-1].y = update.y;
        socket.broadcast.emit('update',{id:update.id,x:update.x,y:update.y});
    });
});