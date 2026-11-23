// 最終課題を制作しよう


let x, y;     // ボールの位置
let vx, vy;   // ボールの速度
let kx, kvx;  // キーパーの位置と速度
let goal = 0; // 決めた数
let save = 0; // 止められた数
let message = "← か → でシュート";

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height * 0.85;
  vx = 0;
  vy = 0;
  kx = width / 2;
  kvx = 0; 
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  const size = height * 0.1; // キャラクターのサイズ

  // 地面を描く
  const groundY = height * 0.3;
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);

  // ゴールを描く
  noFill();
  stroke(255);
  strokeWeight(6);
  rect(width * 0.2, height * 0.1, width * 0.6, groundY - height * 0.1);
  noStroke();

  // シュート（止まっているときだけ）
  if(vx == 0){
    if(keyIsDown(LEFT_ARROW)){
      vx = -5;
      vy = -15;
      kvx = random([-5, 5]); // キーパーは左右ランダム
    }
    if(keyIsDown(RIGHT_ARROW)){
      vx = 5;
      vy = -15;
      kvx = random([-5, 5]); // キーパーは左右ランダム
    }
  }



  // 位置を更新
  x += vx;
  y += vy;
  kx += kvx;

  // ゴールに着いたら判定
  if(y <= height * 0.2){
    if((vx < 0) == (kvx < 0)){
      save++;
      message = "止められた…";
    } else {
      goal++;
      message = "ゴール！";
    }
    // 元の位置に戻す
    x = width / 2;
    y = height * 0.85;
    vx = 0;
    vy = 0;
    kx = width / 2;
    kvx = 0;
  }

  // キーパーを描く
  fill(0);
  ellipse(kx, groundY - size / 2, size, size);

  // ボールを描く
  fill(255);
  ellipse(x, y, size / 2, size / 2);

  // 点数を表示
  fill(0);
  textSize(32);
  text("ゴール " + goal + "  セーブ " + save, 20, 40);
  text(message, 20, 80);

  // 5本で終わり
  if(goal + save >= 5){
    text("おわり", width / 2, height / 2);
    noLoop();
  }
}