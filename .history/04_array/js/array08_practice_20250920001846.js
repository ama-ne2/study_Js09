// 画面を更新する度に0-5までのランダムな値が入る
const no = Math.floor(Math.random()*5);

let omikuji =["大吉","中吉","小吉","吉","凶","大凶"];
console.log(omikuji);


if( no == omikuji[0]){
    console.log("大吉ですおめでとう！");
}
else if( no == omikuji[1]){
    console.log("中吉ですラッキー");
}
else if( no == omikuji[2]){
    console.log("小吉です");
}
else if( no == omikuji[3]){
    console.log("コメントに困る吉です");
}
else if( no == omikuji[4]){
    console.log("凶ですアンラッキー");
}
else if( no == omikuji[5]){
    console.log("大凶です残念・・・");
}

console.log(no);
