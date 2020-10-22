class stone{
    constructor(){
     var options={
         isStatic:false,
         restitution:0,
         friction:1,
         density:1.2
     }   
    this.body=Bodies.rectangle(100,550,50,50,options);
    this.width = 100;
    this.height = 500;
    this.image = loadImage("Plucking mangoes/stone.png");
    World.add(world, this.body);
    }
    display(){

        push();
        translate(this.body.position.x,this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        scale(0.2);
        image(this.image,0,0,this.width,this.height);
        pop();
        /*var pos=this.body.position;
        imageMode(CENTER);
        scale(0.2);
        image(this.image,120,500,this.width,this.height);*/
        }
        }