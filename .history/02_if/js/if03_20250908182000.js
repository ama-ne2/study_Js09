const wallet = 3000;

let item = prompt(2000);

item = Number(item);

if(item > wallet){
    console.log("購入することができます");
}
else if(item == wallet){
    console.log("ピッタリです");
}
else{
    console.log("購入することができません");
    
}