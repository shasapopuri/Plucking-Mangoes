class Mango{
  constructor(x,y,radius){
  var options={
  isStatic:true,
  restitution:0,
  friction:1
  }   
  
  this.x=x;
  this.y=y;
  this.radius=radius;
  this.image=loadImage("Plucking mangoes/mango.png")
  this.body=Bodies.circle(this.x,this.y,this.radius,options)
  World.add(world,this.body);
  }
  display(){
  var pos=this.body.position;
  push()
  translate(pos.x, pos.y);
  rotate(this.body.angle);
  fill(255,0,255)
  imageMode(CENTER);
  image(this.image,0,0,50,50);
  pop()
  //this.image.resize(10,100);
  
  }
}