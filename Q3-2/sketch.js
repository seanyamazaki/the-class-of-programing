// 2D アニメーションゲームのようなインタラクション
let x, y;
let vx, vy;
const g = 1;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  const size = height * 0.1; // キャラクターのサイズ

  // 地面を描く
  const groundY = height * 0.8;
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);

  // BLANK[1] キャラクターの左右移動
if(keyIsDown(LEFT_ARROW)){
  if (keyIsDown(SHIFT)){
    vx -= 1;}
    else{
      vx = -1;
    }
}

if(keyIsDown(RIGHT_ARROW)){
  if (keyIsDown(SHIFT)){
    vx += 1;}
    else{
      vx = 1;
    }
}
  
// BLANK[2] 重力とジャンプ
vy += g; // 重力を加える
if(y >= groundY - size /  2){
  vy = 0
} 
if(keyIsDown(UP_ARROW) && y >= groundY - size / 2){
  vy = -50; // ジャンプの速度
}


  // 速くなりすぎないように制限
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -50, 50);

  // 位置を更新
  x += vx;
  y += vy;

  // キャラクターを描く
  fill(0);
  ellipse(x, y, size, size);
}