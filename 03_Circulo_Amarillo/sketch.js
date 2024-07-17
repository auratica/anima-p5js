let y=50;
let r=random(10,250);

function setup() {
	createCanvas(600, 600)
	background (244, 208, 63);
  
}

function draw() {
	
circle (mouseX,mouseY,y);

fill(255);
if(mouseIsPressed){fill(random(1,254),random(1,254),random(1,254))} 

}
