// Grid(격자)로 원을 효율적으로 배치하는 코드
// (QuadTree는 아님. QuadTree는 2차원 공간을 재귀적으로 4개 노드로 나눠서 공간 탐색 효율성 높이는 건데, 여기에는 그렇게까지 필요없고 Grid만 나눠도 됨)

// 공간을 격자로 나누고, 각 격자에 원이 있는지 없는지 표시
// 새로운 추가 시에 이전 원들을 모두 탐색하는 게 아니라,
// 새 원이 속할 수 있는 격자와 인접한 격자만 확인하면 되므로 효율성 개선
// 격자의 크기는 최대 원의 지름을 기준으로 정하는 게 효율적임.

var circles = []; // 원들을 저장하는 배열
var grid = []; // 격자 정보를 저장하는 배열
var cellSize = 72; // 격자의 크기 (최대 원의 지름) 최대 원의 지름을 기준으로 격자 크기 설정
var cols, rows; // 격자의 열과 행 수

function setup() {
  createCanvas(640, 360);
  // 너비와 높이를 격자 크기로 나누어 열과 행의 수를 계산
  cols = floor(width / cellSize);
  rows = floor(height / cellSize);

  // 격자 초기화
  for (let i = 0; i < cols * rows; i++) {
    grid[i] = [];
  }

  // 원을 25개 배치할 때까지 반복
  while (circles.length < 25) {
    // 새 원 생성
    var circle = createCircle();

    if (!isOverlapping(circle)) {
      placeCircle(circle);
    }

    // 무한 루프 방지
    if (circles.length >= 10000) {
      console.error("Failed to place all circles");
      break;
    }
  }

  // 원 그리기
  drawCircles();
}

// 새 원 생성 함수
function createCircle() {
  return {
    x: random(width),
    y: random(height),
    r: random(12, 36),
  };
}

// 원이 겹치는지 확인하는 함수
function isOverlapping(circle) {
  var col = floor(circle.x / cellSize);
  var row = floor(circle.y / cellSize);

  // 주어진 원의 격자 셀(cell)과 그 주변 셀들을 확인하기 위해 -1에서 시작
  // -1에서 시작해서 1에서 끝남 (주어진 셀 중심으로 상하좌우/대각선 방향을 포함해 총 9개(현재 셀 포함) 탐색)
  for (var i = -1; i <= 1; i++) {
    for (var j = -1; j <= 1; j++) {
      var index = col + i + (row + j) * cols;
      var others = grid[index];
      if (
        others &&
        others.some(
          (other) =>
            dist(circle.x, circle.y, other.x, other.y) < circle.r + other.r
        )
      ) {
        return true;
      }
    }
  }
  return false;
}

// 원 배치 함수
function placeCircle(circle) {
  circles.push(circle);
  var index = floor(circle.x / cellSize) + floor(circle.y / cellSize) * cols;
  grid[index] = grid[index] || [];
  grid[index].push(circle);
}

// 원들을 그리는 함수
function drawCircles() {
  for (var circle of circles) {
    fill(255, 0, 150, 100);
    noStroke();
    ellipse(circle.x, circle.y, circle.r * 2);
  }
}

function draw() {}
