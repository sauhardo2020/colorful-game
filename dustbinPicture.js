class dustbinGreen{
  
  constructor(x,y,width,height){
  var options={

isStatic: 0.1


  }
 this.body=Bodies.rectangle(x,y,width,height,options);

 this.width= width;

 this.height= height;

 this.image =loadImage("dustbin.png");


  }

  display(){

 var pos= this.body.position
 imageMode(CENTER)
 image(this.image,pos.x,pos.y,this.width,this.height)

  }

}