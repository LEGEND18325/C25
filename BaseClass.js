class BaseClass{

    constructor(x,y,width,height,angle){
    
    var option2={
    
    restitution:0.5,
    density:1.5,
    friction:1.0
    
    }
    this.body=Bodies.rectangle(x,y,width,height,option2)
    this.image=loadImage("IMAGES/base.png")
    this.width=width;
    this.height=height;
    World.add(world,this.body)
    
    
    }
    
    display(){
    var p=this.body.position;
    
    push();
    translate(p.x,p.y)
    rotate(this.body.angle)
    imageMode(CENTER)
    
    image(this.image,0,0,this.width,this.height)
    pop();
    }
    
    
    }