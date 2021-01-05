class box{	
    constructor(x,y,width,height){
		var options={
			isStatic:false,
			restitution :0,
            friction :1,			
		}
		this.x=x;
		this.y=y;
		this.w=width
		this.h=height
		this.body=Bodies.rectangle(x, y, width, height, options);
 		World.add(world, this.body);
	}

    display(){
		var pos=this.body.position;		
		push()
		translate(pos.x, pos.y);		
		rotate(this.body.angle)
		fill("blue")
		rectMode(CENTER)
        rect(0,0,this.width, this.height);
		pop()			
	}
}