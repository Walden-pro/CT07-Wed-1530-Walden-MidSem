function setup(){
    new Canvas(600,400);
    world.gravity.y = 10
}
function draw(){
    if(mouse.presses("left")){
        new Sprite(50,mouse.x,mouse.y);
        fill(random(0,225))
    }
}
