function createmap()
{
    map =
        [   [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
            [2,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,2],
            [2,0,0,1,3,3,1,0,0,0,0,0,0,0,0,0,0,0,0,1,3,3,1,0,0,2],
            [2,0,0,1,3,3,1,0,0,0,0,0,0,0,0,0,0,0,0,1,3,3,1,0,0,2],
            [2,0,0,1,3,3,1,0,0,0,0,0,0,0,0,0,0,0,0,1,3,3,1,0,0,2],
            [2,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,2],
            [2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,2],
            [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
            [2,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,1,1,2],
            [2,1,1,1,2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,0,1,1,1,2],
            [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
            [2,1,1,1,4,4,1,1,1,1,1,0,0,1,1,1,1,1,1,1,4,4,1,1,1,2],
            [2,1,1,1,4,4,1,1,1,1,1,2,2,1,1,1,1,1,1,1,4,4,1,1,1,2],
            [2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,2],
            [2,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,2],
            [2,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,2],
            [2,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,2],
            [2,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,2],
            [2,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,2],
            [2,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,2],
            [2,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,2],
            [2,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
            [2,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,2],
            [2,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
            [2,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,2],
            [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]];
}

function drawmap(context)
{
    console.log(map[2][3]);
    var posx=0;
    var posy=0;
    for(var i = 0; i<26;i++)
    {
        for(var j =0;j<26;j++)
        {
            if(map[i][j]==1)
            {
                var wall = new Wall(posx,posy);
                wall.draw(context);
            }
            if(map[i][j]==2)
            {
                var wall2 = new Wall2(posx,posy);
                wall2.draw(context);
            }
            if(map[i][j]==3 && map[i][j+1]==3 && map[i+1][j]==3 && map[i+1][j+1]==3)
            {
                var water = new Water(posx,posy);
                water.draw(context);
            }
            if(map[i][j]==4 && map[i][j+1]==4 && map[i+1][j]==4 && map[i+1][j+1]==4)
            {
                var tree = new Tree(posx,posy);
                tree.draw(context);
            }
            posx+=16;
        }
        posx=0;
        posy +=16;
    }
}
function savebrick(){
    arrBrick = [];
    arrSteel = [];
    arrWater = [];
    var posx=0;
    var posy=0;
    for(var i = 0; i<26;i++)
    {
        for(var j =0;j<26;j++)
        {
            if(map[i][j]==1)
            {
                var wall = new Wall(posx,posy);
                arrBrick.push(wall);
            }
            if(map[i][j]==2)
            {
                var wall2 = new Wall2(posx,posy);
                arrSteel.push(wall2);
            }
            if(map[i][j]==3 && map[i][j+1]==3 && map[i+1][j]==3 && map[i+1][j+1]==3)
            {
                var water = new Water(posx,posy);
                arrWater.push(water);
            }
            if(map[i][j]==4 && map[i][j+1]==4 && map[i+1][j]==4 && map[i+1][j+1]==4)
            {
                var tree = new Tree(posx,posy);
            }
            posx+=16;
        }
        posx=0;
        posy +=16;
    }
}

