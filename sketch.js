function setup() {
  createCanvas(600, 600);
  background('blue');
}

function draw() {

  stroke("green");
  fill("red");
  
  //console.log(mouseIspressed);
  
  if (mouseIsPressed) {
   rect(mouseX,mouseY, 20, 35);
  }
}