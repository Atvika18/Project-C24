class Rubber
{
    constructor (x,y,width,height)
    {
var rubOptions ={
    restitution:1,
    friction:1.0,
    density:2,
}

        this.rub = ellipse(x,y,width,rubOptions)
        World.add(myWorld, this.rub)

        this.width = width;
        
    }

    display()
    {
        var pos = this.rub.position;
        var angle = this.rub.angle;

        push()
        translate(pos.x,pos.y)
        rotate(angle)
        strokeWeight (4)
        stroke("purple")
        
        pop()
    }
}