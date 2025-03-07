class Box{
  constructor(x,y,width,height){
   var options = {
       isStatic : false,
       'restitution':0.4,
       'friction': 0.7,
       'density': 1
   }
   this.body = Bodies.rectangle(x,y,width,height,options);
   this.width = width;
   this.height = height;
   World.add(world,this.body);
  }

display(){
  var posi = this.body.position;
  var angle = this.body.angle;

  push();
  translate(posi.x,posi.y);
  rotate(angle);
  rectMode(CENTER);
  strokeWeight(2);
  stroke("orange");
  fill("pink");
  rect(0,0,this.width,this.height);
  pop();

}

}