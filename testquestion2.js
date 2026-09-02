function setup(){
    new Canvas(600,400);
    world.gravity.y = 10;
    let base = new Sprite(0,700,1500,700);
    base.collider = 'static';
}
function draw(){
    if (mouse.presses("left")){
        fill(random(0,225));
        let ball = new Sprite(mouse.x,mouse.y,40);
        ball.remove()
        ball.bounciness = 0.5;
        ball.drag = 0.4;
    }
}
