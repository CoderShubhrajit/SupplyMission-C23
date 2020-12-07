class dropBox
{
    constructor()
    {
        var gravity = {restitution: 0.0};
        this.Body = Bodies.rectangle(400,555,200,20,gravity);
        World.add(world,this.Body);

        this.Body = Bodies.rectangle(310,515,20,100,gravity);
        World.add(world,this.Body);

        this.Body = Bodies.rectangle(490,515,20,100,gravity);
        World.add(world,this.Body);
    }

    display()
    {
       fill("red");
       rectMode(CENTER);
       rect(this.Body.position.x,this.Body.position.y,200,20);
       rect(this.Body.position.x,this.Body.position.y,20,100);
       rect(this.Body.position.x,this.Body.position.y,20,100);
    }
}