class man{
    constructor(x,y,r){
      var options_man = {
        isStatic: true,
        restitution: 0.1,
        friction: 0.5
      }
    
    this.x = x;
    this.y = y;
    this.r = r;

    this.image = loadImage("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png");
    

    this.body = Bodies.circle(this.x,this.y,this.r,options_man);
    World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
     push();
     
     translate(pos.x,pos.y);
     rectMode(CENTER);
     strokeWeight(2);
     fill("silver");
     imageMode(CENTER);
     image(this.image,0,0,420,420);

     pop();
    }
}