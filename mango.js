class Mango{
    constructor(x,y,radius){
    var options={
    isStatic:true,
    restitution:0,
    friction:1
    }   
    this.body=Bodies.circle(x,y,radius,options)
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.image=loadImage("Plucking mangoes/mango.png")
    World.add(world,this.body);
    }
    display(){
    var pos=this.body.position;
    //scale(0.1);
    imageMode(CENTER);
    image(this.image,this.x,this.y,50,50);
    //this.image.resize(10,100);
    
    }
}