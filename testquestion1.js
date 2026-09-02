let ball;

function setup(){
    new Canvas(600,400);
    world.gravity.y = 10;
}
function draw(){
    if(mouse.presses("left")){
        spawnball()""
       
    }
}
function spawnball(){
    fill(random(0,225));
    ball = new Sprite(mouse.x,mouse.y,50);
    ball.sleeping = false;
    ball.collider = 'dynamic';
}