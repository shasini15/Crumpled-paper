class Paper{
    constructor(x,y,r){
        var options ={
        isStatic : false, 
      restitution : 0.3,
      friction : 0,
      density : 1.2
        }
        this.x = x;
        this.y = y;
        this.r = r;
     this.image = loadImage("paper.png");
     this.body = Bodies.circle(this.x , this.y,this.r,options);
      World.add(world,this.body);
    }
    
  
display()
{
  
 
   paper.position=this.body.position;		

			push()
		 //translate(paperPos.x, paperPos.y,paper.r);
			rectMode(CENTER)
			//strokeWeight(4);
			fill("yellow");
			ellipseMode(RADIUS);
      ellipse(this.body.position.x,this.body.position.y,this.radius);
			pop()
			

}
			

}

  