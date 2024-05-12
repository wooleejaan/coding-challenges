function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220, 0, 200);

  // 출처 : https://www.youtube.com/watch?v=c3TeLi6Ns1E&list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA&index=4
  // a Cartesian coordinate system은 2차원 공간을 설명하는 방법.
  // 2D 캔버스는 데카르트 좌표계를 따르지만, 기본값(좌표계와 픽셀 및 컴퓨터 그래픽스에서 정의하는 표준 방식)이 약간 다르다. 왼쪽 상단이 (0,0)으로 사용된다.

  // rect(x, y, width, height)
  // x,y가 직사각형의 왼쪽 상단의 위치를 결정한다.
  // 때로는, 정사각형의 중심을 설정한 뒤에, 그림을 그려나가는 게 훨씬 편리할 때가 있다. => rectMode(CENTER)
  rect(100, 50, 25, 75, 80);

  line(0, 0, 400, 400);

  // 색상은 컴퓨터에서 어떻게 동작할까?
  // 디지털 색상을 만드는 방법은 Red, Green, Blue를 어느 정도 혼합하는 것. 마치 빛을 섞는 것과 같다.
  // 모든 색상을 더 많이 추가할수록 더 밝아진다.
}
