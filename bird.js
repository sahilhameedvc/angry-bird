
class Bird extends CircleBaseClass {

    constructor(x,y,r){
        super(x,y,r);
        this.image=loadImage("sprites/bird.png");
       
    }

    display(){
      super.display()
    }
}