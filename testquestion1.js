
function setup(){
    new Canvas(600,400);
    world.gravity.y = 10;
}
function draw(){
    if (mouse.presses("left")){
        fill(random(0,225));
        let ball = new Sprite(mouse.x,mouse.y,40);
    }
}
