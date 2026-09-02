function setup(){
    new Canvas(600,400);
    world.gravity.y = 10
}
function draw(){
    if(mouse.presses("left")){
        new Sprite(mouse.x,mouse.y,50);
        fill(random(0,225))
        
    }
}
