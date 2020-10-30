class stone{
    constructor(x,y,r){
     var options={
         isStatic:false,
         restitution:0,
         friction:1,
         density:1.2
     }
    this.x=x;
	this.y=y;
	this.r=r   
    //this.body=Bodies.rectangle(100,550,50,50,options);
    this.image = loadImage("Plucking mangoes/stone.png");
    this.body=Bodies.circle(this.x, this.y, this.r/2, options)
    World.add(world, this.body);
    }
    display(){
         //var pos=this.body.position;

        push();
        translate(this.body.position.x,this.body.position.y);
        //rotate(angle);
        fill(255,0,255)
        imageMode(CENTER);
        ellipseMode(RADIUS)
        image(this.image,0,0,this.r*2, this.r*2);
        pop();
        /*var pos=this.body.position;
        imageMode(CENTER);
        scale(0.2);
        image(this.image,120,500,this.width,this.height);*/
        }
        }
