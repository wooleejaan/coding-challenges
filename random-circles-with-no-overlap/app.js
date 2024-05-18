var circles = [];

function setup() {
  createCanvas(640, 360);

  // 단순히 for문으로 25까지 돌면, 겹칠 경우 원을 그리지 않고 넘어가므로, 25개를 정확히 그리려면 while 문으로 개수를 강제해야 한다.
  while (circles.length < 25) {
    var circle = {
      x: random(width),
      y: random(height),
      r: random(12, 36),
    };

    // 이전 원과 비교해 두 원 사이의 거리가 반지름 합보다 작으면 overlapping이라고 판단한다.
    var overlapping = false;

    var protection = 0;

    for (var j = 0; j < circles.length; j++) {
      var other = circles[j];
      var d = dist(circle.x, circle.y, other.x, other.y);
      if (d < circle.r + other.r) {
        overlapping = true;
        break;
      }
    }

    if (!overlapping) {
      circles.push(circle);
    }

    // 25개의 원을 만들려고 노력하지만,
    // 10000번을 시도해도 안 된다면, 만들지 못한다고 판단한다.
    protection++;
    if (protection > 10000) {
      break;
    }
  }

  for (var i = 0; i < circles.length; i++) {
    fill(255, 0, 150, 100);
    noStroke();
    ellipse(circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
  }
}

function draw() {}
