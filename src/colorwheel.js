// QuantumNovice

function setup() {

  createCanvas(700, 500);
  textSize(15);
  noStroke();

  // create sliders
  angular_velocity = createSlider(0, 200, 100);
  angular_velocity.position(20, 20);
  multiplier = createSlider(1, 10^9, 1);
  multiplier.position(20, 50);
  radius = createSlider(0, 255, 150);
  radius.position(20, 80);
}
theta = 0
segmentCount = 24;
function draw() {
  const velocity = angular_velocity.value();
  const time = multiplier.value();
  const r = radius.value();


  background(240);
  text('Angular Velocity', angular_velocity.x * 2 + angular_velocity.width, 35);
  text('Multiplier', multiplier.x * 2 + multiplier.width, 65);
  text('Radius', radius.x * 2 + radius.width, 95);

  //translate(width/2, height/2);
  //noFill();
  //rotate(radians(theta))

  colorMode(HSB, 360, width/2, height/2);


  var angleStep = floor(360/segmentCount);
  beginShape(TRIANGLE_FAN);
    vertex(width/2,height/2);
    for(var angle =0; angle <= 360; angle += angleStep){
      var vx =  width/2 + cos(radians(angle+theta))* r;
      var vy = height/2 + sin(radians(angle+theta))* r;
      vertex(vx, vy);
      fill(angle, 305, 400);
      stroke(angle,305,400);

    }
  endShape();

  theta += velocity*time;

}
