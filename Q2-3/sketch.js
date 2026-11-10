function setup(){
  createCanvas(270,180);
 noStroke();
 background(255);


const d = height/9; //縦一本の太さ
const blue = color(0,51,160);

//縞を描く
for(let i=0; i<9; i++){
  if(i%2==0){
    fill(blue);//trueのとき青
  }else{
    fill(255);
  }

  rect(0,i*d,width,d);
}
  //十字を描く
  const size = d*5;
  fill(blue);
  rect(0,0,size,size);
  fill(255);
  rect(d*2,0,d,size);
  rect(0,d*2,size,d);
}