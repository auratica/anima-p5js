let a=1;
let b=1;
let r;

function setup() {
  
  createCanvas(600, 600);
  r=random(1,600);
  background(0);
  frameRate(10); 
  
}

function draw() {
  
  ellipse (300,300,a,a);
      noFill();
      stroke (255);
      strokeWeight(1); 

a=a+10;
b=b+20;
r++;
  
  if (a>900){a=a*-1} 
  else if (a<899){a=a+1;} 
  
 ellipse (150,150,r+80,r+20);
      fill(0);
      stroke (255);
      strokeWeight(1);
    if (r>600){r=r*-1} 
    else if (r<599){r=r+20;} 

translate(width / 2, height / 2);
rotate(r/a);

//cuadro rojo
fill(0);
rect(-125, -125, 250, 250);
  
//cuadro amarillo
rotate(r/b);
fill(241, 196, 15);
rect(-60, -60, 120, 120);
  
rotate(r/a);
fill(255,0,0);
rect(30,30, 30, 30);

translate(width / 2, height / 2);
rotate(r/a);
fill(255,0,0);
  rect(r*-1/2,r*-1/2, r, r); 

rect(300,300,600,600); fill(0);

}