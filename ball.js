class Ball{
    constructor(x,y,r){
        var options={
            restitution:0.8,
            friction:0.5,
            density:1.4

        }
        this.radius=r
        this.body = Bodies.circle(x,y,r,options);

        World.add(world, this.body);
      
    }
    display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius, this.radius);
        pop();
      }
}
