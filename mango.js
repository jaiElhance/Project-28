class Mango{
    constructor(x,y){
        var options={
            isStatic:true,
            resitution:0,
            friction:1,
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = 5
        this.image = loadImage("sprites/mango.png")
        World.add(world, this.body)
      }

      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}