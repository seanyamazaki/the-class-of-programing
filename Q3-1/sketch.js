// 心臓の鼓動のようなアニメーション
// const cycle = 100; // 1周期のフレーム数（定数）
// let count = 0; // 現在のフレーム数（変数）
// let size = 50;// 初期円の大きさ

// function setup() {
//   createCanvas(200, 200);
// }

// function draw() {
//   background(160, 192, 255);
//   count = (count + 1) % cycle; //
//   if (count < cycle / 2) {
//     size += 1;//
//   } else {
//     size -= 1;
//   }
//   ellipse(width / 2, height / 2, size, size);
// }


const cycle = 100; // 1周期のフレーム数（定数）
let count = 0; // 現在のフレーム数（変数）
let size = 50;//円の直径

function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(160, 192, 255);
    count = (count + 1) % cycle;

  if (keyIsPressed) {
    count = (count + 90 ) % cycle;//さらに90進める
  }

  if (count < cycle / 2) {//前半
    size = 50 + cycle - count;//カウントが増えるほど小さくなる（150から101
  } else {//後半
    size = 50 + count;//カウントが増えるほど大きくなる（100から149
  }
  ellipse(width / 2, height / 2, size, size);//(x, y, width, height)
}

