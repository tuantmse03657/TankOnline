class Bullet{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.speedx = 0;
        this.speedy = 0;
        this.sprite = new Image();
    }
    update()
    {
        var isshoot = true;
        var rect1 = {x:this.x, y:this.y,width:8,height:8};
        for(var i=0;i<arrBrick.length;i++)
        {
            var rect2 = {x:arrBrick[i].x, y: arrBrick[i].y, width:16,height:16};
            if(this.check(rect1,rect2)==true)
            {
                isshoot = false;
                map[arrBrick[i].y/16][arrBrick[i].x/16]=0;
                this.x = -100;
                this.y = -100;
                arrBrick.splice(i,1);
                break;
            }
        }
        for(var i=0;i<arrSteel.length;i++)
        {
            var rect2 = {x:arrSteel[i].x, y: arrSteel[i].y, width:16,height:16};
            if(this.check(rect1,rect2)==true)
            {
                isshoot = false;
                this.x = -100;
                this.y = -100;
                break;
            }
        }
        if(isshoot==true)
        {
            this.x += this.speedx;
            this.y += this.speedy;
        }
    }
    draw(context)
    {
        context.drawImage(this.sprite,this.x,this.y);
    }
    setspeed(images){
        if(images == "left"){
            this.speedy = 0;
            this.sprite.src="images/bullet_left.png";
            this.speedx = -8;
        }
        if(images == "right"){
            this.speedy =0;
            this.sprite.src="images/bullet_right.png";
            this.speedx = 8;
        }
        if(images == "down"){
            this.speedx = 0;
            this.sprite.src="images/bullet_down.png";
            this.speedy = 8;
        }
        if(images == "up"){
            this.speedx=0;
            this.sprite.src="images/bullet_up.png";
            this.speedy = -8;
        }
    }
    check(rect1,rect2)
    {
        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.height + rect1.y > rect2.y) {
            return true;
        }
        return false;
    }
}