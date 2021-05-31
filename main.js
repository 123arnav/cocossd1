img="";
function preload(){
img=loadImage("dog_cat.jpg");
};

function setup(){
canvas=createCanvas(500,400);
canvas.center();
};

function draw(){
image(img, 8,8,480, 380)
fill("red")
noFill();
stroke("red");
rect(30,65,250,320)
text("dog",30,65)
};