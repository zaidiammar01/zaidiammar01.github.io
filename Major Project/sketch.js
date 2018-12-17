// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let stateTitleScreen;
let state;
let stateX;
let lastTimeSwitchedColor = 0;
let lastTimeSwitchedColorX = 0;

let RED_LIGHT_DURATION = 8000;
let GREEN_LIGHT_DURATION = 6000;
let YELLOW_LIGHT_DURATION = 2000;
let elapsedTime;
let elapsedTimeX;

let intersection1lightx = 375;
let intersection1lighty = 150;

let intersection2lightx = 825;
let intersection2lighty = 150;

let intersection3lightx = 375;
let intersection3lighty = 450;

let intersection4lightx = 825;
let intersection4lighty = 450;

let x;
let y;
let dy;
let dx;

let carArray = [];

class Car{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.color = color(random(255));
  }
  display(){
    fill(this.color);
    rect(this.x,this.y,30,15);
  }
  update(){
    this.x += this.dx;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = 1;
  stateX = 2;
}

function draw() {
  titleScreen();
  runSimulation();
}


// function move(){
//
//
//   }
// }
function titleScreen(){
  if (mouseIsPressed){
    stateTitleScreen = 2;
  }
  else{
    background(0, 150, 0);
    fill(150, 200, 255);
    rect(0, 0, width, height/2);
    textSize(75);
    fill(255);
    textStyle(NORMAL);
    text("Ultimate Traffic Light Simulator!!!", width/5, height/6);
    textStyle(ITALIC);
    text("Click to Run Simulation", width/2.5, height/1.2);
  }
}

function runSimulation(){
  let car1 = new Car(200, 260);
  carArray.push(car1);
  if (stateTitleScreen === 2){
    layout();
    displayRects();
    checkStateChange();
    checkStateChangeX();
    displayCorrectLight();
    displayCorrectLightX();
    for (let i = carArray.length - 1; i >= 0; i--) {
      carArray[i].display();
      carArray[i].update();
    }
  }
}

function checkStateChange() {
  let elapsedTime = millis() - lastTimeSwitchedColor;
  if (state === 1 && elapsedTime >= RED_LIGHT_DURATION) {
    state = 2;
    lastTimeSwitchedColor = millis();
  }
  else if (state === 2 && elapsedTime >= GREEN_LIGHT_DURATION) {
    state = 3;
    lastTimeSwitchedColor = millis();
  }
  else if (state === 3 && elapsedTime >= YELLOW_LIGHT_DURATION) {
    state = 1;
    lastTimeSwitchedColor = millis();
  }
}
function checkStateChangeX() {
  let elapsedTimeX = millis() - lastTimeSwitchedColorX;
  if (stateX === 1 && elapsedTimeX >= RED_LIGHT_DURATION) {
    stateX = 2;
    lastTimeSwitchedColorX = millis();
  }
  else if (stateX === 2 && elapsedTimeX >= GREEN_LIGHT_DURATION) {
    stateX = 3;
    lastTimeSwitchedColorX = millis();
  }
  else if (stateX === 3 && elapsedTimeX >= YELLOW_LIGHT_DURATION) {
    stateX = 1;
    lastTimeSwitchedColorX = millis();
  }
}

function displayCorrectLight() {
  if (state === 1) {
    displayRedLightVertical();
  }
  else if (state === 2) {
    displayGreenLightVertical();
  }
  else if (state === 3) {
    displayYellowLightVertical();
  }
}
function displayCorrectLightX() {
  if (stateX === 1) {
    displayRedLightHorizontal();
  }
  else if (stateX === 2) {
    displayGreenLightHorizontal();
  }
  else if (stateX === 3) {
    displayYellowLightHorizontal();
  }
}

function displayRedLightVertical() {
  fill(255, 0, 0);
  ellipse(intersection1lightx+5, intersection1lighty+5, 5);
  ellipse(intersection1lightx+95, intersection1lighty+180, 5);

  ellipse(intersection4lightx+5, intersection4lighty+5, 5);
  ellipse(intersection4lightx+95, intersection4lighty+125, 5);
  fill(100, 100, 0);
  ellipse(intersection1lightx+5, intersection1lighty+15, 5);
  ellipse(intersection1lightx+95, intersection1lighty+190, 5);

  ellipse(intersection4lightx+5, intersection4lighty+15, 5);
  ellipse(intersection4lightx+95, intersection4lighty+135, 5);
  fill(0, 100, 0);
  ellipse(intersection1lightx+5, intersection1lighty+25, 5);
  ellipse(intersection1lightx+95, intersection1lighty+200, 5);

  ellipse(intersection4lightx+5, intersection4lighty+25, 5);
  ellipse(intersection4lightx+95, intersection4lighty+145, 5);

  //The other Intersections

  fill(255, 0, 0);
  ellipse(intersection2lightx+105, intersection2lighty+25, 5);
  ellipse(intersection2lightx-15, intersection2lighty+180, 5);

  ellipse(intersection3lightx+105, intersection3lighty+25, 5);
  ellipse(intersection3lightx-15, intersection3lighty+130, 5);
  fill(100, 100, 0);
  ellipse(intersection2lightx+115, intersection2lighty+25, 5);
  ellipse(intersection2lightx-5, intersection2lighty+180, 5);

  ellipse(intersection3lightx+115, intersection3lighty+25, 5);
  ellipse(intersection3lightx-5, intersection3lighty+130, 5);
  fill(0, 100, 0);
  ellipse(intersection2lightx+125, intersection2lighty+25, 5);
  ellipse(intersection2lightx+5, intersection2lighty+180, 5);

  ellipse(intersection3lightx+125, intersection3lighty+25, 5);
  ellipse(intersection3lightx+5, intersection3lighty+130, 5);
}
function displayYellowLightVertical() {
  fill(100, 0, 0);
  ellipse(intersection1lightx+5, intersection1lighty+5, 5);
  ellipse(intersection1lightx+95, intersection1lighty+180, 5);

  ellipse(intersection4lightx+5, intersection4lighty+5, 5);
  ellipse(intersection4lightx+95, intersection4lighty+125, 5);
  fill(255, 255, 0);
  ellipse(intersection1lightx+5, intersection1lighty+15, 5);
  ellipse(intersection1lightx+95, intersection1lighty+190, 5);

  ellipse(intersection4lightx+5, intersection4lighty+15, 5);
  ellipse(intersection4lightx+95, intersection4lighty+135, 5);
  fill(0, 100, 0);
  ellipse(intersection1lightx+5, intersection1lighty+25, 5);
  ellipse(intersection1lightx+95, intersection1lighty+200, 5);

  ellipse(intersection4lightx+5, intersection4lighty+25, 5);
  ellipse(intersection4lightx+95, intersection4lighty+145, 5);

  //the other Intersections

  fill(100, 0, 0);
  ellipse(intersection2lightx+105, intersection2lighty+25, 5);
  ellipse(intersection2lightx-15, intersection2lighty+180, 5);

  ellipse(intersection3lightx+105, intersection3lighty+25, 5);
  ellipse(intersection3lightx-15, intersection3lighty+130, 5);
  fill(255, 255, 0);
  ellipse(intersection2lightx+115, intersection2lighty+25, 5);
  ellipse(intersection2lightx-5, intersection2lighty+180, 5);

  ellipse(intersection3lightx+115, intersection3lighty+25, 5);
  ellipse(intersection3lightx-5, intersection3lighty+130, 5);
  fill(0, 100, 0);
  ellipse(intersection2lightx+125, intersection2lighty+25, 5);
  ellipse(intersection2lightx+5, intersection2lighty+180, 5);

  ellipse(intersection3lightx+125, intersection3lighty+25, 5);
  ellipse(intersection3lightx+5, intersection3lighty+130, 5);
}
function displayGreenLightVertical() {
  fill(100, 0, 0);
  ellipse(intersection1lightx+5, intersection1lighty+5, 5);
  ellipse(intersection1lightx+95, intersection1lighty+180, 5);

  ellipse(intersection4lightx+5, intersection4lighty+5, 5);
  ellipse(intersection4lightx+95, intersection4lighty+125, 5);
  fill(100, 100, 0);
  ellipse(intersection1lightx+5, intersection1lighty+15, 5);
  ellipse(intersection1lightx+95, intersection1lighty+190, 5);

  ellipse(intersection4lightx+5, intersection4lighty+15, 5);
  ellipse(intersection4lightx+95, intersection4lighty+135, 5);
  fill(0, 255, 0);
  ellipse(intersection1lightx+5, intersection1lighty+25, 5);
  ellipse(intersection1lightx+95, intersection1lighty+200, 5);

  ellipse(intersection4lightx+5, intersection4lighty+25, 5);
  ellipse(intersection4lightx+95, intersection4lighty+145, 5);

  //TOI

  fill(100, 0, 0);
  ellipse(intersection2lightx+105, intersection2lighty+25, 5);
  ellipse(intersection2lightx-15, intersection2lighty+180, 5);

  ellipse(intersection3lightx+105, intersection3lighty+25, 5);
  ellipse(intersection3lightx-15, intersection3lighty+130, 5);
  fill(100, 100, 0);
  ellipse(intersection2lightx+115, intersection2lighty+25, 5);
  ellipse(intersection2lightx-5, intersection2lighty+180, 5);

  ellipse(intersection3lightx+115, intersection3lighty+25, 5);
  ellipse(intersection3lightx-5, intersection3lighty+130, 5);
  fill(0, 255, 0);
  ellipse(intersection2lightx+125, intersection2lighty+25, 5);
  ellipse(intersection2lightx+5, intersection2lighty+180, 5);

  ellipse(intersection3lightx+125, intersection3lighty+25, 5);
  ellipse(intersection3lightx+5, intersection3lighty+130, 5);
}
function displayRedLightHorizontal() {
  fill(255, 0, 0);
  ellipse(intersection1lightx+105, intersection1lighty+25, 5);
  ellipse(intersection1lightx-15, intersection1lighty+180, 5);

  ellipse(intersection4lightx+105, intersection4lighty+25, 5);
  ellipse(intersection4lightx-15, intersection4lighty+130, 5);
  fill(100, 100, 0);
  ellipse(intersection1lightx+115, intersection1lighty+25, 5);
  ellipse(intersection1lightx-5, intersection1lighty+180, 5);

  ellipse(intersection4lightx+115, intersection4lighty+25, 5);
  ellipse(intersection4lightx-5, intersection4lighty+130, 5);
  fill(0, 100, 0);
  ellipse(intersection1lightx+125, intersection1lighty+25, 5);
  ellipse(intersection1lightx+5, intersection1lighty+180, 5);

  ellipse(intersection4lightx+125, intersection4lighty+25, 5);
  ellipse(intersection4lightx+5, intersection4lighty+130, 5);

  //TOI

  fill(255, 0, 0);
  ellipse(intersection2lightx+5, intersection2lighty+5, 5);
  ellipse(intersection2lightx+95, intersection2lighty+180, 5);

  ellipse(intersection3lightx+5, intersection3lighty+5, 5);
  ellipse(intersection3lightx+95, intersection3lighty+125, 5);
  fill(100, 100, 0);
  ellipse(intersection2lightx+5, intersection2lighty+15, 5);
  ellipse(intersection2lightx+95, intersection2lighty+190, 5);

  ellipse(intersection3lightx+5, intersection3lighty+15, 5);
  ellipse(intersection3lightx+95, intersection3lighty+135, 5);
  fill(0, 100, 0);
  ellipse(intersection2lightx+5, intersection2lighty+25, 5);
  ellipse(intersection2lightx+95, intersection2lighty+200, 5);

  ellipse(intersection3lightx+5, intersection3lighty+25, 5);
  ellipse(intersection3lightx+95, intersection3lighty+145, 5);
}
function displayYellowLightHorizontal() {
  fill(100, 0, 0);
  ellipse(intersection1lightx+105, intersection1lighty+25, 5);
  ellipse(intersection1lightx-15, intersection1lighty+180, 5);

  ellipse(intersection4lightx+105, intersection4lighty+25, 5);
  ellipse(intersection4lightx-15, intersection4lighty+130, 5);
  fill(255, 255, 0);
  ellipse(intersection1lightx+115, intersection1lighty+25, 5);
  ellipse(intersection1lightx-5, intersection1lighty+180, 5);

  ellipse(intersection4lightx+115, intersection4lighty+25, 5);
  ellipse(intersection4lightx-5, intersection4lighty+130, 5);
  fill(0, 100, 0);
  ellipse(intersection1lightx+125, intersection1lighty+25, 5);
  ellipse(intersection1lightx+5, intersection1lighty+180, 5);

  ellipse(intersection4lightx+125, intersection4lighty+25, 5);
  ellipse(intersection4lightx+5, intersection4lighty+130, 5);

  //TOI

  fill(100, 0, 0);
  ellipse(intersection2lightx+5, intersection2lighty+5, 5);
  ellipse(intersection2lightx+95, intersection2lighty+180, 5);

  ellipse(intersection3lightx+5, intersection3lighty+5, 5);
  ellipse(intersection3lightx+95, intersection3lighty+125, 5);
  fill(255, 255, 0);
  ellipse(intersection2lightx+5, intersection2lighty+15, 5);
  ellipse(intersection2lightx+95, intersection2lighty+190, 5);

  ellipse(intersection3lightx+5, intersection3lighty+15, 5);
  ellipse(intersection3lightx+95, intersection3lighty+135, 5);
  fill(0, 100, 0);
  ellipse(intersection2lightx+5, intersection2lighty+25, 5);
  ellipse(intersection2lightx+95, intersection2lighty+200, 5);

  ellipse(intersection3lightx+5, intersection3lighty+25, 5);
  ellipse(intersection3lightx+95, intersection3lighty+145, 5);
}
function displayGreenLightHorizontal() {
  fill(100, 0, 0);
  ellipse(intersection1lightx+105, intersection1lighty+25, 5);
  ellipse(intersection1lightx-15, intersection1lighty+180, 5);

  ellipse(intersection4lightx+105, intersection4lighty+25, 5);
  ellipse(intersection4lightx-15, intersection4lighty+130, 5);
  fill(100, 100, 0);
  ellipse(intersection1lightx+115, intersection1lighty+25, 5);
  ellipse(intersection1lightx-5, intersection1lighty+180, 5);

  ellipse(intersection4lightx+115, intersection4lighty+25, 5);
  ellipse(intersection4lightx-5, intersection4lighty+130, 5);
  fill(0, 255, 0);
  ellipse(intersection1lightx+125, intersection1lighty+25, 5);
  ellipse(intersection1lightx+5, intersection1lighty+180, 5);

  ellipse(intersection4lightx+125, intersection4lighty+25, 5);
  ellipse(intersection4lightx+5, intersection4lighty+130, 5);

  //TOI

  fill(100, 0, 0);
  ellipse(intersection2lightx+5, intersection2lighty+5, 5);
  ellipse(intersection2lightx+95, intersection2lighty+180, 5);

  ellipse(intersection3lightx+5, intersection3lighty+5, 5);
  ellipse(intersection3lightx+95, intersection3lighty+125, 5);
  fill(100, 100, 0);
  ellipse(intersection2lightx+5, intersection2lighty+15, 5);
  ellipse(intersection2lightx+95, intersection2lighty+190, 5);

  ellipse(intersection3lightx+5, intersection3lighty+15, 5);
  ellipse(intersection3lightx+95, intersection3lighty+135, 5);
  fill(0, 255, 0);
  ellipse(intersection2lightx+5, intersection2lighty+25, 5);
  ellipse(intersection2lightx+95, intersection2lighty+200, 5);

  ellipse(intersection3lightx+5, intersection3lighty+25, 5);
  ellipse(intersection3lightx+95, intersection3lighty+145, 5);
}

function displayRects(){
  fill(200, 200, 0);
  rect(intersection1lightx, intersection1lighty, 10, 30);
  rect(intersection1lightx+90, intersection1lighty+175, 10, 30);
  rect(intersection2lightx, intersection2lighty, 10, 30);
  rect(intersection2lightx+90, intersection2lighty+175, 10, 30);

  rect(intersection3lightx, intersection3lighty, 10, 30);
  rect(intersection3lightx+90, intersection3lighty+120, 10, 30);
  rect(intersection4lightx, intersection4lighty, 10, 30);
  rect(intersection4lightx+90, intersection4lighty+120, 10, 30);

  //horizontal Rects

  rect(intersection1lightx+100, intersection1lighty+20, 30, 10);
  rect(intersection1lightx-20, intersection1lighty+175, 30, 10);
  rect(intersection2lightx+100, intersection2lighty+20, 30, 10);
  rect(intersection2lightx-20, intersection2lighty+175, 30, 10);

  rect(intersection3lightx+100, intersection3lighty+20, 30, 10);
  rect(intersection3lightx-20, intersection3lighty+125, 30, 10);
  rect(intersection4lightx+100, intersection4lighty+20, 30, 10);
  rect(intersection4lightx-20, intersection4lighty+125, 30, 10);
}

function layout(){
  background(100);
  fill(0,150, 0);
  rect(-20, -20, 420, 220, 20);
  rect(450, -20, 400, 220, 20);
  rect(900, -20, 720, 220, 20);

  rect(-20, 300, 420, 200, 20);
  rect(450, 300, 400, 200, 20);
  rect(900, 300, 720, 200, 20);

  rect(-20, 550, 420, 300, 20);
  rect(450, 550, 400, 300, 20);
  rect(900, 550, 720, 300, 20);
}
