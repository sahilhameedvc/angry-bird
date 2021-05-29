class Log {
    constructor(x, y, width,a) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0,
          'angle':a
      }
      this.body = Bodies.rectangle(x, y, width, 20, options);
      this.width = width;
      this.height = 20;
      this.image = loadImage("sprites/wood2.png")
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      imageMode(CENTER);
      fill("grey");
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      image(this.image,0 ,0 , this.width, this.height);
      pop();
    }
  };
  