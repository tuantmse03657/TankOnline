/**
 * Created by Manh Tuan on 5/17/2016.
 */
class Wall{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
        this.sprite = new Image();
        this.sprite.src = "images/wall_brick.png";
    }
    draw(context)
    {
        context.drawImage(this.sprite, this.x, this.y);
    }
}
class Wall2{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
        this.sprite = new Image();
        this.sprite.src = "images/wall_steel.png";
    }
    draw(context)
    {
        context.drawImage(this.sprite, this.x, this.y);
    }
}
class Water{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
        this.sprite = new Image();
        this.sprite.src = "images/water_1.png";
    }
    draw(context)
    {
        context.drawImage(this.sprite, this.x, this.y);
    }
}
class Tree{
    constructor(x,y)
    {
        this.x=x;
        this.y=y;
        this.sprite = new Image();
        this.sprite.src = "images/trees.png";
    }
    draw(context)
    {
        context.drawImage(this.sprite, this.x, this.y);
    }
}