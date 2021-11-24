let an_font;
let isms;
let table;
let newtech;
let artForm;
let subject;

let starter = [
  "Can we experiment with",
  "A collaboration of",
  "Could we combine",
  "How about",
];

let discuss = [
  "to speak about",
  "to explore",
  "to address",
  "to criticize",
  "to understand",
];

function preload() {
  table = loadTable(
    "Activity for ACRI Tech_In_Art - Sheet1.csv",
    "csv",
    "header"
  );
  an_font = loadFont("fonts/Ancho-Regular.ttf");
  an_font_thin = loadFont("fonts/Ancho-Thin.ttf");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  textFont(an_font);
  textAlign(CENTER);
  textSize(25);
  rectMode(CENTER)
  textAlign(CENTER)
  colorMode(HSL)
  angleMode(DEGREES)
}

function draw() {
  background(255);

push()
textAlign(LEFT);
textSize(50)
text("Want another idea? Click anywhere", 100,200)
pop()

  starterRand = random(starter);
  discussRand = random(discuss);
  rand_bg();
  
  
    newtech = random(table.getColumn("NEW TECH"));
    artForm = random(table.getColumn("TRADITIONAL ART FORM"));
    subject = random(table.getColumn("SUBJECT"));
  if (newtech != "" && artForm != "" && subject != "") {
    fill(0)
  textFont(an_font_thin);
  text(starterRand, width/2, height/4+120);
    textFont(an_font);
    text(newtech, width/2, height/4+160);
    text(artForm, width/2, height/4+240);
    text(subject, width/2, height/4+320);

  textFont(an_font_thin);
  text("and", width/2, height/4+200);

  textFont(an_font_thin);
  text(discussRand, width/2, height/4+280);
  } else {
    fill(0)
    textFont(an_font_thin);
    text("thinking...", width/2, height/4+200);
  }
  

//   console.log(typeof newtech)
//   console.log(newtech, artForm,subject)
}

function rand_bg() {
  noStroke();
  fill(random(160,345), 60, 70)
  for (i = 0; i < 8; i++) {
    let r = random(0, width);
    square(r, 100 * i, r / 5);
  }
}

function mousePressed() {
  redraw();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    redraw();
  }
}
