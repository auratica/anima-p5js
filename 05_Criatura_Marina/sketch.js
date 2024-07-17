let arrx = [100, 200, 300];
let arry = [100, 200, 300];
let x = 0;
let y = 1;
let t = 250;
let c = 1;

function setup() {
  let canvas = createCanvas(400, 400);
  background(45, 130, 183);
  frameRate(30);

}

function draw() {

  translate(mouseX, mouseY);
  rotate(x);
  x = x + 1 / 40;
  stroke(235, 138, 144);
  strokeWeight(1);

  fill(66, 226, 184, c);

  for (let i = 0; i < arrx.length; i++) {
    for (let e = 0; e < arry.length; e++) {
      ellipse(arrx[i] - t, arry[e] - t, y, y);
    }
  }

  y = y + 1;
  c = c + 1;
  if (y >= 100) { y = y * -1; }
  if (c > 255) { c = c * -1; }

  background(7, 0, 77, 5);

}

