# Object Trails (Particle)

Particle(or Object)은 화면 위에서 움직이는 걸 일반적으로 칭하는 용어이다.<br>
이 객체는 현재 위치에 대한 x,y 좌표 값을 저장하는 일을 한다. 또 다르게는 x,y의 history(배열로 저장)를 관리하는 역할도 한다.

핵심 아이디어는 특정 위치에 사물을 그리는 대신, 과거 위치를 저장하고 history로 관리하는 것이다.

-

[Object Trails(a particle) Demo](https://editor.p5js.org/wooleejaan/full/6gW9lW2M1o)

하나의 Particle을 무수히 많이 복제할 수 있다.

[Object Trails(particles) Demo](https://editor.p5js.org/wooleejaan/full/dukmUV4Vu)

history 배열을 다양하게 활용할 수 있다. 단순히 for 문 안에서 그리지 않고 for문 앞뒤로 shape을 만들 수 있다.

- update에서 제거하는 개수 기준을 높일 수록 더 많은 history를 화면에 그릴 수 있다.

```js
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
```

결과적으로 각 객체는 고유한 움직임을 지닐 수 있다.<br>
이때 움직임의 유일한 원동력은 무작성위성이다.

[Final Demo](https://editor.p5js.org/wooleejaan/full/InuJ0ScNE)

### 참고자료

[9.7: Drawing Object Trails - p5.js Tutorial](https://www.youtube.com/watch?v=vqE8DMfOajk)<br>
