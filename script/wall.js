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
        this.sprite = new Animation(this.x,this.y,"water_",2,10,"","");
    }
    update(){
        this.sprite.update();
    }
    draw(context)
    {
        this.sprite.draw(context);
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