// [Example 1]
// var gravity = 0.1;
// var particle;

// function Particle(x, y) {
//   this.x = x;
//   this.y = y;

//   this.yspeed = 0;

//   // 객체가 이동해 위치를 업데이트할 때마다 history에 기록.
//   this.history = [];

//   this.update = function () {
//     // 모든 작업은 위아래로 이동하므로 y속도에 따라 y를 변경.
//     this.y += this.yspeed;
//     this.yspeed += gravity;

//     // 바닥에 도달했으면.
//     if (this.y > height) {
//       this.y = height;
//       this.yspeed *= -0.9; // 바닥에 도달하면 방향 변경.
//     }

//     // vector는 한 위치에서 다른 위치로 이동하는 방법에 대한 방향을 말함.
//     // 여기서는 particle 자체가 벡터 값에 해당한다. 원점에서 실제로 표시되는 위치로 이동하는 방법.
//     var v = createVector(this.x, this.y);
//     this.history.push(v);
//     // console.log(this.history);
//   };

//   this.show = function () {
//     stroke(0);
//     fill(0, 150);
//     ellipse(this.x, this.y, 24, 24);

//     // 이 프로그램의 메커니즘은 update 후 show이므로 경로를 추적할 수 있음.
//     for (var i = 0; i < this.history.length; i++) {
//       var pos = this.history[i];
//       ellipse(pos.x, pos.y, 8, 8);
//     }
//   };
// }

// function setup() {
//   createCanvas(400, 300);
//   particle = new Particle(100, 100);
// }

// function draw() {
//   background(200);
//   particle.update();
//   particle.show();
// }

// [Example 2]
// var particle;

// function Particle(x, y) {
//   this.x = x;
//   this.y = y;

//   // 객체가 이동해 위치를 업데이트할 때마다 history에 기록.
//   this.history = [];

//   this.update = function () {
//     this.x += random(-5, 5);
//     this.y += random(-5, 5);

//     // vector는 한 위치에서 다른 위치로 이동하는 방법에 대한 방향을 말함.
//     // 여기서는 particle 자체가 벡터 값에 해당한다. 원점에서 실제로 표시되는 위치로 이동하는 방법.
//     var v = createVector(this.x, this.y);
//     this.history.push(v);
//     // console.log(this.history);
//   };

//   this.show = function () {
//     stroke(0);
//     fill(0, 150);
//     ellipse(this.x, this.y, 24, 24);

//     // 이 프로그램의 메커니즘은 update 후 show이므로 경로를 추적할 수 있음.
//     for (var i = 0; i < this.history.length; i++) {
//       var pos = this.history[i];
//       fill(random(255));
//       ellipse(pos.x, pos.y, 8, 8);
//     }
//   };
// }

// function setup() {
//   createCanvas(400, 300);
//   particle = new Particle(100, 100);
// }

// function draw() {
//   background(200);
//   particle.update();
//   particle.show();
// }

// // [Example 2 - a particle]
// var particle;

// function Particle(x, y) {
//   this.x = x;
//   this.y = y;

//   // 객체가 이동해 위치를 업데이트할 때마다 history에 기록.
//   this.history = [];

//   this.update = function () {
//     this.x += random(-10, 10);
//     this.y += random(-10, 10);

//     // vector는 한 위치에서 다른 위치로 이동하는 방법에 대한 방향을 말함.
//     // 여기서는 particle 자체가 벡터 값에 해당한다. 원점에서 실제로 표시되는 위치로 이동하는 방법.
//     var v = createVector(this.x, this.y);
//     this.history.push(v);

//     // 히스토리 관리
//     if (this.history.length > 25) {
//       this.history.splice(0, 1);
//     }
//   };

//   this.show = function () {
//     stroke(0);
//     fill(0, 150);
//     ellipse(this.x, this.y, 24, 24);

//     // 이 프로그램의 메커니즘은 update 후 show이므로 경로를 추적할 수 있음.
//     for (var i = 0; i < this.history.length; i++) {
//       var pos = this.history[i];
//       fill(random(255));
//       ellipse(pos.x, pos.y, i, i);
//     }
//   };
// }

// function setup() {
//   createCanvas(400, 300);
//   particle = new Particle(100, 100);
// }

// function draw() {
//   background(200);
//   particle.update();
//   particle.show();
// }

// [Example 3 - particles]
var particles = [];

function Particle(x, y) {
  this.x = x;
  this.y = y;

  // 객체가 이동해 위치를 업데이트할 때마다 history에 기록.
  this.history = [];

  this.update = function () {
    this.x += random(-10, 10);
    this.y += random(-10, 10);

    // update 시에 무조건 저장만 할 필요가 있을까? 저장하기 직전에 위치를 변경할 수도 있다.
    for (var i = 0; i < this.history.length; i++) {
      this.history[i].x += random(-2, 2);
      this.history[i].y += random(-2, 2);
    }

    // vector는 한 위치에서 다른 위치로 이동하는 방법에 대한 방향을 말함.
    // 여기서는 particle 자체가 벡터 값에 해당한다. 원점에서 실제로 표시되는 위치로 이동하는 방법.
    var v = createVector(this.x, this.y);
    this.history.push(v);

    // 히스토리 관리
    if (this.history.length > 100) {
      this.history.splice(0, 1);
    }
  };

  this.show = function () {
    stroke(0);
    fill(0, 150);
    ellipse(this.x, this.y, 24, 24);

    noFill();
    // history를 보여줄 때 history 전체를 형태로 선으로 이으면 객체의 영역을 만들 수 있다.
    beginShape();
    // 이 프로그램의 메커니즘은 update 후 show이므로 경로를 추적할 수 있음.
    for (var i = 0; i < this.history.length; i++) {
      var pos = this.history[i];
      // fill(random(255));
      // ellipse(pos.x, pos.y, i, i);
      vertex(pos.x, pos.y);
    }
    endShape();
  };
}

function setup() {
  createCanvas(600, 600);
}

function mousePressed() {
  particles.push(new Particle(mouseX, mouseY));
}

function draw() {
  background(200);
  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }

  line(frameCount, 0, frameCount, height);
}
