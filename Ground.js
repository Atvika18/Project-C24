class Ground
{
    constructor (x,y,width,height)
    {
var options= {
    isStatic:true,
}

        this.ground = Bodies.rectangle(x,y,width,height, options);
World.add(myWorld, this.ground)

this.width = width;
this.height = height;


    }

    display() {
var pos = this.ground.position;
rectMode (CENTER)
fill ("yellow")
rect(pos.x,pos.y,this.width, this.height)
    }
}