function start() {
  goTopLeft();
  row1();
  nextRow();
}

// Go to top left corner
function goTopLeft() {
  turnLeft();
  while (frontIsClear()) {
    move();
  }
  turnRight();
}

// turning to next row
function nextRow() {
    if (facingEast()) {
        turnLeft();
        move();
        turnLeft();
    } else {
        turnRight();
        if (frontIsClear()) {
            move();
        }
        turnRight();
    }
}
function row1() {
  paint_32_white();
  paint_4_white();
  paint_2_white();
  paint_1_white();
}

// Need:
// yellow, brown, cyan, white, dark yellow
// 1, 2, 4, 8, 16, 32
// Yellow
function paint_1_yellow() {
  for (var i = 0; i < 1; i++) {
    paint(Color.yellow());
    move();
  }
}
function paint_2_yellow() {
  for (var i = 0; i < 2; i++) {
    paint(Color.yellow());
    move();
  }
}
function paint_4_yellow() {
  for (var i = 0; i < 4; i++) {
    paint(Color.yellow());
    move();
  }
}
function paint_8_yellow() {
  for (var i = 0; i < 8; i++) {
    paint(Color.yellow());
    move();
  }
}
function paint_16_yellow() {
  for (var i = 0; i < 16; i++) {
    paint(Color.yellow());
    move();
  }
}
function paint_32_yellow() {
  for (var i = 0; i < 32; i++) {
    paint(Color.yellow());
    move();
  }
}
// Brown
function paint_1_brown() {
  for (var i = 0; i < 1; i++) {
    paint(Color.brown());
    move();
  }
}
function paint_2_brown() {
  for (var i = 0; i < 2; i++) {
    paint(Color.brown());
    move();
  }
}
function paint_4_brown() {
  for (var i = 0; i < 4; i++) {
    paint(Color.brown());
    move();
  }
}
function paint_8_brown() {
  for (var i = 0; i < 8; i++) {
    paint(Color.brown());
    move();
  }
}
function paint_16_brown() {
  for (var i = 0; i < 16; i++) {
    paint(Color.brown());
    move();
  }
}
function paint_32_brown() {
  for (var i = 0; i < 32; i++) {
    paint(Color.brown());
    move();
  }
}
//cyan
function paint_1_cyan() {
  for (var i = 0; i < 1; i++) {
    paint(Color.cyan());
    move();
  }
}
function paint_2_cyan() {
  for (var i = 0; i < 2; i++) {
    paint(Color.cyan());
    move();
  }
}
function paint_4_cyan() {
  for (var i = 0; i < 4; i++) {
    paint(Color.bue());
    move();
  }
}
function paint_8_cyan() {
  for (var i = 0; i < 8; i++) {
    paint(Color.cyan());
    move();
  }
}
function paint_16_cyan() {
  for (var i = 0; i < 16; i++) {
    paint(Color.cyan());
    move();
  }
}
function paint_32_cyan() {
  for (var i = 0; i < 32; i++) {
    paint(Color.cyan());
    move();
  }
}
//white
function paint_1_white() {
  for (var i = 0; i < 1; i++) {
    move();
  }
}
function paint_2_white() {
  for (var i = 0; i < 2; i++) {
    move();
  }
}
function paint_4_white() {
  for (var i = 0; i < 4; i++) {
    move();
  }
}
function paint_8_white() {
  for (var i = 0; i < 8; i++) {
    move();
  }
}
function paint_16_white() {
  for (var i = 0; i < 16; i++) {
    move();
  }
}
function paint_32_white() {
  for (var i = 0; i < 32; i++) {
    move();
  }
}
// dark yellow / orange
function paint_1_orange() {
  for (var i = 0; i < 1; i++) {
    paint(Color.orange());
    move();
  }
}
function paint_2_orange() {
  for (var i = 0; i < 2; i++) {
    paint(Color.orange());
    move();
  }
}
function paint_4_orange() {
  for (var i = 0; i < 4; i++) {
    paint(Color.orange());
    move();
  }
}
function paint_8_orange() {
  for (var i = 0; i < 8; i++) {
    paint(Color.orange());
    move();
  }
}
function paint_16_orange() {
  for (var i = 0; i < 16; i++) {
    paint(Color.orange());
    move();
  }
}
function paint_32_orange() {
  for (var i = 0; i < 32; i++) {
    paint(Color.brown());
    move();
  }
}
