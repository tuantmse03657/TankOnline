/**
 * Created by Manh Tuan on 5/16/2016.
 */
class Tank
{
    constructor(x, y){
        this.bullet = new Bullet(-100,-100);
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.sprite = new Image();
        this.sprite.src = "images/tank_armor_down_c0_t1_f.png";
        this.direction = "down";
    }
    update(){
        var isMove = true;
        var rect1 = {x:this.x + this.speedX, y:this.y + this.speedY,width:32,height:32};
        for(var i=0;i<arrBrick.length;i++)
        {
            var rect2 = {x:arrBrick[i].x, y: arrBrick[i].y, width:16,height:16};
            if(this.check(rect1,rect2)==true)
            {
                isMove = false;
                break;
            }
        }
        for(var i=0;i<arrSteel.length;i++)
        {
            var rect2 = {x:arrSteel[i].x, y: arrSteel[i].y, width:16,height:16};
            if(this.check(rect1,rect2)==true)
            {
                isMove = false;
                break;
            }
        }
        for(var i=0;i<arrWater.length;i++)
        {
            var rect2 = {x:arrWater[i].x, y: arrWater[i].y, width:32,height:32};
            if(this.check(rect1,rect2)==true)
            {
                isMove = false;
                break;
            }
        }
        if(isMove==true)
        {
            this.x += this.speedX;
            this.y += this.speedY;
        }
        //check bullet
        if(this.bullet.x != -100 && this.bullet.y != -100)
        {
            this.bullet.update();
            if(this.bullet.x>416 || this.bullet.y >416 || this.bullet.x<0 || this.bullet.y<0)
            {
                this.bullet = new Bullet(-100,-100);
            }
        }
    }
    draw(context){
        context.fillRect(0, 0, window.innerWidth, window.innerHeight);
        context.drawImage(this.sprite, this.x, this.y);
    }
    MoveLeft()
    {
        this.speedY = 0;
        this.sprite.src = "images/tank_armor_left_c0_t1_f.png";
        this.speedX = -4;
        
    }
    MoveRight()
    {
        this.speedY = 0;
        this.sprite.src = "images/tank_armor_right_c0_t1_f.png";
        this.speedX = 4;
    }
    MoveDown()
    {
        this.speedX = 0;
        this.sprite.src = "images/tank_armor_down_c0_t1_f.png";
        this.speedY = 4;
        
    }
    MoveUp()
    {
        this.speedX = 0;
        this.sprite.src = "images/tank_armor_up_c0_t1_f.png";
        this.speedY = -4;
        
    }
    shoot()
    {
        if(this.bullet.x == -100 && this.bullet.y == -100)
        {
            this.bullet = new Bullet(this.x+11,this.y+11);
            this.bullet.setspeed(this.direction);
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

