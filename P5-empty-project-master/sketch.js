var locationData;

function preload(){
    locationData =  getCurrentPosition();
}



function setup() {
    createCanvas(windowWidth,windowHeight);
    
    print(locationData);
    
  
}

function draw() {
  background('white');
    textSize(45);
    textAlign(CENTER);
    text(locationData.latitude,width/2,height/3);
    text(locationData.longitude,width/2,height/3*2);
    
}