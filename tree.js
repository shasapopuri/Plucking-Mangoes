    class Tree{
    constructor(){
        var options={
            isStatic:true
        };
    this.body=Bodies.rectangle(600,300,1000,500);
    this.width = 100;
    this.height = 500;
    this.image = loadImage("Plucking mangoes/tree.png");
    World.add(world, this.body);
    }
    display(){
    var pos=this.body.position;
    imageMode(CENTER);
    fill("brown");
    image(this.image,600,450,400,500);
    }
    }
