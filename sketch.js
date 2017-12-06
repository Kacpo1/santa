var mySanta;
var mic;
var myTlo;
var vol;


function preload() {
    mySanta = loadImage("assets/santa.png")
 
    
}


function setup() {

	createCanvas(windowWidth, windowHeight);
    

	mic = new p5.AudioIn();
	mic.start();
}

function draw() {

	
	var vol = mic.getLevel();

	background('green');

	push();

	translate(width / 2, height / 2);

	
	var minSize = windowWidth/20;
	var maxSize = windowWidth;
	var size = map(vol, 0, 1, minSize, maxSize);
    
    //santa
    imageMode(CENTER)
   image(mySanta,0,0,400,400);
    pop();

//pompon
    push();
    noStroke();
    translate(width/2 + 160, height/2-40);
    
	ellipse(0, 0,size);
pop();
    
    //gwiazdy
    
    push();
    noStroke();
    fill(255,255,0);
  translate(width/2+150, height/2-200);
  rotate(vol * 200);
  polygon(0, 0, minSize, 3); 
  pop();
     push();
    noStroke();
    fill(255,255,0);
  translate(width/2+150, height/2-200);
  rotate(vol * -200);
  polygon(0, 0, minSize, 3); 
  pop();
     push();
    noStroke();
    fill(255,255,0);
  translate(width/2+150, height/2-200);
  rotate(vol * 200);
  polygon(0, 0, size, 3); 
  pop();
    push();
    noStroke();
    fill(255,255,0);
  translate(width/2-150, height/2-200);
  rotate(vol * 200);
  polygon(0, 0, minSize, 3); 
  pop();
     push();
    noStroke();
    fill(255,255,0);
  translate(width/2-150, height/2-200);
  rotate(vol * -200);
  polygon(0, 0, minSize, 3); 
  pop();
     push();
    noStroke();
    fill(255,255,0);
  translate(width/2-150, height/2-200);
  rotate(vol * 200);
  polygon(0, 0, size, 3); 
  pop();
    
    push();
    noStroke();
    fill(255,255,0);
  translate(width/2-350, height/2);
  rotate(vol * 200);
  polygon(0, 0, minSize, 3); 
  pop();
     push();
    noStroke();
    fill(255,255,0);
  translate(width/2-350, height/2);
  rotate(vol * -200);
  polygon(0, 0, minSize, 3); 
  pop();
     push();
    noStroke();
    fill(255,255,0);
  translate(width/2-350, height/2);
  rotate(vol * 200);
  polygon(0, 0, size, 3); 
  pop();
    push();
    noStroke();
    fill(255,255,0);
  translate(width/2+300, height/2);
  rotate(vol * 200);
  polygon(0, 0, minSize, 3); 
  pop();
     push();
    noStroke();
    fill(255,255,0);
  translate(width/2+300, height/2);
  rotate(vol * -200);
  polygon(0, 0, minSize, 3); 
  pop();
     push();
    noStroke();
    fill(255,255,0);
  translate(width/2+300, height/2);
  rotate(vol * 200);
  polygon(0, 0, size, 3); 
  pop();
    
    push();
    noStroke();
    fill(255,255,0);
  translate(width/2-250, height/2+100);
  rotate(vol * 200);
  polygon(0, 0, minSize, 3); 
  pop();
     push();
    noStroke();
    fill(255,255,0);
  translate(width/2-250, height/2+100);
  rotate(vol * -200);
  polygon(0, 0, minSize, 3); 
  pop();
     push();
    noStroke();
    fill(255,255,0);
  translate(width/2-250, height/2+100);
  rotate(vol * 200);
  polygon(0, 0, size, 3); 
  pop();
    push();
    noStroke();
    fill(255,255,0);
  translate(width/2+200, height/2 +100);
  rotate(vol * 200);
  polygon(0, 0, minSize, 3); 
  pop();
     push();
    noStroke();
    fill(255,255,0);
  translate(width/2+200, height/2+100);
  rotate(vol * -200);
  polygon(0, 0, minSize, 3); 
  pop();
     push();
    noStroke();
    fill(255,255,0);
  translate(width/2 +200, height/2+100);
  rotate(vol * 200);
  polygon(0, 0, size, 3); 
  pop();
    
      
    //eyes
  
  push();
    noStroke();
  translate(width/2 - 40, height/2 - 26);
  rotate(vol * 250);
  polygon(0, 0, size/4, 7); 
  pop();
  
  push();
    fill(random(255),0, 0);
  translate(width/2 -40, height/2-26);
  rotate(vol* -300);
  polygon(0, 0, size/6, 7); 
  pop();
    push();
    noStroke();
  translate(width/2 +10, height/2 - 26);
  rotate(vol * 250);
  polygon(0, 0, size/4, 7); 
  pop();
  
  push();
    fill(random(255),0, 0);
  translate(width/2 +10, height/2- 26);
  rotate(vol* -300);
  polygon(0, 0, size/6, 7); 
  pop();


    


	

}
function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}