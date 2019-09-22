function setup() {
    createCanvas(400, 400);
  }
  var on = false;
  
  function draw() {
    background(100);
    if (on) {
      fill(90, 90, 280)
      stroke(8, 255, 100)
    } else {
      fill(255, 0, 0)
      stroke(100,300,255)
    }
    rect(95, 95, 95, 89);
    
    strokeWeight(5)
  
  
  }
  
  function mousePressed() {
    if (on) {
      on = false
    } else {
      on = true
    };
  }