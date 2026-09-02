let ball;
function setup(){
    new Canvas(600,400);
    world.gravity.y = 10;
}
function draw(){
    if(mouse.presses("left")){
        fill(random(0,225));
        ball = Sprite(mouse.x,mouse.y,50);

        
    }
}
