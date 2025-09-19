// 画面を更新する度に0-5までのランダムな値が入る
const no = Math.floor(Math.random()*5);

let omikuji =["大吉","中吉","小吉","吉","凶","大凶"];
console.log(omikuji);


if( omikuzi[no] == "大吉"){
    console.log("大吉ですおめでとう！");
}
else if( omikuzi[no] == "中吉"){
    console.log("中吉ですラッキー");
}
else if(omikuzi[no] == "小吉"){
    console.log("小吉です");
}
else if(omikuzi[no] == "吉"){
    console.log("コメントに困る吉です");
}
else if( omikuzi[no] == "凶"){
    console.log("凶ですアンラッキー");
}
else if(omikuzi[no] == "大凶"){
    console.log("大凶です残念・・・");
}

console.log(no);
