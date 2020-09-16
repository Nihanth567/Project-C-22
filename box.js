class Box{
    constructor(x,y,width,height){
      
       

        this.box = Bodies.rectangle(x,y,width,height,{isStatic:false});
        
        this.width=width
        this.height=height

        

        World.add(world,this.box);
    }

    display(){
        rectMode(CENTER);
        fill("red");
        rect(this.width,this.height);
       
    }
}