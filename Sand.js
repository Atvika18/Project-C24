class Sand
{
    constructor (x,y,width,height)
    {
var sandOptions ={
    restitution:1,
    friction:1.3,
    density:5,
}

        this.sand = ellipse(x,y,width,sandOptions)
        World.add(myWorld, this.rub)

        this.width = width;
        
    }

    display()
    {
        var pos = this.sand.position;
        var angle = this.sand.angle;

        push()
        translate(pos.x,pos.y)
        rotate(angle)
        strokeWeight (4)
        stroke("brown")
        
        pop()
    }
}