// 슬라이더의 동작을 관리하는 클래스
class DancingSlider {
  constructor(offset) {
    this.slider = createSlider(0, 255, 50); // 슬라이더 생성
    this.offset = offset; // 각 슬라이더의 offset 초기화
  }

  // 슬라이더를 움직이는 메소드
  dance(angle) {
    let x = map(sin(angle + this.offset), -1, 1, 0, 255);
    this.slider.value(x);
  }
}

var sliders = [];
var angle = 0;

function setup() {
  noCanvas();
  for (let i = 0; i < 50; i++) {
    sliders.push(new DancingSlider(i * 0.025)); // 각 슬라이더에 대해 새로운 인스턴스 생성 및 offset 설정
  }
}

function draw() {
  for (let slider of sliders) {
    slider.dance(angle);
  }
  angle += 0.04; // angle의 단위는 radian이다.
}

// var sliders = [];
// var angle = 0;

// function setup() {
//   noCanvas();
//   for (var i = 0; i < 50; i++) {
//     sliders[i] = createSlider(0, 255, 50);
//   }
// }

// function draw() {
//   // 약간의 offset을 부여하면 각각의 slider의 움직임이 달라진다.
//   var offset = 0;
//   // sign wave로 랜덤한 움직임을 만들어낸다.
//   // sign 함수는 y축은 1과 -1 사이를 움직인다. x축은 시간에 따라 움직이는 각도이다.
//   for (var i = 0; i < sliders.length; i++) {
//     var x = map(sin(angle + offset), -1, 1, 0, 255); // 1과 -1 사이의 값을 0~255로 맵핑한다.
//     sliders[i].value(x);
//     // background(sliders[i].value(x)); // slider의 값으로 배경색을 싱크 맞춘다.
//     offset += 0.025;
//   }

//   angle += 0.04; // angle의 단위는 radian이다.
// }
