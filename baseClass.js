
class CircleBaseClass {

    constructor(x,y,r){
        this.x=x;
        this.y=y;
        this.radius=r
        this.image = loadImage("sprites/base.png")
        var options = {
            'restitution':0.8,
            'friction':1,
            'density':1.0
        }
        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position
        //pos.x = mouseX
        //pos.y = mouseY
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle);
        imageMode(CENTER);
        fill("red");
        image(this.image,0,0,this.radius,this.radius);

        pop()

    }
}